/* leetcode problem

Add Binary

Given two binary strings a and b, return their sum as a binary string */

// input: two arguments, which are each strings containing binary nums
// output: the sum of these two binary nums as a string
// constraints: nothing at this time
// edge cases: return empty string if both arguments are empty
const addBinary = (a, b) => {
  // account for edge case

  // create a master string
  // split into individual nums
  // loop in descending order
      // if current element of string a is 0 && current element of string b is 0
          // continue
  // if current element of string a is 1 && current element of string b is 0 ||current element of string b is 1 && current element of string a is 0
    // numArray = 1
  // else if (current element of string a is 1 && current element of string b is 1 && (current element minus 1 of string a === undefined && current element minus 1 of string b === undefined)
    // numArray = 10
  // else if (current element of string a is 1 && current element of string b is 1 && (current element minus 1 of string a !== undefined || current element minus 1 of string b === undefined))
  // numArray = 0
};

// binary  1  2  4  8  16  32   64   128

// a - 11
// b -  1
//________
//     100

// a - 1010
// b - 1011
//__________
//     10101

// a = ['1', '1']
// b = ['1']
// i (for a) = 0
// i (for b) = 0

console.log('11', '1') // '100'
console.log('1010', '1011') // '10101'