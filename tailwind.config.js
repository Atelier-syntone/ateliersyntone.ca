/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    /* Bordures de couleur utilisées dynamiquement dans les cartes Volets */
    'border-as-vert-lien',
    'border-as-soleil-doux',
    'border-as-bleu-vif',
    'border-as-corail-doux',
    'bg-as-vert-lien/10',
    'bg-as-soleil-doux/10',
    'bg-as-bleu-vif/10',
    'bg-as-corail-doux/10',
    'text-as-vert-lien',
    'text-as-soleil-doux',
    'text-as-bleu-vif',
    'text-as-corail-doux',
    'border-as-vert-lien/30',
    'border-as-soleil-doux/30',
    'border-as-bleu-vif/30',
    'border-as-corail-doux/30',
  ],
  theme: {
    extend: {
      /* Palette Atelier Syntone */
      colors: {
        'as': {
          /* Primaires */
          'bleu-profond': '#1A2E4A',
          'bleu-vif': '#2D6EA0',
          'bleu-clair': '#6AABCC',
          /* Secondaires */
          'terre-chaude': '#8B6845',
          'soleil-doux': '#E8B84B',
          'creme': '#F7F3EE',
          /* Accents */
          'vert-lien': '#3A8C6E',
          'corail-doux': '#D96B5A',
          /* Neutres */
          'gris-fonce': '#2C2C2C',
          'gris-moyen': '#6B6B6B',
          'gris-clair': '#E8E8E8',
        },
      },
      /* Typographies */
      fontFamily: {
        'titre': ['Lora', 'Georgia', 'serif'],
        'corps': ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        'accent': ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      /* Espacements personnalisés */
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      /* Bordures arrondies */
      borderRadius: {
        'syntone': '0.625rem',
      },
    },
  },
  plugins: [],
};
