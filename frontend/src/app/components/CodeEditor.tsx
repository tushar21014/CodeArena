"use client";
import { debouncedLintCodeWithRuff } from "./linter/pythonLinter";
import React, { useEffect, useRef, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { linter, lintGutter, Diagnostic} from "@codemirror/lint";
import { autocompletion } from "@codemirror/autocomplete";
import { cpp } from "@codemirror/lang-cpp";
import axios from "axios";
interface Question {
  _id: string;
  Content: string;
  Accuracy: string;
  Difficulty: string;
  // Add other properties if necessary
}
const CodeEditor = ({stub,questions,selectedLanguage,code,setCode,handleSubmitCode,handleCodeChange,isWatching }: {stub: any, questions: Question, selectedLanguage: string, code: string , setCode: (code: string) => void, handleSubmitCode: (latestCode: string) => void, handleCodeChange : (newCode: string) => void,isWatching: boolean;}) => {
  const [error, setError] = useState<string | null>(null); // Error message state
  const [questionId, setQuestionId] = useState("");
  const languageMap: Record<string, number> = {
    javascript: 63,
    python: 71,
    java: 62,
    cpp: 54,
  };

  useEffect(() => {
    setQuestionId(questions["_id"]);
    console.log(stub)
  }
  , [questions]);

  useEffect(() => {
    try {
      setCode(stub[selectedLanguage]); 
    } catch (err) {
      console.error("Error setting the code:", err);
    }
  }, [selectedLanguage, stub]); // Update code when the selected language changes

  // Map languages to their respective CodeMirror extensions
  const languageExtensions: Record<string, any> = {
    javascript: javascript(),
    python: python(),
    java: java(),
    cpp: cpp(),
  };

  


  return (
    <div>
      {/* CodeMirror Editor */}
      <CodeMirror
        value={code}
        height="500px"
        extensions={[
          languageExtensions[selectedLanguage],
          autocompletion(),
          lintGutter(),
          linter(async (view) => {
            const diagnostics: Diagnostic[] = [];
            const lines = view.state.doc.toString().split("\n");

            switch (selectedLanguage) {
              case "python":
                // debouncedLintCodeWithRuff(code, view);
                break;
                
                case "java":
                // Linter for Java
                lines.forEach((line, i) => {
                  if (line.includes("class ") && !line.trim().endsWith("{")) {
                    diagnostics.push({
                      from: view.state.doc.line(i + 1).from,
                      to: view.state.doc.line(i + 1).to,
                      severity: "error",
                      message: "Classes in Java should start with an opening '{' on the same line.",
                    });
                  }
                });
                break;


            }

            return diagnostics;
          }),
        ]}
        theme="dark"
        // onChange={isWatching ? (handleCodeChange) : (value) => setCode(value || "This is not watchin")}
        readOnly={isWatching}  // Disable editing when watching
        onChange={handleCodeChange}
        // onChange={(value) => setCode(value || "")}
      />

      
      {/* {output && output.map((result: any, index: number) => (
        <div key={index} style={{ marginTop: "10px", backgroundColor: result.isCorrect ? "green" : "red" }}>
          <strong>Input:</strong> {result.input.k}
          <br />
          <strong>Your output:</strong> {result.actualOutput}
          <br />
          <strong>Correct :</strong> {result.isCorrect ? "Yes" : "No"}
        </div>
      ))}
       */}
      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          <strong>Error:</strong> {error}
        </p>
      )}
    </div>
  );
};

export default CodeEditor;
