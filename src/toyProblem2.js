/* Create a function that takes a string and replaces the vowels with another character

a = 1
e = 2
i = 3
o = 4
u = 5
*/

const replaceVowel = (str) => {

  // create a vowelObj
  let vowelObj = {
    a : 1,
    e : 2,
    i : 3,
    o : 4,
    u : 5
  }

  let masterString = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== 'a' && str[i] !== 'e' && str[i] !== 'i' && str[i] !== 'o' && str[i] !== 'u') {
      masterString += str[i];
    } else {
      masterString += vowelObj[str[i]]
    }
  }
  return masterString;
  // create a masterString
  // loop over the input string
    // if the currentLetter is not a vowel
      // add to masterString
    // otherwise
      // add vowel to masterString

  // return masterString
}


console.log(replaceVowel("karachi")) // ➞ "k1r1ch3"

console.log(replaceVowel("chembur")) // ➞ "ch2mb5r"

console.log(replaceVowel("khandbari")) // ➞ "kh1ndb1r3"

