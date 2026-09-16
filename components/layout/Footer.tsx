import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/content/siteConfig";
import { servicesData } from "@/content/services";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ArrowUpRight,
  MessageSquare,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05070D] text-slate-400 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle ambient cyan glow in background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-radial-glow pointer-events-none opacity-40 blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1 & 2: Brand overview */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-48">
                <Image
                  src="/logo-dark.png"
                  alt="Veltrixa Technology logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              <strong className="text-white">Veltrixa Technology</strong> — {siteConfig.tagline}. A modern digital studio engineering high-performance websites, custom web & mobile apps, UI/UX systems, and high-ROI digital marketing.
            </p>

            <div className="p-4 rounded-xl bg-[#0B0F1A] border border-slate-800/90 max-w-md space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#33E1FF] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Entry Pricing Highlight
              </div>
              <p className="text-xs text-slate-300">
                Responsive business websites starting at{" "}
                <span className="text-white font-bold">₹3,499*</span>. Free 15-minute technical discovery call available for all projects.
              </p>
            </div>

            {/* Social Media Connections (@veltrixatechnology) */}
            <div className="space-y-2.5 pt-1">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#33E1FF] block">
                Official Channels · @veltrixatechnology
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Veltrixa Technology on LinkedIn"
                  className="w-9 h-9 rounded-lg bg-[#0B0F1A] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#33E1FF] hover:border-[#17B4E8]/60 hover:shadow-[0_0_15px_rgba(23,180,232,0.3)] transition-all group"
                  title="LinkedIn: @veltrixa-technology"
                >
                  <Linkedin className="w-4 h-4 transition-transform group-hover:scale-110" />
                </a>
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Veltrixa Technology on Facebook"
                  className="w-9 h-9 rounded-lg bg-[#0B0F1A] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#33E1FF] hover:border-[#17B4E8]/60 hover:shadow-[0_0_15px_rgba(23,180,232,0.3)] transition-all group"
                  title="Facebook: @veltrixatechnology"
                >
                  <Facebook className="w-4 h-4 transition-transform group-hover:scale-110" />
                </a>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Veltrixa Technology on Instagram"
                  className="w-9 h-9 rounded-lg bg-[#0B0F1A] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#33E1FF] hover:border-[#17B4E8]/60 hover:shadow-[0_0_15px_rgba(23,180,232,0.3)] transition-all group"
                  title="Instagram: @veltrixatechnology"
                >
                  <Instagram className="w-4 h-4 transition-transform group-hover:scale-110" />
                </a>
                <a
                  href={siteConfig.socials.threads}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Veltrixa Technology on Threads"
                  className="w-9 h-9 rounded-lg bg-[#0B0F1A] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#33E1FF] hover:border-[#17B4E8]/60 hover:shadow-[0_0_15px_rgba(23,180,232,0.3)] transition-all group"
                  title="Threads: @veltrixatechnology"
                >
                  {/* Threads SVG glyph */}
                  <svg
                    className="w-4 h-4 fill-current transition-transform group-hover:scale-110"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12.186 24C5.466 24 0 18.672 0 12.102 0 5.533 5.466.205 12.186.205c6.516 0 11.83 5.099 12.01 11.536h-2.584C21.434 6.55 17.29 2.587 12.186 2.587 6.843 2.587 2.535 6.946 2.535 12.102c0 5.155 4.308 9.514 9.651 9.514 4.544 0 8.357-3.085 9.387-7.39h-5.016c-.46 1.34-1.748 2.302-3.266 2.302-1.922 0-3.485-1.545-3.485-3.447 0-1.903 1.563-3.448 3.485-3.448 1.488 0 2.753.926 3.238 2.222h5.114C21.05 7.643 17.02 4.673 12.186 4.673c-4.17 0-7.56 3.351-7.56 7.429 0 4.077 3.39 7.428 7.56 7.428 3.52 0 6.513-2.38 7.37-5.698h2.646C21.28 19.383 17.155 24 12.186 24z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#33E1FF] mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {servicesData.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{s.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#17B4E8]" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-[#17B4E8] font-semibold hover:underline inline-flex items-center gap-1 pt-1"
                >
                  View All 11 Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#33E1FF] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#33E1FF] mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href={`tel:${siteConfig.phonePrimary}`}
                  className="flex items-start gap-2.5 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#17B4E8] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-slate-200 font-medium">
                      {siteConfig.phonePrimaryFormatted}
                    </span>
                    <span className="text-[11px] text-slate-500">Number 1 (Call / WhatsApp)</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phoneAlternate}`}
                  className="flex items-start gap-2.5 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#17B4E8] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-slate-200 font-medium">
                      {siteConfig.phoneAlternateFormatted}
                    </span>
                    <span className="text-[11px] text-slate-500">Number 2</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-2.5 hover:text-white transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-[#17B4E8] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-slate-200 font-medium">
                      {siteConfig.email}
                    </span>
                    <span className="text-[11px] text-slate-500">Inquiries & Proposals</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-800/80 hover:bg-emerald-900/60 transition-colors font-medium mt-1"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>{siteConfig.copyright}</div>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">{siteConfig.gstDisclaimer}</span>
            <Link
              href="/privacy-policy"
              className="hover:text-slate-300 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-slate-300 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
