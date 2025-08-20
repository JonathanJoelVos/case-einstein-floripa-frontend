import { useMotion } from "@/hooks/use-motion"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { socialLinks } from "@/config/config-app"

import LogoSVG from "@/assets/logo.svg"
import VagasAbertasSketch from "@/assets/motions/vagas-abertas-sketch"

export function Hero() {
    const { container, fadeUp } = useMotion()

    return (
        <motion.section
            className="flex flex-col mt-40 items-center w-full relative"
            variants={container}
            initial="hidden"
            animate="show"
        >
            <img src={LogoSVG} alt="Logo" className="dark:invert w-40" />
            <motion.h1 className="z-30 max-w-3xl text-center text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl relative" variants={fadeUp}>
                <VagasAbertasSketch className="absolute -left-72 -top-36 w-72 dark:invert -z-10" />
                <span>
                    Junte-se a nós e transforme o futuro de aluno para aluno
                </span>
            </motion.h1>

            <motion.p className="mt-6 text-center text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 font-excalidraw max-w-md" variants={fadeUp}>
                Cursinho pré-vestibular gratuito para estudantes de baixa renda que sonham com uma educação superior de qualidade.
            </motion.p>

            <motion.div className="flex items-center gap-4 mt-6" variants={fadeUp}>
                <Button className="rounded-full text-xs" size="sm" variant="outline">
                    Seja um Aluno
                </Button>
                <Button className="rounded-full text-xs" size="sm">
                    Seja um Voluntário
                </Button>
            </motion.div>

            <motion.div
                className="mt-8 flex items-center gap-5 text-neutral-500 dark:text-neutral-400"
                variants={fadeUp}
            >
                {socialLinks.map((link) => (
                    <a
                        href={link.href}
                        aria-label={link.label}
                        className="transition hover:text-neutral-800 dark:hover:text-neutral-200"
                    >
                        {link.icon}
                    </a>
                ))}
            </motion.div>
        </motion.section>
    )
}