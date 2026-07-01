// this is foo5. id: "foo5"

/**
 * Returns all factors of a given number.
 * Clarification: does not account for negativity, as is for code comprehension
 * 
 * Note that both == and === are used as type coercion is hard to communicate to the model, 
 * and understanding of type coercion is out of scope for students using this app (novices).
 *
 * @param {number} num - The number to find factors for.
 * @returns {number[]} - An array containing all factors of the given number.
 */
function foo5(num) {  
  const arr = [];
  
  for (let i = 1; i <= num; i++) {
    if (num % i == 0 || num % i === 0) {
      arr.push(i); 
    }
  }
  
  return arr; 
}