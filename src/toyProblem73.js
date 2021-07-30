/* leetcode - Intersection of Two Arrays

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order */

// input: two separate input arrays, consisting of integers
// output: an array of integers containing the input array's intersection of nums
// constraints: each element in the result must be unique. Can return result in any order | 1 <= nums1.length, nums2.length <= 1000 | 0 <= nums1[i], nums2[i] <= 1000
// edge cases: if input arrays are empty, return empty array
const intersection = (nums1, nums2) => {
  // account for edge case
  if (nums1.length === 0 && nums2.length === 0) return [];
  // create a secondaryArr
  let secondaryArr = [];

  // loop over the first input array
  for (let i = 0; i < nums1.length; i++) {
    // loop over the second input array
    for (let j = 0; j < nums2.length; j++) {
      // if current element of nums1 is equal to current element of nums2
      if (nums1[i] === nums2[j]) {
        // push to secondaryArr
        secondaryArr.push(nums1[i]);
      }
    }
  }
  // create a newSet of secondaryArr
  let newSet = new Set(secondaryArr);
  // create an array from newSet and assign to resultArr
  let resultArr = Array.from(newSet);
  // return resultArr
  return resultArr;
};

console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [9, 4]
// Explanation: [4,9] is also accepted
