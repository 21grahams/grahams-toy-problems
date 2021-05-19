/* Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

*/

// input: a haystack and a needle where haystack is a string and needle is a string
// output: a number that corresponds to the index of where the needle is inside of the haystack. Or -1 if needle doesn't exist in haystack or 0 if needle is empty string
// contraints: needle and haystack consist of only lowercase numbers
// edge cases: Return -1 if needle doesn't exist in haystack or 0 if needle is empty string
var strStr = function(haystack, needle) {
  // account for the edge cases

  // split the needle in a wordArray
  // loop over the haystack
    // check if the wordArray is contained inside of haystack
      // return index
    // otherwise
      // return -1
};