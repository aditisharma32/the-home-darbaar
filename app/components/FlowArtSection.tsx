'use client';

import React from 'react';
import FlowArt, { FlowSection } from './ui/story-scroll';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    id: "01",
    title: "Chandelier Jhoomars",
    subtitle: "Antique Finish & Turkish Mosaic",
    desc: "Solid brass body with elegant Turkish-style design crafted in colorful mosaic glass. Emits a warm, welcoming light.",
    img: "/images/story-chandelier.png",
    bg: "#141312",
    text: "#FAF6F0",
    accent: "#c5a880",
    divider: "border-white/10"
  },
  {
    id: "02",
    title: "Gear Wall Watches",
    subtitle: "27-inch Kinetic Precision",
    desc: "Premium black and gold design with fully active, exposed moving gears. Perfectly styled for main living halls.",
    img: "/images/story-clock.png",
    bg: "#FAF6F0",
    text: "#141312",
    accent: "#a75d5d",
    divider: "border-brand-charcoal/10"
  },
  {
    id: "03",
    title: "Sacred Idols",
    subtitle: "Premium Poly-Resin",
    desc: "10-inch Ganesh statues with polished white and gold finish. Handcrafted for serene sanctuaries.",
    img: "/images/ganesha-statue-luxury.png",
    bg: "#a75d5d",
    text: "#FAF6F0",
    accent: "#FAF6F0",
    divider: "border-white/20"
  },
  {
    id: "04",
    title: "Water Fountains",
    subtitle: "Cascading Flow",
    desc: "High-durability resin fountains featuring peaceful cascading water flow and soft LED lighting.",
    img: "/images/buddha-water-fountain.png",
    bg: "#354133",
    text: "#FAF6F0",
    accent: "#c5a880",
    divider: "border-white/20"
  },
  {
    id: "05",
    title: "Bespoke Lighting",
    subtitle: "Custom Hanging Lamps",
    desc: "Custom metal alloys and multi-finish options. Accent lighting solutions for modern and traditional homes.",
    img: "/images/story-decor.png",
    bg: "#c5a880",
    text: "#141312",
    accent: "#141312",
    divider: "border-brand-charcoal/20"
  }
];

export default function FlowArtSection() {
  return (
    <FlowArt aria-label="The Home Darbaar Curated Edit">
      {collections.map((item, index) => {
        const isEven = index % 2 === 0;
        const isDark = item.bg !== '#FAF6F0';

        return (
          <FlowSection
            key={item.id}
            aria-label={item.title}
            style={{ backgroundColor: item.bg, color: item.text }}
            className="font-sans"
          >
            {/* Header row */}
            <div className="flex items-center justify-between">
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em]" style={{ color: item.accent }}>
                {item.id} — The Collection
              </p>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-40">
                {item.subtitle}
              </span>
            </div>
            
            <hr className={`my-[1.5vw] border-none border-t ${item.divider}`} />

            {/* Asymmetrical content body */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center my-auto">
              {/* IMAGE (Double-Bezel concentric design) */}
              <div className={`md:col-span-5 w-full ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                <div 
                  className={`w-full max-w-[420px] mx-auto rounded-[2rem] ${
                    isDark 
                      ? 'bg-white/[0.04] border border-white/[0.07] p-2.5' 
                      : 'bg-black/[0.03] border border-black/[0.06] p-2.5'
                  }`}
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[calc(2rem-0.625rem)] shadow-lg">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* TEXT */}
              <div className={`md:col-span-7 w-full flex flex-col justify-center ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                <span 
                  className="inline-block px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.2em] font-bold border border-current/20 w-fit mb-6"
                >
                  {item.subtitle}
                </span>

                <h2 className="font-serif font-light text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[1.05] tracking-tight uppercase mb-6">
                  {item.title}
                </h2>

                <p className="text-sm md:text-base leading-relaxed opacity-75 max-w-[45ch] font-sans font-light">
                  {item.desc}
                </p>

                {/* Alternating CTA */}
                <div className="pt-8">
                  {index === collections.length - 1 ? (
                    <a
                      href="#spotlight"
                      className="group inline-flex items-center justify-center gap-4 rounded-full bg-[#141312] text-[#faf6f0] px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all hover:bg-black hover:scale-105 active:scale-95 shadow-lg w-fit"
                    >
                      <span>Inquire & Curate</span>
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-transform group-hover:translate-x-1">
                        <ArrowRight className="w-3 h-3 text-[#c5a880]" />
                      </div>
                    </a>
                  ) : (
                    <a 
                      href="#spotlight" 
                      className="group inline-flex items-center gap-3 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold transition-all w-fit"
                    >
                      Explore Lookbook
                      <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center transition-transform group-hover:translate-x-1 duration-300">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>

            <hr className={`my-[1.5vw] border-none border-t ${item.divider}`} />

            {/* Footer row */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[9px] tracking-widest uppercase opacity-40">
              <p>The Home Darbaar — Jagatpura, Jaipur</p>
              <p>Luxury Artisanal Curation</p>
            </div>
          </FlowSection>
        );
      })}
    </FlowArt>
  );
}
