'use client';

import { cn } from '@/lib/utils';

/* ========================================
   Composant Bloc Statistique — Atelier Syntone
   Affiche un chiffre clé avec son contexte.
   ======================================== */

interface StatBlockProps {
  chiffre: string;
  unite?: string;
  description: string;
  source?: string;
  className?: string;
}

export default function StatBlock({
  chiffre,
  unite,
  description,
  source,
  className,
}: StatBlockProps) {
  return (
    <div className={cn('text-center p-6', className)}>
      <div className="flex items-baseline justify-center gap-1 mb-3">
        <span className="font-titre text-4xl sm:text-5xl lg:text-6xl font-bold text-as-corail-doux">
          {chiffre}
        </span>
        {unite && (
          <span className="font-accent text-lg text-as-gris-moyen">
            {unite}
          </span>
        )}
      </div>
      <p className="font-corps text-base sm:text-lg text-as-gris-fonce leading-relaxed">
        {description}
      </p>
      {source && (
        <p className="font-accent text-xs text-as-gris-moyen mt-2 italic">
          Source : {source}
        </p>
      )}
    </div>
  );
}
