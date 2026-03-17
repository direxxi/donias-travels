// src/data/hospitals.ts
import { Hospital } from "@/types";

export const medicalDestinations: Hospital[] = [
  {
    city: "Mumbai / Delhi",
    country: "India",
    image:
      "/images/Unveiling the Top 10 Travel Agencies in Delhi for Your Ultimate Adventure.jpg",
    hospitals: [
      "Apollo Hospitals",
      "Fortis Healthcare",
      "AIIMS Delhi",
      "Kokilaben Hospital",
    ],
    specialties: [
      "Cardiology",
      "Oncology",
      "Orthopedics",
      "Neurology",
      "IVF / Fertility",
    ],
  },
  {
    city: "Bangkok / Phuket",
    country: "Thailand",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800",
    hospitals: [
      "Bumrungrad International",
      "Bangkok Hospital",
      "Samitivej Hospital",
    ],
    specialties: [
      "Cosmetic Surgery",
      "Dental",
      "Cardiology",
      "Wellness & Spa Recovery",
    ],
  },
  {
    city: "Istanbul / Ankara",
    country: "Turkey",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800",
    hospitals: [
      "Acibadem Hospital Group",
      "Memorial Health Group",
      "Medicana International",
    ],
    specialties: ["Hair Transplant", "Dental", "Eye Surgery", "Oncology"],
  },
  {
    city: "Düsseldorf / Berlin",
    country: "Germany",
    image: "/images/ger.jpg",
    hospitals: [
      "Charité Berlin",
      "Heidelberg University Hospital",
      "LMU Klinikum",
    ],
    specialties: ["Cancer Treatment", "Neurology", "Orthopedics", "Pediatrics"],
  },
];
