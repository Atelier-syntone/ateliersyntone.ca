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
                recueillons et comment nous les utilisons.
              </p>
              <p className="font-corps text-as-gris-moyen text-base">
                Dernière mise à jour : mars 2026
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
                  communiquez avec nous ou utilisez nos services :
                </p>
                <p>
                  Votre nom et vos coordonnées (courriel, téléphone) lorsque vous nous
                  contactez via le formulaire du site; les informations que vous nous
                  transmettez volontairement dans le cadre d{"'"}une demande de service
                  ou d{"'"}inscription à une activité; ainsi que des données techniques
                  anonymisées liées à la navigation sur notre site (pages visitées,
                  durée de visite) recueillies par des outils d{"'"}analyse web.
                </p>
              </div>
            </div>

            {/* Utilisation des renseignements */}
            <div>
              <h2 className="font-titre text-2xl font-bold text-as-bleu-profond mb-4">
                Utilisation des renseignements
              </h2>
              <div className="space-y-4 font-corps text-as-gris-fonce text-lg leading-relaxed">
                <p>
                  Les renseignements recueillis servent exclusivement à répondre à
                  vos demandes, vous informer de nos activités et services, améliorer
                  notre offre et l{"'"}expérience utilisateur du site, et respecter nos
                  obligations légales. Nous ne vendons, n{"'"}échangeons ni ne louons
                  vos renseignements personnels à des tiers.
                </p>
              </div>
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

            {/* Témoins (Cookies) */}
            <div>
              <h2 className="font-titre text-2xl font-bold text-as-bleu-profond mb-4">
                Témoins de navigation (cookies)
              </h2>
              <p className="font-corps text-as-gris-fonce text-lg leading-relaxed">
                Notre site peut utiliser des témoins de navigation pour améliorer
                votre expérience. Les témoins sont de petits fichiers stockés sur
                votre appareil qui nous permettent de mémoriser certaines préférences.
                Vous pouvez configurer votre navigateur pour refuser les témoins,
                mais certaines fonctionnalités du site pourraient être affectées.
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
                d{"'"}accéder à vos renseignements personnels, de les rectifier
                et d{"'"}en demander la suppression. Pour exercer ces droits ou
                pour toute question relative à la présente politique, veuillez
                communiquer avec nous.
              </p>
            </div>

            {/* Responsable */}
            <div className="bg-white rounded-syntone p-8 border-l-4 border-as-vert-lien">
              <h2 className="font-titre text-2xl font-bold text-as-bleu-profond mb-4">
                Personne responsable
              </h2>
              <p className="font-corps text-as-gris-fonce text-lg leading-relaxed mb-4">
                Pour toute question concernant la protection de vos renseignements
                personnels ou pour exercer vos droits, vous pouvez communiquer avec
                notre responsable de la protection des renseignements personnels :
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
