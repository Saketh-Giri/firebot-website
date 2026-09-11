"use client";

import { useEffect, useRef } from "react";
import { clsx } from "@/lib/clsx";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  ttl: number;
  hue: number;
  wobble: number;
}

export function Embers({
  className,
  density = 1,
  speed = 1,
}: {
  className?: string;

  density?: number;

  speed?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    const particles: Particle[] = [];
    let frame = 0;
    let visible = true;
    let last = performance.now();

    const S = 64;
    const palette: [string, string][] = [
      ["255, 235, 205", "246, 86, 79"],
      ["255, 181, 71", "224, 31, 38"],
      ["255, 141, 131", "184, 18, 26"],
      ["255, 200, 120", "245, 144, 33"],
    ];
    const sprites = palette.map(([core, edge]) => {
      const sprite = document.createElement("canvas");
      sprite.width = S;
      sprite.height = S;
      const sctx = sprite.getContext("2d")!;
      const g = sctx.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
      g.addColorStop(0, `rgba(${core},1)`);
      g.addColorStop(0.16, `rgba(${core},0.85)`);
      g.addColorStop(0.42, `rgba(${edge},0.32)`);
      g.addColorStop(1, `rgba(${edge},0)`);
      sctx.fillStyle = g;
      sctx.fillRect(0, 0, S, S);
      return sprite;
    });

    const spawn = (fromBottom: boolean): Particle => {
      const ttl = 6000 + Math.random() * 7000;
      return {
        x: Math.random() * width,
        y: fromBottom ? height + 10 : Math.random() * height,
        vx: (Math.random() - 0.5) * 0.012,
        vy: -(0.018 + Math.random() * 0.03) * speed,
        size: 0.9 + Math.random() ** 2 * 2.2,
        life: fromBottom ? 0 : Math.random() * ttl,
        ttl,
        hue: Math.floor(Math.random() * sprites.length),
        wobble: Math.random() * Math.PI * 2,
      };
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const target = Math.round(((width * height) / 14000) * density);
      if (particles.length > target) particles.length = target;
      while (particles.length < target) particles.push(spawn(false));
    };

    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);
      if (!visible) return;
      const dt = Math.min(now - last, 50);
      last = now;

      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.life += dt;
        if (p.life > p.ttl || p.y < -20) {
          particles[i] = spawn(true);
          continue;
        }
        p.wobble += dt * 0.0011;
        p.x += (p.vx + Math.sin(p.wobble) * 0.008) * dt;
        p.y += p.vy * dt;

        const t = p.life / p.ttl;
        const alpha = Math.min(t / 0.12, 1) * Math.min((1 - t) / 0.35, 1);
        const flicker = 0.75 + 0.25 * Math.sin(p.wobble * 3.1);
        const d = p.size * 7;

        ctx.globalAlpha = alpha * flicker * 0.9;
        ctx.drawImage(sprites[p.hue], p.x - d / 2, p.y - d / 2, d, d);
      }

      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting && document.visibilityState === "visible";
        if (visible) last = performance.now();
      },
      { threshold: 0 },
    );
    observer.observe(canvas);

    const onVisibility = () => {
      visible = document.visibilityState === "visible";
      last = performance.now();
    };
    document.addEventListener("visibilitychange", onVisibility);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [density, speed]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={clsx("pointer-events-none absolute inset-0 size-full", className)}
    />
  );
}
