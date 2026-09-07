"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { servicesData } from "@/content/services";
import { siteConfig } from "@/content/siteConfig";
import { Button } from "@/components/ui/Button";
import { BookingModal } from "@/components/ui/BookingModal";
import {
  Phone,
  Mail,
  MessageSquare,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Calendar,
  Send,
} from "lucide-react";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [bookingOpen, setBookingOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      service: preselectedService || servicesData[0].title,
      budget: "₹5,000 – ₹25,000",
      preferredTime: "Morning (10 AM - 1 PM)",
    },
  });

  useEffect(() => {
    if (preselectedService) {
      const match = servicesData.find(
        (s) =>
          s.slug === preselectedService ||
          s.title.toLowerCase() === preselectedService.toLowerCase()
      );
      if (match) {
        setValue("service", match.title);
      }
    }
  }, [preselectedService, setValue]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Failed to submit form. Please try again.");
      }

      setIsSubmitted(true);
      reset();
    } catch (err: any) {
      setErrorMessage(
        err.message || "An unexpected error occurred. Please contact us directly via phone or WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Form */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm relative">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#0F172A] font-heading">
              Request a Custom Project Estimate
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Fill out your project specifications. We respond within 2 hours during business hours.
            </p>
          </div>

          {isSubmitted ? (
            <div className="py-12 text-center space-y-5 animate-fade-in">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] font-heading">
                Enquiry Received!
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                Thank you for reaching out to <strong>Veltrixa Technology</strong>. Our engineering leads are reviewing your project requirements and will respond to your email and phone promptly.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" /> Message Us on WhatsApp
                </a>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Honeypot field */}
              <input
                type="text"
                {...register("botField")}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    {...register("fullName")}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:border-[#17B4E8] focus:ring-2 focus:ring-[#17B4E8]/20 transition-all outline-none"
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Company / Organization (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Studio"
                    {...register("companyName")}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:border-[#17B4E8] focus:ring-2 focus:ring-[#17B4E8]/20 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    {...register("phone")}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:border-[#17B4E8] focus:ring-2 focus:ring-[#17B4E8]/20 transition-all outline-none"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    {...register("email")}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:border-[#17B4E8] focus:ring-2 focus:ring-[#17B4E8]/20 transition-all outline-none"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Service Interested In */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                  Service Interested In <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("service")}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:border-[#17B4E8] focus:ring-2 focus:ring-[#17B4E8]/20 transition-all outline-none bg-white"
                >
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title} {s.startingPrice ? `(${s.startingPrice})` : ""}
                    </option>
                  ))}
                  <option value="Not sure yet — Need Guidance">
                    Not sure yet — Need Guidance
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Budget */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Estimated Budget Range (Optional)
                  </label>
                  <select
                    {...register("budget")}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:border-[#17B4E8] focus:ring-2 focus:ring-[#17B4E8]/20 transition-all outline-none bg-white"
                  >
                    <option value="Under ₹10,000 (Starter Tier)">
                      Under ₹10,000 (Starter Tier)
                    </option>
                    <option value="₹10,000 – ₹25,000 (Business Tier)">
                      ₹10,000 – ₹25,000 (Business Tier)
                    </option>
                    <option value="₹25,000 – ₹60,000 (Web App / E-commerce)">
                      ₹25,000 – ₹60,000 (Web App / E-commerce)
                    </option>
                    <option value="₹60,000+ (Custom / Mobile App)">
                      ₹60,000+ (Custom / Mobile App)
                    </option>
                    <option value="Monthly Retainer (SEO/Marketing)">
                      Monthly Retainer (SEO/Marketing)
                    </option>
                  </select>
                </div>

                {/* Preferred Contact Time */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Preferred Callback Time (Optional)
                  </label>
                  <select
                    {...register("preferredTime")}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:border-[#17B4E8] focus:ring-2 focus:ring-[#17B4E8]/20 transition-all outline-none bg-white"
                  >
                    <option value="Morning (10:00 AM – 01:00 PM IST)">
                      Morning (10:00 AM – 01:00 PM IST)
                    </option>
                    <option value="Afternoon (01:00 PM – 05:00 PM IST)">
                      Afternoon (01:00 PM – 05:00 PM IST)
                    </option>
                    <option value="Evening (05:00 PM – 08:00 PM IST)">
                      Evening (05:00 PM – 08:00 PM IST)
                    </option>
                    <option value="Anytime during business hours">
                      Anytime during business hours
                    </option>
                  </select>
                </div>
              </div>

              {/* Reason for Enquiry / Project Details */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                  Reason for Enquiry / Project Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us what you need help with (goals, key features, reference links, deadline)..."
                  {...register("details")}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:border-[#17B4E8] focus:ring-2 focus:ring-[#17B4E8]/20 transition-all outline-none resize-none"
                ></textarea>
                {errors.details && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.details.message}
                  </p>
                )}
              </div>

              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit Action */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full justify-center text-base"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting Project Scope...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Submit Project Enquiry
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Direct Contact Cards & Scheduling */}
        <div className="lg:col-span-5 space-y-6">
          {/* Free Discovery Call Card */}
          <div className="bg-[#05070D] text-white p-7 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-radial-glow opacity-30 blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#10141F] border border-[#17B4E8]/40 text-[#33E1FF] flex items-center justify-center shadow-glow-sm">
                <Calendar className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold font-heading">
                Prefer a Quick Conversation?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Book a free 15-minute discovery consultation. We’ll discuss your architecture, provide preliminary feasibility feedback, and scope your timeline.
              </p>

              <button
                onClick={() => setBookingOpen(true)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#17B4E8] to-[#33E1FF] text-[#05070D] font-bold text-xs uppercase tracking-wider hover:brightness-105 transition-all shadow-glow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" /> Book Free 15-min Discovery Call
              </button>
            </div>
          </div>

          {/* Direct Phone & Email Shortcuts */}
          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-[#0F172A] font-heading">
              Direct Communication Channels
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <a
                href={`tel:${siteConfig.phonePrimary}`}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold text-slate-500 block">
                    Number 1 (Call & WhatsApp)
                  </span>
                  <span className="text-sm font-bold text-[#0F172A] group-hover:text-[#17B4E8] transition-colors">
                    {siteConfig.phonePrimaryFormatted}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${siteConfig.phoneAlternate}`}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold text-slate-500 block">
                    Number 2
                  </span>
                  <span className="text-sm font-bold text-[#0F172A] group-hover:text-[#17B4E8] transition-colors">
                    {siteConfig.phoneAlternateFormatted}
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold text-slate-500 block">
                    Inquiries & RFPs
                  </span>
                  <span className="text-sm font-bold text-[#0F172A] group-hover:text-[#17B4E8] transition-colors break-all">
                    {siteConfig.email}
                  </span>
                </div>
              </a>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors group border border-emerald-200/80"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold text-emerald-800 block">
                    Instant WhatsApp Chat
                  </span>
                  <span className="text-xs text-emerald-900 font-medium">
                    Start direct chat with our technical lead →
                  </span>
                </div>
              </a>
            </div>

            {/* Hours / Availability Note */}
            <div className="pt-4 border-t border-slate-100 flex items-start gap-2.5 text-xs text-slate-500">
              <Clock className="w-4 h-4 text-[#17B4E8] shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800 block">Operating Hours:</strong>
                Monday – Saturday: Morning 9:00 AM – Night 10:00 PM IST. Direct developer assistance.
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#F7F9FC]">
      {/* Hero Header */}
      <section className="py-16 sm:py-20 bg-[#05070D] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-grid opacity-25 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-radial-glow opacity-30 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10141F] border border-[#17B4E8]/40 text-xs font-semibold text-[#33E1FF] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#17B4E8]" />
            Direct Technical Engagement
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight">
            Let’s Build Something <span className="text-chrome-gradient">Extraordinary</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            Request an itemized project estimate or reserve an obligation-free 15-minute discovery call directly with our technical team.
          </p>
        </div>
      </section>

      {/* Main Two-Column Contact Section wrapped in Suspense */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense
          fallback={
            <div className="p-12 text-center text-slate-500 font-medium">
              Loading inquiry form...
            </div>
          }
        >
          <ContactFormInner />
        </Suspense>
      </section>
    </div>
  );
}
