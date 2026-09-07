"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/siteConfig";
import { Button } from "@/components/ui/Button";
import { BookingModal } from "@/components/ui/BookingModal";
import { Menu, X, Phone, ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  forceLight?: boolean;
}

export function Header({ forceLight = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  // On home, starts dark over hero; on interior pages, starts light unless specified
  const isDarkHeader = isHome ? !isScrolled : false;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isDarkHeader
            ? "bg-transparent py-5"
            : "bg-white/85 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-36 sm:h-11 sm:w-44 transition-transform duration-200 group-hover:scale-[1.02]">
              {isDarkHeader ? (
                <Image
                  src="/logo-dark.png"
                  alt="Veltrixa Technology logo"
                  fill
                  priority
                  className="object-contain object-left"
                />
              ) : (
                <Image
                  src="/logo-light.png"
                  alt="Veltrixa Technology logo"
                  fill
                  priority
                  className="object-contain object-left"
                />
              )}
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {siteConfig.navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-all relative py-1",
                    isDarkHeader
                      ? isActive
                        ? "text-white font-semibold"
                        : "text-slate-300 hover:text-white"
                      : isActive
                      ? "text-[#0F172A] font-semibold"
                      : "text-slate-600 hover:text-[#0F172A]"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#17B4E8] to-[#33E1FF] rounded-full shadow-[0_0_8px_#33E1FF]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setBookingModalOpen(true)}
              className={cn(
                "inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl border transition-all",
                isDarkHeader
                  ? "text-slate-300 border-white/20 hover:border-[#17B4E8] hover:text-[#33E1FF] hover:bg-white/5"
                  : "text-slate-700 border-slate-300 hover:border-[#17B4E8] hover:text-[#17B4E8] hover:bg-slate-50"
              )}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#17B4E8]" />
              Free 15-min Call
            </button>

            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="group"
            >
              <span>Get a Free Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setBookingModalOpen(true)}
              className="text-xs px-2.5 py-1.5 rounded-lg border border-[#17B4E8]/50 text-[#17B4E8] font-semibold md:hidden"
            >
              Free Call
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "p-2 rounded-xl transition-colors",
                isDarkHeader
                  ? "text-white hover:bg-white/10"
                  : "text-slate-800 hover:bg-slate-100"
              )}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#05070D] border-b border-slate-800 shadow-2xl p-6 animate-fade-in text-white">
            <nav className="flex flex-col gap-4">
              {siteConfig.navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-base font-medium py-2 border-b border-slate-800/60 flex items-center justify-between",
                      isActive
                        ? "text-[#33E1FF] font-semibold"
                        : "text-slate-300 hover:text-white"
                    )}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </Link>
                );
              })}
            </nav>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-3">
              <Button
                variant="primary"
                size="md"
                href="/contact"
                className="w-full justify-center"
              >
                Get a Free Quote
              </Button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setBookingModalOpen(true);
                }}
                className="w-full py-2.5 px-4 rounded-xl border border-[#17B4E8]/40 text-[#33E1FF] text-sm font-semibold hover:bg-[#17B4E8]/10 text-center flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#17B4E8]" />
                Book Free 15-min Discovery Call
              </button>

              <div className="flex items-center justify-between pt-2 text-xs text-slate-400">
                <a
                  href={`tel:${siteConfig.phonePrimary}`}
                  className="flex items-center gap-1.5 hover:text-white"
                >
                  <Phone className="w-3.5 h-3.5 text-[#17B4E8]" />
                  {siteConfig.phonePrimaryFormatted}
                </a>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-medium"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </>
  );
}
