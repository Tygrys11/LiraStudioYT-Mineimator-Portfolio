import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          error: "Missing fields",
        },
        {
          status: 400,
        }
      );
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: subject,

      html: `
        <h2>Nowa wiadomość z portfolio</h2>

        <p><strong>Imię:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <hr>

        <p>${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}