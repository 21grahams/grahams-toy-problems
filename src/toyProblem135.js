/*
leetcode - Check If Two String Arrays are Equivalent

Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.
*/

const arrayStringsAreEqual = (word1, word2) => {
  // do something   
}

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"])) // true
// Explanation: word1 represents string "ab" + "c" -> "abc". word2 represents string "a" + "bc" -> "abc". The strings are the same, so return true.

console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"])) // false

console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"])) // true