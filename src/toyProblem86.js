/* leetcode - 3Sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets */

// input: an array of integers
// output: all the triplets of values [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// constraints: 0 <= nums.length <= 3000. -10^5 <= nums[i] <= 10^5
// edge cases: if nums input array is empty, return empty array
const threeSum = (nums) => {
  // do something
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])) // [[-1, -1, 2], -1, 0, 1]

console.log(threeSum([])) // []

console.log(threeSum([0])) // []