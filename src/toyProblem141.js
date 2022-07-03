/*
leetcode problem - Fibonacci Number

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).
*/

// input: an integer, following the fibonacci sequence
// output: an integer which is the result of the fib sequence
// constraints: 0 <= n <= 30
// edge cases: if there's no input, return null
const fib = (n) => {
  // edge case
  // if n is less than or equal to 2
  // return 1
  if (n === 0) return 0;
  if (n <= 2) return 1;
  // RECURSION
  // base case:
  // if n is equal to 1
  // return n
  if (n === 0) return 1;
  // recursive case:
  // call fib function and pass in n - 1
  return fib(n - 1) + fib(n - 2);
};

// Runtime: 80 ms, faster than 73.10% of JavaScript online submissions for Fibonacci Number.
// Memory Usage: 41.9 MB, less than 47.09% of JavaScript online submissions for Fibonacci Number.

console.log(fib(2)); // 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1

console.log(fib(3)); // 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2

console.log(fib(4)); // 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3
