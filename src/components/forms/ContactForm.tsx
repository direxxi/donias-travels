"use client";
import { useState } from "react";
import { submitForm } from "@/lib/submit";
import { Send, CheckCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [form, setForm] = useState({ firstName:"", lastName:"", email:"", phone:"", subject:"", message:"" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await submitForm({ formType: "contact", ...form });
      setStatus("success");
    } catch { setStatus("error"); }
  };

  if (status === "success") return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
        <CheckCircle size={32} className="text-green-600" />
      </div>
      <h3 className="font-heading font-bold text-xl text-secondary mb-2">Message Received!</h3>
      <p className="text-secondary/60 text-sm max-w-xs">We will get back to you within 24 hours.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-secondary/60 mb-1.5 uppercase tracking-wide">First Name *</label>
          <input required value={form.firstName} onChange={set("firstName")} placeholder="Temi"
            className="w-full px-4 py-3 rounded-lg border border-brand-border bg-white text-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-secondary/60 mb-1.5 uppercase tracking-wide">Last Name *</label>
          <input required value={form.lastName} onChange={set("lastName")} placeholder="Adeyemi"
            className="w-full px-4 py-3 rounded-lg border border-brand-border bg-white text-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-secondary/60 mb-1.5 uppercase tracking-wide">Email *</label>
        <input required type="email" value={form.email} onChange={set("email")} placeholder="temi@example.com"
          className="w-full px-4 py-3 rounded-lg border border-brand-border bg-white text-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
      </div>
      <div>
        <label className="block text-xs font-semibold text-secondary/60 mb-1.5 uppercase tracking-wide">Phone</label>
        <input value={form.phone} onChange={set("phone")} placeholder="+234 800 000 0000"
          className="w-full px-4 py-3 rounded-lg border border-brand-border bg-white text-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
      </div>
      <div>
        <label className="block text-xs font-semibold text-secondary/60 mb-1.5 uppercase tracking-wide">Subject *</label>
        <select required value={form.subject} onChange={set("subject")}
          className="w-full px-4 py-3 rounded-lg border border-brand-border bg-white text-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all">
          <option value="">Select a subject...</option>
          <option>Visa Processing</option><option>Flight Booking</option>
          <option>Hotel & Accommodation</option><option>Tour Package</option>
          <option>Hajj & Umrah</option><option>Medical Tourism</option>
          <option>Study Abroad</option><option>Corporate Travel</option><option>Other</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-semibold text-secondary/60 mb-1.5 uppercase tracking-wide">Message *</label>
        <textarea required rows={5} value={form.message} onChange={set("message")} placeholder="Tell us how we can help..."
          className="w-full px-4 py-3 rounded-lg border border-brand-border bg-white text-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none" />
      </div>
      {status === "error" && <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>}
      <button type="submit" disabled={status === "loading"}
        className="w-full bg-primary hover:bg-primary-dark disabled:opacity-60 text-white font-semibold py-4 rounded-lg transition-all flex items-center justify-center gap-2">
        {status === "loading" ? <><Loader2 size={18} className="animate-spin" />Sending...</> : <><Send size={18} />Send Message</>}
      </button>
    </form>
  );
}
