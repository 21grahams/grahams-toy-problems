/* leetcode - Longest Repeating Character Replacement

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations */

// input: a string of characters (s) and an integer (k)
// output: a single integer representing the longest possible substring of the input string that you can change only k amount of times
// constraints: 1 <= s.length <= 10^5. s consists of only uppercase English letters. 0 <= k <= s.length
// edge cases: none at this time, may add in something for either s or k being empty, but not right now
const characterReplacement = (s, k) => {
  // do something
};

console.log(characterReplacement('ABAB', 2)) // 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

console.log(characterReplacement('AABABBA', 1)) // 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.