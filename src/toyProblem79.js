/* leetcode - Minimum Moves to Equal Array Elements

Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.

In one move, you can increment n - 1 elements of the array by 1 */

// input: an array of intergers with a size of n
// output: an integer which represents the minimum number of moves required to make all array elements equal
// constraints: In one move, you can increment n - 1 elements of the array by 1. n == nums.length. 1 <= nums.length <= 10^5. -10^9 <= nums[i] <= 10^9. The answer is guaranteed to fit in a 32-bit integer.
// edge cases: if input array is empty, return null
const minMoves = nums => {
  // account for edge case
  // create a count, start at 0

  // sort the array
  // loop through the array starting at index 1
    // while current element minus one doesn't equal current element AND current element plus one doesn't equal current element
      // add one to previous element and current element
      // increment count

  // return count
};

console.log(minMoves([1, 2, 3])) // 3
// Explanation: Only three moves are needed (remember each move increments two elements):
// [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]

console.log(minMoves([1, 1, 1])) // 0