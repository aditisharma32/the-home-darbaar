"use client";

import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const collections = [
  {
    id: "01",
    title: "Chandelier Jhoomars",
    subtitle: "Antique Finish & Turkish Mosaic",
    desc: "Solid brass body with elegant Turkish-style design crafted in colorful mosaic glass. Emits a warm, welcoming light.",
    img: "/images/story-chandelier.png",
  },
  {
    id: "02",
    title: "Gear Wall Watches",
    subtitle: "27-inch Kinetic Precision",
    desc: "Premium black and gold design with fully active, exposed moving gears. Perfectly styled for main living halls.",
    img: "/images/story-clock.png",
  },
  {
    id: "03",
    title: "Sacred Idols",
    subtitle: "Premium Poly-Resin",
    desc: "10-inch Ganesh statues with polished white and gold finish. Handcrafted for serene sanctuaries.",
    img: "/images/ganesha-statue-luxury.png",
  },
  {
    id: "04",
    title: "Water Fountains",
    subtitle: "Cascading Flow",
    desc: "High-durability resin fountains featuring peaceful cascading water flow and soft LED lighting.",
    img: "/images/buddha-water-fountain.png",
  },
  {
    id: "05",
    title: "Bespoke Lighting",
    subtitle: "Custom Hanging Lamps",
    desc: "Custom metal alloys and multi-finish options. Accent lighting solutions for modern and traditional homes.",
    img: "/images/story-decor.png",
  }
];

export default function CollectionsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // 1. Initial Setup: Set gentle starting positions for a subtler, more high-end feel
    collections.forEach((_, i) => {
      if (i === 0) return;
      gsap.set(`.text-item-${i}`, { y: 20, opacity: 0 });
      gsap.set(`.img-item-${i}`, { scale: 1.03, opacity: 0 });
    });

    // 2. Create pinned ScrollTrigger timeline with buttery smooth lag and snappy, clean snapping
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=350%", // Generous scroll track
        scrub: 1, // Butter-smooth interpolation (absorbs minor scroll jitter)
        pin: true,
        anticipatePin: 1,
        snap: {
          snapTo: [0, 0.25, 0.5, 0.75, 1.0], // Exactly maps to Item 0, 1, 2, 3, and 4
          duration: { min: 0.2, max: 0.4 }, // Fast, premium snapping transition
          delay: 0.1, // Quick response after scrolling stops
          ease: "power1.inOut" // Organic snapping acceleration/deceleration
        }
      }
    });

    // 3. Build buttery smooth transitions with sustained reading plateaus (Iteration duration: 2.0s)
    collections.forEach((_, i) => {
      if (i === 0) return;
      
      // A. Liquid Transition (0.8s): Softer displacements and custom organic curves for a luxurious feel
      tl.to(`.text-item-${i-1}`, { y: -20, opacity: 0, duration: 0.8, ease: "power1.inOut" });
      tl.to(`.img-item-${i-1}`, { scale: 0.98, opacity: 0, duration: 0.8, ease: "power1.inOut" }, "<");

      // Seamless cross-fade IN of the next item
      tl.to(`.text-item-${i}`, { y: 0, opacity: 1, duration: 0.8, ease: "power1.inOut" }, "<");
      tl.to(`.img-item-${i}`, { scale: 1, opacity: 1, duration: 0.8, ease: "power1.inOut" }, "<");

      // B. Plateau (1.2s): Let the active item sit still and be fully readable
      tl.to({}, { duration: 1.2 });
    });

  }, { scope: sectionRef });

  return (
    <section 
      id="collections" 
      ref={sectionRef}
      className="w-full min-h-screen bg-[#FAF6F0] text-brand-charcoal overflow-hidden relative flex flex-col justify-between py-16 md:py-24"
    >
      {/* Section Header - Normal Flow to prevent absolute positioning overlap */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 z-20 flex-shrink-0">
        <span className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-brand-brass font-bold mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-brass" />
          The Curated Edit
        </span>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-brand-charcoal">
          Five Pillars of Craft
        </h2>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center gap-12 md:gap-24 relative flex-grow my-8 md:my-12">
        
        {/* Left: Image Stack */}
        <div className="w-full md:w-1/2 h-[45vh] md:h-[60vh] min-h-[350px] relative flex justify-center items-center">
          <div className="relative w-full max-w-[450px] aspect-[4/5] overflow-hidden rounded-[2px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] bg-brand-charcoal/5">
            {collections.map((item, i) => (
              <img 
                key={item.id} 
                src={item.img} 
                alt={item.title}
                className={`img-item-${i} absolute inset-0 w-full h-full object-cover`}
                style={{ 
                  opacity: i === 0 ? 1 : 0,
                  zIndex: 10 - i 
                }} 
              />
            ))}
          </div>
        </div>

        {/* Right: Text Stack */}
        <div className="w-full md:w-1/2 h-[45vh] md:h-[60vh] min-h-[350px] relative flex items-center justify-start">
          <div className="relative w-full h-full flex items-center">
            {collections.map((item, i) => (
              <div 
                key={item.id} 
                className={`text-item-${i} absolute inset-0 flex flex-col justify-center pointer-events-none`}
                style={{ 
                  opacity: i === 0 ? 1 : 0
                }}
              >
                <span className="font-serif text-6xl md:text-8xl text-brand-brass/30 mb-4 md:mb-6 font-light italic leading-none">
                  {item.id}
                </span>
                <h3 className="font-serif text-3xl md:text-5xl text-brand-charcoal font-medium tracking-tight mb-4">
                  {item.title}
                </h3>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-brand-brass font-bold mb-6">
                  {item.subtitle}
                </p>
                <p className="text-sm md:text-base text-brand-charcoal/70 leading-relaxed max-w-md font-sans">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* Static Action Button that stays in place while text scrolls */}
            <div className="absolute bottom-4 md:bottom-12 left-0 z-20 pointer-events-auto">
              <a href="#spotlight" className="group inline-flex items-center gap-3 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold text-brand-charcoal hover:text-brand-brass transition-colors w-fit">
                EXPLORE CATEGORY
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
