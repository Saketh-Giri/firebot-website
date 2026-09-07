"use client";

import { useEffect, useRef } from "react";

interface Spark {
  x: number;
  y: number;
  angle: number;
  speed: number;
  length: number;
  born: number;
  ttl: number;
  gravity: number;
  color: string;
}

const COLORS = ["#ffb547", "#ff8d83", "#f6564f", "#ffe0dd", "#f59021"];

/**
 * Welding sparks on click. Based on the React Bits "Click Spark", drawn as
 * short streaks that arc under a little gravity instead of straight lines. The
 * canvas is fixed and pointer-transparent, and the animation loop only runs
 * while sparks are alive, so idle cost is zero.
 */
export function ClickSpark() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let sparks: Spark[] = [];
    let frame = 0;
    let running = false;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const tick = (now: number) => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.lineCap = "round";
      sparks = sparks.filter((s) => now - s.born < s.ttl);

      for (const s of sparks) {
        const t = (now - s.born) / s.ttl;
        const ease = 1 - (1 - t) ** 3;
        const dist = s.speed * ease;
        const drop = s.gravity * t * t;
        const x1 = s.x + Math.cos(s.angle) * dist;
        const y1 = s.y + Math.sin(s.angle) * dist + drop;
        const tail = Math.max(0, dist - s.length * (1 - t));
        const x0 = s.x + Math.cos(s.angle) * tail;
        const y0 = s.y + Math.sin(s.angle) * tail + s.gravity * Math.max(0, t - 0.12) ** 2;

        ctx.strokeStyle = s.color;
        ctx.globalAlpha = (1 - t) ** 1.5;
        ctx.lineWidth = 1.6 * (1 - t) + 0.4;
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      if (sparks.length) {
        frame = requestAnimationFrame(tick);
      } else {
        running = false;
      }
    };

    const onDown = (event: PointerEvent) => {
      // Skip right-clicks and anything inside form fields.
      if (event.button !== 0) return;
      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, [contenteditable]")) return;

      const now = performance.now();
      const count = 9 + Math.floor(Math.random() * 5);
      for (let i = 0; i < count; i++) {
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.6;
        sparks.push({
          x: event.clientX,
          y: event.clientY,
          angle,
          speed: 34 + Math.random() * 46,
          length: 10 + Math.random() * 12,
          born: now,
          ttl: 380 + Math.random() * 260,
          gravity: 40 + Math.random() * 60,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
      if (!running) {
        running = true;
        frame = requestAnimationFrame(tick);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointerdown", onDown, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointerdown", onDown);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[150] size-full"
    />
  );
}
