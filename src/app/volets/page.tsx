import type { Metadata } from 'next';
import VoletJeunesse from '@/components/sections/VoletJeunesse';
import VoletParents from '@/components/sections/VoletParents';
import VoletIntervenants from '@/components/sections/VoletIntervenants';
import VoletNumerique from '@/components/sections/VoletNumerique';

export const metadata: Metadata = {
  title: "Nos volets d'intervention",
  description: "Explorez nos quatre volets d'intervention : jeunesse, parentalité, intervenant·e·s et sensibilisation numérique.",
};

export default function VoletsPage() {
  return (
    <>
      {/* En-tête de page */}
      <section className="bg-gradient-to-br from-as-bleu-profond via-as-bleu-vif to-as-vert-lien text-as-creme py-16 lg:py-20">
        <div className="section-container">
          <h1 className="font-titre text-4xl sm:text-5xl lg:text-6xl font-bold text-as-soleil-doux mb-4 leading-tight">
            Nos volets d{"'"}intervention
          </h1>
          <p className="font-corps text-lg sm:text-xl text-as-creme/90 max-w-2xl">
            Quatre approches complémentaires offertes en services de groupe pour rejoindre
            et soutenir les jeunes, les adultes, les professionnel·le·s et toute la communauté.
          </p>
          <p className="font-corps text-base text-as-creme/70 max-w-2xl mt-4">
            Notre modèle communautaire favorise l{"'"}accessibilité dans toutes les régions
            du Québec et permet de maximiser la portée de nos interventions.
          </p>
        </div>
      </section>

      {/* Volet Jeunesse */}
      <VoletJeunesse />

      {/* Volet Parentalité */}
      <VoletParents />

      {/* Volet Intervenant·e·s */}
      <VoletIntervenants />

      {/* Volet Numérique */}
      <VoletNumerique />
    </>
  );
}
