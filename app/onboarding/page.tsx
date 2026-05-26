"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Anchor, 
  ArrowLeft, 
  ArrowRight, 
  Check,
  Sparkles,
  Brain,
  Heart,
  Music,
  Palette,
  Code,
  Calculator,
  Users,
  Microscope,
  BookOpen,
  Gamepad2,
  Camera,
  Building2,
  MapPin
} from "lucide-react"

const interests = [
  { id: "technology", label: "Technology & Coding", icon: Code },
  { id: "science", label: "Science & Research", icon: Microscope },
  { id: "arts", label: "Arts & Design", icon: Palette },
  { id: "music", label: "Music & Performance", icon: Music },
  { id: "business", label: "Business & Finance", icon: Building2 },
  { id: "social", label: "Social Work & Teaching", icon: Users },
  { id: "writing", label: "Writing & Journalism", icon: BookOpen },
  { id: "gaming", label: "Gaming & Esports", icon: Gamepad2 },
  { id: "photography", label: "Photography & Film", icon: Camera },
  { id: "math", label: "Mathematics", icon: Calculator },
]

const skills = [
  { id: "analytical", label: "Analytical Thinking" },
  { id: "creative", label: "Creative Problem Solving" },
  { id: "communication", label: "Communication" },
  { id: "leadership", label: "Leadership" },
  { id: "technical", label: "Technical Skills" },
  { id: "teamwork", label: "Teamwork" },
  { id: "attention", label: "Attention to Detail" },
  { id: "adaptability", label: "Adaptability" },
]

const cities = [
  "Mumbai", "Delhi NCR", "Bangalore", "Chennai", "Hyderabad", 
  "Pune", "Kolkata", "Ahmedabad", "Abroad", "No Preference"
]

export default function OnboardingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    studentName: "",
    studentClass: "",
    selectedInterests: [] as string[],
    selectedSkills: [] as string[],
    budget: [15],
    locationPreferences: [] as string[],
    studyAbroad: "maybe",
  })

  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const handleInterestToggle = (interestId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedInterests: prev.selectedInterests.includes(interestId)
        ? prev.selectedInterests.filter((id) => id !== interestId)
        : [...prev.selectedInterests, interestId],
    }))
  }

  const handleSkillToggle = (skillId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedSkills: prev.selectedSkills.includes(skillId)
        ? prev.selectedSkills.filter((id) => id !== skillId)
        : [...prev.selectedSkills, skillId],
    }))
  }

  const handleLocationToggle = (city: string) => {
    setFormData((prev) => ({
      ...prev,
      locationPreferences: prev.locationPreferences.includes(city)
        ? prev.locationPreferences.filter((c) => c !== city)
        : [...prev.locationPreferences, city],
    }))
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1)
    } else {
      router.push("/dashboard/parent")
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const getBudgetLabel = (value: number) => {
    if (value <= 5) return "Up to ₹5 Lakhs"
    if (value <= 10) return "₹5-10 Lakhs"
    if (value <= 20) return "₹10-20 Lakhs"
    if (value <= 30) return "₹20-30 Lakhs"
    if (value <= 50) return "₹30-50 Lakhs"
    return "₹50+ Lakhs"
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Anchor className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">ParentAnchor</span>
          </Link>
          <div className="text-sm text-muted-foreground">
            Step {currentStep} of {totalSteps}
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-3xl px-4 py-3">
          <Progress value={progress} className="h-2" />
          <div className="mt-2 flex justify-between text-xs text-muted-foreground">
            <span className={currentStep >= 1 ? "text-secondary font-medium" : ""}>Student Info</span>
            <span className={currentStep >= 2 ? "text-secondary font-medium" : ""}>Interests</span>
            <span className={currentStep >= 3 ? "text-secondary font-medium" : ""}>Budget</span>
            <span className={currentStep >= 4 ? "text-secondary font-medium" : ""}>Location</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-3xl px-4 py-8">
        {/* Step 1: Student Information */}
        {currentStep === 1 && (
          <Card className="border-border">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
                <Sparkles className="h-7 w-7 text-secondary" />
              </div>
              <CardTitle className="text-2xl text-foreground">Let&apos;s Start with the Basics</CardTitle>
              <CardDescription className="text-base">
                Tell us about the student so we can personalize the experience.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="studentName" className="text-foreground">Student&apos;s Name</Label>
                <Input
                  id="studentName"
                  placeholder="Enter student's name"
                  value={formData.studentName}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, studentName: e.target.value }))
                  }
                  className="h-12"
                />
              </div>
              <div className="space-y-3">
                <Label className="text-foreground">Current Class / Year</Label>
                <RadioGroup
                  value={formData.studentClass}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, studentClass: value }))
                  }
                  className="grid grid-cols-2 gap-3 sm:grid-cols-4"
                >
                  {["8th", "9th", "10th", "11th", "12th", "Grad Year 1", "Grad Year 2", "Grad Year 3"].map(
                    (grade) => (
                      <div key={grade}>
                        <RadioGroupItem
                          value={grade}
                          id={grade}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={grade}
                          className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-input bg-card px-4 py-3 text-sm font-medium text-foreground transition-all hover:border-secondary/50 peer-data-[state=checked]:border-secondary peer-data-[state=checked]:bg-secondary/10"
                        >
                          {grade}
                        </Label>
                      </div>
                    )
                  )}
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Interests & Skills */}
        {currentStep === 2 && (
          <Card className="border-border">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
                <Heart className="h-7 w-7 text-secondary" />
              </div>
              <CardTitle className="text-2xl text-foreground">Interests & Skills</CardTitle>
              <CardDescription className="text-base">
                Select the areas that excite {formData.studentName || "the student"} the most.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <Label className="text-foreground">Areas of Interest (Select up to 5)</Label>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {interests.map((interest) => {
                    const isSelected = formData.selectedInterests.includes(interest.id)
                    const IconComponent = interest.icon
                    return (
                      <button
                        key={interest.id}
                        type="button"
                        onClick={() => handleInterestToggle(interest.id)}
                        disabled={
                          !isSelected && formData.selectedInterests.length >= 5
                        }
                        className={`flex items-center gap-3 rounded-lg border-2 p-4 text-left transition-all ${
                          isSelected
                            ? "border-secondary bg-secondary/10"
                            : "border-input bg-card hover:border-secondary/50"
                        } ${
                          !isSelected && formData.selectedInterests.length >= 5
                            ? "cursor-not-allowed opacity-50"
                            : ""
                        }`}
                      >
                        <IconComponent
                          className={`h-5 w-5 shrink-0 ${
                            isSelected ? "text-secondary" : "text-muted-foreground"
                          }`}
                        />
                        <span
                          className={`text-sm font-medium ${
                            isSelected ? "text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          {interest.label}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-foreground">Key Strengths (Select up to 4)</Label>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => {
                    const isSelected = formData.selectedSkills.includes(skill.id)
                    return (
                      <Badge
                        key={skill.id}
                        variant={isSelected ? "default" : "outline"}
                        className={`cursor-pointer px-4 py-2 text-sm transition-all ${
                          isSelected
                            ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                            : "hover:bg-secondary/10"
                        } ${
                          !isSelected && formData.selectedSkills.length >= 4
                            ? "cursor-not-allowed opacity-50"
                            : ""
                        }`}
                        onClick={() => {
                          if (isSelected || formData.selectedSkills.length < 4) {
                            handleSkillToggle(skill.id)
                          }
                        }}
                      >
                        {isSelected && <Check className="mr-1 h-3 w-3" />}
                        {skill.label}
                      </Badge>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Budget */}
        {currentStep === 3 && (
          <Card className="border-border">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Calculator className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-2xl text-foreground">Education Budget</CardTitle>
              <CardDescription className="text-base">
                This helps us recommend colleges within your financial comfort zone.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-6">
                <div className="text-center">
                  <span className="text-3xl font-bold text-foreground">
                    {getBudgetLabel(formData.budget[0])}
                  </span>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Total education budget (including living expenses)
                  </p>
                </div>
                <Slider
                  value={formData.budget}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, budget: value }))
                  }
                  max={60}
                  min={5}
                  step={5}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>₹5L</span>
                  <span>₹20L</span>
                  <span>₹40L</span>
                  <span>₹60L+</span>
                </div>
              </div>

              <div className="rounded-lg bg-muted/50 p-4">
                <div className="flex items-start gap-3">
                  <Brain className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Why we ask this
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Your budget helps us calculate Financial Viability Scores and filter 
                      colleges that offer the best ROI within your range. We never share 
                      this information publicly.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Location Preferences */}
        {currentStep === 4 && (
          <Card className="border-border">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
                <MapPin className="h-7 w-7 text-secondary" />
              </div>
              <CardTitle className="text-2xl text-foreground">Location Preferences</CardTitle>
              <CardDescription className="text-base">
                Where would {formData.studentName || "the student"} like to study?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <Label className="text-foreground">Preferred Cities (Select all that apply)</Label>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {cities.map((city) => {
                    const isSelected = formData.locationPreferences.includes(city)
                    return (
                      <button
                        key={city}
                        type="button"
                        onClick={() => handleLocationToggle(city)}
                        className={`flex items-center justify-center gap-2 rounded-lg border-2 px-4 py-3 text-sm font-medium transition-all ${
                          isSelected
                            ? "border-secondary bg-secondary/10 text-foreground"
                            : "border-input bg-card text-muted-foreground hover:border-secondary/50"
                        }`}
                      >
                        {isSelected && <Check className="h-4 w-4 text-secondary" />}
                        {city}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-foreground">Open to Studying Abroad?</Label>
                <RadioGroup
                  value={formData.studyAbroad}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, studyAbroad: value }))
                  }
                  className="grid grid-cols-3 gap-3"
                >
                  {[
                    { value: "yes", label: "Yes" },
                    { value: "maybe", label: "Maybe" },
                    { value: "no", label: "No" },
                  ].map((option) => (
                    <div key={option.value}>
                      <RadioGroupItem
                        value={option.value}
                        id={`abroad-${option.value}`}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={`abroad-${option.value}`}
                        className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-input bg-card px-4 py-3 text-sm font-medium text-foreground transition-all hover:border-secondary/50 peer-data-[state=checked]:border-secondary peer-data-[state=checked]:bg-secondary/10"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-secondary/30 bg-secondary/5 p-4">
                <Checkbox id="consent" className="mt-0.5" />
                <Label
                  htmlFor="consent"
                  className="text-sm leading-relaxed text-muted-foreground"
                >
                  I agree to receive personalized career recommendations and updates 
                  from ParentAnchor. We respect your privacy and will never share your 
                  data with third parties.
                </Label>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation Buttons */}
        <div className="mt-8 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <Button onClick={handleNext} className="gap-2">
            {currentStep === totalSteps ? (
              <>
                View Dashboard
                <Check className="h-4 w-4" />
              </>
            ) : (
              <>
                Continue
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </main>
    </div>
  )
}
