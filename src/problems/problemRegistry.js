// Central registry of code-comprehension problems.
//
// Order matches test/tests-for-functions/index.html (foo0..foo5) and
// src/ollamaIntegration/codeSnippetIDMap.js aliases.
//
// Only slug, snippetID, and the display snippet are stored here - no titles
// or blurbs that would reveal what each exercise tests.
//
// Look-up logic:
//   URL slug (e.g. "3" from /problem/3)
//     -> getProblemBySlug(slug) scans `problems` for a matching slug
//     -> each entry was built from PROBLEM_KEYS[index]: slug = index + 1,
//        snippetID = codeSnippetIDs[key], snippet = SNIPPETS[snippetID]
//     -> ProblemPage passes snippetID to the Ollama tester, which picks the
//        fooN test suite via codeSnippetIDMap (same alias as src/functions/).
//
// Extensibility: append a key to PROBLEM_KEYS (keep foo order in sync with
// test/ and functions-tests-ollama/), add the matching SNIPPETS[fooN] string,
// and add the reference function + tests. A slug-keyed Map would give O(1)
// look-up but is unnecessary at this scale; splitting SNIPPETS from PROBLEM_KEYS
// keeps route order explicit without hard-coding slugs per entry.

// For the present scope, the coupling PROBLEM_KEYS and SNIPPETS, is acceptable. (Array.find vs Map)
// It would be better to have a single source of truth for the problems (problemRegistry.js v functions/)
// TODO: 

import { codeSnippetIDs } from "../ollamaIntegration/codeSnippetIDMap";

/** Canonical problem order: index 0 -> Problem 1 / foo0, etc. */
export const PROBLEM_KEYS = [
    "sumTwoNumbers",              // foo0
    "linearSearch",               // foo1
    "numberOfEvenNumbers",        // foo2
    "multiplyAnArrayOfNumbers",   // foo3
    "insertionSortDescending",    // foo4
    "returnAllFactorsOfANumber",  // foo5
];

const SNIPPETS = {
    [codeSnippetIDs.sumTwoNumbers]:
`function foo0(numberOne, numberTwo) {
    return numberOne + numberTwo;
}`,
    [codeSnippetIDs.linearSearch]:
`function foo1(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i;
        }
    }
    return -1;
}`,
    [codeSnippetIDs.numberOfEvenNumbers]:
`function foo2(int_array, array_len) {
    let x = 0;
    for (let i = 0; i < array_len; i++) {
        if (int_array[i] % 2 == 0) {
            x++;
        }
    }
    return x;
}`,
    [codeSnippetIDs.multiplyAnArrayOfNumbers]:
`function foo3(arr) {
    let x = 1;
    for (let i = 0; i < arr.length; i++) {
        x *= arr[i];
    }
    return x;
}`,
    [codeSnippetIDs.insertionSortDescending]:
`function foo4(arr) {
    for (let i = 1; i < arr.length; i++) {
        let x = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] < x) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = x;
    }
    return arr;
}`,
    [codeSnippetIDs.returnAllFactorsOfANumber]:
`function foo5(num) {
    const arr = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0 || num % i == 0) {
            arr.push(i);
        }
    }
    return arr;
}`,
};

export const problems = PROBLEM_KEYS.map((key, index) => {
    const snippetID = codeSnippetIDs[key];
    return {
        slug: String(index + 1),
        snippetID,
        snippet: SNIPPETS[snippetID],
    };
});

/** Neutral label shown in the UI -- no exercise details. */
export function getProblemLabel(slug) {
    return `Problem ${slug}`;
}

/**
 * Looks up a problem by its route slug.
 *
 * @param {string} slug - The slug from the URL (e.g. "1").
 * @returns {object|undefined} - The matching problem, or undefined if none exists.
 */
export function getProblemBySlug(slug) {
    return problems.find((problem) => problem.slug === slug);
}
