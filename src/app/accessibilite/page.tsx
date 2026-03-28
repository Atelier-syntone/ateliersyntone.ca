import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Accessibilité',
  description: `Déclaration d'accessibilité d'${SITE.nom}. Notre engagement pour un site web accessible à toutes et tous.`,
};

export default function AccessibilitePage() {
  return (
    <>
      {/* En-tête de page */}
      <section className="bg-gradient-to-br from-as-bleu-profond via-as-bleu-vif to-as-vert-lien text-as-creme py-16 lg:py-20">
        <div className="section-container">
          <h1 className="font-titre text-4xl sm:text-5xl lg:text-6xl font-bold text-as-soleil-doux mb-4 leading-tight">
            Accessibilité
          </h1>
          <p className="font-corps text-lg sm:text-xl text-as-creme/90 max-w-2xl">
            Notre engagement pour un site web accessible à toutes et tous.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="bg-as-creme py-16 lg:py-24">
        <div className="section-container">
          <div className="max-w-3xl mx-auto space-y-12">

            {/* Engagement */}
            <div className="space-y-4">
              <p className="font-corps text-as-gris-fonce text-lg leading-relaxed">
                Atelier Syntone s{"'"}engage à rendre son site web accessible au plus
                grand nombre de personnes, y compris celles vivant avec un handicap
                visuel, auditif, moteur ou cognitif. L{"'"}accessibilité est au cœur
                de notre mission : rendre les connaissances accessibles à toutes
                et tous.
              </p>
            </div>

            {/* Normes visées */}
            <div>
              <h2 className="font-titre text-2xl font-bold text-as-bleu-profond mb-4">
                Normes visées
              </h2>
              <p className="font-corps text-as-gris-fonce text-lg leading-relaxed">
                Nous visons la conformité aux Règles pour l{"'"}accessibilité des
                contenus web (WCAG) 2.1, niveau AA. Ces directives, établies par
                le World Wide Web Consortium (W3C), sont la référence internationale
                en matière d{"'"}accessibilité numérique. Elles reposent sur quatre
                principes fondamentaux : les contenus doivent être perceptibles,
                utilisables, compréhensibles et robustes.
              </p>
            </div>

            {/* Mesures prises */}
            <div>
              <h2 className="font-titre text-2xl font-bold text-as-bleu-profond mb-4">
                Mesures mises en place
              </h2>
              <div className="space-y-4 font-corps text-as-gris-fonce text-lg leading-relaxed">
                <p>
                  Pour favoriser l{"'"}accessibilité de notre site, nous avons mis
                  en place plusieurs mesures : une structure sémantique HTML claire
                  facilitant la navigation par technologies d{"'"}assistance; des
                  contrastes de couleurs respectant les ratios minimaux recommandés;
                  des textes alternatifs pour les images porteuses d{"'"}information;
                  une navigation possible au clavier pour l{"'"}ensemble du site;
                  des tailles de police adaptables et un design réactif pour tous
                  les appareils; ainsi qu{"'"}un lien d{"'"}évitement (« Aller au
                  contenu principal ») en début de page.
                </p>
              </div>
            </div>

            {/* Limites connues */}
            <div>
              <h2 className="font-titre text-2xl font-bold text-as-bleu-profond mb-4">
                Limites connues
              </h2>
              <p className="font-corps text-as-gris-fonce text-lg leading-relaxed">
                Malgré nos efforts, certaines parties du site peuvent ne pas être
                entièrement accessibles. Nous travaillons continuellement à améliorer
                l{"'"}accessibilité de notre contenu et nous nous engageons à corriger
                tout problème identifié dans les meilleurs délais.
              </p>
            </div>

            {/* Technologies utilisées */}
            <div>
              <h2 className="font-titre text-2xl font-bold text-as-bleu-profond mb-4">
                Technologies utilisées
              </h2>
              <p className="font-corps text-as-gris-fonce text-lg leading-relaxed">
                Ce site a été construit avec Next.js et Tailwind CSS, en suivant les
                meilleures pratiques de développement web accessible. Les composants
                interactifs utilisent des attributs ARIA appropriés et les animations
                respectent la préférence système de réduction de mouvement
                (prefers-reduced-motion).
              </p>
            </div>

            {/* Retour d'expérience */}
            <div className="bg-white rounded-syntone p-8 border-l-4 border-as-vert-lien">
              <h2 className="font-titre text-2xl font-bold text-as-bleu-profond mb-4">
                Votre avis nous intéresse
              </h2>
              <p className="font-corps text-as-gris-fonce text-lg leading-relaxed mb-4">
                Si vous rencontrez des difficultés d{"'"}accessibilité sur notre site
                ou si vous avez des suggestions d{"'"}amélioration, nous vous invitons
                à nous en faire part. Vos commentaires sont essentiels pour nous
                aider à rendre notre site plus accessible.
              </p>
              <div className="font-corps text-as-gris-fonce">
                <p className="font-semibold text-as-bleu-profond">Atelier Syntone</p>
                <p>{SITE.region}</p>
                <a
                  href={`mailto:${SITE.courriel}`}
                  className="text-as-bleu-vif hover:text-as-bleu-profond transition-colors"
                >
                  {SITE.courriel}
                </a>
              </div>
            </div>

            {/* Cadre légal */}
            <div>
              <h2 className="font-titre text-2xl font-bold text-as-bleu-profond mb-4">
                Cadre légal
              </h2>
              <p className="font-corps text-as-gris-fonce text-lg leading-relaxed">
                Cette déclaration d{"'"}accessibilité a été rédigée en conformité avec
                les standards québécois et canadiens en matière d{"'"}accessibilité
                numérique, incluant la Loi assurant l{"'"}exercice des droits des
                personnes handicapées en vue de leur intégration scolaire,
                professionnelle et sociale du Québec.
              </p>
              <p className="font-corps text-as-gris-moyen text-base mt-4">
                Dernière mise à jour : mars 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
