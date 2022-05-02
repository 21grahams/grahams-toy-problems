/*
leetcode - Single Number

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

*/

// input: a non-empty array of integers
// output: a single integer, which is the number that appears only once in the array
// constraints: 1 <= nums.length <= 3 * 104. -3 * 104 <= nums[i] <= 3 * 104. Each element in the array appears twice except for one element which appears only once.
// edge cases: if array is empty, return null
const singleNumber = (nums) => {
  // create a result var, assign to 0
  let result = 0;
  // sort nums array
  nums = nums.sort();
  // account for edge cases
  if (nums.length === 1) return nums[0];
  if (nums.length === 0) return null;
  // loop over nums array
  for (let i = 0; i < nums.length; i++) {
    // if current num is not equal to next or previous num
    // assign current num to result
    if (nums[i] !== nums[i + 1] && nums[i] !== nums[i - 1]) {
      result = nums[i]
     
    }
  }
  // return result
  return result;
};

// Runtime: 112 ms, faster than 38.67% of JavaScript online submissions for Single Number.
// Memory Usage: 45.6 MB, less than 50.91% of JavaScript online submissions for Single Number.


console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1
console.log(singleNumber([])); // null
