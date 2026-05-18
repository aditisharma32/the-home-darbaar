import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Home Darbaar | Luxury Heritage Home Decor | Jaipur",
  description: "Curated collection of antique brass chandeliers, moving gear clocks, indoor water fountains, tabletop fountains, resin statues, and traditional handicrafts. Handcrafted by heritage artisans in Jaipur, India.",
  keywords: [
    "The Home Darbaar",
    "Luxury Home Decor Jaipur",
    "Antique Brass Chandeliers",
    "Turkish Chandeliers India",
    "Moving Gear Wall Clocks",
    "Resin Ganesh Statues Jaipur",
    "Indoor Water Fountains",
    "Jaipur Traditional Handicrafts",
    "Jhoomars",
    "Tabletop Fountains"
  ],
  authors: [{ name: "The Home Darbaar" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FAF6F0] text-[#141312]">
        {children}
      </body>
    </html>
  );
}

