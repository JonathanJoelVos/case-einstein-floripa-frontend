import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { History } from "lucide-react"

interface MomentsSectionProps {
    images: string[]
    topOffsetPx?: number
    imageVh?: number
}

export function MomentsSection({
    images,
    topOffsetPx = 96,
    imageVh = 40,
}: MomentsSectionProps) {
    const reduce = useReducedMotion()
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const stickyRef = useRef<HTMLDivElement | null>(null)
    const stripRef = useRef<HTMLDivElement | null>(null)

    const [scrollLength, setScrollLength] = useState(0)

    const recalc = () => {
        const total = stripRef.current?.scrollWidth ?? 0
        const visible = stickyRef.current?.clientWidth ?? window.innerWidth
        setScrollLength(Math.max(0, total - visible))
    }

    useLayoutEffect(() => { recalc() }, [])
    useEffect(() => {
        const ro = new ResizeObserver(recalc)
        if (stripRef.current) ro.observe(stripRef.current)
        if (stickyRef.current) ro.observe(stickyRef.current)
        window.addEventListener("resize", recalc)
        return () => {
            ro.disconnect()
            window.removeEventListener("resize", recalc)
        }
    }, [])

    const onImgLoad = () => recalc()

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    })

    const totalDistance = scrollLength
    const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance])
    const styleX = reduce ? undefined : { x }

    const sectionStyle = { height: `calc(100vh + ${totalDistance}px)` }
    const stickyStyle = { top: `${topOffsetPx}px`, height: `calc(70vh - ${topOffsetPx}px)` }

    return (
        <section ref={sectionRef} className="relative w-full px-10 bg-blue-300 z-20 rounded-2xl border-2 border-black" style={sectionStyle}>
            <div ref={stickyRef} className="sticky w-full overflow-hidden" style={stickyStyle}>
                <div className="text-4xl font-bold text-start mt-10 -mb-30">
                    <span className="flex items-center gap-2 font-excalidraw"><History /> Nossos Momentos</span>
                    <p className="text-sm leading-relaxed text-neutral-600 font-excalidraw max-w-md">
                        Uma coleção de imagens que capturam a essência do nosso trabalho e dedicação.
                    </p>
                </div>
                <motion.div
                    ref={stripRef}
                    style={styleX}
                    className="flex mt-40  items-center gap-6 px-6 will-change-transform"
                >
                    {images.map((src, i) => (
                        <img
                            key={src + i}
                            src={src}
                            alt=""
                            onLoad={onImgLoad}
                            className="h-auto w-auto max-h-[70vh] shrink-0 rounded-xl object-cover ring-1 ring-black/5 dark:ring-white/10 shadow-[0_12px_28px_rgba(2,6,23,0.18)] border-2 border-black"
                            style={{ height: `${imageVh}vh` }}
                            loading="lazy"
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
