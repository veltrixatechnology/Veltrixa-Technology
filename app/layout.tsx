import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/content/siteConfig";

export const viewport: Viewport = {
  themeColor: "#05070D",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Veltrixa Technology | Engineering the Future",
    template: "%s | Veltrixa Technology",
  },
  description:
    "Veltrixa Technology is a premier digital agency engineering high-performance websites, custom web & mobile applications, UI/UX designs, and growth marketing. Websites starting at ₹3,499*.",
  keywords: [
    "Veltrixa Technology",
    "Veltrixa",
    "Veltrixa Tech",
    "Veltrixa Technology India",
    "Digital Agency",
    "Web Development",
    "Website Starting at ₹3499",
    "Mobile App Development",
    "UI UX Design Studio",
    "Branding and Logo Design",
    "Digital Marketing Agency",
    "SEO Services",
    "Next.js Development Agency",
  ],
  authors: [{ name: "Veltrixa Technology", url: siteConfig.url }],
  creator: "Veltrixa Technology",
  publisher: "Veltrixa Technology",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Veltrixa Technology | Engineering the Future",
    description:
      "Modern digital studio engineering websites, custom apps, and brand identities. Websites starting at ₹3,499*. Free 15-minute discovery consultation.",
    siteName: "Veltrixa Technology",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Veltrixa Technology — Engineering the Future",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veltrixa Technology | Engineering the Future",
    description:
      "Modern digital studio engineering websites, custom apps, and brand identities. Websites starting at ₹3,499*.",
    images: ["/og-image.png"],
    creator: "@veltrixa",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Comprehensive Schema.org JSON-LD graph (WebSite + ProfessionalService)
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: "Veltrixa Technology",
        alternateName: ["Veltrixa", "Veltrixa Tech", "Veltrixa Technology Studio"],
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#organization`,
        name: "Veltrixa Technology",
        legalName: "Veltrixa Technology",
        alternateName: "Veltrixa",
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo-dark.png`,
        image: `${siteConfig.url}/og-image.png`,
        description: siteConfig.description,
        email: siteConfig.email,
        telephone: [siteConfig.phonePrimaryFormatted, siteConfig.phoneAlternateFormatted],
        priceRange: "₹3,499 - ₹1,50,000",
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:00",
            closes: "22:00",
          },
        ],
        sameAs: [
          siteConfig.socials.linkedin,
          siteConfig.socials.facebook,
          siteConfig.socials.instagram,
          siteConfig.socials.threads,
          siteConfig.socials.twitter,
        ].filter(Boolean),
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: siteConfig.phonePrimaryFormatted,
            contactType: "customer service",
            availableLanguage: ["English", "Hindi"],
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#F7F9FC] text-[#0F172A] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
