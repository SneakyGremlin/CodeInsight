// this is foo4. id: "foo4"

/**
 * Sorts an array in descending order using Insertion Sort algorithm.
 *
 * @param {number[]} arr - The array of numbers to sort.
 * @returns {number[]} - The sorted array in descending order.
 */
function foo4(arr) {
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
}
  