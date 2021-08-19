/* leetcode - Coin Change

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin */

// input: a set amount of coins representing an array and an amount represented as an integer
// output: a single number representing the fewest number of coins that you need to make up the amount of the second input
// constraints: You may assume that you have an infinite number of each kind of coin. 1 <= coins.length <= 12. 1 <= coins[i] <= 2^31 - 1. 0 <= amount <= 10^4
// edge cases: if that amount of money cannot be made up by any combination of the coins, return -1
const coinChange = (coins, amount) => {
  // do something
};

console.log(coinChange([1, 2, 5], 11)) // 3
// Explanation: 11 = 5 + 5 + 1

console.log(coinChange([2], 3)) // -1

console.log(coinChange([1], 0)) // 0

console.log(coinChange([1], 1)) // 1

console.log(coinChange([1], 2)) // 2