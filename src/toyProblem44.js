/* Given a string of letters and a target number, return an object representing any duplicate letters as the key and the amount of repetitions as the value that are LESS THAN the target number */

const countDupes = (letters, target) {
  // YOUR CODE HERE
};


console.log(countDupes('aaabbbccdd', 3)) // {c: 2, d: 2}
console.log(countDupes('mississippi', 3)) // {p: 2}
console.log(countDupes('abcdefg', 3)) // {} (even though all letters' occurrences are less than target num, there are no duplicates here)