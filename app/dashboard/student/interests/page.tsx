"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Heart,
  Plus,
  X,
  Lightbulb,
  Code,
  Palette,
  Microscope,
  Music,
  BookOpen,
  Camera,
  Gamepad2,
  Globe,
  Dumbbell,
  ChefHat,
  PenTool,
  Rocket,
  Trees,
  Building2,
} from "lucide-react"

const allInterests = [
  { name: "Technology", icon: Code, color: "bg-blue-100 text-blue-700" },
  { name: "Art & Design", icon: Palette, color: "bg-pink-100 text-pink-700" },
  { name: "Science", icon: Microscope, color: "bg-green-100 text-green-700" },
  { name: "Music", icon: Music, color: "bg-purple-100 text-purple-700" },
  { name: "Reading", icon: BookOpen, color: "bg-amber-100 text-amber-700" },
  { name: "Photography", icon: Camera, color: "bg-cyan-100 text-cyan-700" },
  { name: "Gaming", icon: Gamepad2, color: "bg-red-100 text-red-700" },
  { name: "Travel", icon: Globe, color: "bg-teal-100 text-teal-700" },
  { name: "Sports", icon: Dumbbell, color: "bg-orange-100 text-orange-700" },
  { name: "Cooking", icon: ChefHat, color: "bg-rose-100 text-rose-700" },
  { name: "Writing", icon: PenTool, color: "bg-indigo-100 text-indigo-700" },
  { name: "Space", icon: Rocket, color: "bg-violet-100 text-violet-700" },
  { name: "Nature", icon: Trees, color: "bg-emerald-100 text-emerald-700" },
  { name: "Business", icon: Building2, color: "bg-slate-100 text-slate-700" },
]

const interestBasedCareers = {
  Technology: ["Software Engineer", "Data Scientist", "Cybersecurity Analyst"],
  "Art & Design": ["UX Designer", "Graphic Designer", "Animator"],
  Science: ["Research Scientist", "Biotechnologist", "Physicist"],
  Music: ["Music Producer", "Sound Engineer", "Music Therapist"],
  Writing: ["Content Writer", "Journalist", "Screenwriter"],
  Business: ["Entrepreneur", "Management Consultant", "Investment Banker"],
}

export default function InterestsPage() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    "Technology",
    "Science",
    "Gaming",
  ])

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest))
    } else if (selectedInterests.length < 5) {
      setSelectedInterests([...selectedInterests, interest])
    }
  }

  const getMatchedCareers = () => {
    const careers: string[] = []
    selectedInterests.forEach((interest) => {
      const matched = interestBasedCareers[interest as keyof typeof interestBasedCareers]
      if (matched) {
        careers.push(...matched)
      }
    })
    return [...new Set(careers)].slice(0, 6)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">My Interests</h1>
        <p className="text-muted-foreground">
          Select up to 5 interests to get personalized career recommendations
        </p>
      </div>

      {/* Selected Interests */}
      <Card className="border-secondary">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-base">
              <Heart className="h-4 w-4 text-secondary" />
              Your Interests
            </CardTitle>
            <Badge variant="outline">{selectedInterests.length}/5 selected</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {selectedInterests.length > 0 ? (
              selectedInterests.map((interest) => {
                const interestData = allInterests.find((i) => i.name === interest)
                return (
                  <Badge
                    key={interest}
                    variant="secondary"
                    className="gap-2 py-2 px-3 text-sm cursor-pointer hover:bg-secondary/80"
                    onClick={() => toggleInterest(interest)}
                  >
                    {interestData && <interestData.icon className="h-4 w-4" />}
                    {interest}
                    <X className="h-3 w-3" />
                  </Badge>
                )
              })
            ) : (
              <p className="text-sm text-muted-foreground">
                Click on interests below to add them here
              </p>
            )}
          </div>
          <Progress
            value={(selectedInterests.length / 5) * 100}
            className="mt-4 h-2"
          />
        </CardContent>
      </Card>

      {/* All Interests Grid */}
      <div>
        <h2 className="font-semibold mb-4">Explore Interests</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {allInterests.map((interest) => {
            const isSelected = selectedInterests.includes(interest.name)
            const isDisabled = !isSelected && selectedInterests.length >= 5
            return (
              <Card
                key={interest.name}
                className={`cursor-pointer transition-all ${
                  isSelected
                    ? "border-secondary bg-secondary/5"
                    : isDisabled
                    ? "opacity-50"
                    : "hover:border-secondary/50"
                }`}
                onClick={() => !isDisabled && toggleInterest(interest.name)}
              >
                <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${interest.color}`}
                  >
                    <interest.icon className="h-6 w-6" />
                  </div>
                  <span className="mt-2 text-sm font-medium">{interest.name}</span>
                  {isSelected && (
                    <Badge className="mt-2 bg-secondary text-secondary-foreground text-xs">
                      Selected
                    </Badge>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Career Recommendations Based on Interests */}
      {selectedInterests.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Lightbulb className="h-4 w-4 text-yellow-500" />
              Careers Based on Your Interests
            </CardTitle>
            <CardDescription>
              These careers align with your selected interests
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {getMatchedCareers().map((career) => (
                <div
                  key={career}
                  className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-muted cursor-pointer"
                >
                  <span className="font-medium">{career}</span>
                  <Button variant="ghost" size="sm">
                    Explore
                  </Button>
                </div>
              ))}
            </div>
            {getMatchedCareers().length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-4">
                Select interests to see matching careers
              </p>
            )}
          </CardContent>
        </Card>
      )}

      {/* Add Custom Interest */}
      <Card className="border-dashed">
        <CardContent className="flex items-center justify-center py-6">
          <Button variant="outline" className="gap-2">
            <Plus className="h-4 w-4" />
            Add Custom Interest
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
