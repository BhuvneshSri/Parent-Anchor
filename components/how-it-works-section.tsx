import { ClipboardList, Brain, Route, Share2 } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Complete the Assessment",
    description: "A simple 4-step wizard capturing your child's interests, your budget, and location preferences.",
  },
  {
    icon: Brain,
    step: "02",
    title: "AI Analyzes the Data",
    description: "Our AI engine processes thousands of data points to find the perfect balance of passion and practicality.",
  },
  {
    icon: Route,
    step: "03",
    title: "Get Your Roadmap",
    description: "Receive a personalized career roadmap with college recommendations, timelines, and milestones.",
  },
  {
    icon: Share2,
    step: "04",
    title: "Share & Collaborate",
    description: "Generate a WhatsApp-ready summary to share with family members and school counselors.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How ParentAnchor Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From assessment to action plan in just four simple steps.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-10 hidden h-0.5 w-full -translate-x-0 bg-border lg:block" />
              )}
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                  <step.icon className="h-8 w-8" />
                  <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
