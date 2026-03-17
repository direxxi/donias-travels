import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:#1A1A2E;padding:20px;text-align:center;">
          <span style="background:#C8102E;color:white;padding:4px 14px;border-radius:4px;font-size:12px;font-weight:bold;letter-spacing:2px;">DONIAS TRAVELS</span>
        </div>
        <div style="padding:24px;background:#ffffff;border:1px solid #e5e7eb;">
          <h2 style="color:#C8102E;margin:0 0 16px;">New Newsletter Subscriber</h2>
          <p style="font-size:14px;">Email: <strong>${email}</strong></p>
        </div>
      </div>
    `;

    await sendEmail(`New Newsletter Subscriber — ${email}`, html);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
