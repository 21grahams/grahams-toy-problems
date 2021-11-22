/* leetcode Sqrt(x)

Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

*/

// input: a non-negative integer
// output: the sqrt of the non-negative integer
// constraints: 0 <= x <= 231 - 1
// edge cases: return only the truncated part of x
const mySqrt = (x) => {
  // collect Math.sqrt of x and save in variable
  // if that variable contains a decimal
  // return the closest whole number
  return Math.trunc(Math.sqrt(x));
};

// Runtime: 88 ms, faster than 80.31% of JavaScript online submissions for Sqrt(x).
// Memory Usage: 40 MB, less than 88.70% of JavaScript online submissions for Sqrt(x).

console.log(mySqrt(4)); // 2

console.log(mySqrt(8)); // 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
