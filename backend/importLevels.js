const connectToMongo = require("./db");
const Level = require("./Models/Levels");

connectToMongo();

const levelData = [
  { level: 1, xpRequired: 0, xpGainOnWin: 100, nextLevel: 2 },
  { level: 2, xpRequired: 100, xpGainOnWin: 150, nextLevel: 3 },
  { level: 3, xpRequired: 250, xpGainOnWin: 200, nextLevel: 4 },
  { level: 4, xpRequired: 450, xpGainOnWin: 250, nextLevel: 5 },
  { level: 5, xpRequired: 700, xpGainOnWin: 300, nextLevel: 6, clanCreationUnlocked: true, featureUnlocked: ['Clan Creation'] },
  { level: 6, xpRequired: 1000, xpGainOnWin: 300, nextLevel: 7 },
  { level: 7, xpRequired: 1350, xpGainOnWin: 300, nextLevel: 8 },
  { level: 8, xpRequired: 1750, xpGainOnWin: 300, nextLevel: 9 },
  { level: 9, xpRequired: 2200, xpGainOnWin: 300, nextLevel: 10 },
  { level: 10, xpRequired: 2700, xpGainOnWin: 300, nextLevel: 11, featureUnlocked: ['Clan Wars'] },
  { level: 11, xpRequired: 3300, xpGainOnWin: 300, nextLevel: 12 },
  { level: 12, xpRequired: 4000, xpGainOnWin: 300, nextLevel: 13 },
  { level: 13, xpRequired: 4800, xpGainOnWin: 300, nextLevel: 14 },
  { level: 14, xpRequired: 5700, xpGainOnWin: 300, nextLevel: 15 },
  { level: 15, xpRequired: 6700, xpGainOnWin: 300, nextLevel: 16, featureUnlocked: ['Custom Avatars'] },
  { level: 16, xpRequired: 7800, xpGainOnWin: 300, nextLevel: 17 },
  { level: 17, xpRequired: 9000, xpGainOnWin: 300, nextLevel: 18 },
  { level: 18, xpRequired: 10300, xpGainOnWin: 300, nextLevel: 19 },
  { level: 19, xpRequired: 11700, xpGainOnWin: 300, nextLevel: 20 },
  { level: 20, xpRequired: 13200, xpGainOnWin: 300, nextLevel: null }
];

Level.insertMany(levelData)
  .then(() => {
    console.log("Level data inserted successfully");
  })
  .catch((err) => {
    console.error("Error inserting level data:", err);
  });
