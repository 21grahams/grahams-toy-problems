/* leetcode - Minimum Moves to Equal Array Elements

Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.

In one move, you can increment n - 1 elements of the array by 1 */

const minMoves = nums => {
  // do something
};

console.log(minMoves([1, 2, 3])) // 3
// Explanation: Only three moves are needed (remember each move increments two elements):
// [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]

console.log(minMoves([1, 1, 1])) // 0