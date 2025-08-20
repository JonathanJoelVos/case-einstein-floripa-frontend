import { useMotion } from "@/hooks/use-motion"
import { motion } from "motion/react"


type VagasAbertasSketchProps = {
    className?: string
}

export default function VagasAbertasSketch({ className }: VagasAbertasSketchProps) {
    const { draw, textReveal } = useMotion()

    return (
        <motion.svg
            viewBox="0 0 371.7939145070344 281.08128406237404"
            className={className ?? "w-[360px] h-auto"}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
            fill="none"
        >
            <g strokeLinecap="round" transform="translate(10 10) rotate(0 98.92099114176978 43.712412209568186)">
                <motion.path
                    d="M21.86 0 C53.41 -1.43, 83.89 -2.2, 175.99 0 M21.86 0 C61.84 0.2, 102.4 0.5, 175.99 0 M175.99 0 C189.72 -1.54, 197.86 7.1, 197.84 21.86 M175.99 0 C192.56 0.92, 197.89 7.3, 197.84 21.86 M197.84 21.86 C197.24 31.15, 197.6 40.73, 197.84 65.57 M197.84 21.86 C198.32 32.98, 196.72 42.82, 197.84 65.57 M197.84 65.57 C198.28 79.89, 189.41 87.55, 175.99 87.42 M197.84 65.57 C197.31 78.44, 188.44 89.37, 175.99 87.42 M175.99 87.42 C132.66 89.68, 87.41 86.52, 21.86 87.42 M175.99 87.42 C133.94 88.34, 91.21 89.2, 21.86 87.42 M21.86 87.42 C5.71 89.02, 0.15 79.43, 0 65.57 M21.86 87.42 C6.46 87.1, -0.12 80.5, 0 65.57 M0 65.57 C-1.57 55.15, 0.72 45.88, 0 21.86 M0 65.57 C0.26 49.71, 0.18 34.89, 0 21.86 M0 21.86 C0.04 5.77, 7.27 0, 21.86 0 M0 21.86 C1.17 8.93, 5.05 -0.61, 21.86 0"
                    stroke="#1e1e1e"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                    variants={draw}
                    custom={0}
                />
            </g>

            <motion.foreignObject
                x={37.793061454269775}
                y={43.71241220956824}
                width={142.255859375}
                height={24}
                variants={textReveal}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                        fontFamily: "Patrick Hand, Caveat, ui-sans-serif",
                        fontSize: 18,
                        lineHeight: 1,
                    }}
                >
                    vagas abertas! 🥳
                </div>
            </motion.foreignObject>


            <g strokeLinecap="round">
                <g transform="translate(102.27655007906105 107.46079745484622) rotate(0 129.38869979058148 81.35868311314118)">
                    <motion.path
                        d="M0.47 0.09 C7.64 24.43, -0.6 118.61, 42.58 145.39 C85.75 172.16, 223.08 158.15, 259.52 160.74 M-0.74 -0.9 C6.34 23.64, -1.33 119.43, 41.86 146.61 C85.05 173.79, 221.72 159.58, 258.4 162.18"
                        stroke="#1e1e1e"
                        strokeWidth="2"
                        variants={draw}
                        custom={1}
                    />
                </g>
                <g transform="translate(102.27655007906105 107.46079745484622) rotate(0 129.38869979058148 81.35868311314118)">
                    <motion.path
                        d="M235.01 171 C241.4 169.32, 246.45 165.11, 258.4 162.18 M235.01 171 C243.29 168.18, 250.75 165.12, 258.4 162.18"
                        stroke="#1e1e1e"
                        strokeWidth="2"
                        variants={draw}
                        custom={2}
                    />
                </g>
                <g transform="translate(102.27655007906105 107.46079745484622) rotate(0 129.38869979058148 81.35868311314118)">
                    <motion.path
                        d="M234.81 153.9 C241.17 156.75, 246.27 157.07, 258.4 162.18 M234.81 153.9 C243.3 156.55, 250.82 158.96, 258.4 162.18"
                        stroke="#1e1e1e"
                        strokeWidth="2"
                        variants={draw}
                        custom={3}
                    />
                </g>
            </g>
        </motion.svg>
    )
}
