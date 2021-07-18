/* leetcode Factorial Trailing Zeroes

Given an integer n, return the number of trailing zeroes in n!.

Follow up: Could you write a solution that works in logarithmic time complexity? */

// input: n which represents an integer. Could be positive or negative
// output: a number which represents the number of trailing zeroes in n!
// constraints: 0 <= n <= 10^4
// edge cases: if n is 0, return 0
const trailingZeroes = n => {
  // account for edge case

  // create a factorCounter var, start at 0
  // loop up to n, increment by 1
    // multiply factorCounter by i each iteration and store

  // create a zeroCounter var, start at 0
  // grab factorCounter var, string it, split it by each char
  // loop through factorCounter
    // if current element is a 0
      // increment zeroCounter

  // return zeroCounter
};

console.log(trailingZeroes(3)) // 0
// Explanation: 3! = 6, no trailing zero.

console.log(trailingZeroes(5)) // 1
// Explanation: 5! = 120, one trailing zero.

console.log(trailingZeroes(0)) // 0