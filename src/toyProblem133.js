/* Move zeroes 

given an array of intergers, move all zeroes to the back and return same array
*/

// input: an array of integers
// output: the same array, in the same order, except all zeroes moved to the back
// constraints: must return the same array. Cannot be a duplicate or different array
// edge cases: if the array contains no numbers, return an empty array
const moveZeroes = () => {
  // do something
}

console.log(moveZeroes([1, 0, 2, 3, 0, 5, 5, 35, 0])) // [1, 2, 3, 5, 5, 35, 0, 0, 0]
console.log(moveZeroes([9, 8, 7, 6, 5, 0, 0, 0, 0, 1])) // [9, 8, 6, 5, 5, 1, 0, 0, 0, 0]
console.log(moveZeroes([0, 1, 1])) // [1, 1, 0]
console.log(moveZeroes([])) // []