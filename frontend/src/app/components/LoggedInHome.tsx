"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Trophy,
  Swords,
  Users,
  Zap,
  Activity,
  BarChart3,
  Clock,
  Home,
  User,
  Award,
  Code,
  BrainCircuit,
} from "lucide-react"

import Link from "next/link"
import StartBattleDialog from "./dialogs/StartBattleDialog"
import { useRouter } from "next/navigation"

export default function LoggedInHome() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userDetails, setuserDetails] = useState({});
  const [matches, setMatches] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  useEffect(() => {
    if (localStorage.getItem('auth-Token')) {
      setIsLoggedIn(true);
    }
    if(localStorage.getItem('battle-mode')) {
      localStorage.removeItem('battle-mode');
    }
    getUserDetails();
    getUserMatches();
    getLeaderBoard();
  }, []);

  const router = useRouter();

  const getUserDetails = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/user/getUser", {
        method: "GET",
        headers: {
          'auth-Token': localStorage.getItem('auth-Token') || ''
        }
      });
      const data = await response.json();
      setuserDetails(data["user"]);
      console.log(data["user"]);
    } catch (error) {
      console.error(error);
    }
  }

  const getUserMatches = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/user/getMatches", {
        method: "GET",
        headers: {
          'auth-Token': localStorage.getItem('auth-Token') || ''
        }
      });
      const data = await response.json();
      setMatches(data["userMatches"]);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  const getLeaderBoard = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/user/leaderboard", {
        method: "GET",
      });
      const data = await response.json();
      setLeaderboard(data)
      console.log(data);
    } catch (error) {
      console.error(error);
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
              <Link href="/" className="flex items-center space-x-1 text-white hover:text-purple-400 transition">
                <Home className="h-5 w-5" />
                <span>Home</span>
              </Link>
              <Link href="/battles" className="flex items-center space-x-1 text-gray-400 hover:text-purple-400 transition">
                <Swords className="h-5 w-5" />
                <span>Battles</span>
              </Link>
              <Link href="/clans" className="flex items-center space-x-1 text-gray-400 hover:text-purple-400 transition">
                <Users className="h-5 w-5" />
                <span>Clans</span>
              </Link>
              <Link href="/leaderboard" className="flex items-center space-x-1 text-gray-400 hover:text-purple-400 transition">
                <Trophy className="h-5 w-5" />
                <span>Leaderboard</span>
              </Link>
            </div>

            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500 px-3 py-1">
                  <span>{userDetails.level}</span>
                </Badge>
                <Avatar onClick={() => {router.push("/profile")}} className="cursor-pointer">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-purple-700">{userDetails.username}</AvatarFallback>
                </Avatar>
              </div>) : (
              <Link href="/login" className="flex items-center space-x-1 text-white hover:text-purple-400 transition">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0">
                  <Swords className="mr-2 h-5 w-5" />
                  Login
                </Button>
              </Link>
            )}

            {/* Mobile Navigation */}
            <div className="flex md:hidden fixed bottom-0 left-0 right-0 bg-gray-950 border-t border-gray-800 justify-around py-2">
              <Link href="/" className="flex flex-col items-center p-2 text-white">
                <Home className="h-6 w-6" />
                <span className="text-xs">Home</span>
              </Link>
              <Link href="/battles" className="flex flex-col items-center p-2 text-gray-400">
                <Swords className="h-6 w-6" />
                <span className="text-xs">Battles</span>
              </Link>
              <Link href="/clans" className="flex flex-col items-center p-2 text-gray-400">
                <Users className="h-6 w-6" />
                <span className="text-xs">Clans</span>
              </Link>
              <Link href="/profile" className="flex flex-col items-center p-2 text-gray-400">
                <User className="h-6 w-6" />
                <span className="text-xs">Profile</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-8 pb-20 md:pt-24 md:pb-8">
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
                  <StartBattleDialog />
                  <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400/10">
                    <BrainCircuit className="mr-2 h-5 w-5" />
                    Practice Mode
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

        {/* Quick Stats */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Current Rank</p>
                <p className="text-2xl font-bold text-white">{userDetails.rank}</p>
              </div>
              <Trophy className="h-10 w-10 text-yellow-500" />
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Win Rate</p>
                <p className="text-2xl font-bold text-white">{(userDetails.wins / (userDetails.wins + userDetails.losses)) * 100}%</p>
              </div>
              <Activity className="h-10 w-10 text-green-500" />
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Problems Solved</p>
                <p className="text-2xl font-bold text-white">247</p>
              </div>
              <Code className="h-10 w-10 text-blue-500" />
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Battle Points</p>
                <p className="text-2xl font-bold text-white">{userDetails.xp}</p>
              </div>
              <Zap className="h-10 w-10 text-purple-500" />
            </CardContent>
          </Card>
        </section>

        {/* Battle Options and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Battle Options */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold flex items-center">
              <Swords className="mr-2 h-6 w-6 text-purple-500" />
              Battle Arena
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 backdrop-blur-sm hover:shadow-purple-500/10 hover:border-purple-500/50 transition-all group">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <div className="p-3 rounded-full bg-purple-500/10 mr-3 group-hover:bg-purple-500/20 transition-all">
                      <Swords className="h-6 w-6 text-purple-400" />
                    </div>
                    Solo Battle
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Challenge a random opponent to a 1v1 coding duel
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <StartBattleDialog />
                </CardFooter>
              </Card>

              <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 backdrop-blur-sm hover:shadow-blue-500/10 hover:border-blue-500/50 transition-all group">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <div className="p-3 rounded-full bg-blue-500/10 mr-3 group-hover:bg-blue-500/20 transition-all">
                      <Users className="h-6 w-6 text-blue-400" />
                    </div>
                    Join a Clan
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Team up with other coders and battle together
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full border-blue-500 text-blue-400 hover:bg-blue-500/10">
                    Browse Clans
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 backdrop-blur-sm hover:shadow-green-500/10 hover:border-green-500/50 transition-all group">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <div className="p-3 rounded-full bg-green-500/10 mr-3 group-hover:bg-green-500/20 transition-all">
                      <BrainCircuit className="h-6 w-6 text-green-400" />
                    </div>
                    Practice Mode
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Sharpen your skills with targeted DSA problems
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full border-green-500 text-green-400 hover:bg-green-500/10">
                    Start Practice
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 backdrop-blur-sm hover:shadow-amber-500/10 hover:border-amber-500/50 transition-all group">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <div className="p-3 rounded-full bg-amber-500/10 mr-3 group-hover:bg-amber-500/20 transition-all">
                      <Trophy className="h-6 w-6 text-amber-400" />
                    </div>
                    Tournaments
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Compete in scheduled tournaments for prizes
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full border-amber-500 text-amber-400 hover:bg-amber-500/10">
                    View Schedule
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* Your Stats */}
          <div>
            <h2 className="text-2xl font-bold flex items-center mb-6 ">
              <BarChart3 className="mr-2 h-6 w-6 text-purple-500" />
              Your Stats
            </h2>

            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Performance</CardTitle>
                <CardDescription>Your coding battle statistics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">Algorithm Mastery</span>
                    <span className="text-sm text-white font-medium">78%</span>
                  </div>
                  <Progress value={78} className="h-2 bg-gray-700">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                  </Progress>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">Data Structures</span>
                    <span className="text-sm text-white font-medium">65%</span>
                  </div>
                  <Progress value={65} className="h-2 bg-gray-700">
                    <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
                  </Progress>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">Problem Solving</span>
                    <span className="text-sm text-white font-medium">82%</span>
                  </div>
                  <Progress value={82} className="h-2 bg-gray-700">
                    <div className="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full" />
                  </Progress>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-gray-400 text-sm">Battles Won</p>
                      <p className="text-xl font-bold text-white">{userDetails.wins}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-400 text-sm">Battles Lost</p>
                      <p className="text-xl font-bold text-white">{userDetails.losses}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-400 text-sm">Avg. Time</p>
                      <p className="text-xl font-bold  text-white">14:32</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-400 text-sm">Streak</p>
                      <p className="text-xl font-bold text-white">7 🔥</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Leaderboard and Recent Battles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Leaderboard */}
          <div>
            <h2 className="text-2xl font-bold flex items-center mb-6">
              <Trophy className="mr-2 h-6 w-6 text-purple-500" />
              Leaderboard
            </h2>

            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <Tabs defaultValue="global">
                  <TabsList className="bg-gray-900">
                    <TabsTrigger value="global">Global</TabsTrigger>
                    <TabsTrigger value="friends">Friends</TabsTrigger>
                    <TabsTrigger value="clan">Clan</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-4">
                  {/* Top Player */}
                  {leaderboard && leaderboard.map((player, index) => {
                    // conditionally style for top 1
                    const isTopPlayer = index === 0;

                    const containerClass = isTopPlayer
                      ? "flex items-center p-3 bg-gradient-to-r from-yellow-300/20 to-yellow-500/30 rounded-lg border border-yellow-500/40"
                      : "flex items-center p-3 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-lg border border-amber-500/20";

                    const positionBadgeClass = isTopPlayer
                      ? "bg-yellow-400/30 text-yellow-300"
                      : "bg-amber-500/20 text-amber-400";

                    const avatarBorderClass = isTopPlayer
                      ? "border-yellow-400"
                      : "border-amber-500";

                    const rankBadgeClass = isTopPlayer
                      ? "bg-yellow-400/20 text-yellow-300 border-yellow-400"
                      : "bg-amber-500/20 text-amber-400 border-amber-500";

                    return (
                      <div key={player._id} className={containerClass}>
                        <div className={`flex items-center justify-center h-8 w-8 rounded-full ${positionBadgeClass} font-bold mr-3`}>
                          {index + 1}
                        </div>

                        <Avatar className={`h-10 w-10 border-2 ${avatarBorderClass} mr-3`}>
                          <AvatarImage src="/placeholder.svg" />
                          <AvatarFallback className="bg-amber-700">
                            {player.username[0].toUpperCase()}
                          </AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                          <p className="font-medium">{player.username}</p>
                          <p className="text-xs text-gray-400">{player.totalXp} points</p>
                        </div>

                        <Badge className={rankBadgeClass}>
                          <Award className="h-3 w-3 mr-1" />
                          {player.rank}
                        </Badge>
                      </div>
                    );
                  })}


                  <Button variant="outline" className="w-full mt-2">View Full Leaderboard</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Battles */}
          <div>
            <h2 className="text-2xl font-bold flex items-center mb-6">
              <Clock className="mr-2 h-6 w-6 text-purple-500" />
              Recent Battles
            </h2>


            <Card className="bg-gray-800/50 text-gray-400 border-gray-700 backdrop-blur-sm">
              <CardContent className="pt-6 px-6">
                <div className="space-y-4">
                  {matches && matches.map((match, index) => {
                    const player1 = match.player1;
                    const player2 = match.player2;
                    const userId = localStorage.getItem('id');
                    const otherPlayer = userId === player1._id ? player2.username : player1.username;
                    const winner = userId === match.winner._id ? "Victory" : "Defeat";
                    const badgeClass = winner === "Victory"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400";
                    const cardClass = winner === "Victory"
                      ? "hover:border-green-500/50"
                      : "hover:border-red-500/50";

                    return (
                      <div key={index} className={`p-4 rounded-lg bg-gray-900/80 border border-gray-700 ${cardClass} transition-colors`}>
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <Badge className={`${badgeClass} mb-2`}>{winner}</Badge>
                            <h3 className="font-medium">{match.questionId["title"]}</h3>
                          </div>
                          <p className="text-xs text-gray-400">2 hours ago</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Avatar className="h-8 w-8 mr-2">
                              <AvatarImage src="/placeholder.svg" />
                              <AvatarFallback className="bg-purple-700">YO</AvatarFallback>
                            </Avatar>
                            <span className="text-sm">You</span>
                            <Badge className="ml-2 bg-gray-700 text-gray-300 text-xs">
                              5:42
                            </Badge>
                          </div>
                          <span className="text-sm text-gray-400">vs</span>
                          <div className="flex items-center">
                            <Badge className="mr-2 bg-gray-700 text-gray-300 text-xs">
                              8:15
                            </Badge>
                            <span className="text-sm">DataDragon</span>
                            <Avatar className="h-8 w-8 ml-2">
                              <AvatarImage src="/placeholder.svg" />
                              <AvatarFallback className="bg-gray-700">{otherPlayer.toUpperCase()}</AvatarFallback>
                            </Avatar>
                          </div>
                        </div>
                      </div>
                    )
                  })}

                  <Button variant="outline" className="w-full mt-2">View Battle History</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
