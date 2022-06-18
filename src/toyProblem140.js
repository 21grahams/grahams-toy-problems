/*
Largest Substring Between Two Equal Characters

Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

A substring is a contiguous sequence of characters within a string

*/

// input: a sentence coming in as a string
// output: a number, which equals the longest substrings between two equal chars
// constraints: 1 <= s.length <= 300. s contains only lowercase English letters.
// edge cases: If there is no such substring return -1
const maxLengthBetweenEqualCharacters = s => {
  // create a count var, assign to 0
  // create an object
  // loop over the input string
    // if the current element hasn't been seen
      // assign the object at that value to that letter
    // otherwise 
      // incremement the value
  
  // loop over the object
    // if every value is only seen once
      // return -1 (edge case)
    // else if there's only one value
      // return 0
    // else if one value has more than one
      // return the value of the other numbers
};

console.log(maxLengthBetweenEqualCharacters('aa')) // 0
// Explanation: The optimal substring here is an empty substring between the two 'a's.

console.log(maxLengthBetweenEqualCharacters('abca')) // 2
// Explanation: The optimal substring here is "bc".

console.log(maxLengthBetweenEqualCharacters('cbzxy')) // -1
// Explanation: There are no characters that appear twice in s.