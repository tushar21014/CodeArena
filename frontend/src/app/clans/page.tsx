"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Trophy,
  Users,
  Search,
  Filter,
  Star,
  Shield,
  Swords,
  Flame,
  Crown,
  Clock,
  CheckCircle2,
  XCircle,
  UserPlus,
  Zap,
  Award,
  BrainCircuit,
  PlusCircle,
  SlidersHorizontal,
  ArrowUpDown,
  Info,
  AlertCircle,
  Lock,
  Check,
  Sparkles,
  Gauge,
  Target,
  Hexagon,
  GitBranch,
  Layers,
  Workflow,
  Puzzle,
  Cpu,
  Database,
  Code,
  Milestone,
  Rotate3d,
  Lightbulb,
  Eye,
  ChevronDown,
  Home,
} from "lucide-react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
const clanAPI = "http://localhost:5000/api/clan"




// Mock data for clans
const clans = [
  {
    id: 1,
    name: "Algorithm Avengers",
    tag: "ALGO",
    avatar: "/placeholder.svg",
    description: "A clan of elite coders specializing in algorithm optimization and competitive programming.",
    members: 48,
    maxMembers: 50,
    wins: 254,
    rating: 4.9,
    level: 42,
    rank: 1,
    winRate: 86,
    specialties: ["Algorithms", "Data Structures", "Dynamic Programming"],
    requirements: "Level 30+, 100+ problems solved",
    activity: "Very Active",
    status: "Elite",
    isRecruiting: true,
    createdAt: "June 2021",
    leader: "MasterKoder",
    tournaments: 32,
    tournamentWins: 18,
  },
  {
    id: 2,
    name: "Binary Force",
    tag: "BF",
    avatar: "/placeholder.svg",
    description: "Specializing in binary algorithms and bit manipulation challenges.",
    members: 32,
    maxMembers: 40,
    wins: 178,
    rating: 4.2,
    level: 35,
    rank: 8,
    winRate: 72,
    specialties: ["Algorithms", "Bit Manipulation", "Math"],
    requirements: "Level 20+, 50+ problems solved",
    activity: "Active",
    status: "Advanced",
    isRecruiting: true,
    createdAt: "August 2021",
    leader: "BitMaster",
    tournaments: 24,
    tournamentWins: 9,
  },
  {
    id: 3,
    name: "Dynamic Prodigies",
    tag: "DP",
    avatar: "/placeholder.svg",
    description: "Masters of dynamic programming and optimization problems.",
    members: 28,
    maxMembers: 50,
    wins: 203,
    rating: 4.8,
    level: 38,
    rank: 5,
    winRate: 81,
    specialties: ["DP", "Optimization", "Recursion"],
    requirements: "Level 25+, 75+ problems solved",
    activity: "Very Active",
    status: "Elite",
    isRecruiting: true,
    createdAt: "July 2021",
    leader: "DPWizard",
    tournaments: 28,
    tournamentWins: 14,
  },
  {
    id: 4,
    name: "Graph Gurus",
    tag: "GG",
    avatar: "/placeholder.svg",
    description: "Experts in graph algorithms and network flow problems.",
    members: 35,
    maxMembers: 40,
    wins: 156,
    rating: 4.3,
    level: 30,
    rank: 12,
    winRate: 68,
    specialties: ["Graphs", "BFS/DFS", "Networks"],
    requirements: "Level 15+, 30+ problems solved",
    activity: "Active",
    status: "Intermediate",
    isRecruiting: true,
    createdAt: "September 2021",
    leader: "GraphMaster",
    tournaments: 20,
    tournamentWins: 7,
  },
  {
    id: 5,
    name: "Syntax Ninjas",
    tag: "SN",
    avatar: "/placeholder.svg",
    description: "Fast-coding specialists with a focus on syntax efficiency.",
    members: 18,
    maxMembers: 30,
    wins: 42,
    rating: 3.7,
    level: 22,
    rank: 25,
    winRate: 58,
    specialties: ["Speed Coding", "Syntax", "Efficiency"],
    requirements: "Level 10+, 20+ problems solved",
    activity: "Moderate",
    status: "Beginner-Friendly",
    isRecruiting: true,
    createdAt: "January 2022",
    leader: "SyntaxPro",
    tournaments: 8,
    tournamentWins: 2,
  },
  {
    id: 6,
    name: "Tree Surgeons",
    tag: "TS",
    avatar: "/placeholder.svg",
    description: "Tree data structure specialists with expertise in binary trees and heaps.",
    members: 45,
    maxMembers: 50,
    wins: 231,
    rating: 4.9,
    level: 40,
    rank: 3,
    winRate: 84,
    specialties: ["Trees", "Heaps", "BST"],
    requirements: "Level 30+, 100+ problems solved",
    activity: "Very Active",
    status: "Elite",
    isRecruiting: true,
    createdAt: "July 2021",
    leader: "TreeMaster",
    tournaments: 30,
    tournamentWins: 16,
  },
  {
    id: 7,
    name: "Recursion Crew",
    tag: "RC",
    avatar: "/placeholder.svg",
    description: "Recursion specialists who love solving complex problems with elegant solutions.",
    members: 27,
    maxMembers: 35,
    wins: 167,
    rating: 4.1,
    level: 32,
    rank: 9,
    winRate: 70,
    specialties: ["Recursion", "Backtracking", "Divide & Conquer"],
    requirements: "Level 20+, 50+ problems solved",
    activity: "Active",
    status: "Advanced",
    isRecruiting: true,
    createdAt: "August 2021",
    leader: "RecursionKing",
    tournaments: 22,
    tournamentWins: 8,
  },
  {
    id: 8,
    name: "Code Commandos",
    tag: "CC",
    avatar: "/placeholder.svg",
    description: "A tactical team of programmers who specialize in solving problems efficiently.",
    members: 15,
    maxMembers: 25,
    wins: 38,
    rating: 3.8,
    level: 18,
    rank: 28,
    winRate: 55,
    specialties: ["Efficiency", "Algorithms", "Problem Solving"],
    requirements: "Level 5+, 10+ problems solved",
    activity: "Moderate",
    status: "Beginner-Friendly",
    isRecruiting: true,
    createdAt: "February 2022",
    leader: "CommanderCode",
    tournaments: 6,
    tournamentWins: 1,
  },
  {
    id: 9,
    name: "Quantum Coders",
    tag: "QC",
    avatar: "/placeholder.svg",
    description: "Exploring the frontiers of computational complexity and quantum algorithms.",
    members: 22,
    maxMembers: 30,
    wins: 112,
    rating: 4.5,
    level: 36,
    rank: 7,
    winRate: 75,
    specialties: ["Quantum Computing", "Complexity", "Advanced Algorithms"],
    requirements: "Level 25+, 80+ problems solved",
    activity: "Active",
    status: "Elite",
    isRecruiting: true,
    createdAt: "October 2021",
    leader: "QuantumMind",
    tournaments: 18,
    tournamentWins: 10,
  },
  {
    id: 10,
    name: "Functional Fellows",
    tag: "FF",
    avatar: "/placeholder.svg",
    description: "Advocates of functional programming paradigms and immutable data structures.",
    members: 20,
    maxMembers: 30,
    wins: 98,
    rating: 4.0,
    level: 28,
    rank: 15,
    winRate: 65,
    specialties: ["Functional Programming", "Immutability", "Lambda Calculus"],
    requirements: "Level 15+, 40+ problems solved",
    activity: "Active",
    status: "Intermediate",
    isRecruiting: true,
    createdAt: "November 2021",
    leader: "FunctionalFanatic",
    tournaments: 14,
    tournamentWins: 5,
  },
]

// Mock user data
const userData = {
  level: 42, // Change this to test different level conditions
  problemsSolved: 247,
  winRate: 68,
  battlePoints: 12450,
}

export default function ClansPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredClans, setFilteredClans] = useState(clans)
  const [activeTab, setActiveTab] = useState("all")
  const [showCreateClanDialog, setShowCreateClanDialog] = useState(false)
  const [showLevelWarning, setShowLevelWarning] = useState(false)
  const [sortOption, setSortOption] = useState("rank")
  const [clan, setClan] = useState([])
  const [filterOptions, setFilterOptions] = useState({
    minLevel: 0,
    maxLevel: 50,
    isRecruiting: true,
    specialties: [],
    activity: "all",
  })

  // Filter clans based on search term and active tab
  useEffect(() => {
    let result = clans

    // Apply search filter
    if (searchTerm) {
      result = result.filter(
        (clan) =>
          clan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          clan.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          clan.tag.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Apply tab filter
    if (activeTab === "recommended") {
      result = result.filter((clan) => clan.level <= userData.level + 5 && clan.level >= userData.level - 10)
    } else if (activeTab === "popular") {
      result = result.filter((clan) => clan.rating >= 4.5)
    } else if (activeTab === "new") {
      result = result.filter((clan) => clan.createdAt.includes("2022"))
    }

    // Apply additional filters
    result = result.filter(
      (clan) =>
        clan.level >= filterOptions.minLevel &&
        clan.level <= filterOptions.maxLevel &&
        (filterOptions.isRecruiting ? clan.isRecruiting : true) &&
        (filterOptions.activity === "all" ||
          (filterOptions.activity === "very active" && clan.activity === "Very Active") ||
          (filterOptions.activity === "active" && clan.activity === "Active") ||
          (filterOptions.activity === "moderate" && clan.activity === "Moderate")),
    )

    // Apply sorting
    if (sortOption === "rank") {
      result = [...result].sort((a, b) => a.rank - b.rank)
    } else if (sortOption === "level") {
      result = [...result].sort((a, b) => b.level - a.level)
    } else if (sortOption === "members") {
      result = [...result].sort((a, b) => b.members - a.members)
    } else if (sortOption === "winRate") {
      result = [...result].sort((a, b) => b.winRate - a.winRate)
    } else if (sortOption === "rating") {
      result = [...result].sort((a, b) => b.rating - a.rating)
    }

    setFilteredClans(result)
  }, [searchTerm, activeTab, sortOption, filterOptions])

  useEffect(() => {
    getClans();
  
    return () => {
    }
  }, [])

  
const getClans = async() => {
  try {
    const data = await fetch(clanAPI+"/getAllClans",{
      method: "GET"
    })
    const clans = await data.json()
    console.log(clans)
    setClan(clans)

  } catch (error) {
    console.error(error); 
    
  }
}
  const handleCreateClanClick = () => {
    if (userData.level < 10) {
      setShowLevelWarning(true)
    } else {
      setShowCreateClanDialog(true)
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Elite":
        return "bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500"
      case "Advanced":
        return "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500"
      case "Intermediate":
        return "bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-400 border-amber-500"
      case "Beginner-Friendly":
        return "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-500"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500"
    }
  }

  const getActivityColor = (activity) => {
    switch (activity) {
      case "Very Active":
        return "text-green-400"
      case "Active":
        return "text-blue-400"
      case "Moderate":
        return "text-amber-400"
      default:
        return "text-gray-400"
    }
  }

  const getSpecialtyIcon = (specialty) => {
    switch (specialty.toLowerCase()) {
      case "algorithms":
        return <Cpu className="h-3 w-3 mr-1" />
      case "data structures":
        return <Database className="h-3 w-3 mr-1" />
      case "dynamic programming":
      case "dp":
        return <Workflow className="h-3 w-3 mr-1" />
      case "bit manipulation":
        return <Code className="h-3 w-3 mr-1" />
      case "math":
        return <Hexagon className="h-3 w-3 mr-1" />
      case "optimization":
        return <Target className="h-3 w-3 mr-1" />
      case "recursion":
        return <Rotate3d className="h-3 w-3 mr-1" />
      case "graphs":
      case "networks":
      case "bfs/dfs":
        return <GitBranch className="h-3 w-3 mr-1" />
      case "speed coding":
      case "efficiency":
        return <Gauge className="h-3 w-3 mr-1" />
      case "syntax":
        return <Code className="h-3 w-3 mr-1" />
      case "trees":
      case "heaps":
      case "bst":
        return <GitBranch className="h-3 w-3 mr-1" />
      case "backtracking":
      case "divide & conquer":
        return <Milestone className="h-3 w-3 mr-1" />
      case "problem solving":
        return <Puzzle className="h-3 w-3 mr-1" />
      case "quantum computing":
      case "complexity":
      case "advanced algorithms":
        return <Sparkles className="h-3 w-3 mr-1" />
      case "functional programming":
      case "immutability":
      case "lambda calculus":
        return <Layers className="h-3 w-3 mr-1" />
      default:
        return <Lightbulb className="h-3 w-3 mr-1" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 text-white">
      {/* Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-t border-gray-800 md:top-0 md:bottom-auto md:border-t-0 md:border-b md:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <BrainCircuit className="h-8 w-8 text-purple-500" />
              <span className="font-bold text-xl hidden md:inline-block">CodeArena</span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="flex items-center space-x-1 text-gray-400 hover:text-purple-400 transition">
                <Home className="h-5 w-5" />
                <span>Home</span>
              </Link>
              <Link
                href="/battles"
                className="flex items-center space-x-1 text-gray-400 hover:text-purple-400 transition"
              >
                <Swords className="h-5 w-5" />
                <span>Battles</span>
              </Link>
              <Link
                href="/clans/browse"
                className="flex items-center space-x-1 text-white hover:text-purple-400 transition"
              >
                <Users className="h-5 w-5" />
                <span>Clans</span>
              </Link>
              <Link
                href="/leaderboard"
                className="flex items-center space-x-1 text-gray-400 hover:text-purple-400 transition"
              >
                <Trophy className="h-5 w-5" />
                <span>Leaderboard</span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500 px-3 py-1">
                <Flame className="h-4 w-4 mr-1" />
                <span>Level {userData.level}</span>
              </Badge>
              <Link href="/profile">
                <Avatar className="cursor-pointer">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-purple-700">JD</AvatarFallback>
                </Avatar>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-8 pb-20 md:pt-24 md:pb-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold flex items-center">
              <Shield className="mr-3 h-8 w-8 text-purple-500" />
              Coding Clans
            </h1>
            <p className="text-gray-400 mt-2">Join forces with like-minded coders and compete in team battles</p>
          </div>

          <div className="mt-4 md:mt-0">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <Button
                      onClick={handleCreateClanClick}
                      className={`bg-gradient-to-r ${
                        userData.level >= 10
                          ? "from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                          : "from-gray-600 to-gray-700 cursor-not-allowed opacity-70"
                      } transition-all duration-300`}
                    >
                      <PlusCircle className="mr-2 h-5 w-5" />
                      Create a Clan
                    </Button>
                  </div>
                </TooltipTrigger>
                {userData.level < 10 && (
                  <TooltipContent className="bg-gray-800 border-gray-700 text-white p-3 max-w-xs">
                    <div className="flex items-start">
                      <Lock className="h-5 w-5 text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium mb-1">Level 10+ Required</p>
                        <p className="text-sm text-gray-300">
                          You need to reach level 10 to create a clan. Keep solving problems and winning battles to
                          level up!
                        </p>
                      </div>
                    </div>
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        {/* Search and Filter */}
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm mb-8 overflow-hidden rounded-xl shadow-lg">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl"></div>

          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search clans by name, tag or description..."
                  className="pl-10 bg-gray-900/70 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500 rounded-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="border-gray-700 text-gray-300 hover:bg-gray-700/50 hover:border-purple-500/30 transition-all"
                    >
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-80 bg-gray-800 border-gray-700 text-white">
                    <DropdownMenuLabel className="flex items-center">
                      <SlidersHorizontal className="h-4 w-4 mr-2 text-purple-400" />
                      Filter Options
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-gray-700" />
                    <div className="p-3 space-y-4">
                      <div className="space-y-2">
                        <Label className="text-sm text-gray-400">Clan Level Range</Label>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">{filterOptions.minLevel}</span>
                          <span className="text-xs">{filterOptions.maxLevel}</span>
                        </div>
                        <Slider
                          defaultValue={[filterOptions.minLevel, filterOptions.maxLevel]}
                          max={50}
                          step={1}
                          onValueChange={(value) =>
                            setFilterOptions({
                              ...filterOptions,
                              minLevel: value[0],
                              maxLevel: value[1],
                            })
                          }
                          className="[&>span]:bg-purple-500"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <Label className="text-sm text-gray-400">Recruiting Only</Label>
                        <Switch
                          checked={filterOptions.isRecruiting}
                          onCheckedChange={(checked) =>
                            setFilterOptions({
                              ...filterOptions,
                              isRecruiting: checked,
                            })
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm text-gray-400">Activity Level</Label>
                        <Select
                          value={filterOptions.activity}
                          onValueChange={(value) =>
                            setFilterOptions({
                              ...filterOptions,
                              activity: value,
                            })
                          }
                        >
                          <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                            <SelectValue placeholder="Select activity level" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700 text-white">
                            <SelectItem value="all">All Activity Levels</SelectItem>
                            <SelectItem value="very active">Very Active</SelectItem>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="moderate">Moderate</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full mt-2 border-gray-700 hover:bg-gray-700/50 hover:border-purple-500/30 transition-all"
                        onClick={() =>
                          setFilterOptions({
                            minLevel: 0,
                            maxLevel: 50,
                            isRecruiting: true,
                            specialties: [],
                            activity: "all",
                          })
                        }
                      >
                        Reset Filters
                      </Button>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="border-gray-700 text-gray-300 hover:bg-gray-700/50 hover:border-purple-500/30 transition-all"
                    >
                      <ArrowUpDown className="mr-2 h-4 w-4" />
                      Sort
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-gray-800 border-gray-700 text-white">
                    <DropdownMenuLabel className="flex items-center">
                      <ArrowUpDown className="h-4 w-4 mr-2 text-purple-400" />
                      Sort By
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-gray-700" />
                    <DropdownMenuItem
                      className={`${
                        sortOption === "rank" ? "bg-purple-500/20 text-purple-400" : ""
                      } focus:bg-purple-500/20 focus:text-purple-400`}
                      onClick={() => setSortOption("rank")}
                    >
                      <Trophy className="h-4 w-4 mr-2" />
                      Rank
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className={`${
                        sortOption === "level" ? "bg-purple-500/20 text-purple-400" : ""
                      } focus:bg-purple-500/20 focus:text-purple-400`}
                      onClick={() => setSortOption("level")}
                    >
                      <Flame className="h-4 w-4 mr-2" />
                      Level
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className={`${
                        sortOption === "members" ? "bg-purple-500/20 text-purple-400" : ""
                      } focus:bg-purple-500/20 focus:text-purple-400`}
                      onClick={() => setSortOption("members")}
                    >
                      <Users className="h-4 w-4 mr-2" />
                      Members
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className={`${
                        sortOption === "winRate" ? "bg-purple-500/20 text-purple-400" : ""
                      } focus:bg-purple-500/20 focus:text-purple-400`}
                      onClick={() => setSortOption("winRate")}
                    >
                      <Gauge className="h-4 w-4 mr-2" />
                      Win Rate
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className={`${
                        sortOption === "rating" ? "bg-purple-500/20 text-purple-400" : ""
                      } focus:bg-purple-500/20 focus:text-purple-400`}
                      onClick={() => setSortOption("rating")}
                    >
                      <Star className="h-4 w-4 mr-2" />
                      Rating
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="bg-gray-800/70 border border-gray-700 p-1 rounded-xl">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-900/50 data-[state=active]:to-indigo-900/50 data-[state=active]:text-white rounded-lg transition-all duration-300"
            >
              All Clans
            </TabsTrigger>
            <TabsTrigger
              value="recommended"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-900/50 data-[state=active]:to-indigo-900/50 data-[state=active]:text-white rounded-lg transition-all duration-300"
            >
              Recommended
            </TabsTrigger>
            <TabsTrigger
              value="popular"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-900/50 data-[state=active]:to-indigo-900/50 data-[state=active]:text-white rounded-lg transition-all duration-300"
            >
              Popular
            </TabsTrigger>
            <TabsTrigger
              value="new"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-900/50 data-[state=active]:to-indigo-900/50 data-[state=active]:text-white rounded-lg transition-all duration-300"
            >
              New
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            {/* Featured Clan */}
            {activeTab === "all" && (
              <div className="mb-8 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-3xl blur-3xl opacity-50"></div>
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <Crown className="mr-2 h-5 w-5 text-yellow-500" />
                  Featured Clan
                </h2>

                <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 overflow-hidden backdrop-blur-sm relative z-10 rounded-xl shadow-xl">
                  <div className="h-32 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=1200')] opacity-20 bg-cover bg-center"></div>

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

                    <Badge className="absolute top-3 right-3 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-400 border-yellow-500">
                      <Crown className="h-3 w-3 mr-1" />
                      Top Ranked
                    </Badge>
                  </div>

                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="p-6 md:border-r border-gray-700 md:w-2/3">
                        <div className="flex items-start">
                          <div className="relative group mr-4">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg opacity-75 group-hover:opacity-100 blur group-hover:blur-md transition duration-1000"></div>
                            <Avatar className="h-16 w-16 rounded-lg border-2 border-gray-900 relative">
                              <AvatarImage src="/placeholder.svg" />
                              <AvatarFallback className="bg-gradient-to-br from-purple-700 to-indigo-700 text-lg">
                                AA
                              </AvatarFallback>
                            </Avatar>
                          </div>

                          <div>
                            <div className="flex items-center">
                              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                Algorithm Avengers
                              </h3>
                              <Badge className="ml-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500">
                                Elite
                              </Badge>
                            </div>
                            <p className="text-gray-400 mt-1">
                              A clan of elite coders specializing in algorithm optimization and competitive programming.
                            </p>

                            <div className="flex items-center mt-3 space-x-4">
                              <div className="flex items-center">
                                <Users className="h-4 w-4 text-gray-400 mr-1" />
                                <span className="text-sm">48/50 members</span>
                              </div>
                              <div className="flex items-center">
                                <Trophy className="h-4 w-4 text-yellow-500 mr-1" />
                                <span className="text-sm">254 wins</span>
                              </div>
                              <div className="flex items-center">
                                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                                <span className="text-sm">4.9/5 rating</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 md:w-1/3 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-400">Win Rate</span>
                            <span className="text-sm font-medium">86%</span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full relative"
                              style={{ width: "86%" }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer-effect"></div>
                            </div>
                          </div>

                          <div className="mt-4">
                            <div className="flex justify-between text-sm text-gray-400 mb-1">
                              <span>Specialties:</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <Badge className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500">
                                <Cpu className="h-3 w-3 mr-1" />
                                Algorithms
                              </Badge>
                              <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-500">
                                <Database className="h-3 w-3 mr-1" />
                                Data Structures
                              </Badge>
                              <Badge className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-400 border-amber-500">
                                <Workflow className="h-3 w-3 mr-1" />
                                Dynamic Programming
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <Button className="mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300">
                          <UserPlus className="mr-2 h-4 w-4" />
                          Request to Join
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Clan Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredClans.length > 0 ? (
                filteredClans.map((clan) => (
                  <Card
                    key={clan.id}
                    className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 overflow-hidden rounded-xl shadow-lg group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <div className="relative group mr-3">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md opacity-0 group-hover:opacity-75 blur group-hover:blur-sm transition duration-1000"></div>
                            <Avatar className="h-10 w-10 rounded-md border border-gray-600 relative">
                              <AvatarImage src={clan.avatar || "/placeholder.svg"} />
                              <AvatarFallback className="bg-gradient-to-br from-purple-700 to-indigo-700">
                                {clan.tag}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                          <div>
                            <CardTitle className="text-lg flex items-center">
                              {clan.name}
                              {clan.rank <= 5 && (
                                <Badge className="ml-2 bg-yellow-500/20 text-yellow-400 border-yellow-500 text-xs">
                                  <Trophy className="h-3 w-3 mr-1" />
                                  Top {clan.rank}
                                </Badge>
                              )}
                            </CardTitle>
                            <div className="flex items-center mt-1">
                              {[...Array(Math.floor(clan.rating))].map((_, i) => (
                                <Star key={i} className="h-3 w-3 text-yellow-500 mr-0.5" />
                              ))}
                              {clan.rating % 1 > 0 && <Star className="h-3 w-3 text-yellow-500 mr-0.5 opacity-50" />}
                              {[...Array(5 - Math.ceil(clan.rating))].map((_, i) => (
                                <Star key={i} className="h-3 w-3 text-gray-500 mr-0.5" />
                              ))}
                              <span className="text-xs text-gray-400 ml-1">({clan.rating})</span>
                            </div>
                          </div>
                        </div>
                        <Badge className={getStatusColor(clan.status)}>{clan.status}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-400 mb-3 line-clamp-2">{clan.description}</p>

                      <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-gray-400 mr-1" />
                          <span>
                            {clan.members}/{clan.maxMembers} members
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Trophy className="h-4 w-4 text-yellow-500 mr-1" />
                          <span>{clan.wins} wins</span>
                        </div>
                        <div className="flex items-center">
                          <Flame className="h-4 w-4 text-purple-400 mr-1" />
                          <span>Level {clan.level}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-gray-400 mr-1" />
                          <span className={getActivityColor(clan.activity)}>{clan.activity}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {clan.specialties.slice(0, 3).map((specialty, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="bg-transparent text-xs text-gray-400 border-gray-600 group-hover:border-purple-500/30 transition-colors"
                          >
                            {getSpecialtyIcon(specialty)}
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0 flex gap-2">
                      <Button
                        variant="outline"
                        className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-700/50 hover:border-purple-500/30 transition-all"
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300">
                        <UserPlus className="mr-2 h-4 w-4" />
                        Join
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-3 flex flex-col items-center justify-center py-12 text-center">
                  <div className="h-20 w-20 rounded-full bg-gray-800/80 flex items-center justify-center mb-4">
                    <Search className="h-10 w-10 text-gray-500" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">No Clans Found</h3>
                  <p className="text-gray-400 max-w-md">
                    We couldn't find any clans matching your search criteria. Try adjusting your filters or search
                    terms.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 border-gray-700 hover:bg-gray-700/50 hover:border-purple-500/30 transition-all"
                    onClick={() => {
                      setSearchTerm("")
                      setFilterOptions({
                        minLevel: 0,
                        maxLevel: 50,
                        isRecruiting: true,
                        specialties: [],
                        activity: "all",
                      })
                      setSortOption("rank")
                    }}
                  >
                    <Filter className="mr-2 h-4 w-4" />
                    Reset All Filters
                  </Button>
                </div>
              )}
            </div>

            {/* Load More Button */}
            {filteredClans.length > 0 && (
              <div className="mt-8 text-center">
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-700/50 hover:border-purple-500/30 transition-all"
                >
                  <ChevronDown className="mr-2 h-4 w-4" />
                  Load More Clans
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="recommended" className="mt-6">
            {filteredClans.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredClans.map((clan) => (
                  <Card
                    key={clan.id}
                    className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 overflow-hidden rounded-xl shadow-lg group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <div className="relative group mr-3">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md opacity-0 group-hover:opacity-75 blur group-hover:blur-sm transition duration-1000"></div>
                            <Avatar className="h-10 w-10 rounded-md border border-gray-600 relative">
                              <AvatarImage src={clan.avatar || "/placeholder.svg"} />
                              <AvatarFallback className="bg-gradient-to-br from-purple-700 to-indigo-700">
                                {clan.tag}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                          <div>
                            <CardTitle className="text-lg flex items-center">
                              {clan.name}
                              {clan.rank <= 5 && (
                                <Badge className="ml-2 bg-yellow-500/20 text-yellow-400 border-yellow-500 text-xs">
                                  <Trophy className="h-3 w-3 mr-1" />
                                  Top {clan.rank}
                                </Badge>
                              )}
                            </CardTitle>
                            <div className="flex items-center mt-1">
                              {[...Array(Math.floor(clan.rating))].map((_, i) => (
                                <Star key={i} className="h-3 w-3 text-yellow-500 mr-0.5" />
                              ))}
                              {clan.rating % 1 > 0 && <Star className="h-3 w-3 text-yellow-500 mr-0.5 opacity-50" />}
                              {[...Array(5 - Math.ceil(clan.rating))].map((_, i) => (
                                <Star key={i} className="h-3 w-3 text-gray-500 mr-0.5" />
                              ))}
                              <span className="text-xs text-gray-400 ml-1">({clan.rating})</span>
                            </div>
                          </div>
                        </div>
                        <Badge className={getStatusColor(clan.status)}>{clan.status}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-400 mb-3 line-clamp-2">{clan.description}</p>

                      <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-gray-400 mr-1" />
                          <span>
                            {clan.members}/{clan.maxMembers} members
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Trophy className="h-4 w-4 text-yellow-500 mr-1" />
                          <span>{clan.wins} wins</span>
                        </div>
                        <div className="flex items-center">
                          <Flame className="h-4 w-4 text-purple-400 mr-1" />
                          <span>Level {clan.level}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-gray-400 mr-1" />
                          <span className={getActivityColor(clan.activity)}>{clan.activity}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {clan.specialties.slice(0, 3).map((specialty, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="bg-transparent text-xs text-gray-400 border-gray-600 group-hover:border-purple-500/30 transition-colors"
                          >
                            {getSpecialtyIcon(specialty)}
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0 flex gap-2">
                      <Button
                        variant="outline"
                        className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-700/50 hover:border-purple-500/30 transition-all"
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300">
                        <UserPlus className="mr-2 h-4 w-4" />
                        Join
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center p-8 text-center">
                <div className="max-w-md">
                  <Shield className="h-16 w-16 mx-auto mb-4 text-gray-600" />
                  <h3 className="text-lg font-medium mb-2">Personalized Recommendations</h3>
                  <p className="text-gray-400">
                    Based on your skill level and interests, we'll recommend clans that would be a good fit for you.
                  </p>
                  <p className="text-gray-500 text-sm mt-4">No recommendations found with current filters.</p>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="popular" className="mt-6">
            {filteredClans.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredClans.map((clan) => (
                  <Card
                    key={clan.id}
                    className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 overflow-hidden rounded-xl shadow-lg group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <div className="relative group mr-3">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md opacity-0 group-hover:opacity-75 blur group-hover:blur-sm transition duration-1000"></div>
                            <Avatar className="h-10 w-10 rounded-md border border-gray-600 relative">
                              <AvatarImage src={clan.avatar || "/placeholder.svg"} />
                              <AvatarFallback className="bg-gradient-to-br from-purple-700 to-indigo-700">
                                {clan.tag}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                          <div>
                            <CardTitle className="text-lg flex items-center">
                              {clan.name}
                              {clan.rank <= 5 && (
                                <Badge className="ml-2 bg-yellow-500/20 text-yellow-400 border-yellow-500 text-xs">
                                  <Trophy className="h-3 w-3 mr-1" />
                                  Top {clan.rank}
                                </Badge>
                              )}
                            </CardTitle>
                            <div className="flex items-center mt-1">
                              {[...Array(Math.floor(clan.rating))].map((_, i) => (
                                <Star key={i} className="h-3 w-3 text-yellow-500 mr-0.5" />
                              ))}
                              {clan.rating % 1 > 0 && <Star className="h-3 w-3 text-yellow-500 mr-0.5 opacity-50" />}
                              {[...Array(5 - Math.ceil(clan.rating))].map((_, i) => (
                                <Star key={i} className="h-3 w-3 text-gray-500 mr-0.5" />
                              ))}
                              <span className="text-xs text-gray-400 ml-1">({clan.rating})</span>
                            </div>
                          </div>
                        </div>
                        <Badge className={getStatusColor(clan.status)}>{clan.status}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-400 mb-3 line-clamp-2">{clan.description}</p>

                      <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-gray-400 mr-1" />
                          <span>
                            {clan.members}/{clan.maxMembers} members
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Trophy className="h-4 w-4 text-yellow-500 mr-1" />
                          <span>{clan.wins} wins</span>
                        </div>
                        <div className="flex items-center">
                          <Flame className="h-4 w-4 text-purple-400 mr-1" />
                          <span>Level {clan.level}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-gray-400 mr-1" />
                          <span className={getActivityColor(clan.activity)}>{clan.activity}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {clan.specialties.slice(0, 3).map((specialty, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="bg-transparent text-xs text-gray-400 border-gray-600 group-hover:border-purple-500/30 transition-colors"
                          >
                            {getSpecialtyIcon(specialty)}
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0 flex gap-2">
                      <Button
                        variant="outline"
                        className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-700/50 hover:border-purple-500/30 transition-all"
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300">
                        <UserPlus className="mr-2 h-4 w-4" />
                        Join
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center p-8 text-center">
                <div className="max-w-md">
                  <Trophy className="h-16 w-16 mx-auto mb-4 text-gray-600" />
                  <h3 className="text-lg font-medium mb-2">Most Popular Clans</h3>
                  <p className="text-gray-400">Discover the most active and popular clans on the platform.</p>
                  <p className="text-gray-500 text-sm mt-4">No popular clans found with current filters.</p>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="new" className="mt-6">
            {filteredClans.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredClans.map((clan) => (
                  <Card
                    key={clan.id}
                    className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 overflow-hidden rounded-xl shadow-lg group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <div className="relative group mr-3">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md opacity-0 group-hover:opacity-75 blur group-hover:blur-sm transition duration-1000"></div>
                            <Avatar className="h-10 w-10 rounded-md border border-gray-600 relative">
                              <AvatarImage src={clan.avatar || "/placeholder.svg"} />
                              <AvatarFallback className="bg-gradient-to-br from-purple-700 to-indigo-700">
                                {clan.tag}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                          <div>
                            <CardTitle className="text-lg flex items-center">
                              {clan.name}
                              <Badge className="ml-2 bg-purple-500/20 text-purple-400 border-purple-500 text-xs">
                                <Clock className="h-3 w-3 mr-1" />
                                New
                              </Badge>
                            </CardTitle>
                            <div className="flex items-center mt-1">
                              {[...Array(Math.floor(clan.rating))].map((_, i) => (
                                <Star key={i} className="h-3 w-3 text-yellow-500 mr-0.5" />
                              ))}
                              {clan.rating % 1 > 0 && <Star className="h-3 w-3 text-yellow-500 mr-0.5 opacity-50" />}
                              {[...Array(5 - Math.ceil(clan.rating))].map((_, i) => (
                                <Star key={i} className="h-3 w-3 text-gray-500 mr-0.5" />
                              ))}
                              <span className="text-xs text-gray-400 ml-1">({clan.rating})</span>
                            </div>
                          </div>
                        </div>
                        <Badge className={getStatusColor(clan.status)}>{clan.status}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-400 mb-3 line-clamp-2">{clan.description}</p>

                      <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-gray-400 mr-1" />
                          <span>
                            {clan.members}/{clan.maxMembers} members
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Trophy className="h-4 w-4 text-yellow-500 mr-1" />
                          <span>{clan.wins} wins</span>
                        </div>
                        <div className="flex items-center">
                          <Flame className="h-4 w-4 text-purple-400 mr-1" />
                          <span>Level {clan.level}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-gray-400 mr-1" />
                          <span className={getActivityColor(clan.activity)}>{clan.activity}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {clan.specialties.slice(0, 3).map((specialty, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="bg-transparent text-xs text-gray-400 border-gray-600 group-hover:border-purple-500/30 transition-colors"
                          >
                            {getSpecialtyIcon(specialty)}
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0 flex gap-2">
                      <Button
                        variant="outline"
                        className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-700/50 hover:border-purple-500/30 transition-all"
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300">
                        <UserPlus className="mr-2 h-4 w-4" />
                        Join
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center p-8 text-center">
                <div className="max-w-md">
                  <Zap className="h-16 w-16 mx-auto mb-4 text-gray-600" />
                  <h3 className="text-lg font-medium mb-2">Newly Formed Clans</h3>
                  <p className="text-gray-400">Get in on the ground floor with these newly created clans.</p>
                  <p className="text-gray-500 text-sm mt-4">No new clans found with current filters.</p>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Your Clan Applications */}
        <div className="mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-3xl blur-3xl opacity-50"></div>
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <Award className="mr-2 h-5 w-5 text-purple-500" />
            Your Clan Applications
          </h2>

          <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 backdrop-blur-sm relative z-10 overflow-hidden rounded-xl shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl"></div>

            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg bg-gray-900/50 hover:border-amber-500/30 transition-all group">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 rounded-md mr-3 border border-gray-600 group-hover:border-amber-500/50 transition-all">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-gradient-to-br from-blue-700 to-indigo-700">BF</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">Binary Force</h3>
                      <p className="text-sm text-gray-400">Applied 2 days ago</p>
                    </div>
                  </div>
                  <Badge className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-400 border-amber-500">
                    <Clock className="h-3 w-3 mr-1" />
                    Pending
                  </Badge>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg bg-gray-900/50 hover:border-green-500/30 transition-all group">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 rounded-md mr-3 border border-gray-600 group-hover:border-green-500/50 transition-all">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-gradient-to-br from-green-700 to-emerald-700">DP</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">Dynamic Prodigies</h3>
                      <p className="text-sm text-gray-400">Applied 5 days ago</p>
                    </div>
                  </div>
                  <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-500">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Accepted
                  </Badge>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg bg-gray-900/50 hover:border-red-500/30 transition-all group">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 rounded-md mr-3 border border-gray-600 group-hover:border-red-500/50 transition-all">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-gradient-to-br from-purple-700 to-indigo-700">AA</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">Algorithm Avengers</h3>
                      <p className="text-sm text-gray-400">Applied 1 week ago</p>
                    </div>
                  </div>
                  <Badge className="bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-400 border-red-500">
                    <XCircle className="h-3 w-3 mr-1" />
                    Rejected
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Clan Tournaments */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-3xl blur-3xl opacity-50"></div>
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <Trophy className="mr-2 h-5 w-5 text-yellow-500" />
            Upcoming Clan Tournaments
          </h2>

          <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 backdrop-blur-sm relative z-10 overflow-hidden rounded-xl shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl"></div>

            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-all shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <Badge className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500 mb-2">
                        <Crown className="h-3 w-3 mr-1" />
                        Premium Event
                      </Badge>
                      <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Algorithm Masters Tournament
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">A prestigious tournament for the top coding clans.</p>

                      <div className="flex items-center mt-3 space-x-4">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-sm">32 clans</span>
                        </div>
                        <div className="flex items-center">
                          <Trophy className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-sm">10,000 points prize</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-sm">Starts in 3 days</span>
                        </div>
                      </div>
                    </div>

                    <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300">
                      <Trophy className="mr-2 h-4 w-4" />
                      Register Clan
                    </Button>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-lg border border-amber-500/30 hover:border-amber-500/50 transition-all shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <Badge className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-400 border-amber-500 mb-2">
                        <Users className="h-3 w-3 mr-1" />
                        Open Event
                      </Badge>
                      <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Weekly Clan Challenge
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">
                        Weekly competition open to all clans regardless of rank.
                      </p>

                      <div className="flex items-center mt-3 space-x-4">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-sm">Unlimited entries</span>
                        </div>
                        <div className="flex items-center">
                          <Trophy className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-sm">5,000 points prize</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-sm">Starts in 1 day</span>
                        </div>
                      </div>
                    </div>

                    <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 transition-all duration-300">
                      <Trophy className="mr-2 h-4 w-4" />
                      Register Clan
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Create Clan Dialog */}
      <Dialog open={showCreateClanDialog} onOpenChange={setShowCreateClanDialog}>
        <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center">
              <Shield className="mr-2 h-6 w-6 text-purple-500" />
              Create a New Clan
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Form your own clan and lead a team of skilled coders to victory.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-6 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="clan-name">Clan Name</Label>
                <Input
                  id="clan-name"
                  placeholder="Enter clan name"
                  className="bg-gray-900 border-gray-700 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="clan-tag">Clan Tag (2-4 characters)</Label>
                <Input
                  id="clan-tag"
                  placeholder="TAG"
                  maxLength={4}
                  className="bg-gray-900 border-gray-700 text-white uppercase"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="clan-description">Description</Label>
              <Textarea
                id="clan-description"
                placeholder="Describe your clan's focus and goals"
                className="bg-gray-900 border-gray-700 text-white min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label>Specialties (Select up to 3)</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  "Algorithms",
                  "Data Structures",
                  "Dynamic Programming",
                  "Graphs",
                  "Trees",
                  "Recursion",
                  "Bit Manipulation",
                  "Math",
                  "Optimization",
                ].map((specialty) => (
                  <div key={specialty} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={`specialty-${specialty}`}
                      className="rounded bg-gray-900 border-gray-700 text-purple-500"
                    />
                    <Label htmlFor={`specialty-${specialty}`} className="text-sm">
                      {specialty}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="max-members">Maximum Members</Label>
                <Select defaultValue="30">
                  <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                    <SelectValue placeholder="Select max members" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700 text-white">
                    <SelectItem value="10">10 members</SelectItem>
                    <SelectItem value="20">20 members</SelectItem>
                    <SelectItem value="30">30 members</SelectItem>
                    <SelectItem value="40">40 members</SelectItem>
                    <SelectItem value="50">50 members</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="min-level">Minimum Level to Join</Label>
                <Select defaultValue="0">
                  <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                    <SelectValue placeholder="Select minimum level" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700 text-white">
                    <SelectItem value="0">No minimum (Open to all)</SelectItem>
                    <SelectItem value="5">Level 5+</SelectItem>
                    <SelectItem value="10">Level 10+</SelectItem>
                    <SelectItem value="15">Level 15+</SelectItem>
                    <SelectItem value="20">Level 20+</SelectItem>
                    <SelectItem value="30">Level 30+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="privacy">Clan Privacy</Label>
                <Select defaultValue="public">
                  <SelectTrigger className="w-[180px] bg-gray-900 border-gray-700 text-white">
                    <SelectValue placeholder="Select privacy" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700 text-white">
                    <SelectItem value="public">Public (Anyone can apply)</SelectItem>
                    <SelectItem value="private">Private (Invitation only)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowCreateClanDialog(false)}
              className="border-gray-700 hover:bg-gray-700/50 text-black hover:text-white"
            >
              Cancel
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
              <Shield className="mr-2 h-4 w-4" />
              Create Clan
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Level Warning Dialog */}
      <Dialog open={showLevelWarning} onOpenChange={setShowLevelWarning}>
        <DialogContent className="bg-gray-800 border-gray-700 text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold flex items-center">
              <Lock className="mr-2 h-5 w-5 text-amber-500" />
              Level Requirement
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              You need to reach a higher level to create a clan.
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mb-4">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-amber-400 font-medium">Level 10+ Required</p>
                  <p className="text-gray-300 mt-1">
                    Creating a clan requires you to be at least level 10. You are currently level {userData.level}.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-4">
              Continue solving problems and winning battles to level up. You can still join existing clans in the
              meantime.
            </p>

            <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
              <h4 className="font-medium mb-2 flex items-center">
                <Info className="h-4 w-4 text-purple-400 mr-2" />
                How to Level Up Faster
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
                  Win battles against opponents of equal or higher level
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
                  Solve daily challenges consistently
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
                  Participate in tournaments and competitions
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
                  Maintain a winning streak for bonus XP
                </li>
              </ul>
            </div>
          </div>

          <DialogFooter>
            <Button
              onClick={() => setShowLevelWarning(false)}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
            >
              Got It
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
