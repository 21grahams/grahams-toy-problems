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

};

console.log(maxLengthBetweenEqualCharacters('aa')) // 0
// Explanation: The optimal substring here is an empty substring between the two 'a's.

console.log(maxLengthBetweenEqualCharacters('abca')) // 2
// Explanation: The optimal substring here is "bc".

console.log(maxLengthBetweenEqualCharacters('cbzxy')) // -1
// Explanation: There are no characters that appear twice in s.

console.log(maxLengthBetweenEqualCharacters('cabbac')) // 4

console.log(maxLengthBetweenEqualCharacters('scayofdzca')) // 6