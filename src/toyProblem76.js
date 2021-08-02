/* leetcode - Find All Numbers Disappeared in an Array

Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums */

// input: an array of nums of n length. nums[i] is in the range [1, n]
// output: an array of all integers in the range [1, n] that do not appear in nums
// constraints: n == nums.length | 1 <= n <= 105 | 1 <= nums[i] <= n
// edge cases: if nums is empty, return empty array
const findDisappearedNumbers = nums => {
  // account for edge case
  // create a resultArr

  // sort the input array
  // create a max, assign to length of input array

  // loop over input array of to max
    // if current element of input array is not one greater than current element minus one
      // push current element minus one plus one to the resultArr

  // return resultArr
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])) // [5, 6]

console.log(findDisappearedNumbers([1, 1])) // [2]