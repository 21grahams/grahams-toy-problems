/*
leetcode - Find the Duplicate Number

Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.
*/

// input: an array of integers
// output: a single integer which represents the duplicate number from the input array
// constraints: 1 <= n <= 105. nums.length == n + 1. 1 <= nums[i] <= n. All the integers in nums appear only once except for precisely one integer which appears two or more times.
// edge cases: if the array is empty, return null
const findDuplicate = (nums) => {
  let mappingObj = {}, finalCount = 0
  for (let i = 0; i < nums.length; i++) {
    if (mappingObj[nums[i]] === undefined) {
    mappingObj[nums[i]] = 1
    } else 
    mappingObj[nums[i]]++
  }
  for (let key in mappingObj) {
    if (mappingObj[key] > 1) finalCount = key
  }
  return finalCount
}

// Runtime: 226 ms, faster than 23.34% of JavaScript online submissions for Find the Duplicate Number.
// Memory Usage: 64.1 MB, less than 10.03% of JavaScript online submissions for Find the Duplicate Number.

console.log(findDuplicate([1, 3, 4, 2, 2])) // 2

console.log(findDuplicate([3, 1, 3, 4, 2])) // 3