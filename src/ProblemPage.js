import { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min"; 
import { invokeOllamaCodeGeneration } from "./ollamaIntegration/ollamaFunctionality";
import { getProblemBySlug, getProblemLabel } from "./problems/problemRegistry";
import NotFound from "./NotFound";

const ProblemPage = () => {

    // The problem to display is determined by the route, e.g. /problem/1
    const { problemId } = useParams();
    const problem = getProblemBySlug(problemId);

    // state for the ollama generated code box.
    const [ollamaBox, updateOllamaBox] = useState("");

    // state for the submitted text prompt box.
    const [submissionBox, updateSubmissionBox] = useState("");

    // state for the box in which you can type.
    const [inputBox, updateInput] = useState("");

    // state for indicating if all the tests have passed.
    const [status, updateStatus] = useState(false);

    // state for indicating that you're waiting for ollama's response.
    const [pending, updatePending] = useState(false);

    // state holding the most recent test run results.
    const [results, updateResults] = useState(null);

    // Guard: unknown slug -> render the shared 404 page.
    if (!problem) {
        return <NotFound />;
    }

    /** When the submission button is clicked:
     *  - pending is set to true.
     *  - submissionBox is updated with the contents of the inputBox.
     *  - inputBox is cleared.
     *  - a request is made to Ollama for the active problem's snippet.
     */
    function submission() {
        if (!inputBox.trim()) {
            return;
        }
        updatePending(true);
        updateSubmissionBox(inputBox);
        // local copy avoids React's async/batched state updates.
        let prompt = inputBox;
        updateInput("");

        updateOllamaBox("Request Pending...");
        updateResults(null);

        console.log(prompt);
        invokeOllama(prompt);
    }

    const invokeOllama = async (userPrompt) => {
        const { returnResponse, failureCount, numberOfTests, failures } =
            await invokeOllamaCodeGeneration(userPrompt, problem.snippetID);

        updateOllamaBox(returnResponse);
        updateResults({ failureCount, numberOfTests, failures });
        updateStatus(failureCount === 0);
        updatePending(false);
    };

    /** Clears the page back to its initial state. */
    function reset() {
        updateOllamaBox("");
        updateSubmissionBox("");
        updateInput("");
        updateStatus(false);
        updatePending(false);
        updateResults(null);
    }

    return (
        <div className="function-analysis-page">
            
            {/*
            Side Banner for History / problem navigation - &#8592; is a left arrow.
            <aside className="side-banner">
                <h1>Problems</h1>
                <Link className="side-banner-link" to="/">&#8592; All problems</Link>
            </aside>
            */}

            {/* Main Content */}
            <div className="analysis-content">

                <h2 className="problem-heading">{getProblemLabel(problem.slug)}</h2>

                <div className="text-box-container">
                    <label className="box-label">
                        Code Snippet
                        <textarea
                            className="code-text-box"
                            value={problem.snippet}
                            placeholder="Code Snippet..."
                            readOnly
                        />
                    </label>

                    <label className="box-label">
                        Ollama Generated Code
                        <textarea
                            className="ollama-text-box"
                            value={ollamaBox}
                            placeholder="Ollama Generated Code..."
                            readOnly
                        />
                    </label>

                    <label className="box-label">
                        Your Submitted Explanation
                        <textarea
                            className="text-box"
                            value={submissionBox}
                            placeholder="Prompt Provided..."
                            readOnly
                        />
                    </label>
                </div>

                {/* Editable text box and buttons */}
                <div className="bottom-container">

                    {results && (
                        <div className={`status-label ${status ? "status-pass" : "status-fail"}`}>
                            {status
                                ? `Passed all ${results.numberOfTests} tests.`
                                : results.failureCount === -1
                                    ? "No viable code / execution error."
                                    : `Failed ${results.failureCount} of ${results.numberOfTests} tests.`}
                        </div>
                    )}

                    {results && results.failures && results.failures.length > 0 && (
                        <ul className="failure-list">
                            {results.failures.map((failure, index) => (
                                <li key={index}>{failure}</li>
                            ))}
                        </ul>
                    )}

                    <textarea
                        className="editable-text-box"
                        value={inputBox}
                        onChange={(e) => updateInput(e.target.value)}
                        placeholder="Explain, in plain English, what the code does..."
                    />

                    <div className="button-container">
                        <button className="button reset-button" onClick={reset} disabled={pending}>
                            Reset
                        </button>
                        <button className="button submit-button" onClick={submission} disabled={pending}>
                            {pending ? "Working..." : "Submit"}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProblemPage;
