"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { clsx } from "@/lib/clsx";

export interface Panel {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}

/**
 * A row of photo panels where the active one widens to reveal its copy. The
 * width change rides on an animated `flex-grow`, so it's a single composited
 * property and stays smooth on mid-range laptops. Stacks vertically on small
 * screens with every panel open.
 */
export function ExpandingPanels({ panels, className }: { panels: Panel[]; className?: string }) {
  const [active, setActive] = useState(0);

  return (
    <div
      className={clsx("flex flex-col gap-3 md:h-[34rem] md:flex-row md:gap-4", className)}
      onMouseLeave={() => setActive(0)}
    >
      {panels.map((panel, i) => {
        const open = i === active;
        return (
          <Link
            key={panel.href}
            href={panel.href}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            aria-label={`${panel.title} — ${panel.description}`}
            style={{ flexGrow: open ? 3.4 : 1 }}
            className={clsx(
              "group relative isolate flex min-h-64 basis-0 flex-col justify-end overflow-hidden rounded-3xl border border-white/8 bg-surface shadow-card",
              "transition-[flex-grow,border-color,box-shadow] duration-700 ease-out-expo focus-visible:ring-2 focus-visible:ring-ember-400 focus-visible:outline-none",
              open ? "border-ember-500/40 shadow-glow" : "hover:border-white/15",
            )}
          >
            <Image
              src={panel.image}
              alt=""
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className={clsx(
                "object-cover transition duration-1000 ease-out-expo",
                open ? "scale-100 saturate-100" : "md:scale-[1.08] md:saturate-[0.35] md:brightness-75",
              )}
            />
            <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
            <span
              aria-hidden
              className={clsx(
                "absolute inset-0 bg-ember-600/20 mix-blend-multiply transition-opacity duration-700",
                open ? "opacity-0" : "opacity-0 md:opacity-100",
              )}
            />

            {/* Collapsed: index + rotated title along the bottom edge. */}
            <span
              className={clsx(
                "absolute inset-x-0 bottom-0 hidden flex-col items-center gap-4 pb-7 transition-opacity duration-500 md:flex",
                open ? "pointer-events-none opacity-0" : "opacity-100 delay-200",
              )}
            >
              <span className="text-lg font-semibold tracking-tight whitespace-nowrap text-white [writing-mode:vertical-rl] rotate-180">
                {panel.title}
              </span>
              <span className="font-mono text-xs text-ember-300 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
            </span>

            {/* Expanded copy. */}
            <span
              className={clsx(
                "relative z-10 flex flex-col p-6 transition duration-500 ease-out-expo md:p-8",
                open ? "translate-y-0 opacity-100 delay-200" : "md:translate-y-4 md:opacity-0",
              )}
            >
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-ember-300 uppercase">
                {panel.eyebrow}
              </span>
              <span className="mt-3 flex items-end justify-between gap-6">
                <span className="max-w-md">
                  <span className="block text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    {panel.title}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-white/70 md:text-base">
                    {panel.description}
                  </span>
                </span>
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur transition duration-500 ease-out-expo group-hover:border-ember-400 group-hover:bg-ember-500">
                  <ArrowUpRight className="size-5 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
