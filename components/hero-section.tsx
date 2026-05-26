import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, GraduationCap, TrendingUp, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary"></span>
            </span>
            Trusted by 10,000+ Indian Families
          </div>
          
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            The Dual Lens Approach to
            <span className="mt-2 block text-secondary">Career Planning</span>
          </h1>
          
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Where your child&apos;s passion meets your financial wisdom. Two dashboards, 
            one unified roadmap that balances dreams with reality.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="w-full gap-2 sm:w-auto">
              <Link href="/onboarding">
                Start Your Free Assessment
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
              <Link href="#how-it-works">See How It Works</Link>
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {[
            { icon: Users, label: "Student View", desc: "Explore passions & interests" },
            { icon: GraduationCap, label: "Parent View", desc: "Analyze ROI & viability" },
            { icon: TrendingUp, label: "AI Roadmap", desc: "Personalized career paths" },
            { icon: Shield, label: "Verified Data", desc: "Real placement records" },
          ].map((item, i) => (
            <div
              key={i}
              className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-secondary/50 hover:shadow-lg"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground">{item.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
