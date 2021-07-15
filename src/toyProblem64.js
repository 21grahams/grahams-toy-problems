/* leetcode Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array */

// input: an array of nums, appears to be positive integers
// output: an integer which is the majority number from the input array of nums
// constraints: n == nums.length | 1 <= n <= 5 * 10^4 | -2^31 <= nums[i] <= 2^31 - 1. Assume there's always a majority element
// edge cases: if input array is empty, return null
const majorityElement = nums => {
  // do something
};

console.log(majorityElement([3, 2, 3])) // 3

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])) // 2