/* leetcode Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array */

// input: an array of nums, appears to be positive integers
// output: an integer which is the majority number from the input array of nums
// constraints: n == nums.length | 1 <= n <= 5 * 10^4 | -2^31 <= nums[i] <= 2^31 - 1. Assume there's always a majority element
// edge cases: if input array is empty, return null
const majorityElement = (nums) => {
  // account for edge case
  if (nums.length === 0) return null;
  // create a count var, start at 0
  let count = 0;
  // create a masterObj
  let masterObj = {};

  // sort the nums input array
  nums.sort();
  // loop over the nums input array
  for (let i = 0; i < nums.length; i++) {
    // if the current element of masterObj is undefined
    if (masterObj[nums[i]] === undefined) {
      // set the masterObj of current element to 1
      masterObj[nums[i]] = 1;
      // otherwise
    } else {
      // increment the masterObj of current element
      masterObj[nums[i]]++;
    }
  }
  // loop over the masterObj using a for-in loop
  for (let key in masterObj) {
    // grab the value of each key
    let value = masterObj[key];
    // if value is greater than half of length of nums input array
    if (value > nums.length / 2) {
      // increment count with current elements key; we've found our majority number
      count = key;
    }
  }
  // return count
  return count;
};

// Runtime: 80 ms, faster than 79.95% of JavaScript online submissions for Majority Element.
// Memory Usage: 42.5 MB, less than 25.47% of JavaScript online submissions for Majority Element.

console.log(majorityElement([3, 2, 3])); // 3

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
