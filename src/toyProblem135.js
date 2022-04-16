/*
leetcode - Check If Two String Arrays are Equivalent

Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.
*/

// input: two arrays, each one containing a set of strings
// output: a boolean. true if each word array matches each other and false if they do not
// constraints: 1 <= word1.length, word2.length <= 103. 1 <= word1[i].length, word2[i].length <= 103. 1 <= sum(word1[i].length), sum(word2[i].length) <= 103. word1[i] and word2[i] consist of lowercase letters.
// edge cases: none at this time
const arrayStringsAreEqual = (word1, word2) => {
  // concat each word
  // sort each word
  // compare each word and return`  
}

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"])) // true
// Explanation: word1 represents string "ab" + "c" -> "abc". word2 represents string "a" + "bc" -> "abc". The strings are the same, so return true.

console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"])) // false

console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"])) // true