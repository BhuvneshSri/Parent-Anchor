"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Anchor,
  LayoutDashboard,
  Compass,
  Lightbulb,
  Target,
  BookOpen,
  MessageCircle,
  Settings,
  LogOut,
  GraduationCap,
  Sparkles,
  Newspaper,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "My Dashboard", href: "/dashboard/student", icon: LayoutDashboard },
  { name: "Career Pulse", href: "/dashboard/student/pulse", icon: Newspaper },
  { name: "Explore Careers", href: "/dashboard/student/explore", icon: Compass },
  { name: "Skill Assessment", href: "/dashboard/student/assessment", icon: Target },
  { name: "My Interests", href: "/dashboard/student/interests", icon: Lightbulb },
  { name: "Learning Path", href: "/dashboard/student/learning", icon: BookOpen },
  { name: "AI Mentor", href: "/dashboard/student/mentor", icon: Sparkles },
]

export function StudentSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 border-r border-sidebar-border bg-sidebar lg:block">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary">
            <Anchor className="h-4 w-4 text-sidebar-primary-foreground" />
          </div>
          <span className="text-lg font-semibold text-sidebar-foreground">ParentAnchor</span>
        </div>

        {/* User Card */}
        <div className="border-b border-sidebar-border p-4">
          <div className="rounded-lg bg-sidebar-accent p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sidebar-primary text-sidebar-primary-foreground">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-sidebar-foreground">Rahul Sharma</p>
                <p className="text-xs text-sidebar-foreground/70">Class 11 • Science</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-sidebar-border p-4">
          <div className="space-y-1">
            <Link
              href="/dashboard/student/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground/70 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground"
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
            <Link
              href="/dashboard/parent"
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground/70 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground"
            >
              <MessageCircle className="h-5 w-5" />
              Parent View
            </Link>
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 px-3 text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
            >
              <LogOut className="h-5 w-5" />
              Log Out
            </Button>
          </div>
        </div>
      </div>
    </aside>
  )
}
