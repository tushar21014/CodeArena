import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Trophy,
  Swords,
  Users,
  Zap,
  Code,
  BrainCircuit,
  ArrowRight,
  CheckCircle,
  Github,
  BookOpen,
  BarChart3,
  Clock,
  Terminal,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from 'next/navigation';


export default function LoggedOutHome() {
    const Router = useRouter();
    
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <BrainCircuit className="h-8 w-8 text-purple-500" />
              <span className="font-bold text-xl">CodeArena</span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/problems"
                className="flex items-center space-x-1 text-gray-400 hover:text-purple-400 transition"
              >
                <Code className="h-5 w-5" />
                <span>Problems</span>
              </Link>
              <Link
                href="/battles"
                className="flex items-center space-x-1 text-gray-400 hover:text-purple-400 transition"
              >
                <Swords className="h-5 w-5" />
                <span>Battles</span>
              </Link>
              <Link
                href="/leaderboard"
                className="flex items-center space-x-1 text-gray-400 hover:text-purple-400 transition"
              >
                <Trophy className="h-5 w-5" />
                <span>Leaderboard</span>
              </Link>
              <Link
                href="/about"
                className="flex items-center space-x-1 text-gray-400 hover:text-purple-400 transition"
              >
                <Users className="h-5 w-5" />
                <span>About</span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">

              <Button variant="ghost" onClick={() => {Router.push('/login')}} className="text-gray-300 hover:text-white hover:bg-gray-800">
                Log in
              </Button>
              <Button onClick={() => {Router.push('/signup')}} className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-8">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-900 to-indigo-900 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 relative z-10">
                <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 px-3 py-1 mb-4">
                  Competitive Coding Platform
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Battle Your Way to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    DSA Mastery
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-6">
                  Challenge opponents, solve algorithmic puzzles, and climb the ranks in real-time coding duels.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0"
                  >
                    <Swords className="mr-2 h-5 w-5" />
                    Get Started Free
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400/10"
                  >
                    <BrainCircuit className="mr-2 h-5 w-5" />
                    Explore Problems
                  </Button>
                </div>
              </div>

              <div className="md:w-1/2 relative">
                <div className="bg-gray-800/70 border border-gray-700 rounded-lg p-4 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="ml-4 text-sm text-gray-400">twoSum.js</div>
                  </div>
                  <pre className="text-sm font-mono overflow-x-auto">
                    <code className="language-javascript">
                      <span className="text-pink-400">function</span> <span className="text-blue-400">twoSum</span>
                      <span className="text-white">(</span>
                      <span className="text-orange-300">nums</span>
                      <span className="text-white">, </span>
                      <span className="text-orange-300">target</span>
                      <span className="text-white">) {"{"}</span>
                      <br />
                      <span className="text-white">{"  "}</span>
                      <span className="text-pink-400">const</span> <span className="text-blue-300">map</span>{" "}
                      <span className="text-pink-400">=</span> <span className="text-pink-400">new</span>{" "}
                      <span className="text-blue-400">Map</span>
                      <span className="text-white">();</span>
                      <br />
                      <span className="text-white">{"  "}</span>
                      <span className="text-pink-400">for</span> <span className="text-white">(</span>
                      <span className="text-pink-400">let</span> <span className="text-blue-300">i</span>{" "}
                      <span className="text-pink-400">=</span> <span className="text-purple-300">0</span>
                      <span className="text-white">; i </span>
                      <span className="text-pink-400">&lt;</span>
                      <span className="text-white"> nums.length; i</span>
                      <span className="text-pink-400">++</span>
                      <span className="text-white">) {"{"}</span>
                      <br />
                      <span className="text-white">{"    "}</span>
                      <span className="text-pink-400">const</span> <span className="text-blue-300">complement</span>{" "}
                      <span className="text-pink-400">=</span> <span className="text-blue-300">target</span>{" "}
                      <span className="text-pink-400">-</span> <span className="text-blue-300">nums</span>
                      <span className="text-white">[i];</span>
                      <br />
                      <span className="text-white">{"    "}</span>
                      <span className="text-pink-400">if</span>{" "}
                      <span className="text-white">(map.has(complement)) {"{"}</span>
                      <br />
                      <span className="text-white">{"      "}</span>
                      <span className="text-pink-400">return</span>{" "}
                      <span className="text-white">[map.get(complement), i];</span>
                      <br />
                      <span className="text-white">{"    }"}</span>
                      <br />
                      <span className="text-white">{"    "}map.set(nums[i], i);</span>
                      <br />
                      <span className="text-white">{"  }"}</span>
                      <br />
                      <span className="text-white">{"  "}</span>
                      <span className="text-pink-400">return</span> <span className="text-white">[];</span>
                      <br />
                      <span className="text-white">{"}"}</span>
                    </code>
                  </pre>
                  <div className="mt-4 flex justify-between items-center">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Easy</Badge>
                    <div className="text-sm text-gray-400">Time: O(n) | Space: O(n)</div>
                  </div>
                </div>
                <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-purple-500/10 rounded-lg"></div>
                <div className="absolute -z-20 -top-8 -right-8 w-full h-full bg-indigo-500/5 rounded-lg"></div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-64 w-64 rounded-full bg-indigo-600/20 blur-3xl"></div>
            <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 h-32 w-32 rounded-full bg-cyan-600/20 blur-2xl"></div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Problems</p>
                <p className="text-2xl font-bold">1,500+</p>
              </div>
              <Code className="h-10 w-10 text-purple-500" />
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Active Users</p>
                <p className="text-2xl font-bold">50K+</p>
              </div>
              <Users className="h-10 w-10 text-blue-500" />
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Battles</p>
                <p className="text-2xl font-bold">100K+</p>
              </div>
              <Swords className="h-10 w-10 text-green-500" />
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Competitions</p>
                <p className="text-2xl font-bold">24/7</p>
              </div>
              <Trophy className="h-10 w-10 text-yellow-500" />
            </CardContent>
          </Card>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose CodeArena?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our platform combines competitive programming with real-time battles to create an engaging learning
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 backdrop-blur-sm hover:shadow-purple-500/10 hover:border-purple-500/50 transition-all group">
              <CardHeader>
                <div className="p-3 rounded-full bg-purple-500/10 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-all">
                  <Swords className="h-6 w-6 text-purple-400" />
                </div>
                <CardTitle>Real-time Battles</CardTitle>
                <CardDescription className="text-gray-400">
                  Challenge friends or random opponents to coding duels and solve problems head-to-head.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 backdrop-blur-sm hover:shadow-blue-500/10 hover:border-blue-500/50 transition-all group">
              <CardHeader>
                <div className="p-3 rounded-full bg-blue-500/10 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-all">
                  <BrainCircuit className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle>Skill Development</CardTitle>
                <CardDescription className="text-gray-400">
                  Improve your DSA skills with problems ranging from easy to hard across various categories.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 backdrop-blur-sm hover:shadow-green-500/10 hover:border-green-500/50 transition-all group">
              <CardHeader>
                <div className="p-3 rounded-full bg-green-500/10 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-all">
                  <Trophy className="h-6 w-6 text-green-400" />
                </div>
                <CardTitle>Competitive Ranking</CardTitle>
                <CardDescription className="text-gray-400">
                  Climb the global leaderboard and earn badges as you win battles and solve problems.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 backdrop-blur-sm hover:shadow-amber-500/10 hover:border-amber-500/50 transition-all group">
              <CardHeader>
                <div className="p-3 rounded-full bg-amber-500/10 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-all">
                  <Clock className="h-6 w-6 text-amber-400" />
                </div>
                <CardTitle>Timed Challenges</CardTitle>
                <CardDescription className="text-gray-400">
                  Test your speed and efficiency with timed coding challenges and competitions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 backdrop-blur-sm hover:shadow-cyan-500/10 hover:border-cyan-500/50 transition-all group">
              <CardHeader>
                <div className="p-3 rounded-full bg-cyan-500/10 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-all">
                  <Users className="h-6 w-6 text-cyan-400" />
                </div>
                <CardTitle>Team Competitions</CardTitle>
                <CardDescription className="text-gray-400">
                  Form or join clans to participate in team-based tournaments and competitions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 backdrop-blur-sm hover:shadow-pink-500/10 hover:border-pink-500/50 transition-all group">
              <CardHeader>
                <div className="p-3 rounded-full bg-pink-500/10 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-pink-500/20 transition-all">
                  <BarChart3 className="h-6 w-6 text-pink-400" />
                </div>
                <CardTitle>Performance Analytics</CardTitle>
                <CardDescription className="text-gray-400">
                  Track your progress with detailed statistics and performance metrics.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Get started with CodeArena in just a few simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-gray-800/70 border border-gray-700 rounded-lg p-6 relative z-10">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Create an Account</h3>
                <p className="text-gray-300">
                  Sign up for free and set up your coding profile with your preferred programming languages.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-16 h-0.5 bg-gray-700 -translate-y-1/2 z-0">
                <ArrowRight className="absolute top-1/2 right-0 h-4 w-4 text-gray-700 -translate-y-1/2" />
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-800/70 border border-gray-700 rounded-lg p-6 relative z-10">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Practice or Battle</h3>
                <p className="text-gray-300">
                  Solve problems in practice mode or challenge others to real-time coding battles.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-16 h-0.5 bg-gray-700 -translate-y-1/2 z-0">
                <ArrowRight className="absolute top-1/2 right-0 h-4 w-4 text-gray-700 -translate-y-1/2" />
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-800/70 border border-gray-700 rounded-lg p-6 relative z-10">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Improve & Compete</h3>
                <p className="text-gray-300">
                  Track your progress, climb the leaderboard, and participate in tournaments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Problem Categories</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore a wide range of DSA problems across different categories and difficulty levels
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="font-bold mb-1">Arrays & Strings</h3>
                <p className="text-sm text-gray-400">350+ problems</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                  <Terminal className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="font-bold mb-1">Linked Lists</h3>
                <p className="text-sm text-gray-400">200+ problems</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="font-bold mb-1">Trees & Graphs</h3>
                <p className="text-sm text-gray-400">280+ problems</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-amber-500/50 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="font-bold mb-1">Dynamic Programming</h3>
                <p className="text-sm text-gray-400">250+ problems</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400/10">
              View All Categories
            </Button>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Join thousands of developers who are improving their DSA skills through competitive coding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-purple-700">JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Jane Developer</p>
                    <p className="text-sm text-gray-400">Software Engineer</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "CodeArena helped me prepare for technical interviews in a fun and engaging way. The competitive
                  aspect pushed me to improve my problem-solving skills."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-blue-700">MP</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Mark Programmer</p>
                    <p className="text-sm text-gray-400">CS Student</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "As a student, I found the platform incredibly helpful for understanding complex algorithms. The
                  real-time battles make learning DSA actually enjoyable!"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-green-700">SC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Sarah Coder</p>
                    <p className="text-sm text-gray-400">Tech Lead</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "I recommend CodeArena to everyone on my team. It's a great way to keep your algorithmic skills sharp
                  while having fun competing with others."
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-64 w-64 rounded-full bg-indigo-600/20 blur-3xl"></div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Level Up Your Coding Skills?</h2>
              <p className="text-xl text-gray-200 mb-8">
                Join thousands of developers who are improving their DSA skills through competitive coding on CodeArena.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0"
                >
                  Sign Up Free
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-white hover:bg-white/10">
                  <Github className="mr-2 h-5 w-5" />
                  Continue with GitHub
                </Button>
              </div>
              <p className="text-sm text-gray-300 mt-4">No credit card required • Free tier available</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800 pt-10 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/problems" className="text-gray-400 hover:text-purple-400 transition">
                    Problems
                  </Link>
                </li>
                <li>
                  <Link href="/battles" className="text-gray-400 hover:text-purple-400 transition">
                    Battles
                  </Link>
                </li>
                <li>
                  <Link href="/leaderboard" className="text-gray-400 hover:text-purple-400 transition">
                    Leaderboard
                  </Link>
                </li>
                <li>
                  <Link href="/tournaments" className="text-gray-400 hover:text-purple-400 transition">
                    Tournaments
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tutorials" className="text-gray-400 hover:text-purple-400 transition">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="text-gray-400 hover:text-purple-400 transition">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-purple-400 transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-purple-400 transition">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-purple-400 transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-purple-400 transition">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-purple-400 transition">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-purple-400 transition">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="https://twitter.com" className="text-gray-400 hover:text-purple-400 transition">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com" className="text-gray-400 hover:text-purple-400 transition">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="https://discord.com" className="text-gray-400 hover:text-purple-400 transition">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="https://linkedin.com" className="text-gray-400 hover:text-purple-400 transition">
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <BrainCircuit className="h-6 w-6 text-purple-500" />
              <span className="font-bold text-lg">CodeArena</span>
            </div>
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} CodeArena. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}
