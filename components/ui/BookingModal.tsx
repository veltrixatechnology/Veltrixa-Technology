"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingFormSchema, type BookingFormData } from "@/lib/validations";
import { servicesData } from "@/content/services";
import { siteConfig } from "@/content/siteConfig";
import { Modal } from "./Modal";
import { Button } from "./Button";
import {
  Calendar,
  Clock,
  CheckCircle,
  Phone,
  MessageSquare,
  Mail,
  Loader2,
  Sparkles,
} from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

const TIME_SLOTS = [
  "09:30 AM – 09:45 AM IST (Morning)",
  "11:30 AM – 11:45 AM IST (Morning)",
  "02:00 PM – 02:15 PM IST (Afternoon)",
  "04:30 PM – 04:45 PM IST (Evening)",
  "06:30 PM – 06:45 PM IST (Evening)",
  "08:00 PM – 08:15 PM IST (Night)",
  "09:15 PM – 09:30 PM IST (Night)",
];

export function BookingModal({
  isOpen,
  onClose,
  defaultService,
}: BookingModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      serviceInterest: defaultService || servicesData[0].title,
      preferredSlot: TIME_SLOTS[1],
      preferredDate: new Date(Date.now() + 86400000).toISOString().split("T")[0],
    },
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          service: `[15-min Call] ${data.serviceInterest}`,
          details: `Discovery Call Booking Request:
- Preferred Date: ${data.preferredDate}
- Preferred Time Slot: ${data.preferredSlot}
- Additional Notes: ${data.briefNote || "None provided"}`,
          botField: data.botField,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to reserve your slot. Please try again or WhatsApp us directly.");
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setSubmitError(err.message || "An error occurred while booking. Please try WhatsApp or calling.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onClose();
    if (isSubmitted) {
      setTimeout(() => {
        setIsSubmitted(false);
        reset();
      }, 300);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Book a Free 15-Minute Discovery Call"
      subtitle="Speak directly with our technical leads. No sales pressure, 100% actionable guidance."
      maxWidth="lg"
    >
      {isSubmitted ? (
        <div className="py-8 text-center space-y-5">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle className="w-9 h-9" />
          </div>
          <div>
            <h4 className="text-2xl font-bold text-[#0F172A] font-heading">
              Discovery Call Confirmed!
            </h4>
            <p className="text-slate-600 max-w-md mx-auto mt-2 text-sm leading-relaxed">
              We have received your requested date & time. A technical consultant from
              Veltrixa Technology will email you the calendar invite and Google Meet link shortly.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left max-w-md mx-auto space-y-2 text-sm">
            <p className="font-semibold text-slate-800 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#17B4E8]" /> Need immediate assistance?
            </p>
            <p className="text-slate-500 text-xs">
              Feel free to reach us instantly via WhatsApp or direct call:
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-xs font-semibold hover:bg-emerald-100 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Direct
              </a>
              <a
                href={`tel:${siteConfig.phonePrimary}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-lg text-xs font-semibold hover:bg-blue-100 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" /> Number 1: {siteConfig.phonePrimaryFormatted}
              </a>
              <a
                href={`tel:${siteConfig.phoneAlternate}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-lg text-xs font-semibold hover:bg-blue-100 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" /> Number 2: {siteConfig.phoneAlternateFormatted}
              </a>
            </div>
          </div>

          <Button variant="primary" onClick={handleClose} className="mt-4">
            Done
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Honeypot */}
          <input
            type="text"
            {...register("botField")}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Alex Morgan"
                {...register("fullName")}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:border-[#17B4E8] focus:ring-2 focus:ring-[#17B4E8]/20 transition-all outline-none"
              />
              {errors.fullName && (
                <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Work Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                {...register("email")}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:border-[#17B4E8] focus:ring-2 focus:ring-[#17B4E8]/20 transition-all outline-none"
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Mobile / WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                {...register("phone")}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:border-[#17B4E8] focus:ring-2 focus:ring-[#17B4E8]/20 transition-all outline-none"
              />
              {errors.phone && (
                <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* Service */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Area of Interest <span className="text-red-500">*</span>
              </label>
              <select
                {...register("serviceInterest")}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:border-[#17B4E8] focus:ring-2 focus:ring-[#17B4E8]/20 transition-all outline-none bg-white"
              >
                {servicesData.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Not Sure / General Consultation">
                  Not Sure / General Consultation
                </option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Preferred Date */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Preferred Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  {...register("preferredDate")}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:border-[#17B4E8] focus:ring-2 focus:ring-[#17B4E8]/20 transition-all outline-none"
                />
              </div>
              {errors.preferredDate && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.preferredDate.message}
                </p>
              )}
            </div>

            {/* Preferred Slot */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Time Window <span className="text-red-500">*</span>
              </label>
              <select
                {...register("preferredSlot")}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:border-[#17B4E8] focus:ring-2 focus:ring-[#17B4E8]/20 transition-all outline-none bg-white"
              >
                {TIME_SLOTS.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Brief Note */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Project Summary / Questions (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="Tell us what you'd like to discuss or any questions you have..."
              {...register("briefNote")}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:border-[#17B4E8] focus:ring-2 focus:ring-[#17B4E8]/20 transition-all outline-none resize-none"
            ></textarea>
          </div>

          {submitError && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600">
              {submitError}
            </div>
          )}

          {/* Submit button & Quick contacts */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#17B4E8]" /> 15 mins · 100% Free · No obligation
            </div>
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Reserving Call...
                </>
              ) : (
                "Confirm Free Discovery Call"
              )}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}
