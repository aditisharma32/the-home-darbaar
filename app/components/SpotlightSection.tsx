"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// 12 beautiful lookbook images
const dummyImages = Array.from({ length: 12 }).map((_, i) => (
  `https://picsum.photos/seed/darbaar_lookbook_${i + 20}/800/1000`
));

export default function SpotlightSection() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !scrollTrackRef.current) return;

    const track = scrollTrackRef.current;

    const getScrollAmount = () => {
      return track.scrollWidth - window.innerWidth;
    };

    // Pinned Horizontal Scroll trigger
    gsap.to(track, {
      x: () => -getScrollAmount(),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${getScrollAmount()}`,
        pin: true,
        scrub: 1, // Butter-smooth continuous horizontal slide
        invalidateOnRefresh: true, // Recalculate dimensions on window resize
        anticipatePin: 1,
      }
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      id="spotlight" 
      className="w-full min-h-screen bg-[#FAF6F0] overflow-hidden relative flex items-center border-t border-brand-charcoal/10"
    >
      <div 
        ref={scrollTrackRef} 
        className="flex flex-row items-center gap-10 md:gap-16 px-6 md:px-16 lg:px-24 flex-nowrap h-[70vh] w-max py-4"
      >
        
        {/* Slide 0: The Editorial Title Card */}
        <div className="w-[320px] md:w-[480px] h-[80%] flex flex-col justify-center flex-shrink-0 mr-4 md:mr-8 select-none">
          <span className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-brand-brass font-bold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-brass" />
            Heritage Lookbook
          </span>
          <h2 className="font-serif text-[3.5rem] md:text-[5.5rem] font-light tracking-tight text-brand-charcoal leading-none">
            The Archive
          </h2>
          <p className="mt-8 text-sm md:text-base text-brand-charcoal/60 leading-relaxed font-sans max-w-sm">
            A serene, unhurried walk through the archives of our heritage craftsmanship. Scroll down to discover our masterpieces.
          </p>
          <div className="mt-8 flex items-center gap-2 text-brand-brass text-[10px] uppercase tracking-[0.25em] font-bold animate-pulse">
            Scroll down to view
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Slides 1 to 9: Gorgeous Lookbook Cards with alternating wave pattern */}
        {dummyImages.slice(0, 9).map((img, i) => (
          <div 
            key={i} 
            className={`flex-shrink-0 overflow-hidden rounded-[2px] relative group shadow-[0_20px_50px_rgba(0,0,0,0.05)] bg-brand-charcoal/5 ${
              i % 2 === 0 
                ? "h-full w-[380px] md:w-[480px]" 
                : "h-[82%] w-[280px] md:w-[380px] self-center"
            }`}
          >
            <img 
              src={img} 
              alt={`Archival Work ${i + 1}`} 
              className="w-full h-full object-cover grayscale-[15%] contrast-[110%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out select-none" 
            />
            <div className="absolute inset-0 bg-brand-charcoal/0 group-hover:bg-brand-charcoal/5 transition-all duration-500 pointer-events-none" />
            
            {/* Elegant overlay indices */}
            <div className="absolute bottom-6 left-6 z-10 flex flex-col pointer-events-none opacity-85 group-hover:opacity-100 transition-opacity">
              <span className="font-serif text-3xl md:text-4xl text-[#FAF6F0] font-light italic mb-1">
                0{i + 1}
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#FAF6F0]/70 font-bold font-sans">
                ARCHIVAL WORK
              </span>
            </div>
          </div>
        ))}

        {/* Last Slide: Luxurious CTA Card */}
        <div className="w-[300px] md:w-[420px] h-[80%] flex flex-col justify-center items-start flex-shrink-0 ml-8 md:ml-12 pr-16 select-none">
          <span className="text-brand-brass font-bold text-[10px] uppercase tracking-[0.3em] mb-4">ARRANGE VIEWING</span>
          <h3 className="font-serif text-3xl md:text-4xl font-light text-brand-charcoal mb-6 leading-tight">
            Experience the Craft in Person
          </h3>
          <p className="text-xs md:text-sm text-brand-charcoal/60 leading-relaxed font-sans mb-8 max-w-xs">
            Schedule a private, personalized viewing of our collections at our bespoke showroom.
          </p>
          <a 
            href="#showroom" 
            className="group inline-flex items-center gap-4 border border-brand-charcoal/20 text-brand-charcoal px-8 py-4 rounded-full hover:bg-brand-charcoal hover:text-brand-ivory transition-all duration-500"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">REQUEST INVITE</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
