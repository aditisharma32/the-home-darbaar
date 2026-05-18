"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import ImageDarbar from "./ImageDarbar";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center pt-32 pb-16 px-6 md:px-16 w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Hero Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-brass font-bold mb-6 bg-brand-brass/10 px-3.5 py-1.5 rounded-full"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Heritage Showroom • Jaipur, Rajasthan</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-6xl md:text-[5.5rem] lg:text-[6rem] font-bold tracking-tight leading-[0.9] text-brand-charcoal max-w-2xl"
          >
            Royal Indian Grandeur. <br/><span className="font-serif italic font-normal text-brand-brass">Curated for</span> Modern Spaces.
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "6rem" }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="h-[1px] bg-brand-brass/60 mt-8 mb-2"
          />

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base text-brand-charcoal/70 mt-4 leading-relaxed max-w-[48ch]"
          >
            Bridging the iconic craftsmanship guilds of Jaipur to sophisticated contemporary interiors. We select and refine exquisite antique chandeliers, mechanical gear clocks, slate tabletop acoustics, and gold-leaf sacred idols.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto"
          >
            <a 
              href="#spotlight"
              className="flex h-14 items-center justify-center gap-3 rounded-full bg-brand-charcoal hover:bg-brand-dark text-brand-ivory px-8 text-xs font-semibold uppercase tracking-widest shadow-lg transition-all transform hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              <span>Acquire Visual Catalog</span>
              <ArrowRight className="w-4 h-4 text-brand-brass" />
            </a>
            <a 
              href="#story"
              className="flex h-14 items-center justify-center rounded-full border border-brand-charcoal/20 hover:bg-brand-charcoal/5 px-8 text-xs font-semibold uppercase tracking-widest transition-all cursor-pointer"
            >
              Our Heritage Guild
            </a>
          </motion.div>
        </div>

        {/* Hero Right Visuals (Arched Collage Mehrab) */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center z-10">
          <ImageDarbar />
        </div>
      </div>
    </section>
  );
}
