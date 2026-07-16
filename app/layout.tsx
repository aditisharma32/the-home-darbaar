import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
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
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "The Home Darbaar | Luxury Heritage Home Decor",
    description: "Jaipur's premier boutique for exquisite home decor, luxury lighting, and traditional handicraft innovations. Brass chandeliers, gear clocks, water fountains & more.",
    siteName: "The Home Darbaar",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Home Darbaar | Luxury Heritage Home Decor",
    description: "Jaipur's premier boutique for exquisite home decor, luxury lighting, and traditional handicraft innovations.",
  },
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
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FAF6F0] text-[#141312]">
        {children}
      </body>
    </html>
  );
}

