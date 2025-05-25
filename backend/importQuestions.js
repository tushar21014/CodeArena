const csv = require('csv-parser');
const fs = require('fs');
const connectToMongo = require('./db');

const Question = require('./Models/Questions');
const Stub = require('./Models/Stubs');
const TestCase = require('./Models/TestCases');

// Connect to MongoDB
connectToMongo();


fs.createReadStream('./final_questions.csv')
  .pipe(csv())
  .on('data', async (row) => {
    try {
      // 1. Find matching Stub (based on unique field, e.g., content or return type)
      const stub = await Stub.findOne({
        Title: row['Title']
      });

      if (!stub) {
        console.error(`Stub not found for: ${row['Title']}`);
        return;
      }

      // 2. Find matching TestCase (can be more complex — match by input or expectedOutput)
      const testCase = await TestCase.findOne({
        Title: row['Title']
      });

      if (!testCase) {
        console.error(`TestCase not found for: ${row['Title']}`);
        return;
      }

      // 3. Create the Question
      await Question.create({
        title: row['Title'],
        accuracy: row['Accuracy'],
        difficulty: row['Difficulty'],
        description: row['Description'],
        URL: row['URL'],
        // tags: row['Tags']?.split(',') || [],
        stub: stub._id,
        testCases: testCase._id,
        returnType: row['ReturnType'],
      });

      console.log(`Linked and imported question: ${row['Title']}`);
    } catch (err) {
      console.error("Error while importing row:", err.message);
    }
  })