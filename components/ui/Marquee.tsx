import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items?: string[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

const DEFAULT_ITEMS = [
  "NEXT-GEN WEB DEVELOPMENT",
  "CROSS-PLATFORM MOBILE APPS",
  "UI/UX DESIGN SYSTEMS",
  "BRANDING & IDENTITY",
  "HIGH-ROI DIGITAL MARKETING",
  "TECHNICAL SEO ARCHITECTURE",
  "HIGH-RETENTION VIDEO EDITING",
  "SCALE READY CLOUD SYSTEMS",
  "WEBSITES FROM ₹3,499*",
];

export function Marquee({
  items = DEFAULT_ITEMS,
  direction = "left",
  speed = "normal",
  className,
}: MarqueeProps) {
  const speedClass = {
    slow: "duration-[35s]",
    normal: "duration-[25s]",
    fast: "duration-[15s]",
  }[speed];

  return (
    <div
      className={cn(
        "w-full overflow-hidden py-3 bg-[#05070D] border-y border-[#17B4E8]/20 relative select-none",
        className
      )}
    >
      {/* Side gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#05070D] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#05070D] to-transparent z-10 pointer-events-none" />

      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-8 whitespace-nowrap animate-marquee",
          speedClass,
          direction === "right" && "direction-reverse"
        )}
      >
        {[...items, ...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-6 text-xs font-semibold tracking-[0.25em] text-[#CBD5E1] uppercase"
          >
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#17B4E8] shadow-[0_0_8px_#33E1FF]" />
          </div>
        ))}
      </div>
    </div>
  );
}
