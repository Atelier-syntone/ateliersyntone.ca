import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos',
  description: "En savoir plus sur Atelier Syntone, son histoire, sa gouvernance et son équipe.",
};

export default function AProposPage() {
  return (
    <>
      {/* En-tête de page */}
      <section className="bg-gradient-to-br from-as-bleu-profond via-as-bleu-vif to-as-vert-lien text-as-creme py-16 lg:py-20">
        <div className="section-container">
          <h1 className="font-titre text-4xl sm:text-5xl lg:text-6xl font-bold text-as-soleil-doux mb-4 leading-tight">
            À propos
          </h1>
          <p className="font-corps text-lg sm:text-xl text-as-creme/90 max-w-2xl">
            Découvrez qui nous sommes et ce qui nous pousse à créer du changement positif.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="bg-as-creme py-16 lg:py-24">
        <div className="section-container">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Notre histoire */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-titre text-3xl font-bold text-as-bleu-profond mb-6">
                  Notre histoire
                </h2>
                <div className="space-y-5 font-corps text-as-gris-fonce text-lg leading-relaxed">
                  <p>
                    Atelier Syntone est un organisme sans but lucratif fondé en janvier 2026,
                    en réponse à un besoin criant dans nos communautés : rendre accessibles des
                    connaissances fiables sur le développement humain.
                  </p>
                  <p>
                    Basé dans la région de Manicouagan, sur la Côte-Nord du Québec, au cœur
                    d{"'"}une région dynamique et solidaire, nous travaillons à contrer la
                    désinformation et à soutenir le pouvoir d{"'"}agir des individus et des
                    communautés dans leurs milieux de vie.
                  </p>
                  <p>
                    Notre vision est de contribuer à l{"'"}émergence d{"'"}une société plus
                    équitable, consciente et outillée, où chaque personne peut développer
                    son plein potentiel.
                  </p>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="bg-gradient-to-br from-as-bleu-vif to-as-vert-lien rounded-syntone p-12 text-as-creme flex flex-col items-center justify-center aspect-square">
                  <div className="text-6xl font-titre font-bold mb-4 text-as-soleil-doux">
                    2026
                  </div>
                  <p className="font-corps text-center text-sm text-as-creme/80">
                    Fondation d{"'"}Atelier Syntone
                  </p>
                  <p className="font-corps text-center text-xs text-as-creme/60 mt-2">
                    Manicouagan, Côte-Nord, Québec
                  </p>
                </div>
              </div>
            </div>

            {/* Ancrage régional */}
            <div className="bg-white rounded-syntone p-8 lg:p-12 border-l-4 border-as-vert-lien">
              <h3 className="font-titre text-2xl text-as-bleu-profond mb-4">
                Ancrés sur la Côte-Nord
              </h3>
              <p className="font-corps text-as-gris-fonce text-lg leading-relaxed">
                Nous nous engageons à respecter et promouvoir le bien-être des communautés du Québec,
                en particulier celles de la Côte-Nord. Notre présence locale nous permet de comprendre
                les besoins spécifiques de nos milieux et d{"'"}adapter nos services en conséquence.
              </p>
            </div>

            {/* Statut juridique */}
            <div className="bg-as-bleu-profond text-as-creme rounded-syntone p-8 lg:p-12">
              <h3 className="font-titre text-2xl mb-4">
                Statut juridique
              </h3>
              <p className="font-corps text-lg leading-relaxed text-as-creme/95">
                Atelier Syntone est officiellement enregistré comme organisme sans but lucratif
                (OBNL) au Québec. Ce statut garantit notre engagement envers la mission d{"'"}intérêt
                public et notre transparence financière. Tous nos revenus sont réinvestis dans
                nos programmes et services, sans distribution de profits.
              </p>
            </div>

            {/* Direction générale */}
            <div>
              <h2 className="font-titre text-3xl font-bold text-as-bleu-profond mb-8">
                Direction générale
              </h2>
              <div className="bg-white rounded-syntone p-8 lg:p-12 border-l-4 border-as-soleil-doux">
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-as-soleil-doux to-as-corail-doux flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-titre text-2xl font-bold">AP</span>
                  </div>
                  <div>
                    <h3 className="font-titre text-2xl text-as-bleu-profond mb-1">
                      Audréanne Paquin
                    </h3>
                    <p className="font-accent text-as-vert-lien font-semibold mb-4">
                      Directrice générale et fondatrice
                    </p>
                    <p className="font-corps text-as-gris-fonce text-lg leading-relaxed mb-4">
                      Animée par une passion pour le développement humain et l{"'"}équité,
                      Audréanne a fondé Atelier Syntone avec la conviction que des connaissances
                      fiables et accessibles peuvent transformer nos communautés.
                    </p>
                    <a
                      href="mailto:direction@ateliersyntone.ca"
                      className="inline-flex items-center gap-2 font-accent text-as-bleu-vif hover:text-as-bleu-profond transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      direction@ateliersyntone.ca
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Conseil d'administration */}
            <div>
              <h2 className="font-titre text-3xl font-bold text-as-bleu-profond mb-8">
                Conseil d{"'"}administration
              </h2>
              <div className="bg-as-gris-clair rounded-syntone p-8 lg:p-12">
                <p className="font-corps text-as-gris-moyen text-lg leading-relaxed mb-4">
                  Le conseil d{"'"}administration d{"'"}Atelier Syntone est composé de personnes
                  engagées et qualifiées, qui assurent la gouvernance et la direction stratégique
                  de l{"'"}organisme dans le respect de sa mission.
                </p>
                <p className="font-corps text-as-gris-moyen text-lg leading-relaxed">
                  La composition du CA sera annoncée prochainement. Restez à l{"'"}affût!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
