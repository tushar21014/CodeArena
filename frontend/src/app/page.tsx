// frontend/src/app/page.tsx
"use client";

import Link from "next/link";
import HomePage from "./components/Home";
import { ToastProvider } from "./Context/CreateStates";
import { WebSocketProvider } from './WebSocketContext';
import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle2, Code2, Database, Terminal, Layers, CodepenIcon as Javascript, Drama } from "lucide-react"
import Nav from "./components/Nav";

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [questions, setQuestions] = useState([]);
    const getQuestions = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/judgeapi/questions");
            const data = await response.json();
            console.log(data);
            setQuestions(data);
        } catch (error) {
            console.error(error);
            
        }   
    };

    useEffect(() => {
        if (localStorage.getItem('auth-Token')) {
            setIsLoggedIn(true);
        }
        getQuestions();
    }, []);

    return (
        <div>
        {/* // <WebSocketProvider> */}
            <Nav/>
            {/* <div className="flex justify-center items-center min-h-screen bg-background" style={{backgroundColor:"#1E1E1E"}}>

            <main className="mt-[10vh] min-h-screen bg-background p-6 max-w-[80vw]" style={{backgroundColor:"#1E1E1E"}}>
                Course Cards
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
                        <CardContent className="p-6">
                            <h2 className="text-xl font-bold mb-2">Interview Crash Course:</h2>
                            <p className="mb-4">System Design for Interviews and Beyond</p>
                            <Button variant="secondary" className="bg-white text-emerald-700 hover:bg-gray-100">
                                Start Learning
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-violet-600 to-violet-700 text-white">
                        <CardContent className="p-6">
                            <h2 className="text-xl font-bold mb-2">Interview Crash Course:</h2>
                            <p className="mb-4">Data Structures and Algorithms</p>
                            <Button variant="secondary" className="bg-white text-violet-700 hover:bg-gray-100">
                                Start Learning
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                        <CardContent className="p-6">
                            <h2 className="text-xl font-bold mb-2">Top Interview Questions</h2>
                            <p className="mb-4">&nbsp;</p>
                            <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                                Get Started
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                Topic Tags
                <div className="flex flex-wrap gap-4 mb-8">
                    <Button variant="outline" className="gap-2">
                        <Code2 className="w-4 h-4" />
                        All Topics
                    </Button>
                    <Button variant="outline" className="gap-2">
                        <Layers className="w-4 h-4" />
                        Algorithms
                    </Button>
                    <Button variant="outline" className="gap-2">
                        <Database className="w-4 h-4" />
                        Database
                    </Button>
                    <Button variant="outline" className="gap-2">
                        <Terminal className="w-4 h-4" />
                        Shell
                    </Button>
                    <Button variant="outline" className="gap-2">
                        <Javascript className="w-4 h-4" />
                        JavaScript
                    </Button>
                </div>

                Problem Categories
                <div className="flex flex-wrap gap-4 mb-8">
                    <Badge variant="secondary" className="text-sm">
                        Array 1836
                    </Badge>
                    <Badge variant="secondary" className="text-sm">
                        String 761
                    </Badge>
                    <Badge variant="secondary" className="text-sm">
                        Hash Table 667
                    </Badge>
                    <Badge variant="secondary" className="text-sm">
                        Dynamic Programming 564
                    </Badge>
                    <Badge variant="secondary" className="text-sm">
                        Math 558
                    </Badge>
                    <Badge variant="secondary" className="text-sm">
                        Sorting 436
                    </Badge>
                    <Badge variant="secondary" className="text-sm">
                        Greedy 399
                    </Badge>
                </div>

                Problems Table
                <div className="rounded-md border mb-8 text-white">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Status</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Solution</TableHead>
                                <TableHead>Acceptance</TableHead>
                                <TableHead>Difficulty</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {questions.map((question: any) => (
                                <TableRow key={question.id} className="text-white">
                                    <TableCell>
                                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    </TableCell>
                                    <TableCell className="font-medium">{question.Title}</TableCell>
                                    <TableCell>{question._id}</TableCell>
                                    <TableCell>{question.Accuracy}</TableCell>
                                    <TableCell>
                                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                                            {question.Difficulty}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                My Questions List
                <Card>
                    <CardContent className="p-6">
                        <h2 className="text-xl font-bold mb-4">My Questions</h2>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <Input placeholder="Add a new question..." className="flex-1" />
                                <Button>Add</Button>
                            </div>
                            <div className="space-y-2">
                                Example questions
                                <div className="p-3 rounded-lg bg-muted">
                                    <p className="font-medium">Implement Binary Search Tree</p>
                                </div>
                                <div className="p-3 rounded-lg bg-muted">
                                    <p className="font-medium">Solve Dynamic Programming Problems</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </main>
            </div> */}

            <ToastProvider>
                <ToastContainer
                    position="bottom-right"
                    autoClose={15000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
                <div>
                    <HomePage />
                </div>

                <div className='mt-[10vh]'>


                <Link href={"/game"}>
                    <button type="button" className=" text-white mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Play Online</button>

                </Link>

            </div>
            </ToastProvider>
        {/* </WebSocketProvider> */}
        </div>
    );
}