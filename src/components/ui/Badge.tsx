'use client';

import { cn } from '@/lib/utils';

/* ========================================
   Composant Badge — Atelier Syntone
   Étiquette compacte pour catégories et thématiques.
   ======================================== */

interface BadgeProps {
  children: React.ReactNode;
  variante?: 'defaut' | 'bleu' | 'vert' | 'soleil';
  className?: string;
}

const variantesStyles = {
  defaut: 'bg-as-gris-clair text-as-gris-fonce',
  bleu: 'bg-as-bleu-clair/20 text-as-bleu-profond',
  vert: 'bg-as-vert-lien/15 text-as-vert-lien',
  soleil: 'bg-as-soleil-doux/20 text-as-terre-chaude',
};

export default function Badge({
  children,
  variante = 'defaut',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'font-accent text-xs sm:text-sm font-medium px-3 py-1 rounded-full inline-block',
        variantesStyles[variante],
        className
      )}
    >
      {children}
    </span>
  );
}
