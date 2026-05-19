"use client";

import React from "react";
import { ScrollTiltedGrid } from "./ui/scroll-tilted-grid";

export default function GallerySection() {
  const spotlightImages = [
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=2036&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607687920-4e2a09be1546?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop"
  ];

  return (
    <main id="spotlight" className="relative min-h-screen overflow-x-hidden bg-[#FAF6F0] py-24 md:py-32">
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
          images={spotlightImages}
          rounded="1rem"
          maxWidth="none"
          className="max-w-5xl mx-auto"
          gap={8}
          maxTilt={60}
          perspective={1200}
        />
      </div>
    </main>
  );
}
