/* Write a function called decorateClassListWithAges. Convert from an array, in this case a class list of names, 
to an array of object literals decorated with a name and an age for each student. Your decorateClassListWithAges 
function should use the provided getRandomIntInclusive as part of its solution. 
(The ages should be randomly generated for each student, either age 10 or age 11)

var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"] */

// input: an array of strings
// output: an object literal of each string and an age associated with that name (string)
// constraints: (The ages should be randomly generated for each student, either age 10 or age 11)
// edge cases: none at this time

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const decorateClassListWithAges = students => {
  // create a resultArr
  // create a getRandomAge variable that takes in the getRandomIntInclusive function with the ages of 10 and 11
  let resultArr = [], getRandomAge = getRandomIntInclusive(10, 11)
  // loop over students array
  for (let i = 0; i < students.length; i++) {
    // create a masterObj
    let masterObj = {}
    // pass each current student to the masterObj
    masterObj['name'] = students[i]
    // pass an age key to the masterObj with a value of the getRandomAge var
    masterObj['age'] = getRandomAge
    // push onto resultArr
    resultArr.push(masterObj)
  }
  // return resultArr
  return resultArr
}

var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"]

console.log(decorateClassListWithAges(classList)) /*
[{"name":"Joe","age":11},{"name":"Jack","age":10},
{"name":"John","age":11},{"name":"Fred","age":11},{"name":"Frank","age":11},
{"name":"Barry","age":11},{"name":"Larry","age":11},{"name":"Mary","age":11},
{"name":"Harry","age":11},{"name":"Farrell","age":10},{"name":"Susan","age":10},
{"name":"Monica","age":11},{"name":"Keira","age":10},{"name":"Caroline","age":10},
{"name":"Harriet","age":11},{"name":"Erica","age":11},{"name":"Luann","age":10},
{"name":"Cheryl","age":11},{"name":"Beth","age":10},{"name":"Rupa","age":11},
{"name":"Linda","age":10},{"name":"Allison","age":10},{"name":"Nancy","age":10},
{"name":"Dora","age":10}] */