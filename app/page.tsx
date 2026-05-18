"use client";

import React, { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import StorySection from "./components/StorySection";
import CollectionsSection from "./components/CollectionsSection";
import SpotlightSection from "./components/SpotlightSection";
import CinematicQuote from "./components/CinematicQuote";
import ArtisanShowcase from "./components/ArtisanShowcase";
import ShowroomSection from "./components/ShowroomSection";
import Footer from "./components/Footer";
import InquiryDrawer from "./components/InquiryDrawer";

// Define Product interface shared by Spotlight and Drawer
export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  origin: string;
  visualPattern: string;
  image?: string;
}

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenDrawer = (product: Product) => {
    setSelectedProduct(product);
    setIsDrawerOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF6F0] selection:bg-[#C5A880]/30 selection:text-brand-charcoal">
      <NavigationBar />
      
      <main className="flex-grow">
        <HeroSection />
        <MarqueeSection />
        <StorySection />
        <CollectionsSection />
        <SpotlightSection onSelectProduct={handleOpenDrawer} />
        <CinematicQuote />
        <ArtisanShowcase />
        <ShowroomSection />
      </main>

      <Footer />

      <InquiryDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        product={selectedProduct} 
      />
    </div>
  );
}
