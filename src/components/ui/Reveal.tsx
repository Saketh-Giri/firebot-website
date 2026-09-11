"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { clsx } from "@/lib/clsx";

export function Reveal({
  children,
  delay = 0,
  className,
  onMount = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;

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
