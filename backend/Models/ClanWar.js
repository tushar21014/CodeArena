const mongoose = require('mongoose');

const { Schema } = mongoose;


const clanWarSchema = new Schema({
    ClanA:{
        type: Schema.Types.ObjectId,
        ref: 'Clan',
        required: true
    },
    ClanB:{
        type: Schema.Types.ObjectId,
        ref: 'Clan',
        required: true
    },
    participants:[{
        type: [Schema.Types.ObjectId],
        ref: 'ClanWarParticipant',
        required: true
    }],
    result:{
        type: String,
        enum: ['ClanA', 'ClanB', 'Draw'],
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },endedAt:{
        type: Date,
        default: Date.now
    },
});

const ClanWar = mongoose.model('ClanWar', clanWarSchema);
module.exports = ClanWar;
