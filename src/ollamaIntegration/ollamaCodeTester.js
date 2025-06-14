// HELP from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
// https://www.w3schools.com/jsref/jsref_obj_regexp.asp
// https://javascript.info/regular-expressions

// Manual tester for Ollama. Focuses on testing the Ollama generated code, and returning appropiate information.

import { codeSnippetIDs } from "./codeSnippetIDMap";

import { sumTwoNumbersTests } from "./functions-tests-ollama/sumTwoNumbersTests";
import { linearSearchTests } from "./functions-tests-ollama/linearSearchTests";
import { numberOfEvenNumbersTests } from "./functions-tests-ollama/numberOfEvenNumbersTests";
import { multiplyAnArrayOfNumbersTests } from "./functions-tests-ollama/multiplyAnArrayOfNumbersTests";
import { insertionSortDescendingTests } from "./functions-tests-ollama/insertionSortDescendingTests";
import { returnAllFactorsOfANumberTests } from "./functions-tests-ollama/returnAllFactorsOfANumberTests";

// A map to run the appropriate tests. 
export const codeSnippetIDMap = {
    [codeSnippetIDs.sumTwoNumbers]: sumTwoNumbersTests, // "foo0": sumTwoNumbersTests
    [codeSnippetIDs.linearSearch]: linearSearchTests, // "foo1": linearSearchTests
    [codeSnippetIDs.numberOfEvenNumbers]: numberOfEvenNumbersTests, // "foo2": numberOfEvenNumbersTests
    [codeSnippetIDs.multiplyAnArrayOfNumbers]: multiplyAnArrayOfNumbersTests, // "foo3": multiplyAnArrayOfNumbersTests
    [codeSnippetIDs.insertionSortDescending]: insertionSortDescendingTests, // "foo4": insertionSortDescendingTests
    [codeSnippetIDs.returnAllFactorsOfANumber]: returnAllFactorsOfANumberTests // "foo5": returnAllFactorsOfANumberTests
}

/** Changes the function name to foo. Matches arrow functions, anonymous and named function expressions, and function declarations.
 * 
 * @param {string} codeAsString - The processed Ollama generated code string.
 * @returns - The code string with its name changed to foo.
 */
export function changeFunctionNameToFoo(codeAsString) {
    // Named function declarations
    // Example: function add(a, b) { return a + b; }
    const functionDeclarationRegex = /function\s+(\w+)/g;
    
    // Anonymous function expressions with no parameters
    // Example: function() { return 42; }
    const functionExpressionRegex = /function\s*\(\s*\)\s*{/g;
  
    // Named function expressions with multiple parameters
    // Example: const add = function(a, b) { return a + b; }
    const namedFunctionExpressionRegex = /(\w+)\s*=\s*function\s*\(([^)]*)\)\s*{/g;
  
    // Arrow functions with multiple parameters with blocks
    // Example: const multiply = (x, y) => { return x * y; }
    const arrowFunctionBlockBodyRegex = /(\w+)\s*=\s*\(([^)]*)\)\s*=>\s*\{/g;

     // Arrow functions with multuple parameters with concise bodies
     // Example:
     const arrowFunctionConciseBodyRegex = /(\w+)\s*=\s*\(([^)]*)\)\s*=>\s*([^;]+)/g;
  
    // Function expressions with single-line body
    // Example: const increment = function(n) { return n + 1; }
    const singleLineFunctionExpressionRegex = /(\w+)\s*=\s*function\s*\([^)]*\)\s*{/g;
    
    // Function declarations with parameters
    // Example: function divide(a, b) { return a / b; }
    const functionDeclarationWithParamsRegex = /function\s+(\w+)\s*\(([^)]*)\)\s*{/g;
  
    // Replace names in function declarations
    // Changes: function add(a, b) { ... } -> function foo(a, b) { ... }
    let foo = codeAsString.replace(functionDeclarationRegex, 'function foo');
  
    // Replace names in function declarations with parameters
    // Changes: function divide(a, b) { ... } -> function foo(a, b) { ... }
    foo = foo.replace(functionDeclarationWithParamsRegex, 'function foo($2) {');
  
    // Replace names in function expressions (anonymous functions)
    // Changes: function() { ... } -> function foo() { ... }
    foo = foo.replace(functionExpressionRegex, 'function foo(');
  
    // Replace names in function expressions with parameters
    // Changes: const increment = function(n) { ... } -> foo = function(n) { ... }
    foo = foo.replace(singleLineFunctionExpressionRegex, 'foo = function($2) {');
  
    // Replace names in named function expressions
    foo = foo.replace(namedFunctionExpressionRegex, 'foo = function($2) {');
  
    // Replace names in arrow functions with block bodies
    // Changes: const add = function(a, b) { ... } -> foo = function(a, b) { ... }
    foo = foo.replace(arrowFunctionBlockBodyRegex, 'foo = ($2) => {');
    
    // Replace names in arrow functions with concise bodies
    // Changes: const sum = (a, b) => ... -> foo = (a, b) => ... 
    foo = foo.replace(arrowFunctionConciseBodyRegex, 'foo = ($2) => $3');

    return foo;
  }
  

// NOTE: if a function is functionally equivalent i.e. passes all test cases, regardless of the 
//       parameters it passes e.g. you don't need the length of an array and the array to find 
//       the number of even numbers (foo2)
/** Runs tests against a parsed ollama generated code (all comments removed)
 *      and returns the list of tests that fail, along with the total number of tests, and the number of tests that fail.
 * REQUIRES: codeAsString is has been subjected to the parsers inside "parsers." 
 * 
 * @param {string} codeAsString - This is the (generated) code as String after all processing is complete.
 * @param {number} snippetID - This is the ID of the code snippet whose tests are to be run.
 * @returns {number, number, string[]} - failureCount is the number of tests that failed. If this is -1, this means that
 *      there was anerror in running the tests, indicating that an incorrect function was generated, 
 *      OR a pre-requisite condition was not met. 
 *      - numberOfTests - This is the number of tests associated with the snippetID 
 *      - failures - This is an array of strings that indicate the tests that have failed.
 */
export function runTests (codeAsString, snippetID) {
    // Rename function to foo.
    const fooCode = changeFunctionNameToFoo(codeAsString);
    
    // this is the number of tests that fail. A -1 means an error occured (see above).
    let failureCount = 0; 
    // this is the number of tests for a given codeSnippet. Updated using the testSuite fetched and run using eval.
    let numberOfTests = 0; 
    // this is the array of tests that failed. Updated during eval. 
    let failures = []; 

    const testSuite = codeSnippetIDMap[snippetID]; 
    
    // console.log(testSuite); 

    const combinedCode = `
    ${fooCode}
    ${testSuite}
    `;

    console.log(combinedCode);

    // Execute the test cases
    try {
    eval(combinedCode);
    } catch (err) {
        console.log(err.message);
        failureCount = -1;
    }

    return {failureCount, numberOfTests, failures};
}




  
