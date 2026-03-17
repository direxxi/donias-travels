import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_PASSWORD,
  },
});

function buildEmail(data: Record<string, string>) {
  const rows = Object.entries(data)
    .filter(([key]) => key !== "formType")
    .map(([key, value]) => `
      <tr>
        <td style="padding:8px 12px;background:#F9FAFB;font-size:13px;color:#94a3b8;width:140px;text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid #e5e7eb;">${key}</td>
        <td style="padding:8px 12px;font-size:14px;color:#1A1A2E;border-bottom:1px solid #e5e7eb;">${value}</td>
      </tr>`)
    .join("");

  return `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:24px 0;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;">

  <tr>
    <td style="background:#1A1A2E;padding:24px 32px;">
      <table width="100%">
        <tr>
          <td>
            <div style="display:inline-block;background:#C8102E;color:white;font-size:11px;font-weight:bold;letter-spacing:2px;padding:3px 12px;border-radius:4px;margin-bottom:8px;">DONIAS TRAVELS</div>
            <p style="color:#ffffff;font-size:18px;font-weight:bold;margin:0;">New Enquiry Received</p>
          </td>
          <td align="right">
            <p style="color:#ffffff;font-size:12px;margin:0;opacity:0.5;">${new Date().toLocaleDateString("en-NG", { day: "numeric", month: "long", year: "numeric" })}</p>
            <p style="color:#C8102E;font-size:13px;font-weight:bold;margin:4px 0 0;">${data.formType || "Website Form"}</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <tr>
    <td style="padding:24px 32px 8px;">
      <p style="font-size:13px;color:#94a3b8;margin:0 0 12px;letter-spacing:1px;text-transform:uppercase;">Submission Details</p>
      <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
        ${rows}
      </table>
    </td>
  </tr>

  <tr>
    <td style="padding:20px 32px 32px;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#FDE8EB;border-radius:6px;padding:16px;">
        <tr>
          <td style="padding:0 16px;">
            <p style="font-size:13px;color:#9B0D23;font-weight:bold;margin:0 0 4px;">Action Required</p>
            <p style="font-size:13px;color:#9B0D23;margin:0;">Reply to this lead within 24 hours to maximise conversion.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <tr>
    <td style="background:#1A1A2E;padding:16px 32px;text-align:center;">
      <p style="color:#ffffff;font-size:11px;margin:0;opacity:0.4;">Donias Travels &bull; 25 Oju Olobun Street, Victoria Island, Lagos &bull; &copy; 2026</p>
    </td>
  </tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const formLabels: Record<string, string> = {
      contact: "Contact Page",
      packageInquiry: "Package Inquiry",
      customPackage: "Custom Package Request",
      serviceInquiry: "Service Inquiry",
      medical: "Medical Tourism",
      studyAbroad: "Study Abroad",
      nigeria: "Discover Nigeria",
      leadCapture: "Homepage Hero",
      newsletter: "Newsletter Signup",
    };

    const formType = formLabels[data.formType] || data.formType || "Website Form";
    const subject = `New Enquiry: ${formType} — ${data.firstName || data.email || "Visitor"}`;

    const emailData = { ...data, formType };

    await transporter.sendMail({
      from: `"Donias Travels Website" <${process.env.ZOHO_EMAIL}>`,
      to: process.env.ZOHO_EMAIL,
      replyTo: data.email || process.env.ZOHO_EMAIL,
      subject,
      html: buildEmail(emailData),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Mail error:", error);
    return NextResponse.json({ ok: false, error: String(error) }, { status: 500 });
  }
}
