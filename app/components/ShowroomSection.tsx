"use client";

import React, { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Sparkles, MapPin, PhoneCall, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ShowroomSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [showroomName, setShowroomName] = useState("");
  const [showroomEmail, setShowroomEmail] = useState("");
  const [showroomMsg, setShowroomMsg] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    // Reveal text and form with a beautiful stagger
    gsap.fromTo(
      ".reveal-item",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      }
    );
  }, { scope: containerRef });

  const handleShowroomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowroomName("");
      setShowroomEmail("");
      setShowroomMsg("");
    }, 4000);
  };

  return (
    <section 
      ref={containerRef}
      id="showroom" 
      className="py-32 md:py-48 bg-[#FAF6F0] text-brand-charcoal relative overflow-hidden"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
        
        {/* Left Column: Showroom Info & Typography */}
        <div className="lg:col-span-5 flex flex-col justify-between pt-4">
          <div>
            <span className="reveal-item flex items-center gap-3 text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-brand-brass font-bold mb-8">
              <Sparkles className="w-3.5 h-3.5" />
              Visit The Boutique
            </span>
            <h2 className="reveal-item font-serif text-[3.5rem] leading-[0.95] md:text-[5rem] font-light tracking-tight text-brand-charcoal">
              The Jaipur
              <br />
              <span className="italic text-brand-charcoal/80 flex items-center gap-4 mt-2">
                Showroom
                <span 
                  className="hidden md:inline-block w-20 h-10 rounded-full bg-cover bg-center border border-brand-charcoal/20 -translate-y-1 opacity-90" 
                  style={{ backgroundImage: `url('/images/hero-door-image.jpg')` }}
                />
              </span>
            </h2>
            <p className="reveal-item text-sm text-brand-charcoal/60 mt-10 leading-relaxed max-w-[42ch] font-sans">
              Walk through our physical sanctuary in the Pink City. Experience the weight, scale, acoustics, and reflections of our curated pieces in absolute silence.
            </p>
          </div>

          <div className="space-y-8 mt-16 lg:mt-24 border-t border-brand-charcoal/10 pt-10">
            <div className="reveal-item flex gap-5 group">
              <div className="w-10 h-10 rounded-full border border-brand-charcoal/20 flex items-center justify-center shrink-0 text-brand-charcoal group-hover:bg-brand-charcoal group-hover:text-brand-ivory transition-colors duration-500">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="pt-1">
                <span className="text-[9px] uppercase tracking-[0.2em] text-brand-charcoal/50 font-bold block mb-1.5">Physical Address</span>
                <span className="text-sm font-medium text-brand-charcoal block leading-snug">
                  Showrooms 14-16, Heritage Arcade,<br />M.I. Road, Jaipur, Rajasthan, 302001
                </span>
              </div>
            </div>

            <div className="reveal-item flex gap-5 group">
              <div className="w-10 h-10 rounded-full border border-brand-charcoal/20 flex items-center justify-center shrink-0 text-brand-charcoal group-hover:bg-brand-charcoal group-hover:text-brand-ivory transition-colors duration-500">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div className="pt-1">
                <span className="text-[9px] uppercase tracking-[0.2em] text-brand-charcoal/50 font-bold block mb-1.5">Curator Hotline</span>
                <span className="text-sm font-medium text-brand-charcoal block">
                  +91 98765 43210
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: High-End Minimalist Form */}
        <div className="lg:col-span-7 reveal-item">
          <div className="bg-white p-10 md:p-16 rounded-[2px] shadow-[0_30px_60px_rgba(0,0,0,0.04)] border border-brand-charcoal/5 relative h-full flex flex-col justify-center">
            
            <h3 className="font-serif text-3xl md:text-4xl font-medium text-brand-charcoal mb-4">Arrange Viewing</h3>
            <p className="text-sm text-brand-charcoal/50 mb-12 max-w-[45ch] leading-relaxed">
              Establish contact with our curator to set up a private, guided viewing or request a specialized catalog dispatch.
            </p>

            {formSubmitted ? (
              <div className="py-20 text-center flex flex-col items-center justify-center animate-in fade-in duration-1000">
                <div className="w-16 h-16 bg-[#FAF6F0] text-brand-brass rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-2xl font-medium text-brand-charcoal">Namaste & Thank You</h4>
                <p className="text-sm text-brand-charcoal/60 max-w-[32ch] leading-relaxed mt-4">
                  Your viewing request was received. Our Jaipur concierge will establish connection with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleShowroomSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <input 
                      type="text" 
                      required
                      value={showroomName}
                      onChange={(e) => setShowroomName(e.target.value)}
                      id="name"
                      className="peer w-full bg-transparent border-b border-brand-charcoal/20 px-0 py-3 text-base text-brand-charcoal placeholder-transparent focus:outline-none focus:border-brand-brass transition-colors rounded-none"
                      placeholder="Name"
                    />
                    <label 
                      htmlFor="name" 
                      className="absolute left-0 -top-4 text-[9px] uppercase tracking-[0.2em] font-bold text-brand-charcoal/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-brand-charcoal/30 peer-placeholder-shown:top-3 peer-placeholder-shown:uppercase-none peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-normal peer-focus:-top-4 peer-focus:text-[9px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:font-bold peer-focus:text-brand-brass cursor-text"
                    >
                      Your Name
                    </label>
                  </div>
                  
                  <div className="relative group">
                    <input 
                      type="text" 
                      required
                      value={showroomEmail}
                      onChange={(e) => setShowroomEmail(e.target.value)}
                      id="contact"
                      className="peer w-full bg-transparent border-b border-brand-charcoal/20 px-0 py-3 text-base text-brand-charcoal placeholder-transparent focus:outline-none focus:border-brand-brass transition-colors rounded-none"
                      placeholder="Contact"
                    />
                    <label 
                      htmlFor="contact" 
                      className="absolute left-0 -top-4 text-[9px] uppercase tracking-[0.2em] font-bold text-brand-charcoal/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-brand-charcoal/30 peer-placeholder-shown:top-3 peer-placeholder-shown:uppercase-none peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-normal peer-focus:-top-4 peer-focus:text-[9px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:font-bold peer-focus:text-brand-brass cursor-text"
                    >
                      Email / Number
                    </label>
                  </div>
                </div>

                <div className="relative group">
                  <textarea 
                    required
                    value={showroomMsg}
                    onChange={(e) => setShowroomMsg(e.target.value)}
                    id="intent"
                    rows={1}
                    className="peer w-full bg-transparent border-b border-brand-charcoal/20 px-0 py-3 text-base text-brand-charcoal placeholder-transparent focus:outline-none focus:border-brand-brass transition-colors rounded-none resize-none overflow-hidden min-h-[40px]"
                    placeholder="Intent"
                    onInput={(e) => {
                      const target = e.target as HTMLTextAreaElement;
                      target.style.height = 'auto';
                      target.style.height = target.scrollHeight + 'px';
                    }}
                  />
                  <label 
                    htmlFor="intent" 
                    className="absolute left-0 -top-4 text-[9px] uppercase tracking-[0.2em] font-bold text-brand-charcoal/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-brand-charcoal/30 peer-placeholder-shown:top-3 peer-placeholder-shown:uppercase-none peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-normal peer-focus:-top-4 peer-focus:text-[9px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:font-bold peer-focus:text-brand-brass cursor-text"
                  >
                    Acquisition Intent
                  </label>
                </div>

                <div className="pt-6">
                  <button 
                    type="submit"
                    className="group w-full md:w-auto flex h-14 items-center justify-center gap-4 px-10 rounded-full bg-brand-charcoal text-brand-ivory font-bold uppercase tracking-[0.2em] text-[9px] transition-all duration-500 hover:bg-brand-brass hover:text-brand-charcoal"
                  >
                    <span>Submit Request</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
