// =============================================
// DONIAS TRAVELS — Constants
// src/lib/constants.ts
//
// ⚠️ EDIT THIS FILE to update contact info,
// social links, nav items, and company details.
// These values are used across the ENTIRE site.
// =============================================

export const COMPANY = {
  name: "Donias Travels",
  tagline: "Your Journey, Our Expertise",
  parent: "Donias Global Consultants",
  email: "tourism@donias.com.ng",
  phone: "+234 911 149 9923", // ← REPLACE WITH REAL NUMBER
  whatsapp: "2348037162368", // ← REPLACE (no + prefix)
  address: "25, oju olobun close, Victoria Island, Lagos",
  domain: "travels.donias.com.ng",
  year: "2026",
} as const;

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/doniastravels",
  facebook: "https://facebook.com/doniastravels",
  linkedin: "https://linkedin.com/company/donias-global-consultants",
  whatsapp: `https://wa.me/${COMPANY.whatsapp}`,
} as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// NAVIGATION — Single source of truth
// Used by: Navbar, Footer, MobileMenu
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Nigeria 🇳🇬", href: "/discover-nigeria" },
  { label: "Medical Tourism", href: "/medical-tourism" },
  { label: "Study Abroad", href: "/study-abroad" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_SERVICE_LINKS = [
  { label: "Visa Processing", href: "/services#visa-processing" },
  { label: "Flight Booking", href: "/services#flight-booking" },
  { label: "Passport Services", href: "/services#passport-services" },
  { label: "Accommodation", href: "/services#accommodation" },
  { label: "Corporate Travel", href: "/services#corporate-travel" },
  { label: "Pilgrimages", href: "/services#specialized-travel" },
] as const;
