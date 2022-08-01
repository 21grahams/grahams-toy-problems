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
  // create a mapping obj
  // create a finalCount var
  // loop over nums
    // if the current num at the object is undefined
      // assign current num at the object to 1
    // otherwise
      // increment it
  // loop over the object
    // if the value at the key is greater than 1
      // assign finalCount to current key 
  // return finalCount
}

console.log(findDuplicate([1, 3, 4, 2, 2])) // 2

console.log(findDuplicate([3, 1, 3, 4, 2])) // 3