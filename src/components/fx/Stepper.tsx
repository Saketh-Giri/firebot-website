"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { clsx } from "@/lib/clsx";

export interface StepperStep {
  title: string;
  eyebrow?: string;
  content: ReactNode;
}

export function Stepper({ steps, className }: { steps: StepperStep[]; className?: string }) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);

  const go = (next: number) => {
    const clamped = Math.max(0, Math.min(steps.length - 1, next));
    setDir(clamped >= index ? 1 : -1);
    setIndex(clamped);
  };

  return (
    <div className={clsx("overflow-hidden rounded-3xl border border-white/8 bg-surface shadow-card", className)}>

      <div className="border-b border-white/8 px-5 py-5 sm:px-8">
        <ol className="flex items-center">
          {steps.map((step, i) => {
            const state = i < index ? "done" : i === index ? "active" : "todo";
            return (
              <li key={step.title} className={clsx("flex items-center", i < steps.length - 1 && "flex-1")}>
                <button
                  type="button"
                  onClick={() => go(i)}
                  aria-current={state === "active" ? "step" : undefined}
                  aria-label={`Step ${i + 1}: ${step.title}`}
                  className="group relative grid size-9 shrink-0 place-items-center rounded-full font-mono text-xs font-semibold tabular-nums focus-visible:ring-2 focus-visible:ring-ember-400 focus-visible:outline-none"
                >
                  <motion.span
                    aria-hidden
                    className="absolute inset-0 rounded-full border"
                    animate={{
                      backgroundColor:
                        state === "todo" ? "rgba(255,255,255,0.03)" : state === "done" ? "#8c0e14" : "#e01f26",
                      borderColor:
                        state === "todo" ? "rgba(255,255,255,0.12)" : state === "done" ? "#b8121a" : "#f6564f",
                      scale: state === "active" ? 1 : 0.92,
                      boxShadow:
                        state === "active" ? "0 0 0 6px rgba(224,31,38,0.16)" : "0 0 0 0px rgba(224,31,38,0)",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 26 }}
                  />
                  <span className={clsx("relative", state === "todo" ? "text-dim" : "text-white")}>
                    {state === "done" ? <Check className="size-4" strokeWidth={2.5} /> : i + 1}
                  </span>
                </button>
                {i < steps.length - 1 && (
                  <span aria-hidden className="relative mx-2 h-px flex-1 overflow-hidden bg-white/10 sm:mx-3">
                    <motion.span
                      className="absolute inset-y-0 left-0 bg-ember-500"
                      initial={false}
                      animate={{ width: i < index ? "100%" : "0%" }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>

      <div className="relative min-h-[18rem] overflow-hidden px-5 py-8 sm:px-8 sm:py-10">
        <AnimatePresence mode="wait" initial={false} custom={dir}>
          <motion.div
            key={index}
            custom={dir}
            variants={{
              enter: (d: number) => ({ x: d * 40, opacity: 0, filter: "blur(4px)" }),
              center: { x: 0, opacity: 1, filter: "blur(0px)" },
              exit: (d: number) => ({ x: d * -40, opacity: 0, filter: "blur(4px)" }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {steps[index].eyebrow && (
              <p className="font-mono text-xs tracking-[0.18em] text-ember-400 uppercase">
                {steps[index].eyebrow}
              </p>
            )}
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-bright sm:text-3xl">
              {steps[index].title}
            </h3>
            <div className="mt-5 text-base leading-relaxed text-muted">{steps[index].content}</div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-white/8 px-5 py-4 sm:px-8">
        <button
          type="button"
          onClick={() => go(index - 1)}
          disabled={index === 0}
          className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.16em] text-muted uppercase transition hover:text-white disabled:pointer-events-none disabled:opacity-30"
        >
          <ArrowLeft className="size-4" /> Back
        </button>
        <span className="font-mono text-xs text-dim tabular-nums">
          {String(index + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={() => go(index + 1)}
          disabled={index === steps.length - 1}
          className="inline-flex items-center gap-2 rounded-full bg-ember-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(224,31,38,0.8)] transition hover:bg-ember-400 disabled:pointer-events-none disabled:opacity-30"
        >
          Next <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
