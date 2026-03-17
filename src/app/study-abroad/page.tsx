// src/app/study-abroad/page.tsx
// STUDY ABROAD PAGE

import type { Metadata } from "next";
import Image from "next/image";
import {
  GraduationCap,
  FileText,
  Plane,
  DollarSign,
  Home,
  Users,
  CheckCircle2,
  Star,
} from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Counter from "@/components/ui/Counter";
import CTABanner from "@/components/sections/CTABanner";
import StudyAbroadForm from "@/components/forms/StudyAbroadForm";
import { studyAbroadCountries } from "@/data/countries";

export const metadata: Metadata = {
  title: "Study Abroad | Donias Travels",
  description:
    "Study at world-class universities in the UK, Canada, USA, Germany, and more. Expert guidance from application to visa to arrival.",
};

const STUDY_SERVICES = [
  {
    icon: GraduationCap,
    title: "University Selection",
    desc: "Personalized university shortlisting based on your academic profile, career goals, budget, and location preferences.",
    features: [
      "Shortlist of 5–10 best-fit universities",
      "Entry requirement analysis",
      "Ranking & employability research",
    ],
  },
  {
    icon: FileText,
    title: "Application Assistance",
    desc: "Expert guidance on crafting standout applications — from statement of purpose to recommendation letters.",
    features: [
      "Statement of Purpose (SOP) review",
      "Letter of Recommendation (LOR) guidance",
      "Application essay feedback & editing",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Student Visa Processing",
    desc: "End-to-end student visa applications with a 95% success rate across all major study destinations.",
    features: [
      "CAS/offer letter guidance",
      "Financial documentation support",
      "Biometrics & interview prep",
    ],
  },
  {
    icon: DollarSign,
    title: "Scholarship Guidance",
    desc: "We identify scholarship and funding opportunities that match your profile — reducing your financial burden significantly.",
    features: [
      "Government scholarships (Chevening, Commonwealth)",
      "University merit scholarships",
      "Nigerian diaspora grants",
    ],
  },
  {
    icon: Home,
    title: "Pre-Departure Support",
    desc: "Everything you need to prepare for life abroad — accommodation, travel, bank accounts, and orientation.",
    features: [
      "Student accommodation search",
      "Pre-departure checklist",
      "Currency & banking advice",
    ],
  },
  {
    icon: Plane,
    title: "Post-Arrival Support",
    desc: "Our support doesn't end when you board the plane. We help you settle in and thrive in your new city.",
    features: [
      "Airport pickup coordination",
      "City orientation & settling-in",
      "Local SIM & essentials guide",
    ],
  },
];

const STUDY_TESTIMONIALS = [
  {
    quote:
      "Donias guided my daughter through the entire Manchester University application. From shortlisting to the visa interview — they made what seemed impossible feel simple.",
    name: "Mr. Emeka Eze",
    location: "Enugu, Nigeria",
    outcome:
      "Daughter admitted to University of Manchester — MSc Computer Science",
  },
  {
    quote:
      "I got a Chevening Scholarship to study in the UK. Donias helped me write my SOP, prepared me for interviews, and processed my Tier 4 visa. Can't thank them enough!",
    name: "Chiamaka Okafor",
    location: "Lagos, Nigeria",
    outcome: "Chevening Scholar — University of Edinburgh",
  },
  {
    quote:
      "After 3 failed Canadian visa attempts on my own, Donias finally got it approved on the first try. They knew exactly what documentation was missing.",
    name: "Taiwo Adeyemi",
    location: "Abuja, Nigeria",
    outcome: "Currently studying at University of Toronto",
  },
];

export default function StudyAbroadPage() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <HeroSection
        title="Study Abroad with Confidence"
        subtitle="From university selection to visa processing, we guide you every step of the way to a world-class education."
        image="/images/The Top 50 Schools For International Students 2019_ Foreign Enrollment Is Slowing, But It’s Not All Trump(1).jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Study Abroad", href: "/study-abroad" },
        ]}
        badge="Study Abroad Consulting"
      />

      {/* SECTION 2: STATS */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { target: 500, suffix: "+", label: "Students Placed Abroad" },
              { target: 95, suffix: "%", label: "Visa Success Rate" },
              { target: 200, suffix: "+", label: "University Partnerships" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading font-bold text-4xl sm:text-5xl text-white">
                  <Counter target={stat.target} suffix={stat.suffix} />
                </p>
                <p className="text-white/70 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: COUNTRIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Study Destinations"
              title="Countries We Cover"
              subtitle="From the UK to Germany — we have expert knowledge in every major study destination"
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studyAbroadCountries.map((country, i) => (
              <ScrollReveal key={country.name} delay={i * 0.08}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-brand-border hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={country.image}
                      alt={country.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/75 to-transparent" />
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <span className="text-3xl">{country.flag}</span>
                      <h3 className="font-heading font-bold text-white text-lg">
                        {country.name}
                      </h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-secondary/65 text-sm leading-relaxed mb-4">
                      {country.description}
                    </p>
                    <ul className="space-y-1.5">
                      {country.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-xs text-secondary/70"
                        >
                          <CheckCircle2
                            size={12}
                            className="text-primary flex-shrink-0 mt-0.5"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Other countries card */}
            <ScrollReveal delay={0.5}>
              <div className="bg-secondary rounded-2xl p-6 flex flex-col justify-center text-center border border-secondary min-h-[280px]">
                <span className="text-4xl mb-3">🌍</span>
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  Other Countries
                </h3>
                <p className="text-white/55 text-sm mb-1">
                  🇫🇷 France • 🇳🇱 Netherlands
                </p>
                <p className="text-white/55 text-sm mb-4">
                  🇸🇪 Sweden • 🇳🇿 New Zealand & more
                </p>
                <p className="text-white/40 text-xs">
                  Contact us for any destination — we can help.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR SERVICES */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="How We Help"
              title="End-to-End Study Abroad Support"
              subtitle="We guide you from 'I want to study abroad' all the way to arriving at your university"
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STUDY_SERVICES.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 border border-brand-border hover:border-primary/30 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                    <service.icon
                      size={22}
                      className="text-primary group-hover:text-white transition-colors"
                    />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-secondary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-secondary/60 text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <ul className="space-y-1.5">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-xs text-secondary/65"
                      >
                        <CheckCircle2
                          size={11}
                          className="text-primary flex-shrink-0 mt-0.5"
                        />{" "}
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Student Success Stories"
              title="Dreams Turned Into Degrees"
              subtitle="Real students, real results — here's what our clients say"
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STUDY_TESTIMONIALS.map((t, i) => (
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
                      ✅ {t.outcome}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FREE ASSESSMENT FORM */}
      <section id="assessment" className="py-20 bg-surface scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Free Assessment"
              title="Get Your Free Study Abroad Assessment"
              subtitle="Fill in your details — a study abroad advisor will contact you within 24 hours"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-2xl shadow-sm border border-brand-border p-8">
              <StudyAbroadForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 7: CTA */}
      <CTABanner
        heading="Your Dream University is Closer Than You Think."
        subtext="Let us guide you there — free, expert, and proven."
        buttonText="Get Free Assessment"
        buttonHref="#assessment"
      />
    </>
  );
}
