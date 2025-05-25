"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  Trophy,
  Swords,
  Users,
  Zap,
  Activity,
  BarChart3,
  Clock,
  User,
  Award,
  Flame,
  Code,
  BrainCircuit,
  Settings,
  Edit,
  Shield,
  Star,
  Calendar,
  BookOpen,
  TrendingUp,
  ChevronRight,
  MessageSquare,
  UserPlus,
  CheckCircle2,
  XCircle,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Lock,
  Eye,
  Bell,
  LogOut,
  Search,
  ExternalLink,
  Hash,
  Sparkles,
  Target,
  Hexagon,
  Cpu,
  Database,
  Layers,
  GitBranch,
  Gauge,
  Puzzle,
  Workflow,
  Repeat,
  Hourglass,
  Medal,
  Crown,
  Milestone,
  Maximize,
  Rotate3dIcon as Rotate,
  Rotate3dIcon as Rotate,
  MessagesSquareIcon as Messages,
  WebcamIcon as Chat,
  WebcamIcon as Chat,
  WebcamIcon as Chat,
  FlashlightIcon as Flash,
} from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("activity")

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 text-white">
      {/* Navigation Bar - Reusing the same nav from the homepage */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-t border-gray-800 md:top-0 md:bottom-auto md:border-t-0 md:border-b md:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <BrainCircuit className="h-8 w-8 text-purple-500" />
              <span className="font-bold text-xl hidden md:inline-block">CodeArena</span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="flex items-center space-x-1 text-gray-400 hover:text-purple-400 transition">
                <span>Home</span>
              </Link>
              <Link
                href="/battles"
                className="flex items-center space-x-1 text-gray-400 hover:text-purple-400 transition"
              >
                <span>Battles</span>
              </Link>
              <Link
                href="/clans"
                className="flex items-center space-x-1 text-gray-400 hover:text-purple-400 transition"
              >
                <span>Clans</span>
              </Link>
              <Link
                href="/leaderboard"
                className="flex items-center space-x-1 text-gray-400 hover:text-purple-400 transition"
              >
                <span>Leaderboard</span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500 px-3 py-1">
                <Flame className="h-4 w-4 mr-1" />
                <span>Level 42</span>
              </Badge>
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-purple-700">JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-8 pb-20 md:pt-24 md:pb-8">
        {/* Profile Header */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-3xl blur-3xl opacity-50"></div>
          <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 overflow-hidden backdrop-blur-sm relative z-10 rounded-3xl shadow-xl">
            {/* Header Background with Animated Particles */}
            <div className="h-48 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] opacity-20 bg-cover bg-center"></div>

              {/* Animated Hexagon Grid Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full bg-purple-500/30"
                      style={{
                        width: `${Math.random() * 50 + 10}px`,
                        height: `${Math.random() * 50 + 10}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `pulse ${Math.random() * 3 + 2}s infinite alternate ${Math.random() * 2}s`,
                      }}
                    />
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="absolute top-4 right-4 border-gray-600 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>

            <CardContent className="pt-0 pb-6 relative">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 -mt-16 relative">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full opacity-75 group-hover:opacity-100 blur group-hover:blur-md transition duration-1000"></div>
                  <Avatar className="h-32 w-32 border-4 border-gray-900 rounded-full relative">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-purple-700 text-3xl">JD</AvatarFallback>
                  </Avatar>
                </div>

                <div className="flex-1 mt-4 md:mt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center">
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                          John Doe
                        </h1>
                        <Badge className="ml-3 bg-purple-500/20 text-purple-400 border-purple-500">
                          <Hexagon className="h-3 w-3 mr-1 text-purple-400" />
                          Verified
                        </Badge>
                      </div>
                      <p className="text-gray-400 flex items-center">
                        <Hash className="h-4 w-4 mr-1 text-gray-500" />
                        <span>codingmaster</span>
                      </p>

                      <div className="flex items-center flex-wrap mt-3 gap-2">
                        <Badge className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500 backdrop-blur-sm">
                          <Trophy className="h-3 w-3 mr-1" />
                          Elite II
                        </Badge>
                        <Badge className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500 backdrop-blur-sm">
                          <Shield className="h-3 w-3 mr-1" />
                          Algorithm Avengers
                        </Badge>
                        <Badge className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500 backdrop-blur-sm">
                          <Flame className="h-3 w-3 mr-1" />7 Day Streak
                        </Badge>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-700 hover:bg-gray-700/50 transition-all duration-300"
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Message
                      </Button>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
                      >
                        <UserPlus className="h-4 w-4 mr-2" />
                        Add Friend
                      </Button>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-3 transition-all hover:bg-gray-800/70 hover:border-purple-500/30 group">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center mr-3 group-hover:from-purple-500/30 group-hover:to-indigo-500/30 transition-all">
                          <Trophy className="h-5 w-5 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Global Rank</p>
                          <p className="font-bold text-xl">#128</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-3 transition-all hover:bg-gray-800/70 hover:border-blue-500/30 group">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mr-3 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all">
                          <Code className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Problems Solved</p>
                          <p className="font-bold text-xl">247</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-3 transition-all hover:bg-gray-800/70 hover:border-green-500/30 group">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mr-3 group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all">
                          <Swords className="h-5 w-5 text-green-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Win Rate</p>
                          <p className="font-bold text-xl">68%</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-3 transition-all hover:bg-gray-800/70 hover:border-amber-500/30 group">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center mr-3 group-hover:from-amber-500/30 group-hover:to-orange-500/30 transition-all">
                          <Zap className="h-5 w-5 text-amber-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Battle Points</p>
                          <p className="font-bold text-xl">12,450</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Profile Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* About */}
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm overflow-hidden rounded-xl shadow-lg hover:shadow-purple-900/10 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl"></div>

              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-xl">
                  <User className="h-5 w-5 text-purple-500 mr-2" />
                  About
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  Passionate coder with 5+ years of experience in algorithms and data structures. Specializing in
                  dynamic programming and graph algorithms. Always looking for challenging problems to solve.
                </p>

                <div className="mt-4 pt-4 border-t border-gray-700/50">
                  <div className="space-y-3">
                    <div className="flex items-center group">
                      <div className="h-8 w-8 rounded-lg bg-gray-800 flex items-center justify-center mr-3 group-hover:bg-gray-700 transition-all">
                        <Calendar className="h-4 w-4 text-gray-400" />
                      </div>
                      <span className="text-sm">Joined March 2022</span>
                    </div>
                    <div className="flex items-center group">
                      <div className="h-8 w-8 rounded-lg bg-gray-800 flex items-center justify-center mr-3 group-hover:bg-gray-700 transition-all">
                        <BookOpen className="h-4 w-4 text-gray-400" />
                      </div>
                      <span className="text-sm">Computer Science @ Tech University</span>
                    </div>
                    <div className="flex items-center group">
                      <div className="h-8 w-8 rounded-lg bg-gray-800 flex items-center justify-center mr-3 group-hover:bg-gray-700 transition-all">
                        <Clock className="h-4 w-4 text-gray-400" />
                      </div>
                      <span className="text-sm">Last active: 2 hours ago</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-700/50">
                  <p className="text-sm text-gray-400 mb-3">Connect with me:</p>
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 rounded-lg border-gray-700 bg-gray-800/50 hover:bg-gray-700/70 hover:border-purple-500/50 transition-all"
                    >
                      <Github className="h-5 w-5 text-gray-400" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 rounded-lg border-gray-700 bg-gray-800/50 hover:bg-gray-700/70 hover:border-blue-500/50 transition-all"
                    >
                      <Linkedin className="h-5 w-5 text-gray-400" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 rounded-lg border-gray-700 bg-gray-800/50 hover:bg-gray-700/70 hover:border-cyan-500/50 transition-all"
                    >
                      <Twitter className="h-5 w-5 text-gray-400" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 rounded-lg border-gray-700 bg-gray-800/50 hover:bg-gray-700/70 hover:border-red-500/50 transition-all"
                    >
                      <Mail className="h-5 w-5 text-gray-400" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm overflow-hidden rounded-xl shadow-lg hover:shadow-purple-900/10 transition-all duration-300">
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl"></div>

              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-xl">
                  <BrainCircuit className="h-5 w-5 text-purple-500 mr-2" />
                  Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400 flex items-center">
                      <Cpu className="h-4 w-4 mr-1 text-purple-400" />
                      Algorithm Mastery
                    </span>
                    <span className="text-sm font-medium">78%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      style={{ width: "78%" }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400 flex items-center">
                      <Database className="h-4 w-4 mr-1 text-green-400" />
                      Data Structures
                    </span>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                      style={{ width: "65%" }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400 flex items-center">
                      <Puzzle className="h-4 w-4 mr-1 text-amber-400" />
                      Problem Solving
                    </span>
                    <span className="text-sm font-medium">82%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"
                      style={{ width: "82%" }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400 flex items-center">
                      <Workflow className="h-4 w-4 mr-1 text-red-400" />
                      Dynamic Programming
                    </span>
                    <span className="text-sm font-medium">91%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                      style={{ width: "91%" }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400 flex items-center">
                      <GitBranch className="h-4 w-4 mr-1 text-cyan-400" />
                      Graph Algorithms
                    </span>
                    <span className="text-sm font-medium">73%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      style={{ width: "73%" }}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-gray-700 text-gray-300 hover:bg-gray-700/50 hover:border-purple-500/30 transition-all"
                >
                  <Target className="h-4 w-4 mr-2" />
                  View Skill Assessment
                </Button>
              </CardFooter>
            </Card>

            {/* Clan */}
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm overflow-hidden rounded-xl shadow-lg hover:shadow-purple-900/10 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl"></div>

              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-xl">
                  <Shield className="h-5 w-5 text-purple-500 mr-2" />
                  Clan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-4 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 p-3 rounded-xl border border-blue-500/30">
                  <Avatar className="h-14 w-14 rounded-lg border-2 border-blue-500 mr-4 shadow-lg shadow-blue-500/20">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-gradient-to-br from-blue-600 to-indigo-600 text-lg">
                      AA
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                      Algorithm Avengers
                    </h3>
                    <p className="text-xs text-gray-400">Member since June 2022</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center bg-gray-900/50 p-2 rounded-lg">
                    <span className="text-gray-400 flex items-center">
                      <Trophy className="h-4 w-4 mr-2 text-yellow-500" />
                      Clan Rank:
                    </span>
                    <span className="font-medium text-yellow-400">#3 Global</span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-900/50 p-2 rounded-lg">
                    <span className="text-gray-400 flex items-center">
                      <Crown className="h-4 w-4 mr-2 text-purple-400" />
                      Your Role:
                    </span>
                    <span className="font-medium text-purple-400">Senior Member</span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-900/50 p-2 rounded-lg">
                    <span className="text-gray-400 flex items-center">
                      <Zap className="h-4 w-4 mr-2 text-blue-400" />
                      Contribution:
                    </span>
                    <span className="font-medium text-blue-400">32 wins (15%)</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-700/50">
                  <h4 className="text-sm font-medium mb-3 flex items-center">
                    <Swords className="h-4 w-4 mr-2 text-purple-400" />
                    Upcoming Clan Battles:
                  </h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-gradient-to-r from-gray-900/70 to-gray-800/70 rounded-lg border border-gray-700/70 text-sm relative overflow-hidden group hover:border-purple-500/30 transition-all">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 to-indigo-900/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium flex items-center">
                          <Shield className="h-4 w-4 mr-2 text-blue-400" />
                          vs. Binary Force
                        </span>
                        <span className="text-gray-400 flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          Tomorrow, 8PM
                        </span>
                      </div>
                      <Badge className="bg-purple-500/20 text-purple-400 border-purple-500">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Participating
                      </Badge>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-gray-900/70 to-gray-800/70 rounded-lg border border-gray-700/70 text-sm relative overflow-hidden group hover:border-purple-500/30 transition-all">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 to-indigo-900/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium flex items-center">
                          <Shield className="h-4 w-4 mr-2 text-cyan-400" />
                          vs. Tree Surgeons
                        </span>
                        <span className="text-gray-400 flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Sat, 10PM
                        </span>
                      </div>
                      <Badge className="bg-gray-500/20 text-gray-400 border-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        Not Registered
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
                  <Shield className="h-4 w-4 mr-2" />
                  View Clan Dashboard
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Middle Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs for different sections */}
            <Tabs defaultValue="activity" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="bg-gray-800/70 border border-gray-700 p-1 w-full grid grid-cols-4 rounded-xl">
                <TabsTrigger
                  value="activity"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-900/50 data-[state=active]:to-indigo-900/50 data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  <Activity className="h-4 w-4 mr-2" />
                  Activity
                </TabsTrigger>
                <TabsTrigger
                  value="battles"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-900/50 data-[state=active]:to-indigo-900/50 data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  <Swords className="h-4 w-4 mr-2" />
                  Battles
                </TabsTrigger>
                <TabsTrigger
                  value="achievements"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-900/50 data-[state=active]:to-indigo-900/50 data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  <Award className="h-4 w-4 mr-2" />
                  Achievements
                </TabsTrigger>
                <TabsTrigger
                  value="friends"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-900/50 data-[state=active]:to-indigo-900/50 data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Friends
                </TabsTrigger>
              </TabsList>

              {/* Activity Tab */}
              <TabsContent value="activity" className="mt-6 space-y-6">
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm overflow-hidden rounded-xl shadow-lg">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl"></div>

                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-xl">
                      <Activity className="h-5 w-5 text-purple-500 mr-2" />
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    {/* Activity Item 1 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 flex flex-col items-center">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center shadow-lg shadow-green-500/10">
                          <Trophy className="h-5 w-5 text-green-400" />
                        </div>
                        <div className="h-full w-0.5 bg-gradient-to-b from-green-500/50 to-transparent my-2"></div>
                      </div>
                      <div className="flex-1">
                        <div className="bg-gradient-to-r from-gray-900/70 to-gray-800/70 rounded-xl border border-gray-700/70 p-4 hover:border-green-500/30 transition-all shadow-md">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-medium text-green-400">Won a Battle</h3>
                            <span className="text-xs text-gray-400 flex items-center">
                              <Clock className="h-3 w-3 mr-1" />2 hours ago
                            </span>
                          </div>
                          <p className="text-sm text-gray-300 mb-2">
                            Defeated <span className="text-green-400 font-medium">DataDragon</span> in a Binary Tree
                            Traversal challenge.
                          </p>
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-gray-400 flex items-center">
                              <Hourglass className="h-3 w-3 mr-1" />
                              Completed in 5:42
                            </span>
                            <span className="text-green-400 font-medium flex items-center">
                              <Zap className="h-3 w-3 mr-1" />
                              +125 points
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Activity Item 2 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 flex flex-col items-center">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center shadow-lg shadow-blue-500/10">
                          <Award className="h-5 w-5 text-blue-400" />
                        </div>
                        <div className="h-full w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent my-2"></div>
                      </div>
                      <div className="flex-1">
                        <div className="bg-gradient-to-r from-gray-900/70 to-gray-800/70 rounded-xl border border-gray-700/70 p-4 hover:border-blue-500/30 transition-all shadow-md">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-medium text-blue-400">Earned a Badge</h3>
                            <span className="text-xs text-gray-400 flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              Yesterday
                            </span>
                          </div>
                          <p className="text-sm text-gray-300 mb-2">
                            Earned the <span className="text-blue-400 font-medium">Graph Master</span> badge for solving
                            50 graph-related problems.
                          </p>
                          <div className="flex justify-between items-center">
                            <Badge className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500">
                              <Award className="h-3 w-3 mr-1" />
                              Graph Master
                            </Badge>
                            <span className="text-blue-400 font-medium text-xs flex items-center">
                              <Zap className="h-3 w-3 mr-1" />
                              +200 points
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Activity Item 3 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 flex flex-col items-center">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center shadow-lg shadow-purple-500/10">
                          <Shield className="h-5 w-5 text-purple-400" />
                        </div>
                        <div className="h-full w-0.5 bg-gradient-to-b from-purple-500/50 to-transparent my-2"></div>
                      </div>
                      <div className="flex-1">
                        <div className="bg-gradient-to-r from-gray-900/70 to-gray-800/70 rounded-xl border border-gray-700/70 p-4 hover:border-purple-500/30 transition-all shadow-md">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-medium text-purple-400">Clan Victory</h3>
                            <span className="text-xs text-gray-400 flex items-center">
                              <Clock className="h-3 w-3 mr-1" />2 days ago
                            </span>
                          </div>
                          <p className="text-sm text-gray-300 mb-2">
                            Your clan <span className="text-purple-400 font-medium">Algorithm Avengers</span> defeated{" "}
                            <span className="text-gray-400">Binary Force</span> in a team battle.
                          </p>
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-gray-400 flex items-center">
                              <Code className="h-3 w-3 mr-1" />
                              Contributed 2 problem solutions
                            </span>
                            <span className="text-purple-400 font-medium flex items-center">
                              <Zap className="h-3 w-3 mr-1" />
                              +350 clan points
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Activity Item 4 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 flex flex-col items-center">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-500/20 to-yellow-500/20 flex items-center justify-center shadow-lg shadow-amber-500/10">
                          <TrendingUp className="h-5 w-5 text-amber-400" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="bg-gradient-to-r from-gray-900/70 to-gray-800/70 rounded-xl border border-gray-700/70 p-4 hover:border-amber-500/30 transition-all shadow-md">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-medium text-amber-400">Rank Increased</h3>
                            <span className="text-xs text-gray-400 flex items-center">
                              <Clock className="h-3 w-3 mr-1" />3 days ago
                            </span>
                          </div>
                          <p className="text-sm text-gray-300 mb-2">
                            Promoted to <span className="text-amber-400 font-medium">Elite II</span> rank after winning
                            5 consecutive battles.
                          </p>
                          <div className="flex justify-between items-center">
                            <Badge className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-400 border-amber-500">
                              <Trophy className="h-3 w-3 mr-1" />
                              Elite II
                            </Badge>
                            <span className="text-amber-400 font-medium text-xs flex items-center">
                              <Sparkles className="h-3 w-3 mr-1" />
                              New perks unlocked
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full border-gray-700 text-gray-300 hover:bg-gray-700/50 hover:border-purple-500/30 transition-all"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View All Activity
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              {/* Battles Tab */}
              <TabsContent value="battles" className="mt-6 space-y-6">
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm overflow-hidden rounded-xl shadow-lg">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl"></div>

                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-xl">
                      <Swords className="h-5 w-5 text-purple-500 mr-2" />
                      Battle History
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Battle 1 */}
                      <div className="p-4 rounded-xl bg-gradient-to-r from-gray-900/70 to-gray-800/70 border border-gray-700/70 hover:border-green-500/30 transition-all shadow-md group">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-500 mb-2">
                              <Trophy className="h-3 w-3 mr-1" />
                              Victory
                            </Badge>
                            <h3 className="font-medium text-lg">Binary Tree Traversal</h3>
                          </div>
                          <div className="bg-gray-800/80 px-2 py-1 rounded-lg text-xs text-gray-400 flex items-center group-hover:bg-gray-700/80 transition-all">
                            <Clock className="h-3 w-3 mr-1" />2 hours ago
                          </div>
                        </div>
                        <div className="flex items-center justify-between bg-gray-900/50 p-3 rounded-lg">
                          <div className="flex items-center">
                            <Avatar className="h-10 w-10 mr-2 border border-purple-500/30">
                              <AvatarImage src="/placeholder.svg" />
                              <AvatarFallback className="bg-gradient-to-br from-purple-700 to-indigo-700">
                                JD
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <span className="text-sm font-medium">You</span>
                              <Badge className="ml-2 bg-gray-800 text-gray-300 text-xs">5:42</Badge>
                            </div>
                          </div>
                          <div className="flex items-center justify-center w-12">
                            <Swords className="h-5 w-5 text-purple-400" />
                          </div>
                          <div className="flex items-center">
                            <div className="text-right">
                              <span className="text-sm font-medium">DataDragon</span>
                              <Badge className="mr-2 bg-gray-800 text-gray-300 text-xs">8:15</Badge>
                            </div>
                            <Avatar className="h-10 w-10 ml-2 border border-gray-700/50">
                              <AvatarImage src="/placeholder.svg" />
                              <AvatarFallback className="bg-gray-700">DD</AvatarFallback>
                            </Avatar>
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-700/50 flex justify-between items-center">
                          <span className="text-xs text-gray-400 flex items-center">
                            <Target className="h-4 w-4 mr-1 text-yellow-500" />
                            Difficulty: Medium
                          </span>
                          <span className="text-xs text-green-400 font-medium flex items-center">
                            <Zap className="h-4 w-4 mr-1" />
                            +125 points
                          </span>
                        </div>
                      </div>

                      {/* Battle 2 */}
                      <div className="p-4 rounded-xl bg-gradient-to-r from-gray-900/70 to-gray-800/70 border border-gray-700/70 hover:border-red-500/30 transition-all shadow-md group">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <Badge className="bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-400 border-red-500 mb-2">
                              <XCircle className="h-3 w-3 mr-1" />
                              Defeat
                            </Badge>
                            <h3 className="font-medium text-lg">Dynamic Programming Challenge</h3>
                          </div>
                          <div className="bg-gray-800/80 px-2 py-1 rounded-lg text-xs text-gray-400 flex items-center group-hover:bg-gray-700/80 transition-all">
                            <Clock className="h-3 w-3 mr-1" />
                            Yesterday
                          </div>
                        </div>
                        <div className="flex items-center justify-between bg-gray-900/50 p-3 rounded-lg">
                          <div className="flex items-center">
                            <Avatar className="h-10 w-10 mr-2 border border-purple-500/30">
                              <AvatarImage src="/placeholder.svg" />
                              <AvatarFallback className="bg-gradient-to-br from-purple-700 to-indigo-700">
                                JD
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <span className="text-sm font-medium">You</span>
                              <Badge className="ml-2 bg-gray-800 text-gray-300 text-xs">12:30</Badge>
                            </div>
                          </div>
                          <div className="flex items-center justify-center w-12">
                            <Swords className="h-5 w-5 text-red-400" />
                          </div>
                          <div className="flex items-center">
                            <div className="text-right">
                              <span className="text-sm font-medium">AlgoMaster</span>
                              <Badge className="mr-2 bg-gray-800 text-gray-300 text-xs">10:45</Badge>
                            </div>
                            <Avatar className="h-10 w-10 ml-2 border border-gray-700/50">
                              <AvatarImage src="/placeholder.svg" />
                              <AvatarFallback className="bg-gray-700">AM</AvatarFallback>
                            </Avatar>
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-700/50 flex justify-between items-center">
                          <span className="text-xs text-gray-400 flex items-center">
                            <Target className="h-4 w-4 mr-1 text-red-500" />
                            Difficulty: Hard
                          </span>
                          <span className="text-xs text-red-400 font-medium flex items-center">
                            <Zap className="h-4 w-4 mr-1" />
                            -50 points
                          </span>
                        </div>
                      </div>

                      {/* Battle 3 */}
                      <div className="p-4 rounded-xl bg-gradient-to-r from-gray-900/70 to-gray-800/70 border border-gray-700/70 hover:border-green-500/30 transition-all shadow-md group">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-500 mb-2">
                              <Trophy className="h-3 w-3 mr-1" />
                              Victory
                            </Badge>
                            <h3 className="font-medium text-lg">Graph Algorithms</h3>
                          </div>
                          <div className="bg-gray-800/80 px-2 py-1 rounded-lg text-xs text-gray-400 flex items-center group-hover:bg-gray-700/80 transition-all">
                            <Clock className="h-3 w-3 mr-1" />2 days ago
                          </div>
                        </div>
                        <div className="flex items-center justify-between bg-gray-900/50 p-3 rounded-lg">
                          <div className="flex items-center">
                            <Avatar className="h-10 w-10 mr-2 border border-purple-500/30">
                              <AvatarImage src="/placeholder.svg" />
                              <AvatarFallback className="bg-gradient-to-br from-purple-700 to-indigo-700">
                                JD
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <span className="text-sm font-medium">You</span>
                              <Badge className="ml-2 bg-gray-800 text-gray-300 text-xs">7:12</Badge>
                            </div>
                          </div>
                          <div className="flex items-center justify-center w-12">
                            <Swords className="h-5 w-5 text-purple-400" />
                          </div>
                          <div className="flex items-center">
                            <div className="text-right">
                              <span className="text-sm font-medium">ByteNinja</span>
                              <Badge className="mr-2 bg-gray-800 text-gray-300 text-xs">9:30</Badge>
                            </div>
                            <Avatar className="h-10 w-10 ml-2 border border-gray-700/50">
                              <AvatarImage src="/placeholder.svg" />
                              <AvatarFallback className="bg-gray-700">BN</AvatarFallback>
                            </Avatar>
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-700/50 flex justify-between items-center">
                          <span className="text-xs text-gray-400 flex items-center">
                            <Target className="h-4 w-4 mr-1 text-yellow-500" />
                            Difficulty: Medium
                          </span>
                          <span className="text-xs text-green-400 font-medium flex items-center">
                            <Zap className="h-4 w-4 mr-1" />
                            +115 points
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full border-gray-700 text-gray-300 hover:bg-gray-700/50 hover:border-purple-500/30 transition-all"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View All Battles
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm overflow-hidden rounded-xl shadow-lg">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl"></div>

                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-xl">
                      <BarChart3 className="h-5 w-5 text-purple-500 mr-2" />
                      Battle Statistics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 rounded-xl border border-gray-700/50 p-4 text-center hover:border-purple-500/30 transition-all shadow-md">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center mx-auto mb-2">
                          <Swords className="h-5 w-5 text-purple-400" />
                        </div>
                        <p className="text-xs text-gray-400">Total Battles</p>
                        <p className="text-2xl font-bold">182</p>
                      </div>
                      <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 rounded-xl border border-gray-700/50 p-4 text-center hover:border-green-500/30 transition-all shadow-md">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mx-auto mb-2">
                          <Trophy className="h-5 w-5 text-green-400" />
                        </div>
                        <p className="text-xs text-gray-400">Wins</p>
                        <p className="text-2xl font-bold text-green-400">124</p>
                      </div>
                      <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 rounded-xl border border-gray-700/50 p-4 text-center hover:border-red-500/30 transition-all shadow-md">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-red-500/20 to-pink-500/20 flex items-center justify-center mx-auto mb-2">
                          <XCircle className="h-5 w-5 text-red-400" />
                        </div>
                        <p className="text-xs text-gray-400">Losses</p>
                        <p className="text-2xl font-bold text-red-400">58</p>
                      </div>
                      <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 rounded-xl border border-gray-700/50 p-4 text-center hover:border-amber-500/30 transition-all shadow-md">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-500/20 to-yellow-500/20 flex items-center justify-center mx-auto mb-2">
                          <Gauge className="h-5 w-5 text-amber-400" />
                        </div>
                        <p className="text-xs text-gray-400">Win Rate</p>
                        <p className="text-2xl font-bold text-amber-400">68%</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-gray-900/70 to-gray-800/70 rounded-xl border border-gray-700/50 p-4 hover:border-purple-500/30 transition-all shadow-md">
                        <h4 className="text-sm font-medium mb-3 flex items-center">
                          <Puzzle className="h-4 w-4 mr-2 text-purple-400" />
                          Favorite Problem Types
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500">
                            <Workflow className="h-3 w-3 mr-1" />
                            Dynamic Programming
                          </Badge>
                          <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-500">
                            <GitBranch className="h-3 w-3 mr-1" />
                            Graph Algorithms
                          </Badge>
                          <Badge className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500">
                            <GitBranch className="h-3 w-3 mr-1" />
                            Binary Trees
                          </Badge>
                          <Badge className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-400 border-amber-500">
                            <Layers className="h-3 w-3 mr-1" />
                            Sorting
                          </Badge>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gradient-to-r from-gray-900/70 to-gray-800/70 rounded-xl border border-gray-700/50 p-4 hover:border-purple-500/30 transition-all shadow-md">
                          <h4 className="text-sm font-medium mb-3 flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-cyan-400" />
                            Average Completion Time
                          </h4>
                          <div className="flex items-center">
                            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mr-3">
                              <Hourglass className="h-6 w-6 text-cyan-400" />
                            </div>
                            <span className="text-lg font-medium">14:32 minutes</span>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-900/70 to-gray-800/70 rounded-xl border border-gray-700/50 p-4 hover:border-purple-500/30 transition-all shadow-md">
                          <h4 className="text-sm font-medium mb-3 flex items-center">
                            <Flame className="h-4 w-4 mr-2 text-amber-400" />
                            Current Streak
                          </h4>
                          <div className="flex items-center">
                            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center mr-3">
                              <Repeat className="h-6 w-6 text-amber-400" />
                            </div>
                            <span className="text-lg font-medium">7 day winning streak</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Achievements Tab */}
              <TabsContent value="achievements" className="mt-6 space-y-6">
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm overflow-hidden rounded-xl shadow-lg">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl"></div>

                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-xl">
                      <Award className="h-5 w-5 text-purple-500 mr-2" />
                      Badges & Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-400 mb-3 flex items-center">
                        <Sparkles className="h-4 w-4 mr-2 text-purple-400" />
                        Recently Earned
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl border border-blue-500/30 p-4 text-center shadow-lg shadow-blue-500/5 group hover:shadow-blue-500/10 transition-all">
                          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-3 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all">
                            <Award className="h-8 w-8 text-blue-400" />
                          </div>
                          <p className="font-medium text-blue-400">Graph Master</p>
                          <p className="text-xs text-gray-400 mt-1">Solved 50 graph problems</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl border border-green-500/30 p-4 text-center shadow-lg shadow-green-500/5 group hover:shadow-green-500/10 transition-all">
                          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mx-auto mb-3 group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all">
                            <Trophy className="h-8 w-8 text-green-400" />
                          </div>
                          <p className="font-medium text-green-400">Win Streak</p>
                          <p className="text-xs text-gray-400 mt-1">5+ consecutive wins</p>
                        </div>

                        <div className="bg-gradient-to-br from-amber-900/30 to-yellow-900/30 rounded-xl border border-amber-500/30 p-4 text-center shadow-lg shadow-amber-500/5 group hover:shadow-amber-500/10 transition-all">
                          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-amber-500/20 to-yellow-500/20 flex items-center justify-center mx-auto mb-3 group-hover:from-amber-500/30 group-hover:to-yellow-500/30 transition-all">
                            <Flame className="h-8 w-8 text-amber-400" />
                          </div>
                          <p className="font-medium text-amber-400">On Fire</p>
                          <p className="text-xs text-gray-400 mt-1">Active for 7 days straight</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-xl border border-purple-500/30 p-4 text-center shadow-lg shadow-purple-500/5 group hover:shadow-purple-500/10 transition-all">
                          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center mx-auto mb-3 group-hover:from-purple-500/30 group-hover:to-indigo-500/30 transition-all">
                            <Shield className="h-8 w-8 text-purple-400" />
                          </div>
                          <p className="font-medium text-purple-400">Team Player</p>
                          <p className="text-xs text-gray-400 mt-1">Won 25 clan battles</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-400 mb-3 flex items-center">
                        <Medal className="h-4 w-4 mr-2 text-purple-400" />
                        All Achievements
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {/* More achievements */}
                        <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 rounded-xl border border-gray-700/50 p-4 text-center hover:border-cyan-500/30 transition-all shadow-md group">
                          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-gray-800/80 to-gray-700/80 flex items-center justify-center mx-auto mb-3 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all">
                            <Code className="h-7 w-7 text-cyan-400" />
                          </div>
                          <p className="font-medium text-sm">Code Ninja</p>
                          <p className="text-xs text-gray-400 mt-1">Solved 100+ problems</p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 rounded-xl border border-gray-700/50 p-4 text-center hover:border-yellow-500/30 transition-all shadow-md group">
                          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-gray-800/80 to-gray-700/80 flex items-center justify-center mx-auto mb-3 group-hover:from-yellow-500/10 group-hover:to-amber-500/10 transition-all">
                            <Zap className="h-7 w-7 text-yellow-400" />
                          </div>
                          <p className="font-medium text-sm">Speed Demon</p>
                          <p className="text-xs text-gray-400 mt-1">Solved under 5 minutes</p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 rounded-xl border border-gray-700/50 p-4 text-center hover:border-purple-500/30 transition-all shadow-md group">
                          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-gray-800/80 to-gray-700/80 flex items-center justify-center mx-auto mb-3 group-hover:from-purple-500/10 group-hover:to-indigo-500/10 transition-all">
                            <BrainCircuit className="h-7 w-7 text-purple-400" />
                          </div>
                          <p className="font-medium text-sm">Algorithm Guru</p>
                          <p className="text-xs text-gray-400 mt-1">Mastered all algorithms</p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 rounded-xl border border-gray-700/50 p-4 text-center hover:border-blue-500/30 transition-all shadow-md group">
                          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-gray-800/80 to-gray-700/80 flex items-center justify-center mx-auto mb-3 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all">
                            <Users className="h-7 w-7 text-blue-400" />
                          </div>
                          <p className="font-medium text-sm">Mentor</p>
                          <p className="text-xs text-gray-400 mt-1">Helped 10+ users</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full border-gray-700 text-gray-300 hover:bg-gray-700/50 hover:border-purple-500/30 transition-all"
                    >
                      <Maximize className="h-4 w-4 mr-2" />
                      View All Achievements
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm overflow-hidden rounded-xl shadow-lg">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl"></div>

                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-xl">
                      <Star className="h-5 w-5 text-purple-500 mr-2" />
                      Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-gray-900/70 to-gray-800/70 rounded-xl border border-gray-700/50 p-4 hover:border-purple-500/30 transition-all shadow-md">
                        <div className="flex justify-between mb-2">
                          <div>
                            <h4 className="font-medium text-lg flex items-center">
                              <Crown className="h-5 w-5 mr-2 text-purple-400" />
                              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                                Elite III
                              </span>
                            </h4>
                            <p className="text-xs text-gray-400">Next rank: Master I</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">12,450 / 15,000</p>
                            <p className="text-xs text-gray-400">2,550 points needed</p>
                          </div>
                        </div>
                        <div className="h-3 bg-gray-700 rounded-full overflow-hidden mt-2">
                          <div
                            className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full relative"
                            style={{ width: "83%" }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer-effect"></div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-700/50">
                        <h4 className="text-sm font-medium mb-3 flex items-center">
                          <Milestone className="h-4 w-4 mr-2 text-purple-400" />
                          Upcoming Achievements
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center bg-gradient-to-r from-gray-900/70 to-gray-800/70 p-3 rounded-lg border border-gray-700/50 hover:border-amber-500/30 transition-all">
                            <div className="flex items-center">
                              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-amber-500/10 to-yellow-500/10 flex items-center justify-center mr-3">
                                <Trophy className="h-5 w-5 text-amber-400" />
                              </div>
                              <div>
                                <p className="text-sm font-medium">Tournament Victor</p>
                                <p className="text-xs text-gray-400">Win a tournament</p>
                              </div>
                            </div>
                            <Badge className="bg-gray-800 text-gray-300">0/1</Badge>
                          </div>

                          <div className="flex justify-between items-center bg-gradient-to-r from-gray-900/70 to-gray-800/70 p-3 rounded-lg border border-gray-700/50 hover:border-red-500/30 transition-all">
                            <div className="flex items-center">
                              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-red-500/10 to-orange-500/10 flex items-center justify-center mr-3">
                                <Flame className="h-5 w-5 text-red-400" />
                              </div>
                              <div>
                                <p className="text-sm font-medium">Unstoppable</p>
                                <p className="text-xs text-gray-400">10 day streak</p>
                              </div>
                            </div>
                            <Badge className="bg-gradient-to-r from-red-500/20 to-orange-500/20 text-red-400 border-red-500">
                              7/10
                            </Badge>
                          </div>

                          <div className="flex justify-between items-center bg-gradient-to-r from-gray-900/70 to-gray-800/70 p-3 rounded-lg border border-gray-700/50 hover:border-green-500/30 transition-all">
                            <div className="flex items-center">
                              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center mr-3">
                                <Code className="h-5 w-5 text-green-400" />
                              </div>
                              <div>
                                <p className="text-sm font-medium">Problem Creator</p>
                                <p className="text-xs text-gray-400">Create 5 problems</p>
                              </div>
                            </div>
                            <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-500">
                              2/5
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Friends Tab */}
              <TabsContent value="friends" className="mt-6 space-y-6">
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm overflow-hidden rounded-xl shadow-lg">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl"></div>

                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="flex items-center text-xl">
                      <Users className="h-5 w-5 text-purple-500 mr-2" />
                      Friends
                    </CardTitle>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="Search friends..."
                        className="pl-9 bg-gray-900/70 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500 w-[200px] rounded-lg"
                      />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {/* Friend 1 */}
                      <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-gray-900/70 to-gray-800/70 border border-gray-700/50 hover:border-blue-500/30 transition-all shadow-md group">
                        <div className="flex items-center">
                          <Avatar className="h-12 w-12 mr-3 border-2 border-blue-500/30 group-hover:border-blue-500/50 transition-all">
                            <AvatarImage src="/placeholder.svg" />
                            <AvatarFallback className="bg-gradient-to-br from-blue-700 to-indigo-700">
                              AM
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">AlgoMaster</p>
                            <div className="flex items-center">
                              <Badge className="mr-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-500 text-xs">
                                <div className="h-2 w-2 rounded-full bg-green-400 mr-1 animate-pulse"></div>
                                Online
                              </Badge>
                              <span className="text-xs text-gray-400">Master II</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-9 border-gray-700 hover:bg-gray-700/50 hover:border-blue-500/30 transition-all"
                          >
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-9 border-gray-700 hover:bg-gray-700/50 hover:border-purple-500/30 transition-all"
                          >
                            <Swords className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Friend 2 */}
                      <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-gray-900/70 to-gray-800/70 border border-gray-700/50 hover:border-amber-500/30 transition-all shadow-md group">
                        <div className="flex items-center">
                          <Avatar className="h-12 w-12 mr-3 border-2 border-amber-500/30 group-hover:border-amber-500/50 transition-all">
                            <AvatarImage src="/placeholder.svg" />
                            <AvatarFallback className="bg-gradient-to-br from-amber-700 to-orange-700">
                              CS
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">CodeSlayer</p>
                            <div className="flex items-center">
                              <Badge className="mr-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500 text-xs">
                                <Swords className="h-3 w-3 mr-1" />
                                In Battle
                              </Badge>
                              <span className="text-xs text-gray-400">Elite III</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-9 border-gray-700 hover:bg-gray-700/50 hover:border-amber-500/30 transition-all"
                          >
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-9 border-gray-700 hover:bg-gray-700/50 opacity-50 cursor-not-allowed"
                            disabled
                          >
                            <Swords className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Friend 3 */}
                      <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-gray-900/70 to-gray-800/70 border border-gray-700/50 hover:border-gray-500/50 transition-all shadow-md group">
                        <div className="flex items-center">
                          <Avatar className="h-12 w-12 mr-3 border-2 border-gray-700 group-hover:border-gray-600 transition-all">
                            <AvatarImage src="/placeholder.svg" />
                            <AvatarFallback className="bg-gradient-to-br from-gray-700 to-gray-800">BN</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">ByteNinja</p>
                            <div className="flex items-center">
                              <Badge className="mr-2 bg-gray-800 text-gray-400 border-gray-600 text-xs">Offline</Badge>
                              <span className="text-xs text-gray-400">Elite I</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-9 border-gray-700 hover:bg-gray-700/50 hover:border-gray-500/50 transition-all"
                          >
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-9 border-gray-700 hover:bg-gray-700/50 opacity-50 cursor-not-allowed"
                            disabled
                          >
                            <Swords className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Friend 4 */}
                      <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-gray-900/70 to-gray-800/70 border border-gray-700/50 hover:border-purple-500/30 transition-all shadow-md group">
                        <div className="flex items-center">
                          <Avatar className="h-12 w-12 mr-3 border-2 border-purple-500/30 group-hover:border-purple-500/50 transition-all">
                            <AvatarImage src="/placeholder.svg" />
                            <AvatarFallback className="bg-gradient-to-br from-purple-700 to-indigo-700">
                              DD
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">DataDragon</p>
                            <div className="flex items-center">
                              <Badge className="mr-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-500 text-xs">
                                <div className="h-2 w-2 rounded-full bg-green-400 mr-1 animate-pulse"></div>
                                Online
                              </Badge>
                              <span className="text-xs text-gray-400">Elite II</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-9 border-gray-700 hover:bg-gray-700/50 hover:border-purple-500/30 transition-all"
                          >
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-9 border-gray-700 hover:bg-gray-700/50 hover:border-purple-500/30 transition-all"
                          >
                            <Swords className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      className="border-gray-700 text-gray-300 hover:bg-gray-700/50 hover:border-purple-500/30 transition-all"
                    >
                      <Users className="h-4 w-4 mr-2" />
                      View All Friends
                    </Button>
                    <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Add Friend
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm overflow-hidden rounded-xl shadow-lg">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl"></div>

                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-xl">
                      <UserPlus className="h-5 w-5 text-purple-500 mr-2" />
                      Friend Requests
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {/* Request 1 */}
                      <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-gray-900/70 to-gray-800/70 border border-gray-700/50 hover:border-cyan-500/30 transition-all shadow-md">
                        <div className="flex items-center">
                          <Avatar className="h-12 w-12 mr-3 border-2 border-cyan-500/30">
                            <AvatarImage src="/placeholder.svg" />
                            <AvatarFallback className="bg-gradient-to-br from-cyan-700 to-blue-700">SW</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">SortingWizard</p>
                            <p className="text-xs text-gray-400">Elite I • 3 mutual friends</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-9 border-gray-700 hover:bg-gray-700/50 hover:border-red-500/30 transition-all"
                          >
                            <XCircle className="h-4 w-4 text-red-400" />
                          </Button>
                          <Button
                            size="sm"
                            className="h-9 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
                          >
                            <CheckCircle2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Request 2 */}
                      <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-gray-900/70 to-gray-800/70 border border-gray-700/50 hover:border-amber-500/30 transition-all shadow-md">
                        <div className="flex items-center">
                          <Avatar className="h-12 w-12 mr-3 border-2 border-amber-500/30">
                            <AvatarImage src="/placeholder.svg" />
                            <AvatarFallback className="bg-gradient-to-br from-amber-700 to-orange-700">
                              RC
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">RecursionChamp</p>
                            <p className="text-xs text-gray-400">Master III • 1 mutual friend</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-9 border-gray-700 hover:bg-gray-700/50 hover:border-red-500/30 transition-all"
                          >
                            <XCircle className="h-4 w-4 text-red-400" />
                          </Button>
                          <Button
                            size="sm"
                            className="h-9 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
                          >
                            <CheckCircle2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Settings Section */}
        <div className="mt-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-3xl blur-3xl opacity-50"></div>
          <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 backdrop-blur-sm relative z-10 overflow-hidden rounded-xl shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>

            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-xl">
                <Settings className="h-5 w-5 text-purple-500 mr-2" />
                Account Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h3 className="text-sm font-medium flex items-center">
                    <Lock className="h-4 w-4 text-purple-400 mr-2" />
                    Privacy
                  </h3>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-gray-900/70 to-gray-800/70 border border-gray-700/50 hover:border-purple-500/30 transition-all shadow-md">
                    <div>
                      <p className="text-sm font-medium">Profile Visibility</p>
                      <p className="text-xs text-gray-400">Who can see your profile</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-9 border-gray-700 hover:bg-gray-700/50 hover:border-purple-500/30 transition-all"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Public
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-gray-900/70 to-gray-800/70 border border-gray-700/50 hover:border-purple-500/30 transition-all shadow-md">
                    <div>
                      <p className="text-sm font-medium">Battle History</p>
                      <p className="text-xs text-gray-400">Who can see your battles</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-9 border-gray-700 hover:bg-gray-700/50 hover:border-purple-500/30 transition-all"
                    >
                      <Users className="h-4 w-4 mr-2" />
                      Friends
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-medium flex items-center">
                    <Bell className="h-4 w-4 text-purple-400 mr-2" />
                    Notifications
                  </h3>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-gray-900/70 to-gray-800/70 border border-gray-700/50 hover:border-purple-500/30 transition-all shadow-md">
                    <div>
                      <p className="text-sm font-medium">Battle Invites</p>
                      <p className="text-xs text-gray-400">Get notified for battle invites</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-9 border-gray-700 hover:bg-gray-700/50 hover:border-green-500/30 transition-all"
                    >
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-gray-900/70 to-gray-800/70 border border-gray-700/50 hover:border-purple-500/30 transition-all shadow-md">
                    <div>
                      <p className="text-sm font-medium">Friend Requests</p>
                      <p className="text-xs text-gray-400">Get notified for friend requests</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-9 border-gray-700 hover:bg-gray-700/50 hover:border-green-500/30 transition-all"
                    >
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-medium flex items-center">
                    <Settings className="h-4 w-4 text-purple-400 mr-2" />
                    Account
                  </h3>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-gray-900/70 to-gray-800/70 border border-gray-700/50 hover:border-purple-500/30 transition-all shadow-md">
                    <div>
                      <p className="text-sm font-medium">Change Password</p>
                      <p className="text-xs text-gray-400">Update your password</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-9 border-gray-700 hover:bg-gray-700/50 hover:border-purple-500/30 transition-all"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-gray-900/70 to-gray-800/70 border border-gray-700/50 hover:border-purple-500/30 transition-all shadow-md">
                    <div>
                      <p className="text-sm font-medium">Logout</p>
                      <p className="text-xs text-gray-400">Sign out of your account</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-9 border-red-500/30 hover:bg-red-900/20 hover:border-red-500/50 transition-all text-red-400"
                    >
                      <LogOut className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
