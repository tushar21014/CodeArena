const mongoose = require('mongoose');

const { Schema } = mongoose;


const clanWarParticipant = new Schema({
    questionId:{
        type: Schema.Types.ObjectId,
        ref: 'questions',
        required: true
    },
    starsEarned:{
        type: Number,
        // make it value from 0-3
        required: true
    },
    submission:{
        type: Schema.Types.ObjectId,
        ref: 'Submissions',
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

const ClanWarParticipant = mongoose.model('ClanWarParticipant', clanWarParticipant);
module.exports = ClanWarParticipant;
