"use client";

import React from "react";
import Link from "next/link";
import { processSteps } from "@/content/process";
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
  ArrowRight,
  Clock,
  Sparkles,
} from "lucide-react";

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

export function ProcessTimeline() {
  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17B4E8]/10 border border-[#17B4E8]/30 text-xs font-semibold text-[#0E8CB5] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#17B4E8]" />
            Predictable Delivery Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] font-heading tracking-tight">
            How We Build & Deliver
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            A structured 9-stage engineering roadmap ensuring absolute clarity, zero hidden surprises, and rapid velocity from the first conversation to beyond launch.
          </p>
        </div>

        {/* 9-Step Roadmap Timeline */}
        <div className="relative">
          {/* Central spine line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#17B4E8] via-[#CBD5E1] to-[#17B4E8]" />

          <div className="space-y-8 md:space-y-12">
            {processSteps.map((step, idx) => {
              const IconComponent = STEP_ICONS[step.iconName] || Code2;
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={step.step}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  } gap-6 md:gap-12`}
                >
                  {/* Content card */}
                  <div className="w-full md:w-[calc(50%-40px)]">
                    <div className="bg-[#F7F9FC] rounded-2xl border border-slate-200 p-6 sm:p-7 hover:shadow-lg hover:border-[#17B4E8]/40 hover:-translate-y-0.5 transition-all duration-300 relative group">
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#0E8CB5] bg-[#17B4E8]/10 px-2.5 py-0.5 rounded-full border border-[#17B4E8]/20">
                          Stage {String(step.step).padStart(2, "0")}
                        </span>
                        <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#17B4E8]" /> {step.duration}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] font-heading group-hover:text-[#0E8CB5] transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                        {step.shortDesc}
                      </p>

                      <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                        <span className="text-slate-500 font-medium">Deliverable:</span>
                        <span className="font-semibold text-slate-800">
                          {step.deliverable}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Center Node / Number Badge */}
                  <div className="w-12 h-12 rounded-full bg-[#05070D] border-2 border-[#17B4E8] text-[#33E1FF] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(23,180,232,0.4)] z-10 font-heading font-bold text-sm">
                    <IconComponent className="w-5 h-5 text-[#33E1FF]" />
                  </div>

                  {/* Spacer for other column on desktop */}
                  <div className="hidden md:block md:w-[calc(50%-40px)]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Link */}
        <div className="mt-16 text-center">
          <Link
            href="/process"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold text-sm transition-colors group"
          >
            <span>Read Complete Development Standards & QA Roadmap</span>
            <ArrowRight className="w-4 h-4 text-[#17B4E8] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
