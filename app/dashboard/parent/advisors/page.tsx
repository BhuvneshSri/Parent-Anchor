"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
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
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Search,
  Star,
  Clock,
  Video,
  Calendar,
  CheckCircle2,
  Filter,
  MapPin,
  Languages,
  Briefcase,
  GraduationCap,
  TrendingUp,
  Users,
  Award,
  MessageSquare,
} from "lucide-react"

const advisors = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    initials: "PS",
    title: "Senior Career Counselor",
    specializations: ["Engineering", "IIT/NIT Admissions", "Study Abroad"],
    experience: 15,
    rating: 4.9,
    reviews: 342,
    sessions: 1250,
    languages: ["English", "Hindi"],
    location: "Mumbai",
    verified: true,
    topRated: true,
    availability: "Available Today",
    price: 499,
    bio: "Former IIT Delhi admission counselor with 15+ years guiding students to top engineering colleges.",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    initials: "RK",
    title: "Medical Career Expert",
    specializations: ["NEET Preparation", "MBBS Abroad", "Medical Colleges"],
    experience: 12,
    rating: 4.8,
    reviews: 289,
    sessions: 980,
    languages: ["English", "Hindi", "Tamil"],
    location: "Chennai",
    verified: true,
    topRated: true,
    availability: "Next slot: Tomorrow",
    price: 599,
    bio: "Helped 500+ students secure MBBS seats in India and abroad. NEET strategy specialist.",
  },
  {
    id: 3,
    name: "Ananya Desai",
    initials: "AD",
    title: "Study Abroad Consultant",
    specializations: ["US Universities", "UK Admissions", "Scholarships"],
    experience: 10,
    rating: 4.9,
    reviews: 456,
    sessions: 1560,
    languages: ["English", "Gujarati"],
    location: "Ahmedabad",
    verified: true,
    topRated: false,
    availability: "Available Today",
    price: 699,
    bio: "Ivy League admission expert. 90% success rate for top 50 US universities.",
  },
  {
    id: 4,
    name: "Dr. Vikram Mehta",
    initials: "VM",
    title: "Management Career Advisor",
    specializations: ["MBA Admissions", "CAT Preparation", "IIM Strategy"],
    experience: 18,
    rating: 4.7,
    reviews: 198,
    sessions: 720,
    languages: ["English", "Hindi"],
    location: "Delhi",
    verified: true,
    topRated: false,
    availability: "Next slot: 2 days",
    price: 799,
    bio: "IIM Ahmedabad alumnus. Specializes in MBA profile building and interview preparation.",
  },
  {
    id: 5,
    name: "Sneha Iyer",
    initials: "SI",
    title: "Creative Careers Specialist",
    specializations: ["Design", "Media & Arts", "Portfolio Building"],
    experience: 8,
    rating: 4.9,
    reviews: 167,
    sessions: 540,
    languages: ["English", "Hindi", "Kannada"],
    location: "Bangalore",
    verified: true,
    topRated: true,
    availability: "Available Today",
    price: 449,
    bio: "NID graduate helping students build winning portfolios for design and creative programs.",
  },
  {
    id: 6,
    name: "Arjun Patel",
    initials: "AP",
    title: "Tech Career Mentor",
    specializations: ["Computer Science", "AI/ML Careers", "Startup Paths"],
    experience: 9,
    rating: 4.8,
    reviews: 234,
    sessions: 890,
    languages: ["English", "Hindi", "Marathi"],
    location: "Pune",
    verified: true,
    topRated: false,
    availability: "Available Today",
    price: 549,
    bio: "Ex-Google engineer guiding students into top tech companies and emerging tech careers.",
  },
  {
    id: 7,
    name: "Dr. Meera Nair",
    initials: "MN",
    title: "Science Research Advisor",
    specializations: ["Research Careers", "PhD Guidance", "Scholarships"],
    experience: 20,
    rating: 4.9,
    reviews: 145,
    sessions: 480,
    languages: ["English", "Malayalam"],
    location: "Kochi",
    verified: true,
    topRated: true,
    availability: "Next slot: Tomorrow",
    price: 649,
    bio: "PhD from Stanford. Helps students pursue research careers in India and internationally.",
  },
  {
    id: 8,
    name: "Karthik Reddy",
    initials: "KR",
    title: "Government Exams Expert",
    specializations: ["UPSC", "State PSC", "Banking Exams"],
    experience: 14,
    rating: 4.7,
    reviews: 312,
    sessions: 1100,
    languages: ["English", "Hindi", "Telugu"],
    location: "Hyderabad",
    verified: true,
    topRated: false,
    availability: "Available Today",
    price: 399,
    bio: "Former IAS officer mentoring aspirants for civil services and government careers.",
  },
]

const specializations = [
  "All Specializations",
  "Engineering",
  "Medical",
  "Study Abroad",
  "MBA",
  "Design & Arts",
  "Technology",
  "Research",
  "Government Exams",
]

export default function AdvisorMarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSpecialization, setSelectedSpecialization] = useState("All Specializations")
  const [selectedAdvisor, setSelectedAdvisor] = useState<typeof advisors[0] | null>(null)
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false)
  const [bookingConfirmed, setBookingConfirmed] = useState(false)

  const filteredAdvisors = advisors.filter((advisor) => {
    const matchesSearch =
      advisor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      advisor.specializations.some((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
      )
    const matchesSpecialization =
      selectedSpecialization === "All Specializations" ||
      advisor.specializations.some((s) =>
        s.toLowerCase().includes(selectedSpecialization.toLowerCase())
      )
    return matchesSearch && matchesSpecialization
  })

  const handleBookSession = (advisor: typeof advisors[0]) => {
    setSelectedAdvisor(advisor)
    setBookingDialogOpen(true)
    setBookingConfirmed(false)
  }

  const confirmBooking = () => {
    setBookingConfirmed(true)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Advisor Marketplace</h1>
        <p className="text-muted-foreground mt-1">
          Connect with verified career counselors for personalized guidance
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Card className="border-0 bg-primary/5">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">50+</p>
              <p className="text-xs text-muted-foreground">Verified Advisors</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 bg-secondary/10">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20">
              <MessageSquare className="h-5 w-5 text-secondary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">10K+</p>
              <p className="text-xs text-muted-foreground">Sessions Completed</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 bg-primary/5">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Star className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">4.8</p>
              <p className="text-xs text-muted-foreground">Average Rating</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 bg-secondary/10">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20">
              <TrendingUp className="h-5 w-5 text-secondary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">95%</p>
              <p className="text-xs text-muted-foreground">Satisfaction Rate</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search advisors by name or expertise..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex gap-2">
              <Select
                value={selectedSpecialization}
                onValueChange={setSelectedSpecialization}
              >
                <SelectTrigger className="w-full sm:w-[200px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {specializations.map((spec) => (
                    <SelectItem key={spec} value={spec}>
                      {spec}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Advisors Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredAdvisors.map((advisor) => (
          <Card key={advisor.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16 border-2 border-secondary">
                  <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
                    {advisor.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-foreground truncate">
                      {advisor.name}
                    </h3>
                    {advisor.verified && (
                      <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{advisor.title}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-medium">{advisor.rating}</span>
                      <span className="text-xs text-muted-foreground">
                        ({advisor.reviews})
                      </span>
                    </div>
                    {advisor.topRated && (
                      <Badge variant="secondary" className="text-xs">
                        <Award className="h-3 w-3 mr-1" />
                        Top Rated
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pb-3">
              <p className="text-sm text-muted-foreground line-clamp-2">
                {advisor.bio}
              </p>
              
              <div className="flex flex-wrap gap-1.5">
                {advisor.specializations.map((spec) => (
                  <Badge key={spec} variant="outline" className="text-xs">
                    {spec}
                  </Badge>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="h-4 w-4" />
                  <span>{advisor.experience} years exp.</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <GraduationCap className="h-4 w-4" />
                  <span>{advisor.sessions}+ sessions</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{advisor.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Languages className="h-4 w-4" />
                  <span>{advisor.languages.slice(0, 2).join(", ")}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <div className="flex items-center gap-1 text-secondary">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-medium">{advisor.availability}</span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-foreground">
                    ₹{advisor.price}
                  </span>
                  <span className="text-xs text-muted-foreground">/10 min</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0 gap-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => handleBookSession(advisor)}
              >
                View Profile
              </Button>
              <Button
                className="flex-1 bg-secondary hover:bg-secondary/90"
                onClick={() => handleBookSession(advisor)}
              >
                <Video className="h-4 w-4 mr-2" />
                Book Session
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredAdvisors.length === 0 && (
        <Card className="py-12">
          <CardContent className="text-center">
            <Search className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
            <h3 className="font-semibold text-foreground">No advisors found</h3>
            <p className="text-muted-foreground text-sm mt-1">
              Try adjusting your search or filter criteria
            </p>
          </CardContent>
        </Card>
      )}

      {/* Booking Dialog */}
      <Dialog open={bookingDialogOpen} onOpenChange={setBookingDialogOpen}>
        <DialogContent className="sm:max-w-md">
          {!bookingConfirmed ? (
            <>
              <DialogHeader>
                <DialogTitle>Book Quick Session</DialogTitle>
                <DialogDescription>
                  Schedule a 10-minute video call with {selectedAdvisor?.name}
                </DialogDescription>
              </DialogHeader>
              {selectedAdvisor && (
                <div className="space-y-4 py-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-14 w-14">
                      <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                        {selectedAdvisor.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{selectedAdvisor.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {selectedAdvisor.title}
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        <span className="text-sm">{selectedAdvisor.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-medium text-sm">Select Time Slot</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {["Today, 4:00 PM", "Today, 6:30 PM", "Tomorrow, 10:00 AM", "Tomorrow, 2:00 PM"].map(
                        (slot) => (
                          <Button
                            key={slot}
                            variant="outline"
                            className="justify-start h-auto py-2"
                          >
                            <Calendar className="h-4 w-4 mr-2" />
                            <span className="text-xs">{slot}</span>
                          </Button>
                        )
                      )}
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-3 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Session Duration</span>
                      <span className="font-medium">10 minutes</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Session Type</span>
                      <span className="font-medium">Video Call</span>
                    </div>
                    <div className="flex justify-between text-sm pt-2 border-t">
                      <span className="font-medium">Total Amount</span>
                      <span className="font-bold text-secondary">
                        ₹{selectedAdvisor.price}
                      </span>
                    </div>
                  </div>
                </div>
              )}
              <DialogFooter>
                <Button variant="outline" onClick={() => setBookingDialogOpen(false)}>
                  Cancel
                </Button>
                <Button
                  className="bg-secondary hover:bg-secondary/90"
                  onClick={confirmBooking}
                >
                  Confirm Booking
                </Button>
              </DialogFooter>
            </>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="text-center">Booking Confirmed!</DialogTitle>
              </DialogHeader>
              <div className="py-8 text-center space-y-4">
                <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-secondary/20">
                  <CheckCircle2 className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <p className="font-medium">Your session is scheduled</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    You will receive a confirmation email with the video call link.
                  </p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 text-left space-y-1">
                  <p className="text-sm">
                    <span className="text-muted-foreground">Advisor:</span>{" "}
                    <span className="font-medium">{selectedAdvisor?.name}</span>
                  </p>
                  <p className="text-sm">
                    <span className="text-muted-foreground">Time:</span>{" "}
                    <span className="font-medium">Today, 4:00 PM</span>
                  </p>
                  <p className="text-sm">
                    <span className="text-muted-foreground">Duration:</span>{" "}
                    <span className="font-medium">10 minutes</span>
                  </p>
                </div>
              </div>
              <DialogFooter>
                <Button
                  className="w-full bg-secondary hover:bg-secondary/90"
                  onClick={() => setBookingDialogOpen(false)}
                >
                  Done
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
