import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      message,
      formType,
      extraFields,
    } = body;

    const extras = extraFields
      ? Object.entries(extraFields)
          .map(
            ([k, v]) =>
              `<tr><td style="padding:8px;background:#f9f9f9;font-weight:bold;width:35%">${k}</td><td style="padding:8px">${v}</td></tr>`,
          )
          .join("")
      : "";

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:#1A1A2E;padding:20px;text-align:center;">
          <span style="background:#C8102E;color:white;padding:4px 14px;border-radius:4px;font-size:12px;font-weight:bold;letter-spacing:2px;">DONIAS TRAVELS</span>
          <p style="color:#ffffff;margin:8px 0 0;font-size:13px;opacity:0.7;">New Website Enquiry</p>
        </div>
        <div style="padding:24px;background:#ffffff;border:1px solid #e5e7eb;">
          <h2 style="color:#C8102E;margin:0 0 16px;font-size:18px;">New Lead — ${formType || "Website"}</h2>
          <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:8px;background:#f9f9f9;font-weight:bold;width:35%">Name</td><td style="padding:8px">${firstName} ${lastName}</td></tr>
            <tr><td style="padding:8px;background:#f9f9f9;font-weight:bold">Email</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px;background:#f9f9f9;font-weight:bold">Phone</td><td style="padding:8px"><a href="tel:${phone}">${phone}</a></td></tr>
            <tr><td style="padding:8px;background:#f9f9f9;font-weight:bold">Source</td><td style="padding:8px">${formType}</td></tr>
            <tr><td style="padding:8px;background:#f9f9f9;font-weight:bold">Message</td><td style="padding:8px">${message || "—"}</td></tr>
            ${extras}
          </table>
        </div>
        <div style="background:#1A1A2E;padding:12px;text-align:center;">
          <p style="color:#ffffff;font-size:11px;margin:0;opacity:0.4;">Donias Travels Website — ${new Date().toLocaleString("en-NG")}</p>
        </div>
      </div>
    `;

    await sendEmail(
      `New Enquiry from ${firstName} ${lastName} — ${formType}`,
      html,
    );
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send" },
      { status: 500 },
    );
  }
}
