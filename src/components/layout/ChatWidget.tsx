"use client";
// src/components/layout/ChatWidget.tsx
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ZOHO SALESIQ INTEGRATION
//
// MODE 1 — SalesIQ DISABLED (default until you add credentials):
//   Shows a floating button that opens a contact popup with WhatsApp/Email/Phone.
//   This is fully functional for clients to reach you right now.
//
// MODE 2 — SalesIQ ENABLED (set NEXT_PUBLIC_SALESIQ_ENABLED=true):
//   The floating button becomes a no-op (SalesIQ renders its own widget).
//   The SalesIQ script is loaded by src/app/layout.tsx — see that file.
//
// TO ACTIVATE SALESIQ:
//   1. Go to: Zoho SalesIQ → Settings → Websites → Add Website → Get Code
//   2. Copy the script src URL (looks like https://salesiq.zoho.com/widget/...)
//   3. In .env.local add:
//        NEXT_PUBLIC_SALESIQ_ENABLED=true
//        NEXT_PUBLIC_SALESIQ_SCRIPT_SRC=https://salesiq.zoho.com/widget/...
//   4. Restart dev server — SalesIQ widget will load automatically.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

import { useState, useEffect } from "react";
import { MessageCircle, X, Mail, Phone } from "lucide-react";
import { COMPANY, SOCIAL_LINKS } from "@/lib/constants";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [salesIqEnabled, setSalesIqEnabled] = useState(false);

  useEffect(() => {
    // Read env var at runtime (NEXT_PUBLIC_ vars are inlined at build time)
    setSalesIqEnabled(process.env.NEXT_PUBLIC_SALESIQ_ENABLED === "true");
  }, []);

  // When SalesIQ is active, it renders its own widget — hide our placeholder button
  if (salesIqEnabled) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* ── Contact popup card ── */}
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl border border-brand-border w-72 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
          {/* Header */}
          <div className="bg-primary px-5 py-4 flex items-center justify-between">
            <div>
              <h3 className="font-heading font-semibold text-white">Chat with Us 💬</h3>
              <p className="text-white/70 text-xs mt-0.5">Typically replies within 1 hour</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat widget"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X size={16} className="text-white" />
            </button>
          </div>

          {/* Body */}
          <div className="p-5">
            <p className="text-secondary/65 text-sm mb-4">
              Need help planning your trip? Reach us directly:
            </p>

            <div className="space-y-2">
              {/* WhatsApp */}
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-medium text-sm px-4 py-3 rounded-xl transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>

              {/* Email */}
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 w-full bg-surface hover:bg-primary/5 border border-brand-border text-secondary font-medium text-sm px-4 py-3 rounded-xl transition-colors group"
              >
                <Mail size={18} className="text-primary flex-shrink-0" />
                <span className="truncate">{COMPANY.email}</span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-3 w-full bg-surface hover:bg-primary/5 border border-brand-border text-secondary font-medium text-sm px-4 py-3 rounded-xl transition-colors"
              >
                <Phone size={18} className="text-primary flex-shrink-0" />
                {COMPANY.phone}
              </a>
            </div>

            <p className="text-secondary/40 text-xs text-center mt-4">
              Mon–Fri 9AM–6PM · Sat 10AM–3PM
            </p>
          </div>
        </div>
      )}

      {/* ── Floating action button ── */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="relative w-14 h-14 bg-primary hover:bg-primary-dark rounded-full shadow-xl hover:shadow-2xl hover:shadow-primary/40 flex items-center justify-center transition-all duration-200 group"
      >
        {/* Pulse ring */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
        )}
        {open ? (
          <X size={22} className="text-white" />
        ) : (
          <MessageCircle size={22} className="text-white" />
        )}
      </button>
    </div>
  );
}
