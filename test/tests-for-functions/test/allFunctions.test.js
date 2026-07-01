/*
 unit tests for /src/functions 
*/

describe('Code Comprehension Functions [\'=>\' is shorthand for \'should return\']', () => {

	/**
	 *     
	sumTwoNumbers: "foo0",
    linearSearch: "foo1",
    numberOfEvenNumbers: "foo2",
    multiplyAnArrayOfNumbers: "foo3",
    insertionSortDescending: "foo4",
    returnAllFactorsOfANumber: "foo5"

	// CC => CodeComplexity.

	// full path coverage is picked as that covers statement and branch. 
	// boundary and edge cases are also covered, when appropriate. 
	// mutation testing was leveraged but there were situations in which 
	//		tests sensitive to a value assignment mutation e.g. foo2's initial value is 1, and you 
	//		have an empty array, were required to keep full path coverage.


	 */

	/**
	 * CC: 1; need general case for full path.
	 */
	describe('sumTwoNumbers(numberOne, numberTwo) [alias: foo0]', () => {

		// General Case
		it('((5,1) => 6).', () => {
			chai
			.expect(foo0(5,1))
			.to
			.eql(6);
		});

	    // Case with negative numbers
		it('(-2, -2) => -4', () => {
			chai
			.expect(foo0(-2, -2))
			.to
			.eql(-4);
		});
	
		// Case with zero
		it('(5, 0) => 5', () => {
			chai
			.expect(foo0(5, 0))
			.to
			.eql(5);
		});
	
		// Case with large numbers
		it('(500000, 500000) => 1000000', () => {
			chai
			.expect(foo0(500000, 500000))
			.to
			.eql(1000000);
		});

	});

	/**
	 * CC: 3. Need empty array, general, and not found case for full path.
	 */

	describe('linearSearch(arr, x) [alias: foo1]', () => {

		// Case: Element is at the start of the array
		it('([1, 2, 3, 4, 5], 1) => 0', () => {
		chai
		.expect(foo1([1, 2, 3, 4, 5], 1))
		.to
		.eql(0);
		});

		// Case: Element is at the end of the array
		it('([1, 2, 3, 4, 5], 5) => 4', () => {
		chai
		.expect(foo1([1, 2, 3, 4, 5], 5))
		.to
		.eql(4);
		});

		// Case: Element is in the middle of the array
		it('([1, 2, 3, 4, 5], 3) => 2', () => {
		chai
		.expect(foo1([1, 2, 3, 4, 5], 3))
		.to
		.eql(2);
		});

		// Case: Element is not in the array
		it('([1, 2, 3, 4, 5], 6) => -1', () => {
		chai
		.expect(foo1([1, 2, 3, 4, 5], 6))
		.to
		.eql(-1);
		});

		// Case: Empty array; full path coverage attatined. 
		it('([], 1) => -1', () => {
		chai
		.expect(foo1([], 1))
		.to
		.eql(-1);
		});

		// Case: Large array with element at the start
		it('([1, 2, ..., 1000000], 1) => 0', () => {
		const largeArray = Array.from({ length: 1000000 }, (_, i) => i + 1);
		chai
		.expect(foo1(largeArray, 1))
		.to
		.eql(0);
		});

		// Case: Large array with element at the end
		it('([1, 2, ..., 1000000], 1000000) => 999999', () => {
		const largeArray = Array.from({ length: 1000000 }, (_, i) => i + 1);
		chai
		.expect(foo1(largeArray, 1000000))
		.to
		.eql(999999);
		});

		// Case: Array with duplicate elements, searching for one of the duplicates
		it('([1, 2, 2, 3, 4], 2) => 1', () => {
		chai
		.expect(foo1([1, 2, 2, 3, 4], 2))
		.to
		.eql(1);
		});

	});

	
	/**
	 * Code Complexity: 3; need empty, standard general, and an all odd array for full path.
	 */
	describe('numberOfEvenNumbers(int_array, array_len) [alias: foo2]', () => {
		
		// edge case. [covers all conditionals false scenario.]
		it('Empty Array (length 0) => 0', () => {
			chai
			.expect(foo2([], 0))
			.to
			.eql(0);
		});

		// branch for "for loop" runs at least once, but not the if branch
		// (general case: all odd) 
		it('[1, 3, 5, 7, 9] (length 5) => 0', () => {
			chai
			.expect(foo2([1, 3, 5], 5))
			.to
			.eql(0);
		});

		// branch for "for loop" runs at least once, as well as the if branch 
		// (general case: all even) ; full path coverage attained.
		it('[0, 2, 4, 6, 8, 10, 12] (length 7) => 7', () => {
			chai
			.expect(foo2([0, 2, 4, 6, 8, 10, 12], 7))
			.to
			.eql(7);
		});

		// general case: combination without negatives.
		it('[0, 1, 2, 3], with length 4 => 2', () => {
			chai
			.expect(foo2([0, 1, 2, 3], 4))
			.to
			.eql(2);
		});

		// general case: combination with negatives.
		it('[0, 1, 2, 3, 100, 86, -20, -11] (length 8) => 5', () => {
			chai
			.expect(foo2([0, 1, 2, 3, 100, 86, -20, -11], 8))
			.to
			.eql(5);
		});

	}); 


	// --- Breaking line format here. --- 

	/**
	 * CC: 2; need array to be empty for full path coverage (along with general).
	 */
	describe('multiplyAnArrayOfNumbers(arr) [alias: foo3]', () => {
		
		// Case: General case with positive numbers
		it('([1, 2, 3, 4, 5]) => 120', () => {
			chai.expect(foo3([1, 2, 3, 4, 5])).to.eql(120);
		});
		
		// Case: Single element array
		it('([5]) => 5', () => {
			chai.expect(foo3([5])).to.eql(5);
		});
		
		// Case: Array with zero
		it('([2, 3, 0, 4]) => 0', () => {
			chai.expect(foo3([2, 3, 0, 4])).to.eql(0);
		});
		
		// Case: Array with negative numbers
		it('([-2, 3, -4]) => 24', () => {
			chai.expect(foo3([-2, 3, -4])).to.eql(24);
		});
		
		// Case: Array with positive and negative numbers
		it('([-2, 3, 4]) => -24', () => {
			chai.expect(foo3([-2, 3, 4])).to.eql(-24);
		});
		
		// Case: Empty array (edge case); full path coverage attained.
		it('([]) => 1', () => {
			chai.expect(foo3([])).to.eql(1);
		});
		
		// Case: Array with all ones
		it('([1, 1, 1, 1]) => 1', () => {
			chai.expect(foo3([1, 1, 1, 1])).to.eql(1);
		});
		
		// Case: Large array with all positive numbers
		it('([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) => 3628800', () => {
			chai.expect(foo3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.eql(3628800);
		});
		
	});

	/**
	 * CC:3; note that for full path coverage you need a scenario in which the inner while loop never runs i.e. the elements 
	 * 		of the array are identical, or already sorted. [along with empty array, and a standard general case.]
	 */
	describe('insertionSortDescending(arr) [alias: foo4]', () => {
		
		// Case: General case with positive numbers
		it('([3, 1, 4, 1, 5, 9, 2, 6, 5]) => [9, 6, 5, 5, 4, 3, 2, 1, 1]', () => {
			chai.expect(foo4([3, 1, 4, 1, 5, 9, 2, 6, 5])).to.eql([9, 6, 5, 5, 4, 3, 2, 1, 1]);
		});
		
		// Case: Array already in descending order
		it('([9, 8, 7, 6, 5, 4, 3, 2, 1]) => [9, 8, 7, 6, 5, 4, 3, 2, 1]', () => {
			chai.expect(foo4([9, 8, 7, 6, 5, 4, 3, 2, 1])).to.eql([9, 8, 7, 6, 5, 4, 3, 2, 1]);
		});
		
		// Case: Array in ascending order
		it('([1, 2, 3, 4, 5, 6, 7, 8, 9]) => [9, 8, 7, 6, 5, 4, 3, 2, 1]', () => {
			chai.expect(foo4([1, 2, 3, 4, 5, 6, 7, 8, 9])).to.eql([9, 8, 7, 6, 5, 4, 3, 2, 1]);
		});
		
		// Case: Array with negative numbers
		it('([3, -1, 4, 1, -5, 9, -2, 6, 5]) => [9, 6, 5, 4, 3, 1, -1, -2, -5]', () => {
			chai.expect(foo4([3, -1, 4, 1, -5, 9, -2, 6, 5])).to.eql([9, 6, 5, 4, 3, 1, -1, -2, -5]);
		});
		
		// Case: Array with repeated elements
		it('([5, 3, 5, 3, 5, 3]) => [5, 5, 5, 3, 3, 3]', () => {
			chai.expect(foo4([5, 3, 5, 3, 5, 3])).to.eql([5, 5, 5, 3, 3, 3]);
		});
		
		// Case: Empty array; full path coverage reached.
		it('([]) => []', () => {
			chai.expect(foo4([])).to.eql([]);
		});
		
		// Case: Single element array
		it('([42]) => [42]', () => {
			chai.expect(foo4([42])).to.eql([42]);
		});
		
		// Case: Array with all identical elements
		it('([7, 7, 7, 7]) => [7, 7, 7, 7]', () => {
			chai.expect(foo4([7, 7, 7, 7])).to.eql([7, 7, 7, 7]);
		});
		
		// Case: Array with large numbers
		it('([1000, 100, 10, 1]) => [1000, 100, 10, 1]', () => {
			chai.expect(foo4([1000, 100, 10, 1])).to.eql([1000, 100, 10, 1]);
		});
		
	});


	/**
	 * CC: 3; need empty array AND either a negative number or 0 (with general case) for full path coverage.
	 */
	describe('returnAllFactorsOfANumber(num) [alias: foo5]', () => {
		
		// Case: General case with a small positive integer
		it('(6) => [1, 2, 3, 6]', () => {
			chai.expect(foo5(6)).to.eql([1, 2, 3, 6]);
		});
		
		// Case: Prime number
		it('(7) => [1, 7]', () => {
			chai.expect(foo5(7)).to.eql([1, 7]);
		});
		
		// Case: Number is 1
		it('(1) => [1]', () => {
			chai.expect(foo5(1)).to.eql([1]);
		});
		
		// Case: Large number
		it('(100) => [1, 2, 4, 5, 10, 20, 25, 50, 100]', () => {
			chai.expect(foo5(100)).to.eql([1, 2, 4, 5, 10, 20, 25, 50, 100]);
		});
		
		// Case: Perfect square number
		it('(36) => [1, 2, 3, 4, 6, 9, 12, 18, 36]', () => {
			chai.expect(foo5(36)).to.eql([1, 2, 3, 4, 6, 9, 12, 18, 36]);
		});
		
		// Case: Edge case with 0 (although mathematically invalid for factors); full path attained.
		it('(0) => []', () => {
			chai.expect(foo5(0)).to.eql([]);
		});
		
		// Case: Negative number (considering the function doesn't handle negatives)
		it('(-6) => []', () => {
			chai.expect(foo5(-6)).to.eql([]);
		});
		
		// Case: Large prime number
		it('(97) => [1, 97]', () => {
			chai.expect(foo5(97)).to.eql([1, 97]);
		});
		
	});

});


