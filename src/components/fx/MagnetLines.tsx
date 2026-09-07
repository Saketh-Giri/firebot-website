"use client";

import { useEffect, useRef } from "react";
import { clsx } from "@/lib/clsx";

/**
 * A field of short strokes that all turn to face the pointer, after React
 * Bits' "Magnet Lines". Rotation is written straight to the DOM from a
 * pointer handler, so it never touches React state.
 */
export function MagnetLines({
  rows = 9,
  columns = 9,
  className,
  lineClassName,
}: {
  rows?: number;
  columns?: number;
  className?: string;
  lineClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lines = Array.from(container.querySelectorAll<HTMLSpanElement>("span[data-line]"));

    // Idle: strokes rest at a gentle diagonal, staggered by position.
    lines.forEach((line, i) => {
      const r = Math.floor(i / columns);
      const c = i % columns;
      line.style.setProperty("--rotate", `${-30 + (r + c) * 2}deg`);
    });
    if (reduced) return;

    let frame = 0;
    let target: { x: number; y: number } | null = null;

    const apply = () => {
      frame = 0;
      if (!target) return;
      const { x, y } = target;
      for (const line of lines) {
        const rect = line.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const angle = (Math.atan2(y - cy, x - cx) * 180) / Math.PI + 90;
        line.style.setProperty("--rotate", `${angle}deg`);
      }
    };

    const onMove = (e: PointerEvent) => {
      target = { x: e.clientX, y: e.clientY };
      if (!frame) frame = requestAnimationFrame(apply);
    };

    // Track the pointer over the whole window so the field responds as you
    // approach it, not only once you're inside.
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [rows, columns]);

  return (
    <div
      ref={ref}
      aria-hidden
      className={clsx("grid place-items-center", className)}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
    >
      {Array.from({ length: rows * columns }, (_, i) => (
        <span
          key={i}
          data-line
          className={clsx(
            "block h-[46%] w-[3px] origin-center rounded-full bg-gradient-to-b from-ember-400 to-ember-700/40 transition-transform duration-300 ease-out will-change-transform [transform:rotate(var(--rotate))]",
            lineClassName,
          )}
        />
      ))}
    </div>
  );
}
