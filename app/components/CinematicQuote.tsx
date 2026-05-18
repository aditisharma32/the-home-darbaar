"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const wordsList = [
  { text: "“True", className: "" },
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
  { text: "gears.”", className: "" }
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
          scrub: 1.5, // slightly more smoothing for the blur effect
        }
      }
    );
    
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="py-32 md:py-48 bg-[#FAF6F0] flex items-center justify-center text-center px-6 relative"
    >
      <div className="max-w-4xl flex flex-col items-center z-10">
        <Sparkles className="w-8 h-8 text-brand-brass mb-12 opacity-50" />
        <h2 
          ref={textRef}
          className="font-serif text-3xl md:text-5xl lg:text-6xl text-brand-charcoal leading-[1.3] md:leading-[1.4] font-medium tracking-tight flex flex-wrap justify-center gap-x-[0.25em] gap-y-2 md:gap-y-4"
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
        <div className="mt-16 flex items-center gap-4">
          <div className="w-12 h-[1px] bg-brand-charcoal/20" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-brand-charcoal font-bold">The Home Darbaar Manifesto</span>
          <div className="w-12 h-[1px] bg-brand-charcoal/20" />
        </div>
      </div>
    </section>
  );
}
