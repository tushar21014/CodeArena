const tags = [
    { name: "arrays" },
    { name: "strings" },
    { name: "linked list" },
    { name: "stack" },
    { name: "queue" },
    { name: "hashmap" },
    { name: "binary tree" },
    { name: "binary search tree" },
    { name: "heap" },
    { name: "graph" },
    { name: "dynamic programming" },
    { name: "greedy" },
    { name: "backtracking" },
    { name: "recursion" },
    { name: "bit manipulation" },
    { name: "two pointers" },
    { name: "sliding window" },
    { name: "math" },
    { name: "tries" },
    { name: "segment tree" }
];
const connectToMongo = require('./db');
const Tag = require('./Models/Tag'); // Adjust path as needed
connectToMongo();
Tag.insertMany(tags)
    .then(() => {
        console.log("Tags inserted successfully");
    })
    .catch((err) => {
        console.error("Error inserting tags:", err);
    });
