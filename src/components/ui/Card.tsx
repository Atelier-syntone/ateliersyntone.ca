'use client';

import { cn } from '@/lib/utils';

/* ========================================
   Composant Carte — Atelier Syntone
   ======================================== */

interface CardProps {
  children: React.ReactNode;
  variante?: 'defaut' | 'sureleve' | 'accent';
  className?: string;
  style?: React.CSSProperties;
}

const variantesStyles = {
  defaut: 'bg-white border border-as-gris-clair',
  sureleve: 'bg-white shadow-lg shadow-as-bleu-profond/5',
  accent: 'bg-as-bleu-profond text-white',
};

export default function Card({
  children,
  variante = 'defaut',
  className,
  style,
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-syntone p-6 sm:p-8 transition-syntone',
        variantesStyles[variante],
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}
