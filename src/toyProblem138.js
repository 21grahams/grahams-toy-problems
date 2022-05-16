/*
leetcode - Unique Number of Occurrences

Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.
*/

// input: an array of integers
// output: a boolean, true if the number of occurrences of each value in the array is unique, or false otherwise
// constraints: 1 <= arr.length <= 1000. -1000 <= arr[i] <= 1000
// edge cases: if array contains 0 or 1 integer(s), return true, as arr is unique
const uniqueOccurrences = arr => {
  // do something
}

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])) // true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

console.log(uniqueOccurrences([1, 2])) // false

console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])) // true