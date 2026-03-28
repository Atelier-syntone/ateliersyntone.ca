'use client';

import { SITE } from '@/lib/constants';
import Navigation from './Navigation';
import Button from '@/components/ui/Button';

/* ========================================
   Composant En-tête — Atelier Syntone
   En-tête fixe avec logo, navigation et CTA.
   ======================================== */

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-as-gris-clair/50">
      {/* Lien d'évitement pour l'accessibilité */}
      <a href="#contenu-principal" className="skip-to-content">
        Aller au contenu principal
      </a>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 relative">
          {/* Logo / Nom */}
          <a href="/" className="flex items-center gap-3 focus-syntone rounded-syntone">
            {/* Logo SVG */}
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
              <img src="/logo/logo-syntone.png" alt="Logo Atelier Syntone" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-titre text-lg sm:text-xl font-bold text-as-bleu-profond leading-tight">
                {SITE.nom}
              </span>
              <span className="hidden sm:block font-accent text-xs text-as-gris-moyen tracking-wider uppercase">
                {SITE.slogan}
              </span>
            </div>
          </a>

          {/* Navigation + CTA */}
          <div className="flex items-center gap-4">
            <Navigation />
            <Button
              variante="primaire"
              taille="sm"
              href="/contact"
              className="hidden md:inline-flex"
            >
              Nous joindre
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
