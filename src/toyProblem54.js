/* leetcode Single Number

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space */

// input: an array with a series of numbers
// output: a single number which is the one number in the array that isn't duplicated
// constraints: 1 <= nums.length <= 3 * 10^4 ||| -3 * 10^4 <= nums[i] <= 3 * 10^4 || Each element in the array appears twice except for one element which appears only once.
// edge cases: if nums array contains only one integer, return that num
const singleNumber = (nums) => {

  let sorted = nums.sort();

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i - 1] !== sorted[i] && sorted[i + 1] !== sorted[i]) {
      return sorted[i];
    }
  }
};

console.log(singleNumber([2, 2, 1])); // 1

console.log(singleNumber([4, 1, 2, 1, 2])); // 4

console.log(singleNumber([1])); // 1
