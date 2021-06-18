/* Given a string of letters and a target number, return an object representing any duplicate letters as the key and the amount of repetitions as the value that are LESS THAN the target number */

// input: a string of letters and a target number
// output: an object containing any duplicate letters. The letter is the key and the number of occurences is the value. Must be a letter occuring less than the target number
// constraints: none at this time
// edge cases: none of importance
const countDupes = (letters, target) {
  // create an object
  // create a 'seen' variable, assign to false
  // create a count, start at 0
  // loop over the letters string
    // if current letter is undefined
      // assign to one
    // otherwise
      // increment by one

  // if the value of the letter in the object is less than target number
    // return that object
};


console.log(countDupes('aaabbbccdd', 3)) // {c: 2, d: 2}
console.log(countDupes('mississippi', 3)) // {p: 2}
console.log(countDupes('abcdefg', 3)) // {} (even though all letters' occurrences are less than target num, there are no duplicates here)