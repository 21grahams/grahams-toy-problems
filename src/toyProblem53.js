/* Leetcode problem - Valid Palindrome

Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases */

// input: a string consisting of a set of letters, likely making up a sentence of words
// output: a bool. True if string is a palindrome, false if not (a palindrome is a word that is spelled the same backwards and forwards)
// constraints: 1 <= s.length <= 2 * 10^5 || s consists only of printable ASCII characters
// edge cases: if string has one char, return true
const isPalindrome = (s) => {
  // account for edge case
  if (s.length === 1) return true;

  s = s.replace(/[^a-zA-Z ]/g, "").split(' ').join('').toLowerCase();
  let otherCopy = s;

  let arr = s.split("").reverse().join("");

  if (arr === otherCopy) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true

console.log(isPalindrome("race a car")); // false

console.log(isPalindrome("ab@a")); // true
