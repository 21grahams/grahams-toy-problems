/* leetcode - Palindrome Number

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not. */

// input: an interger (x)
// output: a boolean, true if integer is a palindrome, false if not
// constraints: -231 <= x <= 231 - 1
// edge cases: if integer is single digit, return true
const isPalindrome = x =>{
  // do something  
};

console.log(isPalindrome(121)) // true

console.log(isPalindrome(-121)) // false
// explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

console.log(isPalindrome(10)) // false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

console.log(isPalindrome(-101)) // false