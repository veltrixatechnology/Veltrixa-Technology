import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Name is too long"),
  companyName: z.string().max(100).optional().or(z.literal("")),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[+0-9\s-()]+$/, "Please enter a valid phone format"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  details: z
    .string()
    .min(10, "Please describe your project or enquiry in at least 10 characters")
    .max(2500, "Project description is too long"),
  budget: z.string().optional().or(z.literal("")),
  preferredTime: z.string().optional().or(z.literal("")),
  // Honeypot field to block automated spam bots
  botField: z.string().max(0, "Spam detected").optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const bookingFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .regex(/^[+0-9\s-()]+$/, "Please enter a valid phone format"),
  serviceInterest: z.string().min(1, "Please select an area of interest"),
  preferredDate: z.string().min(1, "Please pick a preferred date"),
  preferredSlot: z.string().min(1, "Please pick a preferred time slot"),
  briefNote: z.string().optional().or(z.literal("")),
  botField: z.string().max(0, "Spam detected").optional().or(z.literal("")),
});

export type BookingFormData = z.infer<typeof bookingFormSchema>;
