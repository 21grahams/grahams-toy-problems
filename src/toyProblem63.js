/* leetcode Excel Sheet Column Title

Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet */

// input: any positive integer
// output: that integers corresponding letter as it appears in an Excel sheet (A -> 1, B -> 2, etc)
// constraints: 1 <= columnNumber <= 2^31 - 1
// edge cases: if input is empty, return null
const convertToTitle = columnNumber => {
  // do something
};

console.log(convertToTitle(1)) // A

console.log(convertToTitle(28)) // AB

console.log(convertToTitle(701)) // ZY

console.log(convertToTitle(2147483647)) // FXSHRXW