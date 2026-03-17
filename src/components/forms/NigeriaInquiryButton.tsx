"use client";
import { useState } from "react";
import { submitForm } from "@/lib/submit";
import { MapPin, X, Loader2, CheckCircle } from "lucide-react";

interface Props {
  variant?: "primary" | "outline" | "small";
  label?: string;
  packageName?: string;
}

export default function NigeriaInquiryButton({ variant = "primary", label = "Plan My Nigeria Trip", packageName }: Props) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [form, setForm] = useState({ firstName:"", email:"", phone:"", message:"" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await submitForm({ formType: "nigeria", packageName: packageName || "Nigeria Trip", ...form });
      setStatus("success");
    } catch { setStatus("error"); }
  };

  const btnClass = variant === "small"
    ? "bg-nigeria-green hover:bg-nigeria-dark text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
    : variant === "outline"
    ? "border-2 border-white text-white hover:bg-white hover:text-nigeria-green font-semibold px-6 py-3 rounded-lg transition-all"
    : "bg-white text-nigeria-green hover:bg-nigeria-light font-semibold px-6 py-3 rounded-lg transition-colors";

  return (
    <>
      <button onClick={() => setOpen(true)} className={btnClass}>
        <MapPin size={14} className="inline mr-1.5" />{label}
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl p-6" onClick={e => e.stopPropagation()}>
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-secondary/40 hover:text-secondary"><X size={20} /></button>
            {status === "success" ? (
              <div className="text-center py-8">
                <CheckCircle size={40} className="text-nigeria-green mx-auto mb-3" />
                <h3 className="font-heading font-bold text-xl text-secondary mb-2">Enquiry Sent!</h3>
                <p className="text-secondary/60 text-sm">We will be in touch within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="font-heading font-bold text-xl text-secondary mb-1">
                  {packageName ? `Enquire: ${packageName}` : "Plan Your Nigeria Trip"}
                </h3>
                <p className="text-secondary/55 text-sm mb-5">Tell us a bit about yourself and we will craft the perfect itinerary.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input required value={form.firstName} onChange={set("firstName")} placeholder="Your name *"
                    className="w-full px-4 py-3 rounded-lg border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-nigeria-green/30 focus:border-nigeria-green" />
                  <input required type="email" value={form.email} onChange={set("email")} placeholder="Email address *"
                    className="w-full px-4 py-3 rounded-lg border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-nigeria-green/30 focus:border-nigeria-green" />
                  <input value={form.phone} onChange={set("phone")} placeholder="Phone number"
                    className="w-full px-4 py-3 rounded-lg border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-nigeria-green/30 focus:border-nigeria-green" />
                  <textarea rows={3} value={form.message} onChange={set("message")} placeholder="Where in Nigeria? Any special requests?"
                    className="w-full px-4 py-3 rounded-lg border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-nigeria-green/30 focus:border-nigeria-green resize-none" />
                  {status === "error" && <p className="text-red-500 text-sm">Something went wrong. Try again.</p>}
                  <button type="submit" disabled={status === "loading"}
                    className="w-full bg-nigeria-green hover:bg-nigeria-dark disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                    {status === "loading" ? <><Loader2 size={16} className="animate-spin" />Sending...</> : "Send Enquiry"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
