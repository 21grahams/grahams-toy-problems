/* Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once */

// input: an array of strings
// output: the anagrams grouped together, inside a nested array
// constraints: 1 <= strs.length <= 10^4. 0 <= strs[i].length <= 100. strs[i] consists of lowercase English letters.
// edge cases: if the input is empty, return empty string. if the input only has one letter, return that letter
const groupAnagrams = strs => {
  // account for edge cases
  // create a resultArr
  // create a currentArr

  // loop over strs array
    // split into arrayOfLetters
      // sort arrayOfLetters
      // join arrayOfLetters back to words
      // loop over each word starting at word 1
        // if a word is the same as another
          // add to currentArr
          // spread into resultArr

  // return resultArr
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])) // [ ["bat"], ["nat", "tan"], ["ate", "eat", "tea"] ]

console.log(groupAnagrams([''])) // [['']]

console.log(groupAnagrams(['a'])) // [['a']]