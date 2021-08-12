/* leetcode - Product of Array Except Self

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation */

// input: an array of integers
// output: an array of integers 'answer' such that answer[i] is equal to the product of all the elements of nums except nums[i]
// constraints: you must write an algorithm that runs in O(n) time and without using the division operation
// edge cases: none at this time
const productExceptSelf = nums => {
  // create a leftArr, assign to a new Array of the length of nums
  // create a rightArr, assign to a new Array of the length of nums
  // create a result array

  // assign leftArr at index 0 to 1
  // loop over nums, starting at index 1
    // assign leftArr at current index to leftArr at index minus 1 times nums at the index minus one

  // assign rightArr at the last index to 1
  // loop over nums, decrementing and begin at nums.length - 2
    // assign rightArr at current index to rightArr at index plus 1 times nums at the index plus one

  // loop over nums
    // push current value of leftArr times current value of rightArr onto the result array

  // return result array
};

console.log(productExceptSelf([1, 2, 3, 4])) // [24, 12, 8, 6]

console.log(productExceptSelf([-1, 1, 0, -3, 3)) // [0, 0, 9, 0, 0]