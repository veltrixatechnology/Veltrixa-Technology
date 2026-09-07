"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/content/siteConfig";
import { Button } from "@/components/ui/Button";
import { BookingModal } from "@/components/ui/BookingModal";
import {
  Sparkles,
  PhoneCall,
  ArrowRight,
  MessageSquare,
  Clock,
  ShieldCheck,
} from "lucide-react";

export function CTASection() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section className="py-20 bg-[#05070D] text-white relative overflow-hidden border-t border-slate-800">
      {/* Cyan ambient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-radial-glow opacity-35 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10141F] border border-[#17B4E8]/40 text-xs font-semibold text-[#33E1FF] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#17B4E8]" />
          Start Your Project Today
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-tight">
          Ready to <span className="text-chrome-gradient">Engineer</span> Your{" "}
          <span className="text-cyan-gradient">Digital Future?</span>
        </h2>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Whether you need an authoritative website starting at ₹3,499*, a custom web/mobile app, or high-velocity marketing campaigns, let’s make it happen.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto text-base group"
          >
            <span>Request Detailed Estimate</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>

          <button
            onClick={() => setBookingOpen(true)}
            className="w-full sm:w-auto h-13 px-8 rounded-xl border-2 border-[#17B4E8]/50 text-white font-medium hover:bg-[#17B4E8]/10 hover:border-[#17B4E8] hover:shadow-[0_0_25px_rgba(23,180,232,0.3)] transition-all flex items-center justify-center gap-2.5 text-sm sm:text-base cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-[#33E1FF]" />
            <span>Book Free 15-min Call</span>
          </button>
        </div>

        {/* Quick Contacts */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 border-t border-slate-800/80">
          <a
            href={`tel:${siteConfig.phonePrimary}`}
            className="flex items-center gap-2 hover:text-[#33E1FF] transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#17B4E8]" />
            <span>Number 1: {siteConfig.phonePrimaryFormatted}</span>
          </a>
          <a
            href={`tel:${siteConfig.phoneAlternate}`}
            className="flex items-center gap-2 hover:text-[#33E1FF] transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#17B4E8]" />
            <span>Number 2: {siteConfig.phoneAlternateFormatted}</span>
          </a>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct WhatsApp</span>
          </a>
          <span className="flex items-center gap-2 text-slate-500">
            <Clock className="w-3.5 h-3.5 text-[#17B4E8]" />
            <span>Typical Response: &lt; 2 hours</span>
          </span>
        </div>
      </div>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </section>
  );
}
