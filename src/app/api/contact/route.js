import { SeverityNumber } from "@opentelemetry/api-logs";
import { after, NextResponse } from "next/server";
import { posthogLogProvider } from "../../../../instrumentation";

const contactLogger = posthogLogProvider.getLogger("posthog-contact-form");

function logContactOutcome(severityNumber, outcome, statusCode) {
  contactLogger.emit({
    body: "Contact form request completed",
    severityNumber,
    attributes: {
      event: "contact_form_request_finished",
      outcome,
      status_code: statusCode,
    },
  });

  after(async () => {
    try {
      await posthogLogProvider.forceFlush();
    } catch {
      console.error("PostHog contact log flush failed.");
    }
  });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message, "cf-turnstile-response": turnstileToken } = body;

    // 1. Validate inputs
    if (!name || !email || !phone) {
      logContactOutcome(SeverityNumber.WARN, "validation_rejected", 400);
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    const safeMessage = message || "No message provided.";


    // 2. Verify Cloudflare Turnstile Captcha
    if (!turnstileToken) {
      logContactOutcome(SeverityNumber.WARN, "captcha_token_missing", 400);
      return NextResponse.json({ error: "Security check token missing" }, { status: 400 });
    }

    const secretKey = process.env.TURNSTILE_SECRET_KEY;
    if (!secretKey) {
      console.error("TURNSTILE_SECRET_KEY is not configured in environment variables.");
      logContactOutcome(SeverityNumber.ERROR, "captcha_service_misconfigured", 500);
      return NextResponse.json({ error: "Security service misconfiguration" }, { status: 500 });
    }

    const verificationUrl = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
    
    const verifyRes = await fetch(verificationUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(turnstileToken)}`,
    });

    const verifyJson = await verifyRes.json();
    if (!verifyJson.success) {
      logContactOutcome(SeverityNumber.WARN, "captcha_rejected", 400);
      return NextResponse.json({ error: "Security check failed. Please try again." }, { status: 400 });
    }

    // 3. Send Email via Resend API
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured in environment variables.");
      logContactOutcome(SeverityNumber.ERROR, "email_service_misconfigured", 500);
      return NextResponse.json({ error: "Email service misconfiguration" }, { status: 500 });
    }

    const emailHtml = `
      <h2>New Lead Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="white-space: pre-wrap; padding: 10px; background-color: #f5f5f5; border-left: 4px solid #ccc;">${safeMessage}</blockquote>
    `;

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Sheeba Website <website@sheebathenutritionist.com>",
        to: ["sheeba@sheebathenutritionist.com"],
        cc: ["Admin@sheebathenutritionist.com"],
        subject: `New Lead from Website: ${name}`,
        html: emailHtml,
        reply_to: email,
      }),
    });

    const emailJson = await emailResponse.json();

    if (!emailResponse.ok) {
      console.error("Resend API error:", emailJson);
      logContactOutcome(SeverityNumber.ERROR, "email_delivery_failed", 502);
      return NextResponse.json({ error: "Failed to send email via Resend" }, { status: 502 });
    }

    logContactOutcome(SeverityNumber.INFO, "email_delivered", 200);
    return NextResponse.json({ success: true, id: emailJson.id });
  } catch (error) {
    console.error("Contact API route error:", error);
    logContactOutcome(SeverityNumber.ERROR, "request_failed", 500);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
