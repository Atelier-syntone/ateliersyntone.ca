'use client';

import { useState } from 'react';

// ============================================================
// Configuration Cal.com
// ============================================================
const CAL_USERNAME = 'audreanne-paquin-gq9pzq';
const CAL_EVENT_SLUG = '30min';
// URL complète de l'iframe Cal.com avec paramètres d'intégration
const CAL_EMBED_URL = `https://cal.com/${CAL_USERNAME}/${CAL_EVENT_SLUG}?embed&layout=month_view&theme=light`;
// ============================================================

export default function PriseRendezVous() {
  const [chargement, setChargement] = useState(true);

  return (
    <div>
      <h2 className="font-titre text-3xl font-bold text-as-bleu-profond mb-4">
        Prendre rendez-vous
      </h2>

      <p className="font-corps text-as-gris-moyen mb-6 leading-relaxed">
        Réservez une <strong className="text-as-bleu-profond">consultation gratuite de 30 minutes</strong> en
        visioconférence pour en savoir plus sur nos services et explorer comment
        nous pouvons vous accompagner.
      </p>

      {/* Indicateur de chargement — visible tant que l'iframe n'a pas chargé */}
      {chargement && (
        <div className="flex items-center justify-center py-16">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-4 border-as-bleu-clair border-t-as-bleu-vif rounded-full animate-spin" />
            <p className="font-corps text-as-gris-moyen text-sm">
              Chargement du calendrier...
            </p>
          </div>
        </div>
      )}

      {/* Iframe Cal.com — approche fiable et compatible Next.js/Vercel */}
      <div className={`rounded-syntone overflow-hidden ${chargement ? 'h-0 overflow-hidden' : ''}`}>
        <iframe
          src={CAL_EMBED_URL}
          title="Réserver une consultation — Atelier Syntone"
          style={{ width: '100%', height: '660px', border: 'none' }}
          loading="lazy"
          onLoad={() => setChargement(false)}
        />
      </div>

      {/* Lien alternatif en cas de problème */}
      <div className="mt-4 text-center">
        <a
          href={`https://cal.com/${CAL_USERNAME}/${CAL_EVENT_SLUG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-corps text-sm text-as-bleu-vif hover:text-as-bleu-profond underline transition-syntone"
        >
          Le calendrier ne s{"'"}affiche pas? Réserver directement sur Cal.com →
        </a>
      </div>

      {/* Note sous le calendrier */}
      <div className="mt-6 bg-as-bleu-profond/5 rounded-syntone p-4">
        <div className="flex items-start gap-3">
          {/* Icône info */}
          <svg
            className="w-5 h-5 text-as-bleu-vif flex-shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="font-corps text-sm text-as-gris-moyen leading-relaxed">
            Cette consultation gratuite de 30 minutes se déroule en visioconférence.
            Un lien de connexion vous sera envoyé par courriel après la réservation.
          </p>
        </div>
      </div>
    </div>
  );
}
