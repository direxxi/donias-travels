"use client";
import { useState } from "react";
import { submitForm } from "@/lib/submit";
import { Mail, CheckCircle, Loader2 } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await submitForm({ formType: "newsletter", email });
      setStatus("success");
    } catch { setStatus("error"); }
  };

  if (status === "success") return (
    <div className="flex items-center justify-center gap-3 py-3">
      <CheckCircle size={20} className="text-green-400" />
      <span className="text-white font-medium">You are subscribed! Welcome aboard.</span>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input required type="email" value={email} onChange={e => setEmail(e.target.value)}
        placeholder="Enter your email address"
        className="flex-1 px-4 py-3 rounded-lg text-sm bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40" />
      <button type="submit" disabled={status === "loading"}
        className="bg-primary hover:bg-primary-dark disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 flex-shrink-0">
        {status === "loading" ? <Loader2 size={16} className="animate-spin" /> : <Mail size={16} />}
        Subscribe
      </button>
      {status === "error" && <p className="text-red-300 text-xs mt-1">Something went wrong. Try again.</p>}
    </form>
  );
}
