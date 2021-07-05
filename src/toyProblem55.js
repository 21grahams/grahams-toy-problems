/* Leetcode - Single Number II

Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

You must implement a solution with a linear runtime complexity and use only constant extra space */

// input: an array of numbers, appear to be only positive integers
// output: a single number which is the only non-repeating integer
// constraints: 1 <= nums.length <= 3 * 10^4 || -2^31 <= nums[i] <= 2^31 - 1
// edge cases: if the array contains only one number, return that number
const singleNumber = (nums) => {
  // account for edge case
  if (nums.length === 0) return nums[0];

  // sort the nums array
  nums = nums.sort();

  // loop over nums array
  for (let i = 0; i < nums.length; i++) {
    // if the element both two and one less than current element don't equal current element AND both two and one greater than current element don't equal current element
    if (
      nums[i - 2] !== nums[i] &&
      nums[i - 1] !== nums[i] &&
      nums[i + 1] !== nums[i] &&
      nums[i + 2] !== nums[i]
    ) {
      // return current element
      return nums[i];
    }
  }
};

// Runtime: 80 ms, faster than 75.09% of JavaScript online submissions for Single Number II.
// Memory Usage: 39.7 MB, less than 73.31% of JavaScript online submissions for Single Number II.

console.log(singleNumber([2, 2, 3, 2])); // 3

console.log(singleNumber([0, 1, 0, 1, 0, 1, 99])); // 3

console.log(singleNumber([1])); // 1
