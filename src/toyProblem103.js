/* leetcode - Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters */

// input: a string of characters, represented as 's'
// output: a single integer, which represents the length of the longest substring without repeating characters
// constraints: 0 <= s.length <= 5 * 10^4. s consists of English letters, digits, symbols and spaces
// edge cases: if the string is empty, return 0
const lengthOfLongestSubstring = (s) => {
  // // account for edge cases
  // if (s.length === 0) return 0;
  // if (s.length === 1) return 1;

  // // create a hash table object
  // // create a max length, assign to 0
  // // create a start, assign to 0
  // let hashMap = {}, max = 0, start = 0;

  // // loop over s
  // for (let i = 0; i < s.length; i++) {
  //   // if hash table object at current character is string is NOT undefined and hash table at current character is greater or equal to start
  //   if (hashMap[s[i]] !== undefined && hashMap[s[i]] >= start) {
  //     // assign start to be hash table at current character plus one
  //     start = hashMap[s[i]] + 1;
  //   }
  //     // assign hash table at current character to be current index
  //     hashMap[s[i]] = i;
  //     // assign max to be Math.max of max and index minus start plus one
  //     max = Math.max(max, (i - start + 1));
  // }
  // // return max
  // return max;

  //===========================
  // OPTION TWO USING A NEW MAP
  //===========================

  // create a letters var, assign to splitting s into array of letters
  // create a max var, assign to 0
  // create a result var, assign to new map
  // create a start var, assign to 0
  let letters = s.split(''), max = 0, result = new Map(), start = 0;

  // loop over letters
  for (let i = 0; i < letters.length; i++) {
    // if result doesn't have curent letter
    // set result with current letters
    if (!result.has(letters[i])) result.set(letters[i], i);
    // otherwise
    else {
      // assign index to result of getting current letter index
      i = result.get(letters[i]);
      // clear result map
      result.clear();
    }
    // if max is smaller than size of result
    // assign max to size of result
    if (max < result.size) max = result.size;
  }
  // return max
  return max;
};

// Runtime: 132 ms, faster than 48.27% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 45.2 MB, less than 34.93% of JavaScript online submissions for Longest Substring Without Repeating Characters.

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
// Explanation: The answer is "abc", with the length of 3.

console.log(lengthOfLongestSubstring("bbbbb")); // 1
// Explanation: The answer is "b", with the length of 1.

console.log(lengthOfLongestSubstring("pwwkew")); // 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

console.log(lengthOfLongestSubstring("")); // 0

seen = false[("p", "w", "w", "k", "e", "w")];
i = 0;
masterObj = {
  p: 1,
};
