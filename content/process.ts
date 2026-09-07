export interface ProcessStep {
  step: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  deliverable: string;
  iconName: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery Call (Free, 15 minutes)",
    shortDesc: "Understand your business goals, target audience, technical needs, and timeline with no obligation.",
    fullDesc:
      "We begin with an obligation-free 15-minute consultation to map your objectives, understand your brand personality, evaluate your project scope, and establish the most effective path forward.",
    duration: "15 mins",
    deliverable: "Project briefing & discovery notes",
    iconName: "PhoneCall",
  },
  {
    step: 2,
    title: "Proposal & Estimate",
    shortDesc: "Receive a clear, transparent scope of work, milestone breakdown, and pricing with no hidden costs.",
    fullDesc:
      "We prepare a comprehensive proposal outlining the project milestones, deliverables, tech stack recommendations, exact timeline, and clear transparent investment tiers.",
    duration: "24–48 hours",
    deliverable: "Itemized scope & formal proposal",
    iconName: "FileSpreadsheet",
  },
  {
    step: 3,
    title: "Planning & Wireframing",
    shortDesc: "Map out the sitemap, information architecture, user journeys, and structural wireframes.",
    fullDesc:
      "Before applying colors and graphics, we construct the structural framework. We define the user journey, wireframe key page layouts, and align on navigation hierarchy.",
    duration: "2–4 days",
    deliverable: "Sitemap & UX wireframes",
    iconName: "Compass",
  },
  {
    step: 4,
    title: "Design & Visual Prototyping",
    shortDesc: "Craft pixel-perfect visual designs, interactive prototypes, and typography systems.",
    fullDesc:
      "Our design team transforms wireframes into stunning, brand-aligned visual mockups. We apply our metallic/cyan aesthetic, design systems, and responsive layouts for your approval.",
    duration: "3–7 days",
    deliverable: "Interactive Figma prototype",
    iconName: "Palette",
  },
  {
    step: 5,
    title: "Development & Engineering",
    shortDesc: "Turn approved designs into clean, fast, accessible code with modern animations and robust integrations.",
    fullDesc:
      "Using modern technologies like Next.js, React, and Tailwind CSS, we engineer high-performance, SEO-friendly code with progressive 3D elements and smooth micro-interactions.",
    duration: "1–3 weeks",
    deliverable: "Functional staging environment",
    iconName: "Code2",
  },
  {
    step: 6,
    title: "Review & Revisions",
    shortDesc: "Walk through the staging build together and incorporate your collaborative feedback and refinements.",
    fullDesc:
      "We host a walkthrough session, provide you with interactive staging access, and systematically implement feedback and adjustments to make every detail immaculate.",
    duration: "2–5 days",
    deliverable: "Polished candidate build",
    iconName: "CheckCircle2",
  },
  {
    step: 7,
    title: "Testing & QA",
    shortDesc: "Rigorous cross-browser, mobile responsiveness, accessibility, security, and performance testing.",
    fullDesc:
      "Every page is scrutinized across desktop, tablet, and mobile devices on Chrome, Safari, Firefox, and Edge. We run Lighthouse audits, sanitize forms, and optimize Core Web Vitals.",
    duration: "2–3 days",
    deliverable: "QA test report & audit signoff",
    iconName: "ShieldCheck",
  },
  {
    step: 8,
    title: "Launch / Delivery",
    shortDesc: "Seamless deployment to production, domain connection, DNS configuration, and asset handover.",
    fullDesc:
      "We execute the production go-live on enterprise cloud infrastructure (e.g. Vercel / AWS), connect your custom domain, configure SSL, and verify indexing in Google Search Console.",
    duration: "1 day",
    deliverable: "Live website / production release",
    iconName: "Rocket",
  },
  {
    step: 9,
    title: "Post-Launch Support",
    shortDesc: "Complimentary post-launch check-in, performance monitoring, and ongoing maintenance retainers.",
    fullDesc:
      "Our partnership doesn't end at delivery. We provide 15 days of complimentary post-launch monitoring, walkthrough training, and flexible ongoing maintenance packages.",
    duration: "Ongoing",
    deliverable: "Maintenance & ongoing growth",
    iconName: "HeartHandshake",
  },
];
