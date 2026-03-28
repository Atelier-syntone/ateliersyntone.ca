'use client';

import { motion } from 'framer-motion';

const VoletJeunesse = () => {
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
      className="py-16 px-6 bg-gradient-to-br from-white to-as-creme"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* En-tête */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-12 bg-as-vert-lien rounded-full"></div>
            <h2 className="font-titre text-4xl font-bold text-as-bleu-profond">
              Volet Jeunesse
            </h2>
          </div>
          <p className="font-corps text-lg text-gray-700 font-medium">8 à 18 ans</p>
        </motion.div>

        {/* Description */}
        <motion.div variants={itemVariants} className="mb-10">
          <p className="font-corps text-lg text-gray-700 leading-relaxed">
            Des ateliers interactifs et ludiques conçus spécifiquement pour les jeunes,
            offrant des espaces sécuritaires de parole et d{"'"}exploration de soi. Nous créons
            un environnement bienveillant où chaque jeune peut se sentir entendu et respecté.
          </p>
        </motion.div>

        {/* Public cible */}
        <motion.div variants={itemVariants} className="mb-12 p-6 bg-as-vert-lien/10 rounded-lg border border-as-vert-lien/20">
          <h3 className="font-accent text-sm font-semibold text-as-vert-lien uppercase tracking-wide mb-2">
            Public cible
          </h3>
          <p className="font-corps text-gray-700">
            Jeunes de 8 à 18 ans, en groupes, dans les écoles,
            organismes communautaires et espaces jeunesse.
          </p>
        </motion.div>

        {/* Approche de groupe */}
        <motion.div variants={itemVariants} className="mb-12">
          <h3 className="font-titre text-2xl font-bold text-as-bleu-profond mb-6">
            Services de groupe
          </h3>
          <p className="font-corps text-lg text-gray-700 leading-relaxed mb-6">
            Nos ateliers sont offerts en format de groupe afin de maximiser
            l{"'"}accessibilité dans toutes les régions du Québec. Cette approche communautaire
            permet de rejoindre un plus grand nombre de jeunes tout en favorisant les échanges
            et le soutien entre pairs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 bg-white rounded-lg border border-as-vert-lien/20 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-as-vert-lien/10 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-as-vert-lien" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-titre font-semibold text-as-bleu-profond mb-1">Accessibilité</h4>
              <p className="font-corps text-sm text-gray-600">Rejoindre les communautés de toutes les régions</p>
            </div>
            <div className="p-5 bg-white rounded-lg border border-as-vert-lien/20 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-as-vert-lien/10 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-as-vert-lien" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-titre font-semibold text-as-bleu-profond mb-1">Soutien entre pairs</h4>
              <p className="font-corps text-sm text-gray-600">Favoriser les échanges et la solidarité</p>
            </div>
            <div className="p-5 bg-white rounded-lg border border-as-vert-lien/20 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-as-vert-lien/10 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-as-vert-lien" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-titre font-semibold text-as-bleu-profond mb-1">Modèle adapté</h4>
              <p className="font-corps text-sm text-gray-600">Un modèle communautaire pensé pour le contexte économique</p>
            </div>
          </div>
        </motion.div>

        {/* Invitation contact */}
        <motion.div
          variants={itemVariants}
          className="p-8 bg-gradient-to-r from-as-vert-lien to-as-bleu-vif rounded-lg text-white text-center"
        >
          <h3 className="font-titre text-2xl font-bold mb-3">
            Intéressé par nos ateliers jeunesse?
          </h3>
          <p className="font-corps text-white/90 mb-6 max-w-lg mx-auto">
            Contactez-nous pour discuter des besoins de votre groupe et planifier
            des ateliers adaptés à vos jeunes.
          </p>
          <a
            href="mailto:info@ateliersyntone.ca"
            className="inline-block bg-white text-as-vert-lien font-accent font-semibold px-8 py-3 rounded-full hover:bg-as-creme transition-colors"
          >
            info@ateliersyntone.ca
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VoletJeunesse;
