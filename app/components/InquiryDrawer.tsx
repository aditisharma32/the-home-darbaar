"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Check, Phone } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  price?: string;
  description: string;
  origin: string;
}

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export default function InquiryDrawer({ isOpen, onClose, product }: InquiryDrawerProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (product) {
      setName("");
      setMessage(`Hi, I'm interested in the "${product.name}" from your collection. Please share availability and pricing details.`);
      setIsSuccess(false);
    }
  }, [product]);

  // Prevent background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSuccess(true);

    // Construct WhatsApp URL
    const phoneNumber = "917740944515";
    const encodedText = encodeURIComponent(
      `*The Home Darbaar - Inquiry*\n\n` +
      `*Customer Name:* ${name}\n` +
      `*Product:* ${product?.name}\n` +
      `*Category:* ${product?.category}\n` +
      `*Origin:* ${product?.origin}\n\n` +
      `*Message:* ${message}`
    );
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    // On mobile, redirect active tab to bypass pop-up blockers; on desktop, open new tab
    const isMobileDevice = typeof window !== "undefined" && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (isMobileDevice) {
      window.location.href = whatsappUrl;
    } else {
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && product && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-brand-dark/40 backdrop-blur-md"
          />

          {/* Sliding Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
            className="fixed top-0 right-0 z-50 h-full w-full max-w-lg bg-brand-ivory text-brand-charcoal shadow-2xl flex flex-col p-8 md:p-12 luxury-border border-l"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-brand-brass/10 pb-6 mb-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-brand-brass font-medium">Product Inquiry</span>
                <h3 className="text-2xl font-serif font-semibold mt-1">Inquire About This Piece</h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-brand-brass/10 rounded-full transition-colors cursor-pointer"
                aria-label="Close panel"
              >
                <X className="w-5 h-5 text-brand-charcoal/70" />
              </button>
            </div>

            {/* Content (Scrollable) */}
            <div className="flex-1 overflow-y-auto pr-2 no-scrollbar">
              {/* Product Info Card */}
              <div className="bg-white/50 border border-brand-brass/15 p-6 rounded-2xl mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-brass/5 rounded-bl-full pointer-events-none" />
                <span className="inline-block text-[10px] uppercase tracking-widest px-2 py-0.5 bg-brand-brass/10 text-brand-brass rounded-full mb-3 font-semibold">
                  {product.category}
                </span>
                <h4 className="text-xl font-serif font-semibold text-brand-charcoal">{product.name}</h4>
                <p className="text-sm text-brand-charcoal/70 mt-2 leading-relaxed">{product.description}</p>
                <div className="mt-4 flex items-center justify-between text-xs border-t border-brand-brass/10 pt-4">
                  <div>
                    <span className="text-brand-charcoal/50 block">Showroom Origin</span>
                    <span className="font-semibold text-brand-brass">{product.origin}</span>
                  </div>
                  {product.price && (
                    <div className="text-right">
                      <span className="text-brand-charcoal/50 block font-sans">Visual Tier</span>
                      <span className="font-semibold font-serif text-[#A75D5D]">{product.price}</span>
                    </div>
                  )}
                </div>
              </div>

              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="customer-name" className="text-xs uppercase tracking-wider text-brand-charcoal/60 font-semibold">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      id="customer-name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Maharani Devika"
                      className="w-full bg-white border border-brand-brass/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-brass focus:ring-1 focus:ring-brand-brass transition-all font-sans"
                    />
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="inquiry-message" className="text-xs uppercase tracking-wider text-brand-charcoal/60 font-semibold">
                      Your Message
                    </label>
                    <textarea
                      id="inquiry-message"
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-white border border-brand-brass/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-brass focus:ring-1 focus:ring-brand-brass transition-all font-sans leading-relaxed resize-none"
                    />
                  </div>

                  {/* WhatsApp Info Notice */}
                  <div className="flex gap-3 bg-brand-brass/5 p-4 rounded-xl text-xs text-brand-charcoal/70 border border-brand-brass/10">
                    <Phone className="w-4 h-4 text-brand-brass shrink-0 mt-0.5" />
                    <p>
                      Submitting opens a secure chat directly with our Jaipur showroom manager on WhatsApp, sharing your pre-filled inquiry details for instant assistance.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex h-14 items-center justify-center gap-3 rounded-full bg-brand-charcoal hover:bg-brand-dark disabled:bg-brand-charcoal/50 text-brand-ivory font-medium transition-all transform hover:scale-[1.01] active:scale-[0.98] shadow-lg cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>
                </form>
              ) : (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 px-6 bg-brand-brass/5 rounded-2xl border border-brand-brass/20"
                >
                  <div className="w-16 h-16 bg-brand-brass/10 text-brand-brass rounded-full flex items-center justify-center border border-brand-brass/20 mb-6">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-serif font-semibold text-brand-charcoal">Message Sent</h4>
                  <p className="text-sm text-brand-charcoal/70 mt-3 leading-relaxed max-w-[32ch]">
                    You&rsquo;ve been redirected to WhatsApp to complete your inquiry with our Jaipur showroom team.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-8 px-6 py-2.5 rounded-full border border-brand-brass/30 text-brand-charcoal hover:bg-brand-brass/5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Return to Gallery
                  </button>
                </motion.div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-brand-brass/10 pt-6 mt-8 text-center text-[10px] text-brand-charcoal/40 tracking-widest uppercase">
              The Home Darbaar • Jaipur • Heritage Crafted
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
