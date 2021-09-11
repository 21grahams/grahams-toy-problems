/* leetcode - Palindromic Substrings

Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string */

// input: a single string of lower case english letters
// output: a number, which represents the number of substring palindromes collected from the input string
// constraints: 1 <= s.length <= 1000. s consists of lowercase English letters.
// edge cases: if the string is empty, return 0. If the string contains one letter, return one
const countSubstrings = s => {
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;
  let count = 0;
  count = s.length;

  const helperFunc = s => {
      for (let i = 0; i < s.length; i++) {
        if (s.split('').reverse().join('') === s) {
          count++;
          helperFunc(s.slice(1));
        }
        break;
      }
  }
  helperFunc(s);
  return count;
};

console.log(countSubstrings('abc')) // 3
// Explanation: Three palindromic strings: "a", "b", "c"

console.log(countSubstrings('aaa')) // 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa"