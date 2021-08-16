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
  let left = 0;
  let right = nums.length - 1;

  while (left < right - 1) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) return mid;

    if (nums[left] < nums[mid]) {
      if (target >= nums[left] && target <= nums[mid]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    } else {
      if (target >= nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  }
  if (nums[left] === target) return left;
  if (nums[right] === target) return right;
  return -1;
};

// Runtime: 76 ms, faster than 64.31% of JavaScript online submissions for Search in Rotated Sorted Array.
// Memory Usage: 40.3 MB, less than 16.96% of JavaScript online submissions for Search in Rotated Sorted Array.

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4

console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1

console.log(search([1], 0)); // -1
