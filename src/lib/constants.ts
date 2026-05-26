/* ========================================
   Constantes globales — Atelier Syntone
   ======================================== */

/* Informations de l'organisme */
export const SITE = {
  nom: 'Atelier Syntone',
  domaine: 'ateliersyntone.ca',
  url: 'https://ateliersyntone.ca',
  description:
    'Organisme sans but lucratif dont la mission est de rendre accessibles des connaissances fiables sur le développement humain afin de contrer la désinformation et de soutenir le pouvoir d\'agir des individus et des communautés.',
  slogan: 'Comprendre. Relier. Évoluer.',
  courriel: 'info@ateliersyntone.ca',
  region: 'Manicouagan, Côte-Nord, Québec',
  fondation: 'janvier 2026',
} as const;

/* Navigation principale */
export const NAVIGATION = [
  { label: 'Accueil', href: '/' },
  { label: 'Mission', href: '/mission' },
  { label: 'Volets', href: '/volets' },
  { label: 'Impact', href: '/impact' },
  { label: 'À propos', href: '/a-propos' },
] as const;

/* Volets d'intervention */
export const VOLETS = [
  {
    id: 'jeunesse',
    titre: 'Jeunesse',
    trancheAge: '8 à 18 ans',
    description:
      'Ateliers interactifs complémentaires au programme scolaire, activités ludiques et éducatives, espaces sécuritaires de parole.',
    icone: '🌱',
  },
  {
    id: 'parentalite',
    titre: 'Parentalité et grand public',
    trancheAge: 'Adultes',
    description:
      'Ateliers et conférences éducatives, diffusion d\'outils concrets validés scientifiquement.',
    icone: '🏠',
  },
  {
    id: 'intervenants',
    titre: 'Intervenant·e·s',
    trancheAge: 'Professionnel·le·s',
    description:
      'Formations continues, conférences et espaces de réflexion, coaching professionnel de groupe.',
    icone: '🤝',
  },
  {
    id: 'numerique',
    titre: 'Sensibilisation numérique',
    trancheAge: 'Tout public',
    description:
      'Création de contenus éducatifs vulgarisés et capsules de sensibilisation gratuites accessibles sur nos réseaux sociaux.',
    icone: '💻',
  },
] as const;

/* Valeurs de l'organisme */
export const VALEURS = [
  {
    titre: 'Humanisme',
    description:
      'Respecter la dignité de chaque personne et reconnaître son potentiel évolutif, en tenant compte de son parcours et de son contexte.',
  },
  {
    titre: 'Rigueur',
    description:
      'Fonder les actions et les contenus sur des données probantes, dans un souci de qualité, de cohérence et de crédibilité.',
  },
  {
    titre: 'Équité',
    description:
      'Agir sur les conditions sociales et relationnelles afin de favoriser un accès juste aux connaissances et de prévenir les dynamiques de pouvoir.',
  },
  {
    titre: 'Empouvoirement',
    description:
      'Soutenir l\'autonomie, la capacité de réflexion et la prise de décision consciente des individus et des communautés.',
  },
] as const;

/* Phases de la feuille de route */
export const ROADMAP = [
  {
    phase: 1,
    titre: 'Démarrage et ancrage',
    annee: '2026',
    contenu:
      'Structure organisationnelle, développement des contenus, projets pilotes (scolaire, communautaire), premiers partenariats locaux, lancement des plateformes numériques.',
  },
  {
    phase: 2,
    titre: 'Consolidation et expansion',
    annee: '2027',
    contenu:
      'Bonification des contenus, augmentation des partenaires, déploiement structuré sur la Côte-Nord, offre de formations formalisée, outils éducatifs transférables, diversification du financement.',
  },
  {
    phase: 3,
    titre: 'Déploiement élargi et pérennisation',
    annee: '2028',
    contenu:
      'Expansion suprarégionale ou provinciale, positionnement comme référence en prévention socioémotionnelle, financement récurrent à la mission, formations accréditées.',
  },
] as const;
