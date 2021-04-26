/* Create a function which concantenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7

Return an empty array if the given array is empty
You can expect all the tests to have valid chords

*/

const jazzify = (arr) => {

    if (arr.length === 0) return arr;

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    if (currentElement[currentElement.length - 1] !== '7') {
      newArr.push(currentElement + '7')
    } else {
      return arr;
    }
  }
  return newArr
}


console.log(jazzify(["G", "F", "C"])) // ➞ ["G7", "F7", "C7"]

console.log(jazzify(["Dm", "G", "E", "A"])) // ➞ ["Dm7", "G7", "E7", "A7"]

console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"])) // ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]

console.log(jazzify([])) // ➞ []