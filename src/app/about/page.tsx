// src/app/about/page.tsx
// ABOUT US PAGE

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Award,
  Heart,
  Lightbulb,
  CheckCircle2,
  Star,
  Quote,
  ArrowRight,
  Users,
  Globe,
  TrendingUp,
  Clock,
} from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Counter from "@/components/ui/Counter";
import CTABanner from "@/components/sections/CTABanner";
import { team } from "@/data/team";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "About Us | Donias Travels",
  description:
    "Learn about Donias Travels — Nigeria's premium travel consultancy. A Donias Global Consultants company built to make world-class travel accessible for every Nigerian.",
};

const VALUES = [
  {
    icon: Shield,
    title: "Trust",
    desc: "We handle your money, your documents, and your travel with complete transparency and integrity. Our clients return because they know we will never let them down.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "From our 99% visa approval rate to our meticulously planned itineraries, we hold ourselves to the highest standard in everything we deliver.",
  },
  {
    icon: Heart,
    title: "Personalized Service",
    desc: "No two travelers are the same. Every client gets a dedicated consultant who learns your needs and crafts solutions around your unique situation.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We embrace technology — from Zoho CRM to digital visa tracking — to give our clients faster, smarter, more transparent service every step of the way.",
  },
];

const TRUST_BADGES = [
  { icon: Users, number: 2500, suffix: "+", label: "Happy Travelers" },
  { icon: Globe, number: 50, suffix: "+", label: "Destinations Covered" },
  { icon: TrendingUp, number: 99, suffix: "%", label: "Visa Success Rate" },
  { icon: Clock, number: 8, suffix: "+", label: "Years of Excellence" },
];

const MILESTONES = [
  {
    year: "2016",
    event:
      "Donias Global Consultants founded in Lagos with a focus on business consulting.",
  },
  {
    year: "2018",
    event:
      "Donias Travels division launched — first clients sent to India for medical tourism.",
  },
  {
    year: "2020",
    event:
      "Expanded pilgrimage services — first Hajj group of 25 pilgrims to Mecca.",
  },
  {
    year: "2022",
    event:
      "Launched Study Abroad consulting — 100+ students placed in UK and Canadian universities.",
  },
  {
    year: "2023",
    event:
      "Reached 1,000 happy travelers milestone. Opened corporate travel desk.",
  },
  {
    year: "2026",
    event: "2,500+ clients served. Operating across all 36 Nigerian states.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <HeroSection
        title="About Donias Travels"
        subtitle="Born from a passion for making travel seamless and accessible for every Nigerian"
        image="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
        badge="Our Story"
      />

      {/* SECTION 2: OUR STORY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <ScrollReveal>
              <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4">
                Our Story
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-secondary mb-6 leading-tight">
                Built for Nigerian
                <br />
                travelers, by people
                <br />
                <span className="text-primary">who understand them.</span>
              </h2>
              <div className="space-y-4 text-secondary/65 leading-relaxed">
                <p>
                  Donias Travels is a division of Donias Global Consultants,
                  born from a deep passion for making travel seamless and truly
                  accessible. We understand the unique challenges Nigerian
                  travelers face — from bewildering visa processes and
                  unreliable agents to the anxiety of navigating international
                  healthcare or universities alone.
                </p>
                <p>
                  That&apos;s why we built something different. A service where
                  a real consultant knows your name, understands your situation,
                  and handles every single detail — so you can focus entirely on
                  the experience ahead.
                </p>
                <p>
                  From our first client in 2018 to over 2,500 happy travelers
                  today, our mission has never changed: to give every Nigerian
                  access to the world, on their terms.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="/services"
                  className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-all group"
                >
                  Our Services
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded-lg transition-all"
                >
                  Get In Touch
                </Link>
              </div>
            </ScrollReveal>

            {/* Image collage */}
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-52 rounded-2xl overflow-hidden">
                    <Image
                      src="/images/HugeDomains_com.jpg"
                      alt="Donias team"
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                  <div className="relative h-36 rounded-2xl overflow-hidden">
                    <Image
                      src="/images/Matsirga waterfalls_ Kaduna.jpg"
                      alt="Travel destination"
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-36 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600"
                      alt="Medical tourism"
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                  <div className="relative h-52 rounded-2xl overflow-hidden">
                    <Image
                      src="/images/MAKKAH.jpg"
                      alt="Pilgrimage"
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: MISSION & VISION */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-5">
                  <Quote size={22} className="text-primary" />
                </div>
                <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-3">
                  Our Mission
                </p>
                <h3 className="font-heading text-2xl font-bold text-white mb-4 leading-snug">
                  &ldquo;To make world-class travel accessible, affordable, and
                  stress-free for every Nigerian.&rdquo;
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  Whether you&apos;re flying economy to Dubai or seeking cancer
                  treatment at Apollo Hospital Delhi — you deserve the same
                  expert guidance, the same meticulous attention, the same
                  unwavering support. That&apos;s what we deliver.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="bg-primary rounded-2xl p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                  <TrendingUp size={22} className="text-white" />
                </div>
                <p className="font-mono text-xs text-white/60 tracking-[0.2em] uppercase mb-3">
                  Our Vision
                </p>
                <h3 className="font-heading text-2xl font-bold text-white mb-4 leading-snug">
                  &ldquo;To be West Africa&apos;s most trusted travel
                  consultancy.&rdquo;
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  Trust is earned in the details — a phone call answered on a
                  Sunday, a visa renewal tracked to the day, a pilgrimage
                  itinerary reviewed by hand. That relentless attention is how
                  we become West Africa&apos;s most trusted name in travel.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR VALUES */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="What We Stand For"
              title="Our Core Values"
              subtitle="Four principles that guide everything we do — for every client, every trip"
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-brand-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                    <value.icon
                      size={22}
                      className="text-primary group-hover:text-white transition-colors"
                    />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-secondary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-secondary/60 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: MILESTONES TIMELINE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Journey"
              title="How We Got Here"
              subtitle="From a small consultancy to 2,500+ happy travelers"
            />
          </ScrollReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[18px] sm:left-1/2 top-0 bottom-0 w-px bg-brand-border" />

            <div className="space-y-8">
              {MILESTONES.map((m, i) => (
                <ScrollReveal key={m.year} delay={i * 0.08}>
                  <div
                    className={`relative flex gap-6 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                  >
                    {/* Content */}
                    <div
                      className={`sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"} pl-10 sm:pl-0`}
                    >
                      <span className="font-mono text-xs font-bold text-primary">
                        {m.year}
                      </span>
                      <p className="text-secondary/70 text-sm leading-relaxed mt-1">
                        {m.event}
                      </p>
                    </div>
                    {/* Dot */}
                    <div className="absolute left-[10px] sm:left-1/2 sm:-translate-x-1/2 top-1 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm" />
                    {/* Spacer for alternating side */}
                    <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TRUST STATS */}
      <section className="py-16 bg-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {TRUST_BADGES.map(({ icon: Icon, number, suffix, label }, i) => (
              <ScrollReveal key={label} delay={i * 0.08}>
                <div>
                  <Icon size={20} className="text-white/50 mx-auto mb-2" />
                  <p className="font-heading font-bold text-4xl text-white">
                    <Counter target={number} suffix={suffix} />
                  </p>
                  <p className="text-white/60 text-sm mt-1">{label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: MEET THE TEAM */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="The People Behind Donias"
              title="Meet Our Team"
              subtitle="Passionate travel experts dedicated to making your journey exceptional"
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden border border-brand-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center">
                  <div className="relative h-56 overflow-hidden bg-surface">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-secondary mb-1">
                      {member.name}
                    </h3>
                    <p className="font-mono text-xs text-primary mb-3">
                      {member.role}
                    </p>
                    <p className="text-secondary/60 text-xs leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Join the team card */}
            <ScrollReveal delay={0.4}>
              <div className="bg-secondary rounded-2xl p-6 flex flex-col justify-center items-center text-center border border-secondary min-h-[320px]">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <Users size={28} className="text-white/60" />
                </div>
                <h3 className="font-heading font-bold text-white mb-2">
                  Join Our Team
                </h3>
                <p className="text-white/50 text-sm mb-5 leading-relaxed">
                  Passionate about travel? We&apos;re always looking for
                  exceptional people to join the Donias family.
                </p>
                <Link
                  href="/contact"
                  className="text-primary text-sm font-semibold hover:text-primary-light flex items-center gap-1 group"
                >
                  Get In Touch
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 8: TESTIMONIALS */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Why Clients Trust Us"
              title="Don't Take Our Word For It"
              subtitle="Real words from real Nigerians who trusted us with their journeys"
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonials.slice(0, 3).map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-brand-border hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star
                        key={j}
                        size={14}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-4xl text-primary font-heading leading-none mb-2">
                    &ldquo;
                  </p>
                  <p className="text-secondary/70 text-sm leading-relaxed flex-1">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3 mt-5 pt-5 border-t border-brand-border">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center font-heading font-bold text-primary text-sm flex-shrink-0">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-secondary text-sm">
                        {t.name}
                      </p>
                      <p className="text-secondary/50 text-xs">{t.location}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Trust badges */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: "✅", label: "IATA Certified Agency" },
                { icon: "🏅", label: "99% Visa Approval Rate" },
                { icon: "🔒", label: "Secure Payments" },
                { icon: "🌍", label: "50+ Countries Covered" },
                { icon: "⭐", label: "5-Star Client Rating" },
                { icon: "📋", label: "Zoho CRM Powered" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 bg-white border border-brand-border text-secondary text-sm font-medium px-4 py-2 rounded-full"
                >
                  <span>{badge.icon}</span>
                  {badge.label}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 9: CTA */}
      <CTABanner
        heading="Ready to Travel with People You Can Trust?"
        subtext="Join 2,500+ Nigerians who chose Donias Travels for their most important journeys."
        buttonText="Plan Your Trip"
        buttonHref="/contact"
      />
    </>
  );
}
