/*
leetcode - Greatest Common Divisor of Strings

For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
*/

// input: two strings of characters
// output: the largest divisible string x, which is divisible by both str1 and str2
// constraints: 1 <= str1.length, str2.length <= 1000. str1 and str2 consist of English uppercase letters.
// edge cases: if strings aren't divisible, return empty string
const gcdOfStrings = (str1, str2) => {
  if (str1 + str2 !== str2 + str1) {
    // not possible
    // no common element
    return "";
  } else if (str1 === str2) {
    return str1;
  } else if (str1.length > str2.length) {
    return gcdOfStrings(str1.slice(str2.length), str2);
  } else {
    return gcdOfStrings(str2.slice(str1.length), str1);
  }
}

// Runtime: 94 ms, faster than 45.07% of JavaScript online submissions for Greatest Common Divisor of Strings.
// Memory Usage: 43.7 MB, less than 35.92% of JavaScript online submissions for Greatest Common Divisor of Strings.

console.log(gcdOfStrings("ABCABC", "ABC")); // 'ABC'

console.log(gcdOfStrings("ABABAB", "ABAB")); // 'AB'

console.log(gcdOfStrings("LEET", "CODE")); // ''

console.log(
  gcdOfStrings(
    "TAUXXTAUXXTAUXXTAUXXTAUXX",
    "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"
  )
); // 'TAUXX'
