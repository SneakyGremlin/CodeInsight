// https://www.npmjs.com/package/ollama
// The above is a library that allows interfacing with Ollama easier --- using npm i ollama. I use the instructions provided therein. 
// I give credit to @86 on piazza CPSC310 921 2024S https://piazza.com/class/lvzldzm8hg32t8/post/86 for the suggestion to look into "Options" [hyperparameter optimization, insofar, as I'm concerned].
// https://github.com/ollama/ollama/blob/main/docs/api.md#request-6 is the source of the RESTful API I use. 
// https://github.com/ollama/ollama/blob/main/docs/modelfile.md#valid-parameters-and-values for the "options" inside the request sent to Ollama.

// Can be considered the primary "interface" for Ollama. Connects the displayed React to Ollama and testing.  

import { Ollama } from "ollama";

import {parserForCodeBlock, removeInLineComments, noViableCodeMessage } from "./parsers";

import { runTests } from "./ollamaCodeTester";

export const ollamaErrorMessage = "Error occurred with Ollama";

// From the "Custom Client" section of // https://www.npmjs.com/package/ollama
const ollama = new Ollama({ host: 'http://127.0.0.1:11434' })

/**
 * 
 * @param {string} userPrompt - the prompt provided by the user.
 * 
 * @returns {} // TODO !!!!!!!!!
 */
export const invokeOllamaCodeGeneration = async (userPrompt, snippetID) => {

    // The model availed; to be specified in the POST request.
    const modelName = "tinyllama";   ///// the problem was in the type of model being used; it was wayyy too unviable. Now need notes for programming

    // prompt engineering, to ensure consistency.
    const appendix = 
    "Write the function in JavaScript. Do not include examples, block comments, or in-line comments. Return JUST a single function codeblock.";
  
    // The "engineered" (final) prompt to include in POST.
    let finalPrompt = userPrompt + appendix;

    let returnResponse = ollamaErrorMessage; // Default error response (ollamaErrorMessage) XOR response code. 
    
    console.log(finalPrompt);

    // Invoke code generation.
    try {
      const response = await ollama.generate({
        model: modelName,
        prompt: finalPrompt,
        stream: false, // for a Single JSON object
        options: { // parameter optimization
          repeat_last_n: 32, // Sets how far back for the model to look back to prevent repetition. 
          temperature: 0.6, // The temperature of the model. Increasing the temperature will make the model answer more creatively. [Lower is less.]
          top_k: 70, // Reduces the probability of generating nonsense. A higher value (e.g. 100) will give more diverse answers, while a lower value (e.g. 10) will be more conservative. 
          top_p: 0.9 // A higher value (e.g., 0.95) will lead to more diverse text, while a lower value (e.g., 0.5) will generate more focused and conservative text. (Default: 0.9)
        }
      });

      console.log(response);
      
      returnResponse = parserForCodeBlock(response.response);
      if (returnResponse != noViableCodeMessage) {
        returnResponse = removeInLineComments(returnResponse);
      } else {// else noViableCodeMessage is returned.

        // the other values will never be used in any useful way. Hence: they are duds, and their values don't quite matter.
        let failureCount = -1; // do not assume that this is -1 because of the -1 inside runTests(...). This is not coupled therewith in this sense.
        let numberOfTests = -1; // dud value.
        let failures = []; // dud value. DOES NOT IMPLY THAT THERE WERE NO FAILURES.
        return {returnResponse, failureCount, numberOfTests, failures}; // there is no need to run any tests or evaluate the function. 
      }
  
    } catch (err) {
      console.error("Error generating code:", err);
    }

    // Now run the tests, against this code snippet. 
    let {failureCount, numberOfTests, failures} = runTests(returnResponse, snippetID);
    console.log(failureCount, numberOfTests, failures);
    
    return {returnResponse, failureCount, numberOfTests, failures};
}