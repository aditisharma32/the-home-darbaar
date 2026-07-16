"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  // Track scroll progress purely within this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 3D Door Swing Physics mapped to 0 -> 1.0 of the container's scroll progress
  // Mapped exactly to 90 degrees so the door visually continues moving until the very last
  // pixel of scroll progress. The exact moment it hits 90deg, the section unpins and scrolls.
  const rotateLeftDoor = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const rotateRightDoor = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const doorsOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const zoomInside = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <section
      ref={containerRef}
      className="relative h-[150vh] w-full bg-[#FAF6F0]"
    >
      {/* STICKY WRAPPER: Locks the layout to the screen while scrolling happens */}
      <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-center overflow-hidden pt-24 pb-4 md:pt-32 md:pb-16">
        {/* 1. ARCHITECTURAL EDITORIAL SPREAD */}
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-2 md:gap-12 lg:gap-8 items-center h-full">
          {/* Left Column: Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10 pt-4 md:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{ z: 0 }}
              className="flex items-center gap-3 text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-brand-charcoal/60 font-bold mb-4 md:mb-6 will-change-transform"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-brass" />
              <span>Jagatpura, Jaipur</span>
              <div className="w-8 md:w-12 h-[1px] bg-brand-brass/40" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
              style={{ z: 0 }}
              className="font-serif text-[2.75rem] leading-[1] md:text-7xl lg:text-[6.5rem] font-medium tracking-tight md:leading-[1.05] text-brand-charcoal will-change-transform"
            >
              The Home <br className="hidden md:block" />
              <span className="font-serif italic font-light text-brand-charcoal/80">
                Darbaar.
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 1.5,
                delay: 0.4,
                ease: [0.32, 0.72, 0, 1],
              }}
              style={{ z: 0 }}
              className="mt-4 md:mt-8 border-l-2 border-brand-brass/40 pl-4 md:pl-6 will-change-transform"
            >
              <p className="text-xs md:text-base text-brand-charcoal/70 leading-relaxed max-w-[55ch] font-sans">
                Based in Jagatpura, Jaipur, we curate a premium collection of
                handcrafted home accessories and lighting. Discover exquisite
                statement pieces designed to bring timeless elegance and
                character to your living spaces.
              </p>
            </motion.div>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.32, 0.72, 0, 1] }}
              style={{ z: 0 }}
              className="mt-6 md:mt-12 flex flex-wrap items-center gap-4 md:gap-6 will-change-transform"
            >
              <a
                href="#spotlight"
                className="group flex h-12 md:h-14 items-center justify-center gap-3 md:gap-4 rounded-full bg-brand-charcoal text-brand-ivory px-6 md:px-8 text-[11px] md:text-xs font-bold uppercase tracking-widest transition-all hover:bg-brand-dark hover:scale-105 active:scale-95"
              >
                <span>VIEW COLLECTION</span>
                <ArrowRight className="w-3.5 h-3.5 text-brand-brass transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#story"
                className="text-[11px] md:text-xs uppercase tracking-widest text-brand-charcoal/60 font-bold hover:text-brand-charcoal transition-colors underline underline-offset-8 decoration-brand-brass/30 hover:decoration-brand-brass hidden sm:block"
              >
                Our Heritage
              </a>
            </motion.div>
          </div>

          {/* Right Column: 3D GATEWAY */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative mt-2 md:mt-0">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: [0.32, 0.72, 0, 1],
              }}
              // Apply 3D perspective to the container and force GPU acceleration
              style={{ perspective: 1200, z: 0 }}
              className="relative w-[90%] sm:w-[75%] md:w-full max-w-[320px] sm:max-w-[340px] lg:max-w-[460px] aspect-[1/1.28] md:aspect-[1/1.4] rounded-t-[250px] overflow-hidden shadow-2xl bg-brand-dark ring-1 ring-brand-charcoal/10 will-change-transform"
            >
              {/* 1. The Inside (Revealed when doors open) */}
              <motion.div
                style={{ scale: zoomInside, z: 0 }}
                className="absolute inset-0 z-0 will-change-transform"
              >
                <Image
                  src="/images/Gate.webp"
                  alt="The Home Darbaar Turkish Chandelier Logo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 text-right">
                  <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-brand-brass/80 block mb-1">
                    Welcome to our
                  </span>
                  <span className="font-serif italic text-xl md:text-2xl text-brand-ivory drop-shadow-lg">
                    Luxury Decor
                  </span>
                </div>
              </motion.div>

              {/* 2. The Left Door */}
              <motion.div
                style={{
                  rotateY: rotateLeftDoor,
                  opacity: doorsOpacity,
                  transformOrigin: "left",
                  z: 0,
                }}
                className="absolute top-0 left-0 w-1/2 h-full bg-[#1c1a18] border-r border-brand-brass/50 z-20 shadow-[10px_0_30px_rgba(0,0,0,0.5)] flex items-center justify-end pr-2 will-change-transform"
              >
                {/* Door Carving Panel */}
                <div className="w-[85%] h-[95%] border border-brand-brass/20 rounded-tl-[120px] rounded-bl-sm opacity-50" />
                {/* Door Handle */}
                <div className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-1 md:w-1.5 h-12 md:h-16 rounded-full bg-brand-brass shadow-lg" />
              </motion.div>

              {/* 3. The Right Door */}
              <motion.div
                style={{
                  rotateY: rotateRightDoor,
                  opacity: doorsOpacity,
                  transformOrigin: "right",
                  z: 0,
                }}
                className="absolute top-0 right-0 w-1/2 h-full bg-[#1c1a18] border-l border-[#2a2725] z-20 shadow-[-10px_0_30px_rgba(0,0,0,0.5)] flex items-center justify-start pl-2 will-change-transform"
              >
                {/* Door Carving Panel */}
                <div className="w-[85%] h-[95%] border border-brand-brass/20 rounded-tr-[120px] rounded-br-sm opacity-50" />
                {/* Door Handle */}
                <div className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 w-1 md:w-1.5 h-12 md:h-16 rounded-full bg-brand-brass shadow-lg" />
              </motion.div>

              {/* Subtle light leak down the middle when doors start to open */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-brand-brass/30 blur-sm z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
