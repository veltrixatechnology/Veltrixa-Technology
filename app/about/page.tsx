import { Metadata } from "next";
import Image from "next/image";
import { aboutData } from "@/content/about";
import { siteConfig } from "@/content/siteConfig";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import {
  Cpu,
  Sparkles,
  Eye,
  ShieldCheck,
  Zap,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Veltrixa Technology",
  description:
    "Learn about Veltrixa Technology — an engineering-first digital agency crafting next-generation websites, apps, and digital branding with precision and velocity.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

const VALUE_ICONS: Record<string, any> = {
  Cpu,
  Sparkles,
  Eye,
  ShieldCheck,
};

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#F7F9FC]">
      {/* Hero Header */}
      <section className="py-16 sm:py-20 bg-[#05070D] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-grid opacity-25 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-radial-glow opacity-30 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10141F] border border-[#17B4E8]/40 text-xs font-semibold text-[#33E1FF] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#17B4E8]" />
            Who We Are
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight">
            Engineering the <span className="text-chrome-gradient">Future</span> of Digital Craft
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            We are a technical agency built for businesses seeking measurable velocity, architectural integrity, and undeniable aesthetic distinction.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0F172A] font-heading tracking-tight">
              {aboutData.headline}
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              {aboutData.story.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {aboutData.stats.map((st, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-center"
                >
                  <span className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading text-[#0E8CB5] block">
                    {st.value}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium uppercase tracking-wider block mt-1">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Brand Monogram Card */}
          <div className="lg:col-span-5 bg-[#05070D] rounded-3xl p-8 border border-slate-800 text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-radial-glow opacity-30 blur-2xl pointer-events-none" />

            <div className="relative w-36 h-36 mx-auto mb-6">
              <Image
                src="/logo-monogram-trans.png"
                alt="Veltrixa Monogram"
                fill
                className="object-contain drop-shadow-[0_0_25px_rgba(23,180,232,0.4)]"
              />
            </div>

            <div className="text-center space-y-3">
              <h3 className="text-2xl font-bold font-heading text-chrome-gradient">
                VELTRIXA TECHNOLOGY
              </h3>
              <p className="text-xs uppercase tracking-[0.2em] text-[#33E1FF] font-semibold">
                ENGINEERING THE FUTURE
              </p>
              <p className="text-xs text-slate-300 leading-relaxed pt-2">
                Rooted in metallic chrome precision and electric cyan energy, our identity embodies modern engineering excellence across web, apps, and digital branding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0E8CB5]">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] font-heading mt-1">
              What Sets Our Engineering Apart
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Every system we deploy adheres to strict benchmarks in performance, accessibility, and clean architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.values.map((v, idx) => {
              const Icon = VALUE_ICONS[v.iconName] || Cpu;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#F7F9FC] border border-slate-200/90 hover:border-[#17B4E8]/40 hover:bg-white hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#17B4E8]/10 text-[#0E8CB5] border border-[#17B4E8]/20 flex items-center justify-center mb-4 group-hover:bg-gradient-to-tr group-hover:from-[#17B4E8] group-hover:to-[#33E1FF] group-hover:text-[#05070D] transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A] font-heading group-hover:text-[#0E8CB5] transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTASection />
    </div>
  );
}
