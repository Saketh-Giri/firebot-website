"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { clsx } from "@/lib/clsx";

export interface FlowingMenuItem {
  label: string;
  href: string;
  meta?: string;
  image?: string;
  /** Short phrase repeated in the sliding band. Defaults to the label. */
  tagline?: string;
}

/**
 * Stacked full-width links; hovering one slides an ember band in from the
 * edge the pointer entered through, carrying a repeating tagline and image,
 * after React Bits' "Flowing Menu".
 */
export function FlowingMenu({ items, className }: { items: FlowingMenuItem[]; className?: string }) {
  return (
    <nav className={clsx("divide-y divide-white/8 border-y border-white/8", className)}>
      {items.map((item, i) => (
        <Row key={item.href} item={item} index={i} />
      ))}
    </nav>
  );
}

function Row({ item, index }: { item: FlowingMenuItem; index: number }) {
  const reduce = useReducedMotion();
  const [edge, setEdge] = useState<"top" | "bottom">("top");
  const [hover, setHover] = useState(false);

  const edgeFor = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    return e.clientY - rect.top < rect.height / 2 ? "top" : "bottom";
  };

  const tagline = item.tagline ?? item.label;
  const repeat = Array.from({ length: 6 });

  return (
    <Link
      href={item.href}
      onPointerEnter={(e) => {
        // The band stays parked off-screen for reduced-motion visitors. Gating
        // the handlers (not the markup) keeps server and client trees identical.
        if (reduce || e.pointerType !== "mouse") return;
        setEdge(edgeFor(e));
        setHover(true);
      }}
      onPointerLeave={(e) => {
        if (reduce || e.pointerType !== "mouse") return;
        setEdge(edgeFor(e));
        setHover(false);
      }}
      className="group relative block overflow-hidden focus-visible:outline-none"
    >
      <div className="container-page relative flex items-center justify-between gap-6 py-7 sm:py-9">
        <div className="flex min-w-0 items-baseline gap-5 sm:gap-8">
          <span className="font-mono text-xs text-dim tabular-nums transition-colors duration-300 group-hover:text-white/80">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="truncate text-3xl font-semibold tracking-tight text-bright transition-colors duration-300 group-hover:text-white sm:text-5xl lg:text-6xl">
            {item.label}
          </span>
        </div>
        <div className="flex shrink-0 items-center gap-4">
          {item.meta && (
            <span className="hidden font-mono text-xs tracking-[0.16em] text-dim uppercase transition-colors duration-300 group-hover:text-white/80 sm:inline">
              {item.meta}
            </span>
          )}
          <span className="grid size-10 place-items-center rounded-full border border-white/12 text-muted transition duration-300 group-hover:border-white/40 group-hover:bg-white group-hover:text-ember-600 group-focus-visible:ring-2 group-focus-visible:ring-ember-400">
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>

      <motion.div
        aria-hidden
        initial={false}
        animate={{ y: hover ? "0%" : edge === "top" ? "-101%" : "101%" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className="pointer-events-none absolute inset-0 z-10 flex items-center overflow-hidden bg-gradient-to-r from-ember-600 via-ember-500 to-ember-600"
      >
        <div className="animate-marquee-band flex w-max items-center gap-8 pl-8">
          {repeat.map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="text-2xl font-semibold tracking-tight whitespace-nowrap text-white uppercase sm:text-3xl">
                {tagline}
              </span>
              {item.image ? (
                <span className="relative block h-14 w-24 overflow-hidden rounded-lg ring-1 ring-white/30 sm:h-16 sm:w-28">
                  <Image src={item.image} alt="" fill sizes="7rem" className="object-cover" />
                </span>
              ) : (
                <span className="size-2 rounded-full bg-white/70" />
              )}
            </span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
}
