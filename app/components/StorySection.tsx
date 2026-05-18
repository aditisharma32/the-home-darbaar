"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

function MetricCard({ value, label, subtext, delay }: { value: string; label: string; subtext?: string; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Max 10 degrees tilt for premium feedback
    setRotateX(-y / (rect.height / 20));
    setRotateY(x / (rect.width / 20));
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.32, 0.72, 0, 1] }}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      className="p-6 rounded-2xl bg-[#faf9f6]/95 border border-brand-brass/10 hover:border-brand-brass/40 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden cursor-pointer will-change-transform"
    >
      {/* Animated Gradient Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-brass/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <span className="font-serif text-2xl font-bold text-brand-brass block transition-transform duration-350 group-hover:translate-z-20">
        {value}
      </span>
      <span className="text-[9px] uppercase tracking-[0.15em] text-brand-charcoal/60 font-bold block mt-2 group-hover:translate-z-10">
        {label}
      </span>
      {subtext && (
        <span className="text-[8px] font-mono text-brand-charcoal/40 mt-1 block group-hover:translate-z-10">
          {subtext}
        </span>
      )}
    </motion.div>
  );
}

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of this section relative to viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth spring physics for organic parallax motion
  const yBg = useTransform(scrollYProgress, [0, 1], [30, -50]);
  const yFg = useTransform(scrollYProgress, [0, 1], [60, -110]);
  
  const smoothYBg = useSpring(yBg, { stiffness: 90, damping: 25 });
  const smoothYFg = useSpring(yFg, { stiffness: 90, damping: 25 });

  return (
    <motion.section 
      ref={containerRef}
      id="story" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-28 border-b border-brand-brass/15 bg-white/20 relative overflow-hidden"
    >
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-brand-brass/5 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
        
        {/* Left Column: Typography + Custom 3D Parallax Collage */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <span className="text-xs uppercase tracking-widest text-brand-brass font-bold block mb-3">
            Our Real Story
          </span>
          
          {/* Cinematic Line-by-Line Masked Headline Reveal */}
          <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight text-brand-charcoal">
            <span className="block overflow-hidden relative pb-1">
              <motion.span 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
                className="block"
              >
                Bridging Jaipur's Handicraft
              </motion.span>
            </span>
            <span className="block overflow-hidden relative">
              <motion.span 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
                className="block"
              >
                <span className="font-serif italic font-normal text-brand-brass">with</span> Modern Home Decor.
              </motion.span>
            </span>
          </h2>
          <div className="w-16 h-[1px] bg-brand-brass/40 mt-6" />

          {/* Staggered 3D Parallax Editorial Collage */}
          <div className="relative mt-16 w-full max-w-[400px] h-[450px] hidden md:block">
            {/* Background luxury warm glow */}
            <div className="absolute inset-0 bg-brand-brass/5 blur-3xl rounded-full -z-10" />
            
            {/* Main Image (Arched portrait, moves slower) */}
            <motion.div 
              style={{ y: smoothYBg, z: 0 }}
              className="absolute left-0 top-0 w-[68%] h-[85%] rounded-t-[180px] overflow-hidden border border-brand-brass/20 shadow-2xl bg-[#0b0a09] will-change-transform"
            >
              <img 
                src="/images/story-decor.png" 
                alt="Jaipur Heritage Decor" 
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            {/* Overlapping Secondary Image (Foreground, moves faster to create intense depth) */}
            <motion.div 
              style={{ y: smoothYFg, z: 0 }}
              className="absolute right-0 bottom-4 w-[52%] h-[52%] rounded-2xl overflow-hidden border border-brand-brass/25 shadow-2xl bg-[#0b0a09] will-change-transform"
            >
              <img 
                src="/images/story-chandelier.png" 
                alt="Turkish Chandelier Jhoomar" 
                className="w-full h-full object-cover opacity-95 transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </div>

          {/* Mobile Single Banner (Simple for Performance) */}
          <div className="relative mt-8 w-full aspect-[4/3] rounded-2xl overflow-hidden border border-brand-brass/20 shadow-lg md:hidden">
            <img 
              src="/images/story-decor.png" 
              alt="Jaipur Heritage Decor" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column: Story Copy + Interactive Metrics Cards */}
        <article className="lg:col-span-7 space-y-8 text-brand-charcoal/80 leading-relaxed text-md font-sans pt-4 lg:pt-0">
          <p>
            Located in Jagatpura, Jaipur (near Suresh Gyan Vihar University), <strong>The Home Darbaar</strong> is a premier boutique curated by <strong>Chiranshu Khandelwal</strong>. We specialize in sourcing, designing, and supplying exquisite home decor, luxury lighting, and traditional handicraft innovations.
          </p>
          
          <blockquote className="border-l-2 border-brand-brass/30 pl-6 italic text-brand-charcoal font-medium text-lg my-8 leading-relaxed font-serif relative">
            &quot;We bridge the gap between historic Indian craftsmanship and modern interior luxury. Our goal is to bring character, warmth, and timeless design to every space.&quot;
            <span className="absolute -right-4 bottom-[-16px] font-serif italic text-[10px] text-brand-brass/60 tracking-wider">
              — Chiranshu K.
            </span>
          </blockquote>
          
          <p>
            Instead of oversized furniture like beds or sofas, our boutique focuses entirely on the finer accents that bring a room to life. We curate and manufacture beautiful, highly-detailed statement pieces—including our iconic Turkish-style solid brass Chandelier Jhoomars, heavy 27-inch metal Gear Wall Watches with active moving gears, and serene, handcrafted poly-resin sacred sculptures.
          </p>
          
          <p>
            Whether you are a retail buyer seeking to elevate your own living space or a B2B corporate client sourcing GST-compliant wholesale orders, we are committed to delivering unmatched quality, timeless elegance, and direct-to-door reliability across India.
          </p>
          
          {/* Quick Metrics Styled as Interactive 3D Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-brand-brass/10 mt-16">
            <MetricCard 
              value="Nov 2025" 
              label="Established" 
              delay={0.1} 
            />
            <MetricCard 
              value="100%" 
              label="GST Compliant" 
              subtext="08JUYPK0843L3ZN" 
              delay={0.2} 
            />
            <MetricCard 
              value="Open Daily" 
              label="10 AM - 10 PM" 
              delay={0.3} 
            />
          </div>
        </article>
        
      </div>
    </motion.section>
  );
}
