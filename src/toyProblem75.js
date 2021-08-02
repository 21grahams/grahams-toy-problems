/* leetcode - Third Maximum Number

Given integer array nums, return the third maximum number in this array. If the third maximum does not exist, return the maximum number */


// input: an array of integers
// output: a single integer, which is the third maximum number in the array
// constraints: if the third maximum does not exist, return the maximum number
// edge cases: if the array is empty, return null
const thirdMax = nums => {
  // account for edge case

  // sort the input array
  // create an array from a new set to drop the duplicate values assign to variable

  // return the 3rd value in the array
};

console.log(thirdMax([3, 2, 1])) // 1
// Explanation: The third maximum is 1.

console.log(thirdMax([1, 2])) // 2
// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.

console.log(thirdMax([2, 2, 3, 1])) // 1
// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.