import React from "react";

export default function Result({ result }: { result: boolean }) {
  return (
    <div className="p-4 text-sm">
        <h1 className="text-2xl font-bold mb-4">
            {result ? (<div className="text-green-500">Correct Answer</div>) : (<div className="text-red-500">Incorrect Answer</div>)}
        </h1>

    </div>
  )
}

