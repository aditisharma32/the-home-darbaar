"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const scrollRevealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] as const }
  }
};

export default function CinematicQuote() {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={scrollRevealVariants}
      className="py-32 md:py-48 bg-[#FAF6F0] flex items-center justify-center text-center px-6"
    >
      <div className="max-w-4xl flex flex-col items-center">
        <Sparkles className="w-8 h-8 text-brand-brass mb-8 opacity-50" />
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-brand-charcoal leading-[1.2] font-medium tracking-tight">
          &quot;True luxury is <span className="italic text-brand-brass">silent</span>. It resides in the weight of raw brass, the resonance of falling water, and the quiet precision of moving gears.&quot;
        </h2>
        <div className="mt-10 flex items-center gap-4">
          <div className="w-12 h-[1px] bg-brand-charcoal/20" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-brand-charcoal font-bold">The Home Darbaar Manifesto</span>
          <div className="w-12 h-[1px] bg-brand-charcoal/20" />
        </div>
      </div>
    </motion.section>
  );
}
