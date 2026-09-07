import React from "react";
import {
  Layers,
  Sparkles,
  Zap,
  Headphones,
  Compass,
} from "lucide-react";

const STATS_ITEMS = [
  {
    icon: Layers,
    title: "Full-Stack Agency",
    description: "Next.js, React, Node, Cloud & Mobile cross-platform architecture",
  },
  {
    icon: Compass,
    title: "All-Industry Solutions",
    description: "Tailored digital products for startups, SMEs, D2C & enterprises",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Rapid sprints — websites live in as little as 3 to 7 business days",
  },
  {
    icon: Sparkles,
    title: "From ₹3,499*",
    description: "Accessible starter packages with zero hidden retainers or surprises",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Direct access to technical leads via WhatsApp, phone, and email",
  },
];

export function TrustStats() {
  return (
    <section className="bg-white border-b border-slate-200 py-10 relative z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {STATS_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-3.5 rounded-xl hover:bg-slate-50 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#17B4E8]/10 text-[#0E8CB5] border border-[#17B4E8]/25 flex items-center justify-center shrink-0 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A] font-heading">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
