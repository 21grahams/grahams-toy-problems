/*
leetcode - Substrings of Size Three with Distinct Characters

A string is good if there are no repeated characters.

Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

A substring is a contiguous sequence of characters in a string.
*/

// input: a string, represented as the letter s
// output: an integer, which represents the number of good substrings, in this case, a non-repeated string of 3 letters
// constraints: 1 <= s.length <= 100. s​​​​​​ consists of lowercase English letters.
// edge cases: none at this time
const countGoodSubstrings = (s) => {
  let count = 0;
  let innerArr;
  for (let i = 0; i < s.length; i++) {
    innerArr = [];
    for (let j = i; j < i + 3; j++) {
      innerArr.push(s[j]);
    }
    let dropDupes = [...new Set(innerArr)].filter(Boolean)
    if (dropDupes.length === 3) count++
  }
  return count
};

// Runtime: 66 ms, faster than 94.22% of JavaScript online submissions for Substrings of Size Three with Distinct Characters.
// Memory Usage: 44.6 MB, less than 31.33% of JavaScript online submissions for Substrings of Size Three with Distinct Characters.

console.log(countGoodSubstrings("xyzzaz")); // 1
// Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". The only good substring of length 3 is "xyz".

console.log(countGoodSubstrings("aababcabc")); // 4
// Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc". The good substrings are "abc", "bca", "cab", and "abc".
