// this is foo3. id: "foo3"

/**
 * Multiplies all the numbers in an array.
 *
 * @param {number[]} arr - The array of numbers to multiply.
 * @returns {number} - The product of all the numbers in the array.
 */
function foo3(arr) {
  let x = 1; 
  for (let i = 0; i < arr.length; i++) {
    x *= arr[i];
  }
  return x; 
}