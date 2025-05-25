const express = require('express');
const Clan = require('../Models/Clan');
const ClanWar = require('../Models/ClanWar');
const app = express();
const router = express.Router();
app.use(express.json());
const fetchuser = require('../middleware/fetchuser');

router.get('/getClan/:clanId', async (req, res) => {
    try {
        const { clanId } = req.params;
        if(clanId.length == 0){
            const data = await Clan.find({});
            return res.json(data)
        }
        const clan = await Clan.findById(clanId).populate('members', 'name email');
        if (!clan) {
            return res.status(404).json({ error: "Clan not found" });
        }
        if (!user.clans.includes(clanId)) {
            return res.status(400).json({ error: "You are not a member of this clan" });
        }
        res.json(clan);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/getAllClans',async(req,res) =>{
    try {
        const data = await Clan.find({});
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.json({error:"Internal Server Error"});
    }
})

router.post('/createClan', fetchuser, async (req, res) => {
    try{
        const data = await Clan.create({
            name: req.body.name,
            description: req.body.description,
            specialties: req.body.specialties,
            mode: req.body.mode,
            maximumMembers: req.body.maximumMembers,
            minimumLevel: req.body.minimumLevel,
            leader: req.user,
            members: [req.user],
        });

        if(!data){
            return res.status(400).json({ error: "Clan not created" });
        }
        res.json({message:"Clan created successfully"});

    }catch(error){
        if (error.code === 11000 && error.keyPattern?.name) {
            return res.status(400).json({ error: "Clan name already exists. Please choose a different name." });
        }
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router