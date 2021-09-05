/* leetcode - Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters */

// input: a string of characters, represented as 's'
// output: a single integer, which represents the length of the longest substring without repeating characters
// constraints: 0 <= s.length <= 5 * 10^4. s consists of English letters, digits, symbols and spaces
// edge cases: if the string is empty, return 0
const lengthOfLongestSubstring = (s) => {
  // account for edge cases
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  // create a hash table object
  // create a max length, assign to 0
  // create a start, assign to 0

  // loop over s
    // if hash table object at current character is string is NOT undefined and hash table at current character is greater or equal to start
      // assign start to be hash table at current character plus one
    // assign hash table at current character to be current index
    // assign max to be Math.max of max and index minus start plus one

  // return max
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
// Explanation: The answer is "abc", with the length of 3.

console.log(lengthOfLongestSubstring("bbbbb")); // 1
// Explanation: The answer is "b", with the length of 1.

console.log(lengthOfLongestSubstring("pwwkew")); // 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

console.log(lengthOfLongestSubstring("")); // 0

seen = false[("p", "w", "w", "k", "e", "w")];
i = 0;
masterObj = {
  p: 1,
};
