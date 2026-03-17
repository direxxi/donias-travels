import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_APP_PASSWORD,
  },
});

export const sendEmail = async (subject: string, html: string) => {
  await transporter.sendMail({
    from: `"Donias Travels Website" <${process.env.ZOHO_EMAIL}>`,
    to: process.env.CONTACT_EMAIL,
    subject,
    html,
  });
};
