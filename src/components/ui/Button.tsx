'use client';

import { cn } from '@/lib/utils';

/* ========================================
   Composant Bouton — Atelier Syntone
   ======================================== */

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variante?: 'primaire' | 'secondaire' | 'accent' | 'fantome';
  taille?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
}

const variantesStyles = {
  primaire:
    'bg-as-bleu-vif text-white hover:bg-as-bleu-profond focus-syntone',
  secondaire:
    'bg-as-creme text-as-bleu-profond border-2 border-as-bleu-vif hover:bg-as-bleu-vif hover:text-white focus-syntone',
  accent:
    'bg-as-corail-doux text-white hover:bg-as-terre-chaude focus-syntone',
  fantome:
    'bg-transparent text-as-bleu-vif hover:bg-as-bleu-vif/10 focus-syntone',
};

const taillesStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  variante = 'primaire',
  taille = 'md',
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    'font-accent font-semibold rounded-syntone transition-syntone inline-flex items-center justify-center',
    variantesStyles[variante],
    taillesStyles[taille],
    className
  );

  /* Si un href est fourni, rendre un lien avec l'apparence d'un bouton */
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
