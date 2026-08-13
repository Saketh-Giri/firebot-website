"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

export interface GalleryItem {
  title: string;
  image: string;
}

export function Gallery({ items, columns = 3 }: { items: GalleryItem[]; columns?: 2 | 3 | 4 }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (direction: 1 | -1) =>
      setActive((current) =>
        current === null ? current : (current + direction + items.length) % items.length,
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

  const gridColumns = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <>
      <ul className={`grid grid-cols-1 gap-5 ${gridColumns}`}>
        {items.map((item, index) => (
          <li key={item.title}>
            <button
              type="button"
              onClick={() => setActive(index)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-white/8 bg-surface text-left shadow-card transition duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-ember-500/40 hover:shadow-glow"
            >
              <span className="relative block aspect-4/3 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition duration-700 ease-out-expo group-hover:scale-[1.07]"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-95"
                />
                <span
                  aria-hidden
                  className="absolute top-3.5 right-3.5 flex size-9 translate-y-1 items-center justify-center rounded-full border border-white/15 bg-ink/60 text-bright opacity-0 backdrop-blur-sm transition duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <Maximize2 className="size-4" />
                </span>
                <span className="absolute inset-x-0 bottom-0 flex items-center gap-2.5 p-5">
                  <span
                    aria-hidden
                    className="h-4 w-0.5 shrink-0 rounded-full bg-ember-500 transition-all duration-500 ease-out-expo group-hover:h-5"
                  />
                  <span className="text-sm leading-snug font-semibold tracking-tight text-white">
                    {item.title}
                  </span>
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={items[active].title}
          className="fixed inset-0 z-101 flex flex-col bg-ink/95 p-4 backdrop-blur-xl sm:p-8"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-semibold tracking-tight">{items[active].title}</p>
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
            <Image
              src={items[active].image}
              alt={items[active].title}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
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
              {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
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
        </div>
      )}
    </>
  );
}
