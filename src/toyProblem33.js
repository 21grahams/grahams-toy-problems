/* Length of Last Word

Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

A word is a maximal substring consisting of non-space characters only */

// input: a word or set of words in a string
// output: a number, that represents the length of the last word in the sentence
// constraints: only english letters and normal spaces between words
// edge cases: if last word doesn't exist, return 0. A word is a maximal substring consisting of non-space characters only.
const lengthOfLastWord = s => {
  // account for edge case

  // loop over the string starting from the end
    // collect the length of that last word and return
};

console.log(lengthOfLastWord('Hello World')) // 5
console.log(lengthOfLastWord('')) // 0