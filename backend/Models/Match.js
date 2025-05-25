const mongoose = require('mongoose');

const { Schema } = mongoose;


const matchSchema = new Schema({
    player1: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    player2: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    winner: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: false
    },
    mode: {
        type: String,
        enum: ['speed', 'efficiency','blind'],
        required: true
    },
    questionId: {
        type: Schema.Types.ObjectId,
        ref: 'questions',
        required: true
    },
    status: {
        type: String,
        enum: ['ongoing', 'completed', 'aborted', 'timeout'],
        default: 'ongoing'
    },
    endReason: {
        type: String,
        default: null
    },
    createdAt: {
        type: String,
        required: true,
        default: () => new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) // IST format
    },
    endedAt: {
        type: String,
        default: null
    },
});

const Match = mongoose.model('Match', matchSchema);
module.exports = Match;
