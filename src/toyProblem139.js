/*
leetcode - Truncate Sentence

A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.
*/

const truncateSentence = (s, k) => {
  // do something  
};

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