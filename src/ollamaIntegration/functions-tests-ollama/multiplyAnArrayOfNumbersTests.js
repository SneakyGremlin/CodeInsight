export const multiplyAnArrayOfNumbersTests = 
`
numberOfTests = 8;

if (foo([1, 2, 3, 4, 5]) !== 120) {
    failureCount++;
    failures.push("([1, 2, 3, 4, 5]) => 120");
}

if (foo([5]) !== 5) {
    failureCount++;
    failures.push("([5]) => 5");
}

if (foo([2, 3, 0, 4]) !== 0) {
    failureCount++;
    failures.push("([2, 3, 0, 4]) => 0");
}

if (foo([-2, 3, -4]) !== 24) {
    failureCount++;
    failures.push("([-2, 3, -4]) => 24");
}

if (foo([-2, 3, 4]) !== -24) {
    failureCount++;
    failures.push("([-2, 3, 4]) => -24");
}

if (foo([]) !== 1) {
    failureCount++;
    failures.push("([]) => 1");
}

if (foo([1, 1, 1, 1]) !== 1) {
    failureCount++;
    failures.push("([1, 1, 1, 1]) => 1");
}

if (foo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) !== 3628800) {
    failureCount++;
    failures.push("([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) => 3628800");
}
`;