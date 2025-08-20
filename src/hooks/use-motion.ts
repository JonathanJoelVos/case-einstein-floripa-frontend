import { useReducedMotion, type Variants } from "motion/react"

export function useMotion(){
    const reduce = useReducedMotion()

    const draw: Variants = {
        hidden: { pathLength: 0, opacity: 0 },
        show: (i: number) => ({
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { duration: 0.3, ease: "easeInOut", delay: i * 0.3 },
                opacity: { duration: 0.3, delay: i * 0.3 },
            },
        }),
    }


    const textReveal: Variants = {
        hidden: { opacity: 0, y: 8, filter: "blur(3px)" },
        show: (i: number) => ({
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: i * 0.5 },
        }),
    }

    const container: Variants = { 
        hidden: {}, 
        show: { 
            transition: 
            { 
                staggerChildren: 0.08, 
                delayChildren: 0.15 
            } 
        } 
    }

    const fadeUp : Variants = {
        hidden: { opacity: 0, y: reduce ? 0 : 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    }
    const fade: Variants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } } }
    const inViewContainer: Variants = {
        hidden: {},
        show: { transition: { staggerChildren: 0.12 } },
    }

    const rise: Variants = {
        hidden: { opacity: 0, y: reduce ? 0 : 24, filter: "blur(4px)" },
        show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
    }

    const popCard: Variants = {
        hidden: { opacity: 0, y: 30, scale: 0.96, rotate: -1.5 },
        show: (i: number = 0) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.5},
        })
    }

    return {
        container,
        fadeUp,
        fade,
        inViewContainer,
        rise,
        popCard,
        draw,
        textReveal,
    }
}