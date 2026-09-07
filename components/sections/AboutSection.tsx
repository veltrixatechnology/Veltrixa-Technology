import React from "react";
import Link from "next/link";
import Image from "next/image";
import { aboutData } from "@/content/about";
import {
  Cpu,
  Sparkles,
  Eye,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const VALUE_ICONS: Record<string, any> = {
  Cpu,
  Sparkles,
  Eye,
  ShieldCheck,
};

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Story & Mission */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17B4E8]/10 border border-[#17B4E8]/30 text-xs font-semibold text-[#0E8CB5] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#17B4E8]" />
              Engineering The Future
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] font-heading tracking-tight leading-tight">
              A Modern Digital Studio Built on Precision & Velocity
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                At <strong>Veltrixa Technology</strong>, we bridge the gap between creative ambition and technical rigor. Inspired by clean geometry, chrome precision, and electric cyan dynamism, we engineer web platforms, scalable applications, and digital identities for businesses that demand authority.
              </p>
              <p>
                We believe exceptional software should never be a luxury restricted to Fortune 500 enterprises. By pairing modern frameworks with transparent, accessible pricing starting at <strong>₹3,499*</strong>, we empower ambitious brands to establish world-class online presence rapidly.
              </p>
            </div>

            {/* Qualitative Trust Badges */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {aboutData.trustBadges.slice(0, 4).map((badge, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs font-medium text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#17B4E8] shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0F172A] hover:text-[#0E8CB5] transition-colors group"
              >
                <span>Read more about our engineering philosophy & standards</span>
                <ArrowRight className="w-4 h-4 text-[#17B4E8] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Values Card Grid */}
          <div className="lg:col-span-5 space-y-4">
            {aboutData.values.map((val, idx) => {
              const Icon = VALUE_ICONS[val.iconName] || Cpu;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#F7F9FC] border border-slate-200/90 hover:border-[#17B4E8]/50 hover:bg-white hover:shadow-md transition-all duration-200 flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#17B4E8]/10 text-[#0E8CB5] border border-[#17B4E8]/20 flex items-center justify-center shrink-0 group-hover:bg-[#17B4E8] group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A] font-heading group-hover:text-[#0E8CB5] transition-colors">
                      {val.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
