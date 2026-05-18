"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Sparkles, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// 12 beautiful lookbook images
const dummyImages = Array.from({ length: 12 }).map((_, i) => (
  `https://picsum.photos/seed/darbaar_lookbook_${i + 20}/800/1000`
));

export default function SpotlightSection({ onSelectProduct }: any) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    // Simple vertical parallax on images
    const images = gsap.utils.toArray<HTMLElement>(".parallax-img");
    
    images.forEach((img, i) => {
      const speed = i % 2 === 0 ? 15 : -15; // Alternating subtle up/down parallax
      
      gsap.to(img, {
        yPercent: speed,
        ease: "none",
        scrollTrigger: {
          trigger: img.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      id="spotlight" 
      className="py-32 md:py-48 bg-[#FAF6F0] text-brand-charcoal relative border-t border-brand-charcoal/10"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col items-center">
        
        {/* Minimal Header */}
        <div className="flex flex-col items-center text-center mb-24 md:mb-40">
          <span className="flex items-center gap-3 text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-brand-brass font-bold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            The Private Archive
            <Sparkles className="w-3.5 h-3.5" />
          </span>
          <h2 className="font-serif text-[3rem] md:text-[5.5rem] font-light tracking-tight text-brand-charcoal leading-none">
            Visual Anthology
          </h2>
          <p className="mt-8 text-sm md:text-base text-brand-charcoal/60 max-w-lg font-sans">
            A serene, unhurried walk through twelve selected archives of our heritage craftsmanship.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid (CSS Grid based) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-y-40 md:gap-x-12 lg:gap-x-20 items-center">
          
          {/* Row 1: Massive Left, Small Right */}
          <div className="md:col-span-7 aspect-[4/5] overflow-hidden rounded-sm relative group">
             <img src={dummyImages[0]} className="parallax-img w-full h-[130%] object-cover -top-[15%] relative" alt="Archive 1" />
          </div>
          <div className="md:col-span-4 md:col-start-9 aspect-[3/4] overflow-hidden rounded-sm relative group mt-12 md:mt-40">
             <img src={dummyImages[1]} className="parallax-img w-full h-[130%] object-cover -top-[15%] relative" alt="Archive 2" />
          </div>

          {/* Row 2: Center Wide */}
          <div className="md:col-span-10 md:col-start-2 aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm relative group">
             <img src={dummyImages[2]} className="parallax-img w-full h-[130%] object-cover -top-[15%] relative" alt="Archive 3" />
          </div>

          {/* Row 3: Small Left, Massive Right */}
          <div className="md:col-span-4 aspect-square overflow-hidden rounded-sm relative group mb-12 md:mb-32">
             <img src={dummyImages[3]} className="parallax-img w-full h-[130%] object-cover -top-[15%] relative" alt="Archive 4" />
          </div>
          <div className="md:col-span-7 md:col-start-6 aspect-[4/5] overflow-hidden rounded-sm relative group">
             <img src={dummyImages[4]} className="parallax-img w-full h-[130%] object-cover -top-[15%] relative" alt="Archive 5" />
          </div>

          {/* Row 4: Three Column Split */}
          <div className="md:col-span-4 aspect-[3/4] overflow-hidden rounded-sm relative group md:mt-24">
             <img src={dummyImages[5]} className="parallax-img w-full h-[130%] object-cover -top-[15%] relative" alt="Archive 6" />
          </div>
          <div className="md:col-span-4 aspect-[3/4] overflow-hidden rounded-sm relative group">
             <img src={dummyImages[6]} className="parallax-img w-full h-[130%] object-cover -top-[15%] relative" alt="Archive 7" />
          </div>
          <div className="md:col-span-4 aspect-[3/4] overflow-hidden rounded-sm relative group md:mt-48">
             <img src={dummyImages[7]} className="parallax-img w-full h-[130%] object-cover -top-[15%] relative" alt="Archive 8" />
          </div>

          {/* Row 5: Off-center Portrait */}
          <div className="md:col-span-6 md:col-start-4 aspect-[3/4] overflow-hidden rounded-sm relative group">
             <img src={dummyImages[8]} className="parallax-img w-full h-[130%] object-cover -top-[15%] relative" alt="Archive 9" />
          </div>

          {/* Row 6: Double Landscape */}
          <div className="md:col-span-5 aspect-[4/3] overflow-hidden rounded-sm relative group md:mt-24">
             <img src={dummyImages[9]} className="parallax-img w-full h-[130%] object-cover -top-[15%] relative" alt="Archive 10" />
          </div>
          <div className="md:col-span-5 md:col-start-8 aspect-[4/3] overflow-hidden rounded-sm relative group">
             <img src={dummyImages[10]} className="parallax-img w-full h-[130%] object-cover -top-[15%] relative" alt="Archive 11" />
          </div>

          {/* Row 7: Final Massive Anchor */}
          <div className="md:col-span-8 md:col-start-3 aspect-[4/5] overflow-hidden rounded-sm relative group">
             <img src={dummyImages[11]} className="parallax-img w-full h-[130%] object-cover -top-[15%] relative" alt="Archive 12" />
          </div>

        </div>

        <div className="mt-32">
          <a 
            href="#contact" 
            className="group inline-flex items-center gap-4 border border-brand-charcoal/20 text-brand-charcoal px-10 py-5 rounded-full hover:bg-brand-charcoal hover:text-brand-ivory transition-all duration-500"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Request Private Viewing</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
