"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useIsClient } from "@/lib/use-is-client";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

export interface GalleryItem {
  title: string;
  image: string;
  /** Intrinsic size, used to lay the masonry out without layout shift. */
  width?: number;
  height?: number;
}

type Dir = "top" | "right" | "bottom" | "left";

const subscribe = (cb: () => void) => {
  const mqs = [
    window.matchMedia("(min-width: 640px)"),
    window.matchMedia("(min-width: 1024px)"),
  ];
  mqs.forEach((mq) => mq.addEventListener("change", cb));
  return () => mqs.forEach((mq) => mq.removeEventListener("change", cb));
};

function useColumnCount(max: 2 | 3 | 4) {
  return useSyncExternalStore(
    subscribe,
    () => {
      if (window.matchMedia("(min-width: 1024px)").matches) return max;
      if (window.matchMedia("(min-width: 640px)").matches)
        return Math.min(2, max);
      return 1;
    },
    () => max,
  );
}

/**
 * Masonry photo grid with per-column parallax (after Aceternity's "Parallax
 * Scroll"), direction-aware hover captions and a keyboard-navigable lightbox.
 */
export function Gallery({
  items,
  columns = 3,
  parallax = true,
}: {
  items: GalleryItem[];
  columns?: 2 | 3 | 4;
  parallax?: boolean;
}) {
  const [active, setActive] = useState<number | null>(null);
  const count = useColumnCount(columns);
  const reduce = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Distribute items to the currently shortest column (by aspect height).
  const cols = useMemo(() => {
    const heights = Array.from({ length: count }, () => 0);
    const buckets: { item: GalleryItem; index: number }[][] = Array.from(
      { length: count },
      () => [],
    );
    items.forEach((item, index) => {
      const ratio = item.width && item.height ? item.height / item.width : 0.75;
      let target = 0;
      for (let c = 1; c < count; c++)
        if (heights[c] < heights[target]) target = c;
      buckets[target].push({ item, index });
      heights[target] += ratio;
    });
    return buckets;
  }, [items, count]);

  // Lightbox is portalled to <body> so it escapes the section's stacking
  // context and covers the fixed header.
  const portalTarget = useIsClient() ? document.body : null;

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (direction: 1 | -1) =>
      setActive((current) =>
        current === null
          ? current
          : (current + direction + items.length) % items.length,
      ),
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [active, close, step]);

  return (
    <>
      <div
        ref={ref}
        className="grid gap-4 sm:gap-5"
        style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
      >
        {cols.map((bucket, c) => (
          <ParallaxColumn
            key={c}
            progress={scrollYProgress}
            enabled={parallax && !reduce && count > 1}
            index={c}
          >
            {bucket.map(({ item, index }) => (
              <Tile
                key={item.image}
                item={item}
                sizes={`(min-width: 1024px) ${Math.round(90 / columns)}vw, (min-width: 640px) 45vw, 92vw`}
                onOpen={() => setActive(index)}
              />
            ))}
          </ParallaxColumn>
        ))}
      </div>

      {portalTarget &&
        createPortal(
          <AnimatePresence>
            {active !== null && (
              <motion.div
                key="lightbox"
                role="dialog"
                aria-modal="true"
                aria-label={items[active].title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-[130] flex flex-col bg-ink/95 p-4 backdrop-blur-xl sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold tracking-tight">
                    {items[active].title}
                  </p>
                  <button
                    type="button"
                    onClick={close}
                    aria-label="Close"
                    className="rounded-full border border-white/12 bg-white/5 p-2.5 transition duration-300 hover:border-ember-500/60 hover:bg-ember-500/15 hover:text-ember-200"
                  >
                    <X aria-hidden className="size-5" />
                  </button>
                </div>

                <div className="relative mt-5 flex-1">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                      key={items[active].image}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.99 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={items[active].image}
                        alt={items[active].title}
                        fill
                        sizes="100vw"
                        className="object-contain"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-5 flex items-center justify-center gap-5">
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous"
                    className="rounded-full border border-white/12 bg-white/5 p-3 transition duration-300 hover:-translate-x-0.5 hover:border-ember-500/60 hover:bg-ember-500/15 hover:text-ember-200"
                  >
                    <ChevronLeft aria-hidden className="size-5" />
                  </button>
                  <p className="font-mono text-xs tracking-[0.18em] text-muted tabular-nums">
                    {String(active + 1).padStart(2, "0")} /{" "}
                    {String(items.length).padStart(2, "0")}
                  </p>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next"
                    className="rounded-full border border-white/12 bg-white/5 p-3 transition duration-300 hover:translate-x-0.5 hover:border-ember-500/60 hover:bg-ember-500/15 hover:text-ember-200"
                  >
                    <ChevronRight aria-hidden className="size-5" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          portalTarget,
        )}
    </>
  );
}

function ParallaxColumn({
  progress,
  enabled,
  index,
  children,
}: {
  progress: MotionValue<number>;
  enabled: boolean;
  index: number;
  children: React.ReactNode;
}) {
  const amount = [-90, 50, -60, 40][index % 4];
  const y = useTransform(progress, [0, 1], [0, enabled ? amount : 0]);
  const zero = useMotionValue(0);
  return (
    <motion.div
      style={{ y: enabled ? y : zero }}
      className="flex flex-col gap-4 sm:gap-5"
    >
      {children}
    </motion.div>
  );
}

function entryDirection(event: React.PointerEvent<HTMLElement>): Dir {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  // Normalise to a square so short/wide tiles bias correctly.
  const ax = Math.abs(x);
  const ay = Math.abs(y);
  if (ax > ay) return x > 0 ? "right" : "left";
  return y > 0 ? "bottom" : "top";
}

const offsets: Record<Dir, { x: string; y: string }> = {
  top: { x: "0%", y: "-100%" },
  bottom: { x: "0%", y: "100%" },
  left: { x: "-100%", y: "0%" },
  right: { x: "100%", y: "0%" },
};

function Tile({
  item,
  sizes,
  onOpen,
}: {
  item: GalleryItem;
  sizes: string;
  onOpen: () => void;
}) {
  const [dir, setDir] = useState<Dir>("bottom");
  const [hover, setHover] = useState(false);
  const reduce = usePrefersReducedMotion();
  const ratio = item.width && item.height ? item.width / item.height : 4 / 3;

  return (
    <button
      type="button"
      onClick={onOpen}
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") setDir(entryDirection(e));
        setHover(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") setDir(entryDirection(e));
        setHover(false);
      }}
      className="group relative block w-full overflow-hidden rounded-2xl border border-white/8 bg-surface text-left shadow-card transition duration-500 ease-out-expo hover:border-ember-500/40 hover:shadow-glow focus-visible:ring-2 focus-visible:ring-ember-400 focus-visible:outline-none"
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes={sizes}
        className="object-cover transition duration-700 ease-out-expo group-hover:scale-[1.06]"
      />
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/75 to-transparent opacity-0 [@media(hover:none)]:opacity-100"
      />
      <motion.span
        aria-hidden
        initial={false}
        animate={
          hover
            ? { x: "0%", y: "0%", opacity: 1 }
            : {
                ...(reduce ? { x: "0%", y: "0%" } : offsets[dir]),
                opacity: reduce ? 0 : 1,
              }
        }
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/10"
      />
      <span
        aria-hidden
        className="absolute top-3.5 right-3.5 flex size-9 translate-y-1 items-center justify-center rounded-full border border-white/15 bg-ink/60 text-bright opacity-0 backdrop-blur-sm transition duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100"
      >
        <Maximize2 className="size-4" />
      </span>
      <span className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center gap-2.5 p-5 opacity-0 transition duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100">
        <span
          aria-hidden
          className="h-4 w-0.5 shrink-0 rounded-full bg-ember-500"
        />
        <span className="text-sm leading-snug font-semibold tracking-tight text-white">
          {item.title}
        </span>
      </span>
    </button>
  );
}
