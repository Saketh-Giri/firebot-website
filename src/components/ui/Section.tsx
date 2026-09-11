import type { ReactNode } from "react";
import { clsx } from "@/lib/clsx";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  heading?: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
  className?: string;

  narrow?: boolean;
  align?: "start" | "center";

  tone?: "default" | "surface" | "glow";
}

export function Section({
  id,
  eyebrow,
  heading,
  lede,
  children,
  className,
  narrow = false,
  align = "start",
  tone = "default",
}: SectionProps) {
  const centered = align === "center";

  return (
    <section
      id={id}
      className={clsx(
        "relative isolate py-20 md:py-28",
        id && "scroll-mt-28",
        tone === "surface" &&
          "border-y border-white/6 bg-gradient-to-b from-surface/80 via-ink-2 to-surface/50",
        tone === "glow" && "overflow-hidden",
        className,
      )}
    >
      {tone === "glow" && (
        <div
          aria-hidden
          className="animate-drift pointer-events-none absolute top-1/2 left-1/2 -z-10 size-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember-600/12 blur-[130px]"
        />
      )}

      <div className="container-page">
        {(eyebrow || heading || lede) && (
          <div
            className={clsx(
              "mb-14 md:mb-18",
              centered && "mx-auto text-center",
              narrow ? "max-w-3xl" : "max-w-4xl",
            )}
          >
            {eyebrow && <Eyebrow className={centered ? "mx-auto" : undefined}>{eyebrow}</Eyebrow>}
            {heading && (
              <h2 className="text-gradient-bright text-balance-tight mt-6 text-title font-semibold">
                {heading}
              </h2>
            )}
            {lede && (
              <div className="text-pretty-tight mt-6 space-y-4 text-lg leading-relaxed text-muted md:text-xl">
                {lede}
              </div>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={clsx(
        "inline-flex w-fit items-center gap-2.5 rounded-full border border-ember-500/25 bg-ember-500/8 py-1.5 pr-4 pl-3 font-mono text-[0.7rem] font-semibold tracking-[0.2em] text-ember-200 uppercase backdrop-blur-sm",
        className,
      )}
    >
      <span aria-hidden className="relative flex size-1.5">
        <span className="animate-pulse-ring absolute inline-flex size-full rounded-full bg-ember-400" />
        <span className="relative inline-flex size-1.5 rounded-full bg-ember-400" />
      </span>
      {children}
    </p>
  );
}

export function Prose({ paragraphs, className }: { paragraphs: string[]; className?: string }) {
  return (
    <div className={clsx("text-pretty-tight space-y-5 text-lg leading-relaxed text-muted", className)}>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}
    </div>
  );
}
