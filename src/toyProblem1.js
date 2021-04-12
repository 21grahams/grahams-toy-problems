/* return a string in reverse

'harry' // => 'yrrah'
'sally' // => 'yllas'

*/

const reverser = (str) => {
  return str.split('').reverse().join('');
}

console.log(reverser('harry')) // 'yrrah'
console.log(reverser('sally')) // 'yllas'