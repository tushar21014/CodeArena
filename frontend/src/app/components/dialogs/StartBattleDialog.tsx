"use client"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Swords } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function StartBattleDialog() {
  const router = useRouter()

  const handleSelectMode = (mode: string) => {
    localStorage.setItem("battle-mode", mode)

    // If you want to route after setting the mode
    if (mode === "speed") {
      router.push("/game") // Navigate to battle game
    } else if(mode === "efficiency") {
      router.push("/game/efficiency") // Navigate to efficiency battle
    } else if(mode === "blind") {
      router.push("/game/blind") // Navigate to blind mode
    }
    // Add routing for other modes if needed
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0 w-full"
        >
          <Swords className="mr-2 h-5 w-5" />
          Start a Battle
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Select Battle Mode</DialogTitle>
          <DialogDescription>
            Choose between Speed Battle and Efficiency Battle. Get ready to crush your opponent!
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col space-y-3 mt-4">
          <Button variant="outline" className="w-full" onClick={() => handleSelectMode("speed")}>
            Speed Battle (First to Solve)
          </Button>
          <Button variant="outline" onClick={() => handleSelectMode("efficiency")}>
            Efficiency Battle (Best TC/SC)
          </Button>
          <Button variant="outline" onClick={() => handleSelectMode("blind")}>
            Blind Mode (Solve without testcases)
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
