/* leetcode - Reverse Integer

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned) */

// input: a series of numbers, positive or negative
// output: that same series of numbers reversed
// constraints: -231 <= x <= 231 - 1
// edge cases: If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0, if no num given as input, return null, if last digit is 0, remove
const reverse = (x) => {
  // account for edge cases

  // create a masterArr
  // convert x to an input arr and split each num up

  // loop over array in decrementing order
    // if current element in array is 0
      // continue (don't add to masterArr)
    // otherwise if current element in array is a negative
      // shift that negative to front place of masterArr
    // otherwise
      // push each val to masterArr

  // return number version of masterArr
};

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
console.log(reverse(0)); // 0
