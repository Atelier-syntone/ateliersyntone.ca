import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialisation de Resend avec la clé API
const resend = new Resend(process.env.RESEND_API_KEY);

// Adresse de destination des messages
const DESTINATAIRE = 'info@ateliersyntone.ca';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nom, email, sujet, message } = body;

    // Validation des champs requis
    if (!nom || !email || !sujet || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis.' },
        { status: 400 }
      );
    }

    // Validation basique du courriel
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse courriel invalide.' },
        { status: 400 }
      );
    }

    // Envoi du courriel via Resend
    const { data, error } = await resend.emails.send({
      from: 'Atelier Syntone <noreply@ateliersyntone.ca>',
      to: [DESTINATAIRE],
      replyTo: email,
      subject: `[Contact] ${sujet}`,
      html: `
        <div style="font-family: 'Source Sans 3', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1A2E4A; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #E8B84B; margin: 0; font-size: 20px;">
              Nouveau message — Atelier Syntone
            </h1>
          </div>
          <div style="background-color: #F7F3EE; padding: 24px; border-radius: 0 0 8px 8px;">
            <p style="color: #2C2C2C; margin-bottom: 16px;">
              <strong>De :</strong> ${nom} (${email})
            </p>
            <p style="color: #2C2C2C; margin-bottom: 16px;">
              <strong>Sujet :</strong> ${sujet}
            </p>
            <hr style="border: none; border-top: 1px solid #E8E8E8; margin: 16px 0;" />
            <div style="color: #2C2C2C; white-space: pre-wrap; line-height: 1.6;">
              ${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
            </div>
            <hr style="border: none; border-top: 1px solid #E8E8E8; margin: 16px 0;" />
            <p style="color: #6B6B6B; font-size: 12px;">
              Ce message a été envoyé via le formulaire de contact de ateliersyntone.ca
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi du message. Veuillez réessayer.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Message envoyé avec succès.' },
      { status: 200 }
    );
  } catch (err) {
    console.error('Erreur serveur:', err);
    return NextResponse.json(
      { error: 'Erreur interne du serveur.' },
      { status: 500 }
    );
  }
}
