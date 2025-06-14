export const linearSearchTests = 
`
numberOfTests = 8;

if (foo([1, 2, 3, 4, 5], 1) !== 0) {
    failureCount++;
    failures.push("([1, 2, 3, 4, 5], 1) => 0");
}

if (foo([1, 2, 3, 4, 5], 5) !== 4) {
    failureCount++;
    failures.push("([1, 2, 3, 4, 5], 5) => 4");
}

if (foo([1, 2, 3, 4, 5], 3) !== 2) {
    failureCount++;
    failures.push("([1, 2, 3, 4, 5], 3) => 2");
}

if (foo([1, 2, 3, 4, 5], 6) !== -1) {
    failureCount++;
    failures.push("([1, 2, 3, 4, 5], 6) => -1");
}

if (foo([], 1) !== -1) {
    failureCount++;
    failures.push("([], 1) => -1");
}

const largeArray = Array.from({ length: 1000000 }, (_, i) => i + 1);

if (foo(largeArray, 1) !== 0) {
    failureCount++;
    failures.push("([1, 2, ..., 1000000], 1) => 0");
}

if (foo(largeArray, 1000000) !== 999999) {
    failureCount++;
    failures.push("([1, 2, ..., 1000000], 1000000) => 999999");
}

if (foo([1, 2, 2, 3, 4], 2) !== 1) {
    failureCount++;
    failures.push("([1, 2, 2, 3, 4], 2) => 1");
}
`;