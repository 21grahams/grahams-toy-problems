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
  }, possibleCombinations = []

  // OPTION ONE
  // var possibleValues = digits.split('').map(value => letterObj[value])

  // const recursiveFunc = (start, result) => {
  //   if (result.length === digits.length) possibleCombinations.push(result.join(''))
  //   for (let i = start; i < possibleValues.length; i++) {
  //     for (let j = 0; j < possibleValues[i].length; j++) {
  //       result.push(possibleValues[i][j])
  //       recursiveFunc(i + 1, result)
  //       result.pop()
  //     }
  //   }
  // }
  // recursiveFunc(0, [])
  // return possibleCombinations

  // OPTION TWO
  // create a breadth first search function, takes in a position and string
  const bfs = (position, string) => {
    // base case - if the position equals the length of the digits - push the string on the possibleCombinations array
    if (position === digits.length) possibleCombinations.push(string)
    else {
      // recursive case - loop over the digits at position
      for (let i = 0; i < letterObj[digits[position]].length; i++) {
        // call the bfs func, pass in the position + 1 and string + digits at position at index
        bfs(position + 1, string + letterObj[digits[position]][i])
      }
    }
  }
  // call bfs func and pass in 0 and empty string
  bfs(0, '')
  // return possibleCombinations array
  return possibleCombinations
};

// Runtime: 82 ms, faster than 49.94% of JavaScript online submissions for Letter Combinations of a Phone Number.
// Memory Usage: 42 MB, less than 56.12% of JavaScript online submissions for Letter Combinations of a Phone Number.

console.log(letterCombinations('23')) // ["ad","ae","af","bd","be","bf","cd","ce","cf"]

console.log(letterCombinations('')) // []

console.log(letterCombinations('2')) // ["a","b","c"]