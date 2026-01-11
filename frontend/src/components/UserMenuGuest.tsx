import { Button } from "@/components/ui/button"
import { LogIn } from "lucide-react"

interface UserMenuGuestProps {
  onLogin: () => void
}

export function UserMenuGuest({ onLogin }: UserMenuGuestProps) {
  return (
    <Button
      size="sm"
      onClick={onLogin}
      className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
    >
      <LogIn className="h-4 w-4" />
      Login
    </Button>
  )
}
