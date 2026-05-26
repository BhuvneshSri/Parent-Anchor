"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  Shield,
  MapPin,
  Train,
  Plane,
  Building2,
  Users,
  Phone,
  MessageCircle,
  Heart,
  Star,
  Search,
  Filter,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Home,
  Hospital,
  ShieldCheck,
  Languages,
  Clock,
  Navigation,
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface CollegeSafetyData {
  id: string
  name: string
  city: string
  state: string
  overallScore: number
  campusSecurity: number
  hostelSafety: number
  connectivity: number
  communitySupport: number
  image: string
  hostelDetails: {
    girlsHostel: boolean
    boysHostel: boolean
    inCampus: boolean
    cctv: boolean
    wardenOnSite: boolean
    visitorPolicy: string
    curfewTime: string
  }
  transport: {
    nearestAirport: string
    airportDistance: string
    nearestRailway: string
    railwayDistance: string
    metroConnectivity: boolean
    collegeTransport: boolean
  }
  community: {
    hindiSpeaking: number
    marathiSpeaking: number
    localCommunity: string
    studentAssociations: string[]
    parentWhatsappGroup: boolean
  }
  emergency: {
    hospitalNearby: string
    hospitalDistance: string
    policeStation: string
    policeDistance: string
    emergencyHelpline: string
  }
  parentReviews: {
    rating: number
    totalReviews: number
    highlights: string[]
  }
}

const collegesData: CollegeSafetyData[] = [
  {
    id: "1",
    name: "IIT Bombay",
    city: "Mumbai",
    state: "Maharashtra",
    overallScore: 94,
    campusSecurity: 96,
    hostelSafety: 95,
    connectivity: 92,
    communitySupport: 93,
    image: "/placeholder.svg?height=200&width=300",
    hostelDetails: {
      girlsHostel: true,
      boysHostel: true,
      inCampus: true,
      cctv: true,
      wardenOnSite: true,
      visitorPolicy: "Registered visitors only, ID required",
      curfewTime: "10:30 PM (flexible on weekends)",
    },
    transport: {
      nearestAirport: "Chhatrapati Shivaji International",
      airportDistance: "25 km",
      nearestRailway: "Kanjurmarg Station",
      railwayDistance: "3 km",
      metroConnectivity: true,
      collegeTransport: true,
    },
    community: {
      hindiSpeaking: 85,
      marathiSpeaking: 70,
      localCommunity: "Large Marathi & cosmopolitan community",
      studentAssociations: ["Maharashtra Mandal", "Hindi Sahitya Sabha", "North Indian Association"],
      parentWhatsappGroup: true,
    },
    emergency: {
      hospitalNearby: "Hiranandani Hospital",
      hospitalDistance: "4 km",
      policeStation: "Powai Police Station",
      policeDistance: "2 km",
      emergencyHelpline: "022-2576-7890",
    },
    parentReviews: {
      rating: 4.8,
      totalReviews: 342,
      highlights: ["Excellent security", "Responsive administration", "Strong parent connect"],
    },
  },
  {
    id: "2",
    name: "BITS Pilani",
    city: "Pilani",
    state: "Rajasthan",
    overallScore: 88,
    campusSecurity: 92,
    hostelSafety: 90,
    connectivity: 78,
    communitySupport: 92,
    image: "/placeholder.svg?height=200&width=300",
    hostelDetails: {
      girlsHostel: true,
      boysHostel: true,
      inCampus: true,
      cctv: true,
      wardenOnSite: true,
      visitorPolicy: "Pre-approved visitors with 24hr notice",
      curfewTime: "11:00 PM",
    },
    transport: {
      nearestAirport: "Jaipur International Airport",
      airportDistance: "210 km",
      nearestRailway: "Loharu Junction",
      railwayDistance: "45 km",
      metroConnectivity: false,
      collegeTransport: true,
    },
    community: {
      hindiSpeaking: 95,
      marathiSpeaking: 25,
      localCommunity: "Hindi-speaking with diverse student body",
      studentAssociations: ["Maharashtra Mandal", "South Indian Association", "Bengali Association"],
      parentWhatsappGroup: true,
    },
    emergency: {
      hospitalNearby: "BITS Hospital (On Campus)",
      hospitalDistance: "0 km",
      policeStation: "Pilani Police Station",
      policeDistance: "1 km",
      emergencyHelpline: "01596-242-192",
    },
    parentReviews: {
      rating: 4.6,
      totalReviews: 287,
      highlights: ["Self-contained campus", "Strong alumni network", "Regular parent updates"],
    },
  },
  {
    id: "3",
    name: "VIT Vellore",
    city: "Vellore",
    state: "Tamil Nadu",
    overallScore: 91,
    campusSecurity: 94,
    hostelSafety: 93,
    connectivity: 85,
    communitySupport: 92,
    image: "/placeholder.svg?height=200&width=300",
    hostelDetails: {
      girlsHostel: true,
      boysHostel: true,
      inCampus: true,
      cctv: true,
      wardenOnSite: true,
      visitorPolicy: "Strict visitor management with biometric",
      curfewTime: "9:30 PM (girls), 10:30 PM (boys)",
    },
    transport: {
      nearestAirport: "Chennai International Airport",
      airportDistance: "130 km",
      nearestRailway: "Katpadi Junction",
      railwayDistance: "12 km",
      metroConnectivity: false,
      collegeTransport: true,
    },
    community: {
      hindiSpeaking: 60,
      marathiSpeaking: 35,
      localCommunity: "Tamil-speaking with pan-India students",
      studentAssociations: ["Hindi Parivar", "Maharashtra Mandal", "North Zone Club"],
      parentWhatsappGroup: true,
    },
    emergency: {
      hospitalNearby: "VIT Hospital (On Campus)",
      hospitalDistance: "0 km",
      policeStation: "VIT Campus Security",
      policeDistance: "0 km",
      emergencyHelpline: "0416-220-2020",
    },
    parentReviews: {
      rating: 4.7,
      totalReviews: 456,
      highlights: ["Best-in-class hostels", "24/7 medical facility", "Parent portal access"],
    },
  },
  {
    id: "4",
    name: "NIT Trichy",
    city: "Tiruchirappalli",
    state: "Tamil Nadu",
    overallScore: 89,
    campusSecurity: 90,
    hostelSafety: 91,
    connectivity: 84,
    communitySupport: 91,
    image: "/placeholder.svg?height=200&width=300",
    hostelDetails: {
      girlsHostel: true,
      boysHostel: true,
      inCampus: true,
      cctv: true,
      wardenOnSite: true,
      visitorPolicy: "Registered visitors during visiting hours",
      curfewTime: "10:00 PM",
    },
    transport: {
      nearestAirport: "Trichy International Airport",
      airportDistance: "8 km",
      nearestRailway: "Trichy Junction",
      railwayDistance: "15 km",
      metroConnectivity: false,
      collegeTransport: true,
    },
    community: {
      hindiSpeaking: 55,
      marathiSpeaking: 30,
      localCommunity: "Tamil-speaking, welcoming to North Indians",
      studentAssociations: ["Hindi Cell", "Marathi Mandal", "Gujarati Samaj"],
      parentWhatsappGroup: true,
    },
    emergency: {
      hospitalNearby: "NIT Health Centre",
      hospitalDistance: "0 km",
      policeStation: "Thuvakudi Police Station",
      policeDistance: "3 km",
      emergencyHelpline: "0431-250-3000",
    },
    parentReviews: {
      rating: 4.5,
      totalReviews: 312,
      highlights: ["Beautiful campus", "Supportive faculty", "Good food options"],
    },
  },
  {
    id: "5",
    name: "Manipal Institute of Technology",
    city: "Manipal",
    state: "Karnataka",
    overallScore: 92,
    campusSecurity: 93,
    hostelSafety: 94,
    connectivity: 86,
    communitySupport: 95,
    image: "/placeholder.svg?height=200&width=300",
    hostelDetails: {
      girlsHostel: true,
      boysHostel: true,
      inCampus: true,
      cctv: true,
      wardenOnSite: true,
      visitorPolicy: "Digital visitor management system",
      curfewTime: "10:00 PM",
    },
    transport: {
      nearestAirport: "Mangalore International Airport",
      airportDistance: "65 km",
      nearestRailway: "Udupi Station",
      railwayDistance: "5 km",
      metroConnectivity: false,
      collegeTransport: true,
    },
    community: {
      hindiSpeaking: 70,
      marathiSpeaking: 40,
      localCommunity: "Cosmopolitan university town",
      studentAssociations: ["Hindi Samiti", "Marathi Mandal", "Mumbai Students Forum"],
      parentWhatsappGroup: true,
    },
    emergency: {
      hospitalNearby: "Kasturba Medical College Hospital",
      hospitalDistance: "1 km",
      policeStation: "Manipal Police Station",
      policeDistance: "2 km",
      emergencyHelpline: "0820-257-1201",
    },
    parentReviews: {
      rating: 4.7,
      totalReviews: 523,
      highlights: ["University town feel", "World-class hospital", "Strong community"],
    },
  },
  {
    id: "6",
    name: "SRM Institute",
    city: "Chennai",
    state: "Tamil Nadu",
    overallScore: 87,
    campusSecurity: 89,
    hostelSafety: 88,
    connectivity: 88,
    communitySupport: 83,
    image: "/placeholder.svg?height=200&width=300",
    hostelDetails: {
      girlsHostel: true,
      boysHostel: true,
      inCampus: true,
      cctv: true,
      wardenOnSite: true,
      visitorPolicy: "Visitor pass system with photo ID",
      curfewTime: "9:00 PM (girls), 10:00 PM (boys)",
    },
    transport: {
      nearestAirport: "Chennai International Airport",
      airportDistance: "45 km",
      nearestRailway: "Potheri Station",
      railwayDistance: "2 km",
      metroConnectivity: false,
      collegeTransport: true,
    },
    community: {
      hindiSpeaking: 50,
      marathiSpeaking: 25,
      localCommunity: "Tamil-majority with diverse intake",
      studentAssociations: ["Hindi Club", "Maharashtra Forum", "North Indian Society"],
      parentWhatsappGroup: true,
    },
    emergency: {
      hospitalNearby: "SRM Medical College Hospital",
      hospitalDistance: "2 km",
      policeStation: "Kattankulathur Police Station",
      policeDistance: "3 km",
      emergencyHelpline: "044-2745-5510",
    },
    parentReviews: {
      rating: 4.3,
      totalReviews: 398,
      highlights: ["Good infrastructure", "Regular parent meets", "Placement support"],
    },
  },
]

function getScoreColor(score: number) {
  if (score >= 90) return "text-green-600"
  if (score >= 80) return "text-teal-600"
  if (score >= 70) return "text-yellow-600"
  return "text-orange-600"
}

function getScoreBg(score: number) {
  if (score >= 90) return "bg-green-100"
  if (score >= 80) return "bg-teal-100"
  if (score >= 70) return "bg-yellow-100"
  return "bg-orange-100"
}

function ScoreRing({ score, size = "lg" }: { score: number; size?: "sm" | "lg" }) {
  const circumference = 2 * Math.PI * 45
  const strokeDashoffset = circumference - (score / 100) * circumference
  const dimension = size === "lg" ? 120 : 80
  const fontSize = size === "lg" ? "text-2xl" : "text-lg"

  return (
    <div className="relative" style={{ width: dimension, height: dimension }}>
      <svg className="transform -rotate-90" width={dimension} height={dimension}>
        <circle
          cx={dimension / 2}
          cy={dimension / 2}
          r={45 * (dimension / 120)}
          stroke="currentColor"
          strokeWidth={size === "lg" ? 8 : 6}
          fill="transparent"
          className="text-muted"
        />
        <circle
          cx={dimension / 2}
          cy={dimension / 2}
          r={45 * (dimension / 120)}
          stroke="currentColor"
          strokeWidth={size === "lg" ? 8 : 6}
          fill="transparent"
          strokeDasharray={circumference * (dimension / 120)}
          strokeDashoffset={strokeDashoffset * (dimension / 120)}
          className={getScoreColor(score)}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`font-bold ${fontSize} ${getScoreColor(score)}`}>{score}</span>
      </div>
    </div>
  )
}

function CollegeDetailDialog({ college }: { college: CollegeSafetyData }) {
  return (
    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-secondary" />
          {college.name} - Safety Report
        </DialogTitle>
        <DialogDescription>
          Complete safety and connectivity analysis for {college.city}, {college.state}
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-6 py-4">
        {/* Overall Score */}
        <div className="flex items-center gap-6 p-4 bg-muted/50 rounded-lg">
          <ScoreRing score={college.overallScore} />
          <div>
            <h3 className="font-semibold text-lg">Overall Safety Score</h3>
            <p className="text-sm text-muted-foreground">
              Based on campus security, hostel safety, connectivity, and community support
            </p>
            <div className="flex gap-2 mt-2">
              {college.parentReviews.highlights.map((highlight, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Score Breakdown */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-secondary" />
                Campus Security
              </span>
              <span className="font-medium">{college.campusSecurity}%</span>
            </div>
            <Progress value={college.campusSecurity} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm flex items-center gap-2">
                <Home className="h-4 w-4 text-secondary" />
                Hostel Safety
              </span>
              <span className="font-medium">{college.hostelSafety}%</span>
            </div>
            <Progress value={college.hostelSafety} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm flex items-center gap-2">
                <Navigation className="h-4 w-4 text-secondary" />
                Connectivity
              </span>
              <span className="font-medium">{college.connectivity}%</span>
            </div>
            <Progress value={college.connectivity} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm flex items-center gap-2">
                <Users className="h-4 w-4 text-secondary" />
                Community Support
              </span>
              <span className="font-medium">{college.communitySupport}%</span>
            </div>
            <Progress value={college.communitySupport} className="h-2" />
          </div>
        </div>

        {/* Hostel Details */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Hostel Facilities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                {college.hostelDetails.girlsHostel ? (
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-orange-600" />
                )}
                <span className="text-sm">Girls Hostel Available</span>
              </div>
              <div className="flex items-center gap-2">
                {college.hostelDetails.inCampus ? (
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-orange-600" />
                )}
                <span className="text-sm">In-Campus Accommodation</span>
              </div>
              <div className="flex items-center gap-2">
                {college.hostelDetails.cctv ? (
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-orange-600" />
                )}
                <span className="text-sm">24/7 CCTV Surveillance</span>
              </div>
              <div className="flex items-center gap-2">
                {college.hostelDetails.wardenOnSite ? (
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-orange-600" />
                )}
                <span className="text-sm">Warden On-Site</span>
              </div>
            </div>
            <div className="pt-2 border-t space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Curfew:</span>
                <span>{college.hostelDetails.curfewTime}</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <Users className="h-4 w-4 text-muted-foreground mt-0.5" />
                <span className="text-muted-foreground">Visitor Policy:</span>
                <span>{college.hostelDetails.visitorPolicy}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transport Connectivity */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Navigation className="h-4 w-4" />
              Transport Connectivity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <Plane className="h-5 w-5 text-secondary mt-0.5" />
                <div>
                  <p className="text-sm font-medium">{college.transport.nearestAirport}</p>
                  <p className="text-xs text-muted-foreground">{college.transport.airportDistance} away</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <Train className="h-5 w-5 text-secondary mt-0.5" />
                <div>
                  <p className="text-sm font-medium">{college.transport.nearestRailway}</p>
                  <p className="text-xs text-muted-foreground">{college.transport.railwayDistance} away</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              {college.transport.metroConnectivity && (
                <Badge variant="outline" className="text-xs">
                  <Train className="h-3 w-3 mr-1" />
                  Metro Connected
                </Badge>
              )}
              {college.transport.collegeTransport && (
                <Badge variant="outline" className="text-xs">
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  College Transport Available
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Language & Community */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Languages className="h-4 w-4" />
              Language & Community Support
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Hindi Speaking</span>
                  <span className="font-medium">{college.community.hindiSpeaking}%</span>
                </div>
                <Progress value={college.community.hindiSpeaking} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Marathi Speaking</span>
                  <span className="font-medium">{college.community.marathiSpeaking}%</span>
                </div>
                <Progress value={college.community.marathiSpeaking} className="h-2" />
              </div>
            </div>
            <div className="pt-2 border-t">
              <p className="text-sm text-muted-foreground mb-2">Student Associations:</p>
              <div className="flex flex-wrap gap-2">
                {college.community.studentAssociations.map((assoc, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {assoc}
                  </Badge>
                ))}
              </div>
            </div>
            {college.community.parentWhatsappGroup && (
              <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                <MessageCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm text-green-700">Parent WhatsApp Group Available</span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Emergency Services */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Hospital className="h-4 w-4" />
              Emergency Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Hospital className="h-5 w-5 text-red-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">{college.emergency.hospitalNearby}</p>
                  <p className="text-xs text-muted-foreground">{college.emergency.hospitalDistance} away</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">{college.emergency.policeStation}</p>
                  <p className="text-xs text-muted-foreground">{college.emergency.policeDistance} away</p>
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-red-50 rounded-lg flex items-center gap-3">
              <Phone className="h-5 w-5 text-red-600" />
              <div>
                <p className="text-xs text-red-600">Emergency Helpline</p>
                <p className="font-semibold text-red-700">{college.emergency.emergencyHelpline}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Parent Reviews */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Parent Reviews
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(college.parentReviews.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="font-semibold">{college.parentReviews.rating}/5</span>
              <span className="text-sm text-muted-foreground">
                ({college.parentReviews.totalReviews} parent reviews)
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </DialogContent>
  )
}

export default function SafetyScorePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [stateFilter, setStateFilter] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("score")

  const filteredColleges = collegesData
    .filter((college) => {
      const matchesSearch =
        college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.city.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesState = stateFilter === "all" || college.state === stateFilter
      return matchesSearch && matchesState
    })
    .sort((a, b) => {
      if (sortBy === "score") return b.overallScore - a.overallScore
      if (sortBy === "connectivity") return b.connectivity - a.connectivity
      if (sortBy === "community") return b.communitySupport - a.communitySupport
      return 0
    })

  const states = [...new Set(collegesData.map((c) => c.state))]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">State-Migration Safety Score</h1>
        <p className="text-muted-foreground mt-1">
          Campus Safety & Connectivity Index for informed decisions about sending your child to another city
        </p>
      </div>

      {/* Info Banner */}
      <Card className="bg-gradient-to-r from-secondary/10 to-primary/10 border-secondary/20">
        <CardContent className="p-4">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-secondary/20 rounded-lg">
              <Shield className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Comprehensive Safety Analysis</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Our safety score aggregates data on campus hostels, proximity to airports and railway stations,
                local Hindi/Marathi-speaking communities, emergency services, and verified parent reviews to help
                you make confident decisions.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search colleges or cities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={stateFilter} onValueChange={setStateFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Filter by state" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All States</SelectItem>
            {states.map((state) => (
              <SelectItem key={state} value={state}>
                {state}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="score">Highest Safety Score</SelectItem>
            <SelectItem value="connectivity">Best Connectivity</SelectItem>
            <SelectItem value="community">Community Support</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Score Legend */}
      <div className="flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span>90+ Excellent</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-teal-500" />
          <span>80-89 Very Good</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <span>70-79 Good</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-orange-500" />
          <span>Below 70 Needs Review</span>
        </div>
      </div>

      {/* College Cards */}
      <Tabs defaultValue="grid" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="grid">Grid View</TabsTrigger>
          <TabsTrigger value="compare">Quick Compare</TabsTrigger>
        </TabsList>

        <TabsContent value="grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredColleges.map((college) => (
              <Dialog key={college.id}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{college.name}</CardTitle>
                        <CardDescription className="flex items-center gap-1 mt-1">
                          <MapPin className="h-3 w-3" />
                          {college.city}, {college.state}
                        </CardDescription>
                      </div>
                      <div className={`p-2 rounded-full ${getScoreBg(college.overallScore)}`}>
                        <span className={`text-xl font-bold ${getScoreColor(college.overallScore)}`}>
                          {college.overallScore}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Mini Score Bars */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Campus Security</span>
                        <span className="font-medium">{college.campusSecurity}%</span>
                      </div>
                      <Progress value={college.campusSecurity} className="h-1.5" />

                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Hostel Safety</span>
                        <span className="font-medium">{college.hostelSafety}%</span>
                      </div>
                      <Progress value={college.hostelSafety} className="h-1.5" />

                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Connectivity</span>
                        <span className="font-medium">{college.connectivity}%</span>
                      </div>
                      <Progress value={college.connectivity} className="h-1.5" />
                    </div>

                    {/* Quick Stats */}
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        <Languages className="h-3 w-3 mr-1" />
                        Hindi {college.community.hindiSpeaking}%
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        <Plane className="h-3 w-3 mr-1" />
                        {college.transport.airportDistance}
                      </Badge>
                      {college.community.parentWhatsappGroup && (
                        <Badge variant="secondary" className="text-xs">
                          <MessageCircle className="h-3 w-3 mr-1" />
                          Parent Group
                        </Badge>
                      )}
                    </div>

                    {/* Parent Rating */}
                    <div className="flex items-center justify-between pt-2 border-t">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-medium">{college.parentReviews.rating}</span>
                        <span className="text-xs text-muted-foreground">
                          ({college.parentReviews.totalReviews} reviews)
                        </span>
                      </div>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm" className="text-secondary">
                          View Details
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </DialogTrigger>
                    </div>
                  </CardContent>
                </Card>
                <CollegeDetailDialog college={college} />
              </Dialog>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="compare">
          <Card>
            <CardHeader>
              <CardTitle>Quick Safety Comparison</CardTitle>
              <CardDescription>Compare safety metrics across all colleges at a glance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2 font-medium">College</th>
                      <th className="text-center py-3 px-2 font-medium">Overall</th>
                      <th className="text-center py-3 px-2 font-medium">Security</th>
                      <th className="text-center py-3 px-2 font-medium">Hostel</th>
                      <th className="text-center py-3 px-2 font-medium">Transport</th>
                      <th className="text-center py-3 px-2 font-medium">Community</th>
                      <th className="text-center py-3 px-2 font-medium">Hindi %</th>
                      <th className="text-center py-3 px-2 font-medium">Airport</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredColleges.map((college) => (
                      <tr key={college.id} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-2">
                          <div>
                            <p className="font-medium">{college.name}</p>
                            <p className="text-xs text-muted-foreground">{college.city}</p>
                          </div>
                        </td>
                        <td className="text-center py-3 px-2">
                          <span
                            className={`font-bold px-2 py-1 rounded ${getScoreBg(college.overallScore)} ${getScoreColor(college.overallScore)}`}
                          >
                            {college.overallScore}
                          </span>
                        </td>
                        <td className="text-center py-3 px-2">{college.campusSecurity}</td>
                        <td className="text-center py-3 px-2">{college.hostelSafety}</td>
                        <td className="text-center py-3 px-2">{college.connectivity}</td>
                        <td className="text-center py-3 px-2">{college.communitySupport}</td>
                        <td className="text-center py-3 px-2">{college.community.hindiSpeaking}%</td>
                        <td className="text-center py-3 px-2 text-xs">{college.transport.airportDistance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Help Section */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5 text-secondary" />
              <div>
                <p className="font-medium">Need personalized guidance?</p>
                <p className="text-sm text-muted-foreground">
                  Talk to our counselors about safety concerns for specific colleges
                </p>
              </div>
            </div>
            <Button className="bg-secondary hover:bg-secondary/90">Book a Session</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
