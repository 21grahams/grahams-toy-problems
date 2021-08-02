/* leetcode - Find All Numbers Disappeared in an Array

Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums */

// input: an array of nums of n length. nums[i] is in the range [1, n]
// output: an array of all integers in the range [1, n] that do not appear in nums
// constraints: n == nums.length | 1 <= n <= 105 | 1 <= nums[i] <= n
// edge cases: if nums is empty, return empty array
const findDisappearedNumbers = (nums) => {
  // account for edge case
  if (nums.length === 0) return [];
  // create a resultArr
  let resultArr = [];
  // create a new set to drop dupes
  let newSet = new Set(nums);
  // create a max, assign to length of nums
  let max = nums.length;

  // loop over new set, up to max
  for (let i = 1; i <= max; i++) {
    // if new set doesn't have/contain i
      // push to resultArr
    if (!newSet.has(i)) resultArr.push(i);
  }
  // return resultArr
  return resultArr;
};

// Runtime: 128 ms, faster than 60.33% of JavaScript online submissions for Find All Numbers Disappeared in an Array.
// Memory Usage: 50.3 MB, less than 29.15% of JavaScript online submissions for Find All Numbers Disappeared in an Array.

let testOne = [4, 3, 2, 7, 8, 2, 3, 1]
let solutionOne = findDisappearedNumbers(testOne);
console.log('solutionOne: ', solutionOne); // [5, 6]

let testTwo = [1, 1]
let solutionTwo = findDisappearedNumbers(testTwo);
console.log('solutionTwo: ', solutionTwo); // [2]