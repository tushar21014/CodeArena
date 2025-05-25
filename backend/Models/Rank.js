const mongoose = require('mongoose');
const { Schema } = mongoose;

const rankSchema = new Schema({
    rank: {
        type: String,
        enum: ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Master', 'Grandmaster'],
        required: true,
        unique: true
    },
    xpGainOnWin: {
        type: Number,
        required: true
    },
    xpThreshold: {
        type: Number,
        required: true
    },
    nextRank: {
        type: String,
        enum: ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Master', 'Grandmaster'],
        default: null
    },
    prevRank: {
        type: String,
        enum: ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Master', 'Grandmaster'],
        default: null
    },
    
});

const Rank = mongoose.model('rank', rankSchema);
module.exports = Rank;
