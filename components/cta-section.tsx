import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-primary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to Find the Perfect Path?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Join thousands of Indian families who have navigated career decisions 
            with confidence. Start your free assessment today.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              size="lg" 
              variant="secondary" 
              asChild 
              className="w-full gap-2 sm:w-auto"
            >
              <Link href="/onboarding">
                Start Free Assessment
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="w-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto"
            >
              <Link href="#success-stories">Read Success Stories</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
