/* leetcode - Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s */

// input: a string, labeled as s
// output: a string, which represents the longest substring palindrome in s
// constraints: 1 <= s.length <= 1000. s consist of only digits and English letters.
// edge cases: if string is empty, return empty null. If string contains just one letter, return that letter
const longestPalindrome = s => {
  // account for edge case
  if (s.length === 0) return '';
  if (s.length === 1) return s[0];

  // create a result var, assign to empty string

  // loop over s
    // recursively call helperFunc on index, index
    // recursively call helperFunc on index, index plus 1

  // create helperFunc recursive func, takes in left and right
    // while left is greater or equal to 0 and right is less than length of s AND s and left is equal to s at right
      // if right minus left + 1 is greater than length of result string
        // assign result to s.slice of left and right plus one

  // return result
};

console.log(longestPalindrome('babad')) // 'bab' ('aba' is also a valid answer)

console.log(longestPalindrome('cbbd')) // 'bb'

console.log(longestPalindrome('a')) // 'a'

console.log(longestPalindrome('')) // ''

console.log(longestPalindrome('ac')) // 'a'