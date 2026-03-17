// src/app/medical-tourism/page.tsx
// MEDICAL TOURISM PAGE

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  DollarSign,
  Clock,
  ShieldCheck,
  HeartPulse,
  MessageSquare,
  FileSearch,
  Plane,
  Stethoscope,
  Home,
  ArrowRight,
  Star,
} from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTABanner from "@/components/sections/CTABanner";
import MedicalInquiryForm from "@/components/forms/MedicalInquiryForm";
import { medicalDestinations } from "@/data/hospitals";

export const metadata: Metadata = {
  title: "Medical Tourism | Donias Travels",
  description:
    "World-class healthcare in India, Turkey, Thailand, and Germany at a fraction of Western costs. We handle everything — visa, flights, hospital, recovery.",
};

const PROCEDURES = [
  { icon: HeartPulse, name: "Cardiac Surgery", savings: "Up to 90% savings" },
  {
    icon: Stethoscope,
    name: "Orthopedics (Hip/Knee)",
    savings: "Up to 80% savings",
  },
  { icon: ShieldCheck, name: "Cancer Treatment", savings: "Up to 75% savings" },
  { icon: HeartPulse, name: "IVF / Fertility", savings: "Up to 70% savings" },
  { icon: Stethoscope, name: "Cosmetic Surgery", savings: "Up to 85% savings" },
  {
    icon: ShieldCheck,
    name: "Dental Procedures",
    savings: "Up to 80% savings",
  },
  {
    icon: HeartPulse,
    name: "Eye Surgery (LASIK)",
    savings: "Up to 75% savings",
  },
  {
    icon: Stethoscope,
    name: "Organ Transplants",
    savings: "Significant savings",
  },
];

const OTHER_DESTINATIONS = [
  {
    name: "Turkey",
    flag: "🇹🇷",
    specialty: "Hair Transplant, Dental, Eye Surgery, Oncology",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600",
  },
  {
    name: "Thailand",
    flag: "🇹🇭",
    specialty: "Cosmetic Surgery, Wellness, Dental, Cardiology",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600",
  },
  {
    name: "UAE",
    flag: "🇦🇪",
    specialty: "Cardiology, Neurology, Oncology, Cosmetics",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600",
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    specialty: "Cancer, Neurology, Orthopedics, Pediatrics",
    image: "/images/ger.jpg",
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    specialty: "Specialized surgery, rare conditions",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600",
  },
  {
    name: "United States",
    flag: "🇺🇸",
    specialty: "Leading research hospitals, clinical trials",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600",
  },
];

const PROCESS_STEPS = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Free Consultation",
    desc: "Share your medical reports and conditions. We consult with leading international hospitals on your behalf.",
  },
  {
    icon: FileSearch,
    step: "02",
    title: "Hospital & Doctor Match",
    desc: "We recommend the best hospital and specialist for your specific medical condition and budget.",
  },
  {
    icon: Plane,
    step: "03",
    title: "Travel Arrangement",
    desc: "Medical visa, flights, accommodation near the hospital, and local transport — all fully coordinated.",
  },
  {
    icon: Stethoscope,
    step: "04",
    title: "Treatment & Recovery",
    desc: "A dedicated medical travel coordinator stays with you through treatment and post-op recovery.",
  },
  {
    icon: Home,
    step: "05",
    title: "Return Home",
    desc: "We coordinate follow-up care with your local doctor and provide your complete treatment records.",
  },
];

const MEDICAL_TESTIMONIALS = [
  {
    quote:
      "I needed urgent cardiac surgery. Donias arranged everything within a week — Apollo Hospital Delhi, visa, flights, accommodation. The surgery was flawless and cost 85% less than the UK estimate.",
    name: "Mr. Babatunde Okonkwo",
    location: "Lagos, Nigeria",
    procedure: "Cardiac Surgery — Apollo Hospital, India",
  },
  {
    quote:
      "My knee replacement in India was handled professionally from start to finish. The Fortis Hospital team was exceptional and Donias was with me every step of the way.",
    name: "Mrs. Ngozi Adeyemi",
    location: "Abuja, Nigeria",
    procedure: "Knee Replacement — Fortis, Delhi",
  },
  {
    quote:
      "IVF treatment in India gave us the miracle we'd been waiting 4 years for. Donias made the process seamless — we're now proud parents of twins!",
    name: "The Eze Family",
    location: "Enugu, Nigeria",
    procedure: "IVF Treatment — Mumbai, India",
  },
];

export default function MedicalTourismPage() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <HeroSection
        title="World-Class Healthcare, Affordable Prices"
        subtitle="Access top hospitals and specialist doctors worldwide. We handle everything from consultation to recovery accommodation."
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Medical Tourism", href: "/medical-tourism" },
        ]}
        badge="Medical Tourism"
      />

      {/* SECTION 2: WHY MEDICAL TOURISM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-3">
                Why Go Abroad?
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-secondary mb-6">
                The same treatment.
                <br />
                <span className="text-primary">A fraction of the cost.</span>
              </h2>
              <p className="text-secondary/65 leading-relaxed mb-8">
                World-class hospitals in India, Turkey, and Thailand offer
                treatments identical in quality to the US or UK — at 60–90%
                lower cost. Combined with Nigeria&apos;s complex local
                healthcare access issues, medical tourism is increasingly the
                smart choice.
              </p>
              <div className="grid grid-cols-2 gap-5">
                {[
                  {
                    Icon: DollarSign,
                    title: "Up to 90% Savings",
                    desc: "vs US/UK/EU healthcare costs",
                  },
                  {
                    Icon: ShieldCheck,
                    title: "JCI-Accredited",
                    desc: "Hospitals meeting global standards",
                  },
                  {
                    Icon: Clock,
                    title: "Zero Waiting",
                    desc: "No NHS-style waiting lists",
                  },
                  {
                    Icon: HeartPulse,
                    title: "Dedicated Support",
                    desc: "Medical concierge throughout",
                  },
                ].map(({ Icon, title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary text-sm">
                        {title}
                      </p>
                      <p className="text-secondary/50 text-xs">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=800"
                  alt="World class hospital"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Cost comparison card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4">
                  <p className="font-semibold text-secondary text-sm mb-3">
                    Cardiac Surgery Cost Comparison
                  </p>
                  <div className="space-y-2">
                    {[
                      {
                        country: "🇺🇸 United States",
                        cost: "$150,000+",
                        width: "100%",
                      },
                      {
                        country: "🇬🇧 United Kingdom",
                        cost: "$80,000+",
                        width: "53%",
                      },
                      {
                        country: "🇮🇳 India",
                        cost: "$8,000–$15,000",
                        width: "10%",
                      },
                    ].map(({ country, cost, width }) => (
                      <div key={country} className="flex items-center gap-3">
                        <span className="text-xs text-secondary/60 w-36 flex-shrink-0">
                          {country}
                        </span>
                        <div className="flex-1 bg-surface rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width }}
                          />
                        </div>
                        <span className="text-xs font-semibold text-primary w-28 text-right">
                          {cost}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: INDIA — PRIMARY DESTINATION */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="🇮🇳 Our #1 Destination"
              title="India: The World's Medical Tourism Capital"
              subtitle="English-speaking doctors, JCI hospitals, world-class outcomes — at Nigerian-friendly prices"
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {medicalDestinations
              .filter((d) => d.country === "India")
              .flatMap((d) => [
                {
                  city: "Delhi",
                  hospitals: ["Apollo Hospital", "Fortis Healthcare", "AIIMS"],
                  image:
                    "/images/Unveiling the Top 10 Travel Agencies in Delhi for Your Ultimate Adventure.jpg",
                },
                {
                  city: "Mumbai",
                  hospitals: [
                    "Kokilaben Hospital",
                    "Nanavati Super Speciality",
                  ],
                  image:
                    "/images/Gallery of Mumbai Architecture City Guide_ 20 Projects in One of India's Most Populous Cities - 22.jpg",
                },
                {
                  city: "Chennai",
                  hospitals: ["Christian Medical College", "Apollo Chennai"],
                  image:
                    "/images/We spent 3 days in the southern Indian city of Chennai but easily could have spent longer! The city is full of great food, lots of things to do and beautiful temples, including this one, the amazing Kapaleeshwarar Temple_ F.jpg",
                },
                {
                  city: "Bangalore",
                  hospitals: ["Manipal Hospital", "Narayana Health"],
                  image: "/images/vidhana soudha bengaluru.jpg",
                },
              ])
              .map((item, i) => (
                <ScrollReveal key={item.city} delay={i * 0.08}>
                  <div className="bg-white rounded-2xl overflow-hidden border border-brand-border hover:shadow-lg hover:border-primary/30 transition-all group">
                    <div className="relative h-36 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={`${item.city} hospital`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent" />
                      <h3 className="absolute bottom-3 left-3 font-heading font-bold text-white">
                        🇮🇳 {item.city}
                      </h3>
                    </div>
                    <div className="p-4">
                      {item.hospitals.map((h) => (
                        <p
                          key={h}
                          className="flex items-center gap-2 text-xs text-secondary/70 py-1 border-b border-brand-border last:border-0"
                        >
                          <CheckCircle2
                            size={12}
                            className="text-primary flex-shrink-0"
                          />{" "}
                          {h}
                        </p>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
          </div>

          {/* Common Procedures */}
          <ScrollReveal>
            <h3 className="font-heading font-bold text-2xl text-secondary mb-6 text-center">
              Common Procedures We Facilitate
            </h3>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {PROCEDURES.map((proc, i) => (
              <ScrollReveal key={proc.name} delay={i * 0.06}>
                <div className="bg-white rounded-xl p-4 border border-brand-border hover:border-primary/30 hover:shadow-md transition-all text-center group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors">
                    <proc.icon
                      size={18}
                      className="text-primary group-hover:text-white transition-colors"
                    />
                  </div>
                  <p className="font-semibold text-secondary text-sm mb-1">
                    {proc.name}
                  </p>
                  <p className="font-mono text-xs text-primary">
                    {proc.savings}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: OTHER DESTINATIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Other Destinations"
              title="Prefer Another Country? We've Got You Covered."
              subtitle="We work with leading hospitals in 6 countries — wherever you need to go"
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {OTHER_DESTINATIONS.map((dest, i) => (
              <ScrollReveal key={dest.name} delay={i * 0.08}>
                <div className="relative rounded-2xl overflow-hidden h-52 group">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-heading font-bold text-lg text-white">
                      {dest.flag} {dest.name}
                    </h3>
                    <p className="text-white/65 text-xs mt-1">
                      {dest.specialty}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Process"
              title="How Medical Tourism Works"
              subtitle="Five steps from diagnosis to recovery — we're with you every step"
              light
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div className="text-center">
                  <div className="relative w-16 h-16 mx-auto mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <step.icon size={24} className="text-primary" />
                    </div>
                    <span className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center font-mono text-xs text-white font-bold">
                      {step.step.slice(1)}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                  {i < PROCESS_STEPS.length - 1 && (
                    <ArrowRight
                      size={16}
                      className="text-white/20 mx-auto mt-4 hidden lg:block"
                    />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: REQUEST FORM */}
      <section id="inquiry" className="py-20 bg-surface scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Free Consultation"
              title="Tell Us About Your Medical Needs"
              subtitle="A medical tourism specialist will contact you within 24 hours — completely free"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-2xl shadow-sm border border-brand-border p-8">
              <MedicalInquiryForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 7: TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Success Stories"
              title="Lives Changed Through Medical Tourism"
            />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MEDICAL_TESTIMONIALS.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-brand-border hover:shadow-md transition-shadow">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={13}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-4xl text-primary font-heading leading-none mb-2">
                    &ldquo;
                  </p>
                  <p className="text-secondary/70 text-sm leading-relaxed mb-5">
                    {t.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-secondary text-sm">
                      {t.name}
                    </p>
                    <p className="text-secondary/50 text-xs">{t.location}</p>
                    <p className="text-primary text-xs font-mono mt-1">
                      {t.procedure}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: CTA */}
      <CTABanner
        heading="Your Health is Our Priority."
        subtext="Let's find the right treatment and the right hospital for you."
        buttonText="Book Free Consultation"
        buttonHref="#inquiry"
      />
    </>
  );
}
