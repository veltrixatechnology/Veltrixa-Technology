import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy | Veltrixa Technology",
  description:
    "Privacy Policy for Veltrixa Technology detailing data collection via discovery forms, security standards, and client rights.",
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "September 2026";

  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#F7F9FC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0E8CB5]">
              Legal & Compliance
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0F172A] font-heading mt-1">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-600 mt-2">
              Last updated: {lastUpdated} · Veltrixa Technology
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] font-heading">
              1. Information We Collect
            </h2>
            <p>
              When you submit an enquiry, request an estimate, or book a free discovery call on the Veltrixa Technology website, we collect personal information you explicitly provide:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Full Name and Company Name</li>
              <li>Email address and telephone / WhatsApp numbers</li>
              <li>Project requirements, scope notes, and budget ranges</li>
              <li>Preferred dates and time slots for discovery calls</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] font-heading">
              2. How We Use Your Data
            </h2>
            <p>
              The information collected is used solely for legitimate business purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Preparing customized proposals, estimates, and architecture reviews</li>
              <li>Contacting you regarding your scheduled discovery call</li>
              <li>Delivering contracted design, software engineering, and marketing services</li>
              <li>We <strong>never</strong> sell, rent, or trade your personal or project data to third-party advertisers.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] font-heading">
              3. Analytics & Technical Logs
            </h2>
            <p>
              We utilize privacy-compliant website analytics to measure session duration, browser type, and user interactions to continually optimize website performance and Core Web Vitals.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] font-heading">
              4. Contact Regarding Privacy
            </h2>
            <p>
              For questions regarding your data or to request removal, please contact our data coordinator at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[#0E8CB5] font-semibold underline"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </section>

          <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
            <Link href="/" className="hover:text-[#0E8CB5] transition-colors">
              ← Return to Home
            </Link>
            <Link href="/terms-of-service" className="hover:text-[#0E8CB5] transition-colors">
              Terms of Service →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
