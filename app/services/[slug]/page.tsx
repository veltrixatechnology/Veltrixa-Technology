import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData } from "@/content/services";
import { siteConfig } from "@/content/siteConfig";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
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
  ArrowLeft,
  ArrowRight,
  HelpCircle,
  Sparkles,
  Phone,
  MessageSquare,
} from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

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

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Veltrixa Technology`,
    description: service.shortDescription,
    alternates: {
      canonical: `${siteConfig.url}/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Veltrixa Technology`,
      description: service.shortDescription,
      url: `${siteConfig.url}/services/${service.slug}`,
    },
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const Icon = ICON_MAP[service.iconName] || Globe;

  // Schema for Service and Breadcrumb
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.fullDescription,
    provider: {
      "@type": "Organization",
      name: "Veltrixa Technology",
      url: siteConfig.url,
    },
    offers: service.startingPrice
      ? {
          "@type": "Offer",
          price: service.startingPrice.replace(/[^0-9]/g, ""),
          priceCurrency: "INR",
          description: "Starting price exclusive of GST",
        }
      : undefined,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://veltrixa.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://veltrixa.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `https://veltrixa.com/services/${service.slug}`,
      },
    ],
  };

  return (
    <div className="pt-24 min-h-screen bg-[#F7F9FC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Dark Header Banner */}
      <section className="py-16 sm:py-20 bg-[#05070D] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-grid opacity-25 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-radial-glow opacity-30 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-[#33E1FF] font-medium">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="accent" size="sm">
                  {service.category}
                </Badge>
                {service.badge && (
                  <Badge variant="chrome" size="sm">
                    {service.badge}
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold font-heading tracking-tight">
                {service.title}
              </h1>

              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                {service.shortDescription}
              </p>

              {service.startingPrice && (
                <div className="pt-2 flex items-center gap-3">
                  <div className="px-4 py-2 rounded-xl bg-[#10141F] border border-[#17B4E8]/40">
                    <span className="text-[11px] uppercase font-bold text-slate-400 block">
                      Starting Investment
                    </span>
                    <span className="text-2xl font-extrabold text-[#33E1FF] font-heading">
                      {service.startingPrice}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">
                    {service.priceNote}
                  </span>
                </div>
              )}
            </div>

            {/* Quick Consultation Trigger */}
            <div className="lg:col-span-4 bg-[#0B0F1A] p-6 rounded-2xl border border-slate-800 space-y-4 text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#17B4E8]/10 text-[#33E1FF] border border-[#17B4E8]/30 flex items-center justify-center mx-auto">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-white font-heading">
                Need {service.title}?
              </h3>
              <p className="text-xs text-slate-400">
                Speak directly with an engineer for a customized timeline and transparent estimate.
              </p>
              <Button
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                variant="primary"
                size="md"
                className="w-full"
              >
                Request an Estimate
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body Details */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Full Content */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-[#0F172A] font-heading">
                Service Overview
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* Inclusions / Deliverables */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#0F172A] font-heading">
                  What's Included in Every Engagement
                </h2>
                <span className="text-xs text-slate-500 font-medium">
                  {service.deliverables.length} Key Deliverables
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#17B4E8] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Audience / Ideal For */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-[#0F172A] font-heading">
                Who This Is Ideal For
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {service.idealFor}
              </p>
            </div>

            {/* FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#17B4E8]" />
                  <h2 className="text-2xl font-bold text-[#0F172A] font-heading">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2"
                    >
                      <h3 className="text-base font-bold text-slate-900 font-heading">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Sidebar with Specs & Direct Contact */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5 sticky top-28">
              <h3 className="text-lg font-bold text-[#0F172A] font-heading">
                Engagement Details
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-slate-500">Typical Timeline:</span>
                  <span className="font-semibold text-slate-800 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#17B4E8]" /> {service.timeline}
                  </span>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-slate-500">Category:</span>
                  <span className="font-semibold text-slate-800">
                    {service.category}
                  </span>
                </div>

                {service.startingPrice && (
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-slate-500">Starting Price:</span>
                    <span className="font-bold text-[#0E8CB5]">
                      {service.startingPrice}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Discovery Call:</span>
                  <span className="font-semibold text-emerald-600">
                    15 mins (Free)
                  </span>
                </div>
              </div>

              <div className="pt-2 space-y-2.5">
                <Button
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  variant="primary"
                  size="md"
                  className="w-full text-center"
                >
                  Get Started With This Service
                </Button>

                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl border border-emerald-500/40 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Quick Chat on WhatsApp
                </a>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 text-center">
                Need to speak with us first? Call{" "}
                <a
                  href={`tel:${siteConfig.phonePrimary}`}
                  className="text-slate-800 font-bold hover:underline"
                >
                  {siteConfig.phonePrimaryFormatted}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTASection />
    </div>
  );
}
