const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const User = require('../Models/User');
const Question = require('../Models/Questions');
const Stub = require('../Models/Stubs');
const TestCase = require('../Models/TestCases');
const Submissions = require('../Models/Submissions');
const fs = require('fs');
const { exec } = require("child_process");
app.use(express.json());
app.use(bodyParser.json());


const JUDGE0_API_URL = "https://judge0-ce.p.rapidapi.com";
const JUDGE0_HEADERS = {
  "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
  "X-RapidAPI-Key": process.env.RAPID_API_KEY, // Replace with your RapidAPI key
};

// router.post("/execute", async (req, res) => {
//   const { language_id, source_code, questionId } = req.body;

//   try {
//     // Fetch test cases from the database
//     const testCasesData = await TestCases.findOne({ question_id: questionId });
//     if (!testCasesData) {
//       return res.status(404).json({ error: "Test cases not found" });
//     }

//     const testCases = JSON.parse(testCasesData.test_cases_json); // Parse the JSON string

//     // Validate each test case
//     const results = [];
//     for (const testCase of testCases) {
//       const { input, expectedOutput } = testCase;

//       // Convert input to the required stdin format for C++
//       let stdin = `${input.length}\n${input.join(' ')}`;
//       console.log("I am the stdin " + stdin);

//       // Send the submission to the Judge0 API
//       const response = await axios.post(
//         `${JUDGE0_API_URL}/submissions?base64_encoded=false&wait=true`,
//         {
//           language_id,
//           source_code,
//           stdin,
//         },
//         { headers: JUDGE0_HEADERS }
//       );

//       const { stdout, stderr } = response.data;
//       console.log("I am stdout " + stdout);
//       console.log("I am stderr " + stderr);
//       let actualOutput = [];
//       try {
//         actualOutput = stdout ? stdout.trim().split("\n").map(Number) : []; // Parse numeric output
//       } catch (error) {
//         console.error("Error parsing output:", error.message);
//       }

//       // Compare output with the expected output
//       const isCorrect = JSON.stringify(actualOutput) === JSON.stringify(expectedOutput);

//       results.push({
//         input,
//         expectedOutput,
//         actualOutput,
//         isCorrect,
//         error: stderr || null,
//       });
//     }

//     // Respond with test case results
//     res.json({ results });
//   } catch (error) {
//     console.error("Error processing test cases:", error.message);
//     res.status(500).json({ error: error.message });
//   }
// });

// k -> target
// m -> b
// l -> a
// n -> size
// arr -> array
// arr1 -> a
// arr2 -> b
// arr3 -> c

const parseInput = (input) => {
  let inputString = "1\n"; // 1 test case

  if (input.arr && Array.isArray(input.arr) || input.nums && Array.isArray(input.nums)) {
    const arr = input.arr;
    const k = input.k ?? "";

    inputString += `${arr.length}\n`;    // size of array
    inputString += `${k}\n`;               // k value
    inputString += `${arr.join(" ")}\n`; // the array itself
  } else {
    // If no array present
    inputString += `0\n0\n\n`;
  }

  return inputString;
};

const convertOutput = (output, outputType) => {
  switch (outputType) {
    case "int":
      return parseInt(output, 10);
    case "float":
      return parseFloat(output);
    case "boolean":
      return output === "true"; // Convert string "true"/"false" to boolean
    case "array":
      return JSON.parse(output); // Assuming output is returned as a JSON string
    case "string":
      return output; // No conversion needed
    default:
      return output; // Fallback to raw output
  }
};



router.post("/execute", async (req, res) => {
  const { language_id, source_code, questionId } = req.body;

  try {
    const QuestionUpdated = await Question.findById(questionId);
    const testCasesData = await TestCase.findById(QuestionUpdated.testCases);
    console.log(QuestionUpdated.returnType)
    if (!testCasesData) {
      return res.status(402).json({ error: "Test cases not found" });
    }

    console.log("Loaded test cases data:", testCasesData.test_cases_json);

    const testCases = JSON.parse(testCasesData.test_cases_json);
    const codeFilePath = "C:\\Users\\tg210\\OneDrive\\Desktop\\temp_code.cpp";
    const executablePath = "C:\\Users\\tg210\\OneDrive\\Desktop\\temp_executable";
    
    // Write source code to a temporary file
    fs.writeFileSync(codeFilePath, source_code);

    const compileCommand = `g++ ${codeFilePath} -o ${executablePath}`;
    exec(compileCommand, async (compileError) => {
      console.log("Compilation error:", compileError);
      if (compileError) {
        console.log("Compilation error:", compileError);
        // Respond with a detailed compilation error
        console.log("Compiler Error:", compileError.message);
        return res.json({
          error: "Compilation failed",
          details: compileError.message,
        });
      }

      const results = [];

      // Function to execute test cases sequentially
      const executeTestCase = async (index) => {
        if (index >= testCases.length) {
          // All test cases completed
          res.json({ results });
          console.log("All test cases completed", results);
      
          // Cleanup files
          if (fs.existsSync(codeFilePath)) fs.unlinkSync(codeFilePath);
          if (fs.existsSync(executablePath)) fs.unlinkSync(executablePath);
          return;
        }
      
        const { input, expectedOutput } = testCases[index];

      
        // Dynamically parse the input and construct the input string
        const inputString = parseInput(input);
        

        console.log("Constructed Input String:", inputString);
      
        const childProcess = exec(`${executablePath}`, { timeout: 5000 }, (execError, stdout, stderr) => {
          
          let actualOutput = null;
          let isCorrect = false;
      
          if (execError) {
            console.error("ExecError code:", execError.code);
            console.error("ExecError signal:", execError.signal);
            console.error("Stderr:", stderr);
            console.error("Stdout (raw):", stdout);
            console.error("Runtime error:", execError.message || stderr);
            results.push({
              input,
              expectedOutput,
              actualOutput: null,
              isCorrect: false,
              error: execError.message || stderr,
            });
          } else {
            try {
              // Parse the output
              actualOutput = stdout.trim(); // Update parsing logic if needed
              
              actualOutput = convertOutput(actualOutput, QuestionUpdated.returnType);
              isCorrect = JSON.stringify(actualOutput) === JSON.stringify(expectedOutput);
              results.push({
                input: input,
                expectedOutput,
                actualOutput,
                isCorrect,
                error: null,
              });
            } catch (parseError) {
              console.error("Output parsing failed:", parseError.message);
              results.push({
                input,
                expectedOutput,
                actualOutput: null,
                isCorrect: false,
                error: "Output parsing failed",
              });
            }
          }
      
          // Execute the next test case
          executeTestCase(index + 1);
        });
      
        // Write input to the process
        childProcess.stdin.write(inputString);
        childProcess.stdin.end();
      };
      

      // Start executing test cases
      executeTestCase(0);
    });
  } catch (error) {
    console.error("Internal server error:", error.message);
    res.status(500).json({ error: error.message });
  }
});



router.get("/online", fetchuser, async (req, res) => {
  const userId = req.user;
  try {
    const response = await User.find({ isOnline: true, _id: { $ne: userId } });

    res.json(response).status(200);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/questions", async (req, res) => {
  try{
    const questions = await Question.find()
    .limit(20)
    .select("Title Accuracy Difficulty _id"); // ✅ Correct way
      res.json(questions);
  }catch(error){
    console.log(error)
    res.status(500).json({ error: error.message });
  }
});


router.post("/submit", fetchuser, async(req,res) =>{
  try {
    const newSubmission = await Submissions.create({
      userId: req.user,
      questionId: req.body.Question_id,
      code: req.body.Code,
      language: req.body.Language,
      result: req.body.Result,
      timeTaken: 2,

    })

    await Question.findByIdAndUpdate(
      req.body.Question_id,
      { $push: { Submissions: newSubmission._id } }, // Push submission ID to the Submissions array
      { new: true }
  );

    res.json({message: "Submission Successful"}).status(200);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message }); 
    
  }
})

router.get("/submissions", fetchuser, async (req, res) => {
  try {
    const submissions = await Submissions.find({ User_id: req.user })
      .populate("Question_id", "Title")
      .sort({ Time: -1 });

    res.json(submissions).status(200);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message });
  }
});




// const uploadStubs = async (csvFilePath) => {
//   try {
//       const stubsData = [];

//       // Parse the CSV file
//       fs.createReadStream(csvFilePath)
//           .pipe(csv())
//           .on('data', (row) => {
//               stubsData.push(row);
//           })
//           .on('end', async () => {
//               console.log('CSV file successfully processed.');

//               for (const stub of stubsData) {
//                   const { question_id, cpp, python, java } = stub;

//                   // Find the question by question_id
//                   const question = await Question.findById(question_id);

//                   if (!question) {
//                       console.error(`Question not found for ID: ${question_id}`);
//                       continue;
//                   }

//                   // Create a new stub entry
//                   const newStub = new Stub({
//                       question: question._id,
//                       cpp,
//                       python,
//                       java,
//                   });

//                   await newStub.save();
//                   console.log(`Stub saved for question ID: ${question_id}`);
//               }

//               mongoose.connection.close();
//           });
//   } catch (error) {
//       console.error('Error uploading stubs:', error);
//   }
// };

// // Path to your CSV file
// const csvFilePath = 'C:\\Users\\tg210\\OneDrive\\Desktop\\Codes\\vips sem1\\CodeArena\\updatedStubs.csv';
// uploadStubs(csvFilePath);

module.exports = router;