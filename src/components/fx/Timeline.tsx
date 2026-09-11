"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { clsx } from "@/lib/clsx";

export interface TimelineEntry {
  label: string;
  meta?: string;
  content: ReactNode;
}

export function Timeline({ entries, className }: { entries: TimelineEntry[]; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setHeight(el.getBoundingClientRect().height);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 35%", "end 65%"],
  });
  const beamHeight = useTransform(scrollYProgress, [0, 1], [0, height]);
  const beamOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div ref={ref} className={clsx("relative", className)}>
      {entries.map((entry, index) => (
        <div
          key={entry.label}
          className="group flex justify-start gap-6 pt-10 first:pt-0 md:gap-12 md:pt-24 md:first:pt-0"
        >
          <div className="sticky top-32 z-10 flex max-w-xs flex-col items-start self-start md:w-56 md:shrink-0 lg:w-72">
            <div className="relative flex items-center gap-4">
              <span className="relative flex size-9 items-center justify-center rounded-full border border-white/10 bg-ink">
                <span className="size-2.5 rounded-full bg-line-2 transition-colors duration-500 group-hover:bg-ember-400" />
              </span>
              <div className="hidden md:block">
                <p className="text-2xl font-semibold tracking-tight text-bright lg:text-3xl">
                  {entry.label}
                </p>
                {entry.meta && (
                  <p className="mt-1 font-mono text-xs tracking-[0.16em] text-dim uppercase">
                    {entry.meta}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="relative w-full min-w-0 pb-12 md:pb-4">
            <div className="mb-5 md:hidden">
              <p className="text-xl font-semibold tracking-tight">{entry.label}</p>
              {entry.meta && (
                <p className="mt-1 font-mono text-xs tracking-[0.16em] text-dim uppercase">
                  {entry.meta}
                </p>
              )}
            </div>
            {entry.content}
            {index < entries.length - 1 && (
              <div aria-hidden className="mt-12 h-px w-full bg-white/6 md:hidden" />
            )}
          </div>
        </div>
      ))}

      <div
        aria-hidden
        style={{ height }}
        className="mask-fade-y absolute top-0 left-[17px] w-px bg-white/8"
      >
        <motion.div
          style={{ height: beamHeight, opacity: beamOpacity }}
          className="w-px bg-gradient-to-b from-flare-400 via-ember-500 to-ember-700 shadow-[0_0_18px_2px_rgba(224,31,38,0.45)]"
        />
      </div>
    </div>
  );
}
