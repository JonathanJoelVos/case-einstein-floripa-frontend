import { Header } from "@/routes/landing-page/components/header"
import { MomentsSection } from "@/routes/landing-page/components/moments-section"
import { Hero } from "@/routes/landing-page/components/hero"
import { AboutUsSection } from "@/routes/landing-page/components/about-us-section"
import { AlertaSpoilerSketch } from "@/routes/landing-page/assets/motions/alerta-spoiler-sketch"
import { TestimonialsSection } from "@/routes/landing-page/components/testimonials-section"
import { Footer } from "@/routes/landing-page/components/footer"
import { UploadCVSection } from "./components/upload-cv-section"
import { createFileRoute } from "@tanstack/react-router"
import { ImpactMetricsSection } from "./components/impact-metrics-section"

import ProvaSocial1PNG from "@/routes/landing-page/assets/prova-social-1.png"
import ProvaSocial2PNG from "@/routes/landing-page/assets/prova-social-2.png"
import ProvaSocial3PNG from "@/routes/landing-page/assets/prova-social-3.png"
import ProvaSocial4PNG from "@/routes/landing-page/assets/prova-social-4.png"
import ProvaSocial5PNG from "@/routes/landing-page/assets/prova-social-5.png"
import ProvaSocial6PNG from "@/routes/landing-page/assets/prova-social-6.png"

export const Route = createFileRoute('/landing-page/')({
  component: LandingPage,
})

const photos = [
  ProvaSocial1PNG,
  ProvaSocial2PNG,
  ProvaSocial3PNG,
  ProvaSocial4PNG,
  ProvaSocial5PNG,
  ProvaSocial6PNG,
]

export default function LandingPage() {

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
        <UploadCVSection />
      </div>
      <Footer />
    </main>
  )
}
