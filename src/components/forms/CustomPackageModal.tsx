"use client";
import { useState } from "react";
import { submitForm } from "@/lib/submit";
import { X, Loader2, CheckCircle, Package } from "lucide-react";

interface Props { children?: React.ReactNode; }

export default function CustomPackageModal({ children }: Props) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [form, setForm] = useState({ firstName:"", email:"", phone:"", destination:"", duration:"", budget:"", travelers:"", requirements:"" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await submitForm({ formType: "customPackage", ...form });
      setStatus("success");
    } catch { setStatus("error"); }
  };

  return (
    <>
      <div onClick={() => setOpen(true)}>
        {children || (
          <button className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
            <Package size={16} />Build Custom Package
          </button>
        )}
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative bg-white w-full sm:max-w-lg sm:rounded-2xl shadow-2xl max-h-[92vh] flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-5 border-b border-brand-border flex-shrink-0">
              <div>
                <h3 className="font-heading font-bold text-xl text-secondary">Build Your Custom Package</h3>
                <p className="text-secondary/55 text-sm">Tell us your dream trip and we will make it happen.</p>
              </div>
              <button onClick={() => setOpen(false)} className="text-secondary/40 hover:text-secondary"><X size={20} /></button>
            </div>
            <div className="overflow-y-auto flex-1 p-5">
              {status === "success" ? (
                <div className="text-center py-10">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-xl text-secondary mb-2">Package Request Sent!</h3>
                  <p className="text-secondary/60 text-sm">We will design your custom itinerary and reach out within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input required value={form.firstName} onChange={set("firstName")} placeholder="Your name *"
                    className="w-full px-4 py-3 rounded-lg border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                  <input required type="email" value={form.email} onChange={set("email")} placeholder="Email address *"
                    className="w-full px-4 py-3 rounded-lg border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                  <input value={form.phone} onChange={set("phone")} placeholder="Phone number"
                    className="w-full px-4 py-3 rounded-lg border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                  <input required value={form.destination} onChange={set("destination")} placeholder="Destination(s) *"
                    className="w-full px-4 py-3 rounded-lg border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                  <div className="grid grid-cols-2 gap-3">
                    <select value={form.duration} onChange={set("duration")}
                      className="w-full px-4 py-3 rounded-lg border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white">
                      <option value="">Duration</option>
                      <option>3-5 days</option><option>1 week</option><option>2 weeks</option><option>3+ weeks</option>
                    </select>
                    <select value={form.travelers} onChange={set("travelers")}
                      className="w-full px-4 py-3 rounded-lg border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white">
                      <option value="">Travelers</option>
                      <option>1</option><option>2</option><option>3-5</option><option>6-10</option><option>10+</option>
                    </select>
                  </div>
                  <select value={form.budget} onChange={set("budget")}
                    className="w-full px-4 py-3 rounded-lg border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white">
                    <option value="">Budget per person</option>
                    <option>Under N200,000</option><option>N200,000 - N500,000</option>
                    <option>N500,000 - N1,000,000</option><option>N1,000,000+</option>
                  </select>
                  <textarea rows={4} value={form.requirements} onChange={set("requirements")} placeholder="Special requirements, activities, dietary needs..."
                    className="w-full px-4 py-3 rounded-lg border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none" />
                  {status === "error" && <p className="text-red-500 text-sm">Something went wrong. Try again.</p>}
                  <button type="submit" disabled={status === "loading"}
                    className="w-full bg-primary hover:bg-primary-dark disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                    {status === "loading" ? <><Loader2 size={16} className="animate-spin" />Sending...</> : "Request Custom Package"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
