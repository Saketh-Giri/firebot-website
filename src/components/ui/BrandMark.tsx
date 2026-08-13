import Image from "next/image";
import { clsx } from "@/lib/clsx";

type Size = "md" | "lg" | "display";

const sizes: Record<Size, { mark: string; name: string; meta: string; gap: string }> = {
  md: {
    mark: "size-12",
    name: "text-2xl tracking-[-0.03em]",
    meta: "text-[0.65rem] tracking-[0.18em]",
    gap: "gap-3",
  },
  lg: {
    mark: "size-16 md:size-20",
    name: "text-3xl tracking-[-0.03em] md:text-4xl",
    meta: "text-xs tracking-[0.18em]",
    gap: "gap-4",
  },
  display: {
    mark: "size-20 md:size-28",
    name: "text-4xl tracking-[-0.04em] md:text-6xl",
    meta: "text-sm tracking-[0.2em] md:text-base",
    gap: "gap-5 md:gap-6",
  },
};

/**
 * Hero-level brand lockup. Firebots is the signal; the org name sits under it.
 */
export function BrandMark({
  size = "lg",
  className,
  showNumber = true,
}: {
  size?: Size;
  className?: string;
  showNumber?: boolean;
}) {
  const s = sizes[size];

  return (
    <div className={clsx("flex items-center", s.gap, className)}>
      <Image
        src="/images/shared/logo.png"
        alt=""
        width={112}
        height={112}
        priority={size === "display"}
        className={clsx(
          "shrink-0 rounded-full ring-1 ring-white/15 shadow-[0_0_40px_-8px_rgba(224,31,38,0.55)]",
          s.mark,
        )}
      />
      <div className="min-w-0 leading-none">
        <p className={clsx("font-semibold uppercase", s.name)}>Firebots</p>
        <p
          className={clsx(
            "mt-2 font-mono font-semibold text-ember-400 uppercase",
            s.meta,
          )}
        >
          {showNumber ? "3501 · " : ""}
          Fremont High Robotics
        </p>
      </div>
    </div>
  );
}
