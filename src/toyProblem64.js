/* leetcode Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array */

// input: an array of nums, appears to be positive integers
// output: an integer which is the majority number from the input array of nums
// constraints: n == nums.length | 1 <= n <= 5 * 10^4 | -2^31 <= nums[i] <= 2^31 - 1. Assume there's always a majority element
// edge cases: if input array is empty, return null
const majorityElement = nums => {
  // account for edge case
  // create a count var, start at 0
  // create a masterObj

  // sort the nums input array
  // loop over the nums input array
    // if the current element of masterObj is undefined
      // set the masterObj of current element to 1
    // otherwise
      // increment the masterObj of current element

  // loop over the masterObj using a for-in loop
    // grab the value of each key
    // if value is greater than half of length of nums input array
      // increment count with current element; we've found our majority number

  // return count
};

console.log(majorityElement([3, 2, 3])) // 3

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])) // 2