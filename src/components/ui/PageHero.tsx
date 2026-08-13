import Image from "next/image";
import type { ReactNode } from "react";
import { BrandMark } from "./BrandMark";
import { Eyebrow } from "./Section";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  lede?: ReactNode;
  image?: string;
  logo?: string;
  children?: ReactNode;
  /** Keep brand lockup on by default — never tuck Firebots into a corner. */
  brandMark?: boolean;
}

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  logo,
  children,
  brandMark = true,
}: PageHeroProps) {
  return (
    <header className="relative isolate overflow-hidden pt-36 pb-14 md:pt-44 md:pb-20">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="mask-fade-b -z-20 object-cover opacity-35"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-20 bg-gradient-to-b from-ink/85 via-ink/80 to-ink"
          />
        </>
      )}

      <div aria-hidden className="bg-grid mask-fade-b absolute inset-0 -z-30 opacity-40" />
      <div
        aria-hidden
        className="animate-drift absolute -top-52 -right-32 -z-30 size-[38rem] rounded-full bg-ember-600/18 blur-[120px]"
      />
      <div
        aria-hidden
        className="animate-drift-slow absolute -bottom-64 -left-40 -z-30 size-[32rem] rounded-full bg-ember-700/12 blur-[120px]"
      />

      <div className="container-page relative">
        {brandMark && <BrandMark size="md" showNumber className="mb-8" />}

        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="text-gradient-bright text-balance-tight mt-6 text-title font-semibold">
              {title}
            </h1>
            {lede && (
              <div className="text-pretty-tight mt-5 max-w-xl text-lg leading-relaxed text-muted">
                {lede}
              </div>
            )}
            {children && <div className="mt-8">{children}</div>}
          </div>
          {logo && (
            <div className="shrink-0 rounded-2xl border border-white/10 bg-white/95 p-6 shadow-lift">
              <Image
                src={logo}
                alt=""
                width={160}
                height={160}
                className="h-20 w-auto object-contain"
              />
            </div>
          )}
        </div>
      </div>

      <div aria-hidden className="hairline absolute inset-x-0 bottom-0" />
    </header>
  );
}
