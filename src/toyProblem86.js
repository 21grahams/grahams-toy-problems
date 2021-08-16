/* leetcode - 3Sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets */

// input: an array of integers
// output: all the triplets of values [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// constraints: 0 <= nums.length <= 3000. -10^5 <= nums[i] <= 10^5
// edge cases: if nums input array is empty, return empty array
const threeSum = (nums) => {
  // we need 3 values for this to work
  // so return an empty array if we have less than 3

  // sorting is ok because the function is already O(n^2)
  // and sort is O(nlogn)
  // this also lets us stop iterating once weve passed the target value

  // well use i as our anchor as we move through the array
  // we stop at nums.length - 2 to prevent undefined for k

  // because we sorted the array already
  // we can stop here if the current iterator is greater than the target value

  // if our iterator is the same as the previous value
  // skip it to prevent duplicate results

  // start j at i + 1

  // start k at end of array

  // walking j and k towards each other to find all possible values
  // with i as our anchor value

  // skip duplicate values of j and k

  // move j and k inward
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], -1, 0, 1]

console.log(threeSum([])); // []

console.log(threeSum([0])); // []
