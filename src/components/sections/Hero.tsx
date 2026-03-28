'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { SITE } from '@/lib/constants'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-as-bleu-profond via-as-bleu-profond to-as-bleu-vif flex items-center justify-center">
      {/* Formes décoratives */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-as-corail-doux to-transparent opacity-10"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-gradient-to-tr from-as-soleil-doux to-transparent opacity-10"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Contenu */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Accroche principale */}
        <motion.h1
          className="font-titre text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-as-soleil-doux mb-6 md:mb-8 leading-tight"
          variants={itemVariants}
        >
          Comprendre.
          <br />
          Relier.
          <br />
          Évoluer.
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          className="font-corps text-lg sm:text-xl md:text-2xl text-as-creme/90 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          {SITE.description}
        </motion.p>

        {/* Boutons CTA */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <Button
            href="/mission"
            variante="accent"
            taille="lg"
            className="w-full sm:w-auto"
          >
            Découvrir notre mission
          </Button>
          <Button
            href="/contact"
            variante="secondaire"
            taille="lg"
            className="w-full sm:w-auto border-2 border-as-creme text-as-creme bg-transparent hover:bg-as-creme hover:text-as-bleu-profond"
          >
            Nous joindre
          </Button>
        </motion.div>
      </motion.div>

      {/* Indicateur de défilement */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-accent text-sm text-as-creme/70">Défiler</span>
          <svg className="w-6 h-6 text-as-creme/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
