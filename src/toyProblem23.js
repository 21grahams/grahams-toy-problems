/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

// input: an array of strings
// output: a string that contains any potential common prefixes among the strings in the array
// constraints: only lower-case english letters
// edge cases: return empty string if no common prefixes exist
const longestCommonPrefix = (strings) => {

  if (!strings.length) return '';
  let prefix = strings[0];
  for (let i = 1; i < strings.length; i++) {
      while (strings[i].indexOf(prefix) !== 0) {
          prefix = prefix.substring(0, prefix.length - 1)
      }
  }
  return prefix;
};


console.log(longestCommonPrefix(["flower","flow","flight"])) // 'fl'
console.log(longestCommonPrefix(["hello","graham","kirsh"])) // ''