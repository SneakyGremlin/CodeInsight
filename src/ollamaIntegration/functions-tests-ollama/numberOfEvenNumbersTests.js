export const numberOfEvenNumbersTests = 
`
numberOfTests = 5;

if (foo([], 0) !== 0) {
    failureCount++;
    failures.push("([], 0) => 0");
}

if (foo([1, 3, 5], 3) !== 0) {
    failureCount++;
    failures.push("([1, 3, 5], 3) => 0");
}

if (foo([0, 2, 4, 6, 8, 10, 12], 7) !== 7) {
    failureCount++;
    failures.push("([0, 2, 4, 6, 8, 10, 12], 7) => 7");
}

if (foo([0, 1, 2, 3], 4) !== 2) {
    failureCount++;
    failures.push("([1, 2, 3, 4], 4) => 2");
}
    
if (foo([0, 1, 2, 3, 100, 86, -20, -11], 8) !== 5) {
    failureCount++;
    failures.push("[0, 1, 2, 3, 100, 86, -20, -11], 8) => 5");
}
`;