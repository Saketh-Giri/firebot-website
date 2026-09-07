"use client";

import { motion, type Variants } from "motion/react";
import { useId, type ComponentType } from "react";
import { clsx } from "@/lib/clsx";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

export type BlueprintKind = "marble-coaster" | "airplane-launcher" | "cardboard-chords" | "hurricane-housing";

/**
 * Schematic line drawings for the Kindling Kits and Torchbearing Tutors
 * lessons. The kits never had photography, so instead of a stock placeholder
 * each one gets an engineering-sketch cover: thin strokes on a fine grid that
 * draw themselves in when scrolled into view, plus one small SMIL motion per
 * drawing (a marble on the track, a plane on its arc, sound leaving the guitar,
 * wind past the house). Holds still under reduced motion.
 */
export function KitBlueprint({
  kind,
  index,
  title,
  className,
  animate = true,
}: {
  kind: BlueprintKind;
  /** 1-based sheet number for the corner label. */
  index?: number;
  title?: string;
  className?: string;
  /** Turn off the draw-on and the loops, e.g. for tiny thumbnails. */
  animate?: boolean;
}) {
  // Hydration-safe: the SMIL loops below are part of the markup.
  const reduce = usePrefersReducedMotion();
  const live = animate && !reduce;
  const id = useId().replace(/:/g, "");
  const Drawing = drawings[kind];
  const hasLabel = index !== undefined || Boolean(title);

  return (
    <div className={clsx("relative isolate overflow-hidden bg-surface-2 text-bright", className)}>
      <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-35 [background-size:26px_26px]" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(75%_65%_at_50%_45%,rgba(224,31,38,0.16),transparent_72%)]"
      />
      <CornerMarks />

      <motion.svg
        viewBox="0 0 400 240"
        className="relative size-full"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={live ? "hidden" : false}
        whileInView="shown"
        viewport={{ once: true, amount: 0.35 }}
        variants={{ hidden: {}, shown: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } }}
        aria-hidden
      >
        <Baseline />
        <Drawing id={id} live={live} />
      </motion.svg>

      {hasLabel && (
        <p className="pointer-events-none absolute top-[0.8rem] left-8 font-mono text-[0.62rem] leading-none tracking-[0.22em] text-dim uppercase">
          {index !== undefined && (
            <span className="text-ember-300">Kit {String(index).padStart(2, "0")}</span>
          )}
          {index !== undefined && title && <span className="mx-2 text-line-2">/</span>}
          {title}
        </p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------------ */

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  shown: {
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 1.1, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.2 } },
  },
};

const fade: Variants = {
  hidden: { opacity: 0 },
  shown: { opacity: 1, transition: { duration: 0.6 } },
};

const structure = "rgba(238,241,246,0.82)";
const guide = "rgba(139,147,163,0.42)";
const ember = "#f6564f";

/** Circle as a path so `pathLength` draw-on works everywhere. */
const circlePath = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${r * 2} 0 a ${r} ${r} 0 1 0 ${-r * 2} 0`;

const roundedRectPath = (x: number, y: number, w: number, h: number, r: number) =>
  `M ${x + r} ${y} H ${x + w - r} a ${r} ${r} 0 0 1 ${r} ${r} V ${y + h - r} a ${r} ${r} 0 0 1 ${-r} ${r} H ${x + r} a ${r} ${r} 0 0 1 ${-r} ${-r} V ${y + r} a ${r} ${r} 0 0 1 ${r} ${-r} Z`;

/** Ruler along the bottom of every sheet so the set reads as one series. */
function Baseline() {
  const ticks = Array.from({ length: 19 }, (_, i) => 20 + i * 20);
  return (
    <g stroke={guide} strokeWidth={1}>
      <motion.path d="M 14 214 H 386" variants={draw} />
      {ticks.map((x) => (
        <motion.path key={x} d={`M ${x} 214 v ${x % 100 === 0 ? 7 : 4}`} variants={fade} />
      ))}
    </g>
  );
}

function CornerMarks() {
  const mark = "absolute size-3 border-white/25";
  return (
    <div aria-hidden className="pointer-events-none absolute inset-3">
      <span className={clsx(mark, "top-0 left-0 border-t border-l")} />
      <span className={clsx(mark, "top-0 right-0 border-t border-r")} />
      <span className={clsx(mark, "bottom-0 left-0 border-b border-l")} />
      <span className={clsx(mark, "right-0 bottom-0 border-r border-b")} />
    </div>
  );
}

type DrawingProps = { id: string; live: boolean };

/* Marble coaster: a three-hill track on posts, marble rolling the whole run,
   quick on the drops and slow up the climb. */
function MarbleCoaster({ id, live }: DrawingProps) {
  const track = "M 22 54 C 70 54 84 168 138 168 C 192 168 196 62 250 62 C 304 62 312 176 378 176";
  const posts: [number, number][] = [
    [78, 111],
    [138, 168],
    [194, 115],
    [250, 62],
    [310, 119],
    [378, 176],
  ];
  return (
    <>
      <g stroke={guide} strokeDasharray="3 5" strokeWidth={1.2}>
        {posts.map(([x, y]) => (
          <motion.path key={x} d={`M ${x} ${y + 4} V 212`} variants={draw} />
        ))}
      </g>
      <motion.path d={track} stroke={structure} strokeWidth={2.2} variants={draw} />
      <motion.path d={track} stroke={guide} strokeWidth={1} transform="translate(0 6)" variants={draw} />
      {/* Loading platform at the top of the first drop. */}
      <motion.path d="M 12 54 H 30" stroke={structure} strokeWidth={2.6} variants={draw} />
      <path id={`${id}-track`} d={track} stroke="none" />
      <motion.g variants={fade}>
        <circle r={5.5} fill={ember} stroke="none" cx={live ? 0 : 250} cy={live ? -6 : 56}>
          {live && (
            <animateMotion
              dur="6.5s"
              repeatCount="indefinite"
              calcMode="linear"
              keyPoints="0;0.34;0.67;1"
              keyTimes="0;0.26;0.66;1"
            >
              <mpath href={`#${id}-track`} />
            </animateMotion>
          )}
        </circle>
      </motion.g>
    </>
  );
}

/* Airplane launcher: rail on legs, two pegs standing off the rail with a band
   stretched between them, and the plane riding a dashed arc. */
function AirplaneLauncher({ id, live }: DrawingProps) {
  const arc = "M 168 122 Q 262 6 388 88";
  const plane = "M 26 0 L -22 -14 L -11 0 L -22 14 Z M 26 0 L -11 0";
  // Pegs sit on the rail (slope -0.62) and rise perpendicular to it.
  const pegA = { foot: [80, 177], top: [72.6, 165.1] } as const;
  const pegB = { foot: [140, 140], top: [132.6, 128.1] } as const;
  return (
    <>
      <motion.path d="M 36 204 L 168 122" stroke={structure} strokeWidth={2.4} variants={draw} />
      <motion.path
        d="M 168 122 V 212 M 104 162 V 212"
        stroke={guide}
        strokeDasharray="3 5"
        strokeWidth={1.2}
        variants={draw}
      />
      <motion.path
        d={`M ${pegA.foot[0]} ${pegA.foot[1]} L ${pegA.top[0]} ${pegA.top[1]} M ${pegB.foot[0]} ${pegB.foot[1]} L ${pegB.top[0]} ${pegB.top[1]}`}
        stroke={structure}
        strokeWidth={2}
        variants={draw}
      />
      <motion.path
        d={`M ${pegA.top[0]} ${pegA.top[1]} L ${pegB.top[0]} ${pegB.top[1]}`}
        stroke={ember}
        strokeOpacity={0.85}
        strokeWidth={1.4}
        variants={draw}
      />
      <motion.path d={circlePath(pegA.top[0], pegA.top[1], 2.4)} stroke={ember} variants={draw} />
      <motion.path d={circlePath(pegB.top[0], pegB.top[1], 2.4)} stroke={ember} variants={draw} />
      <motion.path
        d={arc}
        stroke={ember}
        strokeOpacity={0.6}
        strokeDasharray="4 7"
        strokeWidth={1.3}
        variants={draw}
      />
      <path id={`${id}-arc`} d={arc} stroke="none" />
      <motion.g variants={fade}>
        <g transform={live ? undefined : "translate(269 60) rotate(-9)"}>
          <path d={plane} fill="rgba(246,86,79,0.18)" stroke={ember} strokeWidth={1.6} />
          {live && (
            <animateMotion
              dur="5s"
              repeatCount="indefinite"
              rotate="auto"
              calcMode="spline"
              keyTimes="0;1"
              keySplines="0.2 0.6 0.5 1"
            >
              <mpath href={`#${id}-arc`} />
            </animateMotion>
          )}
        </g>
      </motion.g>
    </>
  );
}

/* Cardboard chords: box body, sound hole, neck, four strings. Rings leave the
   hole while one string hums. */
function CardboardChords({ live }: DrawingProps) {
  const strings = [122, 130, 138, 146];
  return (
    <>
      <motion.path d={roundedRectPath(52, 72, 192, 124, 16)} stroke={structure} strokeWidth={2} variants={draw} />
      {/* Corrugation hint along the top edge. */}
      <motion.path
        d="M 76 72 v -6 M 96 72 v -6 M 116 72 v -6 M 136 72 v -6 M 156 72 v -6 M 176 72 v -6 M 196 72 v -6 M 216 72 v -6"
        stroke={guide}
        strokeWidth={1}
        variants={draw}
      />
      <motion.path d={circlePath(146, 134, 26)} stroke={structure} strokeWidth={2} variants={draw} />
      <motion.path d="M 244 116 H 358 M 244 152 H 358" stroke={structure} strokeWidth={2} variants={draw} />
      <motion.path d="M 358 106 H 382 V 162 H 358 Z" stroke={structure} strokeWidth={1.8} variants={draw} />
      <motion.path d="M 84 114 V 154" stroke={structure} strokeWidth={3} variants={draw} />
      <motion.path
        d="M 270 116 V 152 M 292 116 V 152 M 312 116 V 152 M 330 116 V 152 M 346 116 V 152"
        stroke={guide}
        strokeWidth={1}
        variants={draw}
      />
      {[112, 126, 142, 156].map((y) => (
        <motion.path key={y} d={circlePath(390, y, 2.6)} stroke={guide} strokeWidth={1.2} variants={fade} />
      ))}
      {strings.map((y, i) => (
        <motion.path
          key={y}
          d={`M 84 ${y} Q 230 ${y} 376 ${y}`}
          stroke={i === 1 ? ember : "rgba(238,241,246,0.55)"}
          strokeWidth={i === 1 ? 1.4 : 1}
          variants={draw}
        >
          {live && i === 1 && (
            <animate
              attributeName="d"
              dur="0.9s"
              repeatCount="indefinite"
              values={[0, -7, 0, 7, 0].map((dy) => `M 84 ${y} Q 230 ${y + dy} 376 ${y}`).join(";")}
            />
          )}
        </motion.path>
      ))}
      <motion.g variants={fade} stroke={ember} strokeWidth={1}>
        {[0, 1, 2].map((n) => (
          <circle
            key={n}
            cx={146}
            cy={134}
            r={live ? 26 : 34 + n * 12}
            strokeOpacity={live ? 0 : 0.35 - n * 0.1}
          >
            {live && (
              <>
                <animate attributeName="r" values="28;66" dur="2.7s" begin={`${n * 0.9}s`} repeatCount="indefinite" />
                <animate
                  attributeName="stroke-opacity"
                  values="0.55;0"
                  dur="2.7s"
                  begin={`${n * 0.9}s`}
                  repeatCount="indefinite"
                />
              </>
            )}
          </circle>
        ))}
      </motion.g>
    </>
  );
}

/* Hurricane housing: a braced frame house with wind streamlines. */
function HurricaneHousing({ live }: DrawingProps) {
  const streams = [
    { y: 70, w: 120, delay: 0 },
    { y: 96, w: 90, delay: 0.6 },
    { y: 130, w: 110, delay: 1.2 },
    { y: 172, w: 80, delay: 0.3 },
  ];
  return (
    <>
      <motion.path d="M 190 212 V 118 H 330 V 212" stroke={structure} strokeWidth={2.2} variants={draw} />
      <motion.path d="M 176 124 L 260 56 L 344 124" stroke={structure} strokeWidth={2.2} variants={draw} />
      {/* Cross bracing, the point of the lesson. */}
      <motion.path
        d="M 190 212 L 330 118 M 190 118 L 330 212"
        stroke={ember}
        strokeOpacity={0.8}
        strokeWidth={1.3}
        variants={draw}
      />
      <motion.path d="M 260 56 V 118" stroke={guide} strokeDasharray="3 5" strokeWidth={1.2} variants={draw} />
      <motion.path d="M 225 118 V 212 M 295 118 V 212" stroke={guide} strokeWidth={1} variants={draw} />
      <motion.path d="M 246 212 V 166 H 274 V 212" stroke={structure} strokeWidth={1.6} variants={draw} />
      <motion.path d="M 190 212 v 6 M 330 212 v 6" stroke={structure} strokeWidth={2.6} variants={draw} />
      <motion.g variants={fade} stroke={ember} strokeWidth={1.3}>
        {streams.map(({ y, w, delay }) => (
          <path key={y} d={`M 20 ${y} h ${w}`} strokeOpacity={live ? 0.25 : 0.55}>
            {live && (
              <>
                <animate
                  attributeName="stroke-dasharray"
                  values={`0 ${w};${w * 0.55} ${w};0 ${w}`}
                  keyTimes="0;0.5;1"
                  dur="2.2s"
                  begin={`${delay}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-dashoffset"
                  values={`0;${-w * 1.2}`}
                  dur="2.2s"
                  begin={`${delay}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-opacity"
                  values="0;0.75;0"
                  keyTimes="0;0.4;1"
                  dur="2.2s"
                  begin={`${delay}s`}
                  repeatCount="indefinite"
                />
              </>
            )}
          </path>
        ))}
      </motion.g>
    </>
  );
}

const drawings: Record<BlueprintKind, ComponentType<DrawingProps>> = {
  "marble-coaster": MarbleCoaster,
  "airplane-launcher": AirplaneLauncher,
  "cardboard-chords": CardboardChords,
  "hurricane-housing": HurricaneHousing,
};
