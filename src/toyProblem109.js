/* Character Numeral Swap

Given an input string of different characters, return the string with a swap of vowels to their numeric counterparts */

// input: a string of english letter characters
// output: the same string, replacing all vowels with their numeric equivalents
// constraints: none at this time
// edge cases: if string is empty, return null
const charSwap = s => {
  // naive solution

  // // account for egde case
  // // create a resultStr
  // if (s.length === 0) return null;
  // let resultStr = '';

  // // loop over string
  // for (let i = 0; i < s.length; i++) {
  //   // if current element of string equals 'A' or 'a'
  //   // increment 1 to resultStr
  //   if (s[i] === 'A' || s[i] === 'a') resultStr += '1';
  //   // else if current element of string equals 'E' or 'e'
  //   // increment 2 to resultStr
  //   else if (s[i] === 'E' || s[i] === 'e') resultStr += '2';
  //   // else if current element of string equals 'I' or 'i'
  //   // increment 3 to resultStr
  //   else if (s[i] === 'I' || s[i] === 'i') resultStr += '3';
  //   // else if current element of string equals 'O' or 'o'
  //   // increment 4 to resultStr
  //   else if (s[i] === 'O' || s[i] === 'o') resultStr += '4';
  //   // else if current element of string equals 'U' or 'u'
  //   // increment 5 to resultStr
  //   else if (s[i] === 'U' || s[i] === 'u') resultStr += '5';
  //   // else
  //   // add current element to resultStr
  //   else resultStr += s[i];
  // }
  // // return resultStr
  // return resultStr;

  // optimized solution

  // account for edge case
  if (s.length === 0) return null;
  // create a resultStr
  // create a new Map
  let resultStr = '', newMap = new Map();
  // lower case all letters
  let lowerCase = s.toLowerCase();

  // set a => 1, e => 2, i => 3, o => 4 u => 5 to the map
  newMap.set('a', '1');
  newMap.set('e', '2');
  newMap.set('i', '3');
  newMap.set('o', '4');
  newMap.set('u', '5');
  // loop over s
  for (let i = 0; i < lowerCase.length; i++) {
    // if current element of s of new map has key
    // add resultStr with it's value
    if (lowerCase[i] === 'a') resultStr += newMap.get('a');
    else if (lowerCase[i] === 'e') resultStr += newMap.get('e');
    else if (lowerCase[i] === 'i') resultStr += newMap.get('i');
    else if (lowerCase[i] === 'o') resultStr += newMap.get('o');
    else if (lowerCase[i] === 'u') resultStr += newMap.get('u');
    else resultStr += lowerCase[i];
  }
  // uppercase the first letter of each word
  resultStr = resultStr.split(' ');
  for (let i = 0; i < resultStr.length; i++) {
    resultStr[i] = resultStr[i][0].toUpperCase() + resultStr[i].substr(1);
  }
  return resultStr.join(' ');
}

console.log(charSwap('Avatar')) // '1v1t1r'

console.log(charSwap('Hack Reactor')) // 'H1ck R21ct4r'

console.log(charSwap('Galvanize')) // 'G1lv1n3z2'

console.log(charSwap('')) // null