"use client";
import { useState } from "react";
import { submitForm } from "@/lib/submit";
import { Loader2, CheckCircle } from "lucide-react";

export default function StudyAbroadForm() {
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [form, setForm] = useState({ firstName:"", lastName:"", email:"", phone:"", country:"UK", level:"", course:"", intakeYear:"", notes:"" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await submitForm({ formType: "studyAbroad", ...form });
      setStatus("success");
    } catch { setStatus("error"); }
  };

  if (status === "success") return (
    <div className="text-center py-12">
      <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
      <h3 className="font-heading font-bold text-2xl text-secondary mb-2">Application Received!</h3>
      <p className="text-secondary/60">Our education consultant will reach out within 24 hours.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-secondary/60 mb-1.5 uppercase tracking-wide">First Name *</label>
          <input required value={form.firstName} onChange={set("firstName")} placeholder="First name"
            className="w-full px-4 py-3 rounded-lg border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-secondary/60 mb-1.5 uppercase tracking-wide">Last Name *</label>
          <input required value={form.lastName} onChange={set("lastName")} placeholder="Last name"
            className="w-full px-4 py-3 rounded-lg border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-secondary/60 mb-1.5 uppercase tracking-wide">Email *</label>
        <input required type="email" value={form.email} onChange={set("email")} placeholder="your@email.com"
          className="w-full px-4 py-3 rounded-lg border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
      </div>
      <div>
        <label className="block text-xs font-semibold text-secondary/60 mb-1.5 uppercase tracking-wide">Phone *</label>
        <input required value={form.phone} onChange={set("phone")} placeholder="+234 800 000 0000"
          className="w-full px-4 py-3 rounded-lg border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
      </div>
      <div>
        <label className="block text-xs font-semibold text-secondary/60 mb-1.5 uppercase tracking-wide">Preferred Country</label>
        <select value={form.country} onChange={set("country")}
          className="w-full px-4 py-3 rounded-lg border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white">
          <option>UK</option><option>USA</option><option>Canada</option>
          <option>Australia</option><option>Germany</option><option>UAE</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-secondary/60 mb-1.5 uppercase tracking-wide">Study Level *</label>
          <select required value={form.level} onChange={set("level")}
            className="w-full px-4 py-3 rounded-lg border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white">
            <option value="">Select level</option>
            <option>Undergraduate</option><option>Postgraduate</option>
            <option>PhD</option><option>Short Course</option><option>Language School</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-secondary/60 mb-1.5 uppercase tracking-wide">Intake Year</label>
          <select value={form.intakeYear} onChange={set("intakeYear")}
            className="w-full px-4 py-3 rounded-lg border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white">
            <option value="">Select year</option>
            <option>2025</option><option>2026</option><option>2027</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-secondary/60 mb-1.5 uppercase tracking-wide">Course / Field of Study</label>
        <input value={form.course} onChange={set("course")} placeholder="e.g. Computer Science, MBA, Medicine..."
          className="w-full px-4 py-3 rounded-lg border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
      </div>
      <div>
        <label className="block text-xs font-semibold text-secondary/60 mb-1.5 uppercase tracking-wide">Additional Notes</label>
        <textarea rows={3} value={form.notes} onChange={set("notes")} placeholder="Academic background or specific requirements..."
          className="w-full px-4 py-3 rounded-lg border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none" />
      </div>
      {status === "error" && <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>}
      <button type="submit" disabled={status === "loading"}
        className="w-full bg-primary hover:bg-primary-dark disabled:opacity-60 text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
        {status === "loading" ? <><Loader2 size={18} className="animate-spin" />Submitting...</> : "Submit Application"}
      </button>
    </form>
  );
}
