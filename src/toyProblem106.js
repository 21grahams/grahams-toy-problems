/* leetcode - Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s */

// input: a string, labeled as s
// output: a string, which represents the longest substring palindrome in s
// constraints: 1 <= s.length <= 1000. s consist of only digits and English letters.
// edge cases: if string is empty, return empty null. If string contains just one letter, return that letter
const longestPalindrome = s => {
  // account for edge case

  // split s into an array of letters
  // create a result, assign as a string

  // create a helperFunc using recursion
    // base case - if letter length is 1, increment result and letter

    // recursive case - if letters reversed joined doesn't equal arrayOfLetters
      // call recursive function with slice
};

console.log(longestPalindrome('babad')) // 'bab' ('aba' is also a valid answer)

console.log(longestPalindrome('cbbd')) // 'bb'

console.log(longestPalindrome('a')) // 'a'

console.log(longestPalindrome('ac')) // 'a'