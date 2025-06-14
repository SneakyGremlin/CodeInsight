// this is foo5. id: "foo5"

/**
 * Returns all factors of a given number.
 * Clarification: does not account for negativity, as is for code comprehension
 *
 * @param {number} num - The number to find factors for.
 * @returns {number[]} - An array containing all factors of the given number.
 */
function foo5(num) {  
  const arr = [];
  
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      arr.push(i); 
    }
  }
  
  return arr; 
}