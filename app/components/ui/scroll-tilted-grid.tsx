"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
  cubicBezier,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Curated editorial portrait set used as the default `images` for {@link ScrollTiltedGrid}.
 */
export const DEFAULT_GRID_IMAGES: readonly string[] = [
  // Row 1
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
  // Row 2
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  // Row 3
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
  // Row 4
  "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
  // Row 5
  "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop",
];

const easeIntoFocus = cubicBezier(0.22, 1, 0.36, 1);
const easeOutOfFocus = cubicBezier(0, 0, 0.58, 1);
const focusEase: [typeof easeIntoFocus, typeof easeOutOfFocus] = [
  easeIntoFocus,
  easeOutOfFocus,
];

export type MaxWidthToken =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "none";

export type GapToken = 4 | 6 | 8 | 10 | 12 | 14;

const MAX_WIDTH_CLASS: Record<MaxWidthToken, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  none: "",
};

const GAP_CLASS: Record<GapToken, string> = {
  4: "gap-4",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
  12: "gap-12",
  14: "gap-14",
};

type Side = "L" | "C" | "R";

type TileConfig = {
  aspectRatio: string;
  perspective: number;
  maxTilt: number;
  maxBlur: number;
  rounded: string;
};

function Tile({
  src,
  side,
  config,
}: {
  src: string;
  side: Side;
  config: TileConfig;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress: p } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const reduce = useReducedMotion();
  const sign = side === "L" ? -1 : side === "R" ? 1 : 0;
  const { aspectRatio, perspective, maxTilt, maxBlur, rounded } = config;

  const blur     = useTransform(p, [0, 0.5, 1], [maxBlur, 0, maxBlur], { ease: focusEase });
  const bright   = useTransform(p, [0, 0.5, 1], [0, 1, 0],             { ease: focusEase });
  const contrast = useTransform(p, [0, 0.5, 1], [4, 1, 4],             { ease: focusEase });

  const ty = useTransform(p, [0, 0.5, 1], ["100%", "0%", "-100%"], { ease: focusEase });
  const tz = useTransform(p, [0, 0.5, 1], [300, 0, 300],           { ease: focusEase });
  const rx = useTransform(p, [0, 0.5, 1], [maxTilt, 0, -maxTilt],  { ease: focusEase });

  const tx = useTransform(p, [0, 0.5, 1],
    [`${sign * 40}%`, "0%", `${sign * 40}%`], { ease: focusEase });
  const rot = useTransform(p, [0, 0.5, 1], [-sign * 5, 0, sign * 5],   { ease: focusEase });
  const sk  = useTransform(p, [0, 0.5, 1], [sign * 20, 0, -sign * 20], { ease: focusEase });

  const innerSY = useTransform(p, [0, 0.5, 1], [1.8, 1, 1.8], { ease: focusEase });

  const filter = useMotionTemplate`blur(${blur}px) brightness(${bright}) contrast(${contrast})`;

  if (reduce) {
    return (
      <figure ref={ref} className="relative z-10 m-0">
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio, borderRadius: rounded }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url("${src}")` }}
          />
        </div>
      </figure>
    );
  }

  return (
    <motion.figure
      ref={ref}
      className="relative z-10 m-0"
      style={{ perspective, willChange: "transform" }}
    >
      <motion.div
        className="relative w-full overflow-hidden will-change-[filter,transform]"
        style={{
          aspectRatio,
          borderRadius: rounded,
          filter,
          x: tx,
          y: ty,
          z: tz,
          rotate: rot,
          rotateX: rx,
          skewX: sk,
        }}
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url("${src}")`,
            scaleY: innerSY,
            backfaceVisibility: "hidden",
          }}
        />
      </motion.div>
    </motion.figure>
  );
}

export type ScrollTiltedGridProps = {
  /** Image URLs to render. Falls back to {@link DEFAULT_GRID_IMAGES}. */
  images?: readonly string[];
  /**
   * Cycle the source list and append more pairs as the user nears the bottom —
   * a perceptually infinite scroll. Default `false`.
   */
  loop?: boolean;
  /** Initial number of cycles to render when `loop` is on. Default `3`. */
  initialCycles?: number;
  /** CSS `aspect-ratio` value for each tile, e.g. `"3/4"`, `"2/3"`. Default `"3/4"`. */
  aspectRatio?: string;
  /** Tailwind `max-w-*` token controlling the column width. Default `"lg"`. */
  maxWidth?: MaxWidthToken;
  /** Tailwind `gap-*` token between tiles. Default `10`. */
  gap?: GapToken;
  /** CSS `perspective` in pixels applied to each tile. Default `900`. */
  perspective?: number;
  /**
   * Maximum `rotateX` tilt magnitude (in degrees) at the entry and exit poses.
   * Symmetric — entry tilts forward `+maxTilt`, exit tilts back `-maxTilt`.
   * Default `70`.
   */
  maxTilt?: number;
  /** Maximum blur (px) at the entry and exit poses. Default `8`. */
  maxBlur?: number;
  /**
   * CSS `border-radius` for the tile clipping mask. Accepts any CSS length value
   * (`"0.375rem"`, `"12px"`, `"1rem"`). Default `"0.375rem"` (Tailwind `rounded-md`).
   */
  rounded?: string;
  /** Additional className applied to the outer `<section>`. */
  className?: string;
};

/**
 * Editorial scroll-tilted image grid. Pairs of images rise from below tipped
 * forward, settle into a clean focus, then tilt back over the top edge as they
 * exit. Optionally loops infinitely via an IntersectionObserver-driven append.
 */
export function ScrollTiltedGrid({
  images = DEFAULT_GRID_IMAGES,
  loop = false,
  initialCycles = 3,
  aspectRatio = "3/4",
  maxWidth = "lg",
  gap = 10,
  perspective = 900,
  maxTilt = 70,
  maxBlur = 8,
  rounded = "0.375rem",
  className,
}: ScrollTiltedGridProps = {}) {
  const [cycles, setCycles] = useState(loop ? initialCycles : 1);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loop) return;
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setCycles((c) => c + 2);
        }
      },
      { rootMargin: "1500px 0px 1500px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [loop]);

  const items = useMemo(
    () =>
      loop
        ? Array.from({ length: cycles }, () => images).flat()
        : [...images],
    [loop, cycles, images],
  );

  const config = useMemo<TileConfig>(
    () => ({ aspectRatio, perspective, maxTilt, maxBlur, rounded }),
    [aspectRatio, perspective, maxTilt, maxBlur, rounded],
  );

  const gridClass = [
    "mx-auto mt-[10vh] mb-[10vh] grid w-full grid-cols-1 md:grid-cols-3 px-6 py-[10vh]",
    MAX_WIDTH_CLASS[maxWidth],
    GAP_CLASS[gap],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      className={["relative w-full", className].filter(Boolean).join(" ")}
    >
      <div className={gridClass}>
        {items.map((src, i) => (
          <Tile
            key={`${i}-${src}`}
            src={src}
            side={i % 3 === 0 ? "L" : i % 3 === 1 ? "C" : "R"}
            config={config}
          />
        ))}
      </div>
      {loop ? (
        <div ref={sentinelRef} aria-hidden className="h-px w-full" />
      ) : null}
    </section>
  );
}
