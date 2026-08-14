import Image from "next/image";
import type { ReactNode } from "react";
import { BrandMark } from "./BrandMark";
import { Eyebrow } from "./Section";
import { clsx } from "@/lib/clsx";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  lede?: ReactNode;
  image?: string;
  logo?: string;
  children?: ReactNode;
  brandMark?: boolean;
}

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  logo,
  children,
  brandMark = false,
}: PageHeroProps) {
  return (
    <header
      className={clsx(
        "relative isolate overflow-hidden",
        image
          ? "flex min-h-[68svh] flex-col justify-end pt-36 pb-16 md:min-h-[78svh] md:pb-24"
          : "pt-36 pb-14 md:pt-44 md:pb-20",
      )}
    >
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-20 bg-gradient-to-t from-ink via-ink/70 to-ink/25"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-ink/80 to-transparent"
          />
        </>
      )}

      {!image && (
        <>
          <div aria-hidden className="bg-grid mask-fade-b absolute inset-0 -z-30 opacity-40" />
          <div
            aria-hidden
            className="animate-drift absolute -top-52 -right-32 -z-30 size-[38rem] rounded-full bg-ember-600/18 blur-[120px]"
          />
        </>
      )}

      <div className="container-page relative">
        {brandMark && <BrandMark size="md" showNumber className="mb-8" />}

        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="text-gradient-bright text-balance-tight mt-6 text-title font-semibold">
              {title}
            </h1>
            {lede && (
              <div className="mt-5 max-w-lg text-lg leading-relaxed text-white/70">{lede}</div>
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
    </header>
  );
}
