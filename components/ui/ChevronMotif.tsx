import React from "react";
import { cn } from "@/lib/utils";

interface ChevronMotifProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  orientation?: "down" | "right" | "corner";
}

export function ChevronMotif({
  className,
  size = "md",
  orientation = "down",
}: ChevronMotifProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16",
  }[size];

  if (orientation === "corner") {
    return (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("w-6 h-6 text-[#17B4E8]", className)}
      >
        <path
          d="M2 38V6C2 3.79086 3.79086 2 6 2H38"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M10 10L30 30"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="2 2"
          opacity="0.4"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 60 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(sizeClasses, "text-[#17B4E8]", className)}
    >
      <path
        d="M2 2L30 16L58 2"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 2L30 10L46 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />
    </svg>
  );
}

export function SectionDivider({
  className,
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative w-full flex items-center justify-center py-6 overflow-hidden",
        dark ? "bg-[#05070D]" : "bg-transparent",
        className
      )}
    >
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#17B4E8]/30 to-transparent" />
      <div className="px-4 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rotate-45 bg-[#17B4E8] shadow-[0_0_8px_#33E1FF]" />
        <ChevronMotif size="sm" className="opacity-80" />
        <span className="w-1.5 h-1.5 rotate-45 bg-[#17B4E8] shadow-[0_0_8px_#33E1FF]" />
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#17B4E8]/30 to-transparent" />
    </div>
  );
}
