"use client";

import { motion, type Variants } from "motion/react";
import { useMemo } from "react";
import { clsx } from "@/lib/clsx";

const tags = {
  span: motion.span,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
} as const;

const word: Variants = {
  hidden: { opacity: 0, y: "0.6em", rotateX: -40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Word-by-word headline reveal, after the React Bits "Split Text". Each word
 * lifts and un-blurs in sequence. Screen readers get the full sentence via
 * aria-label while the animated fragments are hidden from them.
 */
export function SplitText({
  text,
  as: Tag = "span",
  className,
  wordClassName,
  stagger = 0.06,
  delay = 0,
  inView = false,
}: {
  text: string;
  as?: keyof typeof tags;
  className?: string;
  wordClassName?: string;
  stagger?: number;
  delay?: number;
  /** Animate when scrolled into view instead of on mount. */
  inView?: boolean;
}) {
  const words = text.split(" ");
  const MotionTag = tags[Tag] as typeof motion.span;
  const container: Variants = useMemo(
    () => ({
      hidden: {},
      visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
    }),
    [stagger, delay],
  );

  return (
    <MotionTag
      aria-label={text}
      className={clsx("inline-block [perspective:600px]", className)}
      variants={container}
      initial="hidden"
      {...(inView
        ? { whileInView: "visible", viewport: { once: true, margin: "-60px" } }
        : { animate: "visible" })}
    >
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          aria-hidden
          className="inline-block overflow-hidden pb-[0.08em] align-bottom"
        >
          <motion.span
            variants={word}
            className={clsx("inline-block origin-bottom will-change-transform", wordClassName)}
          >
            {w}
          </motion.span>
          {i < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </MotionTag>
  );
}
