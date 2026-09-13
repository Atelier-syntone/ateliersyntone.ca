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

        {/* Nos services */}
        <motion.div variants={itemVariants} className="mb-12">
          <h3 className="font-titre text-2xl font-bold text-as-bleu-profond mb-6">
            Nos services
          </h3>
          <div className="space-y-5 mb-8">
            <p className="font-corps text-lg text-gray-700 leading-relaxed">
              Nos ateliers sont offerts en groupe afin d{"'"}aller à la rencontre des jeunes dans
              leurs milieux de vie et de rendre accessibles des connaissances sur le développement
              humain et les relations.
            </p>
            <p className="font-corps text-lg text-gray-700 leading-relaxed">
              Selon les besoins du milieu, les ateliers peuvent notamment aborder les stéréotypes
              de genre et leurs impacts sur le développement, le masculinisme ainsi que les
              dynamiques de pouvoir et de contrôle dans les relations. Ces sujets sont abordés à
              partir de données probantes et de repères adaptés à l{"'"}âge pour déconstruire
              certaines idées reçues, prévenir la désinformation et favoriser des relations plus
              saines et respectueuses.
            </p>
            <p className="font-corps text-lg text-gray-700 leading-relaxed">
              Le groupe devient ainsi un espace pour apprendre, questionner et construire de
              nouveaux repères, tout en soutenant le développement du pouvoir d{"'"}agir des jeunes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 bg-white rounded-lg border border-as-vert-lien/20 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-as-vert-lien/10 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-as-vert-lien" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="font-titre font-semibold text-as-bleu-profond mb-1">Ancrés dans les milieux de vie</h4>
              <p className="font-corps text-sm text-gray-600">Des ateliers offerts directement à l{"'"}école, en organisme communautaire ou en espace jeunesse</p>
            </div>
            <div className="p-5 bg-white rounded-lg border border-as-vert-lien/20 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-as-vert-lien/10 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-as-vert-lien" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="font-titre font-semibold text-as-bleu-profond mb-1">Des repères fondés sur la science</h4>
              <p className="font-corps text-sm text-gray-600">Des contenus appuyés sur des données probantes et adaptés à l{"'"}âge, pour prévenir la désinformation</p>
            </div>
            <div className="p-5 bg-white rounded-lg border border-as-vert-lien/20 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-as-vert-lien/10 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-as-vert-lien" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-titre font-semibold text-as-bleu-profond mb-1">Pouvoir d{"'"}agir</h4>
              <p className="font-corps text-sm text-gray-600">Un espace pour apprendre, questionner et construire ses propres repères relationnels</p>
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
