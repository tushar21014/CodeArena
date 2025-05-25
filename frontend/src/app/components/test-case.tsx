"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TestCase({ output, isEmpty }: { output: any[], isEmpty: boolean }) {
  const visibleTestCases = output.slice(0, 3);
  // Store the remaining test cases for submission
  const hiddenTestCases = output.slice(3);
  return (
    <Tabs defaultValue={`case0`} className="w-full">
      <div className="flex items-center justify-between border-b border-gray-800 px-4">
        <TabsList className="bg-transparent">
          {visibleTestCases.map((_, index) => (
            <TabsTrigger key={index} value={`case${index}`} className="data-[state=active]:bg-transparent data-[state=active]:text-white">
              {!isEmpty && (<>
              {_.isCorrect ?
                <span className="mx-1" style={{ borderRadius: "50%", backgroundColor: "green", width: "5px", height: "5px" }}></span> :
                <span className="mx-1" style={{ borderRadius: "50%", backgroundColor: "red", width: "5px", height: "5px" }}></span>}
              
              </>)}
              
              {/* <span style={{borderRadius:"50%", backgroundColor:"green",width:"5px", height:"5px"}}></span> */}
              Case {index + 1}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {visibleTestCases.map((result, index) => (
        <TabsContent key={index} value={`case${index}`} className="p-4">
          {isEmpty && isEmpty ? (
            <div className="font-mono text-sm">
              <div className="mb-2">
                nums = <span className="text-yellow-500">{JSON.stringify(result.input.arr)}</span>
              </div>
            </div>
          ) : (
          <div className="font-mono text-sm">
            <div className="mb-2">
              nums = <span className="text-yellow-500">{JSON.stringify(result.input)}</span>
            </div>
          </div>)}
          <div className="font-mono text-sm">
            <div className="mb-2">
              Expected Output: <span className="text-yellow-500">{JSON.stringify(result.expectedOutput)}</span>
            </div>
          </div>
          {!isEmpty && (
            <div className="font-mono text-sm">
              <div className="mb-2">
                Actual Output: <span className="text-yellow-500">{JSON.stringify(result.actualOutput)}</span>
              </div>
            </div>
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
}
