"use client";

import React, { forwardRef, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  magnetic?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isExternal,
      magnetic = false,
      children,
      ...props
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);

    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none cursor-pointer";

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-[#17B4E8] via-[#20C5F7] to-[#33E1FF] text-[#05070D] font-semibold shadow-[0_0_20px_rgba(23,180,232,0.35)] hover:shadow-[0_0_30px_rgba(23,180,232,0.55)] hover:brightness-105 border border-[#33E1FF]/40",
      secondary:
        "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 shadow-sm",
      outline:
        "border-2 border-[#17B4E8] text-[#17B4E8] hover:bg-[#17B4E8]/10 hover:shadow-[0_0_20px_rgba(23,180,232,0.25)]",
      ghost:
        "text-[#0F172A] hover:bg-slate-100 hover:text-[#17B4E8]",
      dark:
        "bg-[#05070D] text-white border border-slate-800 hover:border-[#17B4E8]/60 hover:shadow-[0_0_20px_rgba(23,180,232,0.2)]",
    };

    const sizeStyles = {
      sm: "h-9 px-4 text-xs tracking-wide",
      md: "h-11 px-6 text-sm tracking-wide",
      lg: "h-13 px-8 text-base tracking-wide font-semibold",
    };

    const combinedClasses = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClasses}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClasses}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={(node) => {
          buttonRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        className={combinedClasses}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
