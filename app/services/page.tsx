import { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/content/services";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";
import { CTASection } from "@/components/sections/CTASection";
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
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Agency Services | Web, App, Design & Marketing",
  description:
    "Explore Veltrixa Technology's full suite of digital engineering capabilities: Websites starting at ₹3,499*, Web Apps, Mobile Apps, UI/UX, Branding, SEO, and Marketing.",
  alternates: {
    canonical: "https://veltrixa.com/services",
  },
};

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

export default function ServicesPage() {
  const serviceCategories = [
    { name: "Development", title: "Software & Web Engineering" },
    { name: "Design & Creative", title: "UI/UX, Branding & Visual Media" },
    { name: "Growth & Marketing", title: "Acquisition, SEO & Performance" },
    { name: "Support", title: "Continuous Maintenance & Infrastructure" },
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#F7F9FC]">
      {/* Page Hero Header */}
      <section className="py-16 sm:py-20 bg-[#05070D] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-grid opacity-25 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-radial-glow opacity-35 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10141F] border border-[#17B4E8]/40 text-xs font-semibold text-[#33E1FF] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#17B4E8]" />
            Full-Spectrum Digital Capabilities
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight">
            Our Digital <span className="text-chrome-gradient">Services</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            <strong>Solutions for every business</strong> — from founders launching their first concept to expanding enterprises modernizing legacy software.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
            <span className="px-3.5 py-1.5 rounded-lg bg-[#10141F] border border-slate-800 text-slate-200">
              ⚡ Websites starting at <strong className="text-white">₹3,499*</strong>
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-[#10141F] border border-slate-800 text-slate-200">
              🎯 15-Minute Free Discovery Call
            </span>
            <span className="text-xs text-slate-400">
              *All prices exclusive of GST
            </span>
          </div>
        </div>
      </section>

      <Marquee />

      {/* Services Grid Categorized */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {serviceCategories.map((cat) => {
            const items = servicesData.filter((s) => s.category === cat.name);
            if (!items.length) return null;

            return (
              <div key={cat.name} className="space-y-8">
                {/* Category Title */}
                <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#0E8CB5]">
                      Category
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] font-heading mt-0.5">
                      {cat.title}
                    </h2>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    {items.length} Service{items.length > 1 ? "s" : ""}
                  </span>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {items.map((service) => {
                    const Icon = ICON_MAP[service.iconName] || Globe;
                    return (
                      <div
                        key={service.id}
                        className="bg-white rounded-2xl border border-slate-200 p-7 flex flex-col justify-between hover:shadow-xl hover:border-[#17B4E8]/50 hover:-translate-y-1 transition-all duration-300 group relative"
                      >
                        <div>
                          {/* Header of card */}
                          <div className="flex items-center justify-between mb-5">
                            <div className="w-12 h-12 rounded-xl bg-[#17B4E8]/10 text-[#0E8CB5] border border-[#17B4E8]/20 flex items-center justify-center group-hover:bg-[#17B4E8] group-hover:text-[#05070D] transition-colors">
                              <Icon className="w-6 h-6" />
                            </div>
                            {service.startingPrice ? (
                              <div className="text-right">
                                <span className="text-[10px] uppercase font-bold text-slate-600 block">
                                  Starting From
                                </span>
                                <span className="text-base font-extrabold text-[#0E8CB5] font-heading">
                                  {service.startingPrice}
                                </span>
                              </div>
                            ) : (
                              <Badge variant="chrome" size="sm">
                                {service.category}
                              </Badge>
                            )}
                          </div>

                          <h3 className="text-xl font-bold text-[#0F172A] font-heading group-hover:text-[#0E8CB5] transition-colors">
                            {service.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                            {service.shortDescription}
                          </p>

                          {/* Ideal For */}
                          <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600">
                            <strong className="text-slate-800 font-semibold block mb-0.5">
                              Target Fit:
                            </strong>
                            <p className="line-clamp-2">{service.idealFor}</p>
                          </div>

                          {/* Deliverables */}
                          <div className="mt-5 space-y-2">
                            <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">
                              Key Inclusions:
                            </span>
                            {service.deliverables.slice(0, 3).map((item, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2 text-xs text-slate-600"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#17B4E8] shrink-0 mt-0.5" />
                                <span className="line-clamp-1">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Bottom Actions */}
                        <div className="mt-7 pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                          <span className="text-[11px] text-slate-600 flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#17B4E8]" /> {service.timeline}
                          </span>

                          <Link
                            href={`/services/${service.slug}`}
                            className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-[#0E8CB5] text-xs font-semibold transition-colors"
                          >
                            <span>Explore Details</span>
                            <ArrowRight className="w-3 h-3 ml-0.5" />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Conversion CTA Band */}
      <CTASection />
    </div>
  );
}
