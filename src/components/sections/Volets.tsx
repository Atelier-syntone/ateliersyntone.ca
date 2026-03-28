'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { VOLETS } from '@/lib/constants';

export default function Volets() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const accentColors = [
    'as-vert-lien',
    'as-soleil-doux',
    'as-bleu-vif',
    'as-corail-doux',
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="section-container">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="font-titre text-3xl sm:text-4xl lg:text-5xl font-bold text-as-soleil-doux mb-4">
            Nos volets d{"'"}intervention
          </h2>
          <p className="font-corps text-as-gris-moyen text-lg max-w-3xl mx-auto">
            Une approche systémique et complémentaire, offerte en services de groupe
            pour maximiser l{"'"}accessibilité dans toutes les régions du Québec.
          </p>
        </motion.div>

        {/* Grille de volets */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {VOLETS.map((volet, index) => (
            <motion.div
              key={volet.id}
              variants={itemVariants}
              className="h-full"
            >
              <Card
                className={`h-full flex flex-col border-t-4 border-${accentColors[index % accentColors.length]} hover:shadow-lg transition-syntone`}
              >
                {/* Icône */}
                {volet.icone && (
                  <div className={`text-4xl mb-4`}>
                    {volet.icone}
                  </div>
                )}

                {/* Titre */}
                <h3 className="font-titre text-lg text-as-bleu-profond mb-3">
                  {volet.titre}
                </h3>

                {/* Badge tranche d'âge */}
                {volet.trancheAge && (
                  <div className="mb-4">
                    <Badge
                      className={`bg-${accentColors[index % accentColors.length]}/10 text-${accentColors[index % accentColors.length]} border border-${accentColors[index % accentColors.length]}/30`}
                    >
                      {volet.trancheAge}
                    </Badge>
                  </div>
                )}

                {/* Description */}
                <p className="font-corps text-sm text-as-gris-fonce leading-relaxed flex-grow">
                  {volet.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
