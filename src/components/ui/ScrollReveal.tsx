"use client";
// src/components/ui/ScrollReveal.tsx
// Wraps children in a Framer Motion scroll-triggered fade-in
// Usage: <ScrollReveal><YourSection /></ScrollReveal>

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: "up" | "scale";
}

export default function ScrollReveal({ children, delay = 0, className, variant = "up" }: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeInUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
