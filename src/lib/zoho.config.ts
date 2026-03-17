// src/lib/zoho.config.ts
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ZOHO INTEGRATION CONFIG — SINGLE SOURCE OF TRUTH
//
// All Zoho credentials come from environment variables.
// Set these in your .env.local file (see .env.example).
// NEVER hardcode credentials here — always use process.env.*
//
// HOW TO GET THESE VALUES:
//   CRM:        Zoho CRM → Settings → Developer Space → Web Forms → Create Form
//   Campaigns:  Zoho Campaigns → Signup Forms → Embed Code → Extract POST URL
//   SalesIQ:    Zoho SalesIQ → Settings → Websites → Get Code → Copy <script> src URL
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ─── Zoho CRM WebToLead ──────────────────────────────────────────────────
export const ZOHO_CRM = {
  /** POST endpoint — same for all WebToLead forms */
  ENDPOINT: "https://crm.zoho.com/crm/WebToLeadForm",

  /** Your Zoho Organisation ID — from any WebToLead form's hidden field xnQsjsdp */
  ORG_ID: process.env.ZOHO_CRM_ORG_ID ?? "",

  /** Always "TGVhZHM=" — Zoho's base64 string for "Leads" */
  ACTION_TYPE: "TGVhZHM=",

  /**
   * Each form on the site maps to a separate Zoho Web Form.
   * Create one Web Form per source below in Zoho CRM, then paste
   * the xmIwtLD value from each form's embed code here.
   */
  FORM_IDS: {
    contact:         process.env.ZOHO_FORM_CONTACT         ?? "",
    leadCapture:     process.env.ZOHO_FORM_LEAD_CAPTURE     ?? "",
    packageInquiry:  process.env.ZOHO_FORM_PACKAGE_INQUIRY  ?? "",
    customPackage:   process.env.ZOHO_FORM_CUSTOM_PACKAGE   ?? "",
    serviceInquiry:  process.env.ZOHO_FORM_SERVICE_INQUIRY  ?? "",
    medical:         process.env.ZOHO_FORM_MEDICAL          ?? "",
    studyAbroad:     process.env.ZOHO_FORM_STUDY_ABROAD     ?? "",
    nigeria:         process.env.ZOHO_FORM_NIGERIA          ?? "",
  },

  /**
   * "Return URL" shown to user after Zoho processes the form.
   * In our architecture this is never shown (we use a proxy), but
   * Zoho requires it when creating Web Forms.
   */
  RETURN_URL: process.env.NEXT_PUBLIC_SITE_URL
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/contact`
    : "https://travels.donias.com.ng/contact",
};

// ─── Zoho Campaigns (Newsletter) ─────────────────────────────────────────
export const ZOHO_CAMPAIGNS = {
  /**
   * The POST action URL from your Zoho Campaigns signup form embed code.
   * It looks like: https://maillist-manage.zoho.com/weboptin.zc?...
   *
   * How to get it:
   *   Zoho Campaigns → Mailing Lists → [Your List] → Signup Forms → Embed
   *   Copy the form action URL.
   */
  ENDPOINT: process.env.ZOHO_CAMPAIGNS_ENDPOINT ?? "",

  /**
   * zc_trackCode from the Campaigns signup form embed code.
   * Usually a long alphanumeric string after "zc_trackCode=" in the form HTML.
   */
  TRACK_CODE: process.env.ZOHO_CAMPAIGNS_TRACK_CODE ?? "",

  /**
   * The list key (listsubscribersmail value) from the embed code.
   */
  LIST_KEY: process.env.ZOHO_CAMPAIGNS_LIST_KEY ?? "",
};

// ─── Zoho SalesIQ (Live Chat) ─────────────────────────────────────────────
export const ZOHO_SALESIQ = {
  /**
   * Whether to load the SalesIQ widget.
   * Set NEXT_PUBLIC_SALESIQ_ENABLED=true in .env.local once you have the embed code.
   */
  ENABLED: process.env.NEXT_PUBLIC_SALESIQ_ENABLED === "true",

  /**
   * The full script src URL from SalesIQ embed code.
   * Looks like: https://salesiq.zoho.com/widget/...
   *
   * How to get it:
   *   Zoho SalesIQ → Settings → Websites → Add Website → Get Code
   *   Copy the src attribute of the <script> tag.
   */
  SCRIPT_SRC: process.env.NEXT_PUBLIC_SALESIQ_SCRIPT_SRC ?? "",

  /**
   * Optional: Widget code for programmatic configuration.
   * Paste the $zoho.salesiq.ready function body here if needed.
   */
  WIDGET_CODE: process.env.NEXT_PUBLIC_SALESIQ_WIDGET_CODE ?? "",
};

// ─── Field name mappings (Zoho CRM standard field names) ─────────────────
// These are the field names Zoho CRM expects in WebToLead form submissions.
// If you've created custom fields in CRM, update these to match.
export const ZOHO_FIELDS = {
  firstName:   "First Name",
  lastName:    "Last Name",
  email:       "Email",
  phone:       "Phone",
  subject:     "Lead Source",
  message:     "Description",
  company:     "Company",
  leadSource:  "Lead Source",
};

// ─── Lead source labels (used to tag leads in CRM by page origin) ─────────
export const LEAD_SOURCES = {
  contact:        "Website - Contact Page",
  leadCapture:    "Website - Homepage Hero",
  packageInquiry: "Website - Package Inquiry",
  customPackage:  "Website - Custom Package",
  serviceInquiry: "Website - Service Inquiry",
  medical:        "Website - Medical Tourism",
  studyAbroad:    "Website - Study Abroad",
  nigeria:        "Website - Discover Nigeria",
} as const;

export type LeadSource = keyof typeof LEAD_SOURCES;
