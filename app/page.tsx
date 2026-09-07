import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/ui/Marquee";
import { TrustStats } from "@/components/sections/TrustStats";
import { ServicesCarousel } from "@/components/sections/ServicesCarousel";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { PricingHighlight } from "@/components/sections/PricingHighlight";
import { AboutSection } from "@/components/sections/AboutSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      {/* 1. Dark Hero Section with 3D Monogram */}
      <Hero />

      {/* 2. Brand Marquee Accent */}
      <Marquee />

      {/* 3. Light Qualitative Trust / Stats Strip */}
      <TrustStats />

      {/* 4. Light-forward Services Showcase (All 11 Services) */}
      <ServicesCarousel />

      {/* 5. 9-Stage Process Roadmap */}
      <ProcessTimeline />

      {/* 6. High-Contrast Dark Pricing Highlight (Starting at ₹3,499*) */}
      <PricingHighlight />

      {/* 7. Light-forward Agency Philosophy & Values */}
      <AboutSection />

      {/* 8. Conversion Dark CTA Band */}
      <CTASection />
    </>
  );
}
