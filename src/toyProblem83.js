/* leetcode - Product of Array Except Self

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation */

// input: an array of integers
// output: an array of integers 'answer' such that answer[i] is equal to the product of all the elements of nums except nums[i]
// constraints: you must write an algorithm that runs in O(n) time and without using the division operation
// edge cases: none at this time
const productExceptSelf = nums => {
  // create an answer array
  // create a result var, initialize to 0
  // create an resultObj and assign to nums

  // loop over the resultObj
    // delete the current value from the equation
    // calculate the product of each value, assign to result var
    // push to answer array

  // return answer array
};

console.log(productExceptSelf([1, 2, 3, 4])) // [24, 12, 8, 6]

console.log(productExceptSelf([-1, 1, 0, -3, 3)) // [0, 0, 9, 0, 0]