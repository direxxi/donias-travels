// =============================================
// DONIAS TRAVELS — TypeScript Type Definitions
// src/types/index.ts
// =============================================

export interface Package {
  id: number;
  name: string;
  destination: string;
  category: "leisure" | "pilgrimage" | "medical" | "study" | "adventure" | "domestic";
  duration: string;
  price: string;
  priceNote?: string;
  rating: number;
  image: string;
  featured?: boolean;
  badge?: string;
  highlights: string[];
  includes: string[];
  description: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  slug: string;
  features: string[];
}

export interface Destination {
  id: number;
  name: string;
  state: string;
  region: "southwest" | "southeast" | "south-south" | "north" | "fct";
  category: "nature" | "history" | "beach" | "culture" | "adventure";
  description: string;
  image: string;
}

export interface Festival {
  name: string;
  location: string;
  month: string;
  description: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  rating: number;
  avatar?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Country {
  name: string;
  flag: string;
  highlights: string[];
  description: string;
  image: string;
}

export interface Hospital {
  city: string;
  country: string;
  hospitals: string[];
  specialties: string[];
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}
