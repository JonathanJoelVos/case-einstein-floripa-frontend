import { motion } from "motion/react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"
import { useMotion } from "@/hooks/use-motion"

import ArrowSVG from "@/assets/arrow.svg"
import { BlobBg } from "./blob"
import { TESTIMONIALS } from "@/config/testmonials"


export function TestimonialsSection() {
    const { rise } = useMotion()

    return (
        <section className="relative mx-auto max-w-6xl px-6 py-20">
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-bold sm:text-4xl  relative font-excalidraw text-center">
                    DEPOIMENTOS 💬
                </h2>
                <motion.p className="text-sm text-center leading-relaxed text-neutral-600 font-excalidraw" variants={rise}>
                    Veja como o Einstein Impactou a vida de nossos alunos e voluntários
                </motion.p>
            </div>
            <motion.img src={ArrowSVG} alt="Seta" className="mx-auto mt-2 w-5 -mb-8" variants={rise} />

            <Carousel
                className="mt-8 border-2 border-black rounded-xl"
            >
                <CarouselContent>
                    {TESTIMONIALS.map((testimonial, idx) => (
                        <CarouselItem key={idx} className="flex justify-center items-center py-10">
                            <Card className="relative overflow-hidden border-none bg-transparent shadow-none">
                                <BlobBg className="text-[#bfe3ed] dark:text-[#9fd3df]" />
                                <div className="relative flex items-center justify-center w-full gap-2 ml-10">
                                    <motion.div
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: false, amount: 0.5 }}
                                        variants={rise}
                                        className="mx-auto w-64 md:mx-0 md:w-72"
                                    >
                                        <img
                                            src={testimonial.photo}
                                            alt={testimonial.name}
                                            className="rounded-2xl object-cover grayscale"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: false, amount: 0.5 }}
                                        variants={rise}
                                        className="relative z-10 pr-14"
                                    >
                                        <p className="font-excalidraw text-sm text-[#0b2836]/80 dark:text-white/80">
                                            {testimonial.name}
                                        </p>

                                        <blockquote className="mt-3 max-w-lg text-[15px] leading-relaxed text-[#0b2836] dark:text-white">
                                            “{testimonial.quote}”
                                        </blockquote>

                                        <p className="mt-5 font-excalidraw text-sm font-bold tracking-wide text-[#0b2836] dark:text-white">
                                            {testimonial.course}
                                        </p>
                                    </motion.div>
                                </div>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 h-10 w-10 rounded-full bg-white/90 text-[#0b2836] shadow-md hover:bg-white" />
                <CarouselNext className="right-2 h-10 w-10 rounded-full bg-white/90 text-[#0b2836] shadow-md hover:bg-white" />
            </Carousel>
        </section>
    )
}


