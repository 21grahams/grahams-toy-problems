/* Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

The return value should be 1-indexed, not 0-indexed.

Examples :
detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd
*/

// input: a string of even and / or odd numbers
// output: an integer, which represents the index of the number out of place (even or odd depending on input)
// constraints: none at this time
// edge cases: none at this time
const detectOutlierValue = nums => {
  // create a count variable, assign to 0
  // create resultIndex variable, assign to 0
  // create odd and even arrays
  // convert nums string to an array of nums
  let arrayNums = nums.split(' ')
  let count = 0, resultIndex = 0, oddArray = [], evenArray = []
  // loop over nums
  for (let i = 0; i < arrayNums.length; i++) {
    // if current element is odd
    if (arrayNums[i] % 2 === 1) {
      // push to odd array
      oddArray.push(arrayNums[i])
      // else
    } else {
      // push to even array
      evenArray.push(arrayNums[i])
    }
  }
    // if length of odd is one
    // we've found outlier, assign to count variable
    if (oddArray.length === 1) count = oddArray[0]
    // if length of even is one
    // we've found outlier, assign to count variable
    if (evenArray.length === 1) count = evenArray[0]
  // loop over nums
  for (let i = 0; i < arrayNums.length; i++) {
    // if count equals current index
    // assign current index to resultIndex variable plus one
    if (count === arrayNums[i]) resultIndex = i + 1
  }
  // return resultIndex
  return resultIndex
}

console.log(detectOutlierValue('2 4 7 8 10')) // 3 Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue('1 10 1 1')) // 2 Second number is even, while the rest of the numbers are odd