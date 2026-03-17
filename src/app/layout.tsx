// src/app/layout.tsx
// ROOT LAYOUT — Wraps EVERY page automatically.
// Navbar, Footer, ChatWidget, Toaster, and Zoho SalesIQ (when enabled) live here.
import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Space_Mono } from "next/font/google";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
import "./globals.css";

// ── Zoho SalesIQ ─────────────────────────────────────────────────────────────
// When NEXT_PUBLIC_SALESIQ_ENABLED=true and NEXT_PUBLIC_SALESIQ_SCRIPT_SRC is set,
// the SalesIQ widget script is loaded here. ChatWidget.tsx detects this and hides
// its placeholder popup so both don't show simultaneously.
const salesIqEnabled = process.env.NEXT_PUBLIC_SALESIQ_ENABLED === "true";
const salesIqSrc = process.env.NEXT_PUBLIC_SALESIQ_SCRIPT_SRC ?? "";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Donias Travels | Your Journey, Our Expertise",
  description:
    "Premium travel consultancy for visas, flights, tours, medical tourism, pilgrimages, and study abroad. A Donias Global Consultants company.",
  keywords:
    "travel agency Nigeria, visa processing, flight booking, medical tourism, study abroad, pilgrimage, Donias",
  openGraph: {
    title: "Donias Travels | Your Journey, Our Expertise",
    description: "Premium travel consultancy based in Nigeria.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${spaceMono.variable}`}
    >
      <body className="font-body bg-white text-secondary antialiased">
        {/* Accessibility: skip to main content */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <ChatWidget />

        {/*
          ── Zoho SalesIQ Live Chat Script ──────────────────────────────────
          Loaded only when NEXT_PUBLIC_SALESIQ_ENABLED=true.
          Strategy "lazyOnload" defers until page is fully interactive.
          ChatWidget.tsx hides its placeholder popup when this is active.
          ───────────────────────────────────────────────────────────────────
        */}
        {salesIqEnabled && salesIqSrc && (
          <Script
            id="zoho-salesiq"
            src={salesIqSrc}
            strategy="lazyOnload"
          />
        )}

        {/* Toast notifications — used by all forms */}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#1A1A2E",
              color: "#ffffff",
              fontFamily: "var(--font-dm-sans)",
              borderRadius: "8px",
            },
            success: {
              iconTheme: { primary: "#C8102E", secondary: "#ffffff" },
            },
          }}
        />
      </body>
    </html>
  );
}
