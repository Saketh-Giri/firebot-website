"use client";

import { motion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { clsx } from "@/lib/clsx";

export interface RoadmapStage {
  /** Short marker, e.g. "Year 1". */
  label: string;
  title: string;
  goals: string[];
}

const AMP = 34;

/**
 * Multi-year plan drawn as a road. On wide screens the stages sit on a wavy
 * two-lane road (a nod to the team's original roadmap graphic); an ember line
 * paints along it as you scroll and each stage lights up when the line
 * reaches it. On small screens the same data stacks into a vertical spine.
 */
export function Roadmap({ stages, className }: { stages: RoadmapStage[]; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 82%", "end 58%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 26, mass: 0.5 });

  const n = stages.length;
  const centers = stages.map((_, i) => ((i + 0.5) / n) * 1000);
  const road = buildRoad(centers);

  return (
    <div ref={ref} className={clsx("relative grid md:auto-cols-fr md:grid-flow-col", className)}>
      {/* Horizontal road (md+). Stretched to the full grid width so the
          stage centres line up with the columns below. */}
      <svg
        aria-hidden
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="mask-fade-x pointer-events-none absolute inset-x-0 top-0 hidden h-24 w-full overflow-visible md:block"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={road} stroke="rgba(255,255,255,0.09)" strokeWidth={17} />
        <path d={road} stroke="#15181f" strokeWidth={14} />
        <path d={road} stroke="rgba(255,255,255,0.32)" strokeWidth={1.4} strokeDasharray="9 9" />
        <motion.path
          d={road}
          stroke="rgba(224,31,38,0.45)"
          strokeWidth={11}
          className="blur-[5px]"
          style={{ pathLength: progress }}
        />
        <motion.path d={road} stroke="#f6564f" strokeWidth={2.6} style={{ pathLength: progress }} />
      </svg>

      {/* Vertical spine (mobile). */}
      <span
        aria-hidden
        className="absolute top-3 bottom-3 left-[7.5px] w-px border-l border-dashed border-white/15 md:hidden"
      />

      {stages.map((stage, i) => (
        <Stage key={stage.label} stage={stage} index={i} at={(i + 0.5) / n} progress={progress} />
      ))}
    </div>
  );
}

function Stage({
  stage,
  index,
  at,
  progress,
}: {
  stage: RoadmapStage;
  index: number;
  at: number;
  progress: MotionValue<number>;
}) {
  const lit = useTransform(progress, [at - 0.045, at + 0.005], [0, 1]);
  const background = useTransform(lit, [0, 1], ["#0c0e12", "#e01f26"]);
  const borderColor = useTransform(lit, [0, 1], ["rgba(255,255,255,0.18)", "#ff8d83"]);
  const boxShadow = useTransform(
    lit,
    (v) => `0 0 0 ${(v * 6).toFixed(1)}px rgba(224,31,38,${(v * 0.16).toFixed(3)}), 0 0 ${(v * 26).toFixed(0)}px rgba(224,31,38,${(v * 0.55).toFixed(3)})`,
  );
  const scale = useTransform(lit, [0, 1], [1, 1.12]);
  const opacity = useTransform(lit, [0, 1], [0.42, 1]);
  const labelColor = useTransform(lit, [0, 1], ["#6a7182", "#ff8d83"]);

  return (
    <div className="relative pb-10 pl-10 last:pb-0 md:pt-28 md:pr-8 md:pb-0 md:pl-0 md:last:pr-0">
      <motion.span
        aria-hidden
        style={{ backgroundColor: background, borderColor, boxShadow, scale }}
        className="absolute top-1 left-0 z-10 size-4 rounded-full border md:top-12 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
      />
      <motion.div style={{ opacity }}>
        <motion.p
          style={{ color: labelColor }}
          className="font-mono text-xs font-semibold tracking-[0.22em] uppercase tabular-nums"
        >
          {stage.label}
        </motion.p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-bright">{stage.title}</h3>
        <ol className="mt-5 space-y-3">
          {stage.goals.map((goal, j) => (
            <li key={goal} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span className="shrink-0 pt-0.5 font-mono text-xs text-dim tabular-nums">
                {String(j + 1).padStart(2, "0")}
              </span>
              <span>{goal}</span>
            </li>
          ))}
        </ol>
      </motion.div>
      <span className="sr-only">Stage {index + 1}</span>
    </div>
  );
}

/** Sine-like road through every stage centre at y=50, alternating humps. */
function buildRoad(centers: number[]) {
  const y = 50;
  let d = `M -40 ${y} H ${centers[0]}`;
  for (let i = 0; i < centers.length - 1; i++) {
    const xa = centers[i];
    const xb = centers[i + 1];
    const mid = (xa + xb) / 2;
    const k = (xb - xa) * 0.28;
    const peak = i % 2 === 0 ? y - AMP : y + AMP;
    d += ` C ${xa + k} ${y} ${mid - k} ${peak} ${mid} ${peak}`;
    d += ` C ${mid + k} ${peak} ${xb - k} ${y} ${xb} ${y}`;
  }
  d += ` H 1040`;
  return d;
}
