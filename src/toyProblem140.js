/*
Largest Substring Between Two Equal Characters

Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

A substring is a contiguous sequence of characters within a string

*/

// input: a sentence coming in as a string
// output: a number, which equals the longest substrings between two equal chars
// constraints: 1 <= s.length <= 300. s contains only lowercase English letters.
// edge cases: If there is no such substring return -1
const maxLengthBetweenEqualCharacters = (s) => {
  // create a count var, assign to 0
  let count = 0;
  // loop over string i
  for (let i = 0; i < s.length; i++) {
    // loop over string j as i + 1
    for (let j = 1; j < s.length; j++) {
      // if string of i equals string of j
      if (s[i] === s[j] && count < j - i) {
        // assign count to index
        count = j - i - 1
      }
    }
  }
  if (count === 0 && s[0] !== s[1]) return -1;
  // return count
  return count;
};

// Runtime: 86 ms, faster than 61.29% of JavaScript online submissions for Largest Substring Between Two Equal Characters.
// Memory Usage: 42.1 MB, less than 92.74% of JavaScript online submissions for Largest Substring Between Two Equal Characters.

console.log(maxLengthBetweenEqualCharacters("aa")); // 0
// Explanation: The optimal substring here is an empty substring between the two 'a's.

console.log(maxLengthBetweenEqualCharacters("abca")); // 2
debugger;
// Explanation: The optimal substring here is "bc".

console.log(maxLengthBetweenEqualCharacters("cbzxy")); // -1
// Explanation: There are no characters that appear twice in s.

console.log(maxLengthBetweenEqualCharacters("cabbac")); // 4

console.log(maxLengthBetweenEqualCharacters("scayofdzcda")); // 7

console.log(maxLengthBetweenEqualCharacters("mgntdygtxrvxjnwksqhxuxtrv")); // 18

console.log(
  maxLengthBetweenEqualCharacters(
    "pfwftcwdbiodyoojbebtwoyqemmsgmsryugkkcwykhtaczj"
  )
); // 21
