/*
leetcode - Happy Number

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.
*/

// input: an integer, represented as the letter n
// output: a boolean. True if the number is happy, false if not. What determines a happy number is described above
// constraints: 1 <= n <= 231 - 1
// edge cases: none at this time
const isHappy = (n) => {
  // base case - if n equals 1, return true
  // recursive case
  // create recurseFunc, takes in sum
  let innerSum
  const recurseFunc = (sum) => {
    // if (sum.toString().length === 1 && sum !== 1) return false
    if (sum === 1) return true
    innerSum = 0;
    // split numbers
    let splitNum = sum.toString().split("");
    for (let i = 0; i < splitNum.length; i++) {
      innerSum += splitNum[i] ** 2;
    }
    console.log("innerSum: ", innerSum);
    // calls recurseFunc passing in new sum
    if (innerSum === 1) return true;
    recurseFunc(innerSum);
  };
  // invoke recurseFunc, pass in n
  recurseFunc(n);
  if (innerSum === 1 || n === 1) {
    return true
  } else {
    return false
  }
};

console.log(isHappy(19)); // true
/* 
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
*/

console.log(isHappy(2)) // false

// console.log(isHappy(7)) // true