"use client";
import { motion, useReducedMotion } from "framer-motion";

export const M = motion;

export const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -80px 0px" },
  transition: { duration: 0.5, delay },
});

export const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "0px 0px -80px 0px" },
};

export function usePrefersReducedMotion() {
  return useReducedMotion(); // true if user prefers less motion
}
