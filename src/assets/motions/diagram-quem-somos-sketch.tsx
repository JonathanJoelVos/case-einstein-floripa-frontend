import { useMotion } from "@/hooks/use-motion"
import { motion } from "motion/react"

type DiagramaQuemSomosSketchProps = { className?: string }

export default function DiagramaQuemSomosSketch({ className }: DiagramaQuemSomosSketchProps) {
    const { draw, textReveal } = useMotion()
    const pad = 10

    const boxQuem = {
        x: 10, y: 535.9393463594519, w: 197.84198228353955, h: 87.42482441913637,
    }
    const boxEdu = {
        x: 257.63346111484634, y: 411.3023145376982, w: 110.67518755290052 * 2, h: 87.42482441913637,
    }
    const boxCurso = {
        x: 343.2502863284818, y: 712.8943832608318, w: 110.91276868425558 * 2, h: 87.42482441913637,
    }

    const ORDER = {
        setaLongInicio: 1,
        boxQuemSomos: 2,
        ligacaoQuemEdu: 4,
        boxEducacao: 4,
        ligacaoQuemCursinho: 5,
        boxCursinho: 5,
        ligacaoQuemCard: 6,
    }

    const TEXT_ORDER = {
        quemSomos: 1,
        educacao: 2,
        cursinho: 2.5,
    }

    return (
        <motion.svg
            viewBox="0 0 852.916976942947 810.3192076799681"
            className={className ?? "w-full h-auto"}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            fill="none"
        >
            <g strokeLinecap="round" transform="translate(10 535.9393463594519) rotate(0 98.92099114176978 43.712412209568186)">
                <motion.path
                    d="M21.86 0 C53.41 -1.43, 83.89 -2.2, 175.99 0 M21.86 0 C61.84 0.2, 102.4 0.5, 175.99 0 M175.99 0 C189.72 -1.54, 197.86 7.1, 197.84 21.86 M175.99 0 C192.56 0.92, 197.89 7.3, 197.84 21.86 M197.84 21.86 C197.24 31.15, 197.6 40.73, 197.84 65.57 M197.84 21.86 C198.32 32.98, 196.72 42.82, 197.84 65.57 M197.84 65.57 C198.28 79.89, 189.41 87.55, 175.99 87.42 M197.84 65.57 C197.31 78.44, 188.44 89.37, 175.99 87.42 M175.99 87.42 C132.66 89.68, 87.41 86.52, 21.86 87.42 M175.99 87.42 C133.94 88.34, 91.21 89.2, 21.86 87.42 M21.86 87.42 C5.71 89.02, 0.15 79.43, 0 65.57 M21.86 87.42 C6.46 87.1, -0.12 80.5, 0 65.57 M0 65.57 C-1.57 55.15, 0.72 45.88, 0 21.86 M0 65.57 C0.26 49.71, 0.18 34.89, 0 21.86 M0 21.86 C0.04 5.77, 7.27 0, 21.86 0 M0 21.86 C1.17 8.93, 5.05 -0.61, 21.86 0"
                    stroke="#1e1e1e" strokeWidth="2" variants={draw} custom={ORDER.boxQuemSomos}
                />
            </g>
            <motion.foreignObject
                x={boxQuem.x + pad} y={boxQuem.y + pad}
                width={boxQuem.w - pad * 2} height={boxQuem.h - pad * 2}
                variants={textReveal}
                custom={TEXT_ORDER.quemSomos}
            >
                <div

                    style={{
                        width: "100%", height: "100%",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: "Patrick Hand, Caveat, ui-sans-serif", fontSize: 16, lineHeight: 1.1,
                        textAlign: "center",
                    }}
                >
                    quem somos? 🥸
                </div>
            </motion.foreignObject>

            <g transform="translate(257.63346111484634 411.3023145376982) rotate(0 110.67518755290052 43.712412209568186)">
                <motion.path
                    d="M21.86 0 C75.62 3.33, 128.85 6.35, 199.49 0 C215.94 -2.07, 220.47 7.48, 221.35 21.86 C217.53 32.97, 222.28 37.73, 221.35 65.57 C220.59 81.87, 213.92 84.8, 199.49 87.42 C139.16 90.36, 77.39 87.49, 21.86 87.42 C9.06 89.34, 3.35 81.59, 0 65.57 C3.08 55.46, -3.93 42.58, 0 21.86 C1.77 9.42, 8.56 -0.47, 21.86 0"
                    fill="#d0bfff"
                    variants={draw}
                    custom={ORDER.boxEducacao}
                />
                <motion.path
                    d="M21.86 0 C73.95 -0.34, 124.66 0.29, 199.49 0 M21.86 0 C84.1 1.22, 146.42 0.93, 199.49 0 M199.49 0 C214.72 1.09, 221.24 7.98, 221.35 21.86 M199.49 0 C215.18 -2.17, 221.66 8.45, 221.35 21.86 M221.35 21.86 C219.4 36.7, 221.56 52.31, 221.35 65.57 M221.35 21.86 C221.27 38.23, 221.08 53.59, 221.35 65.57 M221.35 65.57 C220.21 78.34, 215.63 87.06, 199.49 87.42 M221.35 65.57 C220.7 79.2, 213.21 86.89, 199.49 87.42 M199.49 87.42 C160.99 90.47, 120.85 89.6, 21.86 87.42 M199.49 87.42 C132.96 87.46, 68.36 86.49, 21.86 87.42 M21.86 87.42 C6.28 87.42, -0.54 79.52, 0 65.57 M21.86 87.42 C6.68 85.84, -1.43 82.27, 0 65.57 M0 65.57 C0.73 47.62, -0.08 32.75, 0 21.86 M0 65.57 C0 52.8, -0.12 38.25, 0 21.86 M0 21.86 C0.56 7.7, 8.79 1.61, 21.86 0 M0 21.86 C-0.45 5.71, 7.41 1.74, 21.86 0"
                    stroke="#1e1e1e" strokeWidth="2" fill="none"
                    variants={draw} custom={ORDER.boxEducacao}
                />
            </g>
            <motion.foreignObject
                x={boxEdu.x + pad} y={boxEdu.y + pad}
                width={boxEdu.w - pad * 2} height={boxEdu.h - pad * 2}
                variants={textReveal}
                custom={TEXT_ORDER.educacao}
            >
                <div

                    style={{
                        width: "100%", height: "100%",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: "Patrick Hand, Caveat, ui-sans-serif", fontSize: 16, lineHeight: 1.1,
                        textAlign: "center",
                    }}
                >
                    educação de qualidade 🤓
                </div>
            </motion.foreignObject>

            <g transform="translate(343.2502863284818 712.8943832608318) rotate(0 110.91276868425558 43.712412209568186)">
                <motion.path
                    d="M21.86 0 C65.08 -4.43, 109.39 -2.47, 199.97 0 C211.79 2.92, 220.92 5, 221.83 21.86 C217.8 41.48, 220.13 59.59, 221.83 65.57 C219.08 80.87, 213.51 85.27, 199.97 87.42 C135.4 86.51, 69.18 88.68, 21.86 87.42 C4.51 88.69, -1.89 80.98, 0 65.57 C2.79 53.61, -3.69 42.04, 0 21.86 C0.86 8.34, 10.19 3.57, 21.86 0"
                    fill="#96f2d7"
                    variants={draw} custom={ORDER.boxCursinho}
                />
                <motion.path
                    d="M21.86 0 C58.07 1.07, 98.3 0.54, 199.97 0 M21.86 0 C87.32 1.59, 154.05 1.07, 199.97 0 M199.97 0 C214.61 0.78, 222.88 5.96, 221.83 21.86 M199.97 0 C214.67 -1.27, 220.37 5.1, 221.83 21.86 M221.83 21.86 C223.4 30.17, 223.34 40.05, 221.83 65.57 M221.83 21.86 C222.07 31.05, 222.49 39.74, 221.83 65.57 M221.83 65.57 C220.67 78.46, 212.7 86.99, 199.97 87.42 M221.83 65.57 C220.67 79.39, 216.44 87.35, 199.97 87.42 M199.97 87.42 C141.66 86.28, 88.68 87.21, 21.86 87.42 M199.97 87.42 C152.76 87.2, 107.19 87.21, 21.86 87.42 M21.86 87.42 C6.61 87.04, 0.54 78.52, 0 65.57 M21.86 87.42 C7.96 86.89, -0.99 79.39, 0 65.57 M0 65.57 C0.22 48.16, -0.32 32.99, 0 21.86 M0 65.57 C-0.41 50.88, -1.01 36.23, 0 21.86 M0 21.86 C-0.15 6.83, 7.2 -0.19, 21.86 0 M0 21.86 C-2.12 8.12, 7.53 -1.12, 21.86 0"
                    stroke="#1e1e1e" strokeWidth="2" fill="none"
                    variants={draw} custom={ORDER.boxCursinho}
                />
            </g>
            <motion.foreignObject
                x={boxCurso.x + pad} y={boxCurso.y + pad}
                width={boxCurso.w - pad * 2} height={boxCurso.h - pad * 2}
                variants={textReveal}
                custom={TEXT_ORDER.cursinho}
            >
                <div

                    style={{
                        width: "100%", height: "100%",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: "Patrick Hand, Caveat, ui-sans-serif", fontSize: 16, lineHeight: 1.1,
                        textAlign: "center",
                    }}
                >
                    cursinho gratuito 🥺
                </div>
            </motion.foreignObject>

            <g strokeLinecap="round" transform="translate(187.98717793224182 530.98204855974) rotate(0 32.26779141131567 -38.178857590063785)">
                <motion.path d="M0 0 C0.91 -20.58, 1.36 -41.94, 0 -60.07 M0 0 C-0.45 -13.64, 0.68 -25.51, 0 -60.07 M0 -60.07 C-0.6 -70.01, 6.24 -74.2, 16 -76.07 M0 -60.07 C0.72 -69.69, 5.25 -77.17, 16 -76.07 M16 -76.07 C29.78 -75.54, 42.33 -76.93, 64.65 -76.07 M16 -76.07 C30.01 -75.54, 45.86 -76.27, 64.65 -76.07" stroke="#1e1e1e" strokeWidth="2" variants={draw} custom={ORDER.ligacaoQuemEdu} />
                <motion.path d="M41.16 -67.5 C49.72 -70.27, 58.22 -73.99, 64.65 -76.07 M41.16 -67.5 C45.3 -70, 51.4 -70.97, 64.65 -76.07" stroke="#1e1e1e" strokeWidth="2" variants={draw} custom={ORDER.ligacaoQuemEdu} />
                <motion.path d="M41.15 -84.6 C49.58 -81.52, 58.09 -79.38, 64.65 -76.07 M41.15 -84.6 C45.16 -83.48, 51.27 -80.83, 64.65 -76.07" stroke="#1e1e1e" strokeWidth="2" variants={draw} custom={ORDER.ligacaoQuemEdu} />
            </g>

            <g strokeLinecap="round" transform="translate(173.7639280195874 628.3641707785881) rotate(0 82.10975914973722 64.10634541538815)">
                <motion.path d="M0 0 C0.06 28.11, 0.18 57.89, 0 112.14 M0 0 C0.63 26.87, 0.92 51.89, 0 112.14 M0 112.14 C-1.05 121.91, 3.97 127.97, 16 128.14 M0 112.14 C-1.97 122.02, 7.36 128.99, 16 128.14 M16 128.14 C58.89 126.53, 100.5 127.7, 164.49 128.14 M16 128.14 C72.62 127.67, 129.4 128.11, 164.49 128.14" stroke="#1e1e1e" strokeWidth="2" variants={draw} custom={ORDER.ligacaoQuemCursinho} />
                <motion.path d="M140.97 136.63 C146.33 134.33, 152.34 133.9, 164.49 128.14 M140.97 136.63 C146.15 135.41, 151.95 132.13, 164.49 128.14" stroke="#1e1e1e" strokeWidth="2" variants={draw} custom={ORDER.ligacaoQuemCursinho} />
                <motion.path d="M141.02 119.53 C146.45 121.51, 152.45 125.37, 164.49 128.14 M141.02 119.53 C146.32 122.32, 152.11 123.05, 164.49 128.14" stroke="#1e1e1e" strokeWidth="2" variants={draw} custom={ORDER.ligacaoQuemCursinho} />
            </g>

            <g strokeLinecap="round" transform="translate(212.84198228353955 579.5517585690201) rotate(0 315.03749732970374 -35.21054642196711)">
                <motion.path d="M0 0 C38.31 -0.22, 74.08 -0.13, 105.22 0 M0 0 C30.72 -1.04, 61.54 -0.45, 105.22 0 M105.22 0 C115.86 -0.83, 121.03 4.55, 121.22 16 M105.22 0 C115.35 -2.16, 119.85 6.32, 121.22 16 M121.22 16 C122.05 32.67, 120.21 48.35, 121.22 69.83 M121.22 16 C122.2 34.94, 120.91 51.91, 121.22 69.83 M121.22 69.83 C123.01 80.32, 124.67 85.62, 137.22 85.83 M121.22 69.83 C121.9 78.42, 128.71 83.99, 137.22 85.83 M137.22 85.83 C229.17 83.71, 320.84 83.95, 398.29 85.83 M137.22 85.83 C238.65 84.6, 337.9 84.01, 398.29 85.83 M398.29 85.83 C409.4 86.71, 412.31 78.98, 414.29 69.83 M398.29 85.83 C408.87 86.58, 412.43 80.02, 414.29 69.83 M414.29 69.83 C413.66 -12.96, 416.14 -90.49, 414.29 -138.64 M414.29 69.83 C412.64 7.41, 412.41 -55.66, 414.29 -138.64 M414.29 -138.64 C413.04 -149.65, 420.03 -153.92, 430.29 -154.64 M414.29 -138.64 C412.75 -149.5, 421.8 -156.39, 430.29 -154.64 M430.29 -154.64 C474.24 -156.61, 514.67 -157.14, 630.07 -154.64 M430.29 -154.64 C497.15 -155.43, 564.5 -155.21, 630.07 -154.64"
                    stroke="#1e1e1e" strokeWidth="2" variants={draw} custom={ORDER.ligacaoQuemCard} />
                <motion.path d="M606.53 -146.25 C616.21 -148.9, 623.34 -151.75, 630.07 -154.64 M606.53 -146.25 C612.96 -149.24, 619.53 -151.13, 630.07 -154.64" stroke="#1e1e1e" strokeWidth="2" variants={draw} custom={ORDER.ligacaoQuemCard} />
                <motion.path d="M606.64 -163.35 C616.29 -160.01, 623.39 -156.86, 630.07 -154.64 M606.64 -163.35 C613.11 -161.26, 619.65 -158.08, 630.07 -154.64" stroke="#1e1e1e" strokeWidth="2" variants={draw} custom={ORDER.ligacaoQuemCard} />
            </g>

            <g strokeLinecap="round" transform="translate(87.49438902508382 10) rotate(0 -0.03303732028837203 260.46967317972593)">
                <motion.path d="M0 0 C-1.76 202.53, -1.79 405.47, 0.42 520.94 M0 0 C1.77 154.22, 1.34 308.67, 0.42 520.94" stroke="#1e1e1e" strokeWidth="2" variants={draw} custom={ORDER.setaLongInicio} />
                <motion.path d="M-8.05 497.42 C-6.36 506.09, -3.53 515.75, 0.42 520.94 M-8.05 497.42 C-4.89 504.23, -3.75 511.59, 0.42 520.94" stroke="#1e1e1e" strokeWidth="2" variants={draw} custom={ORDER.setaLongInicio} />
                <motion.path d="M9.05 497.48 C4.08 506.04, 0.26 515.67, 0.42 520.94 M9.05 497.48 C7.14 504.15, 3.22 511.5, 0.42 520.94" stroke="#1e1e1e" strokeWidth="2" variants={draw} custom={ORDER.setaLongInicio} />
            </g>
        </motion.svg>
    )
}
