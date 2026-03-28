'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { VOLETS } from '@/lib/constants';

/* Styles statiques + couleurs CSS inline (fallback anti-purge Tailwind) */
const cardStyles = [
  {
    border: 'border-as-vert-lien',
    borderColor: '#3A8C6E',
    badgeBg: 'bg-as-vert-lien/10',
    badgeText: 'text-as-vert-lien',
    badgeBorder: 'border-as-vert-lien/30',
  },
  {
    border: 'border-as-soleil-doux',
    borderColor: '#E8B84B',
    badgeBg: 'bg-as-soleil-doux/10',
    badgeText: 'text-as-soleil-doux',
    badgeBorder: 'border-as-soleil-doux/30',
  },
  {
    border: 'border-as-bleu-vif',
    borderColor: '#2D6EA0',
    badgeBg: 'bg-as-bleu-vif/10',
    badgeText: 'text-as-bleu-vif',
    badgeBorder: 'border-as-bleu-vif/30',
  },
  {
    border: 'border-as-corail-doux',
    borderColor: '#D96B5A',
    badgeBg: 'bg-as-corail-doux/10',
    badgeText: 'text-as-corail-doux',
    badgeBorder: 'border-as-corail-doux/30',
  },
];

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
          <h2 className="font-titre text-3xl sm:text-4xl lg:text-5xl font-bold text-as-bleu-profond mb-4">
            Nos volets d&#39;intervention
          </h2>
          <p className="font-corps text-as-gris-moyen text-lg max-w-3xl mx-auto">
            Une approche systémique et complémentaire, offerte en services de groupe
            pour maximiser l&#39;accessibilité dans toutes les régions du Québec.
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
          {VOLETS.map((volet, index) => {
            const style = cardStyles[index % cardStyles.length];
            return (
              <motion.div
                key={volet.id}
                variants={itemVariants}
                className="h-full"
              >
                <Card
                  className="h-full flex flex-col border-t-4 hover:shadow-lg transition-syntone"
                  style={{ borderTopColor: style.borderColor }}
                >
                  {/* Icône */}
                  {volet.icone && (
                    <div className="text-4xl mb-4">
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
                        className={`${style.badgeBg} ${style.badgeText} border ${style.badgeBorder}`}
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
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
