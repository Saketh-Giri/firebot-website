"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Scroll-triggered fade-up. The initial state is intentionally not branched on
 * `useReducedMotion`, which is client-only and would desync hydration; the
 * `MotionConfig` in the root layout drops the transform for those users instead.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
