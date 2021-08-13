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
  // do something
};

console.log(findMin([3, 4, 5, 1, 2])) // 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.

console.log(findMin([4, 5, 6, 7, 0, 1, 2])) // 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

console.log(findMin([11, 13, 15, 17])) // 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times.