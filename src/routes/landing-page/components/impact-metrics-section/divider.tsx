import { useMotion } from '@/hooks/use-motion'
import { motion } from 'motion/react'

interface ImpactMetricsDividerProps {
    custom?: number
}
export function ImpactMetricsDivider({
    custom = 0
}: ImpactMetricsDividerProps) {
    const { draw } = useMotion()

    return (
        <motion.svg
            width="10"
            height="72"
            viewBox="0 0 10 72"
            fill="none"
            className="hidden md:block"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
        >
            <motion.path
                d="M5 4 C5 20,5 52,5 68"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="text-white/80"
                variants={draw}
                custom={custom}
            />
            <motion.path
                d="M4 6 C4 22,4 50,4 66"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                className="text-white/70"
                variants={draw}
                custom={custom + 0.5}
            />
        </motion.svg>
    )
}