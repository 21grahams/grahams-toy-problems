// leetcode - Merge Sorted Arrays

/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.
*/

// input: 4 inputs; two arrays with positive integers, and two letters (m, n) which represent a number that corresponds to the respective array nums to merge with one another
// output: a single, sorted array, which was combined from the two input arrays
// constraints: The final sorted array should not be returned by the function, but instead be stored inside the array nums1
// edge cases: return empty array if m and n are 0

const merge = (nums1, m, nums2, n) => {
  // account for edge case
  if (m === 0 && n === 0) return [];
  // slice nums1 and nums2 by m and n
  if (m === 0) {
    nums1 = nums1.length = [];
    nums1.push(...nums2)
    return nums1;
  } else {
    nums1.splice(m, m);
  }
  nums2.splice(n, n);
  // splice in nums2 to num1
  nums1.push(...nums2);
  // return sort of nums1
  return nums1.sort((a, b) => {
    return a - b;
  });
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]

console.log(merge([1], 1, [], 0)); // [1]

console.log(merge([0], 0, [1], 1)); // [1]
