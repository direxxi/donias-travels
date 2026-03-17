// src/components/cards/TestimonialCard.tsx
import { Star } from "lucide-react";
import { Testimonial } from "@/types";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-sm hover:shadow-md transition-shadow">
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      {/* Quote mark */}
      <p className="text-primary text-4xl font-heading leading-none mb-2">&ldquo;</p>
      <p className="text-secondary/70 text-sm leading-relaxed mb-6">{testimonial.quote}</p>
      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-heading font-bold text-primary text-sm">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-secondary text-sm">{testimonial.name}</p>
          <p className="text-secondary/50 text-xs">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}
