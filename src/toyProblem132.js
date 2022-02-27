/* Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

Example:

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
*/

// input: array of numbers and a target number
// output: array of a pair of numbers

function findPairForSum(integers, targetSum) {
  let resultArr = []
  for (let i = 0; i < integers.length; i++) {
    for (let j = i + 1; j < integers.length; j++) {
      if (integers[i] + integers[j] === targetSum) resultArr.push(integers[i], integers[j])
    }
  }
  return resultArr
}

console.log(findPairForSum([3, 34, 4, 12, 5, 2], 9)) // [4, 5]
console.log(findPairForSum([8, 4, 18, 124, 537, 54], 541)) // [4, 531]