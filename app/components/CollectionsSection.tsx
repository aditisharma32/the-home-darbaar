"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Clock, Droplets, ArrowUpRight, Sun, ArrowRight, Landmark, ChevronRight } from "lucide-react";

const scrollRevealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] as const }
  }
};

export default function CollectionsSection() {
  return (
    <motion.section 
      id="collections" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={scrollRevealVariants}
      className="py-32 max-w-7xl mx-auto px-6 md:px-16"
    >
      <div className="flex flex-col items-center text-center mb-20">
        <span className="text-xs uppercase tracking-widest text-brand-brass font-bold bg-brand-brass/10 px-3.5 py-1.5 rounded-full mb-4">
          Visual Anthology
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-charcoal">
          The Curated Collection Pillars
        </h2>
        <p className="text-sm text-brand-charcoal/60 mt-4 max-w-[50ch] leading-relaxed">
          Exquisitely detailed categories bridging heavy materiality with delicate light refraction and peaceful kinetic movement.
        </p>
      </div>

      {/* IMAGE-DOMINANT BENTO GRID — every card is a photo with overlay */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[minmax(240px,auto)]" style={{ gridAutoFlow: 'dense' }}>
        
        {/* Card 1: Royal Illumination — HERO CARD (col-span-2, row-span-2) */}
        <div className="bento-card md:col-span-2 md:row-span-2 min-h-[520px] flex flex-col justify-between p-10 md:p-14 group">
          <img
            src="https://picsum.photos/seed/rajasthan-chandelier/1200/900"
            alt="Imperial Chandelier lighting showcase"
            className="bento-img absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 pointer-events-none" />
          <div className="absolute inset-0 bg-[#C5A880]/10 mix-blend-overlay pointer-events-none" />
          
          <div className="z-10 flex justify-between items-start">
            <span className="text-[10px] uppercase tracking-widest text-brand-brass font-bold border border-brand-brass/40 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-sm">
              Lamps, Jhoomars & Chandeliers
            </span>
            <Sparkles className="w-6 h-6 text-brand-brass" />
          </div>

          <div className="z-10 max-w-lg">
            <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold block mb-2">Royal Illumination</span>
            <h3 className="font-serif text-3xl md:text-5xl font-semibold leading-tight mb-4 text-white">
              Antique Brass & Turkish Mosaic Chandeliers
            </h3>
            <p className="text-sm text-white/70 leading-relaxed max-w-[42ch]">
              Hand-cast brass armatures with intricate Mughal carvings and Turkish glass globes, casting expansive textured shadows.
            </p>
            <a 
              href="#spotlight"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-brass font-bold mt-8 border-b border-brand-brass/30 pb-1 hover:text-white hover:border-white transition-all cursor-pointer"
            >
              <span>Browse Illumination</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Card 2: Timepieces — IMAGE CARD */}
        <div className="bento-card min-h-[240px] flex flex-col justify-end p-8 group">
          <img
            src="https://picsum.photos/seed/vintage-clock-gears/600/600"
            alt="Exposed moving gear wall clock"
            className="bento-img absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
          
          <div className="z-10">
            <span className="text-[9px] uppercase tracking-widest text-brand-brass font-bold">Timepieces</span>
            <h4 className="font-serif text-xl font-semibold text-white mt-1 mb-1">Moving Gear & Hall Clocks</h4>
            <a href="#spotlight" className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-brand-brass font-bold mt-2 hover:text-white transition-colors cursor-pointer">
              <span>Explore</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Card 3: Fountains — IMAGE CARD */}
        <div className="bento-card min-h-[240px] flex flex-col justify-end p-8 group">
          <img
            src="https://picsum.photos/seed/zen-water-stone/600/600"
            alt="Tiered slate waterfall fountain"
            className="bento-img absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
          
          <div className="z-10">
            <span className="text-[9px] uppercase tracking-widest text-brand-brass font-bold">Kinetic Flow</span>
            <h4 className="font-serif text-xl font-semibold text-white mt-1 mb-1">Acoustic Water Fountains</h4>
            <a href="#spotlight" className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-brand-brass font-bold mt-2 hover:text-white transition-colors cursor-pointer">
              <span>Explore</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Card 4: Sacred — IMAGE CARD */}
        <div className="bento-card min-h-[280px] flex flex-col justify-end p-8 group">
          <img
            src="https://picsum.photos/seed/golden-temple-statue/600/700"
            alt="Sacred golden Ganesha idol"
            className="bento-img absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
          
          <div className="z-10">
            <span className="text-[9px] uppercase tracking-widest text-brand-brass font-bold">Sacred Devotion</span>
            <h4 className="font-serif text-xl font-semibold text-white mt-1 mb-1">Resin Ganesh & Vishnu Shankh</h4>
            <p className="text-xs text-white/60 leading-relaxed mt-1 max-w-[36ch]">
              Marble resin detailed in 24k gold leaf — anchors for peace and cosmic energy.
            </p>
            <a href="#spotlight" className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-brand-brass font-bold mt-3 hover:text-white transition-colors cursor-pointer">
              <span>Browse Sacred</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Card 5: Handicrafts — WIDE IMAGE CARD (col-span-2) */}
        <div className="bento-card md:col-span-2 min-h-[280px] flex flex-col justify-end p-10 group">
          <img
            src="https://picsum.photos/seed/rajasthan-brass-elephant/1200/600"
            alt="Jaipur traditional brass Ambabari elephant handicraft"
            className="bento-img absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
          
          <div className="z-10 max-w-md">
            <span className="text-[9px] uppercase tracking-widest text-brand-brass font-bold">Traditional Handicrafts</span>
            <h4 className="font-serif text-2xl font-semibold text-white mt-1 mb-2">Jaipur Brass Repoussé & Crafts</h4>
            <p className="text-xs text-white/60 leading-relaxed max-w-[42ch]">
              Ambabari elephants and artifacts from Sanganer and Johri Bazar master craftsman guilds.
            </p>
            <a href="#spotlight" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-brass font-bold mt-4 hover:text-white transition-colors cursor-pointer">
              <span>Browse Handicrafts</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
