/* Leetcode - Single Number II

Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

You must implement a solution with a linear runtime complexity and use only constant extra space */

// input: an array of numbers, appear to be only positive integers
// output: a single number which is the only non-repeating integer
// constraints: 1 <= nums.length <= 3 * 10^4 || -2^31 <= nums[i] <= 2^31 - 1
// edge cases: if the array contains only one number, return that number
const singleNumber = nums => {
  // account for edge case

  // sort the nums array

  // if the element both two and one less than current element don't equal current element AND both two and more greater than current element don't equal current element
    // return current element
};

console.log(singleNumber([2, 2, 3, 2])) // 3

console.log(singleNumber([0, 1, 0, 1, 0, 1, 99])) // 3

console.log(singleNumber([1])) // 1