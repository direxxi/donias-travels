// src/components/ui/SectionHeading.tsx
// Reusable section title + optional subtitle
// Props: eyebrow (small label), title, subtitle, align, light (for dark backgrounds)
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;  // true = white text (for dark section backgrounds)
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  const textAlign = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={cn("max-w-2xl mb-12", textAlign[align], className)}>
      {eyebrow && (
        <p className={cn(
          "font-mono text-xs font-bold tracking-[0.2em] uppercase mb-3",
          light ? "text-primary-light" : "text-primary"
        )}>
          {eyebrow}
        </p>
      )}
      <h2 className={cn(
        "font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4",
        light ? "text-white" : "text-secondary"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-base md:text-lg leading-relaxed",
          light ? "text-white/70" : "text-secondary/60"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
