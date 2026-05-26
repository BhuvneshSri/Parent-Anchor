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
  Flame,
  Zap,
  Trophy,
} from "lucide-react"

const newsCategories = [
  { id: "all", label: "All News", icon: Newspaper },
  { id: "exams", label: "Entrance Exams", icon: GraduationCap },
  { id: "visa", label: "Study Abroad", icon: Plane },
  { id: "industries", label: "Hot Industries", icon: Cpu },
  { id: "colleges", label: "College News", icon: Building2 },
]

const newsArticles = [
  {
    id: 1,
    category: "exams",
    title: "JEE Main 2025: New Pattern Alert! 30% Questions Now Application-Based",
    description: "NTA has made big changes to JEE Main 2025. More focus on real-world problem solving and practical applications. Start practicing with case studies!",
    source: "Education Times",
    time: "2 hours ago",
    isBreaking: true,
    isTrending: true,
    tags: ["JEE Main", "NTA", "Engineering"],
    readTime: "4 min read",
    xpReward: 50,
  },
  {
    id: 2,
    category: "visa",
    title: "UK Just Made It Easier for STEM Students to Stay After Graduation!",
    description: "Great news for students planning to study in UK! You can now stay for 3 years after your STEM degree to find a job. This is huge!",
    source: "Study Abroad News",
    time: "5 hours ago",
    isBreaking: false,
    isTrending: true,
    tags: ["UK Visa", "STEM", "Post-Study Work"],
    readTime: "3 min read",
    xpReward: 30,
  },
  {
    id: 3,
    category: "industries",
    title: "Semiconductor Jobs are BOOMING: 10 Lakh Openings Coming by 2027!",
    description: "Micron, Foxconn, and Tata are building chip factories in India. This is your chance to get into one of the hottest career fields!",
    source: "Tech India Weekly",
    time: "1 day ago",
    isBreaking: false,
    isTrending: true,
    tags: ["Semiconductor", "Jobs", "Tech Industry"],
    readTime: "6 min read",
    xpReward: 40,
  },
  {
    id: 4,
    category: "colleges",
    title: "IIT Madras is #1 Again! But Check Out These Rising IITs...",
    description: "IIT Madras tops QS India Rankings 2025. But newer IITs like Indore and Hyderabad are catching up fast with amazing research opportunities.",
    source: "Higher Education Review",
    time: "1 day ago",
    isBreaking: false,
    isTrending: false,
    tags: ["IIT", "Rankings", "Research"],
    readTime: "5 min read",
    xpReward: 25,
  },
  {
    id: 5,
    category: "exams",
    title: "NEET 2025 Update: More Clinical Cases in Biology Section",
    description: "Aspiring doctors, heads up! NEET is adding more real patient scenarios to test your medical thinking. Time to practice case studies!",
    source: "Medical Education Today",
    time: "2 days ago",
    isBreaking: false,
    isTrending: false,
    tags: ["NEET", "Medical", "NMC"],
    readTime: "4 min read",
    xpReward: 35,
  },
  {
    id: 6,
    category: "industries",
    title: "AI Jobs Pay 45% More for Freshers Now!",
    description: "Companies are fighting for AI talent. Fresh graduates with AI/ML skills are getting crazy good salaries. Here is how to skill up!",
    source: "Jobs & Careers India",
    time: "3 days ago",
    isBreaking: false,
    isTrending: true,
    tags: ["AI", "Machine Learning", "Salaries"],
    readTime: "5 min read",
    xpReward: 45,
  },
  {
    id: 7,
    category: "colleges",
    title: "BITS Pilani Opens Campus in Dubai! Applications Open",
    description: "Want to study at BITS but also experience international exposure? Their new UAE campus offers CS and Electronics programs!",
    source: "Education World",
    time: "3 days ago",
    isBreaking: false,
    isTrending: false,
    tags: ["BITS Pilani", "UAE", "Admissions"],
    readTime: "4 min read",
    xpReward: 30,
  },
  {
    id: 8,
    category: "industries",
    title: "Green Energy = Green Money: 3.4 Million Jobs by 2030",
    description: "Solar, wind, and green hydrogen are the future. If you care about the planet AND want a great career, this sector is for you!",
    source: "Climate & Energy Report",
    time: "4 days ago",
    isBreaking: false,
    isTrending: false,
    tags: ["Green Energy", "Sustainability", "Jobs"],
    readTime: "6 min read",
    xpReward: 35,
  },
]

const trendingTopics = [
  { name: "#JEEMain2025", count: 12847, trend: "+23%", isHot: true },
  { name: "#SemiconductorJobs", count: 8923, trend: "+45%", isHot: true },
  { name: "#UKStudentVisa", count: 6654, trend: "+18%", isHot: false },
  { name: "#AICareer", count: 5287, trend: "+67%", isHot: true },
  { name: "#IITRankings", count: 4432, trend: "+12%", isHot: false },
]

const upcomingDeadlines = [
  { event: "JEE Main Session 1 Registration", date: "Dec 15, 2024", daysLeft: 12, urgency: "high" },
  { event: "NEET UG Application Deadline", date: "Jan 10, 2025", daysLeft: 38, urgency: "medium" },
  { event: "UK Universities Fall Intake", date: "Jan 15, 2025", daysLeft: 43, urgency: "low" },
]

const dailyChallenge = {
  title: "News Quiz Challenge",
  description: "Answer 3 questions about today's trending news to earn XP!",
  xpReward: 100,
  timeLeft: "6h 23m",
}

export default function StudentCareerPulsePage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [savedArticles, setSavedArticles] = useState<number[]>([])
  const [readArticles, setReadArticles] = useState<number[]>([])

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

  const markAsRead = (id: number) => {
    if (!readArticles.includes(id)) {
      setReadArticles(prev => [...prev, id])
    }
  }

  const totalXPEarned = readArticles.reduce((sum, id) => {
    const article = newsArticles.find(a => a.id === id)
    return sum + (article?.xpReward || 0)
  }, 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Career Pulse</h1>
          <p className="text-muted-foreground">Stay ahead with the latest career news and trends</p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="gap-1 px-3 py-1.5">
            <Zap className="h-4 w-4 text-yellow-500" />
            <span className="font-semibold">{totalXPEarned} XP</span>
            <span className="text-muted-foreground">earned today</span>
          </Badge>
          <Button variant="outline" size="sm">
            <Bell className="mr-2 h-4 w-4" />
            Alerts
          </Button>
        </div>
      </div>

      {/* Daily Challenge Banner */}
      <Card className="border-secondary bg-gradient-to-r from-secondary/10 to-primary/10">
        <CardContent className="flex items-center gap-4 p-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/20">
            <Trophy className="h-6 w-6 text-secondary" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Badge className="bg-secondary text-secondary-foreground">Daily Challenge</Badge>
              <span className="text-sm font-medium text-foreground">
                {dailyChallenge.title}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{dailyChallenge.description}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-lg font-bold text-secondary">
              <Zap className="h-5 w-5" />
              +{dailyChallenge.xpReward} XP
            </div>
            <p className="text-xs text-muted-foreground">{dailyChallenge.timeLeft} left</p>
          </div>
          <Button size="sm">
            Start Quiz
          </Button>
        </CardContent>
      </Card>

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
                JEE Main 2025: New Pattern Alert! 30% Questions Now Application-Based
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">2 hours ago • Education Times</p>
          </div>
          <Badge variant="outline" className="gap-1">
            <Zap className="h-3 w-3 text-yellow-500" />
            +50 XP
          </Badge>
          <Button variant="ghost" size="sm">
            Read <ChevronRight className="ml-1 h-4 w-4" />
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
          <Tabs defaultValue="foryou" className="w-full">
            <TabsList>
              <TabsTrigger value="foryou">For You</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="saved">Saved</TabsTrigger>
            </TabsList>

            <TabsContent value="foryou" className="mt-4 space-y-4">
              {filteredArticles.map((article) => (
                <Card 
                  key={article.id} 
                  className={`overflow-hidden transition-all hover:shadow-md cursor-pointer ${
                    readArticles.includes(article.id) ? "opacity-75" : ""
                  }`}
                  onClick={() => markAsRead(article.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="flex-1 space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          {article.isBreaking && (
                            <Badge variant="destructive" className="text-xs">Breaking</Badge>
                          )}
                          {article.isTrending && (
                            <Badge variant="secondary" className="text-xs">
                              <Flame className="mr-1 h-3 w-3 text-orange-500" />
                              Hot
                            </Badge>
                          )}
                          <Badge variant="outline" className="text-xs capitalize">
                            {article.category === "exams" && <GraduationCap className="mr-1 h-3 w-3" />}
                            {article.category === "visa" && <Plane className="mr-1 h-3 w-3" />}
                            {article.category === "industries" && <Cpu className="mr-1 h-3 w-3" />}
                            {article.category === "colleges" && <Building2 className="mr-1 h-3 w-3" />}
                            {article.category}
                          </Badge>
                          {!readArticles.includes(article.id) && (
                            <Badge variant="outline" className="text-xs gap-1 border-yellow-500/50 text-yellow-600">
                              <Zap className="h-3 w-3" />
                              +{article.xpReward} XP
                            </Badge>
                          )}
                          {readArticles.includes(article.id) && (
                            <Badge variant="outline" className="text-xs gap-1 border-green-500/50 text-green-600">
                              Read
                            </Badge>
                          )}
                        </div>
                        <h3 className="font-semibold text-foreground leading-tight hover:text-primary">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {article.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {article.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs font-normal">
                              #{tag.replace(/\s/g, "")}
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
                              onClick={(e) => {
                                e.stopPropagation()
                                toggleSave(article.id)
                              }}
                            >
                              {savedArticles.includes(article.id) ? (
                                <BookmarkCheck className="h-4 w-4 text-primary" />
                              ) : (
                                <Bookmark className="h-4 w-4" />
                              )}
                            </Button>
                            <Button variant="ghost" size="sm" onClick={(e) => e.stopPropagation()}>
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
                            <Flame className="mr-1 h-3 w-3 text-orange-500" />
                            Hot
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
                    <h3 className="mt-4 font-semibold text-foreground">No saved articles yet</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Tap the bookmark icon on any article to save it for later!
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
                Trending Now
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {trendingTopics.map((topic, index) => (
                <div key={topic.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-xs font-medium">
                      {index + 1}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {topic.name}
                      {topic.isHot && <Flame className="ml-1 inline h-3 w-3 text-orange-500" />}
                    </span>
                  </div>
                  <Badge variant="secondary" className="text-xs text-green-600">
                    {topic.trend}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upcoming Deadlines */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <Clock className="h-4 w-4 text-secondary" />
                Don&apos;t Miss These!
              </CardTitle>
              <CardDescription>Important deadlines coming up</CardDescription>
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
                      variant={deadline.urgency === "high" ? "destructive" : "secondary"}
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
                Just for You
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Based on your interests, here&apos;s what you should check out:
              </p>
              <div className="space-y-2">
                <div className="rounded-lg bg-background p-3">
                  <p className="text-sm text-foreground">
                    <strong>Semiconductor careers</strong> match your tech interests. Check out the trending news about 10L new jobs!
                  </p>
                </div>
                <div className="rounded-lg bg-background p-3">
                  <p className="text-sm text-foreground">
                    <strong>JEE pattern change</strong> affects your exam prep. Read the breaking news to adapt your strategy.
                  </p>
                </div>
              </div>
              <Button variant="secondary" size="sm" className="w-full">
                <Sparkles className="mr-2 h-4 w-4" />
                Get More Insights
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
