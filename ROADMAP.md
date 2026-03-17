# 🗺️ DONIAS TRAVELS — Build Roadmap & How to Join Everything

## How This Project is Structured

Think of the project like building with LEGO:
- **Foundation** (this phase) = The base plate. Everything else sits on top.
- **Pages** = Individual rooms built on the base.
- **Components** = Reusable LEGO pieces used in multiple rooms.
- **Data files** = The content that fills the rooms.

---

## 📦 PHASE 1 — FOUNDATION (DONE ✅)

All shared infrastructure. Run these commands first:

```bash
# 1. Create the Next.js project
npx create-next-app@latest donias-travels --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd donias-travels

# 2. Install dependencies
npm install framer-motion lucide-react react-hot-toast react-hook-form zod @hookform/resolvers clsx tailwind-merge

# 3. Copy logo to public folder
# → Copy logo.png into: public/logo.png

# 4. Copy all Phase 1 files into their correct locations (see file list below)
```

### Files delivered in Phase 1:
```
tailwind.config.ts              ← Brand colors, fonts, animations
next.config.js                  ← Image domain settings (Unsplash)
src/app/globals.css             ← CSS variables, scrollbar, base styles
src/app/layout.tsx              ← ROOT LAYOUT — Navbar+Footer+Chat on every page
src/types/index.ts              ← TypeScript types for all data
src/lib/constants.ts            ← Company info, nav links, social URLs ← EDIT THIS
src/lib/animations.ts           ← Framer Motion variants
src/lib/utils.ts                ← cn() helper, formatNumber()

--- Layout Components (used on EVERY page) ---
src/components/layout/Navbar.tsx        ← Sticky, transparent→solid on scroll
src/components/layout/Footer.tsx        ← 4-column dark footer
src/components/layout/ChatWidget.tsx    ← Floating chat button (bottom-right)

--- UI Primitives ---
src/components/ui/Button.tsx            ← Primary/Outline/White/Ghost variants
src/components/ui/SectionHeading.tsx    ← Eyebrow + Title + Subtitle
src/components/ui/Modal.tsx             ← Reusable modal overlay
src/components/ui/ScrollReveal.tsx      ← Framer Motion scroll animation
src/components/ui/Counter.tsx           ← Animated number counter

--- Cards ---
src/components/cards/ServiceCard.tsx    ← Service grid card
src/components/cards/PackageCard.tsx    ← Package card with detail+inquiry modals
src/components/cards/TestimonialCard.tsx ← Client review card

--- Sections (used across multiple pages) ---
src/components/sections/HeroSection.tsx    ← Short hero for inner pages
src/components/sections/CTABanner.tsx      ← Red CTA banner
src/components/sections/NewsletterSection.tsx ← Dark newsletter section

--- Forms ---
src/components/forms/LeadCaptureForm.tsx   ← Homepage hero search bar
src/components/forms/ContactForm.tsx       ← General contact/inquiry form
src/components/forms/NewsletterForm.tsx    ← Email subscribe (footer + section)

--- Data (EDIT THESE to update content) ---
src/data/packages.ts      ← 8 travel packages
src/data/services.ts      ← 9 services
src/data/testimonials.ts  ← 6 client reviews
src/data/destinations.ts  ← 12 Nigeria destinations
src/data/team.ts          ← 4 team members
src/data/countries.ts     ← 6 study abroad countries
src/data/hospitals.ts     ← 4 medical tourism destinations
src/data/festivals.ts     ← 6 Nigerian festivals

--- Pages ---
src/app/page.tsx          ← HOMEPAGE (all 8 sections)
```

---

## 📄 PHASE 2 — INNER PAGES (Next batch)

Ask me to build any of these next:

| Page | File | Status |
|------|------|--------|
| Services | `src/app/services/page.tsx` | ⬜ Next |
| Packages | `src/app/packages/page.tsx` | ⬜ Next |
| Discover Nigeria | `src/app/discover-nigeria/page.tsx` | ⬜ Next |
| Medical Tourism | `src/app/medical-tourism/page.tsx` | ⬜ Next |
| Study Abroad | `src/app/study-abroad/page.tsx` | ⬜ Next |
| About Us | `src/app/about/page.tsx` | ⬜ Next |
| Contact | `src/app/contact/page.tsx` | ⬜ Next |

---

## 🔌 HOW THE PIECES CONNECT

### How layout.tsx wraps every page:
```
layout.tsx
  ├── <Navbar />        ← appears automatically on every page
  ├── <main>{children} ← your page.tsx content goes here
  ├── <Footer />        ← appears automatically on every page
  ├── <ChatWidget />    ← floating button on every page
  └── <Toaster />       ← toast notifications available everywhere
```

### How a page imports and uses components:
```tsx
// src/app/services/page.tsx
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";  // ← data file
import ServiceCard from "@/components/cards/ServiceCard";

export default function ServicesPage() {
  return (
    <>
      <HeroSection title="Our Services" image="..." />
      <section>
        {services.map(s => <ServiceCard key={s.slug} service={s} />)}
      </section>
    </>
  );
}
```

### How to update content without touching UI:
- **Change a package price?** → Edit `src/data/packages.ts` only
- **Add a testimonial?** → Add to `src/data/testimonials.ts` only
- **Change phone number?** → Edit `src/lib/constants.ts` only
- **Add a service?** → Add to `src/data/services.ts` only

---

## 🚀 RUNNING THE PROJECT

```bash
npm run dev        # Start dev server → http://localhost:3000
npm run build      # Build for production
npm run start      # Run production build locally
vercel --prod      # Deploy to Vercel
```

---

## ⚙️ FIRST THINGS TO CUSTOMIZE

1. **`src/lib/constants.ts`** — Add real phone number and WhatsApp number
2. **`public/logo.png`** — Already included in the repo (Donias logo)
3. **`src/data/packages.ts`** — Update prices and package details
4. All forms show success toasts but don't submit yet — Zoho integration is Phase 3

---

## 🔮 PHASE 3 — BACKEND INTEGRATION (Later)
- Zoho CRM WebToLead for all contact forms
- Zoho Campaigns for newsletter
- Zoho SalesIQ for real live chat
- All marked with `// BACKEND:` comments in the code
