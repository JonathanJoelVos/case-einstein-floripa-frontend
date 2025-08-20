import { motion } from "motion/react"
import ExcalidrawCard from "./card-quem-somos"
import { useMotion } from "@/hooks/use-motion"

import ProvaSocial6PNG from "@/assets/prova-social-6.png"
import DiagramaQuemSomosSketch from "@/assets/motions/diagram-quem-somos-sketch"


export function AboutUsSection() {
    const { inViewContainer, popCard, rise } = useMotion()

    return (
        <motion.section
            className="mx-auto max-w-7xl text-center my-32 pb-20 relative"
            variants={inViewContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.35 }}
        >
            <div className="text-3xl font-bold sm:text-4xl text-start  relative font-excalidraw">
                Quem somos
                <motion.p className="text-sm leading-relaxed text-neutral-600 font-excalidraw max-w-md" variants={rise}>
                    Um pouco sobre nossa missão e visão
                </motion.p>
            </div>
            <DiagramaQuemSomosSketch className="w-[600px] -z-30" />

            <motion.div className="absolute top-0 right-20" variants={popCard} custom={3}>
                <ExcalidrawCard imageSrc={ProvaSocial6PNG} alt="Texto institucional" />
            </motion.div>
        </motion.section>
    )
}