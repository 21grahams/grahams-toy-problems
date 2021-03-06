/* Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once */

// input: an array of strings
// output: the anagrams grouped together, inside a nested array
// constraints: 1 <= strs.length <= 10^4. 0 <= strs[i].length <= 100. strs[i] consists of lowercase English letters.
// edge cases: if the input is empty, return empty string. if the input only has one letter, return that letter
const groupAnagrams = strs => {
  // account for edge cases
  if (strs.length === 0) return [['']];
  if (strs.length === 1) return [[strs[0]]];
  // create a new map
  let resultMap = new Map();

  // for of loop
  for (str of strs) {
    // create a sortedList, assign to str split, sort, join
    const sortedList = str.split('').sort().join('');
    // if new map has sortedList
      // assign new map to get sortedList and push str
    if (resultMap.has(sortedList)) resultMap.get(sortedList).push(str);
    // otherwise
      // set new map with sortedList and [str]
    else resultMap.set(sortedList, [str]);
  }
  // return an Array from new maps values
  return Array.from(resultMap.values());
};

// Runtime: 120 ms, faster than 93.31% of JavaScript online submissions for Group Anagrams.
// Memory Usage: 48.3 MB, less than 95.78% of JavaScript online submissions for Group Anagrams.

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])) // [ ["bat"], ["nat", "tan"], ["ate", "eat", "tea"] ]

console.log(groupAnagrams([''])) // [['']]

console.log(groupAnagrams(['a'])) // [['a']]