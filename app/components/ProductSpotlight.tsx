"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Compass, Sun, Droplets, Clock, Landmark, ArrowUpRight } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  origin: string;
  visualPattern: string;
  image: string;
}

const CATEGORIES = ["All", "Lighting", "Timepieces", "Fountains", "Sacred", "Crafts"];

const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Imperial Royal Brass Chandelier",
    category: "Lighting",
    price: "Grandeur Tier",
    description: "A traditional hand-cast 12-arm brass chandelier, featuring fine Mughal engraving, intricate floral scrollwork, and raw gold polishing.",
    origin: "Jaipur Brass Smiths",
    visualPattern: "bg-radial from-[#DFBA7F]/20 via-brand-dark/95 to-brand-dark",
    image: "https://picsum.photos/seed/imperial-chandelier/600/750"
  },
  {
    id: "p2",
    name: "Ottoman Mosaic Jhoomar",
    category: "Lighting",
    price: "Heritage Tier",
    description: "Vibrant glass mosaic globes suspended on a hand-beaten bronze chain, creating majestic warm light refraction patterns reminiscent of classic Jaipur havelis.",
    origin: "Turkish Assembly Guild",
    visualPattern: "bg-gradient-to-tr from-[#C5A880]/30 via-red-950/20 to-brand-dark",
    image: "https://picsum.photos/seed/ottoman-mosaic/600/750"
  },
  {
    id: "p3",
    name: "Chronos Moving Gear Wall Clock",
    category: "Timepieces",
    price: "Signature Tier",
    description: "Fully functional open-face moving gear clock made of antique copper and oxidized iron, showing real mechanical synergy and high-precision quartz movement.",
    origin: "Precision Horology Guild",
    visualPattern: "bg-radial from-stone-800 via-stone-900 to-brand-dark",
    image: "https://picsum.photos/seed/gear-wall-clock/600/750"
  },
  {
    id: "p4",
    name: "Tranquility Cascade Slate Fountain",
    category: "Fountains",
    price: "Signature Tier",
    description: "Tiered slate rock water cascade designed for pristine indoor acoustics and ambient LED warm-glow backlighting. Highly balancing for spaces.",
    origin: "Jaipur Stone Guild",
    visualPattern: "bg-gradient-to-b from-[#A75D5D]/20 via-brand-dark to-brand-dark",
    image: "https://picsum.photos/seed/cascade-fountain/600/750"
  },
  {
    id: "p5",
    name: "Mughal Raj Ganesha Statue",
    category: "Sacred",
    price: "Spiritual Tier",
    description: "Intricately cast high-density marble resin Lord Ganesha seated on a royal peacock throne, detailed in authentic 24k gold leaf application.",
    origin: "Jaipur Sacred Sculptors",
    visualPattern: "bg-radial from-[#DFBA7F]/30 via-emerald-950/20 to-brand-dark",
    image: "https://picsum.photos/seed/ganesha-gold/600/750"
  },
  {
    id: "p6",
    name: "Imperial Panchajanya Brass Shankh",
    category: "Sacred",
    price: "Spiritual Tier",
    description: "Heavy brass-embellished blowing Vishnu Shankh detailed with intricate Matsya-avatara carvings, resting on a velvet cushioned wood stand.",
    origin: "City Palace Metal Guild",
    visualPattern: "bg-gradient-to-r from-stone-850 via-[#C5A880]/15 to-brand-dark",
    image: "https://picsum.photos/seed/brass-shankh/600/750"
  },
  {
    id: "p7",
    name: "Royal Jaipur Elephant Ambabari",
    category: "Crafts",
    price: "Artisanal Tier",
    description: "Handcrafted Ambabari elephant sculpture wrapped in fine repoussé sheet metal and enamel paint, symbolizing prosperity and royal heritage.",
    origin: "Johri Bazar Craft House",
    visualPattern: "bg-gradient-to-tr from-[#A75D5D]/10 via-[#C5A880]/20 to-brand-dark",
    image: "https://picsum.photos/seed/elephant-jaipur/600/750"
  },
  {
    id: "p8",
    name: "Zen Lotus Tabletop Fountain",
    category: "Fountains",
    price: "Delicate Tier",
    description: "Single-flow tabletop fountain sculpted from organic black pottery and finished with a brass lotus leaf spout and polished river stones.",
    origin: "Pink City Ceramic Guild",
    visualPattern: "bg-radial from-slate-900 via-stone-900 to-brand-dark",
    image: "https://picsum.photos/seed/lotus-fountain/600/750"
  },
  {
    id: "p9",
    name: "The Jaipur Grandeur Tower Clock",
    category: "Timepieces",
    price: "Prestige Tier",
    description: "6-foot tall standing solid teakwood clock with detailed floral motifs and brass clockwork dial. A true heirloom statement piece.",
    origin: "Sanganer Wood Carvers",
    visualPattern: "bg-radial from-amber-950/25 via-stone-950 to-brand-dark",
    image: "https://picsum.photos/seed/tower-clock/600/750"
  }
];

const categoryIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
  All: Compass,
  Lighting: Sun,
  Timepieces: Clock,
  Fountains: Droplets,
  Sacred: Sun,
  Crafts: Landmark
};

// High-fidelity 3D Card with product image + Spotlight glow border
function ProductCard({ product, index, onSelectProduct }: { product: Product; index: number; onSelectProduct: (p: Product) => void }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [6, -6]);
  const rotateY = useTransform(x, [-150, 150], [-6, 6]);

  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
    setSpotlightPos({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 25,
        delay: index * 0.05
      }}
      className="group flex flex-col justify-between"
    >
      {/* 3D Tilt Wrapper — separated from scale hover to avoid transform conflicts */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          perspective: 1000
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => onSelectProduct(product)}
        className="w-full aspect-[4/5] rounded-[2.5rem] relative overflow-hidden mb-6 cursor-pointer"
      >
        {/* Product Image Background */}
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.06]"
        />

        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-brand-dark/30 pointer-events-none" />

        {/* Subtle category-tinted radial overlay */}
        <div className={`absolute inset-0 ${product.visualPattern} opacity-60 mix-blend-overlay pointer-events-none`} />

        {/* Dynamic Spotlight Glow Border */}
        {isHovered && (
          <div 
            className="absolute inset-0 z-20 pointer-events-none rounded-[2.5rem] transition-opacity duration-300"
            style={{
              background: `radial-gradient(250px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(197, 168, 128, 0.4), transparent 80%)`,
              padding: "1.5px",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude"
            }}
          />
        )}
        
        {/* Inner luxury border */}
        <div className="absolute inset-0 z-10 pointer-events-none rounded-[2.5rem] border border-brand-brass/15" />

        {/* Floating Top Info */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10 pointer-events-none">
          <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 bg-brand-ivory/80 text-brand-charcoal rounded-full font-bold">
            {product.origin}
          </span>
          <div className="w-8 h-8 rounded-full bg-brand-ivory/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight className="w-3.5 h-3.5 text-brand-charcoal" />
          </div>
        </div>

        {/* Floating Bottom Card Details */}
        <div className="absolute bottom-6 left-6 right-6 p-5 luxury-glass rounded-[1.8rem] transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
          <span className="text-[10px] uppercase tracking-widest text-[#A75D5D] font-bold block mb-1">
            {product.category}
          </span>
          <h4 className="text-md font-serif font-semibold text-brand-charcoal group-hover:text-brand-brass transition-colors leading-tight">
            {product.name}
          </h4>
          <div className="flex justify-between items-center mt-3 pt-3 border-t border-brand-brass/10">
            <span className="text-xs text-brand-charcoal/50 font-sans">Tier</span>
            <span className="text-xs font-serif font-bold text-brand-charcoal">{product.price}</span>
          </div>
        </div>
      </motion.div>

      {/* Outside metadata */}
      <div className="px-2">
        <div className="flex items-start justify-between">
          <h5 className="font-serif text-lg font-medium leading-snug text-brand-charcoal group-hover:text-[#A75D5D] transition-colors duration-300">
            {product.name}
          </h5>
        </div>
        <p className="text-xs text-brand-charcoal/70 mt-2 leading-relaxed line-clamp-2">
          {product.description}
        </p>
        <button
          onClick={() => onSelectProduct(product)}
          className="mt-4 flex items-center gap-1 text-[10px] uppercase tracking-widest text-brand-brass font-bold hover:text-brand-charcoal transition-colors cursor-pointer"
        >
          <span>Request Showroom Viewing</span>
          <ArrowUpRight className="w-3 h-3" />
        </button>
      </div>
    </motion.div>
  );
}

interface ProductSpotlightProps {
  onSelectProduct: (product: Product) => void;
}

export default function ProductSpotlight({ onSelectProduct }: ProductSpotlightProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="w-full">
      {/* Category Tabs — removed backdrop-blur from scrolling context for performance */}
      <div className="flex justify-center mb-16 overflow-x-auto no-scrollbar py-2 -mx-4 px-4">
        <div className="flex bg-white/10 border border-brand-brass/10 rounded-full p-1.5">
          {CATEGORIES.map((cat) => {
            const Icon = categoryIcons[cat] || Compass;
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive ? "text-brand-ivory" : "text-brand-ivory/50 hover:text-brand-ivory/80"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-brand-brass/20 border border-brand-brass/30 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-brand-brass" : "text-brand-ivory/40"}`} />
                <span>{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of products */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index} 
              onSelectProduct={onSelectProduct} 
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
