"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const wordsList = [
  { text: "\u201CTrue", className: "" },
  { text: "luxury", className: "" },
  { text: "is", className: "" },
  { text: "silent.", className: "highlight italic font-normal", targetColor: "#c5a880" },
  { text: "It", className: "" },
  { text: "resides", className: "" },
  { text: "in", className: "" },
  { text: "the", className: "" },
  { text: "weight", className: "" },
  { text: "of", className: "" },
  { text: "raw", className: "" },
  { text: "brass,", className: "" },
  { text: "the", className: "" },
  { text: "resonance", className: "" },
  { text: "of", className: "" },
  { text: "falling", className: "" },
  { text: "water,", className: "" },
  { text: "and", className: "" },
  { text: "the", className: "" },
  { text: "quiet", className: "" },
  { text: "precision", className: "" },
  { text: "of", className: "" },
  { text: "moving", className: "" },
  { text: "gears.\u201D", className: "" }
];

export default function CinematicQuote() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!textRef.current) return;
    
    const words = gsap.utils.toArray<HTMLElement>(".quote-word", textRef.current);
    
    gsap.fromTo(
      words,
      { 
        opacity: 0, 
        y: 15,
        filter: "blur(12px)",
        color: "#141312"
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        color: (i, target) => {
          return target.classList.contains("highlight") ? "#c5a880" : "#141312"; 
        },
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%", 
          end: "center 45%", 
          scrub: 1.5,
        }
      }
    );
    
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="py-32 md:py-48 bg-[#FAF6F0] flex items-center justify-center px-6 md:px-16 relative"
    >
      <div className="max-w-[1400px] mx-auto w-full flex flex-col items-center text-center z-10">
        <div className="w-16 h-[1px] bg-brand-brass/40 mb-12 mx-auto" />
        <h2 
          ref={textRef}
          className="font-serif text-3xl md:text-5xl lg:text-6xl text-brand-charcoal leading-[1.3] md:leading-[1.4] font-medium tracking-tight flex flex-wrap justify-center gap-x-[0.25em] gap-y-2 md:gap-y-4 max-w-4xl"
        >
          {wordsList.map((word, i) => (
            <span 
              key={i} 
              className={`quote-word ${word.className}`}
            >
              {word.text}
            </span>
          ))}
        </h2>
        <div className="mt-16 flex items-center justify-center gap-4">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-brass" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-brand-charcoal/60 font-bold">The Home Darbaar Manifesto</span>
        </div>
      </div>
    </section>
  );
}
