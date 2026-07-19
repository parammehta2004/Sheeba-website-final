import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message, "cf-turnstile-response": turnstileToken } = body;

    // 1. Validate inputs
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 2. Verify Cloudflare Turnstile Captcha
    if (!turnstileToken) {
      return NextResponse.json({ error: "Security check token missing" }, { status: 400 });
    }

    const secretKey = process.env.TURNSTILE_SECRET_KEY || "0x4AAAAAADyibQYQU7nqFeZkeR5MBam-yb4";
    const verificationUrl = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
    
    const verifyRes = await fetch(verificationUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(turnstileToken)}`,
    });

    const verifyJson = await verifyRes.json();
    if (!verifyJson.success) {
      return NextResponse.json({ error: "Security check failed. Please try again." }, { status: 400 });
    }

    // 3. Send Email via Resend API
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured in environment variables.");
      return NextResponse.json({ error: "Email service misconfiguration" }, { status: 500 });
    }

    const emailHtml = `
      <h2>New Lead Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="white-space: pre-wrap; padding: 10px; background-color: #f5f5f5; border-left: 4px solid #ccc;">${message}</blockquote>
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
      return NextResponse.json({ error: "Failed to send email via Resend" }, { status: 502 });
    }

    return NextResponse.json({ success: true, id: emailJson.id });
  } catch (error) {
    console.error("Contact API route error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
