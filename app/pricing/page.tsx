import { Metadata } from "next";
import Link from "next/link";
import {
  websitePricingTiers,
  secondaryServicePrices,
  pricingFaqs,
} from "@/content/pricing";
import { siteConfig } from "@/content/siteConfig";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import {
  Check,
  Zap,
  HelpCircle,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Transparent Pricing & Packages | Websites from ₹3,499*",
  description:
    "Explore transparent pricing at Veltrixa Technology. Websites starting at ₹3,499* (+ GST). Custom web apps, mobile apps, UI/UX design, and marketing retainers.",
  alternates: {
    canonical: `${siteConfig.url}/pricing`,
  },
};

export default function PricingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pricingFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="pt-24 min-h-screen bg-[#F7F9FC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Banner */}
      <section className="py-16 sm:py-20 bg-[#05070D] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-grid opacity-25 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-radial-glow opacity-30 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10141F] border border-[#17B4E8]/40 text-xs font-semibold text-[#33E1FF] uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 text-[#17B4E8]" />
            Accessible & Clear Investment Models
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight">
            Transparent <span className="text-chrome-gradient">Pricing</span> Matrix
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            Every business deserves high-grade digital engineering without budget ambiguity. Websites starting at <strong className="text-white">₹3,499*</strong>.
          </p>

          <p className="text-xs text-slate-400 mt-2">
            {siteConfig.gstDisclaimer}
          </p>
        </div>
      </section>

      {/* Website Tiers Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0E8CB5]">
            Flagship Offering
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] font-heading mt-1">
            Website Design & Development Packages
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Choose the package best matched to your current business horizon, with seamless modular upgrade pathways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {websitePricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                "rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative bg-white border",
                tier.featured
                  ? "border-2 border-[#17B4E8] shadow-xl md:-translate-y-2 ring-1 ring-[#17B4E8]/20"
                  : "border-slate-200 shadow-sm hover:border-slate-300"
              )}
            >
              {tier.badge && (
                <div
                  className={cn(
                    "absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider",
                    tier.featured
                      ? "bg-[#05070D] text-[#33E1FF] border border-[#17B4E8] shadow-sm"
                      : "bg-slate-100 text-slate-700 border border-slate-200"
                  )}
                >
                  {tier.badge}
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold font-heading text-[#0F172A]">
                  {tier.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 min-h-[32px]">
                  {tier.subtitle}
                </p>

                <div className="mt-5 pb-5 border-b border-slate-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold font-heading text-[#0F172A]">
                      {tier.price}
                    </span>
                    {tier.pricePeriod && (
                      <span className="text-xs text-slate-500 font-medium">
                        / {tier.pricePeriod}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Excl. GST · Turnaround: 3–7 Days
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Included Capabilities:
                  </p>
                  <ul className="space-y-2.5 text-xs text-slate-600">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#17B4E8] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Button
                  href={tier.ctaHref}
                  variant={tier.featured ? "primary" : "outline"}
                  size="md"
                  className="w-full text-center"
                >
                  {tier.ctaLabel}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Secondary Services Rate Card */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0E8CB5]">
              Comprehensive Rate Card
            </span>
            <h2 className="text-3xl font-bold text-[#0F172A] font-heading mt-1">
              All 11 Service Verticals & Starting Ranges
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Transparent benchmarks for planning your digital initiatives. Exact quotes are finalized after our free 15-minute discovery call.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-4 px-6">Service Vertical</th>
                  <th className="py-4 px-6">Starting Investment</th>
                  <th className="py-4 px-6 hidden md:table-cell">Standard Timeline</th>
                  <th className="py-4 px-6 hidden lg:table-cell">Core Deliverable</th>
                  <th className="py-4 px-6 text-right">Inquiry</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {secondaryServicePrices.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#0F172A]">
                      {item.service}
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-extrabold text-[#0E8CB5] font-heading text-sm sm:text-base">
                        {item.startingRange}
                      </span>
                      <span className="text-[11px] text-slate-500 block">
                        {item.unit}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-600 hidden md:table-cell">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#17B4E8]" />
                        {item.typicalTimeline}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-600 hidden lg:table-cell max-w-xs truncate">
                      {item.deliverableSummary}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <Link
                        href={`/contact?service=${encodeURIComponent(item.service)}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#0E8CB5] hover:underline"
                      >
                        <span>Quote</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-500 mt-4 text-center">
            {siteConfig.gstDisclaimer} · Custom scopes and enterprise contracts available on request.
          </p>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17B4E8]/10 text-xs font-semibold text-[#0E8CB5] uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#17B4E8]" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl font-bold text-[#0F172A] font-heading">
            Pricing, Billing & Terms
          </h2>
        </div>

        <div className="space-y-4">
          {pricingFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2"
            >
              <h3 className="text-base sm:text-lg font-bold text-[#0F172A] font-heading">
                {faq.question}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Band */}
      <CTASection />
    </div>
  );
}
