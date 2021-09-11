/* leetcode - Palindromic Substrings

Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string */

// input: a single string of lower case english letters
// output: a number, which represents the number of substring palindromes collected from the input string
// constraints: 1 <= s.length <= 1000. s consists of lowercase English letters.
// edge cases: if the string is empty, return 0. If the string contains one letter, return one
const countSubstrings = s => {
  // account for edge cases
  // create a count var, assign to 0
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;
  let count = 0;

  // create a helperFunc, takes in start and end
  const helperFunc = (start, end) => {
    // while start is greater or equal to 0 and end is less than length of s and s at start is equal to s at end
    while (start >= 0 && end < s.length && s[start] === s[end]) {
      // increment count, decrement start, increment end
      count++;
      start--;
      end++;
    }
  }

  // loop over s
  for (let i = 0; i < s.length; i++) {
    // call helperFunc and pass in i, i
    helperFunc(i, i);
    // call helperFunc and pass in i, i + 1
    helperFunc(i, i + 1);
  }
  // return count
  return count;
};

// Runtime: 80 ms, faster than 81.39% of JavaScript online submissions for Palindromic Substrings.
// Memory Usage: 39 MB, less than 98.08% of JavaScript online submissions for Palindromic Substrings.

console.log(countSubstrings('')) // 0

console.log(countSubstrings('a')) // 1

console.log(countSubstrings('abc')) // 3
// Explanation: Three palindromic strings: "a", "b", "c"

console.log(countSubstrings('aaa')) // 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa"