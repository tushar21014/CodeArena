import React from "react";

export default function Description({ title, difficulty, content }: { title: string, difficulty: string, content: string }) {
  return (
    <div className="p-4 text-sm">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="flex items-center space-x-4 mb-4">
        {difficulty && (difficulty === "Basic") && <span className="px-2 py-1 bg-green-500/10 text-green-500 rounded text-xs">Basic</span>}
        {difficulty && (difficulty === "Easy") && <span className="px-2 py-1 bg-green-500/10 text-green-500 rounded text-xs">Easy</span>}
        {difficulty && difficulty === "Medium" && <span className="px-2 py-1 bg-green-500/10 text-yellow-500 rounded text-xs">Medium</span>}
        <button className="text-gray-400 hover:text-white">Topics</button>
      </div>
      <div className="prose prose-invert max-w-none">
        <p>
          {content.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line.includes("Input:") ? <b>Input:</b> : null}
              {line.includes("Output:") ? <b>Output:</b> : null}
              {line.includes("Explanation:") ? <b>Explanation:</b> : null}
              {line.includes("Constraints:") ? <b>Constraints:</b> : null}

              {line
                .replace("Input:", "")
                .replace("Output:", "")
                .replace("Explanation:", "")
                .replace("Constraints:", "")}
              <br />
            </React.Fragment>
          ))}
        </p>

      </div>
    </div>
  )
}

