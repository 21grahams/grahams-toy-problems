/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order
*/

var isValid = function(s) {
  let storage = [];
  let openings = ['[', '{', '('];
  let closings = [']', '}', ')'];
  let opposites = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
for (let char of s) {
    if (openings.includes(char)) {
      storage.push(char);
    } else if (closings.includes(char)) {
      let opposite = opposites[char];
      let lastIndex = storage[storage.length - 1];
      if (opposite !== lastIndex) {
        return false;
      } else {
        let popped = storage.pop();
      }
    } else {
      continue;
    }
  }
  if (storage.length > 0) {
    return false;
  }
  return true;
};

console.log(isValid('()')) // true
console.log(isValid('[]')) // true
console.log(isValid('{}')) // true
console.log(isValid('(]')) // false
console.log(isValid('({])')) // false