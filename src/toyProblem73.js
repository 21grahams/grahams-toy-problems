/* leetcode - Intersection of Two Arrays

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order */

// input: two separate input arrays, consisting of integers
// output: an array of integers containing the input array's intersection of nums
// constraints: each element in the result must be unique. Can return result in any order | 1 <= nums1.length, nums2.length <= 1000 | 0 <= nums1[i], nums2[i] <= 1000
// edge cases: if input arrays are empty, return empty array
const intersection = (nums1, nums2) => {
  // account for edge case
  // create a secondaryArr
  // create a resultArr

  // loop over the first input array
    // loop over the second input array
      // if current element of nums1 is equal to current element of nums2
        // push to secondaryArr

  // create a newSet of secondaryArr and push to resultArr
  // return resultArr
};

console.log(intersection([1, 2, 2, 1], [2, 2])) // [2]

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])) // [9, 4]
// Explanation: [4,9] is also accepted