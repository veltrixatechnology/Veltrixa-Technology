import type { Metadata } from "next";
import { siteConfig } from "@/content/siteConfig";

export const metadata: Metadata = {
  title: "Contact Us & Book Free Discovery Call | Veltrixa Technology",
  description:
    "Get in touch with Veltrixa Technology. Request an itemized project estimate, book a free 15-minute discovery consultation, or connect directly with our engineering team.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact Us & Book Free Discovery Call | Veltrixa Technology",
    description:
      "Request an itemized project estimate or reserve an obligation-free 15-minute discovery call directly with our technical team.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
