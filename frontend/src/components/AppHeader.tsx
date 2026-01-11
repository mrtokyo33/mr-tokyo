import { Separator } from "@/components/ui/separator"
import { useAuth } from "@/lib/useAuth"
import { UserMenuGuest } from "@/components/UserMenuGuest"
import { UserMenuAuthenticated } from "@/components/UserMenuAuthenticated"

import {
  FileText,
  FolderKanban,
  User,
  Terminal,
} from "lucide-react"
import { Languages } from "lucide-react"

import { Link } from "react-router-dom"

export function AppHeader() {
  const { isAuthenticated, login, logout } = useAuth()

  return (
    <header className="w-full border-b bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3 focus:outline-none">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Terminal className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight">
            MR TOKYO
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link to="/" className="flex items-center gap-2 hover:text-foreground transition">
            <Terminal className="h-4 w-4" />
            Home
          </Link>

          <Link to="/articles" className="flex items-center gap-2 hover:text-foreground transition">
            <FileText className="h-4 w-4" />
            Articles
          </Link>

          <Link to="/projects" className="flex items-center gap-2 hover:text-foreground transition">
            <FolderKanban className="h-4 w-4" />
            Projects
          </Link>

          <Link to="/about" className="flex items-center gap-2 hover:text-foreground transition">
            <User className="h-4 w-4" />
            About
          </Link>

          <Link to="/japanese" className="flex items-center gap-2 hover:text-foreground transition">
            <Languages className="h-4 w-4" />
            Japanese
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Separator orientation="vertical" className="h-6" />

          {isAuthenticated ? (
            <UserMenuAuthenticated onLogout={logout} />
          ) : (
            <UserMenuGuest onLogin={login} />
          )}
        </div>
      </div>
    </header>
  )
}
