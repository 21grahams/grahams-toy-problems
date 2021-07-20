/* leetcode Contains Duplicate II

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k */

// input: an array of integers (could be positive or negative) and another integer as a second param
// output: a boolean. True if there are two distinct indices and nums[i] - nums[j] is less or equal to k
// constraints: 1 <= nums.length <= 10^5 | -10^9 <= nums[i] <= 10^9 | 0 <= k <= 10^5
// edge cases: if nums array is empty, return null
const containsNearbyDuplicate = (nums, k) => {
  // account for edge case
  if (nums.length === 0) return null;
  // sort the nums array
  nums.sort();
  // loop over the input array
  for (let i = 0; i < nums.length; i++) {
    // loop over the input array a second time, iterating from first loop + 1
    for (let j = i + 1; i < nums.length; j++) {
      // if the current element of first loop is equal to current element of second loop AND current element of first loop minus current element of second loop is less than or equal to k
      // return true
      if (nums[i] === nums[j] && nums[i] - nums[j] <= k) return true;
    }
  }
  // return false - we've found no dupes and broken out of both loops
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false
