/*
Largest Substring Between Two Equal Characters

Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

A substring is a contiguous sequence of characters within a string

*/

const maxLengthBetweenEqualCharacters = s => {
  // do something
};

console.log(maxLengthBetweenEqualCharacters('aa')) // 0
// Explanation: The optimal substring here is an empty substring between the two 'a's.

console.log(maxLengthBetweenEqualCharacters('abca')) // 2
// Explanation: The optimal substring here is "bc".

console.log(maxLengthBetweenEqualCharacters('cbzxy')) // -1
// Explanation: There are no characters that appear twice in s.