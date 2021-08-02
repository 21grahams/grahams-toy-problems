/* leetcode - Third Maximum Number

Given integer array nums, return the third maximum number in this array. If the third maximum does not exist, return the maximum number */

// input: an array of integers
// output: a single integer, which is the third maximum number in the array
// constraints: if the third maximum does not exist, return the maximum number
// edge cases: if the array is empty, return null
const thirdMax = (nums) => {
  // account for edge case
  if (nums.length === 0) return null;
  if (nums.length === 1) return nums[0];

  // create an array from a new set to drop the duplicate values, assign to variable
  let newArr = Array.from(new Set(nums));

  // sort the newArr descendingly
  newArr.sort((a, b) => {
    return b - a;
  });
  // if the array length is less than three
    // return first element - will be maximum number
  // otherwise
    // return the third element - will be third maximum number
  if (newArr.length < 3) {
    return newArr[0];
  } else {
    return newArr[2];
  }
};

// Runtime: 68 ms, faster than 96.92% of JavaScript online submissions for Third Maximum Number.
// Memory Usage: 40 MB, less than 75.17% of JavaScript online submissions for Third Maximum Number.

console.log(thirdMax([3, 2, 1])); // 1
// Explanation: The third maximum is 1.

console.log(thirdMax([1, 2])); // 2
// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.

console.log(thirdMax([2, 2, 3, 1])); // 1
// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.
