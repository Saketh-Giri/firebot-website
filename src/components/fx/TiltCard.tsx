"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";
import { clsx } from "@/lib/clsx";

export function TiltCard({
  children,
  className,
  maxTilt = 9,
  scale = 1.02,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const hover = useMotionValue(0);

  const spring = { stiffness: 220, damping: 22, mass: 0.6 };
  const rx = useSpring(useTransform(py, [0, 1], [maxTilt, -maxTilt]), spring);
  const ry = useSpring(useTransform(px, [0, 1], [-maxTilt, maxTilt]), spring);
  const s = useSpring(useTransform(hover, [0, 1], [1, scale]), spring);
  const glareOpacity = useSpring(useTransform(hover, [0, 1], [0, 0.55]), spring);
  const gx = useTransform(px, (v) => `${v * 100}%`);
  const gy = useTransform(py, (v) => `${v * 100}%`);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.22), rgba(255,181,71,0.08) 30%, transparent 62%)`;

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const rect = ref.current!.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
    hover.set(1);
  };
  const onLeave = () => {
    px.set(0.5);
    py.set(0.5);
    hover.set(0);
  };

  return (
    <div className={clsx("min-w-0 [perspective:1100px]", className)}>
      <motion.div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry, scale: s, transformStyle: "preserve-3d" }}
        className="relative h-full will-change-transform"
      >
        {children}
        {glare && (
          <motion.div
            aria-hidden
            style={{ background: glareBg, opacity: glareOpacity }}
            className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-screen"
          />
        )}
      </motion.div>
    </div>
  );
}
