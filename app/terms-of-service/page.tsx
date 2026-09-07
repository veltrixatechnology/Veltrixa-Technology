import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/siteConfig";

export const metadata: Metadata = {
  title: "Terms of Service | Veltrixa Technology",
  description:
    "Terms of Service governing project scopes, estimates, deliverables, intellectual property, and payment terms for Veltrixa Technology.",
  alternates: {
    canonical: "https://veltrixa.com/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  const lastUpdated = "September 2026";

  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#F7F9FC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0E8CB5]">
              Legal & Service Agreement
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0F172A] font-heading mt-1">
              Terms of Service
            </h1>
            <p className="text-xs text-slate-600 mt-2">
              Last updated: {lastUpdated} · Veltrixa Technology
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] font-heading">
              1. Engagement & Estimates
            </h2>
            <p>
              All quotations, initial estimates, and free 15-minute consultations provided by Veltrixa Technology are exploratory until a formal Scope of Work (SOW) or Statement of Agreement is executed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] font-heading">
              2. Pricing & Taxes
            </h2>
            <p>
              Published package pricing (including our entry tier of websites starting at ₹3,499) represents base software design and development fees. All prices are explicitly <strong>exclusive of applicable GST (18%)</strong>. Third-party vendor expenses (such as domain registration, cloud hosting, and third-party API subscriptions) are paid directly by the client unless otherwise contracted.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] font-heading">
              3. Intellectual Property Ownership
            </h2>
            <p>
              Upon receipt of full final payment for completed deliverables, 100% of the custom design source files, codebases, and media assets are transferred to the client. Veltrixa Technology retains the right to showcase non-confidential deliverables in our professional portfolio.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] font-heading">
              4. Revisions & Approvals
            </h2>
            <p>
              Each project stage incorporates structured client review and revisions as specified in the agreed project proposal. Requests outside the initial agreed functional scope are quoted separately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] font-heading">
              5. Governing Contact
            </h2>
            <p>
              For legal notices or contract inquiries, contact{" "}
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
            <Link href="/privacy-policy" className="hover:text-[#0E8CB5] transition-colors">
              Privacy Policy →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
