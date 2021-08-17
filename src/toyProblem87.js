/* leetcode - Sum of Two Integers

Given two integers a and b, return the sum of the two integers without using the operators + and - */

// input: a set of two different integers
// output: a single integer which is the sum of both input integers
// constraints: cannot use the + or - operator. -1000 <= a, b <= 1000
// edge cases: if a and b both equal 0, return 0
const getSum = (a, b) => {
  // account for edge case
  if (a === 0 && b === 0) return 0;

  // while b is not 0
  while (b !== 0) {
    // create a carry variable, set equal to a and b
    let carry = a & b;
    // assign a to a to the power of b
    a = a ^ b;
    // assign b to carry smaller than 1
    b = carry << 1;
  }
  // return a
  return a;
};

// Runtime: 68 ms, faster than 78.34% of JavaScript online submissions for Sum of Two Integers.
// Memory Usage: 38.6 MB, less than 52.64% of JavaScript online submissions for Sum of Two Integers.

console.log(getSum(1, 2)); // 3

console.log(getSum(2, 3)); // 5
