// big flipper - Flip every chunk of n characters in a string, where n is any positive integer greater than 1 

// input: a string of characters and a number (integer)
// output: that string, with chunks of characters flipped, by a rate of the given input integer
// constraints: none at this time
// edge cases: none at this time
const flipEveryNChars = (string, num) => {
  // do something
}

let testCase = 'a short example'
let output = flipEveryNChars(testCase, 5)
console.log(output) // --> ohs axe trelpma

/*
Breaking this example down piece by piece:
'a sho' -> 'ohs a'
'rt ex' -> 'xe tr'
'ample' -> 'elpma'

-> 'ohs axe trelpma'
*/