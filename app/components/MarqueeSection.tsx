import React from "react";

export default function MarqueeSection() {
  return (
    <div className="w-full bg-brand-charcoal text-brand-brass py-6 overflow-hidden border-y border-brand-brass/25 relative z-10">
      <div className="flex whitespace-nowrap gap-8 animate-marquee">
        <span className="font-serif text-sm uppercase tracking-[0.25em] font-bold">Jaipur Craftsmanship • Antique Brass Chandeliers • Mechanical Gear Clocks • Acoustic Fountains • Sacred Idolatry • Traditional Repoussé Metalwork •</span>
        <span className="font-serif text-sm uppercase tracking-[0.25em] font-bold">Jaipur Craftsmanship • Antique Brass Chandeliers • Mechanical Gear Clocks • Acoustic Fountains • Sacred Idolatry • Traditional Repoussé Metalwork •</span>
      </div>
    </div>
  );
}
