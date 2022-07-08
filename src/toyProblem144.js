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
  // account for edge case
  if (digits.length === 0) return []
  // create a hash map object, assign numbers to their corresponding letters
  // create an empty containerArray and string for our results
  let letterObj = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }, containerArray = [], initialStringConcat = '', secondaryStringConcat = ''
  // loop over the digits input
    for (let i = 0; i < digits.length; i++) {
      initialStringConcat += letterObj[digits[i]]
  }
  // split the initialStringConcat
  let splitArray = initialStringConcat.split('')

  // loop twice over the splitArray
  for (let i = 0; i < splitArray.length; i++) {
    for (let j = Number(digits[1]) || 0; j < splitArray.length; j++) {
      secondaryStringConcat += splitArray[i] + splitArray[j]
    }
    if (i + 1 >= digits[1]) break
  }
  // push secondaryStringConcat onto containerArray
  containerArray.push(secondaryStringConcat)
  // return containerArray
  return containerArray
};

console.log(letterCombinations('23')) // ["ad","ae","af","bd","be","bf","cd","ce","cf"]

console.log(letterCombinations('')) // []

console.log(letterCombinations('2')) // ["a","b","c"]