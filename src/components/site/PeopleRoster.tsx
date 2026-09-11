"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import type { Person, PersonGroup } from "@/content/about/people";
import { clsx } from "@/lib/clsx";
import { useIsClient } from "@/lib/use-is-client";

export function PeopleRoster({ groups }: { groups: PersonGroup[] }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [open, setOpen] = useState<Person | null>(null);

  const portalTarget = useIsClient() ? document.body : null;
  const layoutNs = useId();
  const reduce = useReducedMotion();

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  return (
    <div className="space-y-20">
      {groups.map((group) => (
        <section key={group.heading}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-white/8 pb-5">
            <h2 className="font-mono text-xs font-semibold tracking-[0.2em] text-ember-300 uppercase">
              {group.heading}
            </h2>
            <p className="font-mono text-xs text-dim tabular-nums">
              {String(group.people.length).padStart(2, "0")}
            </p>
          </div>

          <div
            className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4"
            onPointerLeave={() => setHovered(null)}
          >
            {group.people.map((person) => {
              const key = `${group.heading}:${person.name}`;
              const dim = hovered !== null && hovered !== key && !reduce;
              const expandable = Boolean(person.bio);
              return (
                <motion.div
                  key={key}
                  layoutId={`${layoutNs}-${key}`}
                  onPointerEnter={() => setHovered(key)}
                  animate={{
                    opacity: dim ? 0.55 : 1,
                    scale: dim ? 0.975 : 1,
                    filter: dim
                      ? "blur(2px) saturate(0.7)"
                      : "blur(0px) saturate(1)",
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full"
                >
                  <PersonTile
                    person={person}
                    expandable={expandable}
                    onOpen={expandable ? () => setOpen(person) : undefined}
                    layoutPrefix={`${layoutNs}-${key}`}
                  />
                </motion.div>
              );
            })}
          </div>
        </section>
      ))}

      {portalTarget &&
        createPortal(
          <AnimatePresence>
            {open && (
              <ExpandedPerson
                key="expanded"
                person={open}
                layoutPrefix={`${layoutNs}-${groups.find((g) => g.people.includes(open))?.heading}:${open.name}`}
                onClose={close}
              />
            )}
          </AnimatePresence>,
          portalTarget,
        )}
    </div>
  );
}

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

function PersonTile({
  person,
  expandable,
  onOpen,
  layoutPrefix,
}: {
  person: Person;
  expandable: boolean;
  onOpen?: () => void;
  layoutPrefix: string;
}) {
  const meta = person.classOf ?? person.since;
  const shell = clsx(
    "group relative isolate flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-surface text-left shadow-card",
    "transition duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-ember-500/40 hover:shadow-glow",
    expandable &&
      "cursor-pointer focus-visible:ring-2 focus-visible:ring-ember-400 focus-visible:outline-none",
  );

  const inner = (
    <>
      <motion.div
        layoutId={`${layoutPrefix}-img`}
        className="relative aspect-4/5 w-full overflow-hidden bg-surface-2"
      >
        {person.image ? (
          <Image
            src={person.image}
            alt={person.name}
            fill
            sizes="(min-width: 1024px) 24vw, 46vw"
            className="object-cover object-top transition duration-700 ease-out-expo group-hover:scale-[1.06]"
          />
        ) : (
          <div className="flex size-full items-center justify-center bg-gradient-to-br from-surface-2 to-surface text-4xl font-semibold text-line-2">
            {initialsOf(person.name)}
          </div>
        )}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-ember-600/0 transition-colors duration-500 group-hover:bg-ember-600/12"
        />
        {meta && (
          <span className="absolute top-3 right-3 rounded-full border border-white/12 bg-ink/65 px-2 py-0.5 font-mono text-[0.6rem] tracking-[0.12em] text-bright/70 uppercase backdrop-blur-sm sm:top-3.5 sm:right-3.5 sm:px-2.5 sm:py-1 sm:text-[0.65rem] sm:tracking-[0.14em]">
            {meta}
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-5">
          <motion.h3
            layoutId={`${layoutPrefix}-name`}
            className="text-[0.95rem] leading-tight font-semibold tracking-tight text-white sm:text-lg"
          >
            {person.name}
          </motion.h3>
          <motion.p
            layoutId={`${layoutPrefix}-role`}
            className="mt-1 text-xs leading-snug font-medium text-ember-300 sm:mt-1.5 sm:text-sm"
          >
            {person.role}
          </motion.p>
        </div>
      </motion.div>

      {expandable && (
        <div className="flex items-center justify-between border-t border-white/6 px-3.5 py-2.5 sm:px-5 sm:py-3">
          <span className="font-mono text-[10px] tracking-[0.14em] text-dim uppercase sm:text-[11px] sm:tracking-[0.16em]">
            Read bio
          </span>
          <span
            aria-hidden
            className="grid size-6 place-items-center rounded-full border border-white/10 text-dim transition group-hover:border-ember-400/50 group-hover:text-ember-300"
          >
            <span className="relative block size-2.5">
              <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
              <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-current transition-transform duration-300 group-hover:rotate-90" />
            </span>
          </span>
        </div>
      )}
    </>
  );

  if (expandable) {
    return (
      <button type="button" onClick={onOpen} className={shell}>
        {inner}
      </button>
    );
  }
  return <article className={shell}>{inner}</article>;
}

function ExpandedPerson({
  person,
  layoutPrefix,
  onClose,
}: {
  person: Person;
  layoutPrefix: string;
  onClose: () => void;
}) {
  const meta = person.classOf ?? person.since;
  return (
    <div className="fixed inset-0 z-[120] grid place-items-center p-4 sm:p-8">
      <motion.button
        type="button"
        aria-label="Close"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={person.name}
        layoutId={layoutPrefix}
        className="relative flex max-h-[calc(100dvh-2rem)] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-glow sm:max-h-[90vh] sm:flex-row"
      >
        <motion.div
          layoutId={`${layoutPrefix}-img`}
          className="relative h-[36dvh] w-full shrink-0 overflow-hidden bg-surface-2 sm:h-auto sm:w-72"
        >
          {person.image ? (
            <Image
              src={person.image}
              alt={person.name}
              fill
              sizes="(min-width: 640px) 18rem, 90vw"
              className="object-cover object-top"
            />
          ) : (
            <div className="flex size-full items-center justify-center bg-gradient-to-br from-surface-2 to-surface text-5xl font-semibold text-line-2">
              {initialsOf(person.name)}
            </div>
          )}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent sm:hidden"
          />
        </motion.div>

        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex items-start justify-between gap-4 p-6 pb-0 sm:p-8 sm:pb-0">
            <div>
              {meta && (
                <p className="font-mono text-[0.65rem] tracking-[0.16em] text-dim uppercase">
                  {meta}
                </p>
              )}
              <motion.h3
                layoutId={`${layoutPrefix}-name`}
                className="mt-1 text-2xl font-semibold tracking-tight text-white"
              >
                {person.name}
              </motion.h3>
              <motion.p
                layoutId={`${layoutPrefix}-role`}
                className="mt-1.5 text-sm font-medium text-ember-300"
              >
                {person.role}
              </motion.p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="grid size-9 shrink-0 place-items-center rounded-full border border-white/10 text-muted transition hover:border-ember-400/50 hover:text-white"
            >
              <X className="size-4" />
            </button>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ delay: 0.15, duration: 0.35 }}
            className="min-h-0 flex-1 overflow-y-auto p-6 pt-5 sm:p-8 sm:pt-5"
          >
            <p className="text-base leading-relaxed text-muted">{person.bio}</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
