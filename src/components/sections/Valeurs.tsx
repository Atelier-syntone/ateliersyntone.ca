'use client';

import { motion } from 'framer-motion';
import { VALEURS } from '@/lib/constants';
import Card from '@/components/ui/Card';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// SVG symbols pour chaque valeur
const HumanismeSymbol = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12">
    <path
      d="M24 8C20.7 8 18 10.7 18 14C18 17.3 20.7 20 24 20C27.3 20 30 17.3 30 14C30 10.7 27.3 8 24 8Z"
      fill="currentColor"
    />
    <path
      d="M12 30C12 26 16 23 24 23C32 23 36 26 36 30V40H12V30Z"
      fill="currentColor"
    />
    <path
      d="M8 33C6.5 33 5 34.5 5 36V40H5C4 40 3 39 3 38V36C3 33.2 5.2 31 8 31"
      fill="currentColor"
      opacity="0.6"
    />
    <path
      d="M40 33C41.5 33 43 34.5 43 36V40H43C44 40 45 39 45 38V36C45 33.2 42.8 31 40 31"
      fill="currentColor"
      opacity="0.6"
    />
  </svg>
);

const RigueurSymbol = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12">
    <circle cx="24" cy="24" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M24 12V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M24 42V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M36 24H42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M6 24H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M34.2 13.8L38.2 9.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M13.8 34.2L9.8 38.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M34.2 34.2L38.2 38.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M13.8 13.8L9.8 9.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const EquiteSymbol = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12">
    {/* Pilier central */}
    <path d="M24 8V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Base */}
    <path d="M18 40H30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    {/* Poutre horizontale */}
    <path d="M8 16H40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Chaînes gauche */}
    <path d="M12 16V26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    {/* Chaînes droite */}
    <path d="M36 16V26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    {/* Plateau gauche */}
    <path d="M5 26C5 26 8 30 12 30C16 30 19 26 19 26" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* Plateau droit */}
    <path d="M29 26C29 26 32 30 36 30C40 30 43 26 43 26" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* Sommet décoratif */}
    <circle cx="24" cy="8" r="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const EmpouvoirementSymbol = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12">
    <path
      d="M24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M24 28V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M24 16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24 16L28 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 32C20 28 22 26 24 26C26 26 28 28 30 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Valeurs() {
  const symbolMap: { [key: string]: React.ReactNode } = {
    Humanisme: <HumanismeSymbol />,
    Rigueur: <RigueurSymbol />,
    Équité: <EquiteSymbol />,
    Empouvoirement: <EmpouvoirementSymbol />,
  };

  return (
    <section className="bg-as-vert-lien py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-titre text-3xl sm:text-4xl lg:text-5xl font-bold text-as-soleil-doux mb-12 md:mb-16">
            Nos valeurs
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {VALEURS.map((valeur, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card variante="defaut" className="h-full bg-white">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-as-vert-lien mb-4 flex items-center justify-center text-as-vert-lien">
                  {symbolMap[valeur.titre] || (
                    <span className="text-lg font-bold">
                      {valeur.titre.charAt(0)}
                    </span>
                  )}
                </div>
                <h3 className="font-titre text-xl md:text-2xl mb-3 text-as-vert-lien">
                  {valeur.titre}
                </h3>
                <p className="font-corps text-as-gris-moyen leading-relaxed">
                  {valeur.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
