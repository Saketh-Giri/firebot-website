"use client";

import { useId, useState, type ReactNode } from "react";
import { Plus } from "lucide-react";
import { clsx } from "@/lib/clsx";

export interface AccordionItem {
  title: string;
  meta?: string;
  content: ReactNode;
}

export function Accordion({
  items,
  defaultOpen,
  className,
}: {
  items: AccordionItem[];
  /** Index of the row expanded on first render. */
  defaultOpen?: number;
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen ?? null);
  const id = useId();

  return (
    <div className={clsx("divide-y divide-white/8 border-y border-white/8", className)}>
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <div
            key={item.title}
            className={clsx(
              "group relative transition-colors duration-500",
              expanded && "bg-white/[0.025]",
            )}
          >
            <span
              aria-hidden
              className={clsx(
                "absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-ember-400 to-ember-600 transition-opacity duration-500",
                expanded ? "opacity-100" : "opacity-0",
              )}
            />
            <h3>
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={`${id}-panel-${index}`}
                id={`${id}-trigger-${index}`}
                onClick={() => setOpen(expanded ? null : index)}
                className="flex w-full items-center justify-between gap-6 px-1 py-6 text-left transition-colors duration-300 hover:text-ember-200 sm:px-5"
              >
                <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="text-lg font-semibold tracking-tight">{item.title}</span>
                  {item.meta && (
                    <span className="font-mono text-xs tracking-[0.14em] text-dim uppercase">
                      {item.meta}
                    </span>
                  )}
                </span>
                <span
                  className={clsx(
                    "flex size-8 shrink-0 items-center justify-center rounded-full border transition duration-500 ease-out-expo",
                    expanded
                      ? "rotate-45 border-ember-500/50 bg-ember-500/15 text-ember-200"
                      : "border-white/10 bg-white/5 text-muted group-hover:border-ember-500/40 group-hover:text-ember-300",
                  )}
                >
                  <Plus aria-hidden className="size-4" />
                </span>
              </button>
            </h3>
            <div
              className={clsx(
                "grid transition-all duration-500 ease-out-expo",
                expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <div
                  id={`${id}-panel-${index}`}
                  role="region"
                  aria-labelledby={`${id}-trigger-${index}`}
                  inert={!expanded}
                  className="px-1 pb-8 sm:px-5"
                >
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
