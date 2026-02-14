
export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { transporter } from "../../../../config/email";
import { contactTemplate } from "../../../../services/emailTemplates/contact.template";

export async function POST(req) {
  try {
    const { email, name , interest } = await req.json();
   
    if (!email || !name) {
      return NextResponse.json(
        { message: "Credentials not found" },
        { status: 400 }
      );
    }

    const config = {
      from: "scobylabsbangalore@gmail.com",
      to: email,
      subject: "Contact Mail",
      html: contactTemplate(name)
    };

    await transporter.verify();
    await transporter.sendMail(config);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
