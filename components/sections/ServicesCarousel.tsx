"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { servicesData, type ServiceItem } from "@/content/services";
import { Badge } from "@/components/ui/Badge";
import { BookingModal } from "@/components/ui/BookingModal";
import {
  Globe,
  Layers,
  Smartphone,
  Palette,
  ShoppingBag,
  TrendingUp,
  Search,
  Video,
  Image as ImageIcon,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Map icon names to Lucide components
const ICON_MAP: Record<string, any> = {
  Globe,
  Layers,
  Smartphone,
  Figma: Palette,
  Palette,
  ShoppingBag,
  TrendingUp,
  Search,
  Video,
  Image: ImageIcon,
  ShieldCheck,
};

const CATEGORIES = [
  "All Services",
  "Development",
  "Design & Creative",
  "Growth & Marketing",
  "Support",
];

export function ServicesCarousel() {
  const [selectedCategory, setSelectedCategory] = useState("All Services");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceForCall, setSelectedServiceForCall] = useState<string | undefined>();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredServices = servicesData.filter((s) => {
    if (selectedCategory === "All Services") return true;
    return s.category === selectedCategory;
  });

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleOpenBooking = (serviceTitle: string) => {
    setSelectedServiceForCall(serviceTitle);
    setBookingModalOpen(true);
  };

  return (
    <section id="services" className="py-24 bg-[#F7F9FC] relative overflow-hidden">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17B4E8]/10 border border-[#17B4E8]/30 text-xs font-semibold text-[#0E8CB5] uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#17B4E8]" />
              Our Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] font-heading tracking-tight">
              Full-Spectrum Digital Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl font-normal leading-relaxed">
              <strong>Solutions for every business</strong> — from early-stage startups to established enterprises. Engineered for conversion, brand authority, and scale.
            </p>
          </div>

          {/* Carousel arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#17B4E8] hover:border-[#17B4E8] shadow-sm flex items-center justify-center transition-all cursor-pointer active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#17B4E8] hover:border-[#17B4E8] shadow-sm flex items-center justify-center transition-all cursor-pointer active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category tabs filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer",
                selectedCategory === cat
                  ? "bg-[#05070D] text-white shadow-md"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Draggable / Scrollable carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredServices.map((service) => {
            const IconComponent = ICON_MAP[service.iconName] || Globe;
            return (
              <div
                key={service.id}
                className="w-[310px] sm:w-[360px] shrink-0 snap-start bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:shadow-[0_12px_30px_rgba(23,180,232,0.12)] hover:border-[#17B4E8]/50 hover:-translate-y-1 transition-all duration-300 group relative"
              >
                <div>
                  {/* Top Bar: Icon & Category/Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#17B4E8]/10 text-[#0E8CB5] border border-[#17B4E8]/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-[#17B4E8] group-hover:to-[#33E1FF] group-hover:text-[#05070D]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {service.startingPrice ? (
                      <div className="text-right">
                        <span className="text-[10px] uppercase font-semibold text-slate-600 block">
                          Starts At
                        </span>
                        <span className="text-sm font-bold text-[#0F172A] font-heading text-[#0E8CB5]">
                          {service.startingPrice}
                        </span>
                      </div>
                    ) : (
                      <Badge variant="chrome" size="sm">
                        {service.category}
                      </Badge>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#0F172A] font-heading group-hover:text-[#0E8CB5] transition-colors">
                    {service.title}
                  </h3>

                  {/* Short description */}
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Key deliverables checklist */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                    <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">
                      What's Included
                    </span>
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-slate-600"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-[#17B4E8] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs font-bold text-[#0F172A] hover:text-[#0E8CB5] flex items-center gap-1 transition-colors"
                  >
                    <span>Full Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#17B4E8]" />
                  </Link>

                  <button
                    onClick={() => handleOpenBooking(service.title)}
                    className="px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-[#17B4E8]/10 text-slate-700 hover:text-[#0E8CB5] border border-slate-200 text-xs font-semibold transition-all cursor-pointer"
                  >
                    Quick Inquiry
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0F172A] hover:text-[#0E8CB5] transition-colors group"
          >
            <span>View detailed specifications for all 11 services</span>
            <ArrowUpRight className="w-4 h-4 text-[#17B4E8] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultService={selectedServiceForCall}
      />
    </section>
  );
}
