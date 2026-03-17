"use client";
// src/app/packages/page.tsx
// PACKAGES PAGE — Filter, search, sort. All package data comes from /data/packages.ts
// To update packages: ONLY edit src/data/packages.ts — never touch this file.

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X, Package } from "lucide-react";
import { packages } from "@/data/packages";
import PackageCard from "@/components/cards/PackageCard";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CustomPackageModal from "@/components/forms/CustomPackageModal";

// Category filter config
const CATEGORIES = [
  { value: "all", label: "All Packages" },
  { value: "leisure", label: "✈️ Leisure" },
  { value: "pilgrimage", label: "🕌 Pilgrimage" },
  { value: "medical", label: "🏥 Medical Tourism" },
  { value: "study", label: "🎓 Study Abroad" },
  { value: "adventure", label: "🧗 Adventure" },
  { value: "domestic", label: "🇳🇬 Domestic" },
];

const SORT_OPTIONS = [
  { value: "default", label: "Featured First" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "duration-asc", label: "Shortest Duration" },
];

// Extract numeric price from strings like "₦750,000"
function numericPrice(price: string): number {
  return parseInt(price.replace(/[^\d]/g, ""), 10) || 0;
}

// Extract nights from duration string like "5 Days / 4 Nights"
function numericNights(duration: string): number {
  const match = duration.match(/(\d+)\s*Night/i);
  return match ? parseInt(match[1]) : 0;
}

export default function PackagesPage() {
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");
  const [search, setSearch] = useState("");
  const [customOpen, setCustomOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = [...packages];

    // Category filter
    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    // Search filter
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.destination.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sort) {
      case "price-asc":
        result.sort((a, b) => numericPrice(a.price) - numericPrice(b.price));
        break;
      case "price-desc":
        result.sort((a, b) => numericPrice(b.price) - numericPrice(a.price));
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "duration-asc":
        result.sort((a, b) => numericNights(a.duration) - numericNights(b.duration));
        break;
      default:
        // Featured first, then by id
        result.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return a.id - b.id;
        });
    }

    return result;
  }, [category, sort, search]);

  const activeCategoryLabel = CATEGORIES.find((c) => c.value === category)?.label || "All";

  return (
    <>
      {/* SECTION 1: HERO */}
      <HeroSection
        title="Travel Packages"
        subtitle="Handcrafted journeys for every kind of traveler"
        image="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Packages", href: "/packages" },
        ]}
        badge="15+ Curated Packages"
      />

      {/* SECTION 2: FILTER BAR */}
      <section className="sticky top-20 z-30 bg-white border-b border-brand-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">

          {/* Desktop: all filters in one row */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Category pills — desktop */}
            <div className="hidden md:flex flex-wrap gap-2 flex-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setCategory(cat.value)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    category === cat.value
                      ? "bg-primary text-white shadow-sm"
                      : "bg-surface text-secondary hover:bg-primary/10 hover:text-primary border border-brand-border"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Mobile: filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 text-sm font-medium text-secondary border border-brand-border px-4 py-2 rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              <SlidersHorizontal size={15} />
              Filter: {activeCategoryLabel}
            </button>

            {/* Search */}
            <div className="relative flex-1 min-w-[200px] max-w-xs ml-auto">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary/40" />
              <input
                type="text"
                placeholder="Search packages..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-brand-border rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary/40 hover:text-secondary">
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-sm border border-brand-border rounded-lg px-3 py-2 bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          {/* Mobile category pills (expanded) */}
          {showFilters && (
            <div className="md:hidden flex flex-wrap gap-2 mt-3 pt-3 border-t border-brand-border">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => { setCategory(cat.value); setShowFilters(false); }}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    category === cat.value
                      ? "bg-primary text-white"
                      : "bg-surface text-secondary border border-brand-border"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SECTION 3: PACKAGES GRID */}
      <section className="py-16 bg-surface min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Results count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-secondary/60 text-sm">
              Showing <strong className="text-secondary">{filtered.length}</strong> package{filtered.length !== 1 ? "s" : ""}
              {category !== "all" && ` in ${activeCategoryLabel}`}
              {search && ` matching "${search}"`}
            </p>
            {(category !== "all" || search) && (
              <button
                onClick={() => { setCategory("all"); setSearch(""); }}
                className="text-xs text-primary hover:text-primary-dark flex items-center gap-1"
              >
                <X size={12} /> Clear filters
              </button>
            )}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((pkg, i) => (
                <ScrollReveal key={pkg.id} delay={Math.min(i * 0.06, 0.3)}>
                  <PackageCard pkg={pkg} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className="text-center py-24">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <Package size={32} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-secondary mb-2">No packages found</h3>
              <p className="text-secondary/55 text-sm mb-6">
                Try adjusting your filters or search term, or request a custom package.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => { setCategory("all"); setSearch(""); }}
                  className="bg-surface border border-brand-border text-secondary font-medium px-5 py-2.5 rounded-lg hover:border-primary hover:text-primary transition-colors text-sm"
                >
                  Clear filters
                </button>
                <button
                  onClick={() => setCustomOpen(true)}
                  className="bg-primary hover:bg-primary-dark text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
                >
                  Request Custom Package
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 4: CUSTOM PACKAGE CTA BANNER */}
      <section className="bg-secondary py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-3">Bespoke Travel</p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Don&apos;t See What You&apos;re Looking For?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              We create fully custom packages tailored to your exact needs, timeline, and budget.
              Tell us your dream trip — we&apos;ll make it happen.
            </p>
            <button
              onClick={() => setCustomOpen(true)}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary/30"
            >
              Request Custom Package →
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* CUSTOM PACKAGE MODAL */}
      <CustomPackageModal />
    </>
  );
}
