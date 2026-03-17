"use client";
// src/app/discover-nigeria/page.tsx
// DISCOVER NIGERIA — Full client component
// Features: region filter tabs, clickable destination cards with detail modal,
//           curated images, no dead links

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  X,
  TreePine,
  Landmark,
  Waves,
  Users,
  Mountain,
  Calendar,
  ArrowRight,
  Clock,
  Star,
} from "lucide-react";
import { festivals } from "@/data/festivals";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import NigeriaInquiryButton from "@/components/forms/NigeriaInquiryButton";
import NewsletterForm from "@/components/forms/NewsletterForm";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// DESTINATIONS — curated images per category
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const DESTINATIONS = [
  // SOUTHWEST
  {
    id: 1,
    name: "Olumo Rock",
    location: "Abeokuta, Ogun State",
    region: "Southwest",
    category: "history",
    image: "/images/Olumo Rock.jpg",
    description:
      "A massive granite outcrop that served as a fortress for the Egba people during inter-tribal wars. Climb to the top for panoramic views of Abeokuta.",
    highlights: [
      "Ancient fortress caves",
      "Panoramic city views",
      "Guided historical tours",
      "Traditional shrine",
    ],
    bestTime: "Oct – Mar (dry season)",
    duration: "Half day",
  },
  {
    id: 2,
    name: "Nike Art Centre",
    location: "Lekki, Lagos",
    region: "Southwest",
    category: "culture",
    image:
      "/images/NIKE CENTRE FOR ART AND CULTURE (2026) All You Should Know BEFORE You Go (w_ Reviews).jpg",
    description:
      "Nigeria's largest art gallery featuring over 7,000 pieces of contemporary and traditional art, textiles, and cultural artifacts across four floors.",
    highlights: [
      "7,000+ artworks",
      "Live artist workshops",
      "Nigerian textiles & crafts",
      "Photography gallery",
    ],
    bestTime: "Year-round",
    duration: "2–3 hours",
  },
  {
    id: 3,
    name: "Lekki Conservation Centre",
    location: "Lagos",
    region: "Southwest",
    category: "nature",
    image:
      "/images/32 Of The Best Things To Do In Lagos, Nigeria - DIY WITH JOY.jpg",
    description:
      "A 78-hectare nature reserve featuring Africa's longest canopy walkway at 401m, surrounded by wetlands, mangroves, and diverse wildlife.",
    highlights: [
      "Africa's longest canopy walk",
      "Crocodile lake",
      "Bird watching (150+ species)",
      "Wetland tours",
    ],
    bestTime: "Nov – Apr",
    duration: "3–4 hours",
  },
  {
    id: 4,
    name: "Idanre Hills",
    location: "Ondo State",
    region: "Southwest",
    category: "adventure",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    description:
      "A UNESCO World Heritage Site rising 914m with ancient settlements, breathtaking views, and 667 steps carved into the hillside.",
    highlights: [
      "667 carved stone steps",
      "Ancient Yoruba settlements",
      "Breathtaking hilltop views",
      "UNESCO heritage status",
    ],
    bestTime: "Nov – Feb",
    duration: "Full day",
  },
  {
    id: 5,
    name: "Badagry Slave Route",
    location: "Badagry, Lagos",
    region: "Southwest",
    category: "history",
    image:
      "/images/Badagry, Nigeria's slave trade history - Rachel's Ruminations.jpg",
    description:
      "Walk through the historic transatlantic slave trade route and visit Nigeria's first storey building — a powerful and sobering journey through history.",
    highlights: [
      "Point of No Return monument",
      "First storey building in Nigeria",
      "Slave relics museum",
      "Marina waterfront",
    ],
    bestTime: "Oct – Mar",
    duration: "Full day",
  },
  {
    id: 6,
    name: "Freedom Park",
    location: "Lagos Island",
    region: "Southwest",
    category: "culture",
    image:
      "/images/Freedom Park Lagos_ Things To Do At This Park - Trendsenstylez.jpg",
    description:
      "A cultural hub and former colonial prison turned into a world-class arts and events space in the heart of Lagos Island.",
    highlights: [
      "Open-air concert stage",
      "Art exhibitions",
      "Historical prison cells",
      "Food & craft market",
    ],
    bestTime: "Year-round",
    duration: "2–3 hours",
  },
  {
    id: 7,
    name: "Olumirin Waterfalls",
    location: "Erin-Ijesha, Osun State",
    region: "Southwest",
    category: "nature",
    image: "/images/Erin-Ijesha Waterfalls - Wikipedia.jpg",
    description:
      "Seven stunning cascading waterfalls tumbling over cliffs through lush rainforest in the heart of Yoruba land. Each level offers a different experience.",
    highlights: [
      "7 cascading levels",
      "Natural swimming pools",
      "Lush rainforest trail",
      "Picnic areas",
    ],
    bestTime: "May – Sep (flowing season)",
    duration: "Half day",
  },
  {
    id: 8,
    name: "Ikogosi Warm Springs",
    location: "Ekiti State",
    region: "Southwest",
    category: "nature",
    image: "/images/Ikogosi warm springs, Ekiti, Nigeria.jpg",
    description:
      "A natural wonder where warm and cold springs meet and flow side by side without mixing — a phenomenon found in very few places on Earth.",
    highlights: [
      "Warm & cold springs confluence",
      "Resort & spa facilities",
      "Nature walks",
      "Photography spots",
    ],
    bestTime: "Year-round",
    duration: "Half day",
  },
  {
    id: 9,
    name: "Osun-Osogbo Sacred Grove",
    location: "Osogbo, Osun State",
    region: "Southwest",
    category: "culture",
    image: "/images/Osun-Osogbo Sacred Grove.jpg",
    description:
      "A UNESCO World Heritage Site — the last remaining sacred grove of the Yoruba fertility goddess Osun, with sculptures and shrines throughout.",
    highlights: [
      "UNESCO World Heritage",
      "Ancient Yoruba sculptures",
      "Annual Osun Festival (Aug)",
      "Sacred river",
    ],
    bestTime: "Aug (festival season)",
    duration: "3–4 hours",
  },
  // SOUTHEAST
  {
    id: 10,
    name: "Ogbunike Caves",
    location: "Anambra State",
    region: "Southeast",
    category: "history",
    image:
      "/images/You can only find a view like this in Anambra State where Ogbunike cave lies deep within the tropical forest_ Have an adventure and explore it!.jpg",
    description:
      "Ancient subterranean caverns with winding tunnels, streams, and deep spiritual significance to the Igbo people. The caves have seven entrances.",
    highlights: [
      "7 cave entrances",
      "Underground streams",
      "Spiritual significance",
      "Guided cave tours",
    ],
    bestTime: "Oct – Mar",
    duration: "Half day",
  },
  {
    id: 11,
    name: "Ngwo Pine Forest",
    location: "Enugu State",
    region: "Southeast",
    category: "nature",
    image: "/images/HugeDomains_com.jpg",
    description:
      "A serene forest of tall pine trees with a hidden waterfall and natural swimming pools, perfect for nature retreats and weekend getaways.",
    highlights: [
      "Pine tree canopy",
      "Hidden waterfall",
      "Natural swimming pools",
      "Picnic facilities",
    ],
    bestTime: "Year-round",
    duration: "Half day",
  },
  // SOUTH-SOUTH
  {
    id: 12,
    name: "Obudu Mountain Resort",
    location: "Cross River State",
    region: "South-South",
    category: "adventure",
    image: "/images/Obudu Mountain Resort.jpg",
    description:
      "Nigeria's most spectacular mountain resort at 1,576m elevation, with cable car rides, hiking trails, golf, and cool mountain air year-round.",
    highlights: [
      "Cable car rides",
      "Mountain hiking trails",
      "Golf course at altitude",
      "Cool year-round climate",
    ],
    bestTime: "Nov – Mar",
    duration: "2–3 days",
  },
  {
    id: 13,
    name: "Kwa Falls",
    location: "Cross River State",
    region: "South-South",
    category: "nature",
    image: "/images/Kwa Falls in Cross River National Park.jpg",
    description:
      "A spectacular waterfall surrounded by lush tropical forests, accessible by boat and on foot through the Cross River National Park.",
    highlights: [
      "Boat access",
      "Cross River National Park",
      "Tropical rainforest",
      "Wildlife spotting",
    ],
    bestTime: "Jun – Sep",
    duration: "Full day",
  },
  {
    id: 14,
    name: "Agbokim Waterfalls",
    location: "Cross River State",
    region: "South-South",
    category: "nature",
    image: "/images/Agbokim waterfalls_ Cross River State.jpg",
    description:
      "Seven streams tumbling over a cliff into a pool of sparkling water, surrounded by pristine virgin rainforest on the Nigeria-Cameroon border.",
    highlights: [
      "7 separate streams",
      "Virgin rainforest",
      "Swimming pool",
      "Border scenery",
    ],
    bestTime: "Jun – Oct",
    duration: "Full day",
  },
  {
    id: 15,
    name: "Ibeno Beach",
    location: "Akwa Ibom State",
    region: "South-South",
    category: "beach",
    image: "/images/TRAVELS.jpg",
    description:
      "The longest stretch of unbroken coastline in West Africa at 78km — pristine white sands, Atlantic waves, and spectacular sunsets.",
    highlights: [
      "78km of coastline",
      "West Africa's longest beach",
      "Atlantic Ocean surfing",
      "Sunset photography",
    ],
    bestTime: "Nov – Mar",
    duration: "1–2 days",
  },
  {
    id: 16,
    name: "Tinapa Resort",
    location: "Calabar, Cross River State",
    region: "South-South",
    category: "culture",
    image: "/images/Tinapa Business Resort, Calabar, Cross River State.jpg",
    description:
      "Nigeria's pioneering integrated business and leisure resort with a waterpark, cinema, shopping, and entertainment in the cultural capital Calabar.",
    highlights: [
      "Waterpark & pool",
      "Shopping complex",
      "Entertainment centre",
      "Conference facilities",
    ],
    bestTime: "Year-round",
    duration: "1–2 days",
  },
  // NORTH
  {
    id: 17,
    name: "Yankari National Park",
    location: "Bauchi State",
    region: "North",
    category: "adventure",
    image: "/images/15 Best Places to Visit in Nigeria - The Crazy Tourist.jpg",
    description:
      "Nigeria's premier wildlife destination — elephants, hippos, baboons, and the famous Wikki Warm Springs, all within Nigeria's largest national park.",
    highlights: [
      "Elephant & hippo sightings",
      "Wikki Warm Springs",
      "140+ bird species",
      "Safari game drives",
    ],
    bestTime: "Nov – Mar (dry season)",
    duration: "2–3 days",
  },
  {
    id: 18,
    name: "Zuma Rock",
    location: "Niger State",
    region: "North",
    category: "nature",
    image: "/images/AFRICA IS HOME.jpg",
    description:
      "A 300m-tall monolith standing guard at the entrance to Abuja — so iconic it appears on the ₦100 note. Known as the 'Gateway to Abuja'.",
    highlights: [
      "300m granite monolith",
      "Featured on ₦100 note",
      "Gateway to Abuja",
      "Photography landmark",
    ],
    bestTime: "Oct – Mar",
    duration: "2–3 hours",
  },
  {
    id: 19,
    name: "Gurara Falls",
    location: "Niger State",
    region: "North",
    category: "nature",
    image:
      "/images/Gurara Water Falls (2026) - All You MUST Know Before You Go (with Reviews).jpg",
    description:
      "One of Nigeria's most visited waterfalls just 100km from Abuja — perfect for family picnics, photography, and day trips from the capital.",
    highlights: [
      "100km from Abuja",
      "Wide waterfall curtain",
      "Picnic facilities",
      "Swimming pools below",
    ],
    bestTime: "Jul – Oct (peak flow)",
    duration: "Half day",
  },
  {
    id: 20,
    name: "Kajuru Castle",
    location: "Kaduna State",
    region: "North",
    category: "history",
    image:
      "/images/Kajuru Castle (2026) - All You MUST Know Before You Go (with Reviews & Photos).jpg",
    description:
      "A medieval German-style castle perched on a hilltop in the Nigerian savannah — one of the most unexpected and photographed buildings in Nigeria.",
    highlights: [
      "Medieval architecture",
      "Hilltop panoramic views",
      "Overnight accommodation",
      "Unique photo experience",
    ],
    bestTime: "Oct – Mar",
    duration: "Overnight stay",
  },
  {
    id: 21,
    name: "Farin Ruwa Falls",
    location: "Nasarawa State",
    region: "North",
    category: "adventure",
    image:
      "/images/Farin Ruwa Waterfalls Tour _ Nasarawa Sightseeing Packages - Nigeria Tour.jpg",
    description:
      "One of Nigeria's tallest and most powerful waterfalls, requiring a scenic multi-stream hike to reach the thundering 150m cascade.",
    highlights: [
      "150m drop",
      "Multi-stream hike",
      "Unspoiled wilderness",
      "Northern Nigeria hidden gem",
    ],
    bestTime: "Aug – Oct",
    duration: "Full day",
  },
  {
    id: 22,
    name: "Sukur Cultural Landscape",
    location: "Adamawa State",
    region: "North",
    category: "history",
    image: "/images/Beautiful Turkana.jpg",
    description:
      "A UNESCO World Heritage Site — an ancient hilltop chiefdom of the Sukur people with remarkable terraced iron-smelting ruins and palace.",
    highlights: [
      "UNESCO World Heritage",
      "Ancient iron-smelting furnaces",
      "Palace of the Hidi",
      "Mountain terracing",
    ],
    bestTime: "Oct – Feb",
    duration: "Full day",
  },
  {
    id: 23,
    name: "Gashaka-Gumti National Park",
    location: "Taraba State",
    region: "North",
    category: "adventure",
    image: "/images/River in Gashaka Gumti National Park_.jpg",
    description:
      "Nigeria's largest national park at over 6,400 sq km — with Nigeria's highest peak (Chappal Waddi), chimpanzees, lions, and 500+ bird species.",
    highlights: [
      "Nigeria's largest park",
      "Chappal Waddi peak (2,419m)",
      "Chimpanzee sanctuary",
      "500+ bird species",
    ],
    bestTime: "Nov – Mar",
    duration: "3–5 days",
  },
  {
    id: 24,
    name: "Kano City Walls & Emir's Palace",
    location: "Kano State",
    region: "North",
    category: "culture",
    image: "/images/Emir Palace Zaria, Nigeria.jpg",
    description:
      "Ancient city walls dating back to 1095 AD and the magnificent palace of the Emir of Kano — the heart of Northern Nigeria's Hausa culture.",
    highlights: [
      "1,000-year-old city walls",
      "Emir's Palace tours",
      "Kano ancient dye pits",
      "Kurmi Market",
    ],
    bestTime: "Oct – Mar",
    duration: "Full day",
  },
  {
    id: 25,
    name: "Matsirga Waterfalls",
    location: "Kaduna State",
    region: "North",
    category: "nature",
    image: "/images/Matsirga waterfalls_ Kaduna.jpg",
    description:
      "A hidden gem waterfall surrounded by rocky terrain and natural pools deep in Kaduna State — perfect for adventurous weekend escapes.",
    highlights: [
      "Rocky terrain hiking",
      "Natural swimming pools",
      "Off-the-beaten-path",
      "Photography spot",
    ],
    bestTime: "Jul – Oct",
    duration: "Full day",
  },
  // FCT / ABUJA
  {
    id: 26,
    name: "Millennium Park",
    location: "Abuja, FCT",
    region: "FCT",
    category: "nature",
    image: "/images/Millennium Park, Abuja_.jpg",
    description:
      "Nigeria's largest park in the capital — beautifully landscaped gardens, fountains, and wide open spaces perfect for picnics, walks, and events.",
    highlights: [
      "Largest park in Abuja",
      "Beautifully landscaped",
      "Family picnic areas",
      "Fountain & gardens",
    ],
    bestTime: "Year-round",
    duration: "2–3 hours",
  },
  {
    id: 27,
    name: "Jabi Lake",
    location: "Abuja, FCT",
    region: "FCT",
    category: "nature",
    image: "/images/Jabi Lake_ Abuja.jpg",
    description:
      "A popular recreation hub with waterfront restaurants, boat rides, jet skis, and family entertainment in the heart of Nigeria's capital city.",
    highlights: [
      "Boat & jet ski rides",
      "Waterfront restaurants",
      "Family entertainment",
      "Evening dining",
    ],
    bestTime: "Year-round",
    duration: "Half day",
  },
];

const DOMESTIC_PACKAGES = [
  {
    name: "Obudu Mountain Getaway",
    duration: "3 Days / 2 Nights",
    price: "₦180,000",
    image: "/images/Obudu Mountain Resort.jpg",
    includes: [
      "Cable car ride",
      "Guided hiking",
      "Resort accommodation",
      "Breakfast daily",
    ],
  },
  {
    name: "Lagos Culture Trail",
    duration: "2 Days / 1 Night",
    price: "₦85,000",
    image:
      "/images/NIKE CENTRE FOR ART AND CULTURE (2026) All You Should Know BEFORE You Go (w_ Reviews).jpg",
    includes: [
      "Nike Art Centre",
      "Freedom Park",
      "Badagry tour",
      "Hotel accommodation",
    ],
  },
  {
    name: "Calabar Carnival Experience",
    duration: "4 Days / 3 Nights",
    price: "₦220,000",
    image: "/images/Calabar_.jpg",
    includes: [
      "Festival VIP access",
      "Tinapa Resort",
      "Hotel & transport",
      "Tour guide",
    ],
  },
  {
    name: "Abuja Explorer",
    duration: "2 Days / 1 Night",
    price: "₦120,000",
    image: "/images/Abuja gate_.jpg",
    includes: [
      "Zuma Rock visit",
      "Gurara Falls",
      "Millennium Park",
      "Hotel accommodation",
    ],
  },
  {
    name: "Yankari Safari Adventure",
    duration: "3 Days / 2 Nights",
    price: "₦200,000",
    image: "/images/15 Best Places to Visit in Nigeria - The Crazy Tourist.jpg",
    includes: [
      "Game drives",
      "Wikki Warm Springs",
      "Park accommodation",
      "Meals included",
    ],
  },
];

const REGIONS = [
  "All",
  "Southwest",
  "Southeast",
  "South-South",
  "North",
  "FCT",
];

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  nature: TreePine,
  history: Landmark,
  beach: Waves,
  culture: Users,
  adventure: Mountain,
};

const CATEGORY_COLORS: Record<string, string> = {
  nature: "bg-emerald-100 text-emerald-700",
  history: "bg-amber-100 text-amber-700",
  beach: "bg-sky-100 text-sky-700",
  culture: "bg-purple-100 text-purple-700",
  adventure: "bg-orange-100 text-orange-700",
};

type Destination = (typeof DESTINATIONS)[number];

export default function DiscoverNigeriaPage() {
  const [activeRegion, setActiveRegion] = useState("All");
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null);

  const filtered =
    activeRegion === "All"
      ? DESTINATIONS
      : DESTINATIONS.filter((d) => d.region === activeRegion);

  return (
    <div>
      {/* ━━━ HERO ━━━ */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute top-0 left-0 right-0 z-20 flex h-2">
          <div className="flex-1 bg-nigeria-green" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-nigeria-green" />
        </div>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1610803527904-1a7e86a50b15?w=1920"
            alt="Beautiful Nigeria"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-nigeria-dark/85 via-nigeria-dark/60 to-nigeria-dark/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 font-mono text-xs px-4 py-2 rounded-full mb-6 tracking-wider">
              🇳🇬 DISCOVER NIGERIA
            </div>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight mb-6">
              The Giant of
              <br />
              <span style={{ color: "#00A86B" }}>Africa</span> is Calling.
            </h1>
            <p className="text-white/75 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Discover breathtaking destinations, rich culture, and
              unforgettable experiences — all in your own backyard. 36 states,
              500+ ethnicities, endless wonder.
            </p>
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {[
                { n: "36", label: "States" },
                { n: "500+", label: "Ethnic Groups" },
                { n: "3", label: "UNESCO Sites" },
                { n: "28", label: "Destinations" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-heading text-3xl font-bold text-white">
                    {s.n}
                  </p>
                  <p className="font-mono text-xs text-white/50 tracking-wider uppercase">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#destinations"
                className="bg-nigeria-green hover:bg-nigeria-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200"
                style={{ background: "#008751" }}
              >
                Start Exploring ↓
              </a>
              <NigeriaInquiryButton variant="outline" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ WHY NIGERIA ━━━ */}
      <section
        className="py-16 bg-nigeria-light"
        style={{ background: "#F0FFF4" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🏛️",
                title: "Rich History",
                desc: "Ancient kingdoms, UNESCO sites, and stories that shaped a continent",
              },
              {
                icon: "🌿",
                title: "Stunning Nature",
                desc: "Waterfalls, mountains, forests, and the longest beach in West Africa",
              },
              {
                icon: "🤝",
                title: "Warm People",
                desc: "World-renowned Nigerian hospitality across 500+ ethnic communities",
              },
              {
                icon: "🎉",
                title: "Vibrant Culture",
                desc: "Festivals, cuisine, music, and art unlike anywhere else on Earth",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h3 className="font-heading font-bold text-secondary mb-2">
                  {item.title}
                </h3>
                <p className="text-secondary/60 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ DESTINATIONS ━━━ */}
      <section id="destinations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="28 Destinations"
              title="Explore Nigeria by Region"
              subtitle="Click any destination to learn more and plan your visit"
            />
          </ScrollReveal>

          {/* Region filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {REGIONS.map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeRegion === region
                    ? "text-white shadow-md"
                    : "bg-surface text-secondary/60 hover:text-secondary hover:bg-surface"
                }`}
                style={
                  activeRegion === region
                    ? { background: "#008751" }
                    : { background: "#F9FAFB" }
                }
              >
                {region}
                <span className="ml-1.5 text-xs opacity-70">
                  (
                  {region === "All"
                    ? DESTINATIONS.length
                    : DESTINATIONS.filter((d) => d.region === region).length}
                  )
                </span>
              </button>
            ))}
          </div>

          {/* Destination cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((dest, i) => {
              const CatIcon = CATEGORY_ICONS[dest.category] ?? TreePine;
              const catColor =
                CATEGORY_COLORS[dest.category] ?? "bg-gray-100 text-gray-600";
              return (
                <ScrollReveal key={dest.id} delay={i * 0.05}>
                  <button
                    onClick={() => setSelectedDest(dest)}
                    className="w-full text-left bg-white rounded-2xl overflow-hidden border border-brand-border hover:border-nigeria-green/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="relative h-44">
                      <Image
                        src={dest.image}
                        alt={dest.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                      <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm font-mono text-xs px-2 py-0.5 rounded-full text-secondary/70">
                        {dest.region}
                      </span>
                      <span
                        className="absolute bottom-3 right-3 bg-nigeria-green/90 text-white text-xs px-2 py-0.5 rounded-full font-mono"
                        style={{ background: "rgba(0,135,81,0.9)" }}
                      >
                        View Details →
                      </span>
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <h3 className="font-heading font-semibold text-base text-secondary leading-tight">
                          {dest.name}
                        </h3>
                        <span
                          className={`flex-shrink-0 inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${catColor}`}
                        >
                          <CatIcon size={10} />
                          {dest.category}
                        </span>
                      </div>
                      <p className="flex items-center gap-1 text-xs text-secondary/50 mb-2">
                        <MapPin
                          size={11}
                          className="text-nigeria-green flex-shrink-0"
                        />
                        {dest.location}
                      </p>
                      <p className="text-secondary/60 text-xs leading-relaxed line-clamp-2">
                        {dest.description}
                      </p>
                    </div>
                  </button>
                </ScrollReveal>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-secondary/40">
              <p className="text-4xl mb-3">🔍</p>
              <p className="font-medium">No destinations in this region yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* ━━━ FESTIVALS ━━━ */}
      <section
        className="py-20 bg-nigeria-dark"
        style={{ background: "#0A3D2A" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Culture & Events"
              title="Experience Nigerian Festivals"
              subtitle="Immerse yourself in vibrant traditions that have endured for centuries"
              light
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {festivals.map((festival, i) => (
              <ScrollReveal key={festival.name} delay={i * 0.08}>
                <Link
                  href="/contact"
                  className="block relative rounded-2xl overflow-hidden h-64 group cursor-pointer"
                >
                  <Image
                    src={festival.image}
                    alt={festival.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-nigeria-dark/90 via-nigeria-dark/40 to-transparent"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(10,61,42,0.9), rgba(10,61,42,0.4), transparent)",
                    }}
                  />
                  <div className="absolute inset-0 bg-nigeria-green/0 group-hover:bg-nigeria-green/10 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar size={12} style={{ color: "#00A86B" }} />
                      <span
                        className="font-mono text-xs"
                        style={{ color: "#00A86B" }}
                      >
                        {festival.month}
                      </span>
                      <span className="font-mono text-xs text-white/40">
                        • {festival.location}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white mb-1">
                      {festival.name}
                    </h3>
                    <p className="text-white/65 text-xs leading-relaxed line-clamp-2">
                      {festival.description}
                    </p>
                    <span
                      className="inline-block mt-2 text-xs text-nigeria-accent font-semibold"
                      style={{ color: "#00A86B" }}
                    >
                      Plan to attend →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ DOMESTIC PACKAGES ━━━ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
              <SectionHeading
                eyebrow="Nigeria Packages"
                title="Ready-Made Nigerian Adventures"
                subtitle="Curated domestic packages — affordable, memorable, easy to book"
                align="left"
                className="mb-0"
              />
              <Link
                href="/packages"
                className="border border-nigeria-green text-nigeria-green hover:bg-nigeria-green hover:text-white font-semibold px-5 py-2.5 rounded-lg transition-all text-sm flex-shrink-0"
                style={{ borderColor: "#008751", color: "#008751" }}
              >
                All Packages →
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOMESTIC_PACKAGES.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 0.08}>
                <div className="bg-white rounded-2xl overflow-hidden border border-brand-border hover:border-nigeria-green/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="relative h-48">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                    <span
                      className="absolute top-3 left-3 bg-nigeria-green text-white font-mono text-xs px-3 py-1 rounded-full"
                      style={{ background: "#008751" }}
                    >
                      🇳🇬 Domestic
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-lg text-secondary mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-secondary/50 text-sm mb-3">
                      {pkg.duration}
                    </p>
                    <ul className="space-y-1 mb-4">
                      {pkg.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-xs text-secondary/60"
                        >
                          <span style={{ color: "#008751" }}>✓</span> {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <p
                        className="font-heading font-bold text-xl"
                        style={{ color: "#008751" }}
                      >
                        {pkg.price}
                      </p>
                      <NigeriaInquiryButton
                        packageName={pkg.name}
                        variant="small"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            {/* Custom package */}
            <ScrollReveal delay={0.4}>
              <div
                className="rounded-2xl p-6 flex flex-col justify-center items-center text-center h-full min-h-[320px] border border-nigeria-green/20"
                style={{ background: "#0A3D2A" }}
              >
                <span className="text-4xl mb-4">🗺️</span>
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  Custom Nigeria Package
                </h3>
                <p className="text-white/55 text-sm mb-6">
                  Tell us where in Nigeria you want to explore — we&apos;ll
                  build the perfect trip for you.
                </p>
                <NigeriaInquiryButton variant="primary" label="Plan My Trip" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ━━━ NEWSLETTER CTA ━━━ */}
      <section className="py-20" style={{ background: "#008751" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-5xl block mb-5">🇳🇬</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Explore Nigeria?
            </h2>
            <p className="text-white/75 mb-8">
              Get exclusive deals on Nigerian travel destinations delivered to
              your inbox.
            </p>
            <NewsletterForm dark source="Nigeria Page" buttonText="Subscribe" />
            <div className="mt-6">
              <NigeriaInquiryButton
                variant="outline"
                label="Plan My Nigeria Trip Now"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ DESTINATION DETAIL MODAL ━━━ */}
      {selectedDest && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDest(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-secondary/70 backdrop-blur-sm" />

          {/* Modal card */}
          <div
            className="relative bg-white rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image header */}
            <div className="relative h-56">
              <Image
                src={selectedDest.image}
                alt={selectedDest.name}
                fill
                className="object-cover"
                sizes="512px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent" />
              {/* Close button */}
              <button
                onClick={() => setSelectedDest(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-md"
              >
                <X size={18} className="text-secondary" />
              </button>
              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span
                  className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-semibold ${CATEGORY_COLORS[selectedDest.category]}`}
                >
                  {(() => {
                    const Icon = CATEGORY_ICONS[selectedDest.category];
                    return <Icon size={11} />;
                  })()}
                  {selectedDest.category}
                </span>
              </div>
              {/* Name overlay */}
              <div className="absolute bottom-4 left-5 right-5">
                <h2 className="font-heading text-2xl font-bold text-white">
                  {selectedDest.name}
                </h2>
                <p className="flex items-center gap-1 text-white/70 text-sm mt-1">
                  <MapPin size={13} />
                  {selectedDest.location}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Quick info row */}
              <div className="flex gap-4 mb-5 pb-5 border-b border-brand-border">
                <div className="flex items-center gap-1.5 text-sm text-secondary/60">
                  <Clock
                    size={14}
                    className="text-nigeria-green"
                    style={{ color: "#008751" }}
                  />
                  {selectedDest.duration}
                </div>
                <div className="flex items-center gap-1.5 text-sm text-secondary/60">
                  <Calendar
                    size={14}
                    className="text-nigeria-green"
                    style={{ color: "#008751" }}
                  />
                  Best: {selectedDest.bestTime}
                </div>
              </div>

              {/* Description */}
              <p className="text-secondary/70 text-sm leading-relaxed mb-5">
                {selectedDest.description}
              </p>

              {/* Highlights */}
              <h4 className="font-heading font-semibold text-secondary mb-3 flex items-center gap-2">
                <Star
                  size={14}
                  className="text-nigeria-green"
                  style={{ color: "#008751" }}
                />
                Highlights
              </h4>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {selectedDest.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-start gap-2 text-xs text-secondary/65 bg-surface rounded-lg px-3 py-2"
                  >
                    <span
                      className="text-nigeria-green font-bold mt-0.5 flex-shrink-0"
                      style={{ color: "#008751" }}
                    >
                      ✓
                    </span>
                    {h}
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <NigeriaInquiryButton
                    variant="primary"
                    packageName={selectedDest.name}
                    label={`Plan Trip to ${selectedDest.name}`}
                  />
                </div>
                <Link
                  href="/packages"
                  className="flex items-center justify-center gap-2 border border-brand-border text-secondary hover:border-nigeria-green hover:text-nigeria-green font-semibold px-4 py-3 rounded-lg transition-all text-sm"
                  style={{ "--hover-color": "#008751" } as React.CSSProperties}
                  onClick={() => setSelectedDest(null)}
                >
                  View Packages <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
