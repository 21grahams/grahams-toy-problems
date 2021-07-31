/* leetcode - Intersection of Two Arrays II

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order */

// input: two separate input arrays, consisting of integers
// output: an array of integers containing the input array's intersection of nums
// constraints: each element in the result must be unique. Can return result in any order | 1 <= nums1.length, nums2.length <= 1000 | 0 <= nums1[i], nums2[i] <= 1000
// edge cases: if input arrays are empty, return empty array
const intersect = (nums1, nums2) => {
  // account for the edge case
  if (nums1.length === 0 && nums2.length === 0) return [];
  // create a resultArr
  let resultArr = [];
  // sort the input arrays
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  // create a var for i and j, initialize to 0
  let i = 0,
    j = 0;

  // while nums1 length is greater than i and nums2 length is greater than j
  while (nums1.length > i && nums2.length > j) {
    // if current element of nums1 equals current element of nums2
    if (nums1[i] === nums2[j]) {
      // push current element of nums1 to resultArr
      resultArr.push(nums1[i]);
      // increment i and j
      i++;
      j++;
    }
    // otherwise if current element of nums1 is less than current element of nums2
    else if (nums1[i] < nums2[j]) {
      // increment i
      i++;
      // otherwise
    } else {
      // increment j
      j++;
    }
  }
  // return resultArr
  return resultArr;
};

console.log(intersect([1, 2, 2, 1], [2, 2])); // [2, 2]

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4, 9]
// Explanation: [9, 4] is also accepted
