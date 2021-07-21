/* leetcode - Count Primes

Count the number of prime numbers less than a non-negative number, n */

// input: a single non-negative integer, n
// output: the number of prime numbers less than the input value of n
// constraints: 0 <= n <= 5 * 10^6
// edge cases:  if n doesn't exist, return null || if n equals 0 or 1, return 0
const countPrimes = n => {
  // account for edge cases

  // create a count variable, start at 0
  // loop over n, incremement by one
    // if each num up to n modulo 2 is not equal to 0
      // increment count

  // return count
};

console.log(countPrimes(10)); // 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7

console.log(countPrimes(0)); // 0

console.log(countPrimes(1)); // 0