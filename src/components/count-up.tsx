import {
    animate,
    useInView,
    useMotionValue,
    useMotionValueEvent,
    useReducedMotion,
    useSpring,
} from "motion/react"
import { useEffect, useRef, useState } from "react"

type CountUpProps = {
    end: number
    start?: number
    duration?: number
    compact?: boolean
    format?: (n: number) => string
    className?: string
}

export function CountUp({
    end,
    start = 0,
    duration = 1.1,
    compact = false,
    format,
    className,
}: CountUpProps) {
    const reduce = useReducedMotion()
    const ref = useRef<HTMLSpanElement | null>(null)
    const inView = useInView(ref, { once: false, amount: 0.6 })

    const mv = useMotionValue(start)
    const spring = useSpring(mv, { stiffness: 120, damping: 20 })
    const [display, setDisplay] = useState(start)

    useMotionValueEvent(spring, "change", (v) => setDisplay(v))

    useEffect(() => {
        if (!inView) {
            mv.set(start)
            setDisplay(start)
            return
        }
        if (reduce) {
            mv.set(end)
            setDisplay(end)
            return
        }
        const controls = animate(mv, end, { duration, ease: "easeOut" })
        return () => controls.stop()
    }, [inView, end, duration, reduce, mv, start])

    const defaultFormat = (n: number) =>
        compact
            ? new Intl.NumberFormat("en-US", {
                notation: "compact",
                maximumFractionDigits: 0,
            })
                .format(Math.round(n))
                .toLowerCase()
            : new Intl.NumberFormat("pt-BR").format(Math.round(n))

    const fmt = format ?? defaultFormat

    return (
        <span ref={ref} className={className}>
            {fmt(display)}
        </span>
    )
}
