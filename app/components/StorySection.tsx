"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { value: "10 AM - 10 PM", label: "Operating Hours", isStatic: true },
  { value: 365, suffix: "", label: "Days Open" },
  { value: 2025, suffix: "", label: "Established" },
];

export default function StorySection() {
  const containerRef = useRef<HTMLElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // ── 1. Simple Fade-In on the full-bleed image ──
      gsap.fromTo(
        ".story-hero-img",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 65%",
          },
        },
      );

      // ── 3. Masked line-by-line title reveal ──
      gsap.fromTo(
        ".story-title-line",
        { y: "110%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 1.2,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".story-text-container",
            start: "top 80%",
          },
        },
      );

      // ── 4. Soft fade-up for body text & founder ──
      gsap.fromTo(
        ".story-fade-elem",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".story-text-container",
            start: "top 70%",
          },
        },
      );

      // ── 5. Animated counters ──
      counterRefs.current.forEach((el, i) => {
        if (!el || stats[i].isStatic) return;
        const target = stats[i].value as number;

        gsap.fromTo(
          el,
          { innerText: "0" },
          {
            innerText: target,
            duration: 2.2,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: ".story-stats",
              start: "top 85%",
            },
          },
        );
      });

      // ── 6. Stats row stagger ──
      gsap.fromTo(
        ".story-stat-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".story-stats",
            start: "top 85%",
          },
        },
      );



      // ── 9. Decorative line draw ──
      gsap.fromTo(
        ".story-line-draw",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".story-text-container",
            start: "top 75%",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="story"
      className="relative w-full overflow-hidden"
    >
      {/* ─── MAIN SPLIT LAYOUT ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh] lg:min-h-screen">
        {/* ── LEFT: Text Content ── */}
        <div className="relative bg-[#FAF6F0] flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-24 py-24 md:py-32 lg:py-20 z-10">
          <div className="story-text-container max-w-[540px]">
            {/* Eyebrow */}
            <div className="story-fade-elem flex items-center gap-4 mb-10">
              <div className="story-line-draw h-[1px] w-16 bg-brand-brass/60 origin-left" />
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-brand-brass font-bold">
                Our Story
              </span>
              <div className="story-line-draw h-[1px] w-8 bg-brand-brass/30 origin-left" />
            </div>

            {/* Title with masked reveal */}
            <h2 className="font-sans font-light text-[2.5rem] md:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.08] tracking-tight mb-10 text-brand-charcoal">
              <span className="block overflow-hidden pb-2">
                <span className="story-title-line block">
                  Bridging heritage
                </span>
              </span>
              <span className="block overflow-hidden pb-2">
                <span className="story-title-line block">
                  craft with the{" "}
                  <span className="text-brand-brass font-normal italic">
                    modern
                  </span>
                </span>
              </span>
              <span className="block overflow-hidden pb-2">
                <span className="story-title-line block">sanctuary.</span>
              </span>
            </h2>

            {/* Body text */}
            <div className="story-fade-elem space-y-5 text-brand-charcoal/65 font-sans font-light text-[15px] md:text-base leading-[1.75] max-w-[50ch]">
              <p>
                The Home Darbaar is a premier boutique sourcing exquisite home
                decor, luxury lighting, and traditional handicraft innovations.
              </p>
              <p>
                We believe that every piece should tell a story. Whether for a
                retail client or B2B wholesale, we deliver unmatched quality and
                timeless elegance directly to your door, across India.
              </p>
            </div>

            {/* Founder quote + info */}
            <div className="story-fade-elem mt-10 pt-10 border-t border-brand-charcoal/8">
              <p className="font-sans italic text-brand-charcoal/90 text-lg md:text-xl leading-relaxed mb-6 font-light">
                &ldquo;We bring character, warmth, and timeless design to every
                space.&rdquo;
              </p>
              <div className="flex items-center gap-4 group cursor-default">
                <div className="overflow-hidden rounded-full w-12 h-12 border border-brand-charcoal/8 shadow-sm">
                  <img
                    src="/images/chiranshu-founder.png"
                    alt="Chiranshu Khandelwal"
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />
                </div>
                <div>
                  <p className="text-[11px] font-sans tracking-[0.15em] uppercase text-brand-charcoal font-semibold">
                    Chiranshu Khandelwal
                  </p>
                  <p className="text-[10px] font-sans tracking-widest text-brand-charcoal/45 uppercase mt-0.5">
                    Founder & Curator
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Full-Bleed Cinematic Image ── */}
        <div className="relative bg-brand-charcoal min-h-[50vh] lg:min-h-full">
          {/* Main image with horizontal wipe */}
          <div className="story-hero-img absolute inset-0 overflow-hidden">
            <img
              src="/images/photo5.webp"
              alt="Jaipur Heritage Decor"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Warm cinematic overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#141312]/40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/60 via-transparent to-[#141312]/20 pointer-events-none" />
          </div>


        </div>
      </div>

      {/* ─── STATS BAR ─── */}
      <div className="story-stats relative w-full bg-[#141312] border-t border-white/[0.06]">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-3 divide-x divide-white/[0.08]">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="story-stat-item flex flex-col items-center justify-center py-10 md:py-14 text-center"
              >
                <div className="flex items-baseline gap-0.5">
                  <span
                    ref={(el) => {
                      if (!stat.isStatic) {
                        counterRefs.current[i] = el;
                      }
                    }}
                    className="text-2xl md:text-4xl lg:text-5xl font-sans font-light text-white tracking-tight tabular-nums"
                  >
                    {stat.isStatic ? stat.value : "0"}
                  </span>
                  {stat.suffix && (
                    <span className="text-xl md:text-3xl font-light text-brand-brass">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-white/40 font-bold mt-3 md:mt-4">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
