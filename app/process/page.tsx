import { Metadata } from "next";
import Link from "next/link";
import { processSteps } from "@/content/process";
import { siteConfig } from "@/content/siteConfig";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import {
  PhoneCall,
  FileSpreadsheet,
  Compass,
  Palette,
  Code2,
  CheckCircle2,
  ShieldCheck,
  Rocket,
  HeartHandshake,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Process | How Veltrixa Technology Works",
  description:
    "Learn about our 9-step agile delivery roadmap from free 15-minute discovery consultation to production launch and ongoing SLA support.",
  alternates: {
    canonical: "https://veltrixa.com/process",
  },
};

const STEP_ICONS: Record<string, any> = {
  PhoneCall,
  FileSpreadsheet,
  Compass,
  Palette,
  Code2,
  CheckCircle2,
  ShieldCheck,
  Rocket,
  HeartHandshake,
};

export default function ProcessPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#F7F9FC]">
      {/* Hero Header */}
      <section className="py-16 sm:py-20 bg-[#05070D] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-grid opacity-25 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-radial-glow opacity-30 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10141F] border border-[#17B4E8]/40 text-xs font-semibold text-[#33E1FF] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#17B4E8]" />
            Rigorous Delivery Methodology
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight">
            How We <span className="text-chrome-gradient">Engineer</span> & Deliver
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            Our systematic 9-stage engineering roadmap eliminates guesswork, keeps timelines tight, and provides full transparency at every milestone.
          </p>
        </div>
      </section>

      {/* Detailed Steps Container */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {processSteps.map((step) => {
            const Icon = STEP_ICONS[step.iconName] || Code2;
            return (
              <div
                key={step.step}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md hover:border-[#17B4E8]/40 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#05070D] text-[#33E1FF] border border-[#17B4E8]/30 flex items-center justify-center shrink-0 font-bold font-heading shadow-glow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0E8CB5]">
                        Phase {String(step.step).padStart(2, "0")}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading mt-0.5">
                        {step.title}
                      </h2>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold self-start sm:self-center">
                    <Clock className="w-3.5 h-3.5 text-[#17B4E8]" /> {step.duration}
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {step.fullDesc}
                  </p>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm">
                    <span className="text-slate-500 font-medium">
                      Primary Tangible Deliverable:
                    </span>
                    <span className="font-bold text-slate-900 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#17B4E8]" />
                      {step.deliverable}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Band */}
      <CTASection />
    </div>
  );
}
