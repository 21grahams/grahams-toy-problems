/* leetcode - Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters */

const lengthOfLongestSubstring = s => {
  // do something
};

console.log(lengthOfLongestSubstring('abcabcbb')) // 3
// Explanation: The answer is "abc", with the length of 3.

console.log(lengthOfLongestSubstring('bbbbb')) // 1
// Explanation: The answer is "b", with the length of 1.

console.log(lengthOfLongestSubstring('pwwkew')) // 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

console.log(lengthOfLongestSubstring('')) // 0