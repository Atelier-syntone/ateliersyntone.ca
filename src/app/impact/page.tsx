import type { Metadata } from 'next';
import Impact from '@/components/sections/Impact';

export const metadata: Metadata = {
  title: 'Notre impact',
  description: "Découvrez l'impact d'Atelier Syntone sur le développement humain et l'équité communautaire.",
};

export default function ImpactPage() {
  return (
    <>
      {/* En-tête de page */}
      <section className="bg-gradient-to-br from-as-bleu-profond via-as-bleu-vif to-as-vert-lien text-as-creme py-16 lg:py-20">
        <div className="section-container">
          <h1 className="font-titre text-4xl sm:text-5xl lg:text-6xl font-bold text-as-soleil-doux mb-4 leading-tight">
            Notre impact
          </h1>
          <p className="font-corps text-lg sm:text-xl text-as-creme/90 max-w-2xl">
            Mesurer et amplifier notre contribution au développement humain et à l{"'"}équité communautaire.
          </p>
        </div>
      </section>

      {/* Section Impact */}
      <Impact />
    </>
  );
}
