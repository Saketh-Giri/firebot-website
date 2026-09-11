"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { clsx } from "@/lib/clsx";

function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

export function ScrollVelocity({
  children,
  baseVelocity = 40,
  className,
  itemClassName,
}: {
  children: ReactNode;

  baseVelocity?: number;
  className?: string;
  itemClassName?: string;
}) {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1200], [0, 4], { clamp: false });

  const itemRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [copies, setCopies] = useState(4);

  useLayoutEffect(() => {
    const el = itemRef.current;
    if (!el) return;
    const measure = () => {
      const w = el.getBoundingClientRect().width;
      if (w > 0) {
        setItemWidth(w);
        setCopies(Math.max(3, Math.ceil(window.innerWidth / w) + 2));
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const x = useTransform(baseX, (v) => (itemWidth ? `${wrap(-itemWidth, 0, v)}px` : "0px"));

  const direction = useRef(1);
  useAnimationFrame((_, delta) => {
    if (reduce || !itemWidth) return;
    let moveBy = direction.current * baseVelocity * (delta / 1000);
    const vf = velocityFactor.get();
    if (vf < 0) direction.current = -1;
    else if (vf > 0) direction.current = 1;
    moveBy += moveBy * Math.abs(vf);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={clsx("mask-fade-x overflow-hidden whitespace-nowrap", className)}>
      <motion.div className="flex w-max" style={{ x }}>
        {Array.from({ length: copies }, (_, i) => (
          <div
            key={i}
            ref={i === 0 ? itemRef : undefined}
            aria-hidden={i > 0}
            className={clsx("flex shrink-0 items-center", itemClassName)}
          >
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
