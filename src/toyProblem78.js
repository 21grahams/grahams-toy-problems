/* leetcode - Add Strings

Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly */

// input: two non-negative integers, represented as strings
// output: the sum of both integers, represented as a string
// constraints: can't use any built-in library for handling large integers (such as BigInteger). Cannot convert the inputs to integers directly
// edge cases: if both numbers are 0, return 0
const addStrings = (num1, num2) => {
  // account for edge case
  // create an i var, set to num1 length minus 1
  // create an j var, set to num2 length minus 1
  // create a carry var, set to 0
  // create a sum var, set to empty string

  // loop over i and j, greater than 0
    // create digit1, assign to i less than 0 with ternary
    // create digit2, assign to j less than 0 with ternary
    // create a digitSum, assign to digit1 plus digit2 plus carry
    // assign sum to digitSum modulo 10
    // assign carry to Math.floor of digitSum divided by 10

  // return sum
};

console.log(addStrings('11', '123')) // '134'

console.log(addStrings('456', '77')) // '533'

console.log(addStrings('0', '0')) // '0'