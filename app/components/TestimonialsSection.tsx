"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Star } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    name: "Vayun Bandi",
    location: "Jaipur",
    rating: 5,
    text: "I bought this beautiful reindeer décor set from Chiranshu's home décor shop and absolutely loved it. The detailing, gold finish, and crystal spheres make it look truly premium. Chiranshu was very helpful and guided me perfectly. Highly recommended for unique and elegant home décor pieces!",
    product: "Reindeer Décor Set",
  },
  {
    name: "Sumitray Mundra",
    location: "Jaipur",
    rating: 5,
    text: "Great products!",
    product: "Home Decor",
  },
  {
    name: "Tanvika Gupta",
    location: "Jaipur",
    rating: 5,
    text: "Purchased a beautiful clock for my home from here. Beautiful collection of home decor items. The designs are unique and the quality is really good. The store has a great variety and the staff was very helpful. Loved the overall experience — will make sure to visit again!",
    product: "Wall Clock",
  },
];

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.fromTo(
        ".testimonial-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-32 bg-[#FAF6F0] relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-brand-brass/5 blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-16 relative z-10">
        {/* Section Header */}
        <div className="testimonial-reveal text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.25em] text-brand-brass font-bold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-brass" />
            <span>Trusted by Jaipur</span>
            <div className="w-8 md:w-12 h-[1px] bg-brand-brass/40" />
          </div>
          <h2 className="font-sans text-3xl md:text-5xl font-light tracking-tight text-brand-charcoal">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-reveal bg-white/50 backdrop-blur-sm border border-brand-charcoal/8 rounded-3xl p-6 md:p-10 relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.04)] hover:-translate-y-1 group"
            >
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-brand-brass/5 rounded-bl-full pointer-events-none" />

              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star
                    key={s}
                    className="w-4 h-4 text-brand-brass fill-brand-brass"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-sans text-base md:text-lg text-brand-charcoal/80 leading-relaxed italic mb-8">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Customer Info */}
              <div className="border-t border-brand-charcoal/8 pt-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-brand-charcoal">
                    {t.name}
                  </p>
                  <p className="text-xs text-brand-charcoal/50 mt-0.5">
                    {t.location}
                  </p>
                </div>
                <span className="text-[9px] uppercase tracking-[0.2em] text-brand-brass font-bold bg-brand-brass/10 px-3 py-1.5 rounded-full">
                  {t.product}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="testimonial-reveal flex items-center justify-center gap-4 mt-10 md:mt-16">
          <div className="w-16 h-[1px] bg-brand-brass/30" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-brand-charcoal/40 font-bold">
            Verified Google Reviews
          </span>
          <div className="w-16 h-[1px] bg-brand-brass/30" />
        </div>
      </div>
    </section>
  );
}
