'use client';

import { motion } from 'framer-motion';
import { SITE } from '@/lib/constants';

export default function Mission() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const floatingVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 0.6,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const rotateVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Contenu texte — gauche */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* MISSION */}
            <div>
              <motion.h2
                variants={itemVariants}
                className="section-titre text-as-vert-lien mb-6"
              >
                Notre mission
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="font-corps text-lg text-as-gris-fonce leading-relaxed mb-8"
              >
                Atelier Syntone est un organisme sans but lucratif fondé en janvier 2026, dont la mission est de rendre accessibles des connaissances fiables sur le développement humain afin de contrer la désinformation et de soutenir le pouvoir d&#39;agir des individus et des communautés dans leurs milieux de vie, dans une perspective de prévention primaire.
              </motion.p>
            </div>

            {/* Explication du nom */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 bg-white rounded-syntone p-6 border-l-4 border-as-vert-lien"
            >
              <h3 className="font-titre text-lg text-as-vert-lien">Notre nom</h3>
              <div className="space-y-3 font-corps text-as-gris-fonce">
                <div>
                  <span className="font-semibold text-as-vert-lien">Atelier</span> — Une approche active et pratique, un espace d&#39;exploration et de développement.
                </div>
                <div>
                  <span className="font-semibold text-as-vert-lien">Syntone</span> — La résonance et l&#39;harmonie entre les individus, leurs émotions et leurs relations.
                </div>
              </div>
            </motion.div>

            {/* VISION */}
            <motion.div
              variants={itemVariants}
              className="bg-as-vert-lien text-white rounded-syntone p-8"
            >
              <h3 className="font-titre text-2xl lg:text-3xl mb-4 text-white font-bold">
                Notre vision
              </h3>
              <p className="font-corps text-base lg:text-lg leading-relaxed">
                Contribuer à l&#39;émergence d&#39;une société plus équitable, consciente et outillée, où chaque personne peut mieux comprendre son fonctionnement interne et ses réactions à la lumière des données probantes.
              </p>
            </motion.div>
          </motion.div>

          {/* Élément visuel — droite : logo animé */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
              {/* Éléments flottants autour du logo */}
              <motion.div
                variants={floatingVariants}
                className="absolute top-8 left-8 w-16 h-16 rounded-full bg-as-vert-lien opacity-60"
              />
              <motion.div
                variants={floatingVariants}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-8 left-8 w-16 h-16 rounded-full bg-as-vert-lien opacity-60"
              />

              <motion.div
                variants={floatingVariants}
                className="absolute bottom-12 right-12 w-12 h-12 rounded-full bg-as-corail-doux opacity-50"
              />
              <motion.div
                variants={floatingVariants}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-12 right-12 w-12 h-12 rounded-full bg-as-corail-doux opacity-50"
              />

              <motion.div
                variants={floatingVariants}
                className="absolute top-1/2 right-4 w-10 h-10 rounded-full bg-as-soleil-doux opacity-40"
              />
              <motion.div
                variants={floatingVariants}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
                className="absolute top-1/2 right-4 w-10 h-10 rounded-full bg-as-soleil-doux opacity-40"
              />

              {/* Logo au centre avec animation de rotation et pulsation */}
              <motion.div
                variants={rotateVariants}
                animate="animate"
                className="relative z-10"
              >
                <motion.div
                  variants={pulseVariants}
                  animate="animate"
                >
                  <img
                    src="/logo/logo-syntone.png"
                    alt="Logo Atelier Syntone"
                    className="w-48 h-48 object-contain drop-shadow-lg"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
