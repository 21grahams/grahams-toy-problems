/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

// input: an array of nums and a target integer
// output: the indices of two of the nums in the array that sum to the target integer
// constraints: only one valid answer exists
// edge cases: return empty array if no nums exist
var twoSum = function(nums, target) {
  // create masterArr
  // loop over the nums array
    // loop over the nums array a second time
      // if current element at first loop plus current element at second loop equal target
        // push indices to masterArr

  // return masterArr
  let masterArr = [];
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              masterArr.push(i, j)
          }
      }
  }
  return masterArr;
};

console.log(twoSum([1, 2, 3, 4, 5], 9)) // [3, 4]
console.log(twoSum([4, 73, 23, 4], 8)) // [0, 3]
console.log(twoSum([-1, 23, -345, 2], -346)) // [0, 2]
console.log(twoSum([], 9)) // []