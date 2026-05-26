"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Anchor,
  LayoutDashboard,
  Route,
  GitCompare,
  Share2,
  Users,
  BookOpen,
  Settings,
  LogOut,
  GraduationCap,
  Newspaper,
  UserRoundSearch,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Overview", href: "/dashboard/parent", icon: LayoutDashboard },
  { name: "Career Pulse", href: "/dashboard/parent/pulse", icon: Newspaper },
  { name: "Career Roadmap", href: "/dashboard/parent/roadmap", icon: Route },
  { name: "College Duel", href: "/dashboard/parent/compare", icon: GitCompare },
  { name: "Advisors", href: "/dashboard/parent/advisors", icon: UserRoundSearch },
  { name: "Share Summary", href: "/dashboard/parent/share", icon: Share2 },
  { name: "Community", href: "/dashboard/parent/community", icon: Users },
  { name: "Resources", href: "/dashboard/parent/resources", icon: BookOpen },
]

export function DashboardSidebar() {
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
              href="/dashboard/parent/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground/70 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground"
            >
              <Settings className="h-5 w-5" />
              Settings
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
