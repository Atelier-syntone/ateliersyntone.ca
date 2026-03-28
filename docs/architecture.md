# Architecture technique — Atelier Syntone

## Stack technologique

| Couche | Technologie | Version | Rôle |
|--------|------------|---------|------|
| **Framework** | Next.js | 14 | App Router, SSR/SSG, API routes |
| **Styles** | Tailwind CSS | Latest | Utility-first CSS, design system |
| **Animation** | Framer Motion | Latest | Micro-interactions, transitions fluides |
| **Déploiement** | Vercel | — | Edge Network, serverless, CI/CD |
| **Runtime** | Node.js | 18+ | Serveur, API, outils de build |

## Structure des fichiers

```
src/
├── app/                          # App Router (Next.js 14)
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Page d'accueil /
│   ├── globals.css              # Styles globaux
│   ├── metadata.ts              # Configuration SEO centralisée
│   │
│   ├── (landing)/                # Route group pour pages publiques
│   │   ├── page.tsx             # Accueil (alias de /)
│   │   ├── a-propos/            # /a-propos
│   │   │   └── page.tsx
│   │   ├── impact/              # /impact
│   │   │   └── page.tsx
│   │   ├── volets/              # /volets
│   │   │   └── page.tsx
│   │   ├── partenaires/         # /partenaires
│   │   │   └── page.tsx
│   │   ├── contact/             # /contact
│   │   │   └── page.tsx
│   │   └── mentions-legales/    # /mentions-legales
│   │       └── page.tsx
│   │
│   └── api/                      # Route handlers
│       ├── contact/             # POST /api/contact
│       │   └── route.ts
│       ├── newsletter/          # POST /api/newsletter
│       │   └── route.ts
│       └── health/              # GET /api/health (monitoring)
│           └── route.ts
│
├── components/                   # Composants réutilisables
│   ├── layout/                  # Composants de mise en page
│   │   ├── Header.tsx           # Navigation principale
│   │   ├── Footer.tsx           # Pied de page
│   │   ├── Sidebar.tsx          # Barre latérale (si besoin)
│   │   └── Container.tsx        # Wrapper de contenu max-width
│   │
│   ├── sections/                # Sections de page (réutilisables)
│   │   ├── HeroSection.tsx      # Section héros avec CTA
│   │   ├── ValueSection.tsx     # Présentation des valeurs
│   │   ├── ProblematicSection.tsx # Problématique
│   │   ├── InterventionSection.tsx # Volets d'intervention
│   │   ├── TestimonialSection.tsx # Témoignages
│   │   ├── PartnerSection.tsx   # Partenaires
│   │   ├── CTASection.tsx       # Appel à l'action
│   │   └── FooterCTA.tsx        # CTA en fin de page
│   │
│   └── ui/                      # Composants d'interface (atomique)
│       ├── Button.tsx           # Boutons (variants: primary, secondary)
│       ├── Card.tsx             # Cartes génériques
│       ├── Badge.tsx            # Badges/tags
│       ├── Input.tsx            # Champs de formulaire
│       ├── Textarea.tsx         # Zones de texte
│       ├── Form.tsx             # Wrapper pour formulaires
│       ├── Icon.tsx             # Icônes réutilisables
│       ├── Modal.tsx            # Modales (si besoin)
│       ├── Breadcrumb.tsx       # Fil d'Ariane
│       └── SkeletonLoader.tsx   # Loaders pendant chargement
│
├── lib/                         # Utilitaires et helpers
│   ├── utils.ts                 # Fonctions helper générales
│   ├── classnames.ts            # Gestion des classes conditionnelles
│   ├── api.ts                   # Appels API frontend
│   ├── constants.ts             # Constantes applicatives
│   ├── validation.ts            # Schémas Zod pour validation
│   └── seo.ts                   # Fonctions SEO helpers
│
├── styles/                      # Styles additionnels (si besoin)
│   ├── variables.css            # Variables CSS personnalisées
│   ├── animations.css           # Animations réutilisables
│   └── typography.css           # Styles typographiques
│
├── public/                      # Assets statiques
│   ├── images/                  # Images (PNG, JPEG, WebP)
│   │   ├── logo.svg
│   │   ├── hero/
│   │   ├── icons/
│   │   └── illustrations/
│   ├── fonts/                   # Fichiers police (Lora, Source Sans 3, DM Sans)
│   └── favicons/                # Favicons multi-résolution
│
├── hooks/                       # React hooks personnalisés
│   ├── useMediaQuery.ts         # Hook pour responsive
│   ├── useInView.ts             # Hook pour détection viewport
│   ├── useForm.ts               # Hook pour gestion formulaires
│   └── useAnimation.ts          # Hook pour animations Framer Motion
│
└── types/                       # Définitions TypeScript
    ├── index.ts                 # Types centralisés
    ├── api.ts                   # Types API
    └── content.ts               # Types contenu
```

## Organisation des composants

### Composants de layout (`layout/`)
Éléments structurants de la page. Utilisés dans `app/layout.tsx` ou des layouts de route.

**Exemples:**
- `Header`: Navigation globale, logo, menu
- `Footer`: Liens, CTA secondaires, infos légales
- `Container`: Wrapper avec max-width + padding pour alignement

### Composants de sections (`sections/`)
Sections réutilisables composées de multiples éléments UI. Une section = une région visuelle cohérente.

**Exemples:**
- `HeroSection`: Titre + sous-titre + CTA + image
- `ValueSection`: Grille de 4 valeurs avec icônes
- `InterventionSection`: Présentation des 4 volets

### Composants UI (`ui/`)
Briques élémentaires (boutons, cartes, inputs). Atomiques, composables, sans logique métier.

**Exemples:**
- `Button`: Variants (primary, secondary), sizes (sm, md, lg)
- `Card`: Conteneur simple avec bordure et ombre
- `Input`: Champ formulaire avec labels et erreurs

## Routing

| Route | Composant | Purpose |
|-------|-----------|---------|
| `/` | `app/(landing)/page.tsx` | Accueil |
| `/a-propos` | `app/(landing)/a-propos/page.tsx` | Qui sommes-nous, mission, vision |
| `/impact` | `app/(landing)/impact/page.tsx` | Résultats, études, témoignages |
| `/volets` | `app/(landing)/volets/page.tsx` | Les 4 domaines d'intervention |
| `/partenaires` | `app/(landing)/partenaires/page.tsx` | Partenaires, collaborateurs |
| `/contact` | `app/(landing)/contact/page.tsx` | Formulaire contact + infos |
| `/mentions-legales` | `app/(landing)/mentions-legales/page.tsx` | Légal, CGU, RGPD |
| `/api/contact` | `app/api/contact/route.ts` | POST: traitement formulaire |
| `/api/newsletter` | `app/api/newsletter/route.ts` | POST: inscription newsletter |
| `/api/health` | `app/api/health/route.ts` | GET: vérification serveur |

## Système de design

### Approche CSS Variables + Tailwind

Les variables CSS personnalisées définissent la palette (couleurs, espacements, typographie). Tailwind CSS les intègre via configuration personnalisée.

**Fichier: `src/styles/variables.css`**

```css
:root {
  /* Couleurs */
  --color-primary: #2D5A4F;
  --color-secondary: #D4A574;
  --color-accent: #E8956B;
  /* ... autres couleurs (voir branding.md) ... */

  /* Espacements */
  --spacing-xs: 0.25rem;    /* 4px */
  --spacing-sm: 0.5rem;     /* 8px */
  --spacing-md: 1rem;       /* 16px */
  --spacing-lg: 1.5rem;     /* 24px */
  --spacing-xl: 2rem;       /* 32px */
  /* ... */

  /* Typographie */
  --font-serif: 'Lora', serif;
  --font-sans: 'Source Sans 3', sans-serif;
  --font-accent: 'DM Sans', sans-serif;
}
```

### Configuration Tailwind (`tailwind.config.ts`)

```typescript
export default {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        /* ... */
      },
      fontFamily: {
        serif: ['var(--font-serif)', ...],
        sans: ['var(--font-sans)', ...],
        accent: ['var(--font-accent)', ...],
      },
      spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        /* ... */
      },
    },
  },
};
```

## Stratégie SEO

### Métadonnées centralisées (`app/metadata.ts`)

Définit les defaults globales pour Open Graph, Twitter Card, icons, fonts.

```typescript
export const metadata: Metadata = {
  title: 'Atelier Syntone',
  description: '...',
  openGraph: {
    title: '...',
    description: '...',
    url: 'https://ateliersyntone.ca',
    siteName: 'Atelier Syntone',
    images: [...],
    locale: 'fr_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '...',
    description: '...',
    images: [...],
  },
  alternates: {
    canonical: 'https://ateliersyntone.ca',
  },
};
```

### Métadonnées par page

Chaque route peut surcharger les métadonnées globales:

```typescript
// app/(landing)/a-propos/page.tsx
export const metadata: Metadata = {
  title: 'À propos | Atelier Syntone',
  description: 'Découvrez la mission...',
  alternates: {
    canonical: 'https://ateliersyntone.ca/a-propos',
  },
};
```

### Open Graph et canonical URLs

- **Open Graph**: Titres, descriptions, images et locale `fr_CA` pour chaque page
- **Canonical**: URL autodéclarée sur chaque page pour éviter contenus dupliqués
- **Robots meta**: `index, follow` global, ajustable par page
- **Structured Data**: Markup JSON-LD pour organisation, localBusiness, articles (si applicable)

### Bonnes pratiques

- Titres uniques et descriptifs (50–60 caractères)
- Descriptions captivantes (150–160 caractères)
- Images optimisées (WebP, responsive sizes)
- Images Alt-text descriptifs en français
- Hiérarchie H1–H3 cohérente par page
- Liens internes stratégiques
- Performance Core Web Vitals (Lighthouse 90+)
