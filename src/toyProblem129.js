// big flipper - Flip every chunk of n characters in a string, where n is any positive integer greater than 1 

// input: a string of characters and a number (integer)
// output: that string, with chunks of characters flipped, by a rate of the given input integer
// constraints: none at this time
// edge cases: none at this time
const flipEveryNChars = (string, num) => {
  // split string into letterArray
  // create resultString variable
  // loop over letterArray
    // add each letter to resultString
    // if index equals num
      // reverse resultString
      // double num
  // return resultString
}

console.log(flipEveryNChars('a short example', 5)) // --> ohs axe trelpma

/*
Breaking this example down piece by piece:
'a sho' -> 'ohs a'
'rt ex' -> 'xe tr'
'ample' -> 'elpma'

-> 'ohs axe trelpma'
*/