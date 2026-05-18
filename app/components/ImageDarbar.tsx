"use client";

import React from "react";
import { motion } from "framer-motion";

// Motion choreography spring curves
const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const ITEM_VARIANTS = {
  hidden: { y: 40, opacity: 0, scale: 0.96 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 70,
      damping: 18,
      mass: 1.2
    }
  }
};

export default function ImageDarbar() {
  return (
    <motion.div
      variants={CONTAINER_VARIANTS}
      initial="hidden"
      animate="visible"
      className="relative w-full max-w-xl mx-auto flex flex-col items-center justify-center"
    >
      {/* 1. OUTER BEZEL CONTAINER (Mat-Board Arch Shell) */}
      <div className="w-full bg-[#FAF6F0] p-4 rounded-t-[20rem] rounded-b-[3rem] border border-brand-brass/20 shadow-2xl relative overflow-hidden">
        
        {/* Subtle royal background grid lines inside the bezel */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-[0.03] pointer-events-none">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="border border-brand-charcoal" />
          ))}
        </div>

        {/* 2. INNER COLLAGE GRID */}
        <div className="grid grid-cols-2 gap-3.5 relative z-10 w-full aspect-[3/4]">
          
          {/* A. LEFT TALL ITEM — "Royal Illumination" */}
          <motion.div
            variants={ITEM_VARIANTS}
            className="group relative w-full h-full overflow-hidden rounded-tl-[18rem] rounded-tr-[1.5rem] rounded-b-[1.5rem] border border-brand-brass/10 cursor-pointer shadow-md"
          >
            <img
              src="/images/hero-chandelier.png"
              alt="Ornate brass chandelier with amber glass globes in a Rajasthani haveli"
              className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/0 to-brand-charcoal/20 opacity-90 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />
            
            {/* Floating content badge */}
            <div className="absolute bottom-5 left-5 right-5 z-20 flex flex-col gap-1 text-brand-ivory">
              <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-brand-brass flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-brass animate-pulse" />
                <span>Illumination</span>
              </span>
              <h4 className="font-serif text-sm font-semibold tracking-wide leading-tight">
                Imperial Chandeliers
              </h4>
            </div>
          </motion.div>

          {/* B. RIGHT STACK COLUMN */}
          <div className="flex flex-col gap-3.5 w-full h-full">
            
            {/* B1. RIGHT TOP ITEM — "Chronicles of Time" */}
            <motion.div
              variants={ITEM_VARIANTS}
              className="group relative w-full h-[48%] overflow-hidden rounded-tr-[18rem] rounded-tl-[1.5rem] rounded-b-[1.5rem] border border-brand-brass/10 cursor-pointer shadow-sm"
            >
              <img
                src="/images/hero-clock.png"
                alt="Mechanical gear wall clock with exposed copper and brass gears"
                className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col gap-1 text-brand-ivory">
                <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-brand-brass flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-brass" />
                  <span>Timepieces</span>
                </span>
                <h4 className="font-serif text-xs font-semibold tracking-wide leading-tight">
                  Mechanical Gear Clocks
                </h4>
              </div>
            </motion.div>

            {/* B2. RIGHT BOTTOM ITEM — "Heritage Decor" */}
            <motion.div
              variants={ITEM_VARIANTS}
              className="group relative w-full h-[52%] overflow-hidden rounded-[1.5rem] border border-brand-brass/10 cursor-pointer shadow-sm"
            >
              <img
                src="/images/hero-heritage.png"
                alt="Heritage Indian decor with brass elephant, Ganesha idol and slate water fountain"
                className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col gap-1 text-brand-ivory">
                <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-brand-brass flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-brass" />
                  <span>Heritage Decor</span>
                </span>
                <h4 className="font-serif text-xs font-semibold tracking-wide leading-tight">
                  Jaipur Artisan Suites
                </h4>
              </div>
            </motion.div>

          </div>

        </div>

      </div>

      {/* Decorative Outer Arch Line echoing the Mehrab gateway */}
      <div className="absolute -inset-2.5 border border-brand-brass/10 rounded-t-[20.5rem] rounded-b-[3.5rem] pointer-events-none z-0" />
      <div className="absolute -inset-5 border border-brand-brass/5 rounded-t-[21rem] rounded-b-[4rem] pointer-events-none z-0" />
    </motion.div>
  );
}
