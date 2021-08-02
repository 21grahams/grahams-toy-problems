/* leetcode - Find All Numbers Disappeared in an Array

Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums */

// input: an array of nums of n length. nums[i] is in the range [1, n]
// output: an array of all integers in the range [1, n] that do not appear in nums
// constraints: n == nums.length | 1 <= n <= 105 | 1 <= nums[i] <= n
// edge cases: if nums is empty, return empty array
const findDisappearedNumbers = nums => {
  // account for edge case
  // create a resultArr
  // create a new set to drop dupes
  // create a max, assign to length of nums

  // loop over new set, up to max
    // if new set doesn't have/contain i
      // push to resultArr

  // return resultArr
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])) // [5, 6]

console.log(findDisappearedNumbers([1, 1])) // [2]