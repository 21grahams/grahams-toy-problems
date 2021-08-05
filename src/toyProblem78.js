/* leetcode - Add Strings

Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly */

// input: two non-negative integers, represented as strings
// output: the sum of both integers, represented as a string
// constraints: can't use any built-in library for handling large integers (such as BigInteger). Cannot convert the inputs to integers directly
// edge cases: if both numbers are 0, return 0
const addStrings = (num1, num2) => {
  // account for edge case
  if (num1 === '0' && num2 === '0') return '0';
  // create an i var, set to num1 length minus 1
  let i = num1.length - 1;
  // create an j var, set to num2 length minus 1
  let j = num2.length - 1;
  // create a carry var, set to 0
  let carry = 0;
  // create a sum var, set to empty string
  let sum = "";

  // loop over i and j, greater than 0
  for (; i >= 0 || j >= 0 || carry > 0; i--, j--) {
    // create digit1, assign to i less than 0 with ternary
    const digit1 = i < 0 ? 0 : num1.charAt(i) - "0";
    // create digit2, assign to j less than 0 with ternary
    const digit2 = j < 0 ? 0 : num2.charAt(j) - "0";
    // create a digitSum, assign to digit1 plus digit2 plus carry
    const digitsSum = digit1 + digit2 + carry;
    // assign sum to digitSum modulo 10
    sum = `${digitsSum % 10}${sum}`;
    // assign carry to Math.floor of digitSum divided by 10
    carry = Math.floor(digitsSum / 10);
  }
  // return sum
  return sum;
};

// Runtime: 84 ms, faster than 71.35% of JavaScript online submissions for Add Strings.
// Memory Usage: 41.1 MB, less than 44.88% of JavaScript online submissions for Add Strings.

console.log(addStrings("11", "123")); // '134'

console.log(addStrings("456", "77")); // '533'

console.log(addStrings("0", "0")); // '0'
