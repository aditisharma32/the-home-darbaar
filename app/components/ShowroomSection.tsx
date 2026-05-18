"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, MapPin, PhoneCall, Mail, ArrowRight } from "lucide-react";

const scrollRevealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] as const }
  }
};

export default function ShowroomSection() {
  const [showroomName, setShowroomName] = useState("");
  const [showroomEmail, setShowroomEmail] = useState("");
  const [showroomMsg, setShowroomMsg] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

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
    <motion.section 
      id="showroom" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={scrollRevealVariants}
      className="py-32 md:py-48 bg-brand-dark text-brand-ivory relative border-t border-brand-brass/20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,168,128,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        {/* Showroom info */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-brand-brass font-bold block mb-3">
              Visit The Boutique
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold leading-tight text-white">
              The Jaipur Showroom
            </h2>
            <p className="text-sm text-white/60 mt-6 leading-relaxed max-w-[42ch]">
              Walk through our physical sanctuary in the Pink City to experience the weight, scale, acoustics, and reflections of our decor pieces.
            </p>
          </div>

          <div className="space-y-6 mt-12 lg:mt-24 border-t border-white/10 pt-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 text-brand-brass flex items-center justify-center shrink-0 border border-white/10">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold block">Physical Address</span>
                <span className="text-sm font-semibold text-white block mt-1">
                  Showrooms 14-16, Heritage Arcade, M.I. Road, Jaipur, Rajasthan, 302001
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 text-brand-brass flex items-center justify-center shrink-0 border border-white/10">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold block">WhatsApp & Showroom Hotline</span>
                <span className="text-sm font-semibold text-white block mt-1">
                  +91 98765 43210 (Curator Hotline)
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 text-brand-brass flex items-center justify-center shrink-0 border border-white/10">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold block">Inquiries Email</span>
                <span className="text-sm font-semibold text-white block mt-1">
                  curate@thehomedarbaar.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Showroom Inquiry Form */}
        <div className="lg:col-span-7 bg-[#141312] p-8 md:p-12 rounded-[2.5rem] border border-brand-brass/20 shadow-2xl relative">
          <div className="absolute inset-2 border border-brand-brass/10 rounded-[2.1rem] pointer-events-none" />
          <h3 className="font-serif text-3xl font-semibold text-white mb-2">Arrange Showroom Viewing</h3>
          <p className="text-xs text-white/50 mb-8">
            Establish contact with our curator to set up a private, guided viewing or request a catalog dispatch.
          </p>

          {formSubmitted ? (
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-12 text-center flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 bg-brand-brass/10 text-brand-brass rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-xl font-semibold text-white">Namaste & Thank You</h4>
              <p className="text-xs text-white/50 max-w-[32ch] leading-relaxed mt-2">
                Your viewing request was compiled. Our Jaipur concierge will establish connection with you shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleShowroomSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-wider text-white/50 font-bold">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={showroomName}
                    onChange={(e) => setShowroomName(e.target.value)}
                    placeholder="e.g. Vikramaditya" 
                    className="w-full bg-[#1A1817] border border-brand-brass/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-brand-brass focus:ring-1 focus:ring-brand-brass transition-all font-sans"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-wider text-white/50 font-bold">Email / Number</label>
                  <input 
                    type="text" 
                    required
                    value={showroomEmail}
                    onChange={(e) => setShowroomEmail(e.target.value)}
                    placeholder="e.g. contact@domain.com" 
                    className="w-full bg-[#1A1817] border border-brand-brass/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-brand-brass focus:ring-1 focus:ring-brand-brass transition-all font-sans"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-wider text-white/50 font-bold">Acquisition Intent / Categories Interested</label>
                <textarea 
                  rows={4}
                  required
                  value={showroomMsg}
                  onChange={(e) => setShowroomMsg(e.target.value)}
                  placeholder="Describe your design space and the products you wish to acquire (e.g. Antique Chandeliers, Moving Clocks...)"
                  className="w-full bg-[#1A1817] border border-brand-brass/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-brand-brass focus:ring-1 focus:ring-brand-brass transition-all font-sans leading-relaxed resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full flex h-14 items-center justify-center gap-3 rounded-full bg-brand-brass hover:bg-brand-ivory text-brand-charcoal font-bold uppercase tracking-widest text-[10px] transition-all transform hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
              >
                <span>Submit Heritage Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </div>
    </motion.section>
  );
}
