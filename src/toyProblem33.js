/* Length of Last Word

Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

A word is a maximal substring consisting of non-space characters only */

// input: a word or set of words in a string
// output: a number, that represents the length of the last word in the sentence
// constraints: only english letters and normal spaces between words
// edge cases: if last word doesn't exist, return 0. A word is a maximal substring consisting of non-space characters only.
const lengthOfLastWord = (s) => {

  let wordArray = s.trim().split(" ");
  if (s.length === 0) {
    return 0;
  } else {
    return wordArray[wordArray.length - 1].length;
  }
};

console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("")); // 0
console.log(lengthOfLastWord("a")); // 1