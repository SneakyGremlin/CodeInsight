export const insertionSortDescendingTests =
`
numberOfTests = 9;

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

if (!arraysEqual(foo([3, 1, 4, 1, 5, 9, 2, 6, 5]), [9, 6, 5, 5, 4, 3, 2, 1, 1])) {
    failureCount++;
    failures.push("([3, 1, 4, 1, 5, 9, 2, 6, 5]) => [9, 6, 5, 5, 4, 3, 2, 1, 1]");
}

if (!arraysEqual(foo([9, 8, 7, 6, 5, 4, 3, 2, 1]), [9, 8, 7, 6, 5, 4, 3, 2, 1])) {
    failureCount++;
    failures.push("([9, 8, 7, 6, 5, 4, 3, 2, 1]) => [9, 8, 7, 6, 5, 4, 3, 2, 1]");
}

if (!arraysEqual(foo([1, 2, 3, 4, 5, 6, 7, 8, 9]), [9, 8, 7, 6, 5, 4, 3, 2, 1])) {
    failureCount++;
    failures.push("([1, 2, 3, 4, 5, 6, 7, 8, 9]) => [9, 8, 7, 6, 5, 4, 3, 2, 1]");
}

if (!arraysEqual(foo([3, -1, 4, 1, -5, 9, -2, 6, 5]), [9, 6, 5, 4, 3, 1, -1, -2, -5])) {
    failureCount++;
    failures.push("([3, -1, 4, 1, -5, 9, -2, 6, 5]) => [9, 6, 5, 4, 3, 1, -1, -2, -5]");
}

if (!arraysEqual(foo([5, 3, 5, 3, 5, 3]), [5, 5, 5, 3, 3, 3])) {
    failureCount++;
    failures.push("([5, 3, 5, 3, 5, 3]) => [5, 5, 5, 3, 3, 3]");
}

if (!arraysEqual(foo([]), [])) {
    failureCount++;
    failures.push("([]) => []");
}

if (!arraysEqual(foo([42]), [42])) {
    failureCount++;
    failures.push("([42]) => [42]");
}

if (!arraysEqual(foo([7, 7, 7, 7]), [7, 7, 7, 7])) {
    failureCount++;
    failures.push("([7, 7, 7, 7]) => [7, 7, 7, 7]");
}

if (!arraysEqual(foo([1000, 100, 10, 1]), [1000, 100, 10, 1])) {
    failureCount++;
    failures.push("([1000, 100, 10, 1]) => [1000, 100, 10, 1]");
}
`;