"use client";

import { useCallback, useRef, type ComponentProps, type PointerEvent } from "react";
import { clsx } from "@/lib/clsx";

/**
 * Pointer-tracked glow surface, in the spirit of the React Bits "Spotlight
 * Card" and Aceternity's "Glowing Effect". Writes --mx/--my/--glow onto the
 * element; the `glow-layer` and `glow-border` utilities in globals.css read
 * them, so the visual stays in CSS and this component only does bookkeeping.
 *
 * Renders a plain element so server-rendered children pass straight through.
 */
export function Glow({
  as: Tag = "div",
  className,
  children,
  border = true,
  ...props
}: ComponentProps<"div"> & { as?: "div" | "article" | "li" | "section"; border?: boolean }) {
  const ref = useRef<HTMLElement>(null);

  const onPointerMove = useCallback((event: PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }, []);

  const onPointerEnter = useCallback(() => {
    ref.current?.style.setProperty("--glow", "1");
  }, []);

  const onPointerLeave = useCallback(() => {
    ref.current?.style.setProperty("--glow", "0");
  }, []);

  // Every allowed tag is an HTMLElement; widen the JSX type so the shared
  // ref and handlers type-check against the union.
  const Element = Tag as "div";

  return (
    <Element
      ref={ref as React.RefObject<HTMLDivElement>}
      onPointerMove={onPointerMove}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      className={clsx("glow-surface", className)}
      {...props}
    >
      <span aria-hidden className="glow-layer rounded-[inherit]" />
      {border && <span aria-hidden className="glow-border" />}
      {children}
    </Element>
  );
}
