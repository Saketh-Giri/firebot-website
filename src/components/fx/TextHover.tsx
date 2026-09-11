"use client";

import { motion } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";
import { clsx } from "@/lib/clsx";

export function TextHover({
  text,
  className,
  height = 120,
}: {
  text: string;
  className?: string;
  height?: number;
}) {
  const id = useId();
  const svgRef = useRef<SVGSVGElement>(null);
  const [hovered, setHovered] = useState(false);
  const [mask, setMask] = useState({ cx: "50%", cy: "50%" });
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!svgRef.current || !cursor) return;
    const rect = svgRef.current.getBoundingClientRect();
    setMask({
      cx: `${((cursor.x - rect.left) / rect.width) * 100}%`,
      cy: `${((cursor.y - rect.top) / rect.height) * 100}%`,
    });
  }, [cursor]);

  const gradientId = `${id}-g`;
  const maskGradientId = `${id}-mg`;
  const maskId = `${id}-m`;

  return (
    <svg
      ref={svgRef}
      aria-hidden
      viewBox={`0 0 1200 ${height}`}
      preserveAspectRatio="xMidYMid meet"
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onPointerMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={clsx("w-full select-none", className)}
    >
      <defs>
        <linearGradient id={gradientId} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1200" y2="0">
          <stop offset="0%" stopColor="#ffb547" />
          <stop offset="35%" stopColor="#f6564f" />
          <stop offset="70%" stopColor="#e01f26" />
          <stop offset="100%" stopColor="#ff8d83" />
        </linearGradient>

        <motion.radialGradient
          id={maskGradientId}
          gradientUnits="userSpaceOnUse"
          r="24%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={mask}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>

        <mask id={maskId}>
          <rect x="0" y="0" width="100%" height="100%" fill={`url(#${maskGradientId})`} />
        </mask>
      </defs>

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="1"
        className="fill-transparent stroke-white/12 font-sans text-[124px] font-bold tracking-[-0.04em]"
      >
        {text}
      </text>

      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="1"
        className="fill-transparent stroke-white/25 font-sans text-[124px] font-bold tracking-[-0.04em]"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        whileInView={{ strokeDashoffset: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3.2, ease: "easeInOut" }}
      >
        {text}
      </motion.text>

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.2"
        mask={`url(#${maskId})`}
        className={clsx(
          "font-sans text-[124px] font-bold tracking-[-0.04em] transition-opacity duration-500",
          hovered ? "opacity-100" : "opacity-0",
        )}
        fill={`url(#${gradientId})`}
        fillOpacity={0.9}
      >
        {text}
      </text>
    </svg>
  );
}
