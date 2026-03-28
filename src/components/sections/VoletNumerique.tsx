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
            Des contenus numériques conçus pour démocratiser l{"'"}accès à l{"'"}éducation en santé mentale.
            Notre approche combine rigueur scientifique et vulgarisation pour rejoindre un public aussi
            large et diversifié que possible, directement sur les plateformes que vous utilisez au quotidien.
          </p>
        </motion.div>

        {/* Réseaux sociaux — mise en avant */}
        <motion.div variants={itemVariants} className="mb-12">
          <h3 className="font-titre text-2xl font-bold text-as-bleu-profond mb-6">
            Suivez-nous sur les réseaux sociaux
          </h3>
          <p className="font-corps text-lg text-gray-700 leading-relaxed mb-8">
            Rejoignez notre communauté en ligne pour recevoir du contenu éducatif, des réflexions
            et des ressources directement dans votre fil d{"'"}actualité. Ensemble, contribuons à une
            meilleure compréhension de la santé mentale.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/ateliersyntone"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-gradient-to-br from-as-bleu-profond to-as-bleu-vif rounded-lg text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <div>
                  <h4 className="font-titre text-xl font-bold">Facebook</h4>
                  <p className="font-corps text-white/80 text-sm">@ateliersyntone</p>
                </div>
              </div>
              <p className="font-corps text-white/90 text-sm leading-relaxed">
                Articles, réflexions et ressources partagées régulièrement pour sensibiliser
                et informer notre communauté.
              </p>
              <div className="mt-4 font-accent text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Nous suivre
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/ateliersyntone"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-gradient-to-br from-as-corail-doux to-as-soleil-doux rounded-lg text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <div>
                  <h4 className="font-titre text-xl font-bold">Instagram</h4>
                  <p className="font-corps text-white/80 text-sm">@ateliersyntone</p>
                </div>
              </div>
              <p className="font-corps text-white/90 text-sm leading-relaxed">
                Capsules visuelles, infographies et contenus de sensibilisation
                pour comprendre la santé mentale autrement.
              </p>
              <div className="mt-4 font-accent text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Nous suivre
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          </div>
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
