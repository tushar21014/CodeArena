const connectToMongo = require("./db");
const Rank = require("./Models/Rank");
connectToMongo();
const ranks = [
    { rank: "Bronze", xpGainOnWin: 300, xpThreshold: 3000, nextRank: "Silver"},
    { rank: "Silver", xpGainOnWin: 150, xpThreshold: 6000, nextRank: "Gold",prevRank: "Bronze" },
    { rank: "Gold", xpGainOnWin: 110, xpThreshold: 10000, nextRank: "Platinum",prevRank: "Silver" },
    { rank: "Platinum", xpGainOnWin: 100, xpThreshold: 15000, nextRank: "Diamond",prevRank: "Gold" },
    { rank: "Diamond", xpGainOnWin: 100, xpThreshold: 21000, nextRank: "Master",prevRank: "Platinum" },
    { rank: "Master", xpGainOnWin: 100, xpThreshold: 28000, nextRank: "Grandmaster",prevRank: "Diamond" },
    { rank: "Grandmaster", xpGainOnWin: 20, xpThreshold: Infinity, nextRank: null,prevRank: "Master" }
  ];

  Rank.insertMany(ranks)
    .then(() => {
      console.log("Rank data inserted successfully");
    })
    .catch(err => {
      console.error("Error inserting rank data:", err);
    });
  