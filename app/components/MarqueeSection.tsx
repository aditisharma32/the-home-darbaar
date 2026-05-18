import React from "react";

export default function MarqueeSection() {
  const items = [
    { text: "THE HOME DARBAAR", type: "brand" },
    { text: "LUXURY LIGHTING", type: "sans" },
    { text: "HANDCRAFTED DECOR", type: "serif-italic" },
    { text: "JAIPUR HERITAGE", type: "sans-brass" },
  ];

  const renderGroup = () => (
    <div className="flex items-center gap-16 shrink-0">
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
          <span className="text-[10px] text-brand-brass/40 mx-4">✦</span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="w-full bg-[#11100f] py-4 md:py-5 overflow-hidden border-y border-brand-brass/10 relative z-10">
      <div className="flex whitespace-nowrap gap-16 animate-marquee">
        {renderGroup()}
        {renderGroup()}
        {renderGroup()}
        {renderGroup()}
      </div>
    </div>
  );
}
