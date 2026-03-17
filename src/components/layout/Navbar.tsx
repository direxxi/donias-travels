"use client";
// src/components/layout/Navbar.tsx
// Sticky navbar: transparent on hero → solid white on scroll
// Mobile: hamburger menu with slide-out drawer

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, COMPANY, SOCIAL_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Detect scroll to switch from transparent → solid
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const navBase =
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300";
  const navBg = scrolled
    ? "bg-white shadow-sm border-b border-brand-border"
    : "bg-transparent";

  const linkStyle = (href: string) =>
    `text-[11px] font-semibold tracking-wide transition-colors duration-200 hover:text-primary relative px-1.5 py-1.5 rounded whitespace-nowrap
    ${scrolled ? "text-secondary" : "text-white"}
    ${isActive(href) ? "text-primary after:absolute after:-bottom-0.5 after:left-1.5 after:right-1.5 after:h-0.5 after:bg-primary after:rounded-full" : ""}`;

  return (
    <>
      <nav className={`${navBase} ${navBg}`} role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="Donias Travels"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <div className="hidden sm:block">
                <p className={`font-heading font-bold text-lg leading-tight ${scrolled ? "text-secondary" : "text-white"}`}>
                  {COMPANY.name}
                </p>
                <p className={`font-mono text-xs ${scrolled ? "text-primary" : "text-primary-light"}`}>
                  {COMPANY.tagline}
                </p>
              </div>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className={linkStyle(link.href)}>
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
              <a
                href={`tel:${COMPANY.phone}`}
                className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${scrolled ? "text-secondary hover:text-primary" : "text-white/80 hover:text-white"}`}
              >
                <Phone size={13} />
                <span className="hidden xl:inline">{COMPANY.phone}</span>
              </a>
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary-dark text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-md hover:shadow-primary/25 active:scale-95 whitespace-nowrap"
              >
                Plan Your Trip
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-secondary hover:bg-surface" : "text-white hover:bg-white/10"}`}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile slide-out drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-80 max-w-full bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between p-5 border-b border-brand-border">
          <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <Image src="/logo.png" alt="Donias Travels" fill className="object-contain" sizes="32px" />
            </div>
            <span className="font-heading font-bold text-secondary">{COMPANY.name}</span>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-lg text-secondary hover:bg-surface"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex-1 overflow-y-auto p-5 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive(link.href) ? "bg-primary/10 text-primary" : "text-secondary hover:bg-surface"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Drawer footer CTA */}
        <div className="p-5 border-t border-brand-border space-y-3">
          <a
            href={`tel:${COMPANY.phone}`}
            className="flex items-center gap-2 text-sm text-secondary hover:text-primary"
          >
            <Phone size={16} className="text-primary" />
            {COMPANY.phone}
          </a>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Plan Your Trip
          </Link>
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center border border-primary text-primary font-semibold py-3 rounded-lg hover:bg-primary/5 transition-colors"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </>
  );
}
