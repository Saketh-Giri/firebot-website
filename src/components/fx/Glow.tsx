"use client";

import { useCallback, useRef, type ComponentProps, type PointerEvent } from "react";
import { clsx } from "@/lib/clsx";

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
