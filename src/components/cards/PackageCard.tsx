"use client";
// src/components/cards/PackageCard.tsx
import { useState } from "react";
import Image from "next/image";
import { Star, Clock, MapPin } from "lucide-react";
import { Package } from "@/types";
import Modal from "@/components/ui/Modal";
import ContactForm from "@/components/forms/ContactForm";

export default function PackageCard({ pkg }: { pkg: Package }) {
  const [detailOpen, setDetailOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <>
      <div
        className="bg-white rounded-2xl overflow-hidden border border-brand-border hover:shadow-xl hover:shadow-secondary/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
        onClick={() => setDetailOpen(true)}
      >
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={pkg.image}
            alt={pkg.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {pkg.badge && (
            <span className="absolute top-3 left-3 bg-primary text-white font-mono text-xs font-bold px-3 py-1 rounded-full">
              {pkg.badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <span className="font-mono text-xs text-primary/70 uppercase tracking-wider">
            {pkg.category}
          </span>
          <h3 className="font-heading font-bold text-lg text-secondary mt-1 mb-3 line-clamp-1">
            {pkg.name}
          </h3>
          <div className="flex items-center gap-4 text-sm text-secondary/60 mb-4">
            <span className="flex items-center gap-1">
              <MapPin size={13} />
              {pkg.destination}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={13} />
              {pkg.duration}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-heading font-bold text-xl text-primary">{pkg.price}</p>
              {pkg.priceNote && (
                <p className="text-xs text-secondary/50">{pkg.priceNote}</p>
              )}
            </div>
            <div className="flex items-center gap-1">
              <Star size={13} className="text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-medium text-secondary">{pkg.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <Modal isOpen={detailOpen} onClose={() => setDetailOpen(false)} size="lg">
        <div className="relative h-64">
          <Image src={pkg.image} alt={pkg.name} fill className="object-cover" sizes="768px" />
          {pkg.badge && (
            <span className="absolute top-4 left-4 bg-primary text-white font-mono text-xs font-bold px-3 py-1 rounded-full">
              {pkg.badge}
            </span>
          )}
        </div>
        <div className="p-6">
          <span className="font-mono text-xs text-primary uppercase tracking-wider">{pkg.category}</span>
          <h2 className="font-heading text-2xl font-bold text-secondary mt-1 mb-1">{pkg.name}</h2>
          <p className="text-secondary/60 text-sm mb-4 flex items-center gap-4">
            <span className="flex items-center gap-1"><MapPin size={13} />{pkg.destination}</span>
            <span className="flex items-center gap-1"><Clock size={13} />{pkg.duration}</span>
            <span className="flex items-center gap-1"><Star size={13} className="text-yellow-400 fill-yellow-400" />{pkg.rating}</span>
          </p>
          <p className="text-secondary/70 text-sm leading-relaxed mb-6">{pkg.description}</p>
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-semibold text-secondary text-sm mb-2">Highlights</h4>
              <ul className="space-y-1.5">
                {pkg.highlights.map((h) => (
                  <li key={h} className="text-sm text-secondary/70 flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span> {h}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-secondary text-sm mb-2">What&apos;s Included</h4>
              <ul className="space-y-1.5">
                {pkg.includes.map((inc) => (
                  <li key={inc} className="text-sm text-secondary/70 flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span> {inc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between bg-surface rounded-xl p-4">
            <div>
              <p className="font-heading text-2xl font-bold text-primary">{pkg.price}</p>
              {pkg.priceNote && <p className="text-xs text-secondary/50">{pkg.priceNote}</p>}
            </div>
            <button
              onClick={() => { setDetailOpen(false); setInquiryOpen(true); }}
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Book This Package
            </button>
          </div>
        </div>
      </Modal>

      {/* Inquiry Modal */}
      <Modal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} title={`Inquire: ${pkg.name}`} size="md">
        <div className="p-6">
          <p className="text-secondary/60 text-sm mb-6">
            Interested in <strong>{pkg.name}</strong> ({pkg.destination}) starting from <strong className="text-primary">{pkg.price}</strong>?
            Fill in your details and we&apos;ll contact you within 24 hours.
          </p>
          <ContactForm
            prefilledSubject={`Inquiry about ${pkg.name}`}
            onSuccess={() => setInquiryOpen(false)}
          />
        </div>
      </Modal>
    </>
  );
}
