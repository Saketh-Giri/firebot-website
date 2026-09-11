"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { clsx } from "@/lib/clsx";

export interface MarqueeImage {
  src: string;
  alt: string;
}

export function Marquee3D({
  images,
  className,
  columns = 4,
  duration = 70,
}: {
  images: MarqueeImage[];
  className?: string;
  columns?: 3 | 4 | 5 | 6;

  duration?: number;
}) {
  const reduce = useReducedMotion();
  const perColumn = Math.ceil(images.length / columns);
  const cols = Array.from({ length: columns }, (_, c) =>
    images.slice(c * perColumn, (c + 1) * perColumn),
  ).filter((c) => c.length > 0);

  return (
    <div aria-hidden className={clsx("overflow-hidden", className)}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="size-[3000px] shrink-0 scale-[0.6] sm:scale-75 lg:scale-100">
          <div
            className="grid size-full origin-center gap-7 [transform-style:preserve-3d]"
            style={{
              gridTemplateColumns: `repeat(${cols.length}, minmax(0, 1fr))`,
              transform: "rotateX(55deg) rotateZ(-45deg)",
            }}
          >
            {cols.map((col, c) => {
              const up = c % 2 === 0;

              const doubled = [...col, ...col];
              return (
                <motion.div
                  key={c}
                  className="flex flex-col gap-7"
                  style={{ y: up ? "0%" : "-50%" }}
                  animate={reduce ? undefined : { y: up ? ["0%", "-50%"] : ["-50%", "0%"] }}
                  transition={{ duration: duration + c * 9, ease: "linear", repeat: Infinity }}
                >
                  {doubled.map((img, i) => (
                    <div
                      key={`${img.src}-${i}`}
                      className="relative aspect-[970/700] w-full overflow-hidden rounded-lg ring-1 ring-white/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]"
                    >
                      <Image
                        src={img.src}
                        alt=""
                        fill
                        sizes="430px"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
