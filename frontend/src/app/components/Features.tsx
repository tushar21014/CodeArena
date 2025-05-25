import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Code, Trophy, Clock, Brain } from "lucide-react"

const features = [
  {
    title: "Real-time Coding",
    description: "Code and see your opponent's progress in real-time",
    icon: Code,
  },
  {
    title: "Competitive Ranking",
    description: "Climb the leaderboard and prove your skills",
    icon: Trophy,
  },
  {
    title: "Timed Challenges",
    description: "Race against the clock to solve problems faster",
    icon: Clock,
  },
  {
    title: "Diverse Problem Sets",
    description: "Tackle a wide range of DSA challenges",
    icon: Brain,
  },
]

export default function Features() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-10 h-10 mb-4 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
