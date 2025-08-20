import { Header } from "./components/header"
import { MomentsSection } from "./components/moments-section"

import { Hero } from "./components/hero"
import ProvaSocial1PNG from "@/assets/prova-social-1.png"
import ProvaSocial2PNG from "@/assets/prova-social-2.png"
import ProvaSocial3PNG from "@/assets/prova-social-3.png"
import ProvaSocial4PNG from "@/assets/prova-social-4.png"
import ProvaSocial5PNG from "@/assets/prova-social-5.png"
import ProvaSocial6PNG from "@/assets/prova-social-6.png"
import { AboutUsSection } from "./components/about-us-section"
import AlertaSpoilerSketch from "./assets/motions/alerta-spoiler-sketch"
import ImpactMetricsSection from "./components/impact-metrics-section"
import { TestimonialsSection } from "./components/testimonials-section"

const photos = [
  ProvaSocial1PNG,
  ProvaSocial2PNG,
  ProvaSocial3PNG,
  ProvaSocial4PNG,
  ProvaSocial5PNG,
  ProvaSocial6PNG,
]

export default function App() {

  return (
    <main>
      <div className="relative min-h-screen bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
        <Header />
        <div className="flex w-full mx-auto p-10">
          <Hero />
        </div>
        <div className="px-8">
          <div className="flex flex-col">
            <AlertaSpoilerSketch className="w-40 self-center" />
            <MomentsSection
              images={photos}
              topOffsetPx={96}
              imageVh={35}
            />
          </div>
        </div>
        <AboutUsSection />
        <ImpactMetricsSection />
        <TestimonialsSection />
      </div>
    </main>
  )
}
