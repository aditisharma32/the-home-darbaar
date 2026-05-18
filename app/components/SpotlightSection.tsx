"use client";

import React from "react";
import { motion } from "framer-motion";
import ProductSpotlight from "./ProductSpotlight";

const scrollRevealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] as const }
  }
};

interface SpotlightSectionProps {
  onSelectProduct: (product: any) => void;
}

export default function SpotlightSection({ onSelectProduct }: SpotlightSectionProps) {
  return (
    <motion.section 
      id="spotlight" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={scrollRevealVariants}
      className="py-32 bg-brand-charcoal text-brand-ivory relative"
    >
      <div className="absolute inset-0 bg-radial from-stone-900 via-brand-dark/95 to-brand-dark pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-brand-brass font-bold block mb-3">
              Heritage Spotlight
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
              Curated Boutique Catalog
            </h2>
          </div>
          <p className="text-sm text-brand-ivory/60 max-w-[38ch] leading-relaxed font-sans">
            Interact with each piece to request showroom specifications, custom sizing, and a direct WhatsApp inquiry.
          </p>
        </div>

        <ProductSpotlight onSelectProduct={onSelectProduct} />
      </div>
    </motion.section>
  );
}
