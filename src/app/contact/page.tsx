import type { Metadata } from 'next';
import FormulaireContact from '@/components/FormulaireContact';
import PriseRendezVous from '@/components/PriseRendezVous';

export const metadata: Metadata = {
  title: 'Nous joindre',
  description: 'Contactez Atelier Syntone pour des questions, des partenariats ou pour en savoir plus sur nos services. Réservez une consultation gratuite de 30 minutes.',
};

export default function ContactPage() {
  return (
    <>
      {/* En-tête de page */}
      <section className="bg-gradient-to-br from-as-bleu-profond via-as-bleu-vif to-as-vert-lien text-as-creme py-16 lg:py-20">
        <div className="section-container">
          <h1 className="font-titre text-4xl sm:text-5xl lg:text-6xl font-bold text-as-soleil-doux mb-4 leading-tight">
            Nous joindre
          </h1>
          <p className="font-corps text-lg sm:text-xl text-as-creme/90 max-w-2xl">
            Écrivez-nous directement ou réservez une consultation gratuite en visioconférence pour en savoir plus.
          </p>
        </div>
      </section>

      {/* Deux options de contact — côte à côte */}
      <section className="bg-as-creme py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Sélecteurs visuels sur mobile */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 lg:hidden">
            <a
              href="#formulaire"
              className="flex-1 flex items-center gap-3 bg-white rounded-syntone p-4 border-2 border-as-bleu-vif shadow-sm hover:shadow-md transition-syntone"
            >
              {/* Icône enveloppe */}
              <svg className="w-8 h-8 text-as-bleu-vif flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="font-corps font-semibold text-as-bleu-profond">Envoyer un message</p>
                <p className="font-corps text-sm text-as-gris-moyen">Réponse en 2-3 jours</p>
              </div>
            </a>
            <a
              href="#rendez-vous"
              className="flex-1 flex items-center gap-3 bg-white rounded-syntone p-4 border-2 border-as-vert-lien shadow-sm hover:shadow-md transition-syntone"
            >
              {/* Icône calendrier */}
              <svg className="w-8 h-8 text-as-vert-lien flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="font-corps font-semibold text-as-bleu-profond">Prendre rendez-vous</p>
                <p className="font-corps text-sm text-as-gris-moyen">30 min, gratuit, en visio</p>
              </div>
            </a>
          </div>

          {/* Grille principale — 2 colonnes côte à côte */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Colonne gauche — Formulaire de message */}
            <div id="formulaire" className="bg-white rounded-syntone p-8 lg:p-10 shadow-sm border border-as-gris-clair/50">
              {/* Étiquette */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-as-bleu-vif/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-as-bleu-vif" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-accent text-sm font-semibold text-as-bleu-vif uppercase tracking-wide">
                  Option 1
                </span>
              </div>
              <FormulaireContact />
            </div>

            {/* Colonne droite — Prise de rendez-vous Cal.com */}
            <div id="rendez-vous" className="bg-white rounded-syntone p-8 lg:p-10 shadow-sm border border-as-gris-clair/50">
              {/* Étiquette */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-as-vert-lien/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-as-vert-lien" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-accent text-sm font-semibold text-as-vert-lien uppercase tracking-wide">
                  Option 2
                </span>
              </div>
              <PriseRendezVous />
            </div>
          </div>
        </div>
      </section>

      {/* Informations de contact — en bas */}
      <section className="bg-white py-16 lg:py-20 border-t border-as-gris-clair">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-titre text-3xl font-bold text-as-bleu-profond mb-10 text-center">
            Nos coordonnées
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Courriel */}
            <div className="bg-as-creme rounded-syntone p-6 border-l-4 border-as-bleu-vif text-center sm:text-left">
              <h3 className="font-titre text-lg font-bold text-as-bleu-profond mb-2">
                Courriel
              </h3>
              <a
                href="mailto:info@ateliersyntone.ca"
                className="font-corps text-lg text-as-bleu-vif hover:text-as-bleu-profond transition-syntone font-semibold"
              >
                info@ateliersyntone.ca
              </a>
            </div>

            {/* Localisation */}
            <div className="bg-as-creme rounded-syntone p-6 border-l-4 border-as-vert-lien text-center sm:text-left">
              <h3 className="font-titre text-lg font-bold text-as-bleu-profond mb-2">
                Localisation
              </h3>
              <p className="font-corps text-as-gris-fonce text-lg leading-relaxed">
                Manicouagan, Côte-Nord<br />
                Québec, Canada
              </p>
            </div>

            {/* Délai de réponse */}
            <div className="bg-as-creme rounded-syntone p-6 border-l-4 border-as-soleil-doux text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <h3 className="font-titre text-lg font-bold text-as-bleu-profond mb-2">
                Délai de réponse
              </h3>
              <p className="font-corps text-as-gris-fonce text-lg">
                Nous répondons à tous les messages en 2 à 3 jours ouvrables.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
