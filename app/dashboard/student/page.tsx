"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Compass,
  Target,
  Lightbulb,
  BookOpen,
  Trophy,
  TrendingUp,
  Clock,
  Star,
  ChevronRight,
  Sparkles,
  Rocket,
  Brain,
  Code,
  Palette,
  Briefcase,
} from "lucide-react"
import Link from "next/link"

const careerMatches = [
  {
    title: "Software Engineer",
    match: 92,
    icon: Code,
    growth: "+25%",
    description: "Build apps and solve problems with code",
    skills: ["Problem Solving", "Logic", "Creativity"],
  },
  {
    title: "Data Scientist",
    match: 87,
    icon: Brain,
    growth: "+35%",
    description: "Analyze data and find insights",
    skills: ["Mathematics", "Analytics", "Python"],
  },
  {
    title: "UX Designer",
    match: 78,
    icon: Palette,
    growth: "+20%",
    description: "Design user-friendly digital experiences",
    skills: ["Creativity", "Empathy", "Design"],
  },
  {
    title: "Product Manager",
    match: 75,
    icon: Briefcase,
    growth: "+18%",
    description: "Lead product strategy and development",
    skills: ["Communication", "Strategy", "Leadership"],
  },
]

const recentActivities = [
  { title: "Completed Python Basics Quiz", type: "quiz", points: 50, time: "2 hours ago" },
  { title: "Explored Data Science Career", type: "explore", points: 20, time: "Yesterday" },
  { title: "Took Interest Assessment", type: "assessment", points: 100, time: "2 days ago" },
  { title: "Watched AI Career Video", type: "video", points: 30, time: "3 days ago" },
]

const dailyChallenges = [
  { title: "Complete a skill quiz", points: 50, completed: false },
  { title: "Explore 2 new careers", points: 40, completed: true },
  { title: "Chat with AI Mentor", points: 30, completed: false },
]

export default function StudentDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Hey Rahul!</h1>
          <p className="text-muted-foreground">
            Ready to discover your future? Let&apos;s explore careers that match your interests.
          </p>
        </div>
        <Button className="gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90">
          <Sparkles className="h-4 w-4" />
          Talk to AI Mentor
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Compass className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">12</p>
              <p className="text-sm text-muted-foreground">Careers Explored</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
              <Target className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <p className="text-2xl font-bold">3</p>
              <p className="text-sm text-muted-foreground">Assessments Done</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/10">
              <Trophy className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">850</p>
              <p className="text-sm text-muted-foreground">XP Points</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">7</p>
              <p className="text-sm text-muted-foreground">Day Streak</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Career Matches */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Your Top Career Matches</h2>
            <Link href="/dashboard/student/explore">
              <Button variant="ghost" size="sm" className="gap-1">
                View All <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {careerMatches.map((career) => (
              <Card key={career.title} className="transition-shadow hover:shadow-md cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <career.icon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      {career.match}% Match
                    </Badge>
                  </div>
                  <h3 className="mt-3 font-semibold">{career.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{career.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {career.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-green-600">{career.growth} growth</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Daily Challenges */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <Rocket className="h-4 w-4 text-secondary" />
                Daily Challenges
              </CardTitle>
              <CardDescription>Complete tasks to earn XP</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {dailyChallenges.map((challenge) => (
                <div
                  key={challenge.title}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-6 w-6 items-center justify-center rounded-full ${
                        challenge.completed
                          ? "bg-green-100 text-green-600"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {challenge.completed ? (
                        <Star className="h-3 w-3 fill-current" />
                      ) : (
                        <Target className="h-3 w-3" />
                      )}
                    </div>
                    <span
                      className={`text-sm ${
                        challenge.completed ? "line-through text-muted-foreground" : ""
                      }`}
                    >
                      {challenge.title}
                    </span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    +{challenge.points} XP
                  </Badge>
                </div>
              ))}
              <div className="pt-2">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Daily Progress</span>
                  <span className="font-medium">1/3</span>
                </div>
                <Progress value={33} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <Clock className="h-4 w-4 text-muted-foreground" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="text-sm font-medium">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    +{activity.points} XP
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Skill Progress */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <Lightbulb className="h-4 w-4 text-yellow-500" />
                Your Strengths
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Problem Solving", level: 85 },
                { name: "Logical Thinking", level: 78 },
                { name: "Creativity", level: 72 },
                { name: "Communication", level: 65 },
              ].map((skill) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>{skill.name}</span>
                    <span className="font-medium">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Link href="/dashboard/student/assessment">
          <Card className="transition-all hover:shadow-md hover:border-secondary cursor-pointer h-full">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                <Target className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mt-3 font-semibold">Take Assessment</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Discover your skills and interests
              </p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/dashboard/student/explore">
          <Card className="transition-all hover:shadow-md hover:border-secondary cursor-pointer h-full">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Compass className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-3 font-semibold">Explore Careers</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Browse 100+ career options
              </p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/dashboard/student/learning">
          <Card className="transition-all hover:shadow-md hover:border-secondary cursor-pointer h-full">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/10">
                <BookOpen className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="mt-3 font-semibold">Start Learning</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Build skills for your dream career
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}
