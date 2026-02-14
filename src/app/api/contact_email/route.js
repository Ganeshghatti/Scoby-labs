export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { transporter } from "../../../../config/email";
import { contactTemplate } from "../../../../services/emailTemplates/contact.template";
import { adminContactNotificationTemplate } from "../../../../services/emailTemplates/admin-contact-notification.template";

export async function POST(req) {
  try {
    const { email, name, interest } = await req.json();

    if (!email || !name) {
      return NextResponse.json(
        { message: "Credentials not found" },
        { status: 400 },
      );
    }

    const ADMIN_EMAIL = "scobylabsbangalore@gmail.com";
    const fromAddress = { name: "Scoby Labs", address: ADMIN_EMAIL };

    const userEmail = {
      from: fromAddress,
      to: email,
      subject: "Thank you for contacting us",
      html: contactTemplate(name),
    };

    const adminEmail = {
      from: fromAddress,
      to: ADMIN_EMAIL,
      subject: `New contact form: ${name} (${email})`,
      html: adminContactNotificationTemplate({ name, email, interest }),
    };

    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error("Email service verification failed:", verifyError);
      return NextResponse.json(
        {
          success: false,
          message: "Email service unavailable. Please try again later.",
        },
        { status: 503 },
      );
    }

    await Promise.all([
      transporter.sendMail(userEmail),
      transporter.sendMail(adminEmail),
    ]);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
