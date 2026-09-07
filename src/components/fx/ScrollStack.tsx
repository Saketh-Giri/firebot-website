"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { createRef, useMemo, type ReactNode, type RefObject } from "react";
import { clsx } from "@/lib/clsx";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

/**
 * Cards that pin under one another as you scroll, each settling back a little
 * as the next one arrives, after React Bits' "Scroll Stack". Built on native
 * sticky positioning, so without JavaScript it is simply a list of cards.
 */
export function ScrollStack({
  children,
  className,
  offset = 104,
  gap = 26,
}: {
  children: ReactNode[];
  className?: string;
  /** Distance from the top of the viewport for the first card, in px. */
  offset?: number;
  /** Vertical step between stacked card tops, in px. */
  gap?: number;
}) {
  const count = children.length;
  const refs = useMemo(
    () => Array.from({ length: count }, () => createRef<HTMLDivElement>()),
    [count],
  );

  return (
    <div className={clsx("relative", className)}>
      {children.map((child, i) => (
        <StackItem
          key={i}
          index={i}
          count={count}
          offset={offset}
          gap={gap}
          self={refs[i]}
          next={refs[i + 1]}
        >
          {child}
        </StackItem>
      ))}
    </div>
  );
}

function StackItem({
  children,
  index,
  count,
  offset,
  gap,
  self,
  next,
}: {
  children: ReactNode;
  index: number;
  count: number;
  offset: number;
  gap: number;
  self: RefObject<HTMLDivElement | null>;
  next?: RefObject<HTMLDivElement | null>;
}) {
  // Hydration-safe: the flag picks the inline style below.
  const reduce = usePrefersReducedMotion();
  const isLast = index === count - 1;
  // Progress of the *next* card travelling from the bottom of the viewport to
  // its own sticky position. That's the window in which this card recedes.
  const { scrollYProgress } = useScroll({
    target: next ?? self,
    offset: ["start end", `start ${offset + (index + 1) * gap}px`],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const filter = useTransform(scrollYProgress, [0, 1], ["brightness(1)", "brightness(0.6)"]);
  const active = !reduce && !isLast;

  return (
    <motion.div
      ref={self}
      style={{
        top: offset + index * gap,
        scale: active ? scale : 1,
        filter: active ? filter : "none",
        transformOrigin: "top center",
        zIndex: index + 1,
      }}
      className={clsx("sticky will-change-transform", !isLast && "mb-[6vh]")}
    >
      {children}
    </motion.div>
  );
}
