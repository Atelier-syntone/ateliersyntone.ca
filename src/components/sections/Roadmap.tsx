'use client'

import { motion } from 'framer-motion'
import { ROADMAP } from '@/lib/constants'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Roadmap() {
  return (
    <section className="bg-as-creme py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-titre text-3xl sm:text-4xl lg:text-5xl font-bold text-as-soleil-doux mb-12 md:mb-16">
            Notre feuille de route
          </h2>
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Ligne verticale */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-as-bleu-vif" />

          <div className="space-y-8 md:space-y-12">
            {ROADMAP.map((phase, index) => (
              <motion.div
                key={index}
                className="relative md:pl-24"
                variants={itemVariants}
              >
                {/* Point sur la timeline */}
                <div className="hidden md:block absolute left-0 top-2 w-4 h-4 bg-as-bleu-vif rounded-full border-4 border-as-creme ml-6" />

                <div>
                  <div className="inline-block px-4 py-2 bg-as-bleu-vif rounded-syntone mb-3">
                    <span className="text-white font-bold text-sm">
                      {phase.annee}
                    </span>
                  </div>
                  <h3 className="font-titre text-xl md:text-2xl text-as-soleil-doux mb-2">
                    {phase.titre}
                  </h3>
                  <p className="font-corps text-as-gris-moyen leading-relaxed">
                    {phase.contenu}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
