import React from "react";
import { Mail, PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b0a09] text-brand-ivory pt-32 pb-8 relative overflow-hidden font-sans border-t border-brand-ivory/5">
      
      {/* Giant Background Text watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] md:-translate-y-[45%] pointer-events-none w-full flex justify-center overflow-hidden z-0">
        <span className="font-sans text-[25vw] md:text-[22vw] font-bold tracking-tighter text-white/[0.03] whitespace-nowrap leading-none select-none">
          DARBAAR
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24 md:mb-32">
          
          {/* Left side: Brand Identity */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <h2 className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-brand-ivory leading-none">
              THE HOME <br/> DARBAAR
            </h2>
            <p className="text-sm md:text-base text-brand-ivory/60 leading-relaxed max-w-[38ch] mt-8">
              Jaipur’s definitive assembly of heritage clocks, raw brass chandeliers, and acoustic slate decor. Curated for spaces that demand profound materiality.
            </p>
          </div>

          {/* Right side: Menus */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-12 lg:gap-8 pt-4 md:pt-6">
            
            {/* Col 1 */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-brass" />
                <h4 className="font-semibold text-brand-ivory text-sm uppercase tracking-widest">Explore</h4>
              </div>
              <div className="flex flex-col gap-4 text-sm text-brand-ivory/50">
                <a href="#story" className="hover:text-brand-ivory transition-colors">Our Heritage Guild</a>
                <a href="#collections" className="hover:text-brand-ivory transition-colors">Visual Anthology</a>
                <a href="#spotlight" className="hover:text-brand-ivory transition-colors">Boutique Catalog</a>
                <a href="#showroom" className="hover:text-brand-ivory transition-colors">Jaipur Showroom</a>
              </div>
            </div>

            {/* Col 2 */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-brass" />
                <h4 className="font-semibold text-brand-ivory text-sm uppercase tracking-widest">Connect</h4>
              </div>
              <div className="flex flex-col gap-4 text-sm text-brand-ivory/50">
                <a href="mailto:curate@thehomedarbaar.com" className="hover:text-brand-ivory flex items-center gap-3 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>curate@thehomedarbaar.com</span>
                </a>
                <div className="flex items-center gap-3">
                  <PhoneCall className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </div>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-brand-ivory flex items-center gap-3 transition-colors mt-1">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  <span>@thehomedarbaar</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-ivory/10 pt-8 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[10px] uppercase tracking-widest font-sans">
          <div className="text-brand-ivory/40">
            © 2026 The Home Darbaar • All Rights Reserved
          </div>
          <div className="text-brand-ivory/40">
            Crafted in the Pink City with Authentic Heritage Integrity
          </div>
        </div>
      </div>
    </footer>
  );
}
