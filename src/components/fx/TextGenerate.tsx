"use client";

import { motion, type Variants } from "motion/react";
import { clsx } from "@/lib/clsx";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045, delayChildren: 0.1 } },
};

const word: Variants = {
  hidden: { opacity: 0.12, filter: "blur(5px)" },
  visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
};

export function TextGenerate({
  text,
  className,
  as: Tag = "p",
}: {
  text: string;
  className?: string;
  as?: "p" | "blockquote" | "h2" | "span";
}) {
  const words = text.split(" ");
  const MotionTag = motion[Tag];

  return (
    <MotionTag
      aria-label={text.replace(/\*/g, "")}
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {words.map((raw, i) => {
        const accent = raw.startsWith("*") && raw.endsWith("*");
        const clean = raw.replace(/\*/g, "");
        return (
          <motion.span
            key={`${clean}-${i}`}
            aria-hidden
            variants={word}
            className={clsx("inline-block", accent && "text-ember-300")}
          >
            {clean}
            {i < words.length - 1 && "\u00A0"}
          </motion.span>
        );
      })}
    </MotionTag>
  );
}
