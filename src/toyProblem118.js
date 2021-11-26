/* leetcode - Power of Two

Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x */

// input: an integer (n)
// output: a boolean, true if n is a power of two, false if not
// constraints: -231 <= n <= 231 - 1
// edge cases: if n is 1, return true
const isPowerOfTwo = n => {
  // account for edge case
  // if n modulo 2 is 0
    // return true
  // otherwise
    // return false
};

console.log(isPowerOfTwo(1)) // true
// Explanation: 2^0 = 1

console.log(isPowerOfTwo(16)) // true
// Explanation: 2^4 = 16

console.log(isPowerOfTwo(3)) // false

console.log(isPowerOfTwo(4)) // true

console.log(isPowerOfTwo(5)) // false