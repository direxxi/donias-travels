"use client";
// src/components/cards/ServiceCard.tsx
import Link from "next/link";
import { Service } from "@/types";
import * as Icons from "lucide-react";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = (Icons as Record<string, React.ElementType>)[service.icon] || Icons.Star;
  return (
    <div className="bg-white rounded-2xl p-6 border border-brand-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
        <Icon size={22} className="text-primary group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="font-heading font-semibold text-lg text-secondary mb-2">{service.title}</h3>
      <p className="text-secondary/60 text-sm leading-relaxed mb-4">{service.description}</p>
      <Link
        href={`/services#${service.slug}`}
        className="text-primary text-sm font-semibold hover:text-primary-dark flex items-center gap-1 group/link"
      >
        Learn More
        <span className="group-hover/link:translate-x-1 transition-transform">→</span>
      </Link>
    </div>
  );
}
