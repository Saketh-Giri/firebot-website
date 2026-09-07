"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { useState } from "react";
import type { OrgBranch, OrgNode } from "@/content/about/structure";
import { clsx } from "@/lib/clsx";

/**
 * The organization as a tree. A root pill, a bus that draws itself across
 * to the four branch heads when scrolled into view, and a spine of children
 * under each head. Hovering (or focusing into) a branch lights its connectors
 * ember so you can trace one team from top to bottom. On phones the bus goes
 * away and the branches stack, each keeping its own spine.
 */
export function OrgChart({
  root,
  branches,
  className,
}: {
  root: OrgNode;
  branches: OrgBranch[];
  className?: string;
}) {
  const [active, setActive] = useState<number | null>(null);
  const n = branches.length;
  const centers = branches.map((_, i) => ((i + 0.5) / n) * 1000);

  return (
    <div
      className={clsx("relative", className)}
      onMouseLeave={() => setActive(null)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setActive(null);
      }}
    >
      {/* Root */}
      <div className="flex flex-col items-center">
        <div className="relative isolate overflow-hidden rounded-full border border-white/12 bg-surface px-6 py-3 text-center shadow-card">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-ember-400/70 to-transparent"
          />
          <p className="font-semibold tracking-tight text-bright">{root.name}</p>
          {root.detail && (
            <p className="mt-0.5 font-mono text-[0.65rem] tracking-[0.18em] text-dim uppercase">
              {root.detail}
            </p>
          )}
        </div>
        {/* Phone: one short drop into the stack. */}
        <span aria-hidden className="h-8 w-px bg-white/15 md:hidden" />
      </div>

      {/* Bus (md+): root → every branch head. */}
      <motion.svg
        aria-hidden
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="hidden h-16 w-full overflow-visible md:block"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.6 }}
      >
        <motion.path d="M 500 0 V 50" stroke="rgba(255,255,255,0.15)" strokeWidth={1.5} variants={drop} />
        <motion.path
          d={`M ${centers[0]} 50 H ${centers[n - 1]}`}
          stroke="rgba(255,255,255,0.15)"
          strokeWidth={1.5}
          variants={bus}
        />
        {centers.map((x, i) => (
          <motion.path
            key={x}
            d={`M ${x} 50 V 100`}
            stroke={active === i ? "#f6564f" : "rgba(255,255,255,0.15)"}
            strokeWidth={1.5}
            variants={drop}
            style={{ transition: "stroke 0.4s" }}
          />
        ))}
        {/* Lit segment of the bus from the root to the hovered branch. */}
        {active !== null && (
          <motion.path
            key={`lit-${active}`}
            d={`M 500 0 V 50 H ${centers[active]} V 100`}
            stroke="#f6564f"
            strokeWidth={1.6}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="drop-shadow-[0_0_6px_rgba(246,86,79,0.8)]"
          />
        )}
      </motion.svg>

      <div className="grid gap-4 md:grid-cols-4 md:gap-5">
        {branches.map((branch, i) => (
          <Branch
            key={branch.badge}
            branch={branch}
            index={i}
            lit={active === i}
            dimmed={active !== null && active !== i}
            onActivate={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
}

const drop: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  shown: { pathLength: 1, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
const bus: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  shown: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
};

function Branch({
  branch,
  index,
  lit,
  dimmed,
  onActivate,
}: {
  branch: OrgBranch;
  index: number;
  lit: boolean;
  dimmed: boolean;
  onActivate: () => void;
}) {
  const head = (
    <>
      <span className="flex items-start justify-between gap-3">
        <span
          className={clsx(
            "rounded-md border px-1.5 py-0.5 font-mono text-[0.62rem] font-semibold tracking-[0.18em] uppercase transition-colors duration-400",
            lit
              ? "border-ember-500/50 bg-ember-500/15 text-ember-200"
              : "border-white/10 bg-white/5 text-muted",
          )}
        >
          {branch.badge}
        </span>
        {branch.href && (
          <ArrowUpRight
            aria-hidden
            className={clsx(
              "size-4 shrink-0 transition duration-500 ease-out-expo",
              lit ? "translate-x-0 text-ember-300 opacity-100" : "-translate-x-1 text-dim opacity-60",
            )}
          />
        )}
      </span>
      <span className="mt-3 block text-lg font-semibold tracking-tight text-bright">{branch.name}</span>
      {branch.detail && <span className="mt-0.5 block text-sm text-muted">{branch.detail}</span>}
    </>
  );

  const headClass = clsx(
    "relative isolate block overflow-hidden rounded-2xl border bg-surface p-5 shadow-card transition duration-500 ease-out-expo",
    lit ? "border-ember-500/45 shadow-glow" : "border-white/10",
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: 0.35 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={onActivate}
      onFocusCapture={onActivate}
      className={clsx("min-w-0 transition-opacity duration-500", dimmed && "opacity-60")}
    >
      {branch.href ? (
        <Link href={branch.href} className={headClass}>
          {head}
        </Link>
      ) : (
        <div className={headClass}>{head}</div>
      )}

      {/* Spine + children */}
      <ol className="relative mt-2 ml-6 border-l border-white/12 pt-2 pl-5 md:ml-7">
        <span
          aria-hidden
          className={clsx(
            "absolute top-0 -left-px w-px bg-gradient-to-b from-ember-400 to-ember-500/40 transition-[height] duration-700 ease-out-expo",
            lit ? "h-full" : "h-0",
          )}
        />
        {branch.children.map((child, j) => (
          <li key={child.name} className="relative py-1.5">
            {/* Tick from the spine into the node. */}
            <span
              aria-hidden
              className={clsx(
                "absolute top-1/2 -left-5 h-px w-4 transition-colors duration-500",
                lit ? "bg-ember-500/70" : "bg-white/12",
              )}
              style={{ transitionDelay: lit ? `${j * 60}ms` : "0ms" }}
            />
            <ChildNode node={child} lit={lit} />
          </li>
        ))}
      </ol>
    </motion.div>
  );
}

function ChildNode({ node, lit }: { node: OrgNode; lit: boolean }) {
  const inner = (
    <>
      <span className="block text-sm font-medium tracking-tight text-bright">{node.name}</span>
      {node.detail && (
        <span className="mt-0.5 block text-xs leading-relaxed text-muted">{node.detail}</span>
      )}
    </>
  );
  const cls = clsx(
    "block rounded-xl border px-3.5 py-2.5 transition duration-400",
    lit ? "border-white/12 bg-surface" : "border-white/6 bg-surface/50",
  );
  return node.href ? (
    <Link href={node.href} className={clsx(cls, "hover:border-ember-500/40 hover:bg-surface-2")}>
      {inner}
    </Link>
  ) : (
    <div className={cls}>{inner}</div>
  );
}
