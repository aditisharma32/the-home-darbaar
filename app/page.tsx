"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  MapPin, 
  ArrowRight, 
  Compass, 
  Clock, 
  Droplets, 
  Sun, 
  Landmark, 
  Mail, 
  PhoneCall, 
  ChevronRight,
  ArrowUpRight,
  Menu,
  X
} from "lucide-react";
import ProductSpotlight from "./components/ProductSpotlight";
import InquiryDrawer from "./components/InquiryDrawer";
import ImageDarbar from "./components/ImageDarbar";

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  origin: string;
  visualPattern: string;
}

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Form states for showroom contact
  const [showroomName, setShowroomName] = useState("");
  const [showroomEmail, setShowroomEmail] = useState("");
  const [showroomMsg, setShowroomMsg] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleOpenDrawer = (product: Product) => {
    setSelectedProduct(product);
    setIsDrawerOpen(true);
  };

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

  // Scroll reveal animation settings
  const scrollRevealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] as const }
    }
  };


  return (
    <div className="flex flex-col min-h-screen bg-[#FAF6F0] selection:bg-[#C5A880]/30 selection:text-brand-charcoal">
      
      {/* 1. FLOATING NAVIGATION BAR */}
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

      {/* 2. HERO SECTION */}
      <main className="flex-grow">
        <section className="relative min-h-[100dvh] flex flex-col justify-center pt-32 pb-16 px-6 md:px-16 w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-brass font-bold mb-6 bg-brand-brass/10 px-3.5 py-1.5 rounded-full"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Heritage Showroom • Jaipur, Rajasthan</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-6xl md:text-[5.5rem] lg:text-[6rem] font-bold tracking-tight leading-[0.9] text-brand-charcoal max-w-2xl"
              >
                Royal Indian Grandeur. <br/><span className="font-serif italic font-normal text-brand-brass">Curated for</span> Modern Spaces.
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "6rem" }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="h-[1px] bg-brand-brass/60 mt-8 mb-2"
              />

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-sm md:text-base text-brand-charcoal/70 mt-4 leading-relaxed max-w-[48ch]"
              >
                Bridging the iconic craftsmanship guilds of Jaipur to sophisticated contemporary interiors. We select and refine exquisite antique chandeliers, mechanical gear clocks, slate tabletop acoustics, and gold-leaf sacred idols.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto"
              >
                <a 
                  href="#spotlight"
                  className="flex h-14 items-center justify-center gap-3 rounded-full bg-brand-charcoal hover:bg-brand-dark text-brand-ivory px-8 text-xs font-semibold uppercase tracking-widest shadow-lg transition-all transform hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <span>Acquire Visual Catalog</span>
                  <ArrowRight className="w-4 h-4 text-brand-brass" />
                </a>
                <a 
                  href="#story"
                  className="flex h-14 items-center justify-center rounded-full border border-brand-charcoal/20 hover:bg-brand-charcoal/5 px-8 text-xs font-semibold uppercase tracking-widest transition-all cursor-pointer"
                >
                  Our Heritage Guild
                </a>
              </motion.div>
            </div>

            {/* Hero Right Visuals (Arched Collage Mehrab) */}
            <div className="lg:col-span-5 relative w-full flex items-center justify-center z-10">
              <ImageDarbar />
            </div>
          </div>
        </section>

        {/* DYNAMIC KINETIC MARQUEE SECTION */}
        <div className="w-full bg-brand-charcoal text-brand-brass py-6 overflow-hidden border-y border-brand-brass/25 relative z-10">
          <div className="flex whitespace-nowrap gap-8 animate-marquee">
            <span className="font-serif text-sm uppercase tracking-[0.25em] font-bold">Jaipur Craftsmanship • Antique Brass Chandeliers • Mechanical Gear Clocks • Acoustic Fountains • Sacred Idolatry • Traditional Repoussé Metalwork •</span>
            <span className="font-serif text-sm uppercase tracking-[0.25em] font-bold">Jaipur Craftsmanship • Antique Brass Chandeliers • Mechanical Gear Clocks • Acoustic Fountains • Sacred Idolatry • Traditional Repoussé Metalwork •</span>
          </div>
        </div>

        {/* 3. HERITAGE & STORY SECTION */}
        <motion.section 
          id="story" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollRevealVariants}
          className="py-32 border-b border-brand-brass/15 bg-white/20 relative"
        >
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-brand-brass/5 hidden lg:block" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Block */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <span className="text-xs uppercase tracking-widest text-brand-brass font-bold block mb-3">
                The Artisan Legacy
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight text-brand-charcoal">
                Bridging Royal Court Grandeur <span className="font-serif italic font-normal text-brand-brass">with</span> Avant-Garde Minimalist Decor.
              </h2>
              <div className="w-16 h-[1px] bg-brand-brass/40 mt-8" />
            </div>

            {/* Right Block */}
            <article className="lg:col-span-7 space-y-8 text-brand-charcoal/80 leading-relaxed text-md font-sans">
              <p>
                Nestled in the historic city center of <strong>Jaipur, Rajasthan</strong>, <em>The Home Darbaar</em> is dedicated to raw materiality and time-honored heritage. The word &quot;Darbaar&quot; represents the royal court—a space of profound luxury, heritage, and absolute assembly of fine craftsmanship.
              </p>
              <blockquote className="border-l-2 border-brand-brass/30 pl-6 italic text-brand-charcoal font-medium text-lg my-8 leading-relaxed font-serif">
                &quot;We believe that a modern home should not be sterile. It should speak of history, carry sound, and reflect the precision of mechanical and spiritual weight.&quot;
              </blockquote>
              <p>
                We collaborate with native brass-smiths, clay artisans, precision horologists, and stone sculptors across Rajasthan. Every product in our boutique is individually refined to guarantee structural durability and visual excellence.
              </p>
              <p>
                Whether it is the rhythmic acoustic hum of our tiered slate water fountains, the micro-motion gears of our wall clocks, or the meticulous marble-resin details of our Ganesh idols, each piece functions as a conversation center inside your home.
              </p>
              
              {/* Quick Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-brand-brass/10 mt-12">
                <div>
                  <span className="font-serif text-4xl font-bold text-brand-charcoal">47+</span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-charcoal/50 font-bold block mt-1">Heritage Guild Families</span>
                </div>
                <div>
                  <span className="font-serif text-4xl font-bold text-brand-charcoal">4.9★</span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-charcoal/50 font-bold block mt-1">Curator Rating</span>
                </div>
                <div>
                  <span className="font-serif text-4xl font-bold text-brand-clay">2019</span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-charcoal/50 font-bold block mt-1">Showroom Launch</span>
                </div>
              </div>
            </article>
          </div>
        </motion.section>

        {/* 4. UNIFIED BENTO GRID SHOWCASE (THE COLLECTIONS) */}
        <motion.section 
          id="collections" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollRevealVariants}
          className="py-32 max-w-7xl mx-auto px-6 md:px-16"
        >
          <div className="flex flex-col items-center text-center mb-20">
            <span className="text-xs uppercase tracking-widest text-brand-brass font-bold bg-brand-brass/10 px-3.5 py-1.5 rounded-full mb-4">
              Visual Anthology
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-charcoal">
              The Curated Collection Pillars
            </h2>
            <p className="text-sm text-brand-charcoal/60 mt-4 max-w-[50ch] leading-relaxed">
              Exquisitely detailed categories bridging heavy materiality with delicate light refraction and peaceful kinetic movement.
            </p>
          </div>

          {/* IMAGE-DOMINANT BENTO GRID — every card is a photo with overlay */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[minmax(240px,auto)]" style={{ gridAutoFlow: 'dense' }}>
            
            {/* Card 1: Royal Illumination — HERO CARD (col-span-2, row-span-2) */}
            <div className="bento-card md:col-span-2 md:row-span-2 min-h-[520px] flex flex-col justify-between p-10 md:p-14 group">
              <img
                src="https://picsum.photos/seed/rajasthan-chandelier/1200/900"
                alt="Imperial Chandelier lighting showcase"
                className="bento-img absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 pointer-events-none" />
              <div className="absolute inset-0 bg-[#C5A880]/10 mix-blend-overlay pointer-events-none" />
              
              <div className="z-10 flex justify-between items-start">
                <span className="text-[10px] uppercase tracking-widest text-brand-brass font-bold border border-brand-brass/40 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-sm">
                  Lamps, Jhoomars & Chandeliers
                </span>
                <Sparkles className="w-6 h-6 text-brand-brass" />
              </div>

              <div className="z-10 max-w-lg">
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold block mb-2">Royal Illumination</span>
                <h3 className="font-serif text-3xl md:text-5xl font-semibold leading-tight mb-4 text-white">
                  Antique Brass & Turkish Mosaic Chandeliers
                </h3>
                <p className="text-sm text-white/70 leading-relaxed max-w-[42ch]">
                  Hand-cast brass armatures with intricate Mughal carvings and Turkish glass globes, casting expansive textured shadows.
                </p>
                <a 
                  href="#spotlight"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-brass font-bold mt-8 border-b border-brand-brass/30 pb-1 hover:text-white hover:border-white transition-all cursor-pointer"
                >
                  <span>Browse Illumination</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 2: Timepieces — IMAGE CARD */}
            <div className="bento-card min-h-[240px] flex flex-col justify-end p-8 group">
              <img
                src="https://picsum.photos/seed/vintage-clock-gears/600/600"
                alt="Exposed moving gear wall clock"
                className="bento-img absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
              
              <div className="z-10">
                <span className="text-[9px] uppercase tracking-widest text-brand-brass font-bold">Timepieces</span>
                <h4 className="font-serif text-xl font-semibold text-white mt-1 mb-1">Moving Gear & Hall Clocks</h4>
                <a href="#spotlight" className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-brand-brass font-bold mt-2 hover:text-white transition-colors cursor-pointer">
                  <span>Explore</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Card 3: Fountains — IMAGE CARD */}
            <div className="bento-card min-h-[240px] flex flex-col justify-end p-8 group">
              <img
                src="https://picsum.photos/seed/zen-water-stone/600/600"
                alt="Tiered slate waterfall fountain"
                className="bento-img absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
              
              <div className="z-10">
                <span className="text-[9px] uppercase tracking-widest text-brand-brass font-bold">Kinetic Flow</span>
                <h4 className="font-serif text-xl font-semibold text-white mt-1 mb-1">Acoustic Water Fountains</h4>
                <a href="#spotlight" className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-brand-brass font-bold mt-2 hover:text-white transition-colors cursor-pointer">
                  <span>Explore</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Card 4: Sacred — IMAGE CARD */}
            <div className="bento-card min-h-[280px] flex flex-col justify-end p-8 group">
              <img
                src="https://picsum.photos/seed/golden-temple-statue/600/700"
                alt="Sacred golden Ganesha idol"
                className="bento-img absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
              
              <div className="z-10">
                <span className="text-[9px] uppercase tracking-widest text-brand-brass font-bold">Sacred Devotion</span>
                <h4 className="font-serif text-xl font-semibold text-white mt-1 mb-1">Resin Ganesh & Vishnu Shankh</h4>
                <p className="text-xs text-white/60 leading-relaxed mt-1 max-w-[36ch]">
                  Marble resin detailed in 24k gold leaf — anchors for peace and cosmic energy.
                </p>
                <a href="#spotlight" className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-brand-brass font-bold mt-3 hover:text-white transition-colors cursor-pointer">
                  <span>Browse Sacred</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Card 5: Handicrafts — WIDE IMAGE CARD (col-span-2) */}
            <div className="bento-card md:col-span-2 min-h-[280px] flex flex-col justify-end p-10 group">
              <img
                src="https://picsum.photos/seed/rajasthan-brass-elephant/1200/600"
                alt="Jaipur traditional brass Ambabari elephant handicraft"
                className="bento-img absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
              
              <div className="z-10 max-w-md">
                <span className="text-[9px] uppercase tracking-widest text-brand-brass font-bold">Traditional Handicrafts</span>
                <h4 className="font-serif text-2xl font-semibold text-white mt-1 mb-2">Jaipur Brass Repoussé & Crafts</h4>
                <p className="text-xs text-white/60 leading-relaxed max-w-[42ch]">
                  Ambabari elephants and artifacts from Sanganer and Johri Bazar master craftsman guilds.
                </p>
                <a href="#spotlight" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-brass font-bold mt-4 hover:text-white transition-colors cursor-pointer">
                  <span>Browse Handicrafts</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </motion.section>

        {/* 5. DYNAMIC INTERACTIVE SPOTLIGHT (CATALOG EXPLORER) */}
        <motion.section 
          id="spotlight" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollRevealVariants}
          className="py-32 bg-brand-charcoal text-brand-ivory relative"
        >
          <div className="absolute inset-0 bg-radial from-stone-900 via-brand-dark/95 to-brand-dark pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-brand-brass font-bold block mb-3">
                  Heritage Spotlight
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
                  Curated Boutique Catalog
                </h2>
              </div>
              <p className="text-sm text-brand-ivory/60 max-w-[38ch] leading-relaxed font-sans">
                Interact with each piece to request showroom specifications, custom sizing, and a direct WhatsApp inquiry.
              </p>
            </div>

            <ProductSpotlight onSelectProduct={handleOpenDrawer} />
          </div>
        </motion.section>

        {/* CINEMATIC INTERLUDE QUOTE */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollRevealVariants}
          className="py-32 md:py-48 bg-[#FAF6F0] flex items-center justify-center text-center px-6"
        >
          <div className="max-w-4xl flex flex-col items-center">
            <Sparkles className="w-8 h-8 text-brand-brass mb-8 opacity-50" />
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-brand-charcoal leading-[1.2] font-medium tracking-tight">
              &quot;True luxury is <span className="italic text-brand-brass">silent</span>. It resides in the weight of raw brass, the resonance of falling water, and the quiet precision of moving gears.&quot;
            </h2>
            <div className="mt-10 flex items-center gap-4">
              <div className="w-12 h-[1px] bg-brand-charcoal/20" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-charcoal font-bold">The Home Darbaar Manifesto</span>
              <div className="w-12 h-[1px] bg-brand-charcoal/20" />
            </div>
          </div>
        </motion.section>

        {/* 6. CINEMATIC ARTISAN CRAFTSMANSHIP SECTION — full bleed with bg image */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollRevealVariants}
          className="cinematic-section py-32 md:py-40 relative"
          style={{ backgroundImage: 'url(https://picsum.photos/seed/jaipur-artisan-workshop/1920/1080)' }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-widest text-brand-brass font-bold block mb-3">
                Meticulous Process
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight text-white">
                Honoring Native Jaipur Guilds
              </h2>
              <p className="text-sm text-white/70 mt-6 leading-relaxed">
                Every item at The Home Darbaar passes through strict regional artisan guilds. We do not manufacture; we collaborate and curate, ensuring old-world processes remain economically sustainable.
              </p>
              
              {/* List of Craft Pillars */}
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <span className="font-serif text-xl text-brand-brass font-bold mt-0.5">01</span>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-white">Sand-Cast Brass Casting</h4>
                    <p className="text-xs text-white/50 leading-relaxed mt-1">
                      Brass is molten and hand-cast in organic red clay sand molds in native Jaipur metal workshops.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <span className="font-serif text-xl text-brand-clay font-bold mt-0.5">02</span>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-white">Repoussé Gold Leaf Application</h4>
                    <p className="text-xs text-white/50 leading-relaxed mt-1">
                      Delicate sheets of gold leaf are burnished onto teakwood and resin surfaces in Sanganeri and Johri Bazar ateliers.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <span className="font-serif text-xl text-brand-brass font-bold mt-0.5">03</span>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-white">Precision Gear Balancing</h4>
                    <p className="text-xs text-white/50 leading-relaxed mt-1">
                      Synchronized moving clock gears are assembled and balanced to guarantee friction-free visual loop transitions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="testimonial-card bg-white/10 border-brand-brass/20 border-l-2 border-l-brand-brass">
                <span className="text-[10px] uppercase tracking-widest text-brand-brass font-bold">M.I. Road, Jaipur</span>
                <p className="text-sm text-white/80 leading-relaxed italic mt-4 font-serif">
                  &quot;Visiting The Home Darbaar was like walking through a contemporary palace library. The mechanical clocks and Turkish mosaic globes cast shadows that transformed our drawing room.&quot;
                </p>
                <span className="text-xs font-semibold text-brand-brass block mt-6">— Curator Review, Delhi</span>
              </div>

              <div className="testimonial-card bg-white/10 border-brand-brass/20 border-l-2 border-l-brand-clay">
                <span className="text-[10px] uppercase tracking-widest text-brand-brass font-bold">Architect Review</span>
                <p className="text-sm text-white/80 leading-relaxed italic mt-4 font-serif">
                  &quot;The slate indoor water fountain has become the auditory anchor of our wellness lounge. Exceptional craftsmanship and material durability.&quot;
                </p>
                <span className="text-xs font-semibold text-brand-brass block mt-6">— Interior Studio, Jaipur</span>
              </div>
            </div>

          </div>
        </motion.section>

        {/* 7. SHOWROOM LOCATOR & CONTACT FOOTER */}
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
      </main>

      {/* 8. FOOTER METADATA */}
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

      {/* 9. INQUIRY DRAWERS & OVERLAYS */}
      <InquiryDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        product={selectedProduct} 
      />

    </div>
  );
}
