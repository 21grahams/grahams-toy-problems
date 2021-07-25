/* leetcode - Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array */

// input: an array of integers
// output: the same array (not a copy), that moves all the 0's to the end of the array
// constraints: 1 <= nums.length <= 10^4 | -231 <= nums[i] <= 2^31 - 1
// edge cases: if the input array is empty, return null
const moveZeroes = nums => {
  // do something
};

console.log(moveZeroes([0, 1, 0, 3, 12])) // [1,3,12,0,0]

console.log(moveZeroes([0])) // [0]