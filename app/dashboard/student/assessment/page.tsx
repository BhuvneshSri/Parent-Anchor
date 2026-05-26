"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  Target,
  Brain,
  Clock,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Trophy,
  RotateCcw,
} from "lucide-react"

const assessments = [
  {
    id: "aptitude",
    title: "Aptitude Assessment",
    description: "Test your logical reasoning and problem-solving abilities",
    duration: "30 mins",
    questions: 25,
    completed: true,
    score: 82,
    icon: Brain,
  },
  {
    id: "personality",
    title: "Personality Assessment",
    description: "Understand your personality type and work preferences",
    duration: "20 mins",
    questions: 40,
    completed: true,
    score: null,
    result: "INTJ - The Architect",
    icon: Target,
  },
  {
    id: "interest",
    title: "Interest Inventory",
    description: "Discover your career interests and passions",
    duration: "15 mins",
    questions: 30,
    completed: false,
    icon: Sparkles,
  },
  {
    id: "skills",
    title: "Skills Assessment",
    description: "Evaluate your current skill levels across domains",
    duration: "25 mins",
    questions: 35,
    completed: false,
    icon: Trophy,
  },
]

const sampleQuestions = [
  {
    id: 1,
    question: "You have a project due in a week. How do you approach it?",
    options: [
      { value: "a", label: "Plan everything out and start early" },
      { value: "b", label: "Wait until inspiration strikes" },
      { value: "c", label: "Do a bit each day" },
      { value: "d", label: "Work best under pressure, do it last minute" },
    ],
  },
  {
    id: 2,
    question: "In a group project, you prefer to:",
    options: [
      { value: "a", label: "Lead the team and coordinate tasks" },
      { value: "b", label: "Come up with creative ideas" },
      { value: "c", label: "Do the research and analysis" },
      { value: "d", label: "Help wherever needed" },
    ],
  },
  {
    id: 3,
    question: "Which activity sounds most appealing to you?",
    options: [
      { value: "a", label: "Building or coding something" },
      { value: "b", label: "Designing or creating art" },
      { value: "c", label: "Analyzing data and finding patterns" },
      { value: "d", label: "Helping or teaching others" },
    ],
  },
]

export default function AssessmentPage() {
  const [isAssessing, setIsAssessing] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})

  const handleStartAssessment = () => {
    setIsAssessing(true)
    setCurrentQuestion(0)
    setAnswers({})
  }

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value })
  }

  const handleNext = () => {
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setIsAssessing(false)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  if (isAssessing) {
    const question = sampleQuestions[currentQuestion]
    const progress = ((currentQuestion + 1) / sampleQuestions.length) * 100

    return (
      <div className="mx-auto max-w-2xl space-y-6">
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={() => setIsAssessing(false)}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Exit Assessment
          </Button>
          <Badge variant="outline">
            Question {currentQuestion + 1} of {sampleQuestions.length}
          </Badge>
        </div>

        <Progress value={progress} className="h-2" />

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-6">{question.question}</h2>
            <RadioGroup
              value={answers[currentQuestion]}
              onValueChange={handleAnswer}
              className="space-y-3"
            >
              {question.options.map((option) => (
                <div key={option.value} className="flex items-center space-x-3">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label
                    htmlFor={option.value}
                    className="flex-1 cursor-pointer rounded-lg border p-4 hover:bg-muted transition-colors"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="mt-8 flex justify-between">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={!answers[currentQuestion]}
              >
                {currentQuestion === sampleQuestions.length - 1 ? "Finish" : "Next"}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Skill Assessment</h1>
        <p className="text-muted-foreground">
          Take assessments to discover your strengths and ideal career paths
        </p>
      </div>

      {/* Progress Overview */}
      <Card className="border-secondary">
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-semibold">Your Assessment Progress</h3>
              <p className="text-sm text-muted-foreground">
                Complete all assessments for the best career recommendations
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-2xl font-bold text-secondary">2/4</p>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
              <Progress value={50} className="h-3 w-32" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Assessment Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        {assessments.map((assessment) => (
          <Card
            key={assessment.id}
            className={`transition-all ${
              assessment.completed ? "bg-muted/30" : "hover:shadow-md"
            }`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <assessment.icon className="h-5 w-5 text-primary" />
                </div>
                {assessment.completed && (
                  <Badge className="gap-1 bg-green-100 text-green-700">
                    <CheckCircle2 className="h-3 w-3" />
                    Completed
                  </Badge>
                )}
              </div>
              <CardTitle className="text-lg">{assessment.title}</CardTitle>
              <CardDescription>{assessment.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {assessment.duration}
                </div>
                <div>{assessment.questions} questions</div>
              </div>

              {assessment.completed && (
                <div className="mt-4 rounded-lg bg-muted p-3">
                  {assessment.score !== null ? (
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Your Score</span>
                      <span className="text-lg font-bold text-primary">{assessment.score}%</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Result</span>
                      <span className="text-sm font-medium text-primary">{assessment.result}</span>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-4 flex gap-2">
                {assessment.completed ? (
                  <>
                    <Button variant="outline" className="flex-1 gap-2">
                      View Results
                    </Button>
                    <Button variant="ghost" size="icon">
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  </>
                ) : (
                  <Button className="w-full" onClick={handleStartAssessment}>
                    Start Assessment
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tips Card */}
      <Card className="border-dashed">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-2">Tips for Taking Assessments</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5" />
              <span>Find a quiet place without distractions</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5" />
              <span>Answer honestly - there are no right or wrong answers</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5" />
              <span>Don&apos;t overthink - go with your first instinct</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5" />
              <span>Complete all assessments for the most accurate results</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
