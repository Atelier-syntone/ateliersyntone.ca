'use client';

import { useEffect, useState } from 'react';

// ============================================================
// Configuration Cal.com — À MODIFIER après création du compte
// ============================================================
// Remplacer par le nom d'utilisateur Cal.com d'Atelier Syntone
// et le slug de l'événement de 30 minutes.
// Exemple : si l'URL de réservation est https://cal.com/ateliersyntone/consultation
// alors CAL_USERNAME = "ateliersyntone" et CAL_EVENT_SLUG = "consultation"
const CAL_USERNAME = 'audreanne-paquin-gq9pzq';
const CAL_EVENT_SLUG = '30min';
// ============================================================

export default function PriseRendezVous() {
  const [chargement, setChargement] = useState(true);
  const [erreurChargement, setErreurChargement] = useState(false);

  useEffect(() => {
    // Charger le script d'intégration Cal.com
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;

    script.onload = () => {
      // Initialiser l'embed Cal.com une fois le script chargé
      if (typeof (window as any).Cal !== 'undefined') {
        (window as any).Cal('init', {
          origin: 'https://app.cal.com',
        });

        (window as any).Cal('inline', {
          calLink: `${CAL_USERNAME}/${CAL_EVENT_SLUG}`,
          elementOrSelector: '#cal-inline-embed',
          config: {
            layout: 'month_view',
            theme: 'light',
          },
        });

        // Écouter quand le calendrier est prêt
        (window as any).Cal('on', {
          action: 'linkReady',
          callback: () => {
            setChargement(false);
          },
        });

        // Fallback : retirer le chargement après 5 secondes
        setTimeout(() => setChargement(false), 5000);
      } else {
        setErreurChargement(true);
        setChargement(false);
      }
    };

    script.onerror = () => {
      setErreurChargement(true);
      setChargement(false);
    };

    document.head.appendChild(script);

    return () => {
      // Nettoyage du script au démontage
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

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

      {/* Indicateur de chargement */}
      {chargement && !erreurChargement && (
        <div className="flex items-center justify-center py-16">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-4 border-as-bleu-clair border-t-as-bleu-vif rounded-full animate-spin" />
            <p className="font-corps text-as-gris-moyen text-sm">
              Chargement du calendrier...
            </p>
          </div>
        </div>
      )}

      {/* Message d'erreur si Cal.com ne charge pas */}
      {erreurChargement && (
        <div className="bg-as-corail-doux/10 border border-as-corail-doux/30 rounded-syntone p-6 text-center">
          <p className="font-corps text-as-gris-fonce mb-3">
            Le calendrier de réservation n{"'"}est pas disponible pour le moment.
          </p>
          <a
            href={`https://cal.com/${CAL_USERNAME}/${CAL_EVENT_SLUG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-as-vert-lien hover:bg-as-vert-lien/90 text-white font-corps font-semibold rounded-syntone transition-syntone"
          >
            Réserver sur Cal.com
          </a>
        </div>
      )}

      {/* Conteneur de l'embed Cal.com */}
      <div
        id="cal-inline-embed"
        className={`rounded-syntone overflow-hidden ${chargement ? 'h-0 overflow-hidden' : 'min-h-[500px]'}`}
        style={{ width: '100%' }}
      />

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
