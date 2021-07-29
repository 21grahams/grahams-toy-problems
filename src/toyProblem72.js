/* leetcode - Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise */

// input: two strings, s and t
// output: a boolean, that returns true if s and t are anagrams of each other, false if not
// constraints: 1 <= s.length, t.length <= 5 * 10^4 | s and t consist of lowercase English letters
// edge cases: if s and t are empty, return true
const isAnagram = (s, t) => {
  const map = {};
  for (let a of s) map[a] = (map[a] || 0) + 1;
  for (let a of t) map[a] = (map[a] || 0) - 1;
  for (let a in map) if (map[a] !== 0) return false;
  return true;
};

// Runtime: 112 ms, faster than 32.41% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 45.6 MB, less than 5.57% of JavaScript online submissions for Valid Anagram.

console.log(isAnagram("anagram", "nagaram")); // true

console.log(isAnagram("rat", "car")); // false

console.log(isAnagram("", "")); // true
