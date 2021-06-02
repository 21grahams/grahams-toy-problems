/* leetcode problem

Add Binary

Given two binary strings a and b, return their sum as a binary string */

// input: two arguments, which are each strings containing binary nums
// output: the sum of these two binary nums as a string
// constraints: nothing at this time
// edge cases: return empty string if both arguments are empty
const addBinary = (a, b) => {
  var i = a.length - 1;
  var j = b.length - 1;
  var carry = 0;
  var result = "";
  while (i >= 0 || j >= 0) {
    var m = i < 0 ? 0 : a[i] | 0;
    var n = j < 0 ? 0 : b[j] | 0;
    carry += m + n; // sum of two digits
    result = (carry % 2) + result; // string concat
    carry = (carry / 2) | 0; // remove decimals,  1 / 2 = 0.5, only get 0
    i--;
    j--;
  }
  if (carry !== 0) {
    result = carry + result;
  }
  return result;
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

console.log(addBinary("11", "1")); // '100'
console.log(addBinary("1010", "1011")); // '10101'
