/* ========================================
   Utilitaires — Atelier Syntone
   ======================================== */

/**
 * Fusionne des classes CSS conditionnellement (alternative légère à clsx)
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Variantes d'animation Framer Motion réutilisables
 */
export const animationsEntree = {
  /* Apparition par le bas */
  depuisBas: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },
  /* Apparition par la gauche */
  depuisGauche: {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },
  /* Apparition avec décalage (pour listes) */
  enSequence: {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.15,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  },
} as const;
