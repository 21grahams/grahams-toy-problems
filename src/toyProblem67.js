/* leetcode Contains Duplicate II

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k */

const containsNearbyDuplicate = (nums, k) => {
  // do something
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)) // true

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)) // true

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)) // false