"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Newspaper,
  TrendingUp,
  GraduationCap,
  Plane,
  Cpu,
  Search,
  Clock,
  ExternalLink,
  Bookmark,
  BookmarkCheck,
  Bell,
  Filter,
  ChevronRight,
  AlertCircle,
  Sparkles,
  Building2,
  Globe,
} from "lucide-react"

const newsCategories = [
  { id: "all", label: "All News", icon: Newspaper },
  { id: "exams", label: "Entrance Exams", icon: GraduationCap },
  { id: "visa", label: "Study Abroad", icon: Plane },
  { id: "industries", label: "Emerging Industries", icon: Cpu },
  { id: "colleges", label: "College News", icon: Building2 },
]

const newsArticles = [
  {
    id: 1,
    category: "exams",
    title: "JEE Main 2025: NTA Announces New Pattern with 30% Weightage on Practical Questions",
    description: "The National Testing Agency has announced significant changes to JEE Main 2025, including increased focus on application-based questions and practical scenarios.",
    source: "Education Times",
    time: "2 hours ago",
    isBreaking: true,
    isTrending: true,
    tags: ["JEE Main", "NTA", "Engineering"],
    readTime: "4 min read",
  },
  {
    id: 2,
    category: "visa",
    title: "UK Announces New Graduate Route Extension for STEM Students",
    description: "Students pursuing STEM degrees in the UK can now stay for up to 3 years post-graduation to seek employment, up from the previous 2-year limit.",
    source: "Study Abroad News",
    time: "5 hours ago",
    isBreaking: false,
    isTrending: true,
    tags: ["UK Visa", "STEM", "Post-Study Work"],
    readTime: "3 min read",
  },
  {
    id: 3,
    category: "industries",
    title: "India's Semiconductor Mission: 10 Lakh Jobs Expected by 2027",
    description: "With Micron, Foxconn, and Tata Electronics setting up fabs, the semiconductor industry in India is projected to create massive employment opportunities.",
    source: "Tech India Weekly",
    time: "1 day ago",
    isBreaking: false,
    isTrending: true,
    tags: ["Semiconductor", "Jobs", "Tech Industry"],
    readTime: "6 min read",
  },
  {
    id: 4,
    category: "colleges",
    title: "IIT Madras Tops QS India Rankings 2025; New IITs Show Remarkable Growth",
    description: "IIT Madras retains top position while newer IITs including IIT Indore and IIT Hyderabad show significant improvement in research output.",
    source: "Higher Education Review",
    time: "1 day ago",
    isBreaking: false,
    isTrending: false,
    tags: ["IIT", "Rankings", "Research"],
    readTime: "5 min read",
  },
  {
    id: 5,
    category: "exams",
    title: "NEET UG 2025: Biology Section to Include More Clinical Case Studies",
    description: "NMC guidelines require NEET to include more practical clinical scenarios to better assess medical aptitude of aspiring doctors.",
    source: "Medical Education Today",
    time: "2 days ago",
    isBreaking: false,
    isTrending: false,
    tags: ["NEET", "Medical", "NMC"],
    readTime: "4 min read",
  },
  {
    id: 6,
    category: "visa",
    title: "Canada Updates Student Work Permit Rules: More On-Campus Work Hours Allowed",
    description: "International students in Canada can now work up to 30 hours per week during academic sessions, providing better financial support opportunities.",
    source: "Canada Immigration News",
    time: "2 days ago",
    isBreaking: false,
    isTrending: false,
    tags: ["Canada", "Work Permit", "Students"],
    readTime: "3 min read",
  },
  {
    id: 7,
    category: "industries",
    title: "AI & ML Jobs in India: 45% Salary Growth in Entry-Level Positions",
    description: "Fresh graduates with AI/ML skills are commanding premium salaries as companies compete for talent in the rapidly expanding artificial intelligence sector.",
    source: "Jobs & Careers India",
    time: "3 days ago",
    isBreaking: false,
    isTrending: true,
    tags: ["AI", "Machine Learning", "Salaries"],
    readTime: "5 min read",
  },
  {
    id: 8,
    category: "colleges",
    title: "BITS Pilani Announces New Campus in UAE; Admissions Open for 2025",
    description: "BITS Pilani expands its global footprint with a new campus in Dubai, offering undergraduate programs in Computer Science and Electronics.",
    source: "Education World",
    time: "3 days ago",
    isBreaking: false,
    isTrending: false,
    tags: ["BITS Pilani", "UAE", "Admissions"],
    readTime: "4 min read",
  },
  {
    id: 9,
    category: "industries",
    title: "Green Energy Sector to Create 3.4 Million Jobs in India by 2030",
    description: "The renewable energy industry including solar, wind, and green hydrogen is set to become a major employment generator as India pursues net-zero goals.",
    source: "Climate & Energy Report",
    time: "4 days ago",
    isBreaking: false,
    isTrending: false,
    tags: ["Green Energy", "Sustainability", "Jobs"],
    readTime: "6 min read",
  },
  {
    id: 10,
    category: "exams",
    title: "CAT 2025: IIM Calcutta Introduces Sectional Time Limits",
    description: "The Common Admission Test will now have strict time limits for each section, preventing students from carrying over time between sections.",
    source: "MBA Universe",
    time: "5 days ago",
    isBreaking: false,
    isTrending: false,
    tags: ["CAT", "IIM", "MBA"],
    readTime: "3 min read",
  },
]

const trendingTopics = [
  { name: "JEE Main 2025", count: 2847, trend: "+23%" },
  { name: "Semiconductor Jobs", count: 1923, trend: "+45%" },
  { name: "UK Student Visa", count: 1654, trend: "+18%" },
  { name: "IIT Rankings", count: 1432, trend: "+12%" },
  { name: "AI Careers", count: 1287, trend: "+67%" },
]

const upcomingDeadlines = [
  { event: "JEE Main Session 1 Registration", date: "Dec 15, 2024", daysLeft: 12 },
  { event: "NEET UG Application Deadline", date: "Jan 10, 2025", daysLeft: 38 },
  { event: "UK Universities Fall Intake", date: "Jan 15, 2025", daysLeft: 43 },
  { event: "CAT 2025 Result Declaration", date: "Jan 20, 2025", daysLeft: 48 },
]

export default function CareerPulsePage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [savedArticles, setSavedArticles] = useState<number[]>([])

  const filteredArticles = newsArticles.filter((article) => {
    const matchesCategory = activeCategory === "all" || article.category === activeCategory
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const toggleSave = (id: number) => {
    setSavedArticles(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Live Career Pulse</h1>
          <p className="text-muted-foreground">Stay updated with the latest news and trends shaping careers</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Bell className="mr-2 h-4 w-4" />
            Set Alerts
          </Button>
          <Button variant="outline" size="sm">
            <Bookmark className="mr-2 h-4 w-4" />
            Saved ({savedArticles.length})
          </Button>
        </div>
      </div>

      {/* Breaking News Banner */}
      <Card className="border-destructive bg-destructive/5">
        <CardContent className="flex items-center gap-4 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
            <AlertCircle className="h-5 w-5 text-destructive" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Badge variant="destructive" className="animate-pulse">Breaking</Badge>
              <span className="text-sm font-medium text-foreground">
                JEE Main 2025: NTA Announces New Pattern with 30% Weightage on Practical Questions
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">2 hours ago • Education Times</p>
          </div>
          <Button variant="ghost" size="sm">
            Read More <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>

      {/* Search and Filter */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search news, topics, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {newsCategories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(category.id)}
            className="shrink-0"
          >
            <category.icon className="mr-2 h-4 w-4" />
            {category.label}
          </Button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main News Feed */}
        <div className="lg:col-span-2 space-y-4">
          <Tabs defaultValue="latest" className="w-full">
            <TabsList>
              <TabsTrigger value="latest">Latest</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="saved">Saved</TabsTrigger>
            </TabsList>

            <TabsContent value="latest" className="mt-4 space-y-4">
              {filteredArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden transition-all hover:shadow-md">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="flex-1 space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          {article.isBreaking && (
                            <Badge variant="destructive" className="text-xs">Breaking</Badge>
                          )}
                          {article.isTrending && (
                            <Badge variant="secondary" className="text-xs">
                              <TrendingUp className="mr-1 h-3 w-3" />
                              Trending
                            </Badge>
                          )}
                          <Badge variant="outline" className="text-xs capitalize">
                            {article.category === "exams" && <GraduationCap className="mr-1 h-3 w-3" />}
                            {article.category === "visa" && <Plane className="mr-1 h-3 w-3" />}
                            {article.category === "industries" && <Cpu className="mr-1 h-3 w-3" />}
                            {article.category === "colleges" && <Building2 className="mr-1 h-3 w-3" />}
                            {article.category}
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-foreground leading-tight hover:text-primary cursor-pointer">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {article.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {article.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs font-normal">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span>{article.source}</span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {article.time}
                            </span>
                            <span>{article.readTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleSave(article.id)}
                            >
                              {savedArticles.includes(article.id) ? (
                                <BookmarkCheck className="h-4 w-4 text-primary" />
                              ) : (
                                <Bookmark className="h-4 w-4" />
                              )}
                            </Button>
                            <Button variant="ghost" size="sm">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="trending" className="mt-4 space-y-4">
              {filteredArticles.filter(a => a.isTrending).map((article) => (
                <Card key={article.id} className="overflow-hidden transition-all hover:shadow-md">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="flex-1 space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            <TrendingUp className="mr-1 h-3 w-3" />
                            Trending
                          </Badge>
                          <Badge variant="outline" className="text-xs capitalize">
                            {article.category}
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-foreground leading-tight hover:text-primary cursor-pointer">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {article.description}
                        </p>
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span>{article.source}</span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {article.time}
                            </span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="saved" className="mt-4 space-y-4">
              {savedArticles.length === 0 ? (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                    <Bookmark className="h-12 w-12 text-muted-foreground/50" />
                    <h3 className="mt-4 font-semibold text-foreground">No saved articles</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Click the bookmark icon on any article to save it for later
                    </p>
                  </CardContent>
                </Card>
              ) : (
                newsArticles.filter(a => savedArticles.includes(a.id)).map((article) => (
                  <Card key={article.id} className="overflow-hidden transition-all hover:shadow-md">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="flex-1 space-y-2">
                          <h3 className="font-semibold text-foreground leading-tight hover:text-primary cursor-pointer">
                            {article.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {article.description}
                          </p>
                          <div className="flex items-center justify-between pt-2">
                            <span className="text-xs text-muted-foreground">{article.source}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleSave(article.id)}
                            >
                              <BookmarkCheck className="h-4 w-4 text-primary" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Trending Topics */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <TrendingUp className="h-4 w-4 text-secondary" />
                Trending Topics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {trendingTopics.map((topic, index) => (
                <div key={topic.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-xs font-medium">
                      {index + 1}
                    </span>
                    <span className="text-sm font-medium text-foreground">{topic.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{topic.count.toLocaleString()}</span>
                    <Badge variant="secondary" className="text-xs text-green-600">
                      {topic.trend}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upcoming Deadlines */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <Clock className="h-4 w-4 text-secondary" />
                Upcoming Deadlines
              </CardTitle>
              <CardDescription>Important dates to remember</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingDeadlines.map((deadline) => (
                <div key={deadline.event} className="rounded-lg border p-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">{deadline.event}</p>
                      <p className="text-xs text-muted-foreground">{deadline.date}</p>
                    </div>
                    <Badge 
                      variant={deadline.daysLeft <= 14 ? "destructive" : "secondary"}
                      className="text-xs"
                    >
                      {deadline.daysLeft} days
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* AI Insights */}
          <Card className="border-secondary/50 bg-secondary/5">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <Sparkles className="h-4 w-4 text-secondary" />
                AI Career Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Based on current trends, here are personalized insights for Rahul:
              </p>
              <div className="space-y-2">
                <div className="rounded-lg bg-background p-3">
                  <p className="text-sm text-foreground">
                    <strong>Semiconductor Industry</strong> is growing 45% YoY. Consider adding chip design courses to your learning path.
                  </p>
                </div>
                <div className="rounded-lg bg-background p-3">
                  <p className="text-sm text-foreground">
                    <strong>UK visa changes</strong> could benefit STEM students. Explore UK universities in your college comparison.
                  </p>
                </div>
              </div>
              <Button variant="secondary" size="sm" className="w-full">
                <Globe className="mr-2 h-4 w-4" />
                Get Personalized Brief
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
