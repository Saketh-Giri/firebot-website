import { useId } from "react";
import { clsx } from "@/lib/clsx";

/**
 * Text set on a slowly turning circle, after the React Bits "Circular Text".
 * Pure SVG + CSS animation, so it renders on the server and costs nothing on
 * the main thread. Wraps around a logo in the hero.
 */
export function CircularText({
  text,
  className,
  size = 220,
}: {
  text: string;
  className?: string;
  size?: number;
}) {
  const id = useId();
  const r = 42;

  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={clsx("animate-spin-slow select-none", className)}
    >
      <defs>
        <path
          id={id}
          d={`M 50,50 m -${r},0 a ${r},${r} 0 1,1 ${r * 2},0 a ${r},${r} 0 1,1 -${r * 2},0`}
        />
      </defs>
      <text
        className="fill-current font-mono text-[6.4px] font-semibold tracking-[0.32em] uppercase"
        lengthAdjust="spacing"
      >
        <textPath href={`#${id}`} startOffset="0" textLength={2 * Math.PI * r}>
          {text}
        </textPath>
      </text>
    </svg>
  );
}
