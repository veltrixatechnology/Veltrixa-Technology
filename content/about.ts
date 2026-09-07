export interface ValueItem {
  title: string;
  description: string;
  iconName: string;
}

export const aboutData = {
  headline: "Engineering the Future of Digital Experiences",
  subheadline:
    "We are a next-generation digital studio combining precision software engineering, high-impact aesthetic design, and revenue-focused marketing systems.",
  story: [
    "At Veltrixa Technology, we bridge the gap between visionary ambition and technical execution. Born from a desire to make cutting-edge digital craft accessible, we engineer web platforms, scalable applications, and distinctive brand identities for forward-thinking businesses across the globe.",
    "Our design language reflects our brand DNA: modern, technical, and light-forward, accented with metallic chrome precision and vibrant cyan energy. We believe every enterprise—from an ambitious local business taking its first digital step to an established company scaling complex operations—deserves digital assets that command authority.",
    "We don't believe in boilerplate shortcuts or opaque pricing. With website solutions starting transparently at ₹3,499* and comprehensive consulting from day one, we build enduring partnerships grounded in speed, reliability, and measurable outcomes.",
  ],
  stats: [
    { label: "Commitment to Speed", value: "<2.5s LCP" },
    { label: "Starting Web Presence", value: "₹3,499*" },
    { label: "Discovery Consultation", value: "100% Free" },
    { label: "Tech Architecture", value: "Next.js 14+" },
  ],
  values: [
    {
      title: "Engineered for Performance",
      description:
        "Every line of code is optimized for rapid load times, smooth framerates, high SEO scores, and effortless scalability across all devices.",
      iconName: "Cpu",
    },
    {
      title: "Design with Purpose",
      description:
        "Aesthetics must drive function. We create clean, intuitive interfaces that guide users naturally toward conversion and long-term engagement.",
      iconName: "Sparkles",
    },
    {
      title: "Radical Transparency",
      description:
        "Clear pricing, detailed proposals, defined milestones, and direct communication. No hidden fees, no technical jargon barrier.",
      iconName: "Eye",
    },
    {
      title: "End-to-End Partnership",
      description:
        "From the initial 15-minute discovery call through post-launch maintenance, we serve as your proactive technical co-pilot.",
      iconName: "ShieldCheck",
    },
  ] as ValueItem[],
  trustBadges: [
    "Full-Stack Web & App Expertise",
    "Solutions for Every Business Type",
    "Light-Forward Modern Aesthetic",
    "Direct WhatsApp & Phone Support",
    "Verified Performance Benchmarks",
  ],
};
