/* leetcode - Count Primes

Count the number of prime numbers less than a non-negative number, n */

// input: a single non-negative integer, n
// output: the number of prime numbers less than the input value of n
// constraints: 0 <= n <= 5 * 10^6
// edge cases:  if n doesn't exist, return null || if n equals 0 or 1, return 0
const countPrimes = (n) => {

  if (n == 0 || n == 1) return 0;
  let count = 0;

  for (let i = 2; i < n; i++) if (isPrime(i)) count++;
  return count;
};

const isPrime = (n) => {
  if (n == 2) return true;
  for (let i = 2; i <= Math.sqrt(n); i++) if (n % i == 0) return false;

  return true;
};

// Runtime: 428 ms, faster than 39.49% of JavaScript online submissions for Count Primes.
// Memory Usage: 144.7 MB, less than 26.72% of JavaScript online submissions for Count Primes.

console.log(countPrimes(10)); // 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7

console.log(countPrimes(0)); // 0

console.log(countPrimes(1)); // 0
