"use client"

import { motion } from "framer-motion"
import Card from "@/components/ui/Card"

export default function Problematique() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const enjeux = [
    {
      titre: "Comportements intolérants chez les jeunes",
      description:
        "Augmentation des comportements misogynes, homophobes et discriminatoires, amplifiés par les médias sociaux et les algorithmes.",
      source: "Dupuis-Déri, F. (2026). Rapport de recherche sur les comportements antiféministes chez les jeunes.",
      icone: "⚠️",
    },
    {
      titre: "Désinformation numérique",
      description:
        "Fausses informations affectant directement les comportements, les croyances et les décisions des individus, particulièrement chez les jeunes adultes.",
      source: "Sources médias spécialisées, analyses récentes",
      icone: "📱",
    },
    {
      titre: "Violence relationnelle et conjugale",
      description:
        "Taux de violence conjugale de 2 à 3 fois supérieurs à la moyenne québécoise dans certaines régions. Tendance croissante depuis 10 ans.",
      source: "MSP, Statistiques sur la violence conjugale, 2023",
      icone: "💔",
    },
    {
      titre: "Manque d\u2019outils pour les adultes significatifs",
      description:
        "Parents, éducateurs et praticiens manquent d\u2019outils pratiques et de formation continue pour intervenir et soutenir les jeunes.",
      source: "Observations du terrain et besoins identifiés",
      icone: "🤝",
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Titre de section */}
        <motion.div className="mb-12 md:mb-16" variants={itemVariants}>
          <h2 className="font-titre text-3xl sm:text-4xl lg:text-5xl font-bold text-as-soleil-doux mb-4">
            Pourquoi agir maintenant
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-as-corail-doux to-as-soleil-doux rounded-full" />
        </motion.div>

        {/* Grille des enjeux */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {enjeux.map((enjeu, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card variante="sureleve" className="h-full flex flex-col">
                <div className="text-3xl mb-4">{enjeu.icone}</div>
                <h3 className="font-titre text-lg font-semibold text-as-soleil-doux mb-3">
                  {enjeu.titre}
                </h3>
                <p className="font-corps text-sm text-as-gris-moyen leading-relaxed flex-grow mb-4">
                  {enjeu.description}
                </p>
                <p className="font-corps text-xs text-as-gris-moyen italic">
                  {enjeu.source}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Appel empathique */}
        <motion.div
          className="mt-16 md:mt-20 p-8 md:p-10 bg-gradient-to-r from-as-bleu-profond/5 to-as-corail-doux/5 rounded-syntone border border-as-bleu-profond/10"
          variants={itemVariants}
        >
          <p className="font-corps text-lg text-as-bleu-profond/80 text-center">
            Ces défis demandent une approche systémique et préventive, impliquant tous les acteurs de la communauté : jeunes, familles, écoles, services sociaux et collectivité. C&#39;est ensemble que nous pouvons créer un changement durable et bienveillant.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
