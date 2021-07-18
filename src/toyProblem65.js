/* leetcode Factorial Trailing Zeroes

Given an integer n, return the number of trailing zeroes in n!.

Follow up: Could you write a solution that works in logarithmic time complexity? */

// input: n which represents an integer. Could be positive or negative
// output: a number which represents the number of trailing zeroes in n!
// constraints: 0 <= n <= 10^4
// edge cases: if n is 0, return 0
const trailingZeroes = (n) => {
  // account for edge case
  if (n === 0) return 0;

  // create a factorCounter var, start at 1
  let factorCounter = 1;
  // loop up to n, increment by 1, start i at 1
  for (let i = 1; i <= n; i++) {
    // multiply factorCounter by i each iteration and store
    factorCounter *= i;
  }
  console.log("factorCounter: ", factorCounter);
  // create a zeroCounter var, start at 0
  let zeroCounter = 0;
  // grab factorCounter var, string it, split it by each char
  factorCounter = factorCounter.toString().split("");

  // loop through factorCounter decrementing
  for (let i = factorCounter.length - 1; i >= 0; i--) {
    // if current element is a '0'
    if (factorCounter[i] === "0") {
      // increment zeroCounter
      zeroCounter++;
    } else if (factorCounter[i] !== "0") break;
  }
  // return zeroCounter
  return zeroCounter;
};

// factorCounter = ['1', '2', '0']
// n = 5
// i = 2
// zeroCounter = 1

console.log(trailingZeroes(3)); // 0
// Explanation: 3! = 6, no trailing zero.

console.log(trailingZeroes(5)); // 1
// Explanation: 5! = 120, one trailing zero.

console.log(trailingZeroes(7)); // 1
// Explanation: 5! = 120, one trailing zero.

console.log(trailingZeroes(0)); // 0
