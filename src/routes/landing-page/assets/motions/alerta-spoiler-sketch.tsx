import { useMotion } from "@/hooks/use-motion"
import { motion } from "motion/react"


type AlertaSpoilerSketchProps = { className?: string }

export function AlertaSpoilerSketch({ className }: AlertaSpoilerSketchProps) {
    const { draw, textReveal } = useMotion()
    const boxX = 10
    const boxY = 210.91093426043528
    const boxW = 197.84198228353955
    const boxH = 87.42482441913637
    const pad = 10

    return (
        <motion.svg
            viewBox="0 0 217.84198228353955 506.8975698683961"
            className={className ?? "w-[300px] h-auto"}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
            fill="none"
        >
            <g strokeLinecap="round" transform="translate(10 210.91093426043528) rotate(0 98.92099114176978 43.712412209568186)">
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
                x={boxX + pad}
                y={boxY + pad}
                width={boxW - pad * 2}
                height={boxH - pad * 2}
                variants={textReveal}
            >
                <div
                    style={{
                        width: "100%", height: "100%",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: "Patrick Hand, Caveat, ui-sans-serif",
                        fontSize: 16, lineHeight: 1.1, textAlign: "center",
                    }}
                >
                    alerta de spoiler! ⚠️
                </div>
            </motion.foreignObject>

            <g strokeLinecap="round" transform="translate(110.8308701518256 9.634902314553017) rotate(0 -1.0342517927159065 97.5326558915653)">
                <motion.path d="M-1.15 0.93 C-1.37 33.4, -1.97 162.43, -2.14 194.7 M0.44 0.37 C0.24 32.52, -2.03 160.98, -2.51 193" stroke="#1e1e1e" strokeWidth="2" variants={draw} custom={1} />
                <motion.path d="M-10.68 169.37 C-7.3 176.68, -5.63 181.98, -2.51 193 M-10.68 169.37 C-8.36 176.8, -5.53 185.74, -2.51 193" stroke="#1e1e1e" strokeWidth="2" variants={draw} custom={2} />
                <motion.path d="M6.42 169.65 C5.89 176.73, 3.66 181.97, -2.51 193 M6.42 169.65 C2.7 177.03, -0.51 185.87, -2.51 193" stroke="#1e1e1e" strokeWidth="2" variants={draw} custom={3} />
            </g>

            <g strokeLinecap="round" transform="translate(106.23529364561819 303.1613005584028) rotate(0 -0.40361335544480426 96.18214223318614)">
                <motion.path d="M-0.25 -0.21 C-0.56 31.92, -1.74 160.45, -2.21 192.78 M1.81 -1.37 C1.47 30.88, -1.69 161, -2.62 193.74" stroke="#1e1e1e" strokeWidth="2" variants={draw} custom={4} />
                <motion.path d="M-10.56 170.03 C-8.8 178.11, -8.16 182.97, -2.62 193.74 M-10.56 170.03 C-8.74 176.01, -5.16 184.61, -2.62 193.74" stroke="#1e1e1e" strokeWidth="2" variants={draw} custom={5} />
                <motion.path d="M6.54 170.47 C3.72 178.4, -0.22 183.14, -2.62 193.74 M6.54 170.47 C3.4 176.4, 2.03 184.87, -2.62 193.74" stroke="#1e1e1e" strokeWidth="2" variants={draw} custom={6} />
            </g>
        </motion.svg>
    )
}
