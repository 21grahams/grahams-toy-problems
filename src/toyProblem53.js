/* Leetcode problem - Valid Palindrome

Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases */

// input: a string consisting of a set of letters, likely making up a sentence of words
// output: a bool. True if string is a palindrome, false if not (a palindrome is a word that is spelled the same backwards and forwards)
// constraints: 1 <= s.length <= 2 * 10^5 || s consists only of printable ASCII characters
// edge cases: if string is empty, return true?
const isPalindrome = s => {
  // account for edge case

  // make shallow copy of s
  // split s into array of letters
  // reverse array
  // join array back to string
  // if reversed string is the same as shallow copy of s
    // return true
  // otherwise
    // return false
};

console.log(isPalindrome("A man, a plan, a canal: Panama")) // true

console.log(isPalindrome("race a car")) // false