export const returnAllFactorsOfANumberTests = 
`
numberOfTests = 8;

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

if (!arraysEqual(foo(6), [1, 2, 3, 6])) {
    failureCount++;
    failures.push("(6) => [1, 2, 3, 6]");
}

if (!arraysEqual(foo(7), [1, 7])) {
    failureCount++;
    failures.push("(7) => [1, 7]");
}

if (!arraysEqual(foo(1), [1])) {
    failureCount++;
    failures.push("(1) => [1]");
}

if (!arraysEqual(foo(100), [1, 2, 4, 5, 10, 20, 25, 50, 100])) {
    failureCount++;
    failures.push("(100) => [1, 2, 4, 5, 10, 20, 25, 50, 100]");
}

if (!arraysEqual(foo(36), [1, 2, 3, 4, 6, 9, 12, 18, 36])) {
    failureCount++;
    failures.push("(36) => [1, 2, 3, 4, 6, 9, 12, 18, 36]");
}

if (!arraysEqual(foo(0), [])) {
    failureCount++;
    failures.push("(0) => []");
}

if (!arraysEqual(foo(-6), [])) {
    failureCount++;
    failures.push("(-6) => []");
}

if (!arraysEqual(foo(97), [1, 97])) {
    failureCount++;
    failures.push("(97) => [1, 97]");
}
`;