"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StorySection() {
  const containerRef = useRef<HTMLElement>(null);
  
  useGSAP(() => {
    // 1. Line-by-Line Masked Reveal for the Title (The Hallmark of High-End Typography)
    gsap.fromTo(
      ".story-title-line",
      { y: "110%" },
      {
        y: "0%",
        duration: 1.4,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".story-text-container",
          start: "top 80%",
        },
      }
    );

    // 2. Soft Fade-Up for Paragraphs and Founder Info
    gsap.fromTo(
      ".story-fade-elem",
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".story-text-container",
          start: "top 70%",
        },
      }
    );

    // 3. The Grand Unveil (Images revealing via clip-path like a curtain opening)
    gsap.fromTo(
      ".story-img-wrapper",
      { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
      {
        clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
        duration: 1.8,
        stagger: 0.25,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".story-gallery",
          start: "top 75%",
        },
      }
    );

    // 4. Cinematic "Breathing" Scale during the unveil
    gsap.fromTo(
      ".story-img-inner",
      { scale: 1.4 },
      {
        scale: 1.05,
        duration: 2.4,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".story-gallery",
          start: "top 75%",
        },
      }
    );

    // 5. Continuous Scroll Parallax (Applied to separate nested div to prevent GSAP transform conflicts)
    gsap.fromTo(
      ".story-parallax-main",
      { yPercent: -8 },
      {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".story-parallax-inset",
      { yPercent: 12 },
      {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="story"
      className="relative w-full bg-[#0a0a0a] text-white py-32 md:py-48 overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-8">
          
          {/* TEXT COLUMN (Left) */}
          <div className="story-text-container w-full lg:w-[45%] flex flex-col justify-center z-20">
            
            <div className="story-fade-elem flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-brand-brass/60" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-brass">
                Jagatpura · Jaipur
              </span>
            </div>

            {/* Masked Line-by-Line Title Reveal */}
            <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] tracking-tight mb-10">
              <span className="block overflow-hidden pb-1">
                <span className="story-title-line block">Bridging heritage</span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="story-title-line block">craft with the <i className="text-brand-brass font-normal">modern</i></span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="story-title-line block">sanctuary.</span>
              </span>
            </h2>

            <div className="story-fade-elem space-y-6 text-white/60 font-sans font-light text-base md:text-lg leading-relaxed max-w-lg">
              <p>
                The Home Darbaar is a premier boutique sourcing exquisite home decor, luxury lighting, and traditional handicraft innovations. 
              </p>
              <p>
                We believe that every piece should tell a story. Whether for a retail client or B2B wholesale, we deliver unmatched quality and timeless elegance directly to your door, across India.
              </p>
            </div>

            <div className="story-fade-elem mt-12 pt-12 border-t border-white/[0.08] max-w-lg">
              <p className="font-serif italic text-white/90 text-xl leading-relaxed mb-4">
                "We bring character, warmth, and timeless design to every space."
              </p>
              <div className="flex items-center gap-5 mt-8 group cursor-default">
                <div className="overflow-hidden rounded-full shadow-lg border border-white/10 w-14 h-14">
                  <img 
                    src="https://picsum.photos/seed/founderportrait/200/200" 
                    alt="Chiranshu Khandelwal" 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />
                </div>
                <div>
                  <p className="text-xs font-mono tracking-[0.2em] uppercase text-brand-brass">
                    Chiranshu Khandelwal
                  </p>
                  <p className="text-[10px] font-sans tracking-widest text-white/40 uppercase mt-1.5">
                    Founder & Curator
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* IMAGE GALLERY COLUMN (Right) */}
          <div className="story-gallery w-full lg:w-[50%] relative flex justify-end lg:justify-center pb-12 lg:pb-0">
            
            {/* Main large image */}
            <div className="relative w-[85%] md:w-[70%] aspect-[3/4] z-0 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              {/* GSAP Clip-Path Reveal Wrapper */}
              <div className="story-img-wrapper absolute inset-0 overflow-hidden rounded-[2px] border border-white/[0.03]">
                {/* GSAP Continuous Parallax Wrapper */}
                <div className="story-parallax-main absolute inset-0 w-full h-[120%] -top-[10%]">
                  {/* GSAP Inner Scale Image */}
                  <img 
                    src="/images/story-decor.png" 
                    alt="Jaipur Heritage Decor" 
                    className="story-img-inner absolute inset-0 w-full h-full object-cover object-center" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Overlapping inset image */}
            <div className="absolute left-0 bottom-[-10%] md:left-[-10%] md:bottom-[10%] w-[55%] md:w-[50%] aspect-[4/5] z-10 shadow-[0_30px_60px_rgba(0,0,0,0.95)]">
              {/* GSAP Clip-Path Reveal Wrapper */}
              <div className="story-img-wrapper absolute inset-0 overflow-hidden rounded-[2px] border border-white/10 bg-[#111]">
                {/* GSAP Continuous Parallax Wrapper */}
                <div className="story-parallax-inset absolute inset-0 w-full h-[120%] -top-[10%]">
                  {/* GSAP Inner Scale Image */}
                  <img 
                    src="/images/story-chandelier.png" 
                    alt="Luxury Lighting" 
                    className="story-img-inner absolute inset-0 w-full h-full object-cover object-center" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 pointer-events-none" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
