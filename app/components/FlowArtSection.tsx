'use client';

import React from 'react';
import FlowArt, { FlowSection } from './ui/story-scroll';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface CollectionItem {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  bg: string;
  text: string;
  accent: string;
  divider: string;
  price: string;
  origin: string;
  category: string;
}

const collections: CollectionItem[] = [
  {
    id: "01",
    title: "Chandelier Jhoomars",
    subtitle: "Antique Finish & Turkish Mosaic",
    desc: "Solid brass body with elegant Turkish-style design crafted in colorful mosaic glass. Emits a warm, welcoming light.",
    img: "/images/story-chandelier.webp",
    bg: "#141312",
    text: "#FAF6F0",
    accent: "#c5a880",
    divider: "border-white/10",
    price: "₹10,000 / Piece",
    origin: "Jaipur Brass Smiths",
    category: "Lighting"
  },
  {
    id: "02",
    title: "Gear Wall Watches",
    subtitle: "27-inch Kinetic Precision",
    desc: "Premium black and gold design with fully active, exposed moving gears. Perfectly styled for main living halls, executive offices, and lobbies.",
    img: "/images/story-clock.webp",
    bg: "#FAF6F0",
    text: "#141312",
    accent: "#a75d5d",
    divider: "border-brand-charcoal/10",
    price: "₹5,000 / Piece",
    origin: "Precision Horology Guild",
    category: "Timepieces"
  },
  {
    id: "03",
    title: "Sacred Idols",
    subtitle: "Premium Poly-Resin",
    desc: "10-inch Ganesh statues with polished white and gold finish. Weather-resistant and handcrafted. Ideal for Diwali, housewarmings, and corporate gifting.",
    img: "/images/ganesha-statue-luxury.webp",
    bg: "#a75d5d",
    text: "#FAF6F0",
    accent: "#FAF6F0",
    divider: "border-white/20",
    price: "₹2,000 / Piece",
    origin: "Jaipur Sacred Sculptors",
    category: "Sacred"
  },
  {
    id: "04",
    title: "Water Fountains",
    subtitle: "Cascading Flow",
    desc: "High-durability fiber-reinforced polymer/resin fountains featuring peaceful cascading water flow, tabletop design, and soft LED lighting.",
    img: "/images/buddha-water-fountain.webp",
    bg: "#354133",
    text: "#FAF6F0",
    accent: "#c5a880",
    divider: "border-white/20",
    price: "Get Latest Price",
    origin: "Jaipur Stone Guild",
    category: "Fountains"
  },
  {
    id: "05",
    title: "Bespoke Lighting",
    subtitle: "Custom Hanging Lamps",
    desc: "Custom metal alloys and multi-finish options. Accent lighting solutions for modern and traditional homes.",
    img: "/images/story-decor.webp",
    bg: "#c5a880",
    text: "#141312",
    accent: "#141312",
    divider: "border-brand-charcoal/20",
    price: "Get Latest Price",
    origin: "Jaipur Lamp Artisans",
    category: "Lighting"
  }
];

interface FlowArtSectionProps {
  onInquire?: (product: {
    id: string;
    name: string;
    category: string;
    price: string;
    description: string;
    origin: string;
    visualPattern: string;
    image?: string;
  }) => void;
}

export default function FlowArtSection({ onInquire }: FlowArtSectionProps) {
  const handleInquire = (item: CollectionItem) => {
    if (onInquire) {
      onInquire({
        id: item.id,
        name: item.title,
        category: item.category,
        price: item.price,
        description: item.desc,
        origin: item.origin,
        visualPattern: "",
        image: item.img,
      });
    }
  };

  return (
    <FlowArt id="collections" aria-label="The Home Darbaar Curated Edit">
      {collections.map((item, index) => {
        const isEven = index % 2 === 0;
        const isDark = item.bg !== '#FAF6F0';

        return (
          <FlowSection
            key={item.id}
            aria-label={item.title}
            style={{ backgroundColor: item.bg, color: item.text }}
            className="font-sans"
          >
            {/* Header row */}
            <div className="flex items-center justify-between">
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em]" style={{ color: item.accent }}>
                {item.id} — The Collection
              </p>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-40">
                {item.subtitle}
              </span>
            </div>
            
            <hr className={`my-3 md:my-[1.5vw] border-none border-t ${item.divider}`} />

            {/* Asymmetrical content body */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center my-8 md:my-auto">
              {/* IMAGE (Double-Bezel concentric design) */}
              <div className={`md:col-span-5 w-full ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                <div 
                  className={`w-full max-w-[300px] xs:max-w-[340px] md:max-w-[420px] mx-auto rounded-[2rem] ${
                    isDark 
                      ? 'bg-white/[0.04] border border-white/[0.07] p-2.5' 
                      : 'bg-black/[0.03] border border-black/[0.06] p-2.5'
                  }`}
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[calc(2rem-0.625rem)] shadow-lg">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* TEXT */}
              <div className={`md:col-span-7 w-full flex flex-col justify-center ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                <span 
                  className="inline-block px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.2em] font-bold border border-current/20 w-fit mb-6"
                >
                  {item.subtitle}
                </span>

                <h2 className="font-serif font-light text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[1.05] tracking-tight uppercase mb-4">
                  {item.title}
                </h2>

                {/* Price display */}
                <div className="mb-6">
                  <span 
                    className="text-sm md:text-base font-semibold"
                    style={{ color: item.accent }}
                  >
                    {item.price}
                  </span>
                </div>

                <p className="text-sm md:text-base leading-relaxed opacity-75 max-w-[45ch] font-sans font-light">
                  {item.desc}
                </p>

                {/* CTA Buttons */}
                <div className="pt-8 flex flex-wrap items-center gap-4">
                  {/* Inquire via WhatsApp button */}
                  <button
                    onClick={() => handleInquire(item)}
                    className={`group inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg w-fit cursor-pointer ${
                      isDark 
                        ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20' 
                        : 'bg-brand-charcoal text-brand-ivory hover:bg-brand-dark'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{item.price === "Get Latest Price" ? "Get Price on WhatsApp" : "Inquire on WhatsApp"}</span>
                  </button>

                  {/* Browse link */}
                  <a 
                    href="#spotlight" 
                    className="group inline-flex items-center gap-3 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold transition-all w-fit opacity-60 hover:opacity-100"
                  >
                    View Gallery
                    <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center transition-transform group-hover:translate-x-1 duration-300">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <hr className={`hidden md:block my-[1.5vw] border-none border-t ${item.divider}`} />

            {/* Footer row */}
            <div className="hidden md:flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[9px] tracking-widest uppercase opacity-40">
              <p>The Home Darbaar — Jagatpura, Jaipur</p>
              <p>Luxury Artisanal Curation</p>
            </div>
          </FlowSection>
        );
      })}
    </FlowArt>
  );
}
