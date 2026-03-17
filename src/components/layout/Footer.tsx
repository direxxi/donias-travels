"use client";
// src/components/layout/Footer.tsx
// 4-column footer on dark (#1A1A2E) background
// Server Component — no "use client" needed

import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import {
  COMPANY,
  SOCIAL_LINKS,
  NAV_LINKS,
  FOOTER_SERVICE_LINKS,
} from "@/lib/constants";
import NewsletterForm from "@/components/forms/NewsletterForm";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 bg-white rounded-full p-1">
                <Image
                  src="/logo.png"
                  alt="Donias Travels"
                  fill
                  className="object-contain p-1"
                  sizes="40px"
                />
              </div>
              <div>
                <p className="font-heading font-bold text-lg leading-tight">
                  {COMPANY.name}
                </p>
                <p className="text-primary text-xs font-mono">
                  {COMPANY.tagline}
                </p>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Premium travel consultancy for visas, flights, tours, medical
              tourism, pilgrimages, and study abroad. A {COMPANY.parent}{" "}
              company.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-colors"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-5">
              Our Services
            </h3>
            <ul className="space-y-3">
              {FOOTER_SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact + Newsletter */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-5">
              Get In Touch
            </h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2 text-white/60 hover:text-primary text-sm transition-colors"
                >
                  <Mail size={14} className="text-primary flex-shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-2 text-white/60 hover:text-primary text-sm transition-colors"
                >
                  <Phone size={14} className="text-primary flex-shrink-0" />
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin size={14} className="text-primary flex-shrink-0" />
                {COMPANY.address}
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <p className="text-white/80 text-sm font-medium mb-3">
                Stay in the loop:
              </p>
              <NewsletterForm dark={false} source="Footer" />
            </div>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-xs">
          <p>
            © {year} {COMPANY.name}. A {COMPANY.parent} Company. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Privacy Policy opens a toast/modal — not a dead href */}
            <button
              onClick={() => {
                /* TODO: open privacy modal */
              }}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => {
                /* TODO: open terms modal */
              }}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
