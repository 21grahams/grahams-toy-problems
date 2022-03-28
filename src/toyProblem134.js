/*
Sum of Unique Elements

You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums.
*/

// input: an array of integers
// output: the sum of all unique elements of numbers from the array (unique being the numbers that appear once)
// constraints: 1 <= nums.length <= 100. 1 <= nums[i] <= 100
// edge cases: if array is empty, return 0. If there are no unique numbers, return 0
const sumOfUnique = nums => {
  // do something
};

console.log(sumOfUnique([1, 2, 3, 2])) // 4
// Explanation: The unique elements are [1,3], and the sum is 4.

console.log(sumOfUnique([1,1,1,1,1])) // 0
//Eplanation: There are no unique elements, and the sum is 0.

console.log(sumOfUnique([1,2,3,4,5])) // 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.