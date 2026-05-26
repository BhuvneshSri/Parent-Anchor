import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { DualLensSection } from "@/components/dual-lens-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { SuccessStoriesSection } from "@/components/success-stories-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <DualLensSection />
        <HowItWorksSection />
        <SuccessStoriesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
