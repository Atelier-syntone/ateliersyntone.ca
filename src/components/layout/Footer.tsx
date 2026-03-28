import { SITE, NAVIGATION } from '@/lib/constants';

/* ========================================
   Composant Pied de page — Atelier Syntone
   Pied de page avec liens, coordonnées et mention légale.
   ======================================== */

export default function Footer() {
  const annee = new Date().getFullYear();

  return (
    <footer className="bg-as-bleu-profond text-white" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Colonne 1 — À propos */}
          <div>
            <h3 className="font-titre text-xl font-bold text-white mb-4">
              {SITE.nom}
            </h3>
            <p className="font-corps text-sm text-as-bleu-clair/80 leading-relaxed mb-4">
              {SITE.description}
            </p>
            <p className="font-accent text-xs text-as-bleu-clair/60">
              {SITE.region}
            </p>
          </div>

          {/* Colonne 2 — Liens rapides */}
          <div>
            <h3 className="font-accent text-sm font-semibold uppercase tracking-wider text-as-soleil-doux mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAVIGATION.map((lien) => (
                <li key={lien.href}>
                  <a
                    href={lien.href}
                    className="font-corps text-sm text-white/80 hover:text-as-soleil-doux transition-syntone"
                  >
                    {lien.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Contact */}
          <div>
            <h3 className="font-accent text-sm font-semibold uppercase tracking-wider text-as-soleil-doux mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SITE.courriel}`}
                  className="font-corps text-sm text-white/80 hover:text-as-soleil-doux transition-syntone"
                >
                  {SITE.courriel}
                </a>
              </li>
              <li className="font-corps text-sm text-white/60">
                Manicouagan, Côte-Nord, Québec
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur et mention légale */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-accent text-xs text-white/50">
              © {annee} {SITE.nom}. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="/confidentialite"
                className="font-accent text-xs text-white/50 hover:text-white/80 transition-syntone"
              >
                Politique de confidentialité
              </a>
              <a
                href="/accessibilite"
                className="font-accent text-xs text-white/50 hover:text-white/80 transition-syntone"
              >
                Accessibilité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
