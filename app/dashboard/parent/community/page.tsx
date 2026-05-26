"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MessageCircle,
  ThumbsUp,
  Search,
  Filter,
  Users,
  TrendingUp,
  Clock,
  CheckCircle2,
} from "lucide-react"

const discussions = [
  {
    id: 1,
    title: "How to balance board exam preparation with JEE coaching?",
    author: "Priya M.",
    authorInitials: "PM",
    category: "Exam Prep",
    replies: 24,
    likes: 56,
    timeAgo: "2 hours ago",
    isAnswered: true,
    preview: "My son is in Class 11 and struggling to manage both. Any tips from parents who have been through this?",
  },
  {
    id: 2,
    title: "IIT vs BITS Pilani - Which is better for Computer Science?",
    author: "Rajesh K.",
    authorInitials: "RK",
    category: "College Selection",
    replies: 45,
    likes: 89,
    timeAgo: "5 hours ago",
    isAnswered: true,
    preview: "Looking for insights from parents whose children have attended either institution.",
  },
  {
    id: 3,
    title: "Budget planning for engineering education - hidden costs to consider",
    author: "Sunita G.",
    authorInitials: "SG",
    category: "Finance",
    replies: 18,
    likes: 42,
    timeAgo: "1 day ago",
    isAnswered: false,
    preview: "Beyond tuition, what are the costs we often overlook? Sharing my experience...",
  },
  {
    id: 4,
    title: "My daughter wants to pursue fine arts - career prospects?",
    author: "Amit S.",
    authorInitials: "AS",
    category: "Career Guidance",
    replies: 31,
    likes: 67,
    timeAgo: "2 days ago",
    isAnswered: true,
    preview: "She is passionate about art but I am worried about job stability. Need guidance.",
  },
  {
    id: 5,
    title: "Study abroad vs studying in India - pros and cons",
    author: "Meera R.",
    authorInitials: "MR",
    category: "Study Abroad",
    replies: 52,
    likes: 124,
    timeAgo: "3 days ago",
    isAnswered: true,
    preview: "Compiling a comprehensive list based on our research. Please add your inputs!",
  },
]

const parentGroups = [
  {
    name: "IIT/NIT Aspirants Parents",
    members: 2340,
    posts: 156,
    isJoined: true,
  },
  {
    name: "Medical Entrance Parents",
    members: 1890,
    posts: 89,
    isJoined: false,
  },
  {
    name: "Study Abroad Community",
    members: 1245,
    posts: 67,
    isJoined: true,
  },
  {
    name: "Arts & Design Parents",
    members: 876,
    posts: 45,
    isJoined: false,
  },
]

const trendingTopics = [
  { name: "JEE Main 2025", count: 234 },
  { name: "NEET Preparation", count: 189 },
  { name: "College Rankings", count: 156 },
  { name: "Scholarship Tips", count: 98 },
]

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Parent Community</h1>
        <p className="text-muted-foreground">
          Connect with other parents, share experiences, and get advice
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search discussions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
        <Button className="gap-2 bg-primary text-primary-foreground">
          <MessageCircle className="h-4 w-4" />
          New Discussion
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="discussions" className="space-y-4">
            <TabsList>
              <TabsTrigger value="discussions">Discussions</TabsTrigger>
              <TabsTrigger value="groups">My Groups</TabsTrigger>
              <TabsTrigger value="saved">Saved</TabsTrigger>
            </TabsList>

            <TabsContent value="discussions" className="space-y-4">
              {discussions.map((discussion) => (
                <Card key={discussion.id} className="transition-shadow hover:shadow-md">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-secondary text-secondary-foreground">
                          {discussion.authorInitials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-semibold text-foreground hover:text-primary cursor-pointer">
                              {discussion.title}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span>{discussion.author}</span>
                              <span>•</span>
                              <Clock className="h-3 w-3" />
                              <span>{discussion.timeAgo}</span>
                            </div>
                          </div>
                          {discussion.isAnswered && (
                            <Badge variant="secondary" className="gap-1 bg-green-100 text-green-700">
                              <CheckCircle2 className="h-3 w-3" />
                              Answered
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {discussion.preview}
                        </p>
                        <div className="flex items-center gap-4">
                          <Badge variant="outline">{discussion.category}</Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MessageCircle className="h-4 w-4" />
                            {discussion.replies}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <ThumbsUp className="h-4 w-4" />
                            {discussion.likes}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="groups" className="space-y-4">
              {parentGroups.map((group) => (
                <Card key={group.name}>
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                        <Users className="h-6 w-6 text-secondary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{group.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {group.members.toLocaleString()} members • {group.posts} posts this week
                        </p>
                      </div>
                    </div>
                    <Button variant={group.isJoined ? "outline" : "default"}>
                      {group.isJoined ? "Joined" : "Join"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="saved">
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <MessageCircle className="h-12 w-12 text-muted-foreground/50" />
                  <h3 className="mt-4 font-semibold">No saved discussions</h3>
                  <p className="text-sm text-muted-foreground">
                    Save discussions to read them later
                  </p>
                </CardContent>
              </Card>
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
                <div
                  key={topic.name}
                  className="flex items-center justify-between rounded-lg p-2 transition-colors hover:bg-muted cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-muted-foreground">
                      {index + 1}
                    </span>
                    <span className="text-sm font-medium">{topic.name}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {topic.count}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Community Stats */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Community Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Active Parents</span>
                <span className="font-semibold">12,456</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Discussions Today</span>
                <span className="font-semibold">89</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Questions Answered</span>
                <span className="font-semibold">94%</span>
              </div>
            </CardContent>
          </Card>

          {/* Expert Corner */}
          <Card className="border-secondary">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Expert Corner</CardTitle>
              <CardDescription>Get advice from career counselors</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Ask an Expert
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
