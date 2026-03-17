"use client";
// src/app/page.tsx — HOMEPAGE
// Note: metadata is handled in layout.tsx since this is a Client Component

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { packages } from "@/data/packages";
import { testimonials } from "@/data/testimonials";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Counter from "@/components/ui/Counter";
import NewsletterSection from "@/components/sections/NewsletterSection";
import CTABanner from "@/components/sections/CTABanner";
import PackageCard from "@/components/cards/PackageCard";
import ServiceCard from "@/components/cards/ServiceCard";
import TestimonialCard from "@/components/cards/TestimonialCard";
import HeroSearchForm from "@/components/forms/LeadCaptureForm";
import { services } from "@/data/services";
import {
  Plane,
  FileText,
  BookOpen,
  Hotel,
  Map,
  Building2,
  Shield,
  Clock,
  Heart,
  Users,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  FileText,
  Plane,
  BookOpen,
  Hotel,
  Map,
  Building2,
  Heart,
  Star: Shield,
  GraduationCap: BookOpen,
};

export default function HomePage() {
  const featuredPackages = packages.filter((p) => p.featured);
  const homeServices = services.slice(0, 6);

  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 1: HERO
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920"
            alt="World travel hero"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/50 to-secondary/80" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-3xl">
            <p className="font-mono text-xs text-primary-light tracking-[0.25em] uppercase mb-6">
              Donias Travels — A Donias Global Consultants Company
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Explore the World,
              <br />
              <span className="text-primary">One Journey</span> at a Time.
            </h1>
            <p className="text-white/75 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
              Premium travel consultancy for visas, flights, tours, medical
              tourism, pilgrimages, and study abroad. We handle everything so
              you don&apos;t have to.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary/30 active:scale-95"
              >
                Plan Your Trip
              </Link>
              <Link
                href="#services"
                className="border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold px-8 py-4 rounded-lg transition-all duration-200"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Floating search bar */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <HeroSearchForm />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 2: TRUST BADGES
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-surface border-y border-brand-border py-8 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
          {[
            "✈️ Air Peace Partner",
            "🤝 Embassy Certified",
            "🏨 Marriott Partner",
            "💊 Apollo Hospitals",
            "🎓 British Council",
            "✈️ Ethiopian Airlines",
            "🌍 IATA Certified",
            "🏥 Fortis Healthcare",
            "✈️ Air Peace Partner",
            "🤝 Embassy Certified",
            "🏨 Marriott Partner",
            "💊 Apollo Hospitals",
          ].map((item, i) => (
            <span
              key={i}
              className="font-mono text-xs text-secondary/50 tracking-wider flex-shrink-0"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 3: SERVICES
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="What We Do"
              title="What We Do Best"
              subtitle="Comprehensive travel solutions tailored to your unique needs and preferences"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeServices.map((service, i) => (
              <ScrollReveal key={service.slug} delay={i * 0.08}>
                <ServiceCard service={service} />
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors group"
            >
              View All Services
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 4: FEATURED PACKAGES
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="packages" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <SectionHeading
                eyebrow="Travel Packages"
                title="Popular Travel Packages"
                subtitle="Curated experiences for unforgettable journeys"
                align="left"
                className="mb-0"
              />
              <Link
                href="/packages"
                className="border border-primary text-primary hover:bg-primary hover:text-white font-semibold px-5 py-2.5 rounded-lg transition-all text-sm flex-shrink-0"
              >
                View All Packages →
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPackages.slice(0, 6).map((pkg, i) => (
              <ScrollReveal key={pkg.id} delay={i * 0.08}>
                <PackageCard pkg={pkg} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 5: WHY CHOOSE US (stats + value props)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="why-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Stats */}
            <ScrollReveal>
              <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4">
                Our Track Record
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-secondary mb-12">
                Numbers that
                <br />
                <span className="text-primary">speak for us.</span>
              </h2>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { target: 2500, suffix: "+", label: "Happy Travelers" },
                  { target: 50, suffix: "+", label: "Destinations Worldwide" },
                  { target: 99, suffix: "%", label: "Visa Success Rate" },
                  { target: 8, suffix: "+", label: "Years of Excellence" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-heading text-4xl font-bold text-primary mb-1">
                      <Counter target={stat.target} suffix={stat.suffix} />
                    </p>
                    <p className="text-secondary/60 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Value props */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                {[
                  {
                    Icon: Shield,
                    title: "Expert Guidance",
                    desc: "Our travel consultants have decades of combined experience across all travel verticals.",
                  },
                  {
                    Icon: Map,
                    title: "End-to-End Service",
                    desc: "From visa application to airport pickup — we handle every single detail for you.",
                  },
                  {
                    Icon: Heart,
                    title: "Personalized Care",
                    desc: "Every trip is custom-crafted to match your unique preferences, schedule, and budget.",
                  },
                  {
                    Icon: Clock,
                    title: "24/7 Support",
                    desc: "Round-the-clock assistance before, during, and after your trip. We're always reachable.",
                  },
                ].map(({ Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-secondary mb-1">
                        {title}
                      </h3>
                      <p className="text-secondary/60 text-sm leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 6: TESTIMONIALS
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="testimonials" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Client Stories"
              title="What Our Clients Say"
              subtitle="Over 2,500 happy travelers can't be wrong"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <TestimonialCard testimonial={t} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 7: DISCOVER NIGERIA CTA BANNER
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="nigeria" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920"
            alt="Nigeria Zuma Rock"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-nigeria-dark/90 to-nigeria-green/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="font-mono text-xs text-white/60 tracking-[0.25em] uppercase mb-4">
              🇳🇬 Right In Your Backyard
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Discover the Beauty of Nigeria
            </h2>
            <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto">
              From Obudu Mountain Resort to Yankari Game Reserve — explore
              Nigeria&apos;s breathtaking destinations.
            </p>
            <Link
              href="/discover-nigeria"
              className="inline-flex items-center gap-2 bg-white text-nigeria-green hover:bg-nigeria-light font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg"
            >
              Explore Nigeria 🇳🇬 →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 8: NEWSLETTER + FINAL CTA
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <NewsletterSection />

      <CTABanner
        heading="Ready to Start Your Journey?"
        subtext="Tell us where you want to go — we'll take care of everything else."
        buttonText="Plan Your Trip Now"
        buttonHref="/contact"
      />
    </>
  );
}
