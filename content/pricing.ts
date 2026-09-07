export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  price: string;
  pricePeriod?: string;
  subtitle: string;
  description: string;
  featured: boolean;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
}

export interface ServicePriceGuide {
  service: string;
  startingRange: string;
  unit: string;
  typicalTimeline: string;
  deliverableSummary: string;
}

export const websitePricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter Web Presence",
    badge: "Most Accessible",
    price: "₹3,499*",
    pricePeriod: "one-time",
    subtitle: "Essential, professional online presence for micro-businesses & founders",
    description:
      "A fast, modern, and high-impact web presence engineered to validate your offering, build immediate credibility, and capture customer inquiries.",
    featured: false,
    features: [
      "Modern single-page responsive layout",
      "Mobile-first responsive engineering",
      "Hero section with headline & brand messaging",
      "Core services/offerings showcase",
      "Lead generation contact form",
      "Direct WhatsApp & tap-to-call integration",
      "Standard on-page SEO & meta tags",
      "15 days complimentary post-launch support",
    ],
    ctaLabel: "Get Started at ₹3,499*",
    ctaHref: "/contact?service=website-design-development&tier=starter",
  },
  {
    id: "business",
    name: "Business Growth Suite",
    badge: "Most Popular",
    price: "₹11,999*",
    pricePeriod: "one-time",
    subtitle: "Multi-page bespoke website for expanding businesses & established firms",
    description:
      "A complete digital flagship with custom multi-page architecture, interactive animations, CMS/content flexibility, and conversion-optimized sales funnels.",
    featured: true,
    features: [
      "Up to 5 custom designed pages (Home, About, Services, Case Studies, Contact)",
      "Bespoke UI/UX design with brand color palette",
      "Smooth scroll micro-interactions & GSAP animations",
      "Advanced multi-step contact & estimate form",
      "Google Analytics 4 & Meta Pixel integration",
      "Full Technical SEO package & schema markup",
      "Lightning performance (Lighthouse 90+ target)",
      "30 days priority post-launch support",
    ],
    ctaLabel: "Choose Business Suite",
    ctaHref: "/contact?service=website-design-development&tier=business",
  },
  {
    id: "custom",
    name: "Custom / Web App",
    badge: "Enterprise Grade",
    price: "Custom Quote",
    pricePeriod: "scoped",
    subtitle: "Tailored full-stack applications, SaaS MVPs, and complex platforms",
    description:
      "Engineered from the ground up for high concurrency, custom database models, user dashboards, payment integrations, and dedicated cloud infrastructure.",
    featured: false,
    features: [
      "Custom full-stack architecture (Next.js / Node.js)",
      "Database design & user authentication (PostgreSQL/Supabase)",
      "Client dashboard or administrative portal",
      "Payment gateway & API integrations (Stripe, Razorpay, UPI)",
      "Advanced 3D graphics & interactive data visualization",
      "Enterprise security hardening & CI/CD deployment",
      "Dedicated account manager & sprint planning",
      "60 days dedicated post-launch SLA",
    ],
    ctaLabel: "Request Custom Estimate",
    ctaHref: "/contact?service=web-application-development&tier=custom",
  },
];

export const secondaryServicePrices: ServicePriceGuide[] = [
  {
    service: "Website Design & Development",
    startingRange: "From ₹3,499*",
    unit: "per website",
    typicalTimeline: "3–7 days",
    deliverableSummary: "Responsive site, contact form, SEO setup, mobile optimization",
  },
  {
    service: "Web Application Development",
    startingRange: "From ₹24,999*",
    unit: "per project / MVP",
    typicalTimeline: "2–6 weeks",
    deliverableSummary: "Custom full-stack web app, authentication, database, dashboards",
  },
  {
    service: "Mobile App Development",
    startingRange: "From ₹34,999*",
    unit: "iOS & Android",
    typicalTimeline: "3–8 weeks",
    deliverableSummary: "Cross-platform mobile app, store submission readiness, API backend",
  },
  {
    service: "UI/UX Design",
    startingRange: "From ₹6,999*",
    unit: "per project",
    typicalTimeline: "1–3 weeks",
    deliverableSummary: "Clickable Figma prototypes, design system, user journey maps",
  },
  {
    service: "Branding & Logo Design",
    startingRange: "From ₹3,999*",
    unit: "per brand package",
    typicalTimeline: "5–10 days",
    deliverableSummary: "Logo concepts, color palettes, vector files, brand style guide",
  },
  {
    service: "E-commerce Development",
    startingRange: "From ₹18,999*",
    unit: "per store",
    typicalTimeline: "2–4 weeks",
    deliverableSummary: "Product catalog, cart, checkout, Indian/global payment gateway",
  },
  {
    service: "Digital & Social Media Marketing",
    startingRange: "From ₹8,999*/mo",
    unit: "monthly retainer",
    typicalTimeline: "Ongoing sprints",
    deliverableSummary: "Targeted ad campaigns, creative designs, conversion tracking",
  },
  {
    service: "SEO Package",
    startingRange: "From ₹3,999*/mo",
    unit: "monthly retainer",
    typicalTimeline: "Ongoing optimization",
    deliverableSummary: "Technical fixes, keyword optimization, local search rankings",
  },
  {
    service: "Video Editing",
    startingRange: "From ₹999*",
    unit: "per reel / short",
    typicalTimeline: "24–48 hours",
    deliverableSummary: "Dynamic pacing, kinetic captions, sound design, licensed audio",
  },
  {
    service: "Poster & Graphic Design",
    startingRange: "From ₹799*",
    unit: "per creative",
    typicalTimeline: "24–72 hours",
    deliverableSummary: "High-resolution digital & print-ready social / marketing collateral",
  },
  {
    service: "Maintenance & Support",
    startingRange: "From ₹999*/mo",
    unit: "monthly retainer",
    typicalTimeline: "Continuous monitoring",
    deliverableSummary: "Cloud backups, security updates, bug fixes, uptime assurance",
  },
];

export const pricingFaqs = [
  {
    question: "Why are your websites starting at ₹3,499*?",
    answer:
      "We believe high-quality engineering should be accessible to all businesses. Our starter package provides essential foundational web presence without unnecessary enterprise bloat. All prices are exclusive of 18% GST.",
  },
  {
    question: "Are domain and hosting included in the price?",
    answer:
      "Domain and cloud hosting fees are paid directly to top-tier providers (such as GoDaddy, Namecheap, Vercel, or AWS) so that you retain 100% legal ownership of your digital assets. We guide you through setup or manage it for you.",
  },
  {
    question: "Do you offer milestone-based payment terms?",
    answer:
      "Yes, for mid-to-large projects we offer split milestone payments: typically 50% advance upon project initiation, with the remaining 50% due upon staging review and client approval prior to go-live.",
  },
  {
    question: "Can I upgrade my package later as my business grows?",
    answer:
      "Absolutely. Everything we build is architected modularly. You can start with the ₹3,499* starter tier and smoothly expand to multi-page portals, web applications, or marketing retainers anytime.",
  },
];
