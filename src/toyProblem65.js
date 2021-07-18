/* leetcode Factorial Trailing Zeroes

Given an integer n, return the number of trailing zeroes in n!.

Follow up: Could you write a solution that works in logarithmic time complexity? */

// input: n which represents an integer. Could be positive or negative
// output: a number which represents the number of trailing zeroes in n!
// constraints: 0 <= n <= 10^4
// edge cases: if n is 0, return 0
const trailingZeroes = (n) => {
  // acount for edge case
  if (n === 0) return 0;
  // create a counter var, start at 0
  let count = 0;

  // loop over n and set i to equal 5 (prime number of trailing zeroes)
  for (let i = 5; i <= n; i += 5) {
    var num = i;
    // while num modulo 5 is equal to 0
    while (num % 5 === 0) {
      // divide num by 5
      num /= 5;
      // increment count
      count++;
    }
  }
  // return count
  return count;
};

// Runtime: 84 ms, faster than 66.28% of JavaScript online submissions for Factorial Trailing Zeroes.
// Memory Usage: 40.5 MB, less than 16.18% of JavaScript online submissions for Factorial Trailing Zeroes.

console.log(trailingZeroes(3)); // 0
// Explanation: 3! = 6, no trailing zero.

console.log(trailingZeroes(5)); // 1
// Explanation: 5! = 120, one trailing zero.

console.log(trailingZeroes(7)); // 1
// Explanation: 5! = 120, one trailing zero.

console.log(trailingZeroes(0)); // 0

console.log(trailingZeroes(30)); // 7
