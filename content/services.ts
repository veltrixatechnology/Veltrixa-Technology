export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: "Development" | "Design & Creative" | "Growth & Marketing" | "Support";
  shortDescription: string;
  fullDescription: string;
  startingPrice?: string;
  priceNote?: string;
  iconName: string;
  deliverables: string[];
  timeline: string;
  idealFor: string;
  badge?: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "website-development",
    slug: "website-design-development",
    title: "Website Design & Development",
    category: "Development",
    shortDescription:
      "Custom responsive websites, landing pages, business portals, and portfolio platforms engineered for lightning speed and conversion.",
    fullDescription:
      "We design and build bespoke, responsive websites engineered to elevate your brand authority and turn casual visitors into loyal clients. From sleek landing pages to comprehensive corporate web platforms, our builds are modern, SEO-ready, accessible, and optimized for speed across every device.",
    startingPrice: "₹3,499*",
    priceNote: "*All prices exclusive of GST",
    badge: "Popular / Entry Tier",
    iconName: "Globe",
    deliverables: [
      "Custom responsive UI/UX architecture",
      "Mobile-first, lightning-fast web performance",
      "On-page SEO optimization & metadata setup",
      "Interactive contact & lead capture forms",
      "Modern animations & micro-interactions",
      "Free 15-day post-launch technical assistance",
    ],
    timeline: "3–7 business days",
    idealFor: "Businesses of all types, startups, solo founders, clinics, consultancies, and retail brands looking for an authoritative online presence.",
    faqs: [
      {
        question: "What is included in the ₹3,499* starting package?",
        answer:
          "Our entry tier includes a professionally engineered, fully responsive single/multi-section website with modern layout, mobile optimization, contact form integration, social links, and basic SEO configuration. GST is applicable additionally.",
      },
      {
        question: "Can I update content myself once the site is live?",
        answer:
          "Yes! We structure our builds so that copy, media, and contact details can be updated easily, or we can manage updates for you under our ongoing maintenance plans.",
      },
      {
        question: "How long does it take to go live?",
        answer:
          "Typical turnaround for starter to mid-tier business websites is 3 to 7 working days once content and assets are finalized.",
      },
    ],
  },
  {
    id: "web-app-development",
    slug: "web-application-development",
    title: "Web Application Development",
    category: "Development",
    shortDescription:
      "Scalable web applications, custom SaaS MVPs, client portals, and cloud-connected internal management tools.",
    fullDescription:
      "Transform complex business workflows into seamless, intuitive web applications. We build scalable SaaS platforms, authenticated customer dashboards, and internal operations tools using robust modern frameworks like Next.js, Node.js, and cloud databases.",
    iconName: "Layers",
    badge: "Scalable Architecture",
    deliverables: [
      "Full-stack scalable architecture (Next.js / Node.js)",
      "Role-based authentication & database schemas",
      "Real-time data visualization & custom dashboards",
      "RESTful / GraphQL API design and 3rd-party integrations",
      "Strict data validation & security hardening",
      "Automated CI/CD deployment pipelines",
    ],
    timeline: "2–6 weeks",
    idealFor: "Startups launching digital products, growing businesses automating operations, and companies needing secure client portals.",
    faqs: [
      {
        question: "Do you build MVPs for startups?",
        answer:
          "Yes, we specialize in high-velocity MVP builds that allow founders to validate product-market fit quickly without compromising architectural scalability.",
      },
      {
        question: "Which technologies do you use for web apps?",
        answer:
          "We primarily build with TypeScript, Next.js, React, Node.js, PostgreSQL/Supabase, and modern cloud deployment providers like Vercel or AWS.",
      },
    ],
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    category: "Development",
    shortDescription:
      "Cross-platform iOS & Android mobile applications delivering native performance, fluid gestures, and offline readiness.",
    fullDescription:
      "Reach your customers everywhere with high-performance cross-platform mobile apps. We engineer fluid, gesture-driven experiences for both iOS and Android from a single unified codebase, lowering time-to-market and maintenance overhead.",
    iconName: "Smartphone",
    deliverables: [
      "iOS & Android cross-platform builds (React Native / Flutter)",
      "Offline caching and sync capabilities",
      "Push notification systems & deep linking",
      "Secure biometrics & payment gateway integrations",
      "App Store and Google Play Store submission readiness",
    ],
    timeline: "3–8 weeks",
    idealFor: "On-demand services, consumer apps, field staff tools, and brands wanting a direct channel on their customers' home screens.",
    faqs: [
      {
        question: "Will the app work on both iPhone and Android?",
        answer:
          "Yes! We build using high-efficiency cross-platform frameworks so you get a native-feeling experience on both iOS and Android simultaneously.",
      },
    ],
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    category: "Design & Creative",
    shortDescription:
      "User-centric interface design, wireframes, high-fidelity prototypes, and comprehensive design systems in Figma.",
    fullDescription:
      "Great software begins with intuitive design. We conduct user journey mapping, design interactive wireframes, craft pixel-perfect UI prototypes, and establish scalable design systems that eliminate developer guesswork and delight end users.",
    iconName: "Figma",
    deliverables: [
      "UX user flow mapping & interactive wireframing",
      "High-fidelity clickable Figma prototypes",
      "Component libraries & atomic design systems",
      "Micro-interaction & animation specifications",
      "Developer handoff documentation & asset exports",
    ],
    timeline: "1–3 weeks",
    idealFor: "Founders needing prototypes for investor pitches, product teams redesigning interfaces, and web projects requiring meticulous UX.",
    faqs: [
      {
        question: "Do I get full Figma source files?",
        answer:
          "Yes, 100% of the Figma files, design tokens, icons, and components belong to you upon project handover.",
      },
    ],
  },
  {
    id: "branding-logo-design",
    slug: "branding-logo-design",
    title: "Branding & Logo Design",
    category: "Design & Creative",
    shortDescription:
      "Distinctive visual identities, memorable logos, typography systems, and brand guidelines that make your company stand out.",
    fullDescription:
      "Carve an unforgettable presence in your industry with a cohesive brand identity. We craft logos, color palettes, typography rules, and comprehensive style guides that articulate your vision and command respect across every touchpoint.",
    startingPrice: "₹3,999*",
    priceNote: "*All prices exclusive of GST",
    iconName: "Palette",
    deliverables: [
      "Original logo design concepts & iterative revisions",
      "Primary, secondary, and monochrome logo variants",
      "Curated color palette & typography pairings",
      "Comprehensive Brand Style Guide PDF",
      "Print and digital vector formats (SVG, EPS, PNG, PDF)",
    ],
    timeline: "5–10 business days",
    idealFor: "New startups creating their identity, established companies rebranding, and brands launching premium product lines.",
    faqs: [
      {
        question: "How many logo concepts do you present?",
        answer:
          "We typically develop 2 to 3 distinct creative directions for exploration, then refine the chosen direction through collaborative feedback rounds.",
      },
    ],
  },
  {
    id: "ecommerce-development",
    slug: "ecommerce-development",
    title: "E-commerce Development",
    category: "Development",
    shortDescription:
      "High-converting online stores, automated inventories, multi-currency checkout, and secure payment integrations.",
    fullDescription:
      "Sell products and digital goods seamlessly with an online store built for conversion. We engineer high-speed product catalogs, friction-free checkout flows, automated order notifications, and integration with leading Indian and international payment gateways.",
    iconName: "ShoppingBag",
    deliverables: [
      "Dynamic catalog & product variant management",
      "Frictionless cart & 1-page checkout flow",
      "Payment gateway integration (Razorpay, Stripe, Cashfree, UPI)",
      "Automated order tracking & email notifications",
      "Inventory alerts & customer account portal",
    ],
    timeline: "2–4 weeks",
    idealFor: "D2C brands, boutique retailers, wholesalers, and manufacturers expanding into direct online sales.",
    faqs: [
      {
        question: "Can you integrate UPI and Indian payment gateways?",
        answer:
          "Yes, we natively integrate Razorpay, Cashfree, PhonePe, and Stripe for seamless UPI, credit/debit card, and netbanking transactions.",
      },
    ],
  },
  {
    id: "digital-marketing",
    slug: "digital-social-media-marketing",
    title: "Digital & Social Media Marketing",
    category: "Growth & Marketing",
    shortDescription:
      "Targeted ad campaigns, data-backed social media growth, lead-generation funnels, and creative content strategy.",
    fullDescription:
      "Acquire high-intent customers predictably. We design, launch, and optimize high-ROI advertising campaigns across Meta (Instagram & Facebook), Google Ads, and LinkedIn, paired with systematic content strategy to build sustained brand momentum.",
    iconName: "TrendingUp",
    deliverables: [
      "Paid advertising strategy & budget allocation plan",
      "High-converting ad copy & custom visual creatives",
      "Precise demographic, geographic & lookalike audience targeting",
      "Full conversion tracking (Meta Pixel, GA4, CAPI)",
      "Weekly performance reports & iterative optimizations",
    ],
    timeline: "Monthly retainer / Campaign sprints",
    idealFor: "Businesses seeking predictable client inquiries, e-commerce stores wanting ROAS, and service providers wanting localized leads.",
    faqs: [
      {
        question: "Do you handle ad creative and copywriting?",
        answer:
          "Yes, our end-to-end service covers creative design, video clips, copywriting, audience targeting, and campaign monitoring.",
      },
    ],
  },
  {
    id: "seo-package",
    slug: "seo-package",
    title: "SEO Package",
    category: "Growth & Marketing",
    shortDescription:
      "Technical audits, keyword strategy, on-page optimization, and local search dominance to bring organic traffic.",
    fullDescription:
      "Rank at the top of Google when prospective customers search for your solutions. Our comprehensive SEO services address technical architecture, Core Web Vitals, semantic schema markup, high-intent keyword positioning, and local Google Business Profile optimization.",
    startingPrice: "₹3,999*/mo",
    priceNote: "*All prices exclusive of GST",
    iconName: "Search",
    deliverables: [
      "In-depth technical SEO audit & error remediation",
      "Competitor keyword research & search intent clustering",
      "Meta title, description, schema markup & internal linking",
      "Core Web Vitals & mobile crawlability optimization",
      "Google Search Console & Google Business Profile setup",
    ],
    timeline: "Monthly optimization packages",
    idealFor: "Companies looking for sustainable long-term organic customer acquisition and local market leadership.",
    faqs: [
      {
        question: "How long does SEO take to produce measurable results?",
        answer:
          "Technical fixes and indexing improvements typically register within 2 to 4 weeks, with significant organic keyword movement and traffic compounding over 3 to 6 months.",
      },
    ],
  },
  {
    id: "video-editing",
    slug: "video-editing",
    title: "Video Editing",
    category: "Design & Creative",
    shortDescription:
      "High-retention social reels, YouTube shorts, promotional commercials, and polished corporate videos.",
    fullDescription:
      "Stop scrollers in their tracks with dynamic, high-retention video content. We transform raw footage into captivating social reels, YouTube shorts, brand films, and promotional product showcases with motion graphics, sound design, and kinetic typography.",
    iconName: "Video",
    deliverables: [
      "High-retention 9:16 reels/shorts & 16:9 YouTube/web formats",
      "Kinetic captions, sound design & licensed audio",
      "Color grading & dynamic pacing",
      "Motion graphics & branded intros/outros",
      "Fast turnaround for recurring social calendars",
    ],
    timeline: "24–72 hour turnaround per video",
    idealFor: "Creators, brands marketing on Instagram/TikTok/YouTube, and businesses needing punchy product demos.",
    faqs: [
      {
        question: "Can you edit raw smartphone footage?",
        answer:
          "Absolutely. We enhance lighting, color, audio clarity, and pacing so even phone recordings look polished and professional.",
      },
    ],
  },
  {
    id: "poster-graphic-design",
    slug: "poster-graphic-design",
    title: "Poster & Graphic Design",
    category: "Design & Creative",
    shortDescription:
      "Eye-catching digital posters, social media banners, event flyers, brochures, and marketing collateral.",
    fullDescription:
      "Communicate your message with bold, purposeful visual design. We craft promotional posters, trade show banners, digital flyers, pitch decks, and social media creative bundles aligned meticulously with your brand identity.",
    iconName: "Image",
    deliverables: [
      "High-resolution digital & print-ready posters (300 DPI)",
      "Social media post & story template bundles",
      "Corporate flyers, brochures, and one-pagers",
      "Pitch deck & presentation slide styling",
      "Full source files in vector / editable format",
    ],
    timeline: "2–4 business days",
    idealFor: "Events, product launches, retail promotions, conference exhibitors, and daily social media marketing.",
    faqs: [
      {
        question: "Are files ready for commercial printing?",
        answer:
          "Yes, we provide CMYK, 300 DPI print-ready PDFs with proper bleed margins alongside RGB versions for digital usage.",
      },
    ],
  },
  {
    id: "maintenance-support",
    slug: "maintenance-support",
    title: "Maintenance & Support",
    category: "Support",
    shortDescription:
      "Proactive security patches, performance monitoring, continuous backups, and dedicated on-demand technical help.",
    fullDescription:
      "Ensure your digital infrastructure remains secure, rapid, and always online. Our maintenance plans provide regular software updates, uptime monitoring, security audits, automated cloud backups, and on-call developer support for instant fixes.",
    startingPrice: "₹999*/mo",
    priceNote: "*All prices exclusive of GST",
    iconName: "ShieldCheck",
    deliverables: [
      "24/7 uptime & automated performance monitoring",
      "Weekly/monthly cloud backups & disaster recovery setup",
      "Security patches, dependency updates & SSL renewals",
      "Content updates, bug fixing & feature tweaks",
      "Dedicated priority WhatsApp & email support channel",
    ],
    timeline: "Continuous monthly / annual retainer",
    idealFor: "Any business with an active website or application that cannot afford downtime, security vulnerabilities, or outdated content.",
    faqs: [
      {
        question: "Can you maintain a website that wasn't built by Veltrixa?",
        answer:
          "Yes, we can conduct an initial security and code audit of your existing website or application and transition it into our ongoing support workflow.",
      },
    ],
  },
];
