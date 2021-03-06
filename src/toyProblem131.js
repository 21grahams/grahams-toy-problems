/* Transpose

/* You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return:
H W  
e o  
l r  
l l  
o d
*/

// input: an array of two strings
// output: those same strings, but displayed from top to bottom, rather than left to right
// constraints: none at this time
// edge cases: none at this time
const transposeTwoStrings = arr => {
  // create first, second and longest word variables
  // create transposed string
  let firstWord = arr[0], secondWord = arr[1], longestWord, transposedString = '';
  // check which is longest word
  if (firstWord > secondWord) {
    longestWord = firstWord
  } else {
    longestWord = secondWord
  }
  // loop over longest word
  for (let i = 0; i < longestWord.length; i++) {
    // assign first character to first word at i, second character to second word at i
    let firstCharacter = firstWord[i], secondCharacter = secondWord[i]
    // increment transposed string to first word, second word and newline symbol
    transposedString += firstCharacter + ' ' + secondCharacter + '\n'
  }
  // return transposed string
  return transposedString
}

console.log(transposeTwoStrings(['Hello', 'World'])) 
/*
H W  
e o  
l r  
l l  
o d
*/