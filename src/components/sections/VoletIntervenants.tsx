'use client';

import { motion } from 'framer-motion';

const VoletIntervenants = () => {
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
            <div className="w-2 h-12 bg-as-bleu-vif rounded-full"></div>
            <h2 className="font-titre text-4xl font-bold text-as-bleu-profond">
              Volet Intervenant·e·s
            </h2>
          </div>
          <p className="font-corps text-lg text-gray-700 font-medium">
            Professionnel·le·s et futur·e·s intervenant·e·s
          </p>
        </motion.div>

        {/* Description */}
        <motion.div variants={itemVariants} className="mb-10">
          <p className="font-corps text-lg text-gray-700 leading-relaxed">
            Des formations continues, conférences et coaching professionnel conçus pour contribuer
            à l{"'"}actualisation des pratiques par la vulgarisation de données actuelles sur le
            fonctionnement humain. Nous offrons un accompagnement de haut niveau favorisant
            l{"'"}intégration des connaissances issues de la recherche dans la pratique quotidienne
            des intervenant·e·s.
          </p>
        </motion.div>

        {/* Public cible */}
        <motion.div variants={itemVariants} className="mb-12 p-6 bg-as-bleu-vif/10 rounded-lg border border-as-bleu-vif/20">
          <h3 className="font-accent text-sm font-semibold text-as-bleu-vif uppercase tracking-wide mb-2">
            Public cible
          </h3>
          <p className="font-corps text-gray-700">
            Professionnel·le·s de la santé, de l{"'"}éducation, du travail social, formateur·rice·s,
            coach·e·s et étudiant·e·s en intervention psychosociale.
          </p>
        </motion.div>

        {/* Types de services */}
        <motion.div variants={itemVariants} className="mb-12">
          <h3 className="font-titre text-2xl font-bold text-as-bleu-profond mb-6">
            Nos services
          </h3>
          <p className="font-corps text-lg text-gray-700 leading-relaxed mb-6">
            Tous nos services sont offerts en format de groupe afin de maximiser l{"'"}accessibilité
            et de favoriser les échanges entre professionnel·le·s. Cette approche communautaire
            permet de créer des réseaux de soutien durables.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 bg-white rounded-lg border border-as-bleu-vif/20 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-as-bleu-vif/10 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-as-bleu-vif" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="font-titre font-semibold text-as-bleu-profond mb-1">Formations continues</h4>
              <p className="font-corps text-sm text-gray-600">Développement professionnel basé sur la recherche</p>
            </div>
            <div className="p-5 bg-white rounded-lg border border-as-bleu-vif/20 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-as-bleu-vif/10 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-as-bleu-vif" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h4 className="font-titre font-semibold text-as-bleu-profond mb-1">Conférences</h4>
              <p className="font-corps text-sm text-gray-600">Partage de connaissances et pratiques actuelles</p>
            </div>
            <div className="p-5 bg-white rounded-lg border border-as-bleu-vif/20 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-as-bleu-vif/10 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-as-bleu-vif" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-titre font-semibold text-as-bleu-profond mb-1">Coaching de groupe</h4>
              <p className="font-corps text-sm text-gray-600">Accompagnement professionnel entre pairs</p>
            </div>
          </div>
        </motion.div>

        {/* Invitation contact */}
        <motion.div
          variants={itemVariants}
          className="p-8 bg-gradient-to-r from-as-bleu-vif to-as-bleu-profond rounded-lg text-white text-center"
        >
          <h3 className="font-titre text-2xl font-bold text-as-soleil-doux mb-3">
            Besoin de formation pour votre équipe?
          </h3>
          <p className="font-corps text-as-creme mb-6 max-w-lg mx-auto">
            Contactez-nous pour discuter de vos besoins en formation
            et planifier un programme adapté à votre réalité professionnelle.
          </p>
          <a
            href="mailto:info@ateliersyntone.ca"
            className="inline-block bg-white text-as-bleu-vif font-accent font-semibold px-8 py-3 rounded-full hover:bg-as-creme transition-colors"
          >
            info@ateliersyntone.ca
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VoletIntervenants;
