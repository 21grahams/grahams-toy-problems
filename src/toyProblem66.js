/* leetcode - Contains Duplicate

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct */


// input: an array of integers, could be positive or negative
// output: a boolean. True if any values appear at least twice in the array and false if every element is unique
// constaints: 1 <= nums.length <= 10^5 || -10^9 <= nums[i] <= 10^9
// edge cases: if input array is empty, return null
const containsDuplicate = nums => {
  // account for edge case

  // loop over input array
    // loop over input array starting at i + 1
      // if current element of i === the current element of j
        // return true - we've found a duplicate

  // return false - we've found no duplicates and broken out of the loop
};

console.log(containsDuplicate([1, 2, 3, 1])) // true

console.log(containsDuplicate([1, 2, 3, 4])) // false

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])) // true