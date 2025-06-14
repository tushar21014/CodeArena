'use client';

import { useEffect, useState, useRef } from 'react';
import CodeEditor from '../components/CodeEditor';
import { useRouter } from 'next/navigation';

export default function friendChallenge() {
    const [uid, setUid] = useState('');
    const [status, setStatus] = useState('Connecting...');
    const [isReady, setIsReady] = useState(false);
    const [winner, setWinner] = useState(null);
    const [opponentUid, setOpponentUid] = useState(null);
    const [stubCode, setStubCode] = useState([]);
    interface Question {
        Content: string;
        Accuracy: string;
        Difficulty: string;
        _id: string;
        // Add other properties if necessary
    }

    const [question, setQuestion] = useState<Question | null>(null);
    // Ref to store the WebSocket instance
    const wsRef = useRef<WebSocket | null>(null);
    const Router = useRouter();
    useEffect(() => {
        // Generate a random UID for testing or replace it with real auth logic
        // localStorage.setItem('uid', userUid);
        const userUid = localStorage.getItem('id')

        // Initialize WebSocket and store in ref
        const ws = new WebSocket('ws://localhost:8080');
        wsRef.current = ws;

        ws.onopen = () => {
            ws.send(JSON.stringify({ type: 'friendGame',uid: localStorage.getItem('id'), sessionId: localStorage.getItem('sessionId') }));
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);

            if (data.type === 'status') {
                setStatus(data.message);
            } else if (data.type === 'ready') {
                setStubCode(data.stubCode);
                ws.send(JSON.stringify({ type: 'ready', uid: userUid }));
                setOpponentUid(data.opponentUid);
                setStatus('Game Started!');
                setIsReady(true);
                setQuestion(data.question);
                console.log(data.question);

            } else if (data.type === 'result') {
                setWinner(data.winner);
                setStatus(data.winner === userUid ? 'You Win!' : 'You Lose!');
                setIsReady(false);
            } else if (data.type === 'challengeDeclined'){
                setStatus('Challenge Declined');
                console.log('Challenge declined:', data.message);
                Router.push('/'); // Redirect to home page
            }
        };

        ws.onclose = () => {
            setStatus('Connection closed. Refresh to reconnect friend Challenge page.');
        };

        return () => {
            ws.close();
        };
    }, []);

    const handleClick = () => {
        // Ensure WebSocket is open before sending
        if (wsRef.current && (wsRef.current as WebSocket).readyState === WebSocket.OPEN) {
            (wsRef.current as WebSocket).send(JSON.stringify({ type: 'click', uid }));
        } else {
            setStatus('WebSocket not connected!');
        }
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '50px' }}>{status}</h1>
            {opponentUid && <p>Playing against: {opponentUid}</p>}
            {isReady && question && (
                <div className='flex flex-row w-[90vw] m-auto'>
                    <div className='pr-[10vw] w-1/2'>
                    <div
                        className="text-justify"
                        dangerouslySetInnerHTML={{ __html: question.Content }}
                    ></div>
                    </div>
                    <div className='w-1/2'> <CodeEditor stub={stubCode as any} questions={question as Question} /></div>

                </div>
            )}
            {winner && <p>Winner: {winner}</p>}
        </div>
    );
}
