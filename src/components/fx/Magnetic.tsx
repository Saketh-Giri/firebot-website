"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useRef, type ReactNode } from "react";
import { clsx } from "@/lib/clsx";

/**
 * Pulls its child a few pixels toward the pointer, after the React Bits
 * "Magnet". Kept deliberately mild so buttons feel weighted, not gimmicky.
 * Disabled for coarse pointers and reduced-motion visitors.
 */
export function Magnetic({
  children,
  className,
  strength = 0.28,
  range = 28,
}: {
  children: ReactNode;
  className?: string;
  /** Fraction of the pointer offset the child follows. */
  strength?: number;
  /** Extra hit area in px around the child that still attracts it. */
  range?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 260, damping: 18, mass: 0.5 });

  const onMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || event.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={clsx("inline-flex", className)}
      style={{ padding: range, margin: -range }}
    >
      <motion.div style={{ x: sx, y: sy }} className="inline-flex">
        {children}
      </motion.div>
    </div>
  );
}
