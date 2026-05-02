'use client';

import { motion } from 'framer-motion';

const VoletNumerique = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      className="py-16 px-6 bg-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* En-tête */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-12 bg-as-corail-doux rounded-full"></div>
            <h2 className="font-titre text-4xl font-bold text-as-bleu-profond">
              Volet Sensibilisation Numérique
            </h2>
          </div>
          <p className="font-corps text-lg text-gray-700 font-medium">Tout public</p>
        </motion.div>

        {/* Description */}
        <motion.div variants={itemVariants} className="mb-10">
          <p className="font-corps text-lg text-gray-700 leading-relaxed">
            Création de contenus éducatifs vulgarisés et capsules de sensibilisation gratuites
            accessibles sur nos réseaux sociaux.
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div
          variants={itemVariants}
          className="p-6 bg-as-corail-doux/10 rounded-lg border border-as-corail-doux/20 text-center"
        >
          <p className="font-corps text-gray-700">
            Pour toute question ou suggestion de contenu, écrivez-nous à{' '}
            <a href="mailto:info@ateliersyntone.ca" className="text-as-corail-doux font-semibold hover:underline">
              info@ateliersyntone.ca
            </a>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VoletNumerique;
