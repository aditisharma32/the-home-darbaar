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

export default function StorySection() {
  return (
    <motion.section 
      id="story" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={scrollRevealVariants}
      className="py-32 border-b border-brand-brass/15 bg-white/20 relative"
    >
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-brand-brass/5 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Block */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <span className="text-xs uppercase tracking-widest text-brand-brass font-bold block mb-3">
            The Artisan Legacy
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight text-brand-charcoal">
            Bridging Royal Court Grandeur <span className="font-serif italic font-normal text-brand-brass">with</span> Avant-Garde Minimalist Decor.
          </h2>
          <div className="w-16 h-[1px] bg-brand-brass/40 mt-8" />
        </div>

        {/* Right Block */}
        <article className="lg:col-span-7 space-y-8 text-brand-charcoal/80 leading-relaxed text-md font-sans">
          <p>
            Nestled in the historic city center of <strong>Jaipur, Rajasthan</strong>, <em>The Home Darbaar</em> is dedicated to raw materiality and time-honored heritage. The word &quot;Darbaar&quot; represents the royal court—a space of profound luxury, heritage, and absolute assembly of fine craftsmanship.
          </p>
          <blockquote className="border-l-2 border-brand-brass/30 pl-6 italic text-brand-charcoal font-medium text-lg my-8 leading-relaxed font-serif">
            &quot;We believe that a modern home should not be sterile. It should speak of history, carry sound, and reflect the precision of mechanical and spiritual weight.&quot;
          </blockquote>
          <p>
            We collaborate with native brass-smiths, clay artisans, precision horologists, and stone sculptors across Rajasthan. Every product in our boutique is individually refined to guarantee structural durability and visual excellence.
          </p>
          <p>
            Whether it is the rhythmic acoustic hum of our tiered slate water fountains, the micro-motion gears of our wall clocks, or the meticulous marble-resin details of our Ganesh idols, each piece functions as a conversation center inside your home.
          </p>
          
          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-brand-brass/10 mt-12">
            <div>
              <span className="font-serif text-4xl font-bold text-brand-charcoal">47+</span>
              <span className="text-[10px] uppercase tracking-widest text-brand-charcoal/50 font-bold block mt-1">Heritage Guild Families</span>
            </div>
            <div>
              <span className="font-serif text-4xl font-bold text-brand-charcoal">4.9★</span>
              <span className="text-[10px] uppercase tracking-widest text-brand-charcoal/50 font-bold block mt-1">Curator Rating</span>
            </div>
            <div>
              <span className="font-serif text-4xl font-bold text-brand-clay">2019</span>
              <span className="text-[10px] uppercase tracking-widest text-brand-charcoal/50 font-bold block mt-1">Showroom Launch</span>
            </div>
          </div>
        </article>
      </div>
    </motion.section>
  );
}
