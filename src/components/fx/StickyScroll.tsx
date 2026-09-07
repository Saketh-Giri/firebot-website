"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState, type ReactNode } from "react";
import { clsx } from "@/lib/clsx";

export interface StickyScrollItem {
  id: string;
  title: string;
  description: string;
  visual: ReactNode;
}

/**
 * Two-column scroll narrative, after Aceternity's "Sticky Scroll Reveal".
 * The text column scrolls; the visual column stays pinned and crossfades to
 * whichever item is nearest the middle of the viewport. Collapses to a
 * single column with inline visuals on small screens.
 */
export function StickyScroll({ items, className }: { items: StickyScrollItem[]; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 45%", "end 55%"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Items share the column equally, so the one under the viewport's middle
    // is whichever centre `latest` is nearest to. Using centres (not starts)
    // means the visual switches at item boundaries rather than halfway through.
    const count = items.length;
    const centers = items.map((_, i) => (i + 0.5) / count);
    const closest = centers.reduce((acc, c, i) => {
      return Math.abs(latest - c) < Math.abs(latest - centers[acc]) ? i : acc;
    }, 0);
    setActive(closest);
  });

  return (
    <div ref={ref} className={clsx("relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20", className)}>
      <div className="flex flex-col">
        {items.map((item, i) => (
          <div
            key={item.id}
            className={clsx(
              "flex flex-col justify-center py-10 first:pt-0 lg:min-h-[70vh] lg:py-20 lg:first:pt-10",
            )}
          >
            <motion.div
              animate={{ opacity: active === i ? 1 : 0.35 }}
              transition={{ duration: 0.45 }}
              className="hidden lg:block"
            >
              <p className="font-mono text-xs tracking-[0.18em] text-ember-400 uppercase">
                {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-bright lg:text-4xl">
                {item.title}
              </h3>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">{item.description}</p>
            </motion.div>

            {/* Mobile: heading + inline visual. */}
            <div className="lg:hidden">
              <p className="font-mono text-xs tracking-[0.18em] text-ember-400 uppercase">
                {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-bright">{item.title}</h3>
              <div className="mt-6 aspect-[4/3] overflow-hidden rounded-2xl border border-white/8 bg-surface">
                {item.visual}
              </div>
              <p className="mt-5 text-base leading-relaxed text-muted">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden lg:block">
        <div className="sticky top-[calc(50vh-14rem)] aspect-[4/3] overflow-hidden rounded-3xl border border-white/8 bg-surface shadow-glow">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={items[active].id}
              initial={{ opacity: 0, scale: 1.04, filter: "blur(6px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.98, filter: "blur(6px)" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              {items[active].visual}
            </motion.div>
          </AnimatePresence>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-white/8 bg-ink/70 px-5 py-3 backdrop-blur">
            <span className="font-mono text-[11px] tracking-[0.18em] text-dim uppercase">
              {items[active].title}
            </span>
            <span className="flex gap-1.5">
              {items.map((item, i) => (
                <span
                  key={item.id}
                  className={clsx(
                    "h-1 rounded-full transition-all duration-500",
                    i === active ? "w-6 bg-ember-400" : "w-2 bg-white/15",
                  )}
                />
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
