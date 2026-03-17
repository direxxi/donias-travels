"use client";
import { useState } from "react";
import { submitForm } from "@/lib/submit";
import { X, Loader2, CheckCircle } from "lucide-react";

interface Props { serviceName: string; }

export default function ServiceInquiryButton({ serviceName }: Props) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [form, setForm] = useState({ firstName:"", email:"", phone:"", message:"" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await submitForm({ formType: "serviceInquiry", serviceName, ...form });
      setStatus("success");
    } catch { setStatus("error"); }
  };

  return (
    <>
      <button onClick={() => setOpen(true)}
        className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2.5 rounded-lg transition-colors text-sm">
        Get a Quote
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl p-6" onClick={e => e.stopPropagation()}>
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-secondary/40 hover:text-secondary"><X size={20} /></button>
            {status === "success" ? (
              <div className="text-center py-8">
                <CheckCircle size={40} className="text-green-500 mx-auto mb-3" />
                <h3 className="font-heading font-bold text-xl text-secondary mb-2">Enquiry Sent!</h3>
                <p className="text-secondary/60 text-sm">We will get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="font-heading font-bold text-xl text-secondary mb-1">Enquire: {serviceName}</h3>
                <p className="text-secondary/55 text-sm mb-5">Fill in your details and we will send you a personalised quote.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input required value={form.firstName} onChange={set("firstName")} placeholder="Your name *"
                    className="w-full px-4 py-3 rounded-lg border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                  <input required type="email" value={form.email} onChange={set("email")} placeholder="Email address *"
                    className="w-full px-4 py-3 rounded-lg border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                  <input value={form.phone} onChange={set("phone")} placeholder="Phone number"
                    className="w-full px-4 py-3 rounded-lg border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                  <textarea rows={3} value={form.message} onChange={set("message")} placeholder="Any specific requirements?"
                    className="w-full px-4 py-3 rounded-lg border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none" />
                  {status === "error" && <p className="text-red-500 text-sm">Something went wrong. Try again.</p>}
                  <button type="submit" disabled={status === "loading"}
                    className="w-full bg-primary hover:bg-primary-dark disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
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
