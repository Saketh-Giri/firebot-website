"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import { clsx } from "@/lib/clsx";

/**
 * A warm radial light that follows the pointer across its parent, in the
 * spirit of Aceternity's "Spotlight". The parent needs `position: relative`.
 * Pointer events are read from the parent so the overlay never blocks links.
 */
export function Spotlight({
  className,
  size = 520,
  strength = 0.22,
}: {
  className?: string;
  /** Diameter of the light in px. */
  size?: number;
  /** Peak alpha of the ember at the centre of the light. */
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const opacity = useMotionValue(0);

  const sx = useSpring(x, { stiffness: 220, damping: 32, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 220, damping: 32, mass: 0.6 });
  const so = useSpring(opacity, { stiffness: 120, damping: 28 });

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (event: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      x.set(event.clientX - rect.left);
      y.set(event.clientY - rect.top);
      opacity.set(1);
    };
    const onLeave = () => opacity.set(0);

    parent.addEventListener("pointermove", onMove, { passive: true });
    parent.addEventListener("pointerleave", onLeave);
    return () => {
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, [x, y, opacity]);

  const background = useMotionTemplate`radial-gradient(${size}px circle at ${sx}px ${sy}px, rgba(246, 86, 79, ${strength}), rgba(224, 31, 38, ${strength * 0.45}) 35%, transparent 70%)`;

  return (
    <motion.div
      ref={ref}
      aria-hidden
      style={{ background, opacity: so }}
      className={clsx("pointer-events-none absolute inset-0 mix-blend-screen", className)}
    />
  );
}
