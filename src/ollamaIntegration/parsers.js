// This is where the parsers reside to allow for ollama generated code.

// The message to send if nothing "viable" i.e. either no code was produced, or code was not in JS, is produced.
export const noViableCodeMessage = "No viable code was produced.";

/** Parser 2 - This serves to extract the in-line comments from the code.
 * 
 * @param {string} codeBlock - This is the processed text from Parser 1
 * @returns string - Code bereft of inline comments: // and "/** *\/" [multiline comments \ is an escape char for the last /]
 *      This code will be used to evaluate if the generated code passes or fails tests.
 */
export function removeInLineComments(codeBlock) {
  // Regular expression to match single-line comments and multi-line comments.
  const inLineCommentRegex = /\/\/.*$|\/\*[\s\S]*?\*\//gm;

  // Replace all matches with empty string to remove them.
  return codeBlock.replace(inLineCommentRegex, '').trim();
}

/** Parser 1. This serves to extract the code block from the generated response.
 * 
 * @param {string} text - The ollama generated response that has not been processed.
 * @returns string - An extracted code block, or NoViableCode message.
 */
export function parserForCodeBlock(text) {
  // REGEX to match a single code block wrapped in triple backticks (```), followed by javascript. 
  const codeBlockRegex = /```javascript([\s\S]*?)```/;

  // match regex; there is only one code block per text input (ollama response text)
  const match = text.match(codeBlockRegex);

  // If match, return the codeBlock, else return noViableCodeMessage.
  if (match) {
    return match[1].trim();
  } else {
      return noViableCodeMessage;
  }
}

