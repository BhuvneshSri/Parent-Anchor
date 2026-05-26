"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sparkles,
  Send,
  Lightbulb,
  BookOpen,
  Target,
  MessageCircle,
  ThumbsUp,
  ThumbsDown,
  Copy,
  RefreshCw,
} from "lucide-react"

const suggestedQuestions = [
  "What career is best for someone who loves math and technology?",
  "How do I prepare for JEE while managing school?",
  "What skills do I need to become a data scientist?",
  "Should I choose Science or Commerce after Class 10?",
  "What are the career options after B.Tech?",
  "How important are extra-curricular activities for college admissions?",
]

const initialMessages = [
  {
    id: 1,
    role: "assistant",
    content: "Hi Rahul! I&apos;m your AI Career Mentor. I&apos;m here to help you explore careers, plan your education, and answer any questions about your future. What would you like to talk about today?",
    timestamp: new Date(),
  },
]

export default function MentorPage() {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = {
      id: messages.length + 1,
      role: "user" as const,
      content: input,
      timestamp: new Date(),
    }

    setMessages([...messages, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const responses: Record<string, string> = {
        "career": "Based on your interests in technology and problem-solving, careers like Software Engineer, Data Scientist, or Product Manager would be great fits! Software Engineering has a 92% match with your profile. Would you like me to create a detailed roadmap for any of these careers?",
        "jee": "Balancing JEE prep with school requires a strategic approach:\n\n1. **Daily Schedule**: Dedicate 4-5 hours to JEE topics after school\n2. **Weekend Deep Dives**: Focus on difficult concepts on weekends\n3. **School Synergy**: Many Class 11-12 topics overlap with JEE syllabus\n4. **Mock Tests**: Take weekly tests to track progress\n\nWould you like me to create a personalized study schedule?",
        "data": "To become a Data Scientist, you&apos;ll need:\n\n**Technical Skills:**\n- Python programming (essential)\n- Statistics and probability\n- Machine Learning basics\n- SQL for databases\n\n**Soft Skills:**\n- Problem-solving mindset\n- Communication skills\n- Curiosity to explore data\n\nStart with Python basics - I can recommend some free courses!",
        default: "That&apos;s a great question! Based on your profile and interests, I&apos;d suggest exploring careers that combine your strengths in logical thinking and creativity. Would you like me to provide more specific guidance on this topic?",
      }

      let responseText = responses.default
      const lowerInput = input.toLowerCase()
      if (lowerInput.includes("career") || lowerInput.includes("job")) {
        responseText = responses.career
      } else if (lowerInput.includes("jee") || lowerInput.includes("prepare")) {
        responseText = responses.jee
      } else if (lowerInput.includes("data") || lowerInput.includes("skill")) {
        responseText = responses.data
      }

      const aiMessage = {
        id: messages.length + 2,
        role: "assistant" as const,
        content: responseText,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)
    }, 1500)
  }

  const handleQuestionClick = (question: string) => {
    setInput(question)
  }

  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col gap-6 lg:flex-row">
      {/* Chat Section */}
      <div className="flex flex-1 flex-col">
        <Card className="flex flex-1 flex-col">
          <CardHeader className="border-b pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                <Sparkles className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div>
                <CardTitle className="text-lg">AI Career Mentor</CardTitle>
                <CardDescription>Your personal guide to career success</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col p-0">
            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {message.role === "assistant" && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-secondary text-secondary-foreground">
                          <Sparkles className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.content}</p>
                      {message.role === "assistant" && (
                        <div className="mt-2 flex items-center gap-2 border-t pt-2">
                          <Button variant="ghost" size="sm" className="h-7 px-2">
                            <ThumbsUp className="h-3 w-3" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-7 px-2">
                            <ThumbsDown className="h-3 w-3" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-7 px-2">
                            <Copy className="h-3 w-3" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-7 px-2">
                            <RefreshCw className="h-3 w-3" />
                          </Button>
                        </div>
                      )}
                    </div>
                    {message.role === "user" && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          RS
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-secondary text-secondary-foreground">
                        <Sparkles className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg bg-muted p-3">
                      <div className="flex gap-1">
                        <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground" />
                        <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground delay-100" />
                        <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground delay-200" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="border-t p-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Ask me anything about careers..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  className="flex-1"
                />
                <Button onClick={handleSend} disabled={!input.trim() || isLoading}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sidebar */}
      <div className="w-full space-y-4 lg:w-80">
        {/* Suggested Questions */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Lightbulb className="h-4 w-4 text-yellow-500" />
              Suggested Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {suggestedQuestions.slice(0, 4).map((question, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-auto w-full justify-start whitespace-normal p-3 text-left text-sm"
                onClick={() => handleQuestionClick(question)}
              >
                <MessageCircle className="mr-2 h-4 w-4 shrink-0" />
                {question}
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start gap-2">
              <Target className="h-4 w-4" />
              Create Career Roadmap
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <BookOpen className="h-4 w-4" />
              Get Study Plan
            </Button>
          </CardContent>
        </Card>

        {/* Topics */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Popular Topics</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="cursor-pointer">
              JEE Preparation
            </Badge>
            <Badge variant="secondary" className="cursor-pointer">
              Career Options
            </Badge>
            <Badge variant="secondary" className="cursor-pointer">
              College Selection
            </Badge>
            <Badge variant="secondary" className="cursor-pointer">
              Study Abroad
            </Badge>
            <Badge variant="secondary" className="cursor-pointer">
              Skill Building
            </Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
