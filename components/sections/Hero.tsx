"use client";

import React, { useState } from "react";
import { siteConfig } from "@/content/siteConfig";
import { Button } from "@/components/ui/Button";
import { BookingModal } from "@/components/ui/BookingModal";
import { HeroScene } from "@/components/three/HeroScene";
import { ChevronMotif } from "@/components/ui/ChevronMotif";
import {
  Sparkles,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from "lucide-react";

export function Hero() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#05070D] text-white pt-28 pb-16 overflow-hidden">
      {/* Ambient background glow & subtle isometric grid */}
      <div className="absolute inset-0 bg-dark-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-radial-glow opacity-50 blur-[120px] pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#17B4E8]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0F1A] border border-[#17B4E8]/40 shadow-[0_0_15px_rgba(23,180,232,0.25)] animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-[#33E1FF] animate-ping" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#33E1FF] uppercase font-heading">
                ENGINEERING THE FUTURE · DIGITAL STUDIO
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight font-heading leading-[1.15]">
              <span className="text-chrome-gradient inline-block pb-1 pr-1">
                Digital Agency
              </span>
              <span className="block mt-1 text-white">
                Engineered for{" "}
                <span className="text-cyan-gradient inline-block font-extrabold pr-1">
                  Velocity.
                </span>
              </span>
            </h1>

            {/* Subline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              We design and engineer bespoke web platforms, mobile apps, UI/UX systems, and high-ROI marketing funnels. Modern, light-forward digital craft for businesses of all types.
            </p>

            {/* Pricing Callout Tag */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <div className="px-3.5 py-1.5 rounded-lg bg-[#10141F] border border-slate-800 text-xs sm:text-sm text-slate-200 flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#33E1FF]" />
                <span>
                  Websites starting at{" "}
                  <strong className="text-white font-semibold">₹3,499*</strong>
                </span>
              </div>
              <span className="text-xs text-slate-400 hidden sm:inline">
                *Prices exclusive of GST
              </span>
            </div>

            {/* Dual CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto text-base group"
              >
                <span>Get Free Estimate</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>

              <button
                onClick={() => setBookingOpen(true)}
                className="w-full sm:w-auto h-13 px-7 rounded-xl border-2 border-[#17B4E8]/50 text-white font-medium hover:bg-[#17B4E8]/10 hover:border-[#17B4E8] hover:shadow-[0_0_25px_rgba(23,180,232,0.3)] transition-all flex items-center justify-center gap-2.5 text-sm sm:text-base cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#33E1FF]" />
                <span>Book 15-min Call (Free)</span>
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#33E1FF] shrink-0" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2" title="Engineered to achieve 90+ out of 100 on Google Lighthouse performance audits">
                <ShieldCheck className="w-4 h-4 text-[#33E1FF] shrink-0" />
                <span>Google Speed 90+ Target</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Sparkles className="w-4 h-4 text-[#33E1FF] shrink-0" />
                <span>15 Days Free Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Scene */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <HeroScene />
          </div>
        </div>

        {/* Scroll down cue */}
        <div className="mt-12 flex flex-col items-center justify-center text-slate-400 text-xs gap-2 select-none">
          <span className="tracking-[0.2em] uppercase font-semibold text-[10px] text-slate-400">
            Scroll to Explore
          </span>
          <ChevronMotif size="sm" className="animate-bounce opacity-70" />
        </div>
      </div>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </section>
  );
}
