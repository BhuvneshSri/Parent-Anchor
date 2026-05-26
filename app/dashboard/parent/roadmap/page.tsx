"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  Route,
  Sparkles,
  Send,
  TrendingUp,
  GraduationCap,
  Briefcase,
  Calendar,
  Target,
  CheckCircle2,
  Circle,
  ArrowRight,
  Bot,
  User,
  IndianRupee,
  MapPin,
  Clock,
} from "lucide-react"

const careerPaths = [
  {
    id: 1,
    title: "Software Engineer",
    match: 92,
    growth: "+42%",
    salary: "₹12.5 LPA",
    viability: "Excellent",
    description:
      "Build and maintain software applications. Strong demand in India with excellent growth prospects.",
    skills: ["Problem Solving", "Coding", "Logic"],
    colleges: ["IIT Bombay", "BITS Pilani", "IIIT Hyderabad"],
  },
  {
    id: 2,
    title: "Data Scientist",
    match: 88,
    growth: "+38%",
    salary: "₹15.0 LPA",
    viability: "Excellent",
    description:
      "Analyze complex data to help companies make decisions. Combines math, coding, and business.",
    skills: ["Statistics", "Python", "Analysis"],
    colleges: ["ISI Kolkata", "IIT Delhi", "IIIT Bangalore"],
  },
  {
    id: 3,
    title: "UX Designer",
    match: 85,
    growth: "+31%",
    salary: "₹10.5 LPA",
    viability: "Good",
    description:
      "Design user-friendly digital experiences. Blend of creativity and user research.",
    skills: ["Design Thinking", "Empathy", "Creativity"],
    colleges: ["NID Ahmedabad", "IDC IIT Bombay", "Srishti"],
  },
  {
    id: 4,
    title: "Product Manager",
    match: 82,
    growth: "+35%",
    salary: "₹18.0 LPA",
    viability: "Good",
    description:
      "Lead product development and strategy. Requires technical understanding and leadership.",
    skills: ["Leadership", "Strategy", "Communication"],
    colleges: ["IIM Ahmedabad", "ISB Hyderabad", "XLRI"],
  },
]

const roadmapSteps = [
  {
    phase: "Phase 1: Foundation",
    period: "Now - Dec 2026",
    status: "in-progress",
    steps: [
      { task: "Focus on Class 11 PCM subjects", done: true },
      { task: "Start JEE preparation with coaching", done: true },
      { task: "Learn basics of programming (Python)", done: false },
      { task: "Participate in math olympiads", done: false },
    ],
  },
  {
    phase: "Phase 2: Preparation",
    period: "Jan - Apr 2027",
    status: "upcoming",
    steps: [
      { task: "Intensive JEE Mains preparation", done: false },
      { task: "Take mock tests regularly", done: false },
      { task: "JEE Advanced preparation", done: false },
      { task: "Build small coding projects", done: false },
    ],
  },
  {
    phase: "Phase 3: Admission",
    period: "May - Aug 2027",
    status: "upcoming",
    steps: [
      { task: "JoSAA counseling and seat allocation", done: false },
      { task: "Complete admission formalities", done: false },
      { task: "Prepare for college life", done: false },
    ],
  },
  {
    phase: "Phase 4: B.Tech Journey",
    period: "2027 - 2031",
    status: "upcoming",
    steps: [
      { task: "Complete B.Tech in Computer Science", done: false },
      { task: "Internships in summers", done: false },
      { task: "Build portfolio projects", done: false },
      { task: "Campus placements", done: false },
    ],
  },
]

const chatMessages = [
  {
    role: "assistant",
    content:
      "Hi! I'm your AI career counselor. Based on Rahul's interests in technology and mathematics, along with your budget of ₹15-20 lakhs, I've created a personalized roadmap. Would you like me to explain any specific part?",
  },
  {
    role: "user",
    content: "What if Rahul doesn't clear JEE? What are the backup options?",
  },
  {
    role: "assistant",
    content:
      "Great question! Here are solid backup options within your budget:\n\n1. **BITS Pilani** - Via BITSAT (easier than JEE Advanced)\n2. **VIT/SRM** - Through VITEEE/SRMJEE\n3. **NITs** - Via JEE Mains score\n4. **IIIT Hyderabad** - Via UGEE\n\nAll these offer excellent CS programs with good placements. The ROI remains strong even at private colleges like BITS or VIT.",
  },
]

export default function RoadmapPage() {
  const [selectedCareer, setSelectedCareer] = useState(careerPaths[0])
  const [chatInput, setChatInput] = useState("")
  const [messages, setMessages] = useState(chatMessages)

  const handleSendMessage = () => {
    if (chatInput.trim()) {
      setMessages([...messages, { role: "user", content: chatInput }])
      setChatInput("")
      // Simulate AI response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "That's a thoughtful question! Based on Rahul's profile and market trends, I'd recommend focusing on building a strong foundation in programming alongside JEE preparation. This dual approach ensures options in both traditional engineering and tech startup paths.",
          },
        ])
      }, 1000)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Career Roadmap</h1>
        <p className="text-muted-foreground">
          AI-generated personalized career guidance for Rahul
        </p>
      </div>

      <Tabs defaultValue="roadmap" className="space-y-6">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
          <TabsTrigger value="careers">Career Paths</TabsTrigger>
          <TabsTrigger value="chat">AI Chat</TabsTrigger>
        </TabsList>

        {/* Roadmap Tab */}
        <TabsContent value="roadmap" className="space-y-6">
          {/* Progress Overview */}
          <Card className="border-border">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Journey Progress
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Target: Software Engineer at Top Tech Company
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-secondary">25%</p>
                    <p className="text-xs text-muted-foreground">Complete</p>
                  </div>
                  <Progress value={25} className="h-3 w-32" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <div className="space-y-4">
            {roadmapSteps.map((phase, phaseIndex) => (
              <Card
                key={phaseIndex}
                className={`border-border ${
                  phase.status === "in-progress" ? "border-l-4 border-l-secondary" : ""
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          phase.status === "in-progress"
                            ? "bg-secondary text-secondary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {phaseIndex + 1}
                      </div>
                      <div>
                        <CardTitle className="text-lg text-foreground">
                          {phase.phase}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {phase.period}
                        </CardDescription>
                      </div>
                    </div>
                    {phase.status === "in-progress" && (
                      <Badge className="bg-secondary text-secondary-foreground">
                        In Progress
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {phase.steps.map((step, stepIndex) => (
                      <div
                        key={stepIndex}
                        className="flex items-center gap-3 rounded-lg bg-muted/50 p-3"
                      >
                        {step.done ? (
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                        ) : (
                          <Circle className="h-5 w-5 text-muted-foreground" />
                        )}
                        <span
                          className={`text-sm ${
                            step.done
                              ? "text-muted-foreground line-through"
                              : "text-foreground"
                          }`}
                        >
                          {step.task}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Career Paths Tab */}
        <TabsContent value="careers" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Career List */}
            <div className="space-y-4 lg:col-span-1">
              <h3 className="font-semibold text-foreground">
                Matched Career Paths
              </h3>
              {careerPaths.map((career) => (
                <button
                  key={career.id}
                  onClick={() => setSelectedCareer(career)}
                  className={`w-full rounded-lg border-2 p-4 text-left transition-all ${
                    selectedCareer.id === career.id
                      ? "border-secondary bg-secondary/5"
                      : "border-border bg-card hover:border-secondary/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">
                      {career.title}
                    </span>
                    <span className="text-lg font-bold text-secondary">
                      {career.match}%
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <TrendingUp className="h-3 w-3 text-green-600" />
                    {career.growth}
                    <span className="mx-1">•</span>
                    {career.salary}
                  </div>
                </button>
              ))}
            </div>

            {/* Career Details */}
            <Card className="border-border lg:col-span-2">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-foreground">
                      {selectedCareer.title}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {selectedCareer.description}
                    </CardDescription>
                  </div>
                  <Badge
                    className={
                      selectedCareer.viability === "Excellent"
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-primary/10 text-primary"
                    }
                  >
                    {selectedCareer.viability} Viability
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-lg bg-muted/50 p-4 text-center">
                    <Target className="mx-auto h-5 w-5 text-secondary" />
                    <p className="mt-2 text-2xl font-bold text-foreground">
                      {selectedCareer.match}%
                    </p>
                    <p className="text-xs text-muted-foreground">Match Score</p>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-4 text-center">
                    <TrendingUp className="mx-auto h-5 w-5 text-green-600" />
                    <p className="mt-2 text-2xl font-bold text-foreground">
                      {selectedCareer.growth}
                    </p>
                    <p className="text-xs text-muted-foreground">Market Growth</p>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-4 text-center">
                    <IndianRupee className="mx-auto h-5 w-5 text-primary" />
                    <p className="mt-2 text-2xl font-bold text-foreground">
                      {selectedCareer.salary}
                    </p>
                    <p className="text-xs text-muted-foreground">Avg Starting</p>
                  </div>
                </div>

                {/* Skills Required */}
                <div>
                  <h4 className="mb-3 font-semibold text-foreground">
                    Key Skills Required
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCareer.skills.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Recommended Colleges */}
                <div>
                  <h4 className="mb-3 font-semibold text-foreground">
                    Recommended Colleges
                  </h4>
                  <div className="space-y-2">
                    {selectedCareer.colleges.map((college, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 rounded-lg border border-border p-3"
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                          {index + 1}
                        </span>
                        <span className="text-foreground">{college}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full">
                  Explore This Career Path
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* AI Chat Tab */}
        <TabsContent value="chat">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Bot className="h-5 w-5 text-secondary" />
                AI Career Counselor
              </CardTitle>
              <CardDescription>
                Ask questions about career paths, colleges, or the roadmap
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Chat Messages */}
              <div className="mb-4 max-h-[400px] space-y-4 overflow-y-auto rounded-lg border border-border bg-muted/30 p-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 ${
                      message.role === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        message.role === "assistant"
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      {message.role === "assistant" ? (
                        <Bot className="h-4 w-4" />
                      ) : (
                        <User className="h-4 w-4" />
                      )}
                    </div>
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.role === "assistant"
                          ? "bg-card border border-border"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      <p className="whitespace-pre-wrap text-sm">
                        {message.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <Textarea
                  placeholder="Ask about career options, college selection, or timeline..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="min-h-[60px] resize-none"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSendMessage()
                    }
                  }}
                />
                <Button
                  onClick={handleSendMessage}
                  className="shrink-0"
                  disabled={!chatInput.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>

              {/* Suggested Questions */}
              <div className="mt-4">
                <p className="mb-2 text-xs text-muted-foreground">
                  Suggested questions:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "What scholarships are available?",
                    "How to prepare for JEE?",
                    "Compare IIT vs BITS",
                  ].map((question) => (
                    <Button
                      key={question}
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={() => setChatInput(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
