import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Zod Validation
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Invalid form data provided",
          details: validationResult.error.format(),
        },
        { status: 400 }
      );
    }

    const {
      fullName,
      companyName,
      phone,
      email,
      service,
      details,
      budget,
      preferredTime,
      botField,
    } = validationResult.data;

    // 2. Honeypot check — bots that fill hidden botField get dropped
    if (botField && botField.length > 0) {
      return NextResponse.json(
        { error: "Spam submission rejected" },
        { status: 400 }
      );
    }

    // 3. Prepare structured lead data
    const leadPayload = {
      id: `lead_${Date.now()}`,
      timestamp: new Date().toISOString(),
      destination: "veltrixatechnology@gmail.com",
      client: {
        fullName,
        companyName: companyName || "N/A",
        phone,
        email,
      },
      project: {
        service,
        details,
        budget: budget || "Not specified",
        preferredTime: preferredTime || "Not specified",
      },
    };

    // Print to terminal/server console
    console.log("\n=======================================================");
    console.log("🚀 NEW VELTRIXA LEAD / DISCOVERY CALL RECEIVED!");
    console.log("=======================================================");
    console.log(JSON.stringify(leadPayload, null, 2));
    console.log("=======================================================\n");

    // 4. Save to local leads backup file (leads.json)
    try {
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const leadsFilePath = path.join(dataDir, "leads.json");
      let existingLeads: any[] = [];
      if (fs.existsSync(leadsFilePath)) {
        try {
          existingLeads = JSON.parse(fs.readFileSync(leadsFilePath, "utf-8"));
        } catch {
          existingLeads = [];
        }
      }
      existingLeads.unshift(leadPayload);
      fs.writeFileSync(leadsFilePath, JSON.stringify(existingLeads, null, 2));
    } catch (saveErr) {
      console.warn("Could not append to data/leads.json:", saveErr);
    }

    // 5. Send via Resend Email (if RESEND_API_KEY is configured in .env)
    if (process.env.RESEND_API_KEY) {
      try {
        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Veltrixa Leads <onboarding@resend.dev>",
            to: ["veltrixatechnology@gmail.com"],
            reply_to: email,
            subject: `[New Lead] ${service} - ${fullName}`,
            html: `
              <h2>New Lead / Discovery Call Request</h2>
              <p><strong>Name:</strong> ${fullName}</p>
              <p><strong>Company:</strong> ${companyName || "N/A"}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Service:</strong> ${service}</p>
              <p><strong>Budget:</strong> ${budget || "N/A"}</p>
              <p><strong>Preferred Callback Time:</strong> ${preferredTime || "N/A"}</p>
              <hr />
              <h3>Details:</h3>
              <p>${details.replace(/\n/g, "<br/>")}</p>
            `,
          }),
        });

        if (!emailRes.ok) {
          console.warn("Resend API error:", await emailRes.text());
        }
      } catch (emailErr) {
        console.error("Failed to send email via Resend:", emailErr);
      }
    }

    // 6. Send to optional Webhook (Discord / Slack / Make / Zapier)
    if (process.env.NOTIFICATION_WEBHOOK_URL) {
      try {
        await fetch(process.env.NOTIFICATION_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: `🔔 **New Veltrixa Inquiry**\n**Name:** ${fullName}\n**Phone:** ${phone}\n**Email:** ${email}\n**Service:** ${service}\n**Details:** ${details}`,
          }),
        });
      } catch (webhookErr) {
        console.warn("Webhook dispatch failed:", webhookErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully. A technical consultant will contact you shortly.",
        leadId: leadPayload.id,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error while submitting enquiry." },
      { status: 500 }
    );
  }
}
