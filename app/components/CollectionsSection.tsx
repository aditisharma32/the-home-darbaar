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
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLElement>(".collection-row");
    
    items.forEach((item) => {
      gsap.fromTo(item, 
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section 
      id="collections" 
      ref={containerRef}
      className="w-full flex flex-col items-center justify-start py-32 md:py-48 bg-[#FAF6F0] text-brand-charcoal overflow-hidden"
    >
      <div className="max-w-[1400px] w-full px-6 md:px-16 flex flex-col items-start mb-20 md:mb-32">
        <span className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-brand-brass font-bold mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-brass" />
          The Curated Edit
        </span>
        <h2 className="font-serif text-[3rem] md:text-[5.5rem] font-light tracking-tight text-brand-charcoal leading-none mb-8">
          Five Pillars of Craft
        </h2>
        <p className="text-sm md:text-base text-brand-charcoal/60 max-w-xl font-sans leading-relaxed">
          A visual collection of our most celebrated categories — each piece
          crafted with intention, materiality, and architectural precision.
        </p>
      </div>

      <div className="w-full max-w-[1400px] px-6 md:px-16 flex flex-col">
        {collections.map((item, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div 
              key={item.id} 
              className="collection-row w-full flex flex-col md:flex-row items-center gap-12 md:gap-24 py-16 md:py-24 border-t border-brand-charcoal/10 group"
            >
              {/* Image Column */}
              <div className={`w-full md:w-1/2 flex justify-center ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                <div className="relative w-full sm:w-[85%] md:w-[80%] max-w-[500px] aspect-[4/5] overflow-hidden rounded-[2px] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                   <img 
                      src={item.img} 
                      alt={item.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
                   />
                   <div className="absolute inset-0 bg-brand-charcoal/5 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0" />
                </div>
              </div>

              {/* Text Column */}
              <div className={`w-full md:w-1/2 flex flex-col justify-center ${isEven ? 'md:order-2' : 'md:order-1'} ${isEven ? 'md:pl-4 lg:pl-12' : 'md:pr-4 lg:pr-12'}`}>
                <span className="font-serif text-6xl md:text-8xl text-brand-brass/30 mb-4 md:mb-6 font-light italic leading-none">
                  {item.id}
                </span>
                <h3 className="font-serif text-3xl md:text-5xl text-brand-charcoal font-medium tracking-tight mb-4">
                  {item.title}
                </h3>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-brand-brass font-bold mb-6 md:mb-8">
                  {item.subtitle}
                </p>
                <p className="text-sm md:text-base text-brand-charcoal/70 leading-relaxed max-w-md font-sans mb-10">
                  {item.desc}
                </p>
                
                <a href="#spotlight" className="inline-flex items-center gap-3 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold text-brand-charcoal hover:text-brand-brass transition-colors w-fit group/btn">
                  EXPLORE CATEGORY
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-20 md:mt-32 relative z-10 flex justify-center w-full">
        <a 
          href="#spotlight" 
          className="group inline-flex items-center gap-4 bg-brand-charcoal text-brand-ivory px-10 py-5 rounded-full hover:bg-brand-brass hover:text-brand-charcoal transition-all duration-500 shadow-xl"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold">VIEW FULL CATALOG</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
