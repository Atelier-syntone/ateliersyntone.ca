import Hero from '@/components/sections/Hero';
import Problematique from '@/components/sections/Problematique';
import Mission from '@/components/sections/Mission';
import Volets from '@/components/sections/Volets';
import Valeurs from '@/components/sections/Valeurs';
import Impact from '@/components/sections/Impact';
import CTA from '@/components/sections/CTA';

/* ========================================
   Page d"accueil — Atelier Syntone
   Récit d"impact : du besoin à la réponse concrète.
   ======================================== */

export default function PageAccueil() {
  return (
    <>
      {/* 1. Accroche — Comprendre. Relier. Évoluer. */}
      <Hero />

      {/* 2. Ancrer l"urgence et créer l"empathie */}
      <Problematique />

      {/* 3. Présenter la mission et la vision de l"OBNL */}
      <Mission />

      {/* 4. Construire la confiance par les valeurs */}
      <Valeurs />

      {/* 5. Détailler les quatre volets d"intervention */}
      <Volets />

      {/* 6. Convaincre par l"impact */}
      <Impact />

      {/* 7. Appel à l"action — convertir */}
      <CTA />
    </>
  );
}
