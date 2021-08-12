/* leetcode - Next Greater Element I

The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above */

// input: two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2
// output: an array ans of length nums1.length so that ans[i] is next greater element
// constraints: 1 <= nums1.length <= nums2.length <= 1000. 0 <= nums1[i], nums2[i] <= 10^4. All integers in nums1 and nums2 are unique. All the integers of nums1 also appear in nums2.
// edge cases:if there is no next greater element, return -1
const nextGreaterElement = (nums1, nums2) => {
  // create a resultArr

  // loop over nums1 input array, starting at 0
    // loop over nums2 input array, starting at 0
      // if current element of nums1[i] equals current element of nums2[j]
        // if next element in nums2[j] is greater than current element in nums2[j]
          // push that element/value to the resultArr
        // otherwise
          // push -1 to the resultArr

  // return resultArr
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])) // [-1, 3, -1]
/* Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1 */

console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])) // [3, -1]
/* Explanation: The next greater element for each value of nums1 is as follows:
- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1 */