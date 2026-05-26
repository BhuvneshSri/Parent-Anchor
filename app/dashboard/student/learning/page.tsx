"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Play,
  Clock,
  CheckCircle2,
  Star,
  Trophy,
  ChevronRight,
  Lock,
  Code,
  Brain,
  Palette,
  TrendingUp,
} from "lucide-react"

const learningPaths = [
  {
    id: "software",
    title: "Software Development Path",
    description: "Learn to code and build applications",
    icon: Code,
    progress: 35,
    totalCourses: 8,
    completedCourses: 3,
    duration: "40 hours",
    level: "Beginner",
  },
  {
    id: "data",
    title: "Data Science Path",
    description: "Master data analysis and machine learning",
    icon: Brain,
    progress: 15,
    totalCourses: 10,
    completedCourses: 1,
    duration: "60 hours",
    level: "Intermediate",
  },
  {
    id: "design",
    title: "UX/UI Design Path",
    description: "Create beautiful user experiences",
    icon: Palette,
    progress: 0,
    totalCourses: 6,
    completedCourses: 0,
    duration: "30 hours",
    level: "Beginner",
  },
]

const currentCourses = [
  {
    id: 1,
    title: "Python Fundamentals",
    path: "Software Development",
    progress: 75,
    lessons: 12,
    completedLessons: 9,
    nextLesson: "Functions and Modules",
    duration: "4 hours",
    thumbnail: null,
  },
  {
    id: 2,
    title: "Introduction to Web Development",
    path: "Software Development",
    progress: 45,
    lessons: 15,
    completedLessons: 7,
    nextLesson: "CSS Flexbox Layout",
    duration: "6 hours",
    thumbnail: null,
  },
]

const recommendedCourses = [
  {
    id: 1,
    title: "JavaScript Essentials",
    description: "Learn the language of the web",
    duration: "8 hours",
    rating: 4.8,
    students: 12500,
    level: "Beginner",
  },
  {
    id: 2,
    title: "Introduction to Machine Learning",
    description: "Start your AI journey",
    duration: "10 hours",
    rating: 4.9,
    students: 8900,
    level: "Intermediate",
  },
  {
    id: 3,
    title: "Design Thinking Fundamentals",
    description: "Learn to solve problems creatively",
    duration: "5 hours",
    rating: 4.7,
    students: 6700,
    level: "Beginner",
  },
]

const achievements = [
  { id: 1, title: "First Course", description: "Complete your first course", earned: true },
  { id: 2, title: "Week Streak", description: "Learn for 7 days in a row", earned: true },
  { id: 3, title: "Quiz Master", description: "Score 100% on 5 quizzes", earned: false },
  { id: 4, title: "Path Pioneer", description: "Complete a learning path", earned: false },
]

export default function LearningPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Learning Path</h1>
          <p className="text-muted-foreground">
            Build skills for your dream career with personalized courses
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-lg bg-yellow-100 px-3 py-1.5">
            <Trophy className="h-4 w-4 text-yellow-600" />
            <span className="text-sm font-medium text-yellow-700">850 XP</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-green-100 px-3 py-1.5">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">7 Day Streak</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="continue" className="space-y-6">
        <TabsList>
          <TabsTrigger value="continue">Continue Learning</TabsTrigger>
          <TabsTrigger value="paths">Learning Paths</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        {/* Continue Learning */}
        <TabsContent value="continue" className="space-y-6">
          {/* Current Courses */}
          <div className="space-y-4">
            <h2 className="font-semibold">Continue Where You Left Off</h2>
            {currentCourses.map((course) => (
              <Card key={course.id}>
                <CardContent className="p-4">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="flex h-20 w-32 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                      <BookOpen className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div>
                        <Badge variant="outline" className="mb-1">
                          {course.path}
                        </Badge>
                        <h3 className="font-semibold">{course.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          Next: {course.nextLesson}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {course.completedLessons}/{course.lessons} lessons
                        </span>
                      </div>
                    </div>
                    <Button className="gap-2 shrink-0">
                      <Play className="h-4 w-4" />
                      Continue
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recommended Courses */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">Recommended for You</h2>
              <Button variant="ghost" size="sm" className="gap-1">
                View All <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {recommendedCourses.map((course) => (
                <Card key={course.id} className="transition-shadow hover:shadow-md">
                  <CardContent className="p-4">
                    <div className="flex h-24 items-center justify-center rounded-lg bg-secondary/10 mb-4">
                      <BookOpen className="h-8 w-8 text-secondary" />
                    </div>
                    <Badge variant="outline" className="mb-2">
                      {course.level}
                    </Badge>
                    <h3 className="font-semibold">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {course.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </div>
                    </div>
                    <Button className="w-full mt-4">Start Learning</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Learning Paths */}
        <TabsContent value="paths" className="space-y-4">
          {learningPaths.map((path) => (
            <Card key={path.id}>
              <CardContent className="p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <path.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-lg">{path.title}</h3>
                        <Badge variant="outline">{path.level}</Badge>
                      </div>
                      <p className="text-muted-foreground">{path.description}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <BookOpen className="h-4 w-4" />
                        {path.totalCourses} courses
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {path.duration}
                      </div>
                      <div className="flex items-center gap-1 text-green-600">
                        <CheckCircle2 className="h-4 w-4" />
                        {path.completedCourses} completed
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{path.progress}%</span>
                      </div>
                      <Progress value={path.progress} className="h-2" />
                    </div>
                  </div>
                  <Button className="shrink-0" variant={path.progress > 0 ? "default" : "outline"}>
                    {path.progress > 0 ? "Continue" : "Start Path"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Achievements */}
        <TabsContent value="achievements" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement) => (
              <Card
                key={achievement.id}
                className={achievement.earned ? "" : "opacity-60"}
              >
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full ${
                      achievement.earned
                        ? "bg-yellow-100"
                        : "bg-muted"
                    }`}
                  >
                    {achievement.earned ? (
                      <Trophy className="h-8 w-8 text-yellow-600" />
                    ) : (
                      <Lock className="h-8 w-8 text-muted-foreground" />
                    )}
                  </div>
                  <h3 className="mt-3 font-semibold">{achievement.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                  {achievement.earned && (
                    <Badge className="mt-3 bg-green-100 text-green-700">Earned</Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
