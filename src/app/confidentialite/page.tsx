import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: `Politique de confidentialité d'${SITE.nom}. Découvrez comment nous protégeons vos renseignements personnels.`,
};

export default function ConfidentialitePage() {
  return (
    <>
      {/* En-tête de page */}
      <section className="bg-gradient-to-br from-as-bleu-profond via-as-bleu-vif to-as-vert-lien text-as-creme py-16 lg:py-20">
        <div className="section-container">
          <h1 className="font-titre text-4xl sm:text-5xl lg:text-6xl font-bold text-as-soleil-doux mb-4 leading-tight">
            Politique de confidentialité
          </h1>
          <p className="font-corps text-lg sm:text-xl text-as-creme/90 max-w-2xl">
            La protection de vos renseignements personnels est une priorité pour nous.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="bg-as-creme py-16 lg:py-24">
        <div className="section-container">
          <div className="max-w-3xl mx-auto space-y-12">

            {/* Introduction */}
            <div className="space-y-4">
              <p className="font-corps text-as-gris-fonce text-lg leading-relaxed">
                Atelier Syntone s{"'"}engage à protéger la vie privée et les renseignements
                personnels des personnes qui visitent son site web, participent à ses
                activités ou communiquent avec l{"'"}organisme. La présente politique
                explique quels renseignements nous recueillons, pourquoi nous les
                recueillons, comment nous les utilisons et pendant combien de temps
                nous les conservons.
              </p>
              <p className="font-corps text-as-gris-moyen text-base">
                Dernière mise à jour : mai 2026
              </p>
            </div>

            {/* Renseignements recueillis */}
            <div>
              <h2 className="font-titre text-2xl font-bold text-as-bleu-profond mb-4">
                Renseignements recueillis
              </h2>
              <div className="space-y-4 font-corps text-as-gris-fonce text-lg leading-relaxed">
                <p>
                  Nous pouvons recueillir les renseignements suivants lorsque vous
                  communiquez avec nous ou participez à nos activités :
                </p>
                <p>
                  Votre nom et vos coordonnées (courriel, téléphone) lorsque vous nous
                  contactez via le formulaire du site; les informations que vous nous
                  transmettez volontairement dans le cadre d{"'"}une demande de service,
                  d{"'"}une inscription à une activité ou d{"'"}une communication
                  avec l{"'"}organisme.
                </p>
                <p>
                  Ce site n{"'"}utilise aucun témoin de navigation (cookie) ni outil
                  de collecte de données de navigation.
                </p>
              </div>
            </div>

            {/* Finalités de la collecte */}
            <div>
              <h2 className="font-titre text-2xl font-bold text-as-bleu-profond mb-4">
                Finalités de la collecte
              </h2>
              <div className="space-y-4 font-corps text-as-gris-fonce text-lg leading-relaxed">
                <p>
                  Les renseignements personnels sont collectés pour les finalités
                  suivantes : organiser et offrir des activités éducatives, préventives
                  et de sensibilisation; adapter les contenus en fonction de l{"'"}âge
                  et des besoins généraux des groupes; assurer la communication avec
                  les participant·e·s, les parents ou les partenaires; gérer les
                  inscriptions, la logistique et la participation aux activités;
                  évaluer de manière globale la participation et l{"'"}amélioration
                  des services (sans identification individuelle); et répondre aux
                  obligations légales ou administratives de l{"'"}organisme.
                </p>
                <p>
                  L{"'"}organisme n{"'"}utilise pas les renseignements personnels dans
                  un objectif de profilage individuel ou de suivi clinique. Nous ne
                  vendons, n{"'"}échangeons ni ne louons vos renseignements personnels
                  à des tiers.
                </p>
              </div>
            </div>

            {/* Consentement et partenariats */}
            <div>
              <h2 className="font-titre text-2xl font-bold text-as-bleu-profond mb-4">
                Consentement
              </h2>
              <p className="font-corps text-as-gris-fonce text-lg leading-relaxed">
                La collecte de renseignements personnels repose sur le consentement
                libre, éclairé et manifeste de la personne concernée ou de son
                représentant légal. Dans le cadre d{"'"}activités réalisées en
                partenariat avec des établissements scolaires ou des organismes, la
                responsabilité d{"'"}obtenir les consentements nécessaires auprès des
                participant·e·s ou de leurs parents relève du partenaire, lorsque
                celui-ci organise et encadre la participation.
              </p>
            </div>

            {/* Protection des données */}
            <div>
              <h2 className="font-titre text-2xl font-bold text-as-bleu-profond mb-4">
                Protection des données
              </h2>
              <p className="font-corps text-as-gris-fonce text-lg leading-relaxed">
                Nous mettons en place des mesures de sécurité raisonnables pour
                protéger vos renseignements contre tout accès non autorisé, toute
                modification, divulgation ou destruction. L{"'"}accès aux renseignements
                personnels est limité aux membres de l{"'"}équipe qui en ont besoin
                dans le cadre de leurs fonctions.
              </p>
            </div>

            {/* Conservation et destruction */}
            <div>
              <h2 className="font-titre text-2xl font-bold text-as-bleu-profond mb-4">
                Conservation et destruction
              </h2>
              <p className="font-corps text-as-gris-fonce text-lg leading-relaxed">
                Les renseignements personnels sont conservés pour une durée maximale
                de cinq (5) ans suivant la dernière interaction avec la personne
                concernée, ou pour la durée nécessaire à l{"'"}accomplissement des
                finalités pour lesquelles ils ont été recueillis. À l{"'"}expiration
                de ce délai, les renseignements sont détruits de manière sécurisée.
              </p>
            </div>

            {/* Vos droits */}
            <div>
              <h2 className="font-titre text-2xl font-bold text-as-bleu-profond mb-4">
                Vos droits
              </h2>
              <p className="font-corps text-as-gris-fonce text-lg leading-relaxed">
                Conformément à la Loi sur la protection des renseignements personnels
                dans le secteur privé du Québec (Loi 25), vous avez le droit
                d{"'"}accéder à vos renseignements personnels, de les rectifier,
                d{"'"}en demander la suppression et d{"'"}en obtenir une copie dans
                un format technologique structuré et couramment utilisé (droit à la
                portabilité). Pour exercer ces droits ou pour toute question relative
                à la présente politique, veuillez communiquer avec la personne
                responsable identifiée ci-dessous.
              </p>
            </div>

            {/* Incidents de confidentialité */}
            <div>
              <h2 className="font-titre text-2xl font-bold text-as-bleu-profond mb-4">
                Incidents de confidentialité
              </h2>
              <p className="font-corps text-as-gris-fonce text-lg leading-relaxed">
                En cas d{"'"}incident de confidentialité présentant un risque sérieux
                de préjudice, l{"'"}organisme s{"'"}engage à aviser la Commission
                d{"'"}accès à l{"'"}information du Québec ainsi que les personnes
                concernées, conformément aux exigences de la Loi 25. Un registre
                des incidents est tenu par la personne responsable.
              </p>
            </div>

            {/* Responsable */}
            <div className="bg-white rounded-syntone p-8 border-l-4 border-as-vert-lien">
              <h2 className="font-titre text-2xl font-bold text-as-bleu-profond mb-4">
                Personne responsable
              </h2>
              <p className="font-corps text-as-gris-fonce text-lg leading-relaxed mb-4">
                La personne responsable de la protection des renseignements personnels
                veille au respect de la présente politique et peut être contactée pour
                toute question, demande d{"'"}accès, de rectification ou plainte :
              </p>
              <div className="font-corps text-as-gris-fonce space-y-1">
                <p className="font-semibold text-as-bleu-profond">Audréanne Paquin</p>
                <p>Directrice générale / Fondatrice</p>
                <p>Atelier Syntone</p>
                <a
                  href="mailto:direction@ateliersyntone.ca"
                  className="text-as-bleu-vif hover:text-as-bleu-profond transition-colors"
                >
                  direction@ateliersyntone.ca
                </a>
              </div>
            </div>

            {/* Modifications */}
            <div>
              <h2 className="font-titre text-2xl font-bold text-as-bleu-profond mb-4">
                Modifications à cette politique
              </h2>
              <p className="font-corps text-as-gris-fonce text-lg leading-relaxed">
                Nous nous réservons le droit de modifier la présente politique de
                confidentialité à tout moment. Les modifications entreront en vigueur
                dès leur publication sur cette page. Nous vous encourageons à
                consulter cette page régulièrement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
