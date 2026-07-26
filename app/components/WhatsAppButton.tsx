"use client";

import React from "react";

export default function WhatsAppButton() {
  const phoneNumber = "917740944515";
  const defaultMessage = "Hi The Home Darbaar, I would like to inquire about your heritage collections.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-sans text-xs font-bold uppercase tracking-[0.15em] py-3.5 px-6 rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 group"
      aria-label="Chat with us on WhatsApp"
    >
      <svg
        className="w-4 h-4 fill-current transition-transform duration-300 group-hover:rotate-12"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.031 2C6.49 2 2 6.48 2 12.01c0 1.91.53 3.69 1.45 5.22L2 22l4.9-1.28c1.47.8 3.12 1.25 4.88 1.25 5.53 0 10.02-4.49 10.02-10.01C21.8 6.47 17.56 2 12.03 2zm5.7 13.5c-.25.7-1.47 1.3-2.01 1.35-.49.05-1.12.05-3.15-.8-2.6-1.08-4.24-3.72-4.37-3.9-.13-.17-1.07-1.42-1.07-2.72s.67-1.93.92-2.18c.25-.25.54-.3.71-.3.17 0 .34 0 .49.01.16 0 .37-.06.57.43.2.5.7 1.7.76 1.83.06.13.1.28.01.45-.09.18-.14.28-.28.45-.14.17-.3.38-.43.51-.15.15-.31.32-.13.62.18.3.82 1.36 1.76 2.2 1.21 1.08 2.22 1.4 2.53 1.56.31.15.49.13.67-.09.18-.23.79-.92.99-1.24.21-.32.42-.27.71-.16.29.11 1.87.88 2.19 1.04.32.16.54.24.62.38.08.14.08.82-.17 1.52z" />
      </svg>
      <span>CHAT HERE</span>
    </a>
  );
}
