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
  // create a resultString
  let resultString = ''
  // loop over arr
    // loop each word in arr
      // assign word one to shifting of arr[0] and word two to shifting of arr[1]
      // increment resultString to word one and word two
  
  // return resultString
  return resultString
}

console.log(transposeTwoStrings(['Hello', 'World'])) 
/*
H W  
e o  
l r  
l l  
o d
*/