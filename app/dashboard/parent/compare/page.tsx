"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  GraduationCap,
  IndianRupee,
  Shield,
  Users,
  MapPin,
  Star,
  Check,
  X,
  Plus,
  ArrowRight,
  Trophy,
  Building2,
  Clock,
} from "lucide-react"

interface College {
  id: string
  name: string
  location: string
  type: string
  ranking: number
  fees: number
  feesLabel: string
  placement: number
  avgPackage: string
  campusSafety: number
  distance: string
  accreditation: string[]
  strengths: string[]
  highlights: {
    hostel: boolean
    internships: boolean
    industryTieups: boolean
    researchFocus: boolean
  }
}

const collegeData: College[] = [
  {
    id: "iit-bombay",
    name: "IIT Bombay",
    location: "Mumbai, Maharashtra",
    type: "Government",
    ranking: 1,
    fees: 850000,
    feesLabel: "₹8.5 Lakhs",
    placement: 98,
    avgPackage: "₹21.5 LPA",
    campusSafety: 95,
    distance: "45 km",
    accreditation: ["NAAC A++", "NBA", "NIRF #1"],
    strengths: ["Research", "Industry Connect", "Global Recognition"],
    highlights: {
      hostel: true,
      internships: true,
      industryTieups: true,
      researchFocus: true,
    },
  },
  {
    id: "bits-pilani",
    name: "BITS Pilani",
    location: "Pilani, Rajasthan",
    type: "Private",
    ranking: 2,
    fees: 2000000,
    feesLabel: "₹20 Lakhs",
    placement: 95,
    avgPackage: "₹18.2 LPA",
    campusSafety: 92,
    distance: "320 km",
    accreditation: ["NAAC A", "NIRF #27"],
    strengths: ["Flexible Curriculum", "Practice School", "Entrepreneurship"],
    highlights: {
      hostel: true,
      internships: true,
      industryTieups: true,
      researchFocus: false,
    },
  },
  {
    id: "vit-vellore",
    name: "VIT Vellore",
    location: "Vellore, Tamil Nadu",
    type: "Private",
    ranking: 3,
    fees: 1200000,
    feesLabel: "₹12 Lakhs",
    placement: 90,
    avgPackage: "₹8.5 LPA",
    campusSafety: 88,
    distance: "280 km",
    accreditation: ["NAAC A++", "NIRF #11"],
    strengths: ["Infrastructure", "Diverse Culture", "Multiple Campuses"],
    highlights: {
      hostel: true,
      internships: true,
      industryTieups: false,
      researchFocus: false,
    },
  },
  {
    id: "iiit-hyderabad",
    name: "IIIT Hyderabad",
    location: "Hyderabad, Telangana",
    type: "Government",
    ranking: 4,
    fees: 1000000,
    feesLabel: "₹10 Lakhs",
    placement: 94,
    avgPackage: "₹16.8 LPA",
    campusSafety: 90,
    distance: "120 km",
    accreditation: ["NAAC A", "NIRF #35"],
    strengths: ["CS Focus", "Research", "Startup Ecosystem"],
    highlights: {
      hostel: true,
      internships: true,
      industryTieups: true,
      researchFocus: true,
    },
  },
  {
    id: "nit-trichy",
    name: "NIT Trichy",
    location: "Tiruchirappalli, Tamil Nadu",
    type: "Government",
    ranking: 5,
    fees: 600000,
    feesLabel: "₹6 Lakhs",
    placement: 92,
    avgPackage: "₹12.5 LPA",
    campusSafety: 87,
    distance: "350 km",
    accreditation: ["NAAC A++", "NIRF #9"],
    strengths: ["Affordable", "Strong Alumni", "Good Placements"],
    highlights: {
      hostel: true,
      internships: true,
      industryTieups: false,
      researchFocus: false,
    },
  },
]

export default function CollegeComparePage() {
  const [selectedColleges, setSelectedColleges] = useState<string[]>([
    "iit-bombay",
    "bits-pilani",
  ])

  const addCollege = (collegeId: string) => {
    if (selectedColleges.length < 3 && !selectedColleges.includes(collegeId)) {
      setSelectedColleges([...selectedColleges, collegeId])
    }
  }

  const removeCollege = (collegeId: string) => {
    setSelectedColleges(selectedColleges.filter((id) => id !== collegeId))
  }

  const getSelectedColleges = () =>
    selectedColleges.map((id) => collegeData.find((c) => c.id === id)!)

  const getBestValue = (
    colleges: College[],
    key: keyof College,
    higherIsBetter = true
  ) => {
    const values = colleges.map((c) => c[key] as number)
    return higherIsBetter ? Math.max(...values) : Math.min(...values)
  }

  const selected = getSelectedColleges()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">College Duel</h1>
          <p className="text-muted-foreground">
            Compare up to 3 colleges side by side
          </p>
        </div>
        {selectedColleges.length < 3 && (
          <Select onValueChange={addCollege}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Add college..." />
            </SelectTrigger>
            <SelectContent>
              {collegeData
                .filter((c) => !selectedColleges.includes(c.id))
                .map((college) => (
                  <SelectItem key={college.id} value={college.id}>
                    {college.name}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        )}
      </div>

      {/* Comparison Cards */}
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {selected.map((college, index) => {
          const isBestFees = college.fees === getBestValue(selected, "fees", false)
          const isBestPlacement =
            college.placement === getBestValue(selected, "placement")
          const isBestSafety =
            college.campusSafety === getBestValue(selected, "campusSafety")

          return (
            <Card key={college.id} className="relative border-border">
              {index === 0 && (
                <div className="absolute -top-3 left-4">
                  <Badge className="bg-secondary text-secondary-foreground">
                    <Trophy className="mr-1 h-3 w-3" />
                    Best Match
                  </Badge>
                </div>
              )}
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg text-foreground">
                      {college.name}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3" />
                      {college.location}
                    </CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => removeCollege(college.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline">{college.type}</Badge>
                  <Badge variant="outline">Rank #{college.ranking}</Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Fees */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <IndianRupee className="h-4 w-4" />
                      Total Fees
                    </span>
                    {isBestFees && (
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-700"
                      >
                        Lowest
                      </Badge>
                    )}
                  </div>
                  <p className="text-xl font-bold text-foreground">
                    {college.feesLabel}
                  </p>
                </div>

                {/* Placement */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      Placement Rate
                    </span>
                    {isBestPlacement && (
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-700"
                      >
                        Highest
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress value={college.placement} className="h-2 flex-1" />
                    <span className="text-lg font-bold text-foreground">
                      {college.placement}%
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Avg Package: {college.avgPackage}
                  </p>
                </div>

                {/* Campus Safety */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4" />
                      Campus Safety
                    </span>
                    {isBestSafety && (
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-700"
                      >
                        Safest
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress value={college.campusSafety} className="h-2 flex-1" />
                    <span className="text-lg font-bold text-foreground">
                      {college.campusSafety}/100
                    </span>
                  </div>
                </div>

                {/* Distance */}
                <div className="space-y-2">
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    Distance from Home
                  </span>
                  <p className="text-lg font-bold text-foreground">
                    {college.distance}
                  </p>
                </div>

                {/* Accreditations */}
                <div className="space-y-2">
                  <span className="text-sm text-muted-foreground">
                    Accreditations
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {college.accreditation.map((acc) => (
                      <Badge key={acc} variant="outline" className="text-xs">
                        {acc}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-3 rounded-lg bg-muted/50 p-4">
                  <span className="text-sm font-medium text-foreground">
                    Key Features
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 text-sm">
                      {college.highlights.hostel ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <X className="h-4 w-4 text-red-500" />
                      )}
                      <span className="text-muted-foreground">Hostel</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      {college.highlights.internships ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <X className="h-4 w-4 text-red-500" />
                      )}
                      <span className="text-muted-foreground">Internships</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      {college.highlights.industryTieups ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <X className="h-4 w-4 text-red-500" />
                      )}
                      <span className="text-muted-foreground">Industry Tie-ups</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      {college.highlights.researchFocus ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <X className="h-4 w-4 text-red-500" />
                      )}
                      <span className="text-muted-foreground">Research Focus</span>
                    </div>
                  </div>
                </div>

                {/* Strengths */}
                <div className="space-y-2">
                  <span className="text-sm text-muted-foreground">Strengths</span>
                  <div className="flex flex-wrap gap-2">
                    {college.strengths.map((strength) => (
                      <Badge
                        key={strength}
                        variant="secondary"
                        className="bg-secondary/10 text-secondary"
                      >
                        <Star className="mr-1 h-3 w-3" />
                        {strength}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}

        {/* Add College Card */}
        {selectedColleges.length < 3 && (
          <Card className="flex min-h-[500px] items-center justify-center border-2 border-dashed border-border">
            <CardContent className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <Plus className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-lg font-medium text-foreground">Add College</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Compare up to 3 colleges
              </p>
              <Select onValueChange={addCollege}>
                <SelectTrigger className="mt-4 w-full">
                  <SelectValue placeholder="Select college..." />
                </SelectTrigger>
                <SelectContent>
                  {collegeData
                    .filter((c) => !selectedColleges.includes(c.id))
                    .map((college) => (
                      <SelectItem key={college.id} value={college.id}>
                        {college.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Summary */}
      <Card className="border-border bg-primary/5">
        <CardContent className="p-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Our Recommendation
                </h3>
                <p className="text-sm text-muted-foreground">
                  Based on your budget and priorities, {selected[0]?.name || "IIT Bombay"} offers the best 
                  balance of cost, placement, and safety.
                </p>
              </div>
            </div>
            <Button>
              Add to Roadmap
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
