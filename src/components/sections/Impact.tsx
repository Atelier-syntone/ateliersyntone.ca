'use client'

import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Impact() {
  const impacts = [
    {
      titre: 'Impact préventif',
      points: [
        "Réduction des comportements intolérants et violents par l'acquisition de compétences relationnelles dès le jeune âge",
        "Contrer la désinformation par la diffusion de connaissances scientifiques accessibles",
        "Outiller les adultes significatifs pour soutenir les jeunes dans leur développement",
      ],
    },
    {
      titre: 'Impact communautaire',
      points: [
        "Renforcement du vivre-ensemble et des relations saines et égalitaires",
        "Soutien aux milieux scolaires, communautaires et familiaux",
        "Accessibilité des services pour les populations de toutes les régions du Québec",
      ],
    },
    {
      titre: 'Impact systémique',
      points: [
        "Intervention cohérente à plusieurs niveaux : jeunes, adultes, professionnels, espace numérique",
        "Approche intégrée combinant prévention, éducation et outillage des milieux",
        "Modèle transférable vers d'autres régions du Québec",
      ],
    },
  ]

  return (
    <section className="section-container bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-titre text-as-bleu-profond mb-12 md:mb-16">
            Notre impact
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {impacts.map((impact, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-as-gris-clair h-full hover:shadow-lg transition-syntone">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-8 bg-as-bleu-vif rounded-full" />
                    <h3 className="font-titre text-lg md:text-xl text-as-gris-fonce">
                      {impact.titre}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {impact.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="flex gap-3 font-corps text-as-gris-moyen"
                      >
                        <span className="text-as-bleu-vif mt-1 flex-shrink-0">
                          •
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
