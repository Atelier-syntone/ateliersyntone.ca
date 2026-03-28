'use client';

import { useState } from 'react';
import { NAVIGATION, SITE } from '@/lib/constants';
import { cn } from '@/lib/utils';

/* ========================================
   Composant Navigation — Atelier Syntone
   Navigation responsive avec menu hamburger mobile.
   ======================================== */

export default function Navigation() {
  const [menuOuvert, setMenuOuvert] = useState(false);

  return (
    <nav
      className="font-accent"
      role="navigation"
      aria-label="Navigation principale"
    >
      {/* Navigation bureau */}
      <ul className="hidden md:flex items-center gap-8">
        {NAVIGATION.map((lien) => (
          <li key={lien.href}>
            <a
              href={lien.href}
              className="text-as-bleu-profond hover:text-as-bleu-vif transition-syntone text-sm font-medium tracking-wide uppercase"
            >
              {lien.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Bouton hamburger mobile */}
      <button
        className="md:hidden p-2 focus-syntone rounded-syntone"
        onClick={() => setMenuOuvert(!menuOuvert)}
        aria-expanded={menuOuvert}
        aria-controls="menu-mobile"
        aria-label={menuOuvert ? 'Fermer le menu' : 'Ouvrir le menu'}
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span
            className={cn(
              'w-full h-0.5 bg-as-bleu-profond transition-syntone origin-left',
              menuOuvert && 'rotate-45'
            )}
          />
          <span
            className={cn(
              'w-full h-0.5 bg-as-bleu-profond transition-syntone',
              menuOuvert && 'opacity-0'
            )}
          />
          <span
            className={cn(
              'w-full h-0.5 bg-as-bleu-profond transition-syntone origin-left',
              menuOuvert && '-rotate-45'
            )}
          />
        </div>
      </button>

      {/* Menu mobile */}
      {menuOuvert && (
        <div
          id="menu-mobile"
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-as-gris-clair z-50"
        >
          <ul className="flex flex-col py-4">
            {NAVIGATION.map((lien) => (
              <li key={lien.href}>
                <a
                  href={lien.href}
                  className="block px-6 py-3 text-as-bleu-profond hover:bg-as-creme transition-syntone text-base font-medium"
                  onClick={() => setMenuOuvert(false)}
                >
                  {lien.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
