import { motion } from "motion/react"
import { useMotion } from "@/hooks/use-motion"
import { ImpactMetricsDivider } from "./divider";
import { ImpactMetricsBlock } from "./block";


const topRow = [
    { end: 50, label: "aprovados", big: true },
    { end: 200, label: "vidas transformadas", big: true },
]

const bottomRow = [
    { end: 1260, label: "horas aula" },
    { end: 50, label: "horas de treinamento" },
    { end: 45000, label: "horas trabalhadas", compact: true },
]

export default function ImpactMetricsSection() {
    const { inViewContainer, rise } = useMotion()

    return (
        <motion.section
            className="relative isolate overflow-hidden"
            variants={inViewContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.35 }}
        >
            <div className="relative bg-[#0b2836] text-white">
                <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
                    <div className="flex gap-8 md:gap-14">
                        <div className="shrink-0 flex flex-col items-center justify-center mt-20">
                            <motion.span
                                variants={rise}
                                className="font-excalidraw rotate-90 tracking-[0.2em] text-sm md:text-base text-white/80 mr-40 -mb-20"
                            >
                                NOSSO IMPACTO
                            </motion.span>
                            <motion.span
                                variants={rise}
                                className="font-excalidraw rotate-90 leading-none text-[88px] md:text-[160px]"
                            >
                                2020
                            </motion.span>
                        </div>

                        <div className="grow">
                            <motion.div variants={rise} className="flex items-center gap-6 md:gap-12">
                                {topRow.map((s, idx) => (
                                    <div key={idx} className="flex items-center gap-6 md:gap-12">
                                        <ImpactMetricsBlock end={s.end} label={s.label} big />
                                        {idx < topRow.length - 1 && <ImpactMetricsDivider custom={idx + 1} />}
                                    </div>
                                ))}
                            </motion.div>

                            <motion.div variants={rise} className="mt-10 md:mt-14 flex items-center gap-6 md:gap-12 flex-wrap">
                                {bottomRow.map((s, idx) => (
                                    <div key={idx} className="flex items-center gap-6 md:gap-12">
                                        <ImpactMetricsBlock end={s.end} label={s.label} compact={s.compact} />
                                        {idx < bottomRow.length - 1 && <ImpactMetricsDivider custom={idx + 4} />}
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}


