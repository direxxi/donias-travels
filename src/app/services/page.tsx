// src/app/services/page.tsx
// SERVICES PAGE — Full breakdown of every service Donias Travels offers
// Server Component — no interactivity needed at page level

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Plane,
  BookOpen,
  Hotel,
  Map,
  Building2,
  Heart,
  GraduationCap,
  Star,
  CheckCircle2,
  MessageSquare,
  FileCheck,
  CreditCard,
  Luggage,
  ArrowRight,
} from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTABanner from "@/components/sections/CTABanner";
import ServiceInquiryButton from "@/components/forms/ServiceInquiryButton";

export const metadata: Metadata = {
  title: "Our Services | Donias Travels",
  description:
    "Visa processing, flight booking, passport services, corporate travel, medical tourism, and more — all under one roof.",
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SERVICE DETAIL DATA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const SERVICE_DETAILS = [
  {
    id: "visa-processing",
    icon: FileText,
    title: "Visa Processing & Consultation",
    badge: "99% Approval Rate",
    tagline: "Stress-free visa applications — we handle every step.",
    description:
      "Navigating visa requirements is complex and unforgiving. A single missing document can cost you weeks. Our expert visa team has processed thousands of applications with a 99% approval rate. We handle everything from document preparation to follow-ups, so you focus on your trip.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800",
    imageAlt: "Visa documents and passport",
    features: [
      "Tourist, Business, Student, Transit & Work visas",
      "Countries: UK, USA, Canada, Schengen (all EU), UAE, India, China, Australia & more",
      "Complete document checklist & preparation",
      "Application submission, tracking & follow-up",
      "Interview coaching & preparation",
      "Visa rejection appeals & reapplication",
    ],
    highlight: { number: "99%", label: "Visa Approval Rate" },
  },
  {
    id: "flight-booking",
    icon: Plane,
    title: "Flight Ticketing",
    badge: "Domestic & International",
    tagline: "Best-price tickets on every route, every airline.",
    description:
      "Whether you're flying Lagos to Abuja or Lagos to London, we source the best fares across all major airlines. Our corporate accounts and volume partnerships mean you get rates unavailable to the general public.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800",
    imageAlt: "Airplane in flight",
    features: [
      "Domestic routes: Lagos, Abuja, PH, Kano, Enugu, Calabar & more",
      "International flights to all major global destinations",
      "Corporate bulk booking discounts",
      "Flexible date changes & rebooking support",
      "Group travel coordination (10+ passengers)",
      "Business class & premium economy options",
    ],
    highlight: { number: "50+", label: "Airline Partners" },
  },
  {
    id: "passport-services",
    icon: BookOpen,
    title: "Passport Services",
    badge: "Standard & Express",
    tagline: "New passports, renewals, corrections — handled for you.",
    description:
      "Dealing with Nigeria Immigration Service (NIS) can be time-consuming. We act as your liaison, guiding your application through the system efficiently. Standard and express processing available.",
    image: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=800",
    imageAlt: "Nigerian passport",
    features: [
      "New passport acquisition (standard & express)",
      "Passport renewal before expiry",
      "Name/data page correction or amendment",
      "Lost passport replacement",
      "Emergency passport applications",
      "Direct NIS liaison — we handle the queues",
    ],
    highlight: { number: "72hr", label: "Express Processing" },
  },
  {
    id: "personalized-itineraries",
    icon: Map,
    title: "Personalized Itineraries",
    badge: "Custom Travel Plans",
    tagline: "Your trip, designed entirely around you.",
    description:
      "No two travelers are alike. Our itinerary specialists craft day-by-day travel plans based on your interests, pace, and budget — from restaurant recommendations to hidden local gems most tourists never discover.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800",
    imageAlt: "Travel planning with map",
    features: [
      "Custom day-by-day travel schedule",
      "Activities & restaurants curated to your taste",
      "Local guide recommendations & contacts",
      "Transport planning (car hire, trains, ferries)",
      "Maps, tips & offline travel pack",
      "Real-time support throughout your trip",
    ],
    highlight: { number: "2,500+", label: "Itineraries Crafted" },
  },
  {
    id: "accommodation",
    icon: Hotel,
    title: "Accommodation Management",
    badge: "Budget to 5-Star",
    tagline: "Curated stays for every budget and preference.",
    description:
      "We don't just book rooms — we match you with accommodations that fit your style, proximity needs, and budget. From boutique guesthouses to 5-star luxury resorts, we have partnerships across all price points.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    imageAlt: "Luxury hotel room",
    features: [
      "Budget hotels & guesthouses",
      "4 & 5-star luxury hotel bookings",
      "Serviced apartments & Airbnb",
      "Resort & all-inclusive packages",
      "Corporate housing for long-term stays",
      "Group accommodation coordination",
    ],
    highlight: { number: "1,000+", label: "Hotel Partners" },
  },
  {
    id: "corporate-travel",
    icon: Building2,
    title: "Corporate Travel Management",
    badge: "For Businesses",
    tagline: "End-to-end travel management for your entire organization.",
    description:
      "Managing employee travel at scale is a logistical challenge. Our dedicated corporate travel desk handles everything — from booking and policy compliance to expense tracking and emergency support.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800",
    imageAlt: "Corporate business travel",
    features: [
      "Dedicated corporate travel desk & account manager",
      "Employee travel policy compliance monitoring",
      "Consolidated invoicing & expense reporting",
      "Group travel coordination (conferences, retreats)",
      "Emergency rebooking & 24/7 corporate support",
      "Event & conference logistics",
    ],
    highlight: { number: "100+", label: "Corporate Clients" },
  },
  {
    id: "specialized-travel",
    icon: Star,
    title: "Specialized Travel",
    badge: "Pilgrimages, Weddings & More",
    tagline: "From Mecca to Santorini — we plan your most meaningful journeys.",
    description:
      "Some trips are more than just travel — they're milestones. Our specialized travel team brings extra care and expertise to pilgrimages, destination weddings, honeymoons, safari adventures, and luxury cruises.",
    image: "/images/MAKKAH.jpg",
    imageAlt: "Mecca pilgrimage",
    features: [
      "Hajj & Umrah packages (Mecca & Madinah)",
      "Jerusalem pilgrimages & Vatican tours",
      "Destination weddings (Bali, Santorini, Dubai, Zanzibar)",
      "Honeymoon & romantic getaway packages",
      "Safari & adventure travel (Kenya, Tanzania, SA)",
      "Mediterranean & Caribbean cruises",
    ],
    highlight: { number: "500+", label: "Pilgrimages Led" },
  },
  {
    id: "medical-tourism",
    icon: Heart,
    title: "Medical Tourism",
    badge: "World-Class Healthcare Abroad",
    tagline:
      "World-class treatment at affordable costs — every detail handled.",
    description:
      "Seeking medical care abroad doesn't have to be overwhelming. We coordinate with top-rated hospitals in India, Turkey, Thailand, and Germany, handling your visa, flights, accommodation, and hospital liaison.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
    imageAlt: "Medical tourism hospital",
    features: [
      "Hospital selection & appointment booking",
      "Medical visa processing",
      "Post-treatment recovery accommodation",
      "Airport-to-hospital transfers",
      "Dedicated medical travel coordinator",
    ],
    ctaLink: "/medical-tourism",
    ctaText: "Explore Medical Tourism →",
    highlight: { number: "4", label: "Top Medical Destinations" },
  },
  {
    id: "study-abroad",
    icon: GraduationCap,
    title: "Study Abroad Consulting",
    badge: "University Placement",
    tagline: "From application to landing — your complete study abroad guide.",
    description:
      "Getting into a foreign university involves more than just grades. Our study abroad consultants guide you through university selection, application, student visa processing, accommodation, and pre-departure orientation.",
    image:
      "/images/Two Guys From Germany Decided To Explore This Awesome World, Here Is The Best Of What They’ve Seen So Far (30 Pics).jpg",
    imageAlt: "Students at university campus",
    features: [
      "University selection & shortlisting",
      "Application assistance & essay review",
      "Student visa processing (UK, Canada, USA, Germany)",
      "Accommodation search & booking",
      "Pre-departure orientation session",
    ],
    ctaLink: "/study-abroad",
    ctaText: "Explore Study Abroad →",
    highlight: { number: "6", label: "Top Study Destinations" },
  },
];

const PROCESS_STEPS = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Consultation",
    desc: "Tell us your travel needs, dates, budget, and preferences. Free consultation, no obligation.",
  },
  {
    icon: FileCheck,
    step: "02",
    title: "Planning",
    desc: "We create your perfect itinerary, gather documents, and prepare everything you need.",
  },
  {
    icon: CreditCard,
    step: "03",
    title: "Booking",
    desc: "Seamless payment processing, instant confirmation, and all travel documents delivered.",
  },
  {
    icon: Luggage,
    step: "04",
    title: "Travel",
    desc: "Enjoy your hassle-free journey with 24/7 support from our team the entire way.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive travel solutions tailored to every need"
        image="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
        badge="Donias Travels"
      />

      {/* SECTION 2: QUICK OVERVIEW GRID */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-center text-secondary/50 text-sm mb-8">
              Jump to any service:
            </p>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3">
            {SERVICE_DETAILS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-2 bg-white border border-brand-border hover:border-primary hover:text-primary text-secondary text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 group"
              >
                <s.icon size={14} className="text-primary" />
                {s.title.split(" ")[0]} {s.title.split(" ")[1]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICE DETAIL SECTIONS (alternating layout) */}
      {SERVICE_DETAILS.map((service, index) => {
        const isEven = index % 2 === 0;
        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 scroll-mt-24 ${isEven ? "bg-white" : "bg-surface"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Text — swap order on odd rows */}
                <div className={!isEven ? "lg:order-2" : ""}>
                  <ScrollReveal>
                    <span className="inline-block bg-primary/10 text-primary font-mono text-xs font-bold px-3 py-1 rounded-full mb-4">
                      {service.badge}
                    </span>
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold text-secondary mb-3">
                      {service.title}
                    </h2>
                    <p className="text-primary font-semibold mb-4">
                      {service.tagline}
                    </p>
                    <p className="text-secondary/60 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-start gap-3 text-sm text-secondary/70"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-primary flex-shrink-0 mt-0.5"
                          />
                          {feat}
                        </li>
                      ))}
                    </ul>

                    {/* Stat + CTA */}
                    <div className="flex flex-wrap items-center gap-4">
                      {service.ctaLink ? (
                        <Link
                          href={service.ctaLink}
                          className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-all"
                        >
                          {service.ctaText}
                        </Link>
                      ) : (
                        <ServiceInquiryButton serviceName={service.title} />
                      )}
                      <div className="flex items-center gap-2">
                        <p className="font-heading font-bold text-2xl text-primary">
                          {service.highlight.number}
                        </p>
                        <p className="text-secondary/50 text-xs leading-tight">
                          {service.highlight.label}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Image */}
                <div className={!isEven ? "lg:order-1" : ""}>
                  <ScrollReveal delay={0.15}>
                    <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      {/* Decorative accent */}
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* SECTION 4: HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Process"
              title="How It Works"
              subtitle="Four simple steps to your perfect trip"
              light
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-white/15" />

            {PROCESS_STEPS.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div className="text-center relative">
                  {/* Step circle */}
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                      <step.icon size={28} className="text-primary" />
                    </div>
                    <span className="absolute -top-1 -right-1 w-7 h-7 bg-primary rounded-full flex items-center justify-center font-mono text-xs font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <CTABanner
        heading="Ready to Start Your Journey?"
        subtext="Talk to our travel experts today — free consultation, no obligation."
        buttonText="Plan Your Trip"
        buttonHref="/contact"
      />
    </>
  );
}
