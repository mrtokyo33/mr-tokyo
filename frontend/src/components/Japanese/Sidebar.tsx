import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function Sidebar() {
  return (
    <nav className="w-full flex flex-col gap-3">
      <Link to="/japanese/kana">
        <Button className="w-full bg-background text-muted-foreground hover:scale-105 transform transition">Kana</Button>
      </Link>

      <Link to="/japanese/kanji">
        <Button className="w-full bg-background text-muted-foreground hover:scale-105 transform transition">Kanji</Button>
      </Link>

      <div className="pt-4">
        <Button className="w-full bg-violet-600 hover:bg-violet-700">Japanese Log</Button>
      </div>
    </nav>
  )
}
