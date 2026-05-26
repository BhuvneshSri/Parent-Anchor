import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Sparkles, 
  Video, 
  Brain, 
  Heart,
  BarChart3,
  IndianRupee,
  TrendingUp,
  Calculator
} from "lucide-react"

export function DualLensSection() {
  return (
    <section id="features" className="bg-muted/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Two Perspectives, One Decision
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our unique dual-dashboard approach ensures both students and parents 
            get the insights they need.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Student Dashboard Preview */}
          <Card className="overflow-hidden border-2 border-secondary/20 bg-card">
            <CardHeader className="bg-secondary/5 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-lg text-foreground">Student Dashboard</CardTitle>
                  <p className="text-sm text-muted-foreground">Exploratory & engaging</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-lg bg-muted/50 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                    <Video className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Day-in-the-Life Videos</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Watch real professionals in action across 50+ career paths
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg bg-muted/50 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                    <Brain className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Skill-Based Quizzes</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Interactive assessments that uncover hidden talents
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg bg-muted/50 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                    <Heart className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Interest Mapper</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Visual tool connecting hobbies to potential careers
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Parent Dashboard Preview */}
          <Card className="overflow-hidden border-2 border-primary/20 bg-card">
            <CardHeader className="bg-primary/5 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-lg text-foreground">Parent Dashboard</CardTitle>
                  <p className="text-sm text-muted-foreground">Data-driven & practical</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-lg bg-muted/50 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Market Growth Charts</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Industry projections and job market trends for 2025-2035
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg bg-muted/50 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <IndianRupee className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Salary Heatmaps</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Starting salaries across cities and experience levels
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg bg-muted/50 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Calculator className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Financial Viability Score</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Custom ROI analysis based on your education budget
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
