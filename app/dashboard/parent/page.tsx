"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import {
  TrendingUp,
  TrendingDown,
  IndianRupee,
  GraduationCap,
  Briefcase,
  ArrowRight,
  Star,
  MapPin,
  Users,
  BarChart3,
  Target,
} from "lucide-react"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts"

const marketGrowthData = [
  { year: "2024", tech: 18, healthcare: 12, finance: 8, design: 15 },
  { year: "2025", tech: 22, healthcare: 14, finance: 9, design: 18 },
  { year: "2026", tech: 28, healthcare: 17, finance: 10, design: 22 },
  { year: "2027", tech: 35, healthcare: 21, finance: 12, design: 26 },
  { year: "2028", tech: 42, healthcare: 25, finance: 14, design: 31 },
  { year: "2029", tech: 50, healthcare: 30, finance: 16, design: 36 },
]

const salaryData = [
  { city: "Bangalore", salary: 12.5, growth: 15 },
  { city: "Mumbai", salary: 11.2, growth: 12 },
  { city: "Delhi NCR", salary: 10.8, growth: 14 },
  { city: "Hyderabad", salary: 10.5, growth: 18 },
  { city: "Pune", salary: 9.8, growth: 13 },
  { city: "Chennai", salary: 9.2, growth: 11 },
]

const recommendedCareers = [
  {
    title: "Software Engineer",
    match: 92,
    growth: "+42%",
    avgSalary: "₹12.5 LPA",
    viability: "Excellent",
  },
  {
    title: "Data Scientist",
    match: 88,
    growth: "+38%",
    avgSalary: "₹15.0 LPA",
    viability: "Excellent",
  },
  {
    title: "UX Designer",
    match: 85,
    growth: "+31%",
    avgSalary: "₹10.5 LPA",
    viability: "Good",
  },
]

const topColleges = [
  { name: "IIT Bombay", fees: "₹8.5L", placement: "98%", rank: 1 },
  { name: "BITS Pilani", fees: "₹20L", placement: "95%", rank: 2 },
  { name: "VIT Vellore", fees: "₹12L", placement: "90%", rank: 3 },
]

export default function ParentDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Welcome Back, Mr. Sharma</h1>
          <p className="text-muted-foreground">
            Here&apos;s the latest analysis for Rahul&apos;s career journey.
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/parent/roadmap">
            View Full Roadmap
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Financial Viability</p>
                <p className="text-2xl font-bold text-foreground">87/100</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <Target className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span className="text-green-600">+5 points</span>
              <span className="text-muted-foreground">from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Budget Match</p>
                <p className="text-2xl font-bold text-foreground">₹15-20L</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <IndianRupee className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-3">
              <p className="text-sm text-muted-foreground">12 colleges in range</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Career Matches</p>
                <p className="text-2xl font-bold text-foreground">8 Paths</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <Briefcase className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">Top match: Software Engineering</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Profile Complete</p>
                <p className="text-2xl font-bold text-foreground">85%</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <BarChart3 className="h-6 w-6" />
              </div>
            </div>
            <Progress value={85} className="mt-3 h-2" />
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Market Growth Chart */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <TrendingUp className="h-5 w-5 text-secondary" />
              Industry Growth Projections
            </CardTitle>
            <CardDescription>
              Job market growth forecast 2024-2029 (% increase)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={marketGrowthData}>
                  <defs>
                    <linearGradient id="colorTech" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="oklch(0.55 0.12 185)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="oklch(0.55 0.12 185)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorHealthcare" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="oklch(0.3 0.08 250)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="oklch(0.3 0.08 250)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="year" className="text-xs" tick={{ fill: 'oklch(0.45 0.02 250)' }} />
                  <YAxis className="text-xs" tick={{ fill: 'oklch(0.45 0.02 250)' }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'oklch(1 0 0)',
                      border: '1px solid oklch(0.88 0.02 200)',
                      borderRadius: '8px',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="tech"
                    stroke="oklch(0.55 0.12 185)"
                    fill="url(#colorTech)"
                    strokeWidth={2}
                    name="Technology"
                  />
                  <Area
                    type="monotone"
                    dataKey="healthcare"
                    stroke="oklch(0.3 0.08 250)"
                    fill="url(#colorHealthcare)"
                    strokeWidth={2}
                    name="Healthcare"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-secondary" />
                <span className="text-muted-foreground">Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-primary" />
                <span className="text-muted-foreground">Healthcare</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Salary Heatmap */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <IndianRupee className="h-5 w-5 text-primary" />
              Starting Salary by City
            </CardTitle>
            <CardDescription>
              Average starting salary for Software Engineers (LPA)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={salaryData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" horizontal={false} />
                  <XAxis type="number" tick={{ fill: 'oklch(0.45 0.02 250)' }} />
                  <YAxis dataKey="city" type="category" width={80} tick={{ fill: 'oklch(0.45 0.02 250)' }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'oklch(1 0 0)',
                      border: '1px solid oklch(0.88 0.02 200)',
                      borderRadius: '8px',
                    }}
                    formatter={(value: number) => [`₹${value} LPA`, 'Salary']}
                  />
                  <Bar dataKey="salary" radius={[0, 4, 4, 0]}>
                    {salaryData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={index === 0 ? 'oklch(0.55 0.12 185)' : 'oklch(0.3 0.08 250)'}
                        opacity={1 - index * 0.1}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recommendations Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recommended Careers */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Briefcase className="h-5 w-5 text-secondary" />
              Recommended Career Paths
            </CardTitle>
            <CardDescription>
              Based on Rahul&apos;s interests and your budget
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendedCareers.map((career, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                      <span className="text-lg font-bold text-secondary">{career.match}%</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{career.title}</h4>
                      <div className="mt-1 flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <TrendingUp className="h-3 w-3 text-green-600" />
                          {career.growth}
                        </span>
                        <span>{career.avgSalary}</span>
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant={career.viability === "Excellent" ? "default" : "secondary"}
                    className={career.viability === "Excellent" ? "bg-secondary" : ""}
                  >
                    {career.viability}
                  </Badge>
                </div>
              ))}
            </div>
            <Button variant="outline" className="mt-4 w-full" asChild>
              <Link href="/dashboard/parent/roadmap">
                Explore All 8 Career Paths
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Top Colleges */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <GraduationCap className="h-5 w-5 text-primary" />
              Top College Matches
            </CardTitle>
            <CardDescription>
              Filtered by budget and location preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topColleges.map((college, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-sm font-bold">#{college.rank}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{college.name}</h4>
                      <div className="mt-1 flex items-center gap-3 text-sm text-muted-foreground">
                        <span>Fees: {college.fees}</span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          Placement: {college.placement}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">
                    <Star className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            <Button variant="outline" className="mt-4 w-full" asChild>
              <Link href="/dashboard/parent/compare">
                Compare Colleges
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="border-border bg-primary/5">
        <CardContent className="p-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Share Rahul&apos;s Career Snapshot
              </h3>
              <p className="text-sm text-muted-foreground">
                Generate a WhatsApp-ready summary to share with family and counselors.
              </p>
            </div>
            <Button asChild>
              <Link href="/dashboard/parent/share">
                Generate Snapshot
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
