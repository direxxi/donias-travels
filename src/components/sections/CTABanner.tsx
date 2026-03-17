"use client";
// src/components/sections/CTABanner.tsx
import Link from "next/link";

interface CTABannerProps {
  heading: string;
  subtext?: string;
  buttonText: string;
  buttonHref?: string;
  onButtonClick?: () => void;
}

export default function CTABanner({ heading, subtext, buttonText, buttonHref, onButtonClick }: CTABannerProps) {
  return (
    <section className="bg-primary py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          {heading}
        </h2>
        {subtext && (
          <p className="text-white/75 text-lg mb-10">{subtext}</p>
        )}
        {buttonHref ? (
          <Link
            href={buttonHref}
            className="inline-flex items-center gap-2 bg-white text-primary hover:bg-primary-light font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg"
          >
            {buttonText} →
          </Link>
        ) : (
          <button
            onClick={onButtonClick}
            className="inline-flex items-center gap-2 bg-white text-primary hover:bg-primary-light font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg"
          >
            {buttonText} →
          </button>
        )}
      </div>
    </section>
  );
}
