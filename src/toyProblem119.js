/* leetcode - Number Complement

The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
Given an integer num, return its complement */

// input: an integer
// output: the complement of that integer
// constraints: 1 <= num < 231
// edge cases: if num is 1, return 0
const findComplement = num => {
  // create numberOfDigits var, assign to the the string of num at 2's length
  let numberOfDigits = num.toString(2).length;
  // create a maxNumber var, assign to the Math.floor of the Math.pow of 2 and numberOfDigits minus 1
  let maxNumber = Math.floor(Math.pow(2, numberOfDigits) - 1);
  // return num to the power of maxNumber 
  return num ^ maxNumber;
};

// Runtime: 72 ms, faster than 75.56% of JavaScript online submissions for Number Complement.
// Memory Usage: 39.1 MB, less than 31.67% of JavaScript online submissions for Number Complement.

console.log(findComplement(5)) // 2
// Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

console.log(findComplement(1)) // 0
// Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.