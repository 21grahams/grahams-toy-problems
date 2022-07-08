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
  }, possibleCombinations = [], initialStringConcat = '', secondaryStringConcat = ''

  // split / map the possibleValues into separate strings inside array
  var possibleValues = digits.split('').map(value => letterObj[value])

  // recursive function initialization, takes in a start and result param

    // base case - if the result length is the same as the digits input length
      // take the joined result and push onto the possibleCombinations array

    // recursive case - loop twice over possibleValues array
      // push possibleValues at each index onto the result array
      // call recursive function, pass in i + 1 and result
        // pop result

  // call recursive function, pass in 0 and empty array to initialize
  // return possibleCombinations array
};

console.log(letterCombinations('23')) // ["ad","ae","af","bd","be","bf","cd","ce","cf"]

console.log(letterCombinations('')) // []

console.log(letterCombinations('2')) // ["a","b","c"]