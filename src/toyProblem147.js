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
  let innerSum, finalResult, beenSeen, finalObj = {}
  const recurseFunc = (sum) => {
    if (sum === 1) {
      finalResult = true;
      return;
    }
    if (finalObj[innerSum] > 1 && innerSum[1] === undefined) {
      finalResult = false;
      return;
    }
    
    innerSum = 0;
    beenSeen = innerSum;
    let splitNum = sum.toString().split("");
    for (let i = 0; i < splitNum.length; i++) {
      innerSum += splitNum[i] ** 2;
      if (finalObj[splitNum[i]] === undefined) {
        finalObj[splitNum[i]] = 1
      } else {
        finalObj[splitNum[i]]++
      }
    }
    recurseFunc(innerSum);
  };
  recurseFunc(n);
  return finalResult;
};

// Runtime: 103 ms, faster than 46.83% of JavaScript online submissions for Happy Number.
// Memory Usage: 43.1 MB, less than 68.88% of JavaScript online submissions for Happy Number.

console.log(isHappy(19)); // true

console.log(isHappy(2)); // false

console.log(isHappy(7)); // true