/* leetcode Factorial Trailing Zeroes

Given an integer n, return the number of trailing zeroes in n!.

Follow up: Could you write a solution that works in logarithmic time complexity? */

// input: n which represents an integer. Could be positive or negative
// output: a number which represents the number of trailing zeroes in n!
// constraints: 0 <= n <= 10^4
// edge cases: if n is 0, return 0
const trailingZeroes = n => {
  // do something
};

console.log(trailingZeroes(3)) // 0
// Explanation: 3! = 6, no trailing zero.

console.log(trailingZeroes(5)) // 1
// Explanation: 5! = 120, one trailing zero.

console.log(trailingZeroes(0)) // 0