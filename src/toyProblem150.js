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
  // do something
}

console.log(gcdOfStrings('ABCABC', 'ABC')) // 'ABC'

console.log(gcdOfStrings('ABABAB', 'ABAB')) // 'AB'

console.log(gcdOfStrings('LEET', 'CODE')) // ''