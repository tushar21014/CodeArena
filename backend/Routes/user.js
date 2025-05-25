const express = require('express');
const User = require('../Models/User');
const Match = require('../Models/Match');
const app = express();
const router = express.Router();
app.use(express.json());
const fetchuser = require('../middleware/fetchuser');

router.post('/addFriend', fetchuser, async (req, res) => {
    try {
        const { friendId } = req.body;
        const user = await User.findById(req.user);
        const friend = await User.findById(friendId);
        // console.log(user);
        if (!friend) {
            return res.status(404).json({ error: "Friend not found" });
        }
        if (user.friends.includes(friendId)) {
            return res.status(400).json({ error: "Friend already exists" });
        }

        user.friends.push(friendId);
        friend.friends.push(user._id);
        await user.save();
        await friend.save();
        res.json({ user, friend });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
);

router.delete('/removeFriend/:friendId', fetchuser, async (req, res) => {
    try {
        const { friendId } = req.params;
        const user = await User.findById(req.user);
        const friend = await User.findById(friendId);
        if (!friend) {
            return res.status(404).json({ error: "Friend not found" });
        }
        if (!user.friends.includes(friendId)) {
            return res.status(400).json({ error: "Friend does not exists" });
        }
        const index = user.friends.indexOf(friendId);
        user.friends.splice(index, 1);
        const index2 = friend.friends.indexOf(user._id);
        friend.friends.splice(index2, 1);
        await user.save();
        await friend.save();
        res.json({ user, friend });
        console.log("Friend Removed Successfully")
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
);

router.get('/getFriends', fetchuser, async (req, res) => {
    try {
        const user = await User.findById(req.user).populate('friends');
        res.json(user.friends);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
);

// Route to get user details
router.get('/getUser', fetchuser, async (req, res) => {

    try {

        let userId = req.user;
        // console.log(userId)
        const user = await User.findById(userId).select("-pass")
        res.send({ user: user, success: true })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.get('/getMatches', fetchuser, async (req, res) => {
    try {
        let userId = req.user;

        // Fetch matches where the user is either player1 or player2 and status is either completed, aborted, or timeout
        const userMatches = await Match.find({
            $or: [
                { player1: userId },
                { player2: userId }
            ],
            $or: [
                { status: "completed" },
                // { status: "aborted" },
                { status: "timeout" }
            ]
        }).populate('player1', 'username level rank ')
            .populate('player2', 'username level rank')
            .populate('winner', 'username level rank')
            .populate('questionId', 'title difficulty')
            .sort({ createdAt: -1 }) // Sort by createdAt in descending order
            .limit(4); // Limit to the last 10 matches


        // Return the matches along with populated user details
        res.json({ userMatches, success: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/leaderboard', async (req, res) => {
    try {
        const topUsers = await User.find()
            .sort({ totalXp: -1 }) // Highest XP first
            .limit(10) // Top 10
            .select('username email level totalXp rank wins losses') // Fields to return

        res.json( topUsers);
    } catch (err) {
        console.error('Error fetching leaderboard:', err);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

module.exports = router