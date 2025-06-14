import { useEffect, useState } from "react";
import { invokeOllamaCodeGeneration } from "./ollamaIntegration/ollamaFunctionality";
import { codeSnippetIDs } from "./ollamaIntegration/codeSnippetIDMap";

const ProtoFunctionAnalysisPage = () => {

    // NOTE: PROTO. may remain unused.
    // state for the history banner.
    const [] = useState();

    // state for the ollama generated code box.
    const [ollamaBox, updateOllamaBox] = useState("");

    // state for the submitted text prompt box.
    const [submissionBox, updateSubmissionBox] = useState("");

    // NOTE: PROTO. there should be a fetch for this inside useEffect().
    // state for the provided function text box.
    const [functionBox, updateFunctionBox] = useState();

    // state for the box in which you can type. 
    const [inputBox, updateInput] = useState(""); 

    // state for indicating if all the tests have passed. 
    const [status, updateStatus] = useState(false); // by default when you visit the page you haven't passed anything.

    // state for indicating that you're waiting for ollama's response. [May have no viable use other than to indicate control flow.]
    const [pending, updatePending] = useState(false);


    /** When the submission button is clicked, the following transpires:
     *  - pending is set to true.
     *  - submissionBox is updated with the contents of the inputBox.
     *  - inputBox is cleared. 
     *  - ... ollamaBox. 
     *  - a POST request is made to OLLAMA. 
     *  - ... history LATER
     *  - 
     */
    function submission() {
        updatePending(true);
        updateSubmissionBox(inputBox); //submissionBox is auto-emptied and then filled.
        // this placeholder exists due to React's asynchrony and tendency to batch state updates.
        let prompt = inputBox;
        updateInput("");
        
        // Ollama Update. 
        updateOllamaBox("Request Pending...");
        
        console.log(prompt);
        invokeOllama(prompt);
    };

    const invokeOllama = async (userPrompt) => {
        // codeSnippetIDs.numberOfEvenNumbers
        // userPrompt, codeSnippetIDs.sumTwoNumbers
        //codeSnippetIDs.insertionSortDescending
        let {returnResponse, failureCount, numberOfTests, failures} = await invokeOllamaCodeGeneration(userPrompt, codeSnippetIDs.sumTwoNumbers);

        updateOllamaBox(returnResponse);

        if (failureCount === 0) {
            updateStatus(true);
        } else {
            updateStatus(false);
        }
    }

    // TODO...
    /** Reverts to a "normal" state of the page depending on the context:
     * - if this is after an Ollama invocation.
     * - if this is due to an onClick of the Reset button.
     * 
     * @param {boolean} after - indicates invocation context.
     */
    function revertToNormal(after) {
        updatePending(false); 
        if (after) {
            
        }
    }

    useEffect(() => {
        updateFunctionBox(
            `
function foo0(numberOne, numberTwo) {
    return numberOne + numberTwo;
};
`
        )
    }

    , []); // TODO: update as needed as JSONServer is activated; fetch history.



    return ( <div className="function-analysis-page">

                {/* Side Banner for History */}
                <div className="side-banner">
                    <h1>History: </h1>
                </div>

                {/* Main Content */}
                <div className="main-content">
                    {/* For display */}
                    <div className="text-box-container">
                        <textarea 
                            className="ollama-text-box" 
                            value={ollamaBox} 
                            placeholder="Ollama Generated Code..."
                            readOnly
                        />

                        <textarea 
                            className="text-box" 
                            value={submissionBox}  
                            placeholder="Prompt Provided..."
                            readOnly
                        />

                        <textarea 
                            className="code-text-box" 
                            value={functionBox}  
                            // no onChange needed. 
                            placeholder="Code Snippet..."
                            readOnly
                        />

                    </div>

                {/* Editable text box and buttons */}
                    <div className="bottom-container">
                            
                            {!status && <div className="status-label">Failed.</div>}
                            {status && <div className="status-label">Passed.</div>}

                        <textarea className="editable-text-box" value={inputBox} onChange={e => {
                            updateInput(e.target.value)
                            }} placeholder="Type here..."/>

                        <div className="button-container">
                            <button className="button reset-button">Reset</button>
                            <button className="button submit-button" onClick = {(e) => submission()}>Submit</button>
                        </div>
                    
                    </div>
                </div>
            </div> );
}
 
export default ProtoFunctionAnalysisPage;