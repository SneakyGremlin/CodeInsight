// This is foo1. id: "foo1".

/**
 * Performs a linear search to find the index of a target value in an array. Returns the first match.
 *
 * @param {Array} arr - The array/list to search through.
 * @param {string} x - The value to search for.
 * @returns {number} - The index of the target value if found, otherwise -1.
 */
function foo1(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
}