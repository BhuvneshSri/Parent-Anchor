import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote } from "lucide-react"

const stories = [
  {
    quote: "My son wanted to be a YouTuber. ParentAnchor helped us find a middle ground - he's now studying Digital Marketing at MICA with a clear content creation career path.",
    name: "Priya Sharma",
    role: "Parent from Mumbai",
    tag: "Alumni Parent",
    outcome: "MICA Ahmedabad, 2024",
  },
  {
    quote: "The Financial Viability Score convinced my parents that game design was a viable career. I'm now at DigiPen with their full support.",
    name: "Arjun Reddy",
    role: "Student, Hyderabad",
    tag: "Success Story",
    outcome: "DigiPen Institute, 2023",
  },
  {
    quote: "We compared 5 engineering colleges using the College Duel feature. The placement data was eye-opening and helped us make a confident choice.",
    name: "Meera Iyer",
    role: "Parent from Chennai",
    tag: "Verified Counselor",
    outcome: "VIT Vellore, 2024",
  },
]

export function SuccessStoriesSection() {
  return (
    <section id="success-stories" className="bg-muted/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real families who found clarity through ParentAnchor.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => (
            <Card key={index} className="relative overflow-hidden border-border bg-card">
              <CardContent className="p-6">
                <Quote className="mb-4 h-8 w-8 text-secondary/30" />
                <p className="text-pretty leading-relaxed text-foreground">
                  &quot;{story.quote}&quot;
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <p className="font-semibold text-foreground">{story.name}</p>
                    <p className="text-sm text-muted-foreground">{story.role}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {story.tag}
                  </Badge>
                </div>
                <p className="mt-3 text-xs font-medium text-secondary">
                  {story.outcome}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
