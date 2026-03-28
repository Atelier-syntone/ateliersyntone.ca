import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nous joindre',
  description: 'Contactez Atelier Syntone pour des questions, des partenariats ou pour en savoir plus sur nos services.',
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
            Avez-vous une question? Voulez-vous explorer un partenariat? Écrivez-nous!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-as-creme py-16 lg:py-24">
        <div className="section-container">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-titre text-3xl font-bold text-as-bleu-profond mb-8">
                Envoyez-nous un message
              </h2>

              <form className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="nom" className="block font-corps font-semibold text-as-gris-fonce mb-2">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    aria-label="Votre nom"
                    className="w-full px-4 py-3 rounded-syntone border border-as-gris-clair focus-syntone font-corps text-as-gris-fonce placeholder-as-gris-moyen bg-white transition-syntone"
                    placeholder="Jean Dupont"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block font-corps font-semibold text-as-gris-fonce mb-2">
                    Votre courriel
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    aria-label="Votre courriel"
                    className="w-full px-4 py-3 rounded-syntone border border-as-gris-clair focus-syntone font-corps text-as-gris-fonce placeholder-as-gris-moyen bg-white transition-syntone"
                    placeholder="jean.dupont@exemple.ca"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="sujet" className="block font-corps font-semibold text-as-gris-fonce mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="sujet"
                    name="sujet"
                    required
                    aria-label="Sujet de votre message"
                    className="w-full px-4 py-3 rounded-syntone border border-as-gris-clair focus-syntone font-corps text-as-gris-fonce placeholder-as-gris-moyen bg-white transition-syntone"
                    placeholder="Ex: Partenariat ou Question"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block font-corps font-semibold text-as-gris-fonce mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    aria-label="Votre message"
                    className="w-full px-4 py-3 rounded-syntone border border-as-gris-clair focus-syntone font-corps text-as-gris-fonce placeholder-as-gris-moyen bg-white transition-syntone resize-none"
                    placeholder="Partagez vos pensées, questions ou propositions..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-as-bleu-vif hover:bg-as-bleu-profond text-as-creme font-corps font-semibold rounded-syntone transition-syntone focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-as-bleu-vif"
                  aria-label="Envoyer le formulaire de contact"
                >
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-titre text-3xl font-bold text-as-bleu-profond mb-8">
                Informations de contact
              </h2>

              <div className="space-y-8">
                {/* Email */}
                <div className="bg-white rounded-syntone p-6 border-l-4 border-as-bleu-vif">
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

                {/* Location */}
                <div className="bg-white rounded-syntone p-6 border-l-4 border-as-vert-lien">
                  <h3 className="font-titre text-lg font-bold text-as-bleu-profond mb-2">
                    Localisation
                  </h3>
                  <p className="font-corps text-as-gris-fonce text-lg leading-relaxed">
                    Manicouagan, Côte-Nord<br />
                    Québec, Canada
                  </p>
                </div>

                {/* Response Time */}
                <div className="bg-as-bleu-profond/5 rounded-syntone p-6 border-l-4 border-as-soleil-doux">
                  <h3 className="font-titre text-lg font-bold text-as-bleu-profond mb-2">
                    Délai de réponse
                  </h3>
                  <p className="font-corps text-as-gris-fonce text-lg">
                    Nous nous engageons à répondre à tous les messages en l'espace de 2 à 3 jours ouvrables.
                  </p>
                </div>

                {/* About Section */}
                <div className="bg-as-creme rounded-syntone p-6 border border-as-gris-clair">
                  <h3 className="font-titre text-lg font-bold text-as-bleu-profond mb-3">
                    Qui sommes-nous?
                  </h3>
                  <p className="font-corps text-as-gris-moyen text-base leading-relaxed">
                    Atelier Syntone est un organisme sans but lucratif fondé en janvier 2026, dédié à
                    rendre accessibles des connaissances fiables sur le développement humain. Nous travaillons
                    avec les jeunes, les parents, les intervenant·e·s et le grand public pour créer
                    des changements positifs dans les communautés.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
