import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-background py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          CodeDuel
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/challenges" className="text-foreground hover:text-primary">
                Challenges
              </Link>
            </li>
            <li>
              <Link href="/leaderboard" className="text-foreground hover:text-primary">
                Leaderboard
              </Link>
            </li>
            <li>
              <Link href="/profile" className="text-foreground hover:text-primary">
                Profile
              </Link>
            </li>
          </ul>
        </nav>
        <Button>Sign In</Button>
      </div>
    </header>
  )
}
