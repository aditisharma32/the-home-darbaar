import React from "react";

export default function MarqueeSection() {
  const topItems = [
    { text: "THE HOME DARBAAR", type: "brand" },
    { text: "LUXURY LIGHTING", type: "sans" },
    { text: "HANDCRAFTED DECOR", type: "serif-italic" },
    { text: "JAIPUR HERITAGE", type: "sans-brass" },
  ];

  const bottomItems = [
    { text: "BRASS CHANDELIERS", type: "serif-italic" },
    { text: "MOVING GEAR CLOCKS", type: "sans" },
    { text: "THE HOME DARBAAR", type: "brand" },
    { text: "WATER FOUNTAINS", type: "sans-brass" },
  ];

  const Separator = () => (
    <span className="mx-6 md:mx-8 flex items-center">
      <span className="w-1 h-1 rounded-full bg-brand-brass/40" />
    </span>
  );

  const renderGroup = (items: typeof topItems) => (
    <div className="flex items-center shrink-0">
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          {item.type === "brand" && (
            <span className="font-serif font-semibold text-xs md:text-sm tracking-[0.25em] text-brand-brass">
              {item.text}
            </span>
          )}
          {item.type === "sans" && (
            <span className="font-sans font-light text-[10px] md:text-xs tracking-[0.3em] text-brand-ivory/60">
              {item.text}
            </span>
          )}
          {item.type === "serif-italic" && (
            <span className="font-serif italic font-light text-xs md:text-sm tracking-[0.15em] text-brand-brass/85">
              {item.text}
            </span>
          )}
          {item.type === "sans-brass" && (
            <span className="font-sans font-medium text-[10px] md:text-xs tracking-[0.3em] text-brand-brass/65">
              {item.text}
            </span>
          )}
          <Separator />
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="w-full bg-[#141312] py-5 md:py-6 overflow-hidden border-y border-brand-brass/10 relative z-10 flex flex-col gap-3">
      {/* Row 1 — Left scroll */}
      <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
        {renderGroup(topItems)}
        {renderGroup(topItems)}
        {renderGroup(topItems)}
        {renderGroup(topItems)}
      </div>
      {/* Row 2 — Right scroll (reverse) */}
      <div className="flex whitespace-nowrap animate-marquee-reverse hover:[animation-play-state:paused]">
        {renderGroup(bottomItems)}
        {renderGroup(bottomItems)}
        {renderGroup(bottomItems)}
        {renderGroup(bottomItems)}
      </div>
    </div>
  );
}
