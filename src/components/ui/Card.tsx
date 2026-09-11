import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { clsx } from "@/lib/clsx";

const spotlight =
  "after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:opacity-0 after:transition-opacity after:duration-500 after:bg-[radial-gradient(85%_60%_at_50%_0%,rgba(224,31,38,0.16),transparent_70%)]";

const shell =
  "relative isolate overflow-hidden rounded-2xl border border-white/8 surface-panel shadow-card before:pointer-events-none before:absolute before:inset-x-6 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent";

const interactiveShell =
  "transition duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-ember-500/40 hover:shadow-glow hover:after:opacity-100";

export function Card({
  children,
  className,
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={clsx(
        shell,
        "p-7",
        interactive && spotlight,
        interactive && interactiveShell,
        className,
      )}
    >
      {children}
    </div>
  );
}

export function IconCard({
  title,
  description,
  image,
  className,
}: {
  title: string;
  description: string;
  image?: string;
  className?: string;
}) {
  return (
    <Card interactive className={clsx("group flex flex-col gap-5", className)}>
      {image && (
        <div className="flex size-16 items-center justify-center rounded-2xl border border-white/10 bg-white/6 p-2.5 transition duration-500 ease-out-expo group-hover:border-ember-500/40 group-hover:bg-ember-500/10">
          <Image src={image} alt="" width={64} height={64} className="size-full object-contain" />
        </div>
      )}
      <div>
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-3 leading-relaxed text-muted">{description}</p>
      </div>
    </Card>
  );
}

export function LinkCard({
  href,
  eyebrow,
  title,
  description,
  image,
  media,
  className,
}: {
  href: string;
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;

  media?: ReactNode;
  className?: string;
}) {
  const external = href.startsWith("http");
  const hasMedia = Boolean(image || media);

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className={clsx(
        shell,
        spotlight,
        interactiveShell,
        "group flex h-full flex-col",
        !hasMedia && "justify-between gap-8 p-7",
        className,
      )}
    >
      {media && !image && (
        <div className="relative aspect-16/10 overflow-hidden border-b border-white/8">
          <div className="absolute inset-0 transition duration-700 ease-out-expo group-hover:scale-[1.03]">
            {media}
          </div>
        </div>
      )}
      {image && (
        <span className="relative block aspect-16/10 overflow-hidden">
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-700 ease-out-expo group-hover:scale-[1.06]"
          />
          <span
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent"
          />
        </span>
      )}
      <span className={clsx("flex flex-1 flex-col justify-between gap-6", hasMedia && "p-6")}>
        <span>
          {eyebrow && (
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-ember-300 uppercase">
              {eyebrow}
            </span>
          )}
          <span className={clsx("block text-xl font-semibold tracking-tight", eyebrow && "mt-2")}>
            {title}
          </span>
          {description && (
            <span className="mt-2 block text-sm leading-relaxed text-muted">{description}</span>
          )}
        </span>
        <span className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted transition duration-500 ease-out-expo group-hover:border-ember-500/50 group-hover:bg-ember-500 group-hover:text-white">
          <ArrowUpRight
            aria-hidden
            className="size-4 transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </span>
    </Link>
  );
}
