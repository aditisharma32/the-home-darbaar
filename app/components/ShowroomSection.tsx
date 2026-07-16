"use client";

import React, { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MapPin, PhoneCall, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ShowroomSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [showroomName, setShowroomName] = useState("");
  const [showroomEmail, setShowroomEmail] = useState("");
  const [showroomMsg, setShowroomMsg] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; contact?: string; intent?: string }>({});

  const validateForm = () => {
    const newErrors: typeof errors = {};
    if (!showroomName.trim()) newErrors.name = "Please enter your name";
    if (!showroomEmail.trim()) {
      newErrors.contact = "Please enter your email or phone number";
    } else if (!showroomEmail.includes("@") && !/^\+?\d[\d\s-]{7,}$/.test(showroomEmail)) {
      newErrors.contact = "Please enter a valid email or phone number";
    }
    if (!showroomMsg.trim()) newErrors.intent = "Please describe your interest";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useGSAP(() => {
    if (!containerRef.current) return;
    
    // Reveal text and form with a beautiful stagger
    gsap.fromTo(
      ".reveal-item",
      { opacity: 0, y: 30 },
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
    if (!validateForm()) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowroomName("");
      setShowroomEmail("");
      setShowroomMsg("");
      setErrors({});
    }, 4000);
  };

  return (
    <section 
      ref={containerRef}
      id="showroom" 
      className="py-32 md:py-48 bg-[#FAF6F0] text-brand-charcoal relative overflow-hidden"
    >
      {/* Decorative subtle background aura */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-brand-brass/5 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
        
        {/* Left Column: Showroom Info & Typography */}
        <div className="lg:col-span-5 flex flex-col justify-between pt-4">
          <div>
            <span className="reveal-item flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-brand-brass font-bold mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-brass animate-pulse" />
              Visit The Showroom
            </span>
            <h2 className="reveal-item font-sans text-[3.5rem] leading-[0.95] md:text-[5rem] font-light tracking-tight text-brand-charcoal">
              The Jaipur
              <br />
              <span className="italic text-brand-charcoal/80 block mt-2">
                Showroom
              </span>
            </h2>
            <p className="reveal-item text-[15px] text-brand-charcoal/60 mt-10 leading-relaxed max-w-[42ch] font-sans font-light">
              Walk through our physical sanctuary in the Pink City. Experience the weight, scale, acoustics, and reflections of our curated pieces in absolute silence.
            </p>
          </div>

          <div className="space-y-10 mt-16 lg:mt-24 border-t border-brand-charcoal/10 pt-12">
            <div className="reveal-item flex gap-6 group">
              <MapPin className="w-5 h-5 text-brand-brass shrink-0 mt-1" />
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-brand-charcoal/40 font-bold block mb-1.5">Physical Address</span>
                <span className="text-sm font-medium text-brand-charcoal block leading-relaxed">
                  175, Karolan Ka Barh, Gyan Vihar Marg,<br />Jagatpura, Jaipur, Rajasthan, 302017
                </span>
                <span className="text-xs text-brand-charcoal/40 mt-1.5 block">Near Suresh Gyan Vihar University</span>
              </div>
            </div>

            <div className="reveal-item flex gap-6 group">
              <PhoneCall className="w-5 h-5 text-brand-brass shrink-0 mt-1" />
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-brand-charcoal/40 font-bold block mb-1.5">Contact & Timings</span>
                <span className="text-sm font-medium text-brand-charcoal block hover:text-brand-brass transition-colors duration-300">
                  <a href="tel:+917740944515">+91 77409 44515</a>
                </span>
                <span className="text-xs text-brand-charcoal/40 mt-1.5 block">Open 10 AM — 10 PM, all days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: High-End Glassmorphic Form */}
        <div className="lg:col-span-7 reveal-item">
          <div className="bg-white/40 backdrop-blur-md p-10 md:p-16 rounded-3xl shadow-[0_25px_50px_rgba(20,19,18,0.03)] border border-brand-charcoal/10 relative h-full flex flex-col justify-center">
            
            <h3 className="font-sans text-3xl md:text-4xl font-light text-brand-charcoal mb-4">Arrange a Viewing</h3>
            <p className="text-sm text-brand-charcoal/50 mb-12 max-w-[45ch] leading-relaxed">
              Contact our showroom team to set up a private, guided viewing or request a specialized catalog.
            </p>

            {formSubmitted ? (
              <div className="py-20 text-center flex flex-col items-center justify-center animate-in fade-in duration-1000">
                <div className="w-16 h-16 bg-brand-brass/10 text-brand-brass rounded-full flex items-center justify-center mb-6 border border-brand-brass/20">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                </div>
                <h4 className="font-sans text-2xl font-light text-brand-charcoal">Thank You</h4>
                <p className="text-sm text-brand-charcoal/60 max-w-[32ch] leading-relaxed mt-4">
                  Thank you for reaching out. A design consultant will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleShowroomSubmit} className="space-y-12" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative group">
                    <input 
                      type="text" 
                      value={showroomName}
                      onChange={(e) => { setShowroomName(e.target.value); if (errors.name) setErrors(prev => ({ ...prev, name: undefined })); }}
                      id="name"
                      className={`peer w-full bg-transparent border-b ${errors.name ? 'border-brand-clay' : 'border-brand-charcoal/20'} px-0 py-3 text-base text-brand-charcoal placeholder-transparent focus:outline-none transition-colors rounded-none`}
                      placeholder="Name"
                    />
                    {/* Focus expansion line */}
                    <span className={`absolute bottom-0 left-1/2 w-0 h-[1.5px] ${errors.name ? 'bg-brand-clay' : 'bg-brand-brass'} transition-all duration-300 group-focus-within:w-full group-focus-within:left-0`} />
                    
                    <label 
                      htmlFor="name" 
                      className="absolute left-0 -top-4 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-charcoal/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-brand-charcoal/30 peer-placeholder-shown:top-3 peer-placeholder-shown:uppercase-none peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-normal peer-focus:-top-4 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:font-bold peer-focus:text-brand-brass cursor-text"
                    >
                      Your Name
                    </label>
                    {errors.name && <span className="text-brand-clay text-xs mt-2 block">{errors.name}</span>}
                  </div>
                  
                  <div className="relative group">
                    <input 
                      type="text" 
                      value={showroomEmail}
                      onChange={(e) => { setShowroomEmail(e.target.value); if (errors.contact) setErrors(prev => ({ ...prev, contact: undefined })); }}
                      id="contact"
                      className={`peer w-full bg-transparent border-b ${errors.contact ? 'border-brand-clay' : 'border-brand-charcoal/20'} px-0 py-3 text-base text-brand-charcoal placeholder-transparent focus:outline-none transition-colors rounded-none`}
                      placeholder="Contact"
                    />
                    {/* Focus expansion line */}
                    <span className={`absolute bottom-0 left-1/2 w-0 h-[1.5px] ${errors.contact ? 'bg-brand-clay' : 'bg-brand-brass'} transition-all duration-300 group-focus-within:w-full group-focus-within:left-0`} />
                    
                    <label 
                      htmlFor="contact" 
                      className="absolute left-0 -top-4 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-charcoal/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-brand-charcoal/30 peer-placeholder-shown:top-3 peer-placeholder-shown:uppercase-none peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-normal peer-focus:-top-4 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:font-bold peer-focus:text-brand-brass cursor-text"
                    >
                      Email or Phone
                    </label>
                    {errors.contact && <span className="text-brand-clay text-xs mt-2 block">{errors.contact}</span>}
                  </div>
                </div>

                <div className="relative group">
                  <textarea 
                    value={showroomMsg}
                    onChange={(e) => { setShowroomMsg(e.target.value); if (errors.intent) setErrors(prev => ({ ...prev, intent: undefined })); }}
                    id="intent"
                    rows={1}
                    className={`peer w-full bg-transparent border-b ${errors.intent ? 'border-brand-clay' : 'border-brand-charcoal/20'} px-0 py-3 text-base text-brand-charcoal placeholder-transparent focus:outline-none transition-colors rounded-none resize-none overflow-hidden min-h-[40px]`}
                    placeholder="Intent"
                    onInput={(e) => {
                      const target = e.target as HTMLTextAreaElement;
                      target.style.height = 'auto';
                      target.style.height = target.scrollHeight + 'px';
                    }}
                  />
                  {/* Focus expansion line */}
                  <span className={`absolute bottom-0 left-1/2 w-0 h-[1.5px] ${errors.intent ? 'bg-brand-clay' : 'bg-brand-brass'} transition-all duration-300 group-focus-within:w-full group-focus-within:left-0`} />
                  
                  <label 
                    htmlFor="intent" 
                    className="absolute left-0 -top-4 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-charcoal/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-brand-charcoal/30 peer-placeholder-shown:top-3 peer-placeholder-shown:uppercase-none peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-normal peer-focus:-top-4 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:font-bold peer-focus:text-brand-brass cursor-text"
                  >
                    Your Message
                  </label>
                  {errors.intent && <span className="text-brand-clay text-xs mt-2 block">{errors.intent}</span>}
                </div>

                <div className="pt-6">
                  <button 
                    type="submit"
                    className="group w-full md:w-auto flex h-14 items-center justify-center gap-4 px-10 rounded-full bg-brand-charcoal text-brand-ivory font-bold uppercase tracking-[0.2em] text-[11px] transition-all duration-500 hover:bg-brand-brass hover:text-brand-charcoal active:scale-[0.98] cursor-pointer shadow-md"
                  >
                    <span>SUBMIT REQUEST</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
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
