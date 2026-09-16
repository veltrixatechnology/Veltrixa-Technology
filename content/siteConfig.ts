export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  category: string;
  description: string;
  url: string;
  email: string;
  phonePrimary: string;
  phoneAlternate: string;
  phonePrimaryFormatted: string;
  phoneAlternateFormatted: string;
  phonePrimaryLabel: string;
  phoneAlternateLabel: string;
  workingHours: string;
  whatsappUrl: string;
  consultation: string;
  entryPricing: string;
  gstDisclaimer: string;
  copyright: string;
  navItems: NavItem[];
  socials: {
    linkedin: string;
    instagram: string;
    facebook: string;
    threads: string;
    twitter?: string;
    github?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Veltrixa Technology",
  tagline: "Engineering the Future",
  category: "Digital Agency — Web, App, Design, Marketing & Branding Studio",
  description:
    "Veltrixa Technology is a modern digital agency engineering high-performance websites, custom web & mobile applications, UI/UX designs, and growth-driven marketing systems.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://veltrixatechnology.in").replace(/\/$/, ""),
  email: "veltrixatechnology@gmail.com",
  phonePrimary: "+917204906807",
  phoneAlternate: "+919901310880",
  phonePrimaryFormatted: "+91 72049 06807",
  phoneAlternateFormatted: "+91 99013 10880",
  phonePrimaryLabel: "Number 1",
  phoneAlternateLabel: "Number 2",
  workingHours: "Morning 9:00 AM – Night 10:00 PM IST",
  whatsappUrl: "https://wa.me/917204906807?text=Hello%20Veltrixa%20Technology,%20I'd%20like%20to%20discuss%20a%20project.",
  consultation: "15-minute discovery call (free)",
  entryPricing: "Websites starting at ₹3,499*",
  gstDisclaimer: "*All prices exclusive of GST",
  copyright: `© ${new Date().getFullYear()} Veltrixa Technology. All Rights Reserved.`,
  navItems: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  socials: {
    linkedin: "https://www.linkedin.com/company/veltrixa-technology",
    facebook: "https://www.facebook.com/veltrixatechnology",
    instagram: "https://www.instagram.com/veltrixatechnology",
    threads: "https://www.threads.net/@veltrixatechnology",
    twitter: "https://twitter.com/veltrixatechnology",
  },
};
