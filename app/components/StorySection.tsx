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
    // 1. Line-by-Line Masked Reveal for the Title
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

    // 5. Continuous Scroll Parallax
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
      className="relative w-full bg-[#FAF6F0] text-brand-charcoal py-32 md:py-48 overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* TEXT COLUMN (Left) */}
          <div className="story-text-container w-full lg:w-[45%] flex flex-col justify-center z-20">
            
            <div className="story-fade-elem flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-brand-brass/60" />
              <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-brand-brass font-bold">
                Jagatpura, Jaipur
              </span>
            </div>

            {/* Masked Line-by-Line Title Reveal */}
            <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] tracking-tight mb-10 text-brand-charcoal">
              <span className="block overflow-hidden pb-2">
                <span className="story-title-line block">Bridging heritage</span>
              </span>
              <span className="block overflow-hidden pb-2">
                <span className="story-title-line block">craft with the <i className="text-brand-brass font-normal">modern</i></span>
              </span>
              <span className="block overflow-hidden pb-2">
                <span className="story-title-line block">sanctuary.</span>
              </span>
            </h2>

            <div className="story-fade-elem space-y-6 text-brand-charcoal/70 font-sans font-light text-base md:text-lg leading-relaxed max-w-[55ch]">
              <p>
                The Home Darbaar is a premier boutique sourcing exquisite home decor, luxury lighting, and traditional handicraft innovations. 
              </p>
              <p>
                We believe that every piece should tell a story. Whether for a retail client or B2B wholesale, we deliver unmatched quality and timeless elegance directly to your door, across India.
              </p>
            </div>

            <div className="story-fade-elem mt-12 pt-12 border-t border-brand-charcoal/10 max-w-[55ch]">
              <p className="font-serif italic text-brand-charcoal text-xl md:text-2xl leading-relaxed mb-6">
                "We bring character, warmth, and timeless design to every space."
              </p>
              <div className="flex items-center gap-5 group cursor-default">
                <div className="overflow-hidden rounded-full shadow-md border border-brand-charcoal/5 w-14 h-14">
                  <img 
                    src="https://picsum.photos/seed/founderportrait/200/200" 
                    alt="Chiranshu Khandelwal" 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale-[20%]"
                  />
                </div>
                <div>
                  <p className="text-[11px] font-sans tracking-[0.15em] uppercase text-brand-brass font-bold">
                    Chiranshu Khandelwal
                  </p>
                  <p className="text-[10px] font-sans tracking-widest text-brand-charcoal/50 uppercase mt-1">
                    Founder & Curator
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* IMAGE GALLERY COLUMN (Right) - CLEAN LAYOUT */}
          <div className="story-gallery w-full lg:w-[50%] relative flex items-center justify-center lg:justify-end pt-12 lg:pt-0">
            <div className="relative w-full max-w-[600px] flex gap-4 md:gap-8 items-center">
              
              {/* Left Image (Smaller, pushed down) */}
              <div className="w-5/12 aspect-[3/4] translate-y-12 md:translate-y-24">
                <div className="story-img-wrapper relative w-full h-full overflow-hidden rounded-[2px] shadow-[0_20px_40px_rgba(0,0,0,0.06)] bg-brand-charcoal/5">
                  <div className="story-parallax-inset absolute inset-0 w-full h-[120%] -top-[10%]">
                    <img 
                      src="/images/story-chandelier.png" 
                      alt="Luxury Lighting" 
                      className="story-img-inner absolute inset-0 w-full h-full object-cover grayscale-[15%]" 
                    />
                  </div>
                </div>
              </div>

              {/* Right Image (Larger, main focus) */}
              <div className="w-7/12 aspect-[4/5]">
                <div className="story-img-wrapper relative w-full h-full overflow-hidden rounded-[2px] shadow-[0_30px_50px_rgba(0,0,0,0.08)] bg-brand-charcoal/5">
                  <div className="story-parallax-main absolute inset-0 w-full h-[120%] -top-[10%]">
                    <img 
                      src="/images/story-decor.png" 
                      alt="Jaipur Heritage Decor" 
                      className="story-img-inner absolute inset-0 w-full h-full object-cover grayscale-[10%]" 
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
