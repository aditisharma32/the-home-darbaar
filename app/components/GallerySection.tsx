"use client";

import React from "react";
import { ScrollTiltedGrid } from "./ui/scroll-tilted-grid";

const GALLERY_IMAGES = [
  // Row 1 (1st section): gallery7 to gallery9 (Uniform 4/3 aspect ratio)
  { src: "/images/gallery7.webp", aspectRatio: "7/6" },
  { src: "/images/gallery8.webp", aspectRatio: "7/6" },
  { src: "/images/gallery9.webp", aspectRatio: "7/6" },

  // Row 2 (2nd section): gallery1 to gallery3 (All 3/4 portrait)
  "/images/gallery1.webp",
  "/images/gallery2.webp",
  "/images/gallery3.webp",

  // Row 3 (3rd section): gallery10 to gallery12 (Uniform 4/3 aspect ratio)
  { src: "/images/gallery10.webp", aspectRatio: "7/6" },
  { src: "/images/gallery11.webp", aspectRatio: "7/6" },
  { src: "/images/gallery12.webp", aspectRatio: "7/6" },

  // Row 4 (4th section): gallery4 to gallery6 (All 3/4 portrait)
  "/images/gallery4.webp",
  "/images/gallery5.webp",
  "/images/gallery6.webp",
];

export default function GallerySection() {
  return (
    <section id="spotlight" className="relative min-h-screen overflow-x-hidden bg-[#FAF6F0] py-12 md:py-32">
      <section className="relative flex flex-col items-center justify-center px-6 text-center z-20">
        <div className="flex items-center gap-3 text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-brand-charcoal/60 font-bold mb-4 md:mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-brass" />
          <span>Visual Anthology</span>
          <div className="w-8 md:w-12 h-[1px] bg-brand-brass/40" />
        </div>

        <h2 className="font-serif text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[1.05] tracking-tight uppercase text-brand-charcoal">
          A Field of
          <br className="md:hidden" /> Stills
        </h2>

        <p className="mt-6 max-w-md text-sm md:text-base font-light opacity-60 text-brand-charcoal font-sans">
          Pictures rise from below, settle into focus, then tilt away as the page advances. A curated glimpse into our heritage.
        </p>
      </section>

      <div className="relative z-10 -mt-[5vh]">
        <ScrollTiltedGrid
          images={GALLERY_IMAGES}
          rounded="1rem"
          maxWidth="none"
          className="max-w-5xl mx-auto"
          gap={8}
          maxTilt={60}
          perspective={1200}
        />
      </div>
    </section>
  );
}
