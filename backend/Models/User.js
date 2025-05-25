const mongoose = require('mongoose');

const { Schema } = mongoose;


const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    level:{
        type: Number,
        default: 1,
        required: true
    },
    xp:{
        type: Number,
        default: 0,
        required: true
    },
    totalXp:{
        type: Number,
        default: 0,
        required: true
    },
    rank: {
        type: String,
        enum: [
            'Bronze', 'Silver', 'Gold',
            'Platinum', 'Diamond', 'Master', 'Grandmaster'
        ],
        default: 'Bronze',
        required: true
    },
    wins:{
        type: Number,
        default: 0,
        required: true
    },
    losses:{
        type: Number,
        default: 0,
        required: true
    },
    clanId:{
        type: Schema.Types.ObjectId,
        ref: 'Clans',
        required: false
    },
    verify_token: {
        type: String
    },
    isOnline: {
        type: Boolean,
        default: false,
    },
    isFree: {
        type: Boolean,
        default: true,
        required: true
    },
    date: {
        type: Date,
        default: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        required: true

    },
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }]
});

const user = mongoose.model('Users', userSchema)
module.exports = user;