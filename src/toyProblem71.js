/* leetcode - Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array */

// input: an array of integers
// output: the same array (not a copy), that moves all the 0's to the end of the array
// constraints: 1 <= nums.length <= 10^4 | -231 <= nums[i] <= 2^31 - 1
// edge cases: if the input array is empty, return null
const moveZeroes = (nums) => {
  // accout for edge case
  if (nums.length === 0) return null;

  // loop over input array
  for (let i = 0; i < nums.length; i++) {
    // if the current element is a zero
    if (nums[i] === 0) {
      // splice that out
      nums.splice(i, 1);
      // push in 0 to nums array
      nums.push(0);
    }
    // if the first element at index 0 is 0
    if (nums[0] === 0) {
      // splice out
      nums.splice(0, 1);
      // push 0 to input array
      nums.push(0);
    }
  }

  // repeat this process in case any zeroes got skipped with first iteration
  for (let i = 0; i < nums.length; i++) {
    // if the current element is a zero
    if (nums[i] === 0) {
      // splice that out
      nums.splice(i, 1);
      // push in 0 to nums array
      nums.push(0);
    }
    // if the first element at index 0 is zero
    if (nums[0] === 0) {
      // splice out
      nums.splice(0, 1);
      // push 0 to input array
      nums.push(0);
    }
  }
  // return the same input array
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]

console.log(moveZeroes([0])); // [0]

console.log(moveZeroes([0, 0, 1, 1])); // [1, 1, 0, 0]

console.log(moveZeroes([1, 0, 1])); // [1, 1, 0]
