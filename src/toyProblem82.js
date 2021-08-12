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
  // loop over nums1
  for (let i = 0; i < nums1.length; i++) {
    // create index variable, assign to nums2's indexOf the current value in nums1
    let index = nums2.indexOf(nums1[i]);
    // create a findMax variable, assign to -1
    let findMax = -1;
    // create a j variable, assign to 1
    let j = 1;

    // while the index plus j is less than the length of nums2
    while ((index + j) < nums2.length) {
      // if current element of nums1 is less than nums2 at the index of index + j
      if (nums1[i] < nums2[index + j]) {
        // assign findMax to nums2 at index plus j
        findMax = nums2[index + j];
        // break
        break;
      }
      // increment j
      j++;
    }
    // assign current element of nums1 to findMax
    nums1[i] = findMax;
  }
  // return nums1
  return nums1;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1, 3, -1]
/* Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1 */

console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])); // [3, -1]
/* Explanation: The next greater element for each value of nums1 is as follows:
- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1 */
