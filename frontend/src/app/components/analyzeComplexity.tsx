function analyzeComplexity(code: string) {
    // Remove single-line and multi-line comments
    const cleanCode = code
        .replace(/\/\/.*$/gm, '') // Single-line comments
        .replace(/\/\*[\s\S]*?\*\//g, '') // Multi-line comments
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .join('\n');

    let timeComplexity = 'O(1)'; // Default: constant time
    let spaceComplexity = 'O(1)'; // Default: constant space

    let loopNestingLevel = 0;
    let maxLoopNestingLevel = 0;
    let variableCount = 0;
    let arrayOperations = 0;
    let recursiveCalls = 0;
    let functionNames = new Set();
    let functionCalls = new Set();

    const lines = cleanCode.split('\n');

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].toLowerCase();

        // Detect loops and track their nesting levels
        if (line.includes('for') || line.includes('while')) {
            loopNestingLevel++;
            maxLoopNestingLevel = Math.max(maxLoopNestingLevel, loopNestingLevel);
        }
        if (line.includes('}') && (lines[i - 1] || '').includes('for') || (lines[i - 1] || '').includes('while')) {
            loopNestingLevel--;
        }

        // Detect recursive function calls (simplified)
        const functionMatch = line.match(/function\s+(\w+)/);
        if (functionMatch) {
            const funcName = functionMatch[1];
            functionNames.add(funcName);
        }

        // Check if a function is being called (recursive detection)
        if (line.includes('(') && line.includes(')') && functionNames.has(line.split('(')[0].trim())) {
            functionCalls.add(line.split('(')[0].trim());
            if (functionCalls.size > 1) {
                recursiveCalls++;
            }
        }

        // Track variable declarations (using let, const, var)
        if ((line.includes('let') || line.includes('const') || line.includes('var')) && line.includes('=')) {
            variableCount++;
        }

        // Track array operations that might scale with input size
        if (line.includes('.map') || line.includes('.filter') || line.includes('.reduce')) {
            arrayOperations++;
        }
    }

    // Analyze Time Complexity
    if (recursiveCalls > 0) {
        // Simplified recursion analysis (can vary depending on the recursion depth/structure)
        timeComplexity = 'O(2^n)'; // Assume exponential time complexity for recursion
    } else if (maxLoopNestingLevel > 0) {
        if (maxLoopNestingLevel === 1) {
            timeComplexity = 'O(n)'; // Single loop
        } else if (maxLoopNestingLevel === 2) {
            timeComplexity = 'O(n^2)'; // Two nested loops
        } else {
            timeComplexity = `O(n^${maxLoopNestingLevel})`; // Multiple nested loops
        }
    }

    // Analyze Space Complexity
    if (variableCount > 1 && (cleanCode.includes('array') || cleanCode.includes('arr') || arrayOperations > 0)) {
        spaceComplexity = 'O(n)'; // Assume variables or arrays scale with input size
    }

    return {
        timeComplexity,
        spaceComplexity
    };
}


const code = `function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
`
console.log(analyzeComplexity(code))

export default analyzeComplexity;
