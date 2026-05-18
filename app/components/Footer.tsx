import React from "react";
import { Mail, PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b0a09] text-brand-ivory pt-24 pb-12 border-t border-brand-brass/25 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,168,128,0.1)_0%,transparent_50%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-16 border-b border-white/10 pb-16">
        
        <div className="md:col-span-5 flex flex-col items-start text-left">
          <h3 className="font-serif text-3xl font-bold tracking-widest text-brand-brass mb-6">THE HOME DARBAAR</h3>
          <p className="text-sm text-white/50 leading-relaxed max-w-sm">
            Jaipur’s definitive assembly of heritage clocks, raw brass chandeliers, and acoustic slate decor. Curated for spaces that demand profound materiality.
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-[10px] uppercase tracking-widest text-brand-brass font-bold mb-6">Explore</h4>
          <div className="flex flex-col gap-4 text-sm text-white/60">
            <a href="#story" className="hover:text-brand-brass transition-colors">Our Heritage Guild</a>
            <a href="#collections" className="hover:text-brand-brass transition-colors">Visual Anthology</a>
            <a href="#spotlight" className="hover:text-brand-brass transition-colors">Boutique Catalog</a>
            <a href="#showroom" className="hover:text-brand-brass transition-colors">Jaipur Showroom</a>
          </div>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-[10px] uppercase tracking-widest text-brand-brass font-bold mb-6">Connect</h4>
          <div className="flex flex-col gap-4 text-sm text-white/60">
            <a href="mailto:curate@thehomedarbaar.com" className="hover:text-brand-brass flex items-center gap-3 transition-colors">
              <Mail className="w-4 h-4" />
              <span>curate@thehomedarbaar.com</span>
            </a>
            <div className="flex items-center gap-3">
              <PhoneCall className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-brand-brass flex items-center gap-3 transition-colors mt-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <span>@thehomedarbaar</span>
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/30 uppercase tracking-widest mt-8 font-sans">
        <span>© 2026 The Home Darbaar • All Rights Reserved</span>
        <span>Crafted in the Pink City with Authentic Heritage Integrity</span>
      </div>
    </footer>
  );
}
