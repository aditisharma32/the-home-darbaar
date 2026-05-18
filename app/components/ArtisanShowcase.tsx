"use client";

import React from "react";
import { motion } from "framer-motion";

const scrollRevealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] as const }
  }
};

export default function ArtisanShowcase() {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={scrollRevealVariants}
      className="cinematic-section py-32 md:py-40 relative"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/jaipur-artisan-workshop/1920/1080)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div className="lg:col-span-5">
          <span className="text-xs uppercase tracking-widest text-brand-brass font-bold block mb-3">
            Meticulous Process
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight text-white">
            Honoring Native Jaipur Guilds
          </h2>
          <p className="text-sm text-white/70 mt-6 leading-relaxed">
            Every item at The Home Darbaar passes through strict regional artisan guilds. We do not manufacture; we collaborate and curate, ensuring old-world processes remain economically sustainable.
          </p>
          
          {/* List of Craft Pillars */}
          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <span className="font-serif text-xl text-brand-brass font-bold mt-0.5">01</span>
              <div>
                <h4 className="font-serif text-lg font-bold text-white">Sand-Cast Brass Casting</h4>
                <p className="text-xs text-white/50 leading-relaxed mt-1">
                  Brass is molten and hand-cast in organic red clay sand molds in native Jaipur metal workshops.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <span className="font-serif text-xl text-brand-clay font-bold mt-0.5">02</span>
              <div>
                <h4 className="font-serif text-lg font-bold text-white">Repoussé Gold Leaf Application</h4>
                <p className="text-xs text-white/50 leading-relaxed mt-1">
                  Delicate sheets of gold leaf are burnished onto teakwood and resin surfaces in Sanganeri and Johri Bazar ateliers.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <span className="font-serif text-xl text-brand-brass font-bold mt-0.5">03</span>
              <div>
                <h4 className="font-serif text-lg font-bold text-white">Precision Gear Balancing</h4>
                <p className="text-xs text-white/50 leading-relaxed mt-1">
                  Synchronized moving clock gears are assembled and balanced to guarantee friction-free visual loop transitions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="testimonial-card bg-white/10 border-brand-brass/20 border-l-2 border-l-brand-brass">
            <span className="text-[10px] uppercase tracking-widest text-brand-brass font-bold">M.I. Road, Jaipur</span>
            <p className="text-sm text-white/80 leading-relaxed italic mt-4 font-serif">
              &quot;Visiting The Home Darbaar was like walking through a contemporary palace library. The mechanical clocks and Turkish mosaic globes cast shadows that transformed our drawing room.&quot;
            </p>
            <span className="text-xs font-semibold text-brand-brass block mt-6">— Curator Review, Delhi</span>
          </div>

          <div className="testimonial-card bg-white/10 border-brand-brass/20 border-l-2 border-l-brand-clay">
            <span className="text-[10px] uppercase tracking-widest text-brand-brass font-bold">Architect Review</span>
            <p className="text-sm text-white/80 leading-relaxed italic mt-4 font-serif">
              &quot;The slate indoor water fountain has become the auditory anchor of our wellness lounge. Exceptional craftsmanship and material durability.&quot;
            </p>
            <span className="text-xs font-semibold text-brand-brass block mt-6">— Interior Studio, Jaipur</span>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
