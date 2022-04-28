/*
leetcode - Single Number

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

*/

// input: a non-empty array of integers 
// output: a single integer, which is the number that appears only once in the array
// constraints: 1 <= nums.length <= 3 * 104. -3 * 104 <= nums[i] <= 3 * 104. Each element in the array appears twice except for one element which appears only once.
// edge cases: if array is empty, return null
const singleNumber = nums => {
  // do something   
}

console.log(singleNumber([2, 2, 1])) // 1
console.log(singleNumber([4, 1, 2, 1, 2])) // 4
console.log(singleNumber([1])) // 1