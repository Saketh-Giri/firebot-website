"use client";

import { useEffect, useRef } from "react";
import { clsx } from "@/lib/clsx";

export function DotGrid({
  className,
  gap = 26,
  radius = 170,
}: {
  className?: string;

  gap?: number;

  radius?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let frame = 0;
    let visible = true;
    let pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / gap) + 1;
      rows = Math.ceil(height / gap) + 1;
      if (reduced) draw(0);
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, width, height);

      pointer.x += (pointer.tx - pointer.x) * 0.16;
      pointer.y += (pointer.ty - pointer.y) * 0.16;

      const t = now * 0.00035;
      const r2 = radius * radius;
      const offX = (width - (cols - 1) * gap) / 2;
      const offY = (height - (rows - 1) * gap) / 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = offX + i * gap;
          const y = offY + j * gap;
          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const d2 = dx * dx + dy * dy;

          const near = d2 < r2 ? (1 - Math.sqrt(d2) / radius) ** 2 : 0;
          const wave = reduced ? 0 : 0.5 + 0.5 * Math.sin(t + i * 0.35 + j * 0.22);

          const size = 1 + wave * 0.35 + near * 1.9;
          const alpha = 0.16 + wave * 0.1 + near * 0.8;

          const red = 51 + near * (246 - 51);
          const green = 56 + near * (86 - 56);
          const blue = 70 + near * (79 - 70);

          ctx.fillStyle = `rgba(${red | 0}, ${green | 0}, ${blue | 0}, ${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);
      if (!visible) return;
      draw(now);
    };

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.tx = event.clientX - rect.left;
      pointer.ty = event.clientY - rect.top;
      if (reduced) draw(0);
    };
    const onLeave = () => {
      pointer.tx = -9999;
      pointer.ty = -9999;
      if (reduced) draw(0);
    };

    const parent = canvas.parentElement ?? canvas;
    parent.addEventListener("pointermove", onMove, { passive: true });
    parent.addEventListener("pointerleave", onLeave);

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(canvas);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    if (!reduced) frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      ro.disconnect();
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
      pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999 };
    };
  }, [gap, radius]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={clsx("pointer-events-none absolute inset-0 size-full", className)}
    />
  );
}
