const mongoose = require('mongoose');

const { Schema } = mongoose;


const clanSchema = new Schema({
    name:{
        type: String,
        unique: true,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    specialties:{
        type: Schema.Types.ObjectId,
        ref: 'Tag',
        required: true
    },
    leader:{
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    mode:{
        type: String,
        enum: ['Public', 'Private'],
        default: 'Public',
        required: true
    },
    maximumMembers:{
        type: Number,
        default: 50,
        required: true
    },
    minimumLevel:{
        type: Number,
        default: 1,
        required: true
    },
    members:[{
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: false
    }],
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
    totalStars:{
        type: Number,
        default: 0,
    },
    level:{
        type: Number,
        default: 1,
        required: true
    },
    wars:[{
        type: Schema.Types.ObjectId,
        ref: 'ClanWar',
        required: false
    }],
    createdAt:{
        type: Date,
        default: Date.now
    },
});

const Clan = mongoose.model('Clan', clanSchema);
module.exports = Clan;
