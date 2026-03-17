// src/components/sections/HeroSection.tsx
// Reusable shorter hero for inner pages (50vh)
import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumbs?: { label: string; href: string }[];
  badge?: string;
}

export default function HeroSection({ title, subtitle, image, breadcrumbs, badge }: HeroSectionProps) {
  return (
    <section className="relative h-[50vh] min-h-[350px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src={image} alt={title} fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 to-secondary/60" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Breadcrumb */}
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-white/50 text-sm font-mono mb-4" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-2">
                {i > 0 && <span>›</span>}
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-white/80">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
                )}
              </span>
            ))}
          </nav>
        )}
        {badge && (
          <span className="inline-block font-mono text-xs text-primary-light tracking-[0.2em] uppercase mb-3">
            {badge}
          </span>
        )}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/70 text-lg mt-3 max-w-xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
