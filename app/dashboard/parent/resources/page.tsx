"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  FileText,
  Video,
  Download,
  ExternalLink,
  BookOpen,
  Calculator,
  Calendar,
  Clock,
  Star,
  CheckCircle2,
} from "lucide-react"

const guides = [
  {
    id: 1,
    title: "Complete Guide to JEE Preparation",
    description: "Everything parents need to know about JEE Main and Advanced preparation timeline",
    type: "PDF Guide",
    icon: FileText,
    duration: "45 min read",
    rating: 4.8,
    downloads: 2340,
    tags: ["Engineering", "JEE"],
  },
  {
    id: 2,
    title: "Understanding NEET: A Parent&apos;s Handbook",
    description: "Comprehensive guide covering syllabus, exam pattern, and preparation strategies",
    type: "PDF Guide",
    icon: FileText,
    duration: "50 min read",
    rating: 4.9,
    downloads: 1890,
    tags: ["Medical", "NEET"],
  },
  {
    id: 3,
    title: "College Selection Framework",
    description: "Step-by-step framework for evaluating and selecting the right college",
    type: "Interactive Tool",
    icon: Calculator,
    duration: "15 min",
    rating: 4.7,
    downloads: 3450,
    tags: ["College", "Planning"],
  },
  {
    id: 4,
    title: "Education Loan Planning Calculator",
    description: "Calculate EMIs, compare loan options, and plan your education budget",
    type: "Calculator",
    icon: Calculator,
    duration: "5 min",
    rating: 4.6,
    downloads: 5670,
    tags: ["Finance", "Loans"],
  },
]

const videos = [
  {
    id: 1,
    title: "How to Support Your Child During Board Exams",
    thumbnail: "/placeholder.svg",
    duration: "18:24",
    views: 12400,
    expert: "Dr. Meera Sharma",
  },
  {
    id: 2,
    title: "Career Counseling: Finding the Right Path",
    thumbnail: "/placeholder.svg",
    duration: "24:15",
    views: 8900,
    expert: "Rajiv Khanna",
  },
  {
    id: 3,
    title: "Understanding Stream Selection After Class 10",
    thumbnail: "/placeholder.svg",
    duration: "15:30",
    views: 15600,
    expert: "Anita Desai",
  },
  {
    id: 4,
    title: "Scholarship Opportunities Every Parent Should Know",
    thumbnail: "/placeholder.svg",
    duration: "22:45",
    views: 9800,
    expert: "Vikram Patel",
  },
]

const upcomingWebinars = [
  {
    id: 1,
    title: "JEE 2025: Last 6 Months Strategy",
    date: "Jan 15, 2025",
    time: "7:00 PM IST",
    speaker: "IIT Delhi Alumni Panel",
    registered: 456,
  },
  {
    id: 2,
    title: "NEET vs AIIMS: What Changed?",
    date: "Jan 18, 2025",
    time: "6:30 PM IST",
    speaker: "Dr. Priya Menon",
    registered: 324,
  },
  {
    id: 3,
    title: "Study Abroad: USA vs UK vs Canada",
    date: "Jan 22, 2025",
    time: "8:00 PM IST",
    speaker: "International Education Experts",
    registered: 567,
  },
]

const checklists = [
  {
    title: "Class 11 to 12 Transition Checklist",
    items: 12,
    completed: 8,
  },
  {
    title: "College Application Timeline",
    items: 15,
    completed: 3,
  },
  {
    title: "Financial Planning Checklist",
    items: 10,
    completed: 6,
  },
]

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Resources</h1>
        <p className="text-muted-foreground">
          Guides, tools, and expert content to help you navigate your child&apos;s career journey
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search resources..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <Tabs defaultValue="guides" className="space-y-6">
        <TabsList>
          <TabsTrigger value="guides">Guides & Tools</TabsTrigger>
          <TabsTrigger value="videos">Video Library</TabsTrigger>
          <TabsTrigger value="webinars">Webinars</TabsTrigger>
          <TabsTrigger value="checklists">Checklists</TabsTrigger>
        </TabsList>

        {/* Guides & Tools */}
        <TabsContent value="guides" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {guides.map((guide) => (
              <Card key={guide.id} className="transition-shadow hover:shadow-md">
                <CardContent className="p-5">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <guide.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div>
                        <h3 className="font-semibold text-foreground">{guide.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {guide.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {guide.type}
                        </Badge>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {guide.duration}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          {guide.rating}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {guide.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t pt-4">
                    <span className="text-xs text-muted-foreground">
                      {guide.downloads.toLocaleString()} downloads
                    </span>
                    <Button size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Video Library */}
        <TabsContent value="videos" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {videos.map((video) => (
              <Card key={video.id} className="overflow-hidden transition-shadow hover:shadow-md cursor-pointer">
                <div className="relative aspect-video bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/90">
                      <Video className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>
                  <Badge className="absolute bottom-2 right-2 bg-black/70 text-white">
                    {video.duration}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-sm line-clamp-2">{video.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{video.expert}</p>
                  <p className="text-xs text-muted-foreground">
                    {video.views.toLocaleString()} views
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Webinars */}
        <TabsContent value="webinars" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-4">
              <h2 className="font-semibold text-lg">Upcoming Webinars</h2>
              {upcomingWebinars.map((webinar) => (
                <Card key={webinar.id}>
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 flex-col items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-xs font-medium">{webinar.date.split(" ")[1]}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">{webinar.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {webinar.date} at {webinar.time}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Speaker: {webinar.speaker}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground mb-2">
                        {webinar.registered} registered
                      </p>
                      <Button size="sm">Register Free</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Past Webinars</CardTitle>
                <CardDescription>Watch recordings of previous sessions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="rounded-lg border p-3 cursor-pointer hover:bg-muted transition-colors">
                  <h4 className="text-sm font-medium">Board Exam Success Strategies</h4>
                  <p className="text-xs text-muted-foreground">Dec 2024 • 1.2k views</p>
                </div>
                <div className="rounded-lg border p-3 cursor-pointer hover:bg-muted transition-colors">
                  <h4 className="text-sm font-medium">Mental Health During Exams</h4>
                  <p className="text-xs text-muted-foreground">Dec 2024 • 980 views</p>
                </div>
                <div className="rounded-lg border p-3 cursor-pointer hover:bg-muted transition-colors">
                  <h4 className="text-sm font-medium">Choosing Between IITs and NITs</h4>
                  <p className="text-xs text-muted-foreground">Nov 2024 • 2.1k views</p>
                </div>
                <Button variant="outline" className="w-full gap-2">
                  <ExternalLink className="h-4 w-4" />
                  View All Recordings
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Checklists */}
        <TabsContent value="checklists" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            {checklists.map((checklist) => (
              <Card key={checklist.title}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{checklist.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">
                        {checklist.completed}/{checklist.items} completed
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-secondary transition-all"
                        style={{ width: `${(checklist.completed / checklist.items) * 100}%` }}
                      />
                    </div>
                    <Button variant="outline" className="w-full gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      Continue
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-dashed">
            <CardContent className="flex flex-col items-center justify-center py-8">
              <BookOpen className="h-10 w-10 text-muted-foreground/50" />
              <h3 className="mt-3 font-semibold">Create Custom Checklist</h3>
              <p className="text-sm text-muted-foreground text-center max-w-sm">
                Build your own checklist tailored to your child&apos;s specific goals and timeline
              </p>
              <Button className="mt-4">Create Checklist</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
