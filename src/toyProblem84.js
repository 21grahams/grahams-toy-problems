/* leetcode - Find Minimum in Rotated Sorted Array

Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time */

// input: an array of integers
// output: a number which corresponds to the minimum element in the array
// constraints: must use O(log n) time (logarithmic time)
// edge cases: none at this time
const findMin = nums => {
  // create a min value, assign to 0
  // create a max value, assign to last element in array
  // create a midpoint value, assign to the middle element

  // while the min is less than or equal to the max
    // if the target number equals the array at the midpoint value
      // return midpoint value

    // if the target is smaller than the array at the midpoint value
      // re-assign max to the midpoint minus 1

    // if the target is greater than the array at the midpoint value
      // re-assign min to the midpoint plus 1

    // recalibrate the midpoint

  // return null
};

// Runtime: 102 ms, faster than 6.10% of JavaScript online submissions for Find Minimum in Rotated Sorted Array.
// Memory Usage: 39.8 MB, less than 10.70% of JavaScript online submissions for Find Minimum in Rotated Sorted Array.

console.log(findMin([3, 4, 5, 1, 2])) // 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.

console.log(findMin([4, 5, 6, 7, 0, 1, 2])) // 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

console.log(findMin([11, 13, 15, 17])) // 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times.

console.log(findMin([266,267,268,269,271,278,282,292,293,298,6,9,15,19,21,26,33,35,37,38,39,46,49,54,65,71,74,77,79,82,83,88,92,93,94,97,104,108,114,115,117,122,123,127,128,129,134,137,141,142,144,147,150,154,160,163,166,169,172,173,177,180,183,184,188,198,203,208,210,214,218,220,223,224,233,236,241,243,253,256,257,262,263])) // 6