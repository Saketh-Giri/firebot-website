"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { clsx } from "@/lib/clsx";

/**
 * Scroll-triggered fade-up. The initial state is intentionally not branched on
 * `useReducedMotion`, which is client-only and would desync hydration; the
 * `MotionConfig` in the root layout drops the transform for those users instead.
 *
 * `min-w-0` so a Reveal used as a grid/flex item never widens its track: an
 * `aspect-*` photo with a `min-h-*` otherwise transfers that height into a
 * min-content width and pushes the page sideways on phones.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  onMount = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  /**
   * Animate as soon as the component mounts rather than when scrolled into
   * view. Use for above-the-fold content that sits near the viewport edge,
   * which the in-view margin would otherwise never count as visible.
   */
  onMount?: boolean;
}) {
  return (
    <motion.div
      data-reveal
      className={clsx("min-w-0", className)}
      initial={{ opacity: 0, y: 22 }}
      {...(onMount
        ? { animate: { opacity: 1, y: 0 } }
        : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" } })}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
