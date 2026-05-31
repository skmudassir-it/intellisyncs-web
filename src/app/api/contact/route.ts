import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, service, message } = body;

    // Basic validation
    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required" },
        { status: 400 }
      );
    }

    // In production, send to CRM/email service here
    console.log("Contact form submission:", { firstName, lastName, email, company, service });

    return NextResponse.json({ success: true, message: "Thank you! We will be in touch within 24 hours." });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
