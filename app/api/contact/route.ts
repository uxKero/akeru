import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = 'alanponceasd@gmail.com';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, whatsapp, company, agentType, otherDesc } = body;

    if (!name || !email || !whatsapp || !company || !agentType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: 'Akeru AgentLayer <onboarding@resend.dev>',
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Nueva consulta de ${name} — ${company}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #fff; padding: 32px; border-radius: 12px;">
          <h1 style="color: #fff; font-size: 24px; margin-bottom: 8px;">Nueva consulta · Akeru AgentLayer</h1>
          <hr style="border: 1px solid #222; margin-bottom: 24px;" />

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #888; width: 140px;">Nombre</td>
              <td style="padding: 8px 0; color: #fff; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Email</td>
              <td style="padding: 8px 0; color: #fff;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">WhatsApp</td>
              <td style="padding: 8px 0; color: #fff;">${whatsapp}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Empresa</td>
              <td style="padding: 8px 0; color: #fff;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Tipo de agente</td>
              <td style="padding: 8px 0; color: #fff;">${agentType}</td>
            </tr>
            ${otherDesc ? `
            <tr>
              <td style="padding: 8px 0; color: #888; vertical-align: top;">Descripción</td>
              <td style="padding: 8px 0; color: #fff;">${otherDesc}</td>
            </tr>` : ''}
          </table>

          <hr style="border: 1px solid #222; margin-top: 24px;" />
          <p style="color: #555; font-size: 12px; margin-top: 16px;">Enviado desde akeru.agency</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
