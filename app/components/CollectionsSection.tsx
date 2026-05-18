"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const collections = [
  {
    id: "01",
    title: "Chandelier Jhoomars",
    subtitle: "Antique Finish & Turkish Mosaic",
    desc: "Solid brass body with elegant Turkish-style design crafted in colorful mosaic glass.",
    img: "/images/story-chandelier.png"
  },
  {
    id: "02",
    title: "Gear Wall Watches",
    subtitle: "27-inch Kinetic Precision",
    desc: "Premium black and gold design with fully active, exposed moving gears.",
    img: "/images/story-clock.png"
  },
  {
    id: "03",
    title: "Sacred Idols",
    subtitle: "Premium Poly-Resin & Gold",
    desc: "10-inch Ganesh statues with polished white and gold finish.",
    img: "/images/ganesha-statue-luxury.png"
  },
  {
    id: "04",
    title: "Water Fountains",
    subtitle: "Lord Buddha Cascading Flow",
    desc: "High-durability resin fountains featuring peaceful cascading water flow.",
    img: "/images/buddha-water-fountain.png"
  },
  {
    id: "05",
    title: "Bespoke Lighting",
    subtitle: "Custom Hanging Lamps",
    desc: "Custom metal alloys and multi-finish options for commercial spaces.",
    img: "/images/story-decor.png"
  }
];

export default function CollectionsSection() {
  return (
    <section 
      id="collections" 
      className="w-full flex flex-col items-center justify-start py-32 md:py-48 bg-[#141312] text-brand-ivory overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(197,168,128,0.05)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="max-w-[1400px] w-full text-center px-6 md:px-16 flex flex-col items-center relative z-10">
        <span className="flex items-center gap-3 text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-brand-brass font-bold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          The Curated Collections
          <Sparkles className="w-3.5 h-3.5" />
        </span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-white mb-6">
          Visual Anthology
        </h2>
        <p className="text-sm md:text-base text-white/60 max-w-xl font-sans leading-relaxed">
          A visual collection of our most recent works – each piece crafted
          with intention, emotion, and architectural style.
        </p>
      </div>

      {/* Hover Accordion Gallery */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4 min-h-[60vh] md:h-[600px] w-full max-w-[1400px] mt-16 px-6 md:px-16 relative z-10">
        {collections.map((item, idx) => (
          <div
            key={item.id}
            className="group relative flex-grow transition-all md:w-24 md:hover:w-[800px] rounded-2xl overflow-hidden h-[120px] md:h-full duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer shadow-2xl border border-white/5"
          >
            {/* Background Image */}
            <img
              className="absolute inset-0 h-full w-full object-cover object-center opacity-60 md:opacity-50 group-hover:opacity-100 transition-opacity duration-700"
              src={item.img}
              alt={item.title}
            />
            
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/90 via-[#141312]/20 to-transparent pointer-events-none transition-opacity duration-700 group-hover:opacity-80" />

            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 delay-100">
              <span className="font-serif text-3xl md:text-5xl text-brand-brass/60 leading-none mb-2 md:mb-4">
                {item.id}
              </span>
              <h3 className="font-serif text-2xl md:text-4xl font-medium tracking-tight text-white mb-1 md:mb-2">
                {item.title}
              </h3>
              <p className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-brand-brass mb-3 md:mb-4">
                {item.subtitle}
              </p>
              <p className="text-white/70 text-xs md:text-sm font-light leading-relaxed max-w-md hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                {item.desc}
              </p>
            </div>
            
            {/* Vertical Title (visible when collapsed on Desktop) */}
            <div className="absolute inset-0 hidden md:flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none mix-blend-difference">
               <span className="font-serif text-2xl text-brand-brass whitespace-nowrap -rotate-90 tracking-widest">
                  {item.title}
               </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 relative z-10">
        <a 
          href="#spotlight" 
          className="group inline-flex items-center gap-4 bg-transparent border border-brand-brass text-brand-ivory px-8 py-4 rounded-full hover:bg-brand-brass hover:text-[#141312] transition-colors duration-500"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Explore Full Catalog</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
