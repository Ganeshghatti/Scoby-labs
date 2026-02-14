export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { transporter } from "../../../../config/email";
import { contactTemplate } from "../../../../services/emailTemplates/contact.template";

export async function POST(req) {
  try {
    const { email, name, interest } = await req.json();

    if (!email || !name) {
      return NextResponse.json(
        { message: "Credentials not found" },
        { status: 400 },
      );
    }

    const config = {
      from: { name: "Scoby Labs", address: "scobylabsbangalore@gmail.com" },
      to: email,
      subject: "Thank you for contacting us",
      html: contactTemplate(name),
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

    await transporter.sendMail(config);

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
