'use client';

import { useEffect, useState, useRef } from 'react';
import CodeEditor from '../components/CodeEditor';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Description from "../components/description"
import TestCase from "../components/test-case"
import {
    ArrowLeft,
    ArrowRight,
    Play,
    Upload,
    Bell,
    MessageSquare,
    Layout,
    Settings,
    Clock,
    ChevronDown,
} from "lucide-react"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Split from "react-split"; // Import Split for resizable sections
import Result from '../components/Result';
import CenterModal from '../components/Modal';
import analyzeComplexity from '../components/analyzeComplexity';
import LoadingBattle from '../components/Loading';


export default function Game() {
    const [uid, setUid] = useState('');
    const [status, setStatus] = useState('Connecting...');
    const [isReady, setIsReady] = useState(false);
    const [winner, setWinner] = useState(null);
    const [opponentUid, setOpponentUid] = useState(null);
    const [stubCode, setStubCode] = useState([]);
    const [language, setLanguage] = useState("cpp"); // Default to C++
    const [code, setcode] = useState<string>("")
    const [showGiveUpButton, setShowGiveUpButton] = useState(false);
    const [isWatching, setIsWatching] = useState(false);
    const [loading, setLoading] = useState<boolean>(false); // Loading state
    const [stdin, setStdin] = useState([""]); // Input for the code
    const [output, setOutput] = useState([]); // Execution output
    const [error, setError] = useState<string | null>(null); // Error message state
    const [testCase, setTestCase] = useState([]); // Test case state
    const [isCodeRun, setIsCodeRun] = useState(false);  //Make output visible only after code is run
    const [tabs, setTabs] = useState(["description", "editorial", "hints", "submissions"]);
    const [isCorrect, setIsCorrect] = useState(false)
    const [modalShow, setModalShow] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState("")
    const [pageLoading, setPageLoading] = useState(false)
    const router = useRouter();
    interface Question {
        Title: string;
        Content: string;
        Accuracy: string;
        Difficulty: string;
        _id: string;
        // Add other properties if necessary
    }

    const [question, setQuestion] = useState<Question | null>(null);
    // Ref to store the WebSocket instance
    const wsRef = useRef<WebSocket | null>(null);


    useEffect(() => {
        const userUid = localStorage.getItem('id') || '';

        setUid(userUid); // Ensure the UID is set in state

        // Initialize WebSocket only on the client
        if (typeof window !== 'undefined') {
            const ws = new WebSocket('ws://localhost:8080');
            wsRef.current = ws;

            ws.onopen = () => {
                ws.send(JSON.stringify({ type: 'join', uid: userUid, mode: localStorage.getItem('battle-mode') }));
            };

            ws.onmessage = (event) => {
                requestIdleCallback(() => {

                    const data = JSON.parse(event.data);

                    if (data.type === 'status') {
                        setPageLoading(true);
                        setStatus(data.message);
                    } else if (data.type === 'ready') {
                        setPageLoading(false)
                        ws.send(JSON.stringify({ type: 'ready', uid: userUid }));
                        setOpponentUid(data.opponentUid);
                        setStatus('Game Started!');
                        setIsReady(true);
                        setQuestion(data.question);
                        setStubCode(data.stubCode);
                        console.log(stubCode)
                        const parsedTestCases = JSON.parse(data.testCases.test_cases_json); // Convert string to array
                        setTestCase(parsedTestCases);
                        console.log(data.testCases);
                    } else if (data.type === 'result') {
                        setWinner(data.winner);
                        // console.log(data.winner);
                        setStatus(data.winner === userUid ? 'You Win!' : 'You Lose!');
                        console.log(data.winner === userUid ? 'You Win!' : 'You Lose!');
                        // setIsReady(false);
                        // } else if (data.type === "swap_code" && data.code) {
                        //     console.log("Received swapped code:", data.code);
                        //     setcode(data.code); // Update the editor with the swapped code
                    } else if (data.type === "give_up_button") {
                        setShowGiveUpButton(true);
                    } else if (data.type === "watch_opponent") {
                        setIsWatching(true);

                        setOpponentUid(data.opponentUid);
                        setStatus("Watching Opponent's Code...");
                    } else if (data.type === "live_code") {
                        console.log(data.code)
                        if (isWatching) { // Only update if watching
                            console.log("I am live code on the frontend")
                            setcode(data.code);
                        }
                        // setcode(data.code); // Update the editor with the live code
                    } else if (data.type === "error") {
                        setError(data.error);
                    }
                });
            };

            ws.onclose = () => {
                setStatus('Connection closed. Refresh to reconnect.');
            };

            return () => {
                ws.close();
            };

        }
    }, []);


    useEffect(() => {
        if (isWatching) {
            console.log("User can now watch!");
        }
    }, [isWatching]);

    const languageMap: Record<string, number> = {
        javascript: 63,
        python: 71,
        java: 62,
        cpp: 54,
    };

    const handleGiveUp = () => {
        if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
            wsRef.current.send(JSON.stringify({ type: "give_up", uid }));
        }
    };



    const handleClick = async () => {
        console.log("Code submitted in the parent container:", code);
    
        if (!tabs.includes("result")) {
            setTabs([...tabs, "result"]);
        }
    
        setLoading(true);
    
        const results = await runCode();
        if (!results) {
            setLoading(false);
            return;
        }
    
        // ✅ Now check test cases
        const allPassed = results.every(tc => tc.isCorrect === true);
    
        if (!allPassed) {
            console.log("Test case failed");
            setIsCorrect(false);
            await submitCode(question?._id, code, language, "Failed", localStorage.getItem('auth-Token') || '');
            setLoading(false);
            return;
        }
    
        // ✅ All test cases passed, proceed to submit & show modal
        if (!uid) {
            console.error("UID is not set. Cannot send swap request.");
            setLoading(false);
            return;
        }
    
        const token = localStorage.getItem('auth-Token');
        if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
            wsRef.current.send(JSON.stringify({
                type: "click",
                uid,
                code,
                token,
                language,
                questionId: question?._id,
                result: "accepted"
            }));
    
            setIsCorrect(true);
            setModalTitle("You Win!");
            setModalContent("You have successfully completed the challenge. Congratulations!");
            setModalShow(true);
    
            await submitCode(question?._id, code, language, "Accepted", token || '');
        } else {
            setStatus("WebSocket not connected!");
        }
    
        setLoading(false);
    };
    


    const submitCode = async (questionId: string, code: string, language: string, result: string, token: string) => {
        console.log(questionId, " ", code, " ", language, " ", result);
        try {
            const response = await fetch("http://localhost:5000/api/judgeapi/submit", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-Token': token
                },
                body: JSON.stringify({
                    Question_id: questionId,
                    Code: code,
                    Language: language,
                    Result: result
                })
            });

            // Handle the response
            if (response.ok) {
                const data = await response.json();
                console.log('Submission successful:', data);
                // Optionally, handle the success (e.g., show a success message)
            } else {
                const errorData = await response.json();
                console.error('Submission failed:', errorData);
                // Optionally, handle the error (e.g., show an error message)
            }
        } catch (error) {
            console.error('Error:', error);
            // Optionally, handle network errors (e.g., show a network error message)
        }
    }

    const handleSubmitCode = (latestCode: string) => {
        setcode(latestCode);
        console.log("Code executed in the parent container:", latestCode);
    };

    const handleCodeChange = (newCode: string) => {

        if (!isWatching) { // Prevent watchers from sending updates
            setcode(newCode);
            console.log("Watching live now!");

            // Send live updates to the server
            if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
                wsRef.current.send(JSON.stringify({ type: "live_code", uid, code: newCode }));
            }
        }
    };

    const handleWatchLive = () => {
        setIsWatching(true); // Update state first

        // Use setTimeout or useEffect to ensure the state is updated before checking it
        setTimeout(() => {
            console.log("isWatching:", isWatching); // This might still log false because state update is async

            if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
                wsRef.current.send(JSON.stringify({ type: "watch_live", uid, opponentUid }));
            }
        }, 100); // Small delay to allow state update
    };

    const handleRun = async () => {
        setIsCodeRun(true);
        setLoading(true);
    
        const results = await runCode();
        
        setLoading(false); // stop loading regardless of result
        // no WebSocket, no submission here
    };
    

    const runCode = async () => {
        try {
            if (!code.trim()) {
                throw new Error("Code editor is empty. Please write some code.");
            }
    
            const languageId = languageMap[language];
            handleSubmitCode(code);
    
            const response = await axios.post("http://localhost:5000/api/judgeapi/execute", {
                language_id: languageId,
                source_code: code,
                stdin: stdin,
                questionId: question?._id,
            });
    
            if (response.data.error) {
                setError(response.data.details);
                return null;
            }
    
            setOutput(response.data.results);
            setError(null);
    
            return response.data.results;
        } catch (err: any) {
            if (err.response) {
                setError(err.response.data?.error || `Server Error: ${err.response.status} - ${err.response.statusText}`);
            } else if (err.request) {
                setError("Network Error: Unable to reach the server. Please try again.");
            } else {
                console.log("Error:", err);
                setError(err.details || "An unexpected error occurred.");
            }
            return null;
        }
    };
    


    const handleReturn = () => {
        try {
            if (wsRef.current) {
                wsRef.current.send(JSON.stringify({ type: "return_lobby", uid })); // Notify server
                // wsRef.current.close(); // Close WebSocket connection
            }


            // Reset states
            setIsWatching(false);
            setWinner(null);
            setStatus("Returning to lobby...");
            setOpponentUid(null);
            setIsReady(false);
            setShowGiveUpButton(false);

            // Redirect to lobby
            // router.push("/"); // Change to your lobby route

        } catch (error) {
            console.error("Error returning to lobby:", error);
        }
    };


    return (
        <>
        {pageLoading ? (<>
            <LoadingBattle/>
        </>):(<>
            <CenterModal Title={modalTitle} Content={modalContent} isOpen={modalShow} onClose={() => setModalShow(false)} />

            {status && <h1>{status}</h1>}
            {winner && (
                <>
                    <Button variant="ghost" size="sm" onClick={handleWatchLive}>
                        <Layout className="h-4 w-4 mr-2" />
                        Watch Live
                    </Button>

                    <Button variant="ghost" size="sm" onClick={handleReturn}>
                        <Layout className="h-4 w-4 mr-2" />
                        Return to lobby
                    </Button>
                </>
            )}


            {isReady && question && (

                <div className="flex h-screen flex-col bg-[#1e1e1e] text-white">

                    {/* Top Navigation */}
                    <header className="flex items-center justify-between border-b border-gray-800 px-4 py-2">
                        <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="sm">
                                <Layout className="h-4 w-4 mr-2" />
                                Question
                            </Button>
                        </div>
                        <div className="flex items-center space-x-2">
                            {loading ? (<>
                                <Button variant="ghost" size="sm" disabled onClick={handleRun}>
                                    <Play className="h-4 w-4 mr-2" />
                                    Running...
                                </Button>
                            </>) : (<>
                                <Button variant="ghost" size="sm" onClick={handleRun}>
                                    <Play className="h-4 w-4 mr-2" />
                                    Run
                                </Button>
                            </>)}
                            <Button variant="ghost" size="sm" className="text-green-500" onClick={handleClick}>
                                <Upload className="h-4 w-4 mr-2" />
                                Submit
                            </Button>

                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Clock className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MessageSquare className="h-4 w-4" />
                            </Button>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Bell className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Settings className="h-4 w-4" />
                            </Button>
                            <div className="flex items-center space-x-1">
                                <span className="text-sm">0</span>
                                <div className="h-8 w-8 rounded-full bg-gray-700" />
                            </div>
                        </div>
                    </header>

                    <div className="flex flex-1 overflow-hidden">
                        {/* Left Panel */}
                        <Split className="flex flex-1 overflow-hidden" sizes={[30, 70]} minSize={200} gutterSize={10}>

                            <div className="w-[450px] border-r text-white border-gray-800">
                                <Tabs defaultValue="description">
                                    <TabsList className="w-full justify-start border-b border-gray-800 bg-transparent">
                                        {tabs.map((tab) => (
                                            <TabsTrigger key={tab} value={tab} className="data-[state=active]:bg-transparent data-[state=active]:text-white">
                                                {tab.charAt(0).toUpperCase() + tab.slice(1)} {/* Capitalize */}
                                            </TabsTrigger>
                                        ))}
                                    </TabsList>

                                    <TabsContent value="description" className="mt-0">
                                        <Description title={question?.title || "Undefined Title"} difficulty={question?.difficulty || "Undefined Difficulty"} content={question?.description || "Undefined Content"} />
                                    </TabsContent>

                                    <TabsContent value="result" className="mt-0">
                                        <Result result={isCorrect} />
                                    </TabsContent>

                                </Tabs>


                                {/* <button onClick={() => setModalShow(true)} data-modal-target="static-modal" data-modal-toggle="static-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                                    Toggle modal
                                </button> */}

                            </div>

                            <Split direction="vertical" className="flex-1 flex flex-col" sizes={[70, 30]} minSize={100} gutterSize={10}>

                                {/* Main Content */}
                                <div className="flex-1 flex flex-col">
                                    <div className="flex items-center justify-between border-b border-gray-800 px-4 py-2">
                                        <div className="flex items-center space-x-2">
                                            <Select value={language} onValueChange={setLanguage}>
                                                <SelectTrigger className="w-[120px] bg-transparent">
                                                    <SelectValue placeholder="Select language" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="cpp">C++</SelectItem>
                                                    <SelectItem value="java">Java</SelectItem>
                                                    <SelectItem value="python">Python</SelectItem>
                                                    <SelectItem value="javascript">JavaScript</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <Button variant="ghost" size="sm">
                                                Auto
                                                <ChevronDown className="h-4 w-4 ml-2" />
                                            </Button>

                                            {showGiveUpButton && (
                                                <Button variant="ghost" size="sm" onClick={handleGiveUp} className="give-up-button">
                                                    Give Up
                                                </Button>
                                            )}
                                        </div>
                                    </div>


                                    <div className="">
                                        <CodeEditor
                                            stub={stubCode as any}
                                            code={code}
                                            setCode={setcode}
                                            questions={question as Question}
                                            selectedLanguage={language}
                                            handleSubmitCode={handleSubmitCode}
                                            handleCodeChange={handleCodeChange}
                                            isWatching={isWatching}
                                        />
                                    </div>

                                    <div className="border-t border-gray-800">
                                        {testCase && !isCodeRun && <TestCase output={testCase} isEmpty={true} />}

                                        {error ? (
                                            <div className="text-red-500">{error}</div>  // Error message in red (you can customize styles)
                                        ) : (
                                            <TestCase output={output} isEmpty={false} />  // Render TestCase component if there's no error
                                        )}
                                    </div>

                                </div>
                            </Split>
                        </Split>

                    </div>
                </div>
            )}
            </>)}
        </>
    );
}
