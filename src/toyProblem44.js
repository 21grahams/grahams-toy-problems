/* Given a string of letters and a target number, return an object representing any duplicate letters as the key and the amount of repetitions as the value that are LESS THAN the target number */

// input: a string of letters and a target number
// output: an object containing any duplicate letters. The letter is the key and the number of occurences is the value. Must be a letter occuring less than the target number
// constraints: none at this time
// edge cases: none of importance
const countDupes = (letters, target) => {

  // create an initial object
  let initialObj = {};
  // create a secondary object
  let masterObj = {};

  // loop over the letters string
  for (let i = 0; i < letters.length; i++) {
    // if current letter is undefined
    if (initialObj[letters[i]] === undefined) {
      // assign to one
      initialObj[letters[i]] = 1;
      // otherwise
    } else {
      // increment by one
      initialObj[letters[i]]++;
    }
  }
  // loop over initialObj
  for (let key in initialObj) {
    // create var for value
    let value = initialObj[key];
    // if the value of the letter in the object is less than target number but greater than 1
    if (value < target && value > 1) {
      // add key and value to final / secondary object
      masterObj[key] = value;
    }
  }
    // return that object
    return masterObj;
};


console.log(countDupes('aaabbbccdd', 3)) // {c: 2, d: 2}
console.log(countDupes('mississippi', 3)) // {p: 2}
console.log(countDupes('abcdefg', 3)) // {} (even though all letters' occurrences are less than target num, there are no duplicates here)