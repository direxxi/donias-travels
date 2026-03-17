// Tailwind v4 — configuration is now done in globals.css via @theme {}
// This file is kept for compatibility but CSS-based config takes precedence.
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
};

export default config;
