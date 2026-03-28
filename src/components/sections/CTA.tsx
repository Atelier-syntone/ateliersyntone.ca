'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { SITE } from '@/lib/constants'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function CTA() {
  const actions = [
    { label: "Devenir partenaire", href: "/contact", isPrimary: true },
    { label: "Nous écrire", href: "/contact" },
    { label: "S\u2019impliquer", href: "/contact" },
  ]

  return (
    <section className="bg-gradient-to-r from-as-bleu-vif to-as-vert-lien py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-titre text-3xl sm:text-4xl lg:text-5xl font-bold text-as-soleil-doux mb-4 md:mb-6">
            Ensemble, agissons pour nos communautés
          </h2>
        </motion.div>

        <motion.p
          className="font-corps text-white text-lg md:text-xl mb-10 md:mb-12 opacity-95"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 0.95, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Rejoignez notre mission pour créer un impact positif et durable dans nos communautés.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 flex-wrap justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {actions.map((action, index) => (
            <motion.div key={index} variants={itemVariants}>
              {action.isPrimary ? (
                <a
                  href={action.href}
                  className="font-accent font-semibold rounded-syntone transition-syntone inline-flex items-center justify-center px-6 py-3 text-base bg-white text-as-bleu-vif hover:bg-as-creme"
                >
                  {action.label}
                </a>
              ) : (
                <Button
                  href={action.href}
                  variante="fantome"
                  taille="md"
                  className="border-2 border-white text-white hover:bg-white hover:text-as-bleu-vif"
                >
                  {action.label}
                </Button>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
