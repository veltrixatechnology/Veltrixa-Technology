"use client";

import React, { useState } from "react";
import Link from "next/link";
import { websitePricingTiers } from "@/content/pricing";
import { Button } from "@/components/ui/Button";
import { BookingModal } from "@/components/ui/BookingModal";
import {
  Check,
  Zap,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  PhoneCall,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function PricingHighlight() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section className="py-24 bg-[#05070D] text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-radial-glow opacity-30 blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-dark-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Spotlight Callout Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10141F] border border-[#17B4E8]/40 shadow-[0_0_20px_rgba(23,180,232,0.2)] text-xs font-semibold text-[#33E1FF] uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 text-[#17B4E8]" />
            Radical Pricing Transparency
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-tight">
            Websites Starting at{" "}
            <span className="text-cyan-gradient inline-block">
              ₹3,499*
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Premium engineering doesn’t require prohibitive budgets. We provide transparent, accessible entry points tailored for businesses of all scales.
          </p>

          <p className="text-xs text-slate-400 mt-2 font-medium tracking-wide">
            *All prices exclusive of GST (18% applicable). No hidden surprises.
          </p>
        </div>

        {/* 3 Website Tiers Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {websitePricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                "rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative",
                tier.featured
                  ? "bg-gradient-to-b from-[#10141F] to-[#0A0D15] border-2 border-[#17B4E8] shadow-[0_0_40px_rgba(23,180,232,0.25)] md:-translate-y-2"
                  : "bg-[#0B0F1A] border border-slate-800 hover:border-slate-700"
              )}
            >
              {tier.badge && (
                <div
                  className={cn(
                    "absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider",
                    tier.featured
                      ? "bg-gradient-to-r from-[#17B4E8] to-[#33E1FF] text-[#05070D] shadow-glow-sm"
                      : "bg-slate-800 text-slate-300 border border-slate-700"
                  )}
                >
                  {tier.badge}
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold font-heading text-white">
                  {tier.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1 min-h-[32px]">
                  {tier.subtitle}
                </p>

                {/* Price Display */}
                <div className="mt-5 pb-5 border-b border-slate-800">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold font-heading text-white">
                      {tier.price}
                    </span>
                    {tier.pricePeriod && (
                      <span className="text-xs text-slate-400 font-medium">
                        / {tier.pricePeriod}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Excl. GST · Scalable Architecture
                  </p>
                </div>

                {/* Feature List */}
                <div className="mt-6 space-y-3">
                  <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Included Capabilities:
                  </p>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#33E1FF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-slate-800/80">
                <Button
                  href={tier.ctaHref}
                  variant={tier.featured ? "primary" : "outline"}
                  size="md"
                  className="w-full text-center"
                >
                  {tier.ctaLabel}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Banner to Full Pricing */}
        <div className="mt-14 p-6 rounded-2xl bg-[#0B0F1A] border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white font-heading">
              Looking for Web Apps, Mobile Apps, or Marketing Retainers?
            </h4>
            <p className="text-xs text-slate-400">
              Browse our complete rate card across all 11 digital service verticals.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              href="/pricing"
              variant="secondary"
              size="sm"
              className="w-full sm:w-auto"
            >
              <span>View Full Pricing Matrix</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
            <button
              onClick={() => setBookingOpen(true)}
              className="px-4 py-2 rounded-xl bg-[#17B4E8]/10 text-[#33E1FF] border border-[#17B4E8]/30 hover:bg-[#17B4E8]/20 text-xs font-semibold transition-all whitespace-nowrap hidden lg:block"
            >
              15-min Call
            </button>
          </div>
        </div>
      </div>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </section>
  );
}
