'use client';

import { useState, FormEvent } from 'react';

export default function FormulaireContact() {
  const [enCours, setEnCours] = useState(false);
  const [statut, setStatut] = useState<'idle' | 'succes' | 'erreur'>('idle');
  const [messageErreur, setMessageErreur] = useState('');
  const [consentement, setConsentement] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnCours(true);
    setStatut('idle');
    setMessageErreur('');

    const formData = new FormData(e.currentTarget);
    const donnees = {
      nom: formData.get('nom') as string,
      email: formData.get('email') as string,
      sujet: formData.get('sujet') as string,
      message: formData.get('message') as string,
    };

    try {
      const reponse = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(donnees),
      });

      const resultat = await reponse.json();

      if (reponse.ok) {
        setStatut('succes');
        setConsentement(false);
        // Réinitialiser le formulaire
        (e.target as HTMLFormElement).reset();
      } else {
        setStatut('erreur');
        setMessageErreur(resultat.error || 'Une erreur est survenue.');
      }
    } catch {
      setStatut('erreur');
      setMessageErreur('Impossible de contacter le serveur. Veuillez réessayer.');
    } finally {
      setEnCours(false);
    }
  }

  return (
    <div>
      <h2 className="font-titre text-3xl font-bold text-as-bleu-profond mb-8">
        Envoyez-nous un message
      </h2>

      {/* Message de succès */}
      {statut === 'succes' && (
        <div className="mb-6 p-4 bg-as-vert-lien/10 border border-as-vert-lien/30 rounded-syntone">
          <p className="font-corps text-as-vert-lien font-semibold">
            Votre message a été envoyé avec succès! Nous vous répondrons dans les 2 à 3 jours ouvrables.
          </p>
        </div>
      )}

      {/* Message d'erreur */}
      {statut === 'erreur' && (
        <div className="mb-6 p-4 bg-as-corail-doux/10 border border-as-corail-doux/30 rounded-syntone">
          <p className="font-corps text-as-corail-doux font-semibold">
            {messageErreur}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Champ Nom */}
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

        {/* Champ Courriel */}
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

        {/* Champ Sujet */}
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

        {/* Champ Message */}
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

        {/* Case de consentement */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="consentement"
            name="consentement"
            checked={consentement}
            onChange={(e) => setConsentement(e.target.checked)}
            required
            className="mt-1 h-5 w-5 rounded border-as-gris-clair text-as-bleu-vif focus:ring-as-bleu-vif cursor-pointer flex-shrink-0"
          />
          <label htmlFor="consentement" className="font-corps text-sm text-as-gris-moyen leading-relaxed cursor-pointer">
            J{"'"}accepte que mes renseignements personnels soient utilisés par
            Atelier Syntone pour répondre à ma demande, conformément à
            la{' '}
            <a
              href="/confidentialite"
              target="_blank"
              rel="noopener noreferrer"
              className="text-as-bleu-vif hover:text-as-bleu-profond underline transition-colors"
            >
              politique de confidentialité
            </a>.
          </label>
        </div>

        {/* Bouton Envoyer */}
        <button
          type="submit"
          disabled={enCours || !consentement}
          className="w-full px-6 py-3 bg-as-bleu-vif hover:bg-as-bleu-profond text-as-creme font-corps font-semibold rounded-syntone transition-syntone focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-as-bleu-vif disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Envoyer le formulaire de contact"
        >
          {enCours ? 'Envoi en cours...' : 'Envoyer le message'}
        </button>
      </form>
    </div>
  );
}
