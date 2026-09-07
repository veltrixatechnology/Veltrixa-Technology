import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "accent" | "chrome" | "dark" | "outline" | "success";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "accent",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    accent:
      "bg-[#17B4E8]/10 text-[#0E8CB5] border border-[#17B4E8]/30 font-semibold",
    chrome:
      "bg-slate-100 text-slate-800 border border-slate-200 font-medium",
    dark:
      "bg-[#0B0F1A] text-[#CBD5E1] border border-slate-800/80 font-medium",
    outline:
      "bg-transparent text-[#17B4E8] border border-[#17B4E8]/40 font-medium",
    success:
      "bg-emerald-500/10 text-emerald-600 border border-emerald-500/30 font-medium",
  };

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-[10px] tracking-wider uppercase",
    md: "px-3.5 py-1 text-xs tracking-wider uppercase",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
