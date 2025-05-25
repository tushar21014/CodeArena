const mongoose = require('mongoose');

const { Schema } = mongoose;


const levelSchema = new Schema({
    level: {
      type: Number,
      required: true,
      unique: true
    },
    xpRequired: {
      type: Number,
      required: true
    },
    nextLevel: {
      type: Number,
      default: null
    },
    xpGainOnWin: {
      type: Number,
      required: true
    },
    clanCreationUnlocked: {
      type: Boolean,
      default: false
    },
    featureUnlocked: {
      type: [String], // You can list features like ["Clans", "ClanWars", "CustomAvatars"]
      default: []
    }
  });

const Level = mongoose.model('Level', levelSchema);
module.exports = Level;
