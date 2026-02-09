import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";
import twilio from "twilio";

async function saveToFile(payload: {
  name: string;
  phone: string;
  email: string;
  requirements: string;
}) {
  const dataDir = path.join(process.cwd(), "data");
  const filePath = path.join(dataDir, "inquiries.json");

  let inquiries: Array<
    typeof payload & {
      createdAt: string;
    }
  > = [];

  try {
    const existing = await fs.readFile(filePath, "utf-8");
    inquiries = JSON.parse(existing);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }

  inquiries.push({
    ...payload,
    createdAt: new Date().toISOString(),
  });

  await fs.writeFile(filePath, JSON.stringify(inquiries, null, 2), "utf-8");
}

async function sendEmailNotification(payload: {
  name: string;
  phone: string;
  email: string;
  requirements: string;
}) {
  // Use env if available, otherwise fall back to the email you gave
  const toEmail = process.env.NOTIFY_EMAIL ?? "asvnbhargav@gmail.com";

  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    console.warn("Email notification skipped – SMTP env vars not configured");
    return;
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const subject = `New inquiry from ${payload.name}`;
  const text = `New inquiry received:

Name: ${payload.name}
Phone: ${payload.phone}
Email: ${payload.email}

Requirements:
${payload.requirements}
`;

  await transporter.sendMail({
    from: user,
    to: toEmail,
    subject,
    text,
  });
}

async function sendWhatsAppNotification(payload: {
  name: string;
  phone: string;
  email: string;
  requirements: string;
}) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromWhatsApp = process.env.TWILIO_WHATSAPP_FROM; // e.g. 'whatsapp:+14155238886'
  const toWhatsApp =
    process.env.NOTIFY_WHATSAPP_TO ?? "whatsapp:+918919647134"; // your WhatsApp number

  if (!accountSid || !authToken || !fromWhatsApp) {
    console.warn("WhatsApp notification skipped – Twilio env vars not configured");
    return;
  }

  const client = twilio(accountSid, authToken);

  const body = `New SSBI inquiry:

Name: ${payload.name}
Phone: ${payload.phone}
Email: ${payload.email}

Requirements:
${payload.requirements}
`;

  await client.messages.create({
    from: fromWhatsApp,
    to: toWhatsApp,
    body,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, requirements } = body;

    if (!name || !phone || !email || !requirements) {
      return NextResponse.json(
        { error: "Missing required fields: name, phone, email, requirements" },
        { status: 400 }
      );
    }

    const payload = {
      name: String(name).trim(),
      phone: String(phone).trim(),
      email: String(email).trim(),
      requirements: String(requirements).trim(),
    };

    // Save locally
    await saveToFile(payload);

    // Fire-and-forget notifications; don't block response on these
    sendEmailNotification(payload).catch((err) =>
      console.error("Email notification failed:", err)
    );
    sendWhatsAppNotification(payload).catch((err) =>
      console.error("WhatsApp notification failed:", err)
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
