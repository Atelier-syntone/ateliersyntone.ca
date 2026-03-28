import type { Metadata } from 'next';
import Mission from '@/components/sections/Mission';
import Valeurs from '@/components/sections/Valeurs';

export const metadata: Metadata = {
  title: 'Notre mission',
  description: "Découvrez la mission et les valeurs d'Atelier Syntone, un organisme sans but lucratif dédié au développement humain et au pouvoir d'agir.",
};

export default function MissionPage() {
  return (
    <>
      {/* En-tête de page */}
      <section className="bg-gradient-to-br from-as-bleu-profond via-as-bleu-vif to-as-vert-lien text-as-creme py-16 lg:py-20">
        <div className="section-container">
          <h1 className="font-titre text-4xl sm:text-5xl lg:text-6xl font-bold text-as-soleil-doux mb-4 leading-tight">
            Notre mission
          </h1>
          <p className="font-corps text-lg sm:text-xl text-as-creme/90 max-w-2xl">
            Rendre accessibles des connaissances fiables sur le développement humain pour soutenir le pouvoir d'agir des individus et des communautés.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <Mission />

      {/* Valeurs Section */}
      <Valeurs />
    </>
  );
}
