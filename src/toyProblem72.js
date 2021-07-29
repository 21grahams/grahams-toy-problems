/* leetcode - Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise */

// input: two strings, s and t
// output: a boolean, that returns true if s and t are anagrams of each other, false if not
// constraints: 1 <= s.length, t.length <= 5 * 10^4 | s and t consist of lowercase English letters
// edge cases: if s and t are empty, return true
const isAnagram = (s, t) => {
  // account for edge case

  // split string into an array of letters
  // sort the array of letters ascendingly

  // return comparing setOne to setTwo by joining arrays to strings
};

console.log(isAnagram('anagram', 'nagaram')) // true

console.log(isAnagram('rat', 'car')) // false