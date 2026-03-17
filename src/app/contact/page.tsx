"use client";
// src/app/contact/page.tsx
// CONTACT PAGE — "use client" needed for form state + success modal

import { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  MessageCircle,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { COMPANY, SOCIAL_LINKS } from "@/lib/constants";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

// Metadata can't be exported from "use client" — it's set in the parent layout.
// Add this page's title via the layout system or use a separate metadata file.

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
type FormData = z.infer<typeof schema>;

const CONTACT_INFO = [
  {
    icon: Mail,
    title: "Email Us",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    sub: "We reply within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: COMPANY.phone,
    href: `tel:${COMPANY.phone}`,
    sub: "Mon–Fri, 9AM – 6PM",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "25,oju olubun clos, Victoria island, Lagos",
    href: "https://maps.google.com/?q=25+Oju+Olubun+Street+Victoria+Island+Lagos+Nigeria",
    sub: "By appointment preferred",
    external: true,
  },
  {
    icon: Clock,
    title: "Office Hours",
    value: "Mon–Fri: 9AM – 6PM",
    href: null,
    sub: "Saturday: 10AM – 3PM",
  },
];

const SOCIAL = [
  {
    icon: Instagram,
    label: "Instagram",
    href: SOCIAL_LINKS.instagram,
    color: "hover:bg-pink-500",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: SOCIAL_LINKS.facebook,
    color: "hover:bg-blue-600",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: SOCIAL_LINKS.linkedin,
    color: "hover:bg-blue-700",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: SOCIAL_LINKS.whatsapp,
    color: "hover:bg-[#25D366]",
  },
];

export default function ContactPage() {
  const [successOpen, setSuccessOpen] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // BACKEND: Replace with Zoho CRM WebToLead POST request
    // Example:
    // await fetch("https://crm.zoho.com/crm/WebToLeadForm", {
    //   method: "POST",
    //   body: new FormData(formRef.current!)
    // });
    await new Promise((r) => setTimeout(r, 1200));
    setSubmittedName(data.name.split(" ")[0]);
    reset();
    setSuccessOpen(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-brand-border bg-white text-secondary placeholder-secondary/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all";
  const labelClass = "block text-sm font-medium text-secondary mb-1.5";
  const errorClass = "text-xs text-red-500 mt-1.5";

  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 1: HERO
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920"
            alt="Contact Donias Travels"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-secondary/50 to-secondary/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-32 w-full">
          <nav
            className="flex items-center gap-2 text-white/50 text-sm font-mono mb-4"
            aria-label="Breadcrumb"
          >
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <span>›</span>
            <span className="text-white/80">Contact</span>
          </nav>
          <h1 className="font-heading text-5xl sm:text-6xl font-bold text-white">
            Get In Touch
          </h1>
          <p className="text-white/65 text-lg mt-3 max-w-xl">
            We&apos;d love to hear from you. Whether you&apos;re planning a trip
            or just have questions — we&apos;re here.
          </p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 2: CONTACT INFO CARDS
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-12 bg-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CONTACT_INFO.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-brand-border hover:border-primary/40 hover:shadow-md transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                      <item.icon
                        size={20}
                        className="text-primary group-hover:text-white transition-colors"
                      />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-secondary/45 uppercase tracking-wider mb-0.5">
                        {item.title}
                      </p>
                      <p className="font-semibold text-secondary text-sm group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                      <p className="text-secondary/50 text-xs mt-0.5">
                        {item.sub}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-brand-border">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-secondary/45 uppercase tracking-wider mb-0.5">
                        {item.title}
                      </p>
                      <p className="font-semibold text-secondary text-sm">
                        {item.value}
                      </p>
                      <p className="text-secondary/50 text-xs mt-0.5">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 3: CONTACT FORM + MAP
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* FORM */}
            <ScrollReveal>
              <div>
                <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-3">
                  Send a Message
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-secondary mb-2">
                  How can we help you?
                </h2>
                <p className="text-secondary/55 mb-8">
                  Fill in the form and one of our travel experts will be in
                  touch within 24 hours.
                </p>

                {/* BACKEND: Replace form action with Zoho CRM WebToLead URL */}
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Full Name *
                      </label>
                      <input
                        id="name"
                        {...register("name")}
                        placeholder="Your full name"
                        className={inputClass}
                      />
                      {errors.name && (
                        <p className={errorClass}>{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="your@email.com"
                        className={inputClass}
                      />
                      {errors.email && (
                        <p className={errorClass}>{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        placeholder="+234 XXX XXX XXXX"
                        className={inputClass}
                      />
                      {errors.phone && (
                        <p className={errorClass}>{errors.phone.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="subject" className={labelClass}>
                        Subject *
                      </label>
                      <select
                        id="subject"
                        {...register("subject")}
                        className={inputClass}
                      >
                        <option value="">Select a subject...</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Visa Processing">Visa Processing</option>
                        <option value="Flight Booking">Flight Booking</option>
                        <option value="Passport Services">
                          Passport Services
                        </option>
                        <option value="Travel Package">Travel Package</option>
                        <option value="Medical Tourism">Medical Tourism</option>
                        <option value="Study Abroad">Study Abroad</option>
                        <option value="Corporate Travel">
                          Corporate Travel
                        </option>
                        <option value="Pilgrimage">
                          Pilgrimage (Hajj / Umrah)
                        </option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.subject && (
                        <p className={errorClass}>{errors.subject.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      {...register("message")}
                      rows={5}
                      placeholder="Tell us about your travel plans, questions, or how we can help you..."
                      className={inputClass + " resize-none"}
                    />
                    {errors.message && (
                      <p className={errorClass}>{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    loading={isSubmitting}
                    fullWidth
                    size="lg"
                  >
                    Send My Inquiry
                  </Button>

                  <p className="text-xs text-center text-secondary/40">
                    🔒 Your information is private and never shared with third
                    parties.
                  </p>
                </form>
              </div>
            </ScrollReveal>

            {/* MAP + QUICK CONTACT */}
            <ScrollReveal delay={0.15}>
              <div className="space-y-6">
                {/* Map placeholder */}
                {/* BACKEND: Replace this div with Google Maps embed iframe */}
                {/* <iframe src="https://www.google.com/maps/embed?pb=...LAGOS_COORDINATES..." width="100%" height="400" style="border:0;" allowfullscreen loading="lazy"></iframe> */}
                <div className="relative rounded-2xl overflow-hidden h-72 border border-brand-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.721!2d3.4186!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53aec4dd92d%3A0x9e13a1b831f46b4!2sOju%20Olobun%20St%2C%20Victoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
                  />
                  <div className="absolute bottom-4 right-4">
                    <a
                      href="https://maps.google.com/?q=25+Oju+Olobun+Street+Victoria+Island+Lagos+Nigeria"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white text-secondary text-xs font-semibold px-3 py-2 rounded-lg shadow-md hover:shadow-lg hover:text-primary transition-all"
                    >
                      <MapPin size={12} className="text-primary" />
                      Get Directions
                    </a>
                  </div>
                </div>

                {/* Quick contact options */}
                <div className="bg-secondary rounded-2xl p-6 space-y-4">
                  <h3 className="font-heading font-semibold text-white mb-4">
                    Prefer to reach us directly?
                  </h3>
                  <a
                    href={SOCIAL_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20c05e] text-white px-5 py-3 rounded-xl font-semibold text-sm transition-colors"
                  >
                    <MessageCircle size={18} />
                    Chat on WhatsApp
                  </a>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-xl font-medium text-sm transition-colors"
                  >
                    <Phone size={18} className="text-primary" />
                    {COMPANY.phone}
                  </a>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-xl font-medium text-sm transition-colors"
                  >
                    <Mail size={18} className="text-primary" />
                    {COMPANY.email}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 4: SOCIAL MEDIA
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-16 bg-surface border-t border-brand-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-3">
              Follow Us
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-secondary mb-3">
              Stay Connected on Social Media
            </h2>
            <p className="text-secondary/55 mb-8">
              Travel deals, destination guides, client stories, and visa tips —
              all on our socials.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {SOCIAL.map(({ icon: Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex items-center gap-2 bg-white border border-brand-border text-secondary text-sm font-medium px-5 py-3 rounded-xl hover:text-white hover:border-transparent transition-all ${color}`}
                >
                  <Icon size={18} />
                  {label}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SUCCESS MODAL
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <Modal
        isOpen={successOpen}
        onClose={() => setSuccessOpen(false)}
        size="sm"
      >
        <div className="p-8 text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 size={40} className="text-primary" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-secondary mb-2">
            Thank you, {submittedName}!
          </h2>
          <p className="text-secondary/60 mb-2">
            We&apos;ve received your inquiry and our team will respond within{" "}
            <strong className="text-secondary">24 hours</strong>.
          </p>
          <p className="text-secondary/50 text-sm mb-8">
            In the meantime, feel free to browse our{" "}
            <a href="/packages" className="text-primary hover:underline">
              travel packages
            </a>{" "}
            or reach us instantly on{" "}
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              WhatsApp
            </a>
            .
          </p>
          <button
            onClick={() => setSuccessOpen(false)}
            className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-xl transition-colors"
          >
            Done
          </button>
        </div>
      </Modal>
    </>
  );
}
