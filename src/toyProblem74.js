/* leetcode - Intersection of Two Arrays II

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order */


// input: two separate input arrays, consisting of integers
// output: an array of integers containing the input array's intersection of nums
// constraints: each element in the result must be unique. Can return result in any order | 1 <= nums1.length, nums2.length <= 1000 | 0 <= nums1[i], nums2[i] <= 1000
// edge cases: if input arrays are empty, return empty array
const intersect = (nums1, nums2) => {
  // account for the edge case
  // create a resultArr

  // loop over nums1 input array
    // loop over nums2 input array
      // if current element of nums1 equals current element of nums2
        // push current element of nums1 to resultArr

  // return resultArr
};

console.log(intersect([1, 2, 2, 1], [2, 2])) // [2, 2]

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])) // [4 9]
// Explanation: [9,4] is also accepted