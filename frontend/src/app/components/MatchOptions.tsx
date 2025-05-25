"use client"

import { Button } from "@/components/ui/button"
import { UserPlus, Users } from "lucide-react"

export default function MatchOptions() {
  const handleFriendMatch = () => {
    // Logic for starting a friend match
    console.log("Starting a friend match")
  }

  const handleRandomMatch = () => {
    // Logic for starting a random match
    console.log("Starting a random match")
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Choose Your Match</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
          <Button size="lg" onClick={handleFriendMatch} className="flex items-center">
            <UserPlus className="mr-2" />
            Play with a Friend
          </Button>
          <Button size="lg" onClick={handleRandomMatch} variant="secondary" className="flex items-center">
            <Users className="mr-2" />
            Random Online Match
          </Button>
        </div>
      </div>
    </section>
  )
}
