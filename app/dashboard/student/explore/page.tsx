"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Filter,
  TrendingUp,
  DollarSign,
  Briefcase,
  Code,
  Brain,
  Palette,
  Heart,
  Scale,
  Building2,
  Microscope,
  Plane,
  Music,
  Camera,
  ChevronRight,
  Star,
} from "lucide-react"

const categories = [
  { name: "All", icon: Briefcase },
  { name: "Technology", icon: Code },
  { name: "Science", icon: Microscope },
  { name: "Business", icon: Building2 },
  { name: "Healthcare", icon: Heart },
  { name: "Creative", icon: Palette },
  { name: "Law", icon: Scale },
]

const careers = [
  {
    id: 1,
    title: "Software Engineer",
    category: "Technology",
    icon: Code,
    match: 92,
    avgSalary: "₹12-25 LPA",
    growth: "+25%",
    description: "Design, develop, and maintain software applications",
    skills: ["Problem Solving", "Programming", "Logic"],
    education: "B.Tech/BE in CS/IT",
    demand: "Very High",
  },
  {
    id: 2,
    title: "Data Scientist",
    category: "Technology",
    icon: Brain,
    match: 87,
    avgSalary: "₹15-35 LPA",
    growth: "+35%",
    description: "Analyze complex data to help organizations make decisions",
    skills: ["Statistics", "Python", "Machine Learning"],
    education: "B.Tech + Masters preferred",
    demand: "High",
  },
  {
    id: 3,
    title: "Doctor (MBBS)",
    category: "Healthcare",
    icon: Heart,
    match: 72,
    avgSalary: "₹8-20 LPA",
    growth: "+15%",
    description: "Diagnose and treat patients, save lives",
    skills: ["Biology", "Empathy", "Dedication"],
    education: "MBBS (5.5 years)",
    demand: "High",
  },
  {
    id: 4,
    title: "UX/UI Designer",
    category: "Creative",
    icon: Palette,
    match: 78,
    avgSalary: "₹8-20 LPA",
    growth: "+22%",
    description: "Create user-friendly and beautiful digital experiences",
    skills: ["Creativity", "Design Tools", "User Research"],
    education: "Design Degree/Certification",
    demand: "High",
  },
  {
    id: 5,
    title: "Investment Banker",
    category: "Business",
    icon: Building2,
    match: 65,
    avgSalary: "₹20-50 LPA",
    growth: "+12%",
    description: "Help companies raise capital and make financial decisions",
    skills: ["Finance", "Analytics", "Communication"],
    education: "MBA from top B-school",
    demand: "Medium",
  },
  {
    id: 6,
    title: "Aerospace Engineer",
    category: "Science",
    icon: Plane,
    match: 70,
    avgSalary: "₹10-25 LPA",
    growth: "+18%",
    description: "Design aircraft, spacecraft, and related systems",
    skills: ["Physics", "Mathematics", "Problem Solving"],
    education: "B.Tech Aerospace/Mechanical",
    demand: "Medium",
  },
  {
    id: 7,
    title: "Lawyer",
    category: "Law",
    icon: Scale,
    match: 60,
    avgSalary: "₹6-30 LPA",
    growth: "+10%",
    description: "Represent clients in legal matters and court cases",
    skills: ["Research", "Argumentation", "Writing"],
    education: "LLB (5 years integrated)",
    demand: "Medium",
  },
  {
    id: 8,
    title: "Content Creator",
    category: "Creative",
    icon: Camera,
    match: 75,
    avgSalary: "₹3-50 LPA",
    growth: "+40%",
    description: "Create engaging content for digital platforms",
    skills: ["Creativity", "Communication", "Marketing"],
    education: "No formal requirement",
    demand: "High",
  },
]

export default function ExploreCareersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredCareers = careers.filter((career) => {
    const matchesSearch = career.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || career.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Explore Careers</h1>
        <p className="text-muted-foreground">
          Discover careers that match your interests and skills
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search careers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          More Filters
        </Button>
      </div>

      {/* Category Tabs */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
        <TabsList className="flex-wrap h-auto gap-2 bg-transparent p-0">
          {categories.map((category) => (
            <TabsTrigger
              key={category.name}
              value={category.name}
              className="gap-2 rounded-full border data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <category.icon className="h-4 w-4" />
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Career Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredCareers.map((career) => (
          <Card key={career.id} className="transition-all hover:shadow-md cursor-pointer group">
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <career.icon className="h-6 w-6 text-primary" />
                </div>
                <Badge
                  className={`${
                    career.match >= 80
                      ? "bg-green-100 text-green-700"
                      : career.match >= 70
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {career.match}% Match
                </Badge>
              </div>

              <h3 className="mt-4 font-semibold text-lg group-hover:text-primary transition-colors">
                {career.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                {career.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1">
                {career.skills.slice(0, 3).map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <DollarSign className="h-4 w-4" />
                  <span>{career.avgSalary}</span>
                </div>
                <div className="flex items-center gap-1 text-green-600">
                  <TrendingUp className="h-4 w-4" />
                  <span>{career.growth} growth</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t pt-4">
                <Badge variant="secondary">{career.demand} Demand</Badge>
                <Button variant="ghost" size="sm" className="gap-1">
                  Learn More <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCareers.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Briefcase className="h-12 w-12 text-muted-foreground/50" />
            <h3 className="mt-4 font-semibold">No careers found</h3>
            <p className="text-sm text-muted-foreground">
              Try adjusting your search or filters
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
