const express = require('express')
const connectToMongo = require('./db')
const router = require('./Routes/auth.js')
const app = express()
const port = 5000 // Use the PORT environment variable if it exists
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });
const notificationWSS = new WebSocket.Server({ port: 8081 });
const User = require('./Models/User.js')
const Question = require('./Models/Questions');
const Stub = require('./Models/Stubs');
const TestCase = require('./Models/TestCases');
const Match = require('./Models/Match');
const Submission = require('./Models/Submissions');
const Rank = require('./Models/Rank');
var cors = require('cors');

require('dotenv').config();
connectToMongo()
const connections = {}; // Store user connections based on uid
const waitingQueue = []; // Queue for users waiting to connect
const activeMatches = {}; // Track active matches { matchId: [uid1, uid2] }
const notificationConnections = {};
const userCodes = {}; // Store user's code for swapping
const activeGames = {}; // To store active game sessions
const waitingPlayers = {}; // To store players waiting for a response
const liveCodingSessions = {}

wss.on('connection', (ws) => {
    let uid; // Track the current user's UID

    ws.on('message', async (message) => {
        const data = JSON.parse(message);

        if (data.type === 'join') {
            // Fetch user by UID

            const user = await User.findOne({ _id: data.uid });
            if (!user) {
                ws.send(JSON.stringify({ type: 'error', message: 'User not found' }));
                return;
            }

            uid = data.uid;

            if (connections[uid]) {
                ws.send(JSON.stringify({ type: 'error', message: 'You are already connected' }));
                return;
            }

            connections[uid] = ws; // Map the WebSocket to this UID
            console.log(`${uid} joined`);

            // Check if there's a waiting user
            if (waitingQueue.length > 0) {
                const opponentUid = waitingQueue.shift(); // Get the first user from the queue
                const opponentWs = connections[opponentUid];
                // const questions = await Question.findById("67e7aa2fde86b10ab67f2099");

                // Notify both users that the game is ready
                const questions = await Question.aggregate([
                    { $match: { returnType: 'int' } }, // Filter documents where ReturnType is 'int'
                    { $sample: { size: 1 } }           // Randomly sample one document
                ]);
                // console.log(questions);

                const match = await Match.create({
                    player1: uid,
                    player2: opponentUid,
                    mode: data.mode,
                    questionId: questions[0]._id, // Set to null initially
                    status: 'ongoing',
                });

                if (!match) {
                    console.log("Match creation failed");
                    ws.send(JSON.stringify({ type: 'error', message: 'Match creation failed' }));
                    return;
                }
                const stub = await Stub.findById(questions[0].stub);
                // console.log(stub);
                const testCase = await TestCase.findById(questions[0].testCases);
                // console.log(testCase)
                ws.send(JSON.stringify({ type: 'ready', opponentUid, question: questions[0], stubCode: stub, testCases: testCase }));
                opponentWs.send(JSON.stringify({ type: 'ready', opponentUid: uid, question: questions[0], stubCode: stub, testCases: testCase }));

                // Mark the match as active
                const matchId = `${uid}-${opponentUid}`;
                activeMatches[matchId] = [uid, opponentUid];

                // Send the question to the frontend
                // Update isFree to false for both users
                await User.updateMany({ _id: { $in: [uid, opponentUid] } }, { $set: { isFree: false } });

                console.log(activeMatches)
            } else {
                // Add the user to the waiting queue
                waitingQueue.push(uid);
                console.log("You are in the queue")
                ws.send(JSON.stringify({ type: 'status', message: 'Waiting for an opponent...' }));
            }

        } else if (data.type === 'click') {
            // Find the match of the user who submitted
            const match = Object.entries(activeMatches).find(([_, players]) => players.includes(uid));

            if (match) {
                const [matchId, players] = match;
                const opponentUid = players.find((id) => id !== uid);

                if (connections[uid] && connections[opponentUid]) {
                    console.log(`Code submitted by ${uid}, marking as winner.`);

                    connections[uid].send(JSON.stringify({ type: "result", winner: uid, message: "You Win!" }));
                    // connections[opponentUid].send(JSON.stringify({ type: "result", winner: uid, message: "You Lose!" }));
                    const match = await Match.findOneAndUpdate({
                        player1: uid,
                        player2: opponentUid,
                        status: 'ongoing',
                    }, {
                        status: 'completed',
                        winner: uid,
                        endReason: 'winner',
                        endedAt:  new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) // IST format
                    });

                    const user = await User.findById(uid);
                    // console.log("user is defined", user)
                    const currentRank = user.rank;
                    // console.log("Current rank is ", currentRank)
                    let currentXP = user.xp;
                    let totalXp = user.totalXp;
                    let wins = user.wins;
                    // console.log("Current XP is ", currentXP)
                    const rank = await Rank.findOne({ rank: currentRank });
                    // console.log("Rank is ", rank)
                    currentXP += rank.xpGainOnWin; 
                    totalXp += rank.xpGainOnWin; 
                    
                    // console.log("Rank XP is ", currentXP)
                    if(currentXP > rank.xpThreshold) {
                        user.rank = rank.nextRank; // Update the user's rank
                        await user.save(); // Save the user with the new rank
                    }

                    user.wins = wins + 1; // Increment wins
                    user.xp = currentXP; // Update the user's XP
                    user.totalXp = totalXp; // Update the user's XP
                    await user.save(); 
                    console.log("Rank updated successfully");

                    if (!match) {
                        console.log("Match not found or already completed");
                        return;
                    } else{
                        console.log("Match updated successfully");
                    }
                    // Store submitted code
                    userCodes[uid] = data.code;

                    // Notify the winner they can watch the opponent live
                    // connections[uid].send(JSON.stringify({ type: "watch_opponent" }));

                    // Set timeout for loser’s "Give Up" button after 30 sec
                    setTimeout(() => {
                        if (connections[opponentUid]) {
                            connections[opponentUid].send(JSON.stringify({ type: "give_up_button" }));
                        }
                    }, 3000); // 30 seconds delay

                    submitCode(data.questionId, data.code, data.language, "Accepted", data.token);

                }
            }
        }

        else if (data.type === "give_up") {
            // When the loser clicks "Give Up", send the winner's code
            const match = Object.entries(activeMatches).find(([_, players]) => players.includes(uid));

            if (match) {
                const [matchId, players] = match;
                const winnerUid = players.find((id) => id !== uid); // Get winner's UID

                if (userCodes[winnerUid]) {
                    connections[uid].send(JSON.stringify({ type: "swap_code", code: userCodes[winnerUid] }));
                }
            }
        }
        else if (data.type === "watch_live") {
            console.log(`${uid} requested to watch ${data.opponentUid} live`);

            connections[uid].send(JSON.stringify({ type: "watch_opponent", opponentUid: data.opponentUid }));
            // Store that this winner is watching the opponent
            liveCodingSessions[data.opponentUid] = uid;
        }

        else if (data.type === "live_code") {
            // console.log(liveCodingSessions)
            if (liveCodingSessions[uid]) {
                // console.log("I am in live code");
                const watcherUid = liveCodingSessions[uid];
                // console.log("I am the watcher ", watcherUid);

                if (connections[watcherUid]) {
                    connections[watcherUid].send(JSON.stringify({ type: "live_code", code: data.code }));
                }
            }
        }

        else if (data.type === 'friendGame') {
            // Fetch user by UID
            const user = await User.findOne({ _id: data.uid });
            if (!user) {
                ws.send(JSON.stringify({ type: 'error', message: 'User not found' }));
                return;
            }

            uid = data.uid;

            if (connections[uid]) {
                ws.send(JSON.stringify({ type: 'error', message: 'You are already connected' }));
                return;
            }

            connections[uid] = ws; // Map the WebSocket to this UID
            console.log(`${uid} joined`);
            console.log(activeGames);
            if (activeGames[data.sessionId]) {
                const players = activeGames[data.sessionId]; // Array of players
                console.log(players);
                const opponentUid = players.find((player) => player !== uid); // Get the opponent's UID
                console.log(opponentUid);
                const opponentUser = await User.findById(opponentUid);
                if (!opponentUser.isFree) {
                    ws.send(JSON.stringify({ type: 'error', message: 'Opponent is busy' }));
                    return;
                }
                if (!opponentUid) {
                    ws.send(JSON.stringify({ type: 'error', message: 'Opponent not found in the game session' }));
                    return;
                }

                const opponentWs = connections[opponentUid];
                // console.log(opponentWs);
                if (!opponentWs || opponentWs.readyState !== WebSocket.OPEN) {
                    ws.send(JSON.stringify({ type: 'error', message: 'Opponent is not connected' }));
                    return;
                }

                console.log(`Opponent UID: ${opponentUid}`);
                // console.log(`Connections:`, connections);

                // Notify both users that the game is ready
                // const questions = await Question.findById("67e7aa2fde86b10ab67f2099");
                // const questions = await Question.aggregate([{ $sample: { size: 1 } }]);
                const questions = await Question.aggregate([
                    { $match: { returnType: 'int' } }, // Filter documents where ReturnType is 'int'
                    { $sample: { size: 1 } }           // Randomly sample one document
                ]);
                console.log(questions);

                const stub = await Stub.find({ question: questions._id });

                const testCase = await TestCase.find({ question_id: questions._id });
                console.log("I am testcase", testCase)
                // console.log(stub);

                ws.send(JSON.stringify({ type: 'ready', opponentUid, question: questions, stubCode: stub, testCases: testCase }));
                opponentWs.send(JSON.stringify({ type: 'ready', opponentUid: uid, question: questions, stubCode: stub, testCases: testCase }));

                // Mark the match as active
                const matchId = `${uid}-${opponentUid}`;
                activeMatches[matchId] = [uid, opponentUid];

                // Update isFree to false for both users
                await User.updateMany({ _id: { $in: [uid, opponentUid] } }, { $set: { isFree: false } });

                console.log(activeMatches);
            } else {
                // Add the user to the waiting queue
                waitingQueue.push(uid);
                console.log("You are in the queue");
                ws.send(JSON.stringify({ type: 'status', message: 'Waiting for an opponent...' }));
            }
        }

    });

    ws.on('close', async () => {
        console.log(`${uid} disconnected`);
        // const updateMatch = await Match.findOneAndUpdate({
        //     player1: uid,
        //     status: 'ongoing',
        // }, {
        //     status: 'aborted',
        //     winner: null,
        //     endReason: 'disconnected',
        //     endedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) // IST format
        // });
        // const rank = await Rank.findOne({ rank: uid.rank });
        // const user = await User.findById(uid);

        // user.totalXp -= rank.xpGainOnWin+20; // Update the user's total XP
        // user.losses = losses+1; // Increment losses
        // await user.save();
        delete connections[uid]; // Remove the connection when the user disconnects

        // Remove user from waiting queue if present
        const queueIndex = waitingQueue.indexOf(uid);
        if (queueIndex !== -1) waitingQueue.splice(queueIndex, 1);

        // End the match if the user was in an active match
        const match = Object.entries(activeMatches).find(([_, players]) => players.includes(uid));
        if (match) {
            const [matchId, players] = match;
            const opponentUid = players.find((id) => id !== uid);

            // Notify the opponent that the user disconnected
            if (connections[opponentUid]) {
                connections[opponentUid].send(JSON.stringify({ type: 'error', message: 'Opponent disconnected' }));
                waitingQueue.push(opponentUid); // Re-add the opponent to the queue
            }

            delete activeMatches[matchId]; // Remove the match

            console.log(matchId, 'ended');
            await User.updateOne({ _id: uid }, { $set: { isFree: true } });
        }
    });
});

notificationWSS.on('connection', (ws, req) => {
    let uid;

    ws.on('message', async (message) => {
        const data = JSON.parse(message);

        if (data.type === 'register') {
            uid = data.uid;
            if (!notificationConnections[uid]) {
                notificationConnections[uid] = ws;
                const user = await User.findByIdAndUpdate(uid, { isFree: true });
                broadcastFriendStatus(uid, true, true);
                console.log(`User ${uid} connected for notifications`);
            }
        } else if (data.type === 'unsubscribe') {
            if (uid && notificationConnections[uid]) {
                delete notificationConnections[uid];
                console.log(`User ${uid} unsubscribed from notifications`);
            }
        }
        else if (data.type === 'challenge') {
            // First player sends a challenge
            const targetWs = notificationConnections[data.to];
            if (targetWs && targetWs.readyState === WebSocket.OPEN) {
                // Notify the challenged player
                targetWs.send(
                    JSON.stringify({
                        type: 'challenge',
                        from: data.from,
                        to: data.to,
                        message: data.message,
                    })
                );

                // Store the first player in waitingPlayers
                waitingPlayers[data.from] = data.to;
            }
        } else if (data.type === 'challengeResponse') {
            if (data.accept) {
                console.log(data);

                // Second player accepts the challenge
                const challenger = data.from; // The player who initiated the challenge
                const accepter = data.to; // The player who accepted the challenge

                // Create a unique game session
                if (waitingPlayers[challenger] !== accepter) {
                    const sessionId = `game-${Date.now()}-${challenger}-${accepter}`;
                    activeGames[sessionId] = [challenger, accepter];

                    console.log(`Game session started: ${sessionId}`);

                    // Notify both players to start the game and include the sessionId
                    [challenger, accepter].forEach((playerId) => {
                        const playerWs = notificationConnections[playerId];
                        if (playerWs && playerWs.readyState === WebSocket.OPEN) {
                            playerWs.send(
                                JSON.stringify({
                                    type: 'startGame',
                                    sessionId, // Include the sessionId in the message
                                    message: `Game session started!`,
                                })
                            );
                        }
                    });

                    console.log(activeGames);
                }
                // Remove from waitingPlayers
                delete waitingPlayers[challenger];
            } else {
                // Notify the challenger that the challenge was declined
                console.log("The opponent: " + data.to)
                console.log("The Homo: " + data.from)
                const challengerWs = connections[data.from];
                const recieverWs = notificationConnections[data.to];

                if (challengerWs && challengerWs.readyState === WebSocket.OPEN) {
                    challengerWs.send(
                        JSON.stringify({
                            type: 'challengeDeclined',
                            message: `Your challenge was declined.`,
                        })
                    );
                }

                if (recieverWs && recieverWs.readyState === WebSocket.OPEN) {
                    recieverWs.send(
                        JSON.stringify({
                            type: 'challengeDeclined',
                            message: `Your challenge was declined.`,
                        })
                    );
                }

                delete waitingPlayers[data.from];
            }
        }
    });

    ws.on('close', () => {
        if (uid && notificationConnections[uid]) {
            delete notificationConnections[uid];
            broadcastFriendStatus(uid, true, false);
            console.log(`User ${uid} disconnected from notifications`);

            // Remove from waitingPlayers if disconnected
            for (const [challenger, accepter] of Object.entries(waitingPlayers)) {
                if (challenger === uid || accepter === uid) {
                    delete waitingPlayers[challenger];
                    console.log(`Removed waiting player: ${uid}`);
                }
            }

        }
    });
});

async function submitCode(questionId, code, language, result, token) {
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

const sendNotification = (uid, message) => {
    const userWs = notificationConnections[uid];
    if (userWs && userWs.readyState === WebSocket.OPEN) {
        userWs.send(JSON.stringify({ type: 'notification', message }));
    }
};

const broadcastFriendStatus = (friendId, isOnline, isFree) => {
    const data = JSON.stringify({
        type: 'statusUpdate',
        friendId,
        isFree,
        isOnline
    });
    Object.values(notificationConnections).forEach((ws) => {
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(data);
        }
    });
};


// Function to broadcast notifications to all connected users
const broadcastNotification = (message) => {
    Object.values(notificationConnections).forEach((ws) => {
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify({ type: 'notification', message }));
        }
    });
};

// Example: Send notifications based on some event
setInterval(() => {
    broadcastNotification('This is a live update for all users!');
}, 30000); // Broadcast every 30 seconds



console.log('WebSocket server running on http://localhost:8080');
console.log('Notification WebSocket server running on http://localhost:8081');


app.use(cors());
app.use(express.json());
app.use('/api/auth', require("./Routes/auth"))
app.use('/api/judgeapi', require("./Routes/judgeapi"))
app.use('/api/user', require("./Routes/user"))
app.use('/api/clan', require("./Routes/clan"))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = router