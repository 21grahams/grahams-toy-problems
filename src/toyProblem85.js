/* leetcode - Search in Rotated Sorted Array

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity */

// input: an array of integers, could be positive or negative and a target integer
// output: the index of the array in which the target number is located
// constraints: 1 <= nums.length <= 5000. -10^4 <= nums[i] <= 10^4. All values of nums are unique. nums is guaranteed to be rotated at some pivot. -10^4 <= target <= 10^4
// edge cases: if the target number doesn't exist in the input, return -1
const search = (nums, target) => {
  // create a min, assign to 0
  // create a max, assign to last index in input array
  // create a midpoint, assign to the middle of the input array

  // while the min is less than or equal to the max
    // if the target is equal to the array at the midpoint
      // return the midpoint, we've found the index we want

    // if the target is greater than the array at the midpoint
      // reassign the min to be the midpoint plus 1

  // if the target is smaller than the array at the midpoint
        // reassign the max to be the midpoint minus 1

  // recalibrate the midpoint

  // return -1
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0))  // 4

console.log(search([4, 5, 6, 7, 0, 1, 2], 3))  // -1

console.log(search([1], 0))  // -1