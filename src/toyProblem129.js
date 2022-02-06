// big flipper - Flip every chunk of n characters in a string, where n is any positive integer greater than 1 

// input: a string of characters and a number (integer)
// output: that string, with chunks of characters flipped, by a rate of the given input integer
// constraints: none at this time
// edge cases: none at this time
const flipEveryNChars = (string, num) => {
  // split string into letterArray
  let letterArr = string.split('')
  // create resultString variable
  let originalVal = num
  let resultString = ''
  let initialString = ''
  // loop over letterArray
  for (let i = 0; i < letterArr.length; i++) {
    // add each letter to resultString
    initialString += letterArr[i]
    // if index equals num
    if (i === num - 1) {
      // reverse resultString
      resultString += initialString.split('').reverse().join('')
      // double num
      num = num + originalVal
      initialString = ''
    }
  }
  resultString += initialString.split('').reverse().join('')
  // return resultString
  return resultString
}

console.log(flipEveryNChars('a short example', 5)) // --> ohs axe trelpma
console.log(flipEveryNChars('graham kirsh', 7)) // --> maharghsirk

/*
Breaking this example down piece by piece:
'a sho' -> 'ohs a'
'rt ex' -> 'xe tr'
'ample' -> 'elpma'

-> 'ohs axe trelpma'
*/