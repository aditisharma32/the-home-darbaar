"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

export default function NavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.1 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-5xl luxury-glass rounded-full px-6 py-4 flex items-center justify-between shadow-lg"
      >
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-brand-charcoal flex items-center justify-center border border-brand-brass/40 group-hover:rotate-45 transition-transform duration-500">
            <span className="font-serif text-[13px] font-bold text-brand-brass">D</span>
          </div>
          <span className="font-serif text-md md:text-lg font-bold tracking-widest text-brand-charcoal">
            THE HOME DARBAAR
          </span>
        </a>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest">
          <a href="#story" className="text-brand-charcoal/70 hover:text-brand-charcoal transition-colors">Story</a>
          <a href="#collections" className="text-brand-charcoal/70 hover:text-brand-charcoal transition-colors">Collections</a>
          <a href="#spotlight" className="text-brand-charcoal/70 hover:text-brand-charcoal transition-colors">Spotlight</a>
          <a href="#showroom" className="text-brand-charcoal/70 hover:text-brand-charcoal transition-colors">Showroom</a>
        </div>

        {/* CTA Button & Mobile Trigger Wrapper */}
        <div className="flex items-center gap-4">
          <a 
            href="#spotlight" 
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-charcoal hover:bg-brand-dark text-brand-ivory text-[10px] font-bold uppercase tracking-widest transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Catalog Explorer</span>
            <ArrowRight className="w-3 h-3 text-brand-brass" />
          </a>

          {/* Mobile Hamburger Trigger */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-brand-charcoal/5 transition-colors text-brand-charcoal"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE FULL-SCREEN MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-brand-ivory/95 backdrop-blur-xl flex flex-col justify-center px-12 md:hidden"
          >
            <div className="flex flex-col gap-8 text-2xl font-serif font-bold tracking-wide text-brand-charcoal">
              <motion.a 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                href="#story" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-brand-brass transition-colors"
              >
                Our Heritage Story
              </motion.a>
              <motion.a 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                href="#collections" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-brand-brass transition-colors"
              >
                The Curated Collections
              </motion.a>
              <motion.a 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                href="#spotlight" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-brand-brass transition-colors"
              >
                Boutique Catalog
              </motion.a>
              <motion.a 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                href="#showroom" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-brand-brass transition-colors"
              >
                Jaipur Showroom
              </motion.a>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 pt-8 border-t border-brand-brass/20 text-xs tracking-widest uppercase text-brand-charcoal/50"
            >
              The Home Darbaar • Jaipur, Rajasthan
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
