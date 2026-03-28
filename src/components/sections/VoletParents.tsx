'use client';

import { motion } from 'framer-motion';

const VoletParents = () => {
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
            <div className="w-2 h-12 bg-as-soleil-doux rounded-full"></div>
            <h2 className="font-titre text-4xl font-bold text-as-bleu-profond">
              Volet Parentalité et Grand Public
            </h2>
          </div>
          <p className="font-corps text-lg text-gray-700 font-medium">Adultes</p>
        </motion.div>

        {/* Description */}
        <motion.div variants={itemVariants} className="mb-10">
          <p className="font-corps text-lg text-gray-700 leading-relaxed">
            Des ateliers et conférences éducatives fondés sur la science, offrant des outils
            concrets et validés empiriquement. Nous accompagnons les parents et le grand public
            vers une compréhension plus profonde de la santé mentale et du développement humain.
          </p>
        </motion.div>

        {/* Public cible */}
        <motion.div variants={itemVariants} className="mb-12 p-6 bg-as-soleil-doux/10 rounded-lg border border-as-soleil-doux/20">
          <h3 className="font-accent text-sm font-semibold text-as-soleil-doux uppercase tracking-wide mb-2">
            Public cible
          </h3>
          <p className="font-corps text-gray-700">
            Parents, gardien·ne·s, éducateur·rice·s, adultes intéressés à mieux comprendre
            les dynamiques familiales et le bien-être psychosocial.
          </p>
        </motion.div>

        {/* Approche de groupe */}
        <motion.div variants={itemVariants} className="mb-12">
          <h3 className="font-titre text-2xl font-bold text-as-bleu-profond mb-6">
            Services de groupe
          </h3>
          <p className="font-corps text-lg text-gray-700 leading-relaxed mb-6">
            Nos ateliers et conférences sont offerts en format de groupe pour maximiser
            l{"'"}accessibilité et créer des espaces d{"'"}échange entre participant·e·s.
            Ce modèle communautaire permet de rejoindre un plus grand nombre de personnes
            tout en tenant compte du contexte économique des régions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-as-creme rounded-lg border border-as-soleil-doux/20">
              <h4 className="font-titre font-semibold text-as-bleu-profond mb-2">Ateliers de groupe</h4>
              <p className="font-corps text-sm text-gray-600">
                Sessions interactives et participatives en petit groupe, favorisant les échanges
                et l{"'"}apprentissage collectif.
              </p>
            </div>
            <div className="p-5 bg-as-creme rounded-lg border border-as-soleil-doux/20">
              <h4 className="font-titre font-semibold text-as-bleu-profond mb-2">Conférences éducatives</h4>
              <p className="font-corps text-sm text-gray-600">
                Présentations accessibles fondées sur la recherche, conçues pour vulgariser
                des connaissances essentielles en santé mentale.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Invitation contact */}
        <motion.div
          variants={itemVariants}
          className="p-8 bg-gradient-to-r from-as-soleil-doux to-as-corail-doux rounded-lg text-white text-center"
        >
          <h3 className="font-titre text-2xl font-bold mb-3">
            Envie d{"'"}en savoir plus?
          </h3>
          <p className="font-corps text-white/90 mb-6 max-w-lg mx-auto">
            Contactez-nous pour organiser un atelier ou une conférence
            adaptés aux besoins de votre groupe ou communauté.
          </p>
          <a
            href="mailto:info@ateliersyntone.ca"
            className="inline-block bg-white text-as-soleil-doux font-accent font-semibold px-8 py-3 rounded-full hover:bg-as-creme transition-colors"
          >
            info@ateliersyntone.ca
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VoletParents;
