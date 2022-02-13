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
const detectOutlierValue = input => {
  // create a count variable, initialize to 0
  // create a boolean flag, set to false
  // loop over input
    // if current element is odd
      // flip bool to true
    // if any other elements are odd
      // break
    // else
      // assign count to current element plus one

    // repeat process of lines 18 through 23 for even

  // return count
}

console.log(detectOutlierValue('2 4 7 8 10')) // 3 Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue('1 10 1 1')) // 2 Second number is even, while the rest of the numbers are odd