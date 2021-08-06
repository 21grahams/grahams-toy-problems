/* leetcode - Minimum Moves to Equal Array Elements

Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.

In one move, you can increment n - 1 elements of the array by 1 */

// input: an array of intergers with a size of n
// output: an integer which represents the minimum number of moves required to make all array elements equal
// constraints: In one move, you can increment n - 1 elements of the array by 1. n == nums.length. 1 <= nums.length <= 10^5. -10^9 <= nums[i] <= 10^9. The answer is guaranteed to fit in a 32-bit integer.
// edge cases: if input array is empty, return null
const minMoves = nums => {
  // set a sum variable equal to first value of array
  let sum = nums[0];
  // set a min variable equal to first value of array
  let min = nums[0];

  // loop over nums, start at index 1
  for (let i = 1; i < nums.length; i++) {
    // if the current element is less than min
      // re-assign min to that current element
      if (nums[i] < min) min = nums[i];
      // increment sum and current element
      sum += nums[i];
  }
  // return sum minus the length of the nums input array multiplied by the min
  return sum - (nums.length * min);
};

// Runtime: 84 ms, faster than 68.42% of JavaScript online submissions for Minimum Moves to Equal Array Elements.
// Memory Usage: 42.4 MB, less than 54.97% of JavaScript online submissions for Minimum Moves to Equal Array Elements.

console.log(minMoves([1, 2, 3])) // 3
// Explanation: Only three moves are needed (remember each move increments two elements):
// [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]

console.log(minMoves([1, 1, 1])) // 0