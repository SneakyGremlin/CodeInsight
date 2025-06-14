// This is the function provided in A3 Solo Specifications. this is foo2. id: "foo2"
// Ignore the broken indendation pattern; this was copied from the page.

/**
 * Count the number of even numbers in an array.
 * 
 * @param {number[]} int_array - An array of integers.
 * @param {number} array_len - The length of the array.
 * @returns {number} - The count of even numbers in the array.
 */
function foo2(int_array, array_len) {
    let x = 0;

    for (let i = 0; i < array_len; i++) {
        if (int_array[i] % 2 == 0)
        {
            x++;
        }
    }

    return x;
} 

