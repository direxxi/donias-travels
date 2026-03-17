// src/lib/zoho-submit.ts
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CLIENT-SIDE ZOHO SUBMIT HELPERS
//
// All form components import from here instead of fetching directly.
// This gives one place to change error handling, retry logic, or swap
// the backend implementation without touching every form.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

import type { LeadSource } from "@/lib/zoho.config";

export type { LeadSource };

// ─── Submit a lead to Zoho CRM ────────────────────────────────────────────
export async function submitLead(payload: ZohoLeadPayload): Promise<void> {
  const res = await fetch("/api/zoho/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({ ok: false }));

  if (!data.ok) {
    throw new Error(data.error ?? "Submission failed. Please try again.");
  }
}

// ─── Subscribe an email to Zoho Campaigns newsletter ──────────────────────
export async function subscribeNewsletter(
  email: string,
  source?: string
): Promise<void> {
  const res = await fetch("/api/zoho/newsletter", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, source }),
  });

  const data = await res.json().catch(() => ({ ok: false }));

  if (!data.ok) {
    throw new Error(data.error ?? "Subscription failed. Please try again.");
  }
}
