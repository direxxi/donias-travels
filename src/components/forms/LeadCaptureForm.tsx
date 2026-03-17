"use client";
import { useState } from "react";
import { submitForm } from "@/lib/submit";
import { Search, Loader2, CheckCircle } from "lucide-react";

export default function LeadCaptureForm() {
  const [form, setForm] = useState({ destination:"", travelType:"", when:"", travelers:"1" });
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await submitForm({ formType: "leadCapture", ...form });
      setStatus("success");
    } catch { setStatus("error"); }
  };

  if (status === "success") return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex items-center justify-center gap-3">
      <CheckCircle size={24} className="text-green-400" />
      <p className="text-white font-semibold">Got it! We will reach out with the best options for you.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5">
      <p className="font-mono text-xs text-white/60 uppercase tracking-widest mb-4 text-center">Find the best place</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
        <div>
          <label className="block text-white/60 text-xs mb-1">Where to?</label>
          <input value={form.destination} onChange={set("destination")} placeholder="Type a destination..."
            className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-white/30" />
        </div>
        <div>
          <label className="block text-white/60 text-xs mb-1">Travel Type</label>
          <select value={form.travelType} onChange={set("travelType")}
            className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-white/30">
            <option value="">Select type...</option>
            <option>Holiday</option><option>Business</option>
            <option>Hajj / Umrah</option><option>Medical Tourism</option><option>Study Abroad</option>
          </select>
        </div>
        <div>
          <label className="block text-white/60 text-xs mb-1">When?</label>
          <input type="date" value={form.when} onChange={set("when")}
            className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-white/30" />
        </div>
        <div>
          <label className="block text-white/60 text-xs mb-1">Travelers</label>
          <input type="number" min="1" max="50" value={form.travelers} onChange={set("travelers")}
            className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-white/30" />
        </div>
      </div>
      {status === "error" && <p className="text-red-300 text-xs mb-2">Something went wrong. Try again.</p>}
      <button type="submit" disabled={status === "loading"}
        className="w-full bg-primary hover:bg-primary-dark disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
        {status === "loading" ? <Loader2 size={16} className="animate-spin" /> : <Search size={16} />}
        Search
      </button>
    </form>
  );
}
