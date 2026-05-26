import { StudentSidebar } from "@/components/dashboard/student-sidebar"
import { DashboardHeader } from "@/components/dashboard/header"

export default function StudentDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <StudentSidebar />
      <div className="lg:pl-64">
        <DashboardHeader userType="student" />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
