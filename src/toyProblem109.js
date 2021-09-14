/* Character Numeral Swap

Given an input string of different characters, return the string with a swap of vowels to their numeric counterparts */

// input: a string of english letter characters
// output: the same string, replacing all vowels with their numeric equivalents
// constraints: none at this time
// edge cases: if string is empty, return null
const charSwap = s => {
  // naive solution

  // account for egde case
  // create a resultStr

  // loop over string
    // if current element of string equals 'A' or 'a'
      // increment 1 to resultStr
    // else if current element of string equals 'E' or 'e'
      // increment 2 to resultStr
    // else if current element of string equals 'I' or 'i'
      // increment 3 to resultStr
    // else if current element of string equals 'O' or 'o'
      // increment 4 to resultStr
    // else if current element of string equals 'U' or 'u'
      // increment 5 to resultStr
    // else
      // add current element to resultStr

  // return resultStr
};

console.log(charSwap('Avatar')) // '1v1t1r'

console.log(charSwap('Hack Reactor')) // 'H1ck R21ct4r'

console.log(charSwap('Galvanize')) // 'G1lv1n3z2'

console.log(charSwap('')) // null