export const sumTwoNumbersTests = 
`
numberOfTests = 4;

if (foo(5, 1) !== 6) {
    failureCount++;
    failures.push("((5,1) => 6)");
}

if (foo(-2, -2) !== -4) {
    failureCount++;
    failures.push("(-2, -2) => -4");
}

if (foo(5, 0) !== 5) {
    failureCount++;
    failures.push("(5, 0) => 5");
}

if (foo(500000, 500000) !== 1000000) {
    failureCount++;
    failures.push("(500000, 500000) => 1000000");
}
`;