/*
leetcode - Letter Combinations of a Phone Number

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
*/

// input: a string containing any amount of digit from 2 to 9
// output: an array strings containing all possible letter combination solutions
// constraints: 0 <= digits.length <= 4 digits[i] is a digit in the range ['2', '9'].
// edge cases: if there are no digits present in the input, return an empty array
const letterCombinations = digits => {
  // do something  
};

console.log(letterCombinations('23')) // ["ad","ae","af","bd","be","bf","cd","ce","cf"]

console.log(letterCombinations('')) // []

console.log(letterCombinations('2')) // ["a","b","c"]