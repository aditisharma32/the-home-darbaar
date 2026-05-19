import React from "react";

export default function MarqueeSection() {
  const items = [
    { text: "THE HOME DARBAAR", type: "brand" },
    { text: "LUXURY LIGHTING", type: "sans" },
    { text: "HANDCRAFTED DECOR", type: "serif-italic" },
    { text: "JAIPUR HERITAGE", type: "sans-brass" },
    { text: "BRASS CHANDELIERS", type: "serif-italic" },
    { text: "MOVING GEAR CLOCKS", type: "sans" },
    { text: "WATER FOUNTAINS", type: "sans-brass" },
  ];

  const Separator = () => (
    <span className="mx-6 md:mx-8 flex items-center">
      <span className="w-1 h-1 rounded-full bg-brand-brass/40" />
    </span>
  );

  const renderGroup = (itemsToRender: typeof items) => (
    <div className="flex items-center shrink-0">
      {itemsToRender.map((item, idx) => (
        <React.Fragment key={idx}>
          {item.type === "brand" && (
            <span className="font-sans font-bold text-xs md:text-sm tracking-[0.25em] text-brand-brass">
              {item.text}
            </span>
          )}
          {item.type === "sans" && (
            <span className="font-sans font-light text-[10px] md:text-xs tracking-[0.3em] text-brand-ivory/60">
              {item.text}
            </span>
          )}
          {item.type === "serif-italic" && (
            <span className="font-sans italic font-light text-xs md:text-sm tracking-[0.15em] text-brand-brass/85">
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
      {/* Single Row — Left scroll */}
      <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
        {renderGroup(items)}
        {renderGroup(items)}
        {renderGroup(items)}
        {renderGroup(items)}
      </div>
    </div>
  );
}

