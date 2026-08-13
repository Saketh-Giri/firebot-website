"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

/**
 * Counts up the leading number of a stat while preserving whatever wraps it,
 * so values like "50,600+", "80%" and "5:2" all render correctly.
 */
function useCountUp(value: string, active: boolean, skip: boolean) {
  const parsed = useMemo(() => {
    const match = value.match(/^([^\d]*)([\d,]+)(.*)$/);
    if (!match) return null;
    return {
      prefix: match[1],
      suffix: match[3],
      target: Number(match[2].replace(/,/g, "")),
    };
  }, [value]);

  // Starts as null so the server and the first client render both emit the real
  // value; the count-up only takes over once the element scrolls into view.
  const [display, setDisplay] = useState<string | null>(null);

  useEffect(() => {
    if (!parsed || skip || !active) return;

    const { prefix, suffix, target } = parsed;
    const duration = 1400;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // Ease-out quart keeps the last digits from crawling.
      const eased = 1 - (1 - progress) ** 4;
      const current = Math.round(target * eased);
      setDisplay(`${prefix}${current.toLocaleString("en-US")}${suffix}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, skip, parsed]);

  return display ?? value;
}

export function Stat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const display = useCountUp(value, inView, Boolean(reduceMotion));

  return (
    <div ref={ref} className="group relative pt-6">
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-white/10 transition-colors duration-500"
      />
      <span
        aria-hidden
        className="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-ember-400 to-ember-600 transition-all duration-700 ease-out-expo group-hover:w-full"
      />

      <div className="text-gradient-bright text-4xl font-semibold tracking-[-0.03em] tabular-nums transition-colors duration-500 md:text-5xl">
        {display}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted transition-colors duration-500 group-hover:text-bright/80">
        {label}
      </p>
    </div>
  );
}
