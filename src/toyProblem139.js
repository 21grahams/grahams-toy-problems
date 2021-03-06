/*
leetcode - Truncate Sentence

A sentence is a list of words that are separated by a single space with no leading or trailing spaces. 
Each of the words consists of only uppercase and lowercase English letters (no punctuation).

For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. 
Return s​​​​​​ after truncating it.
*/

// input: a string sentence and an integer
// output: a truncated string given the input integer number
// constraints: none at this time
// edge cases: if integer is 0, return empty string
const truncateSentence = (s, k) => {
  // account for edge case
  if (k === 0) return ''
  return s.split(' ').slice(0, k).join(' ')
};

// Runtime: 61 ms, faster than 92.48% of JavaScript online submissions for Truncate Sentence.
// Memory Usage: 42.1 MB, less than 50.94% of JavaScript online submissions for Truncate Sentence.

console.log(truncateSentence("Hello how are you Contestant", 4)) // "Hello how are you"
/* Explanation:
The words in s are ["Hello", "how" "are", "you", "Contestant"].
The first 4 words are ["Hello", "how", "are", "you"].
Hence, you should return "Hello how are you".
*/

console.log(truncateSentence("What is the solution to this problem", 4)) // "What is the solution"
/* Explanation:
The words in s are ["What", "is" "the", "solution", "to", "this", "problem"].
The first 4 words are ["What", "is", "the", "solution"].
Hence, you should return "What is the solution".
*/

console.log(truncateSentence("chopper is not a tanuki", 5)) // "chopper is not a tanuki"

console.log(truncateSentence("this is a test to see if the entire string deletes based on edge case", 0)) // ''