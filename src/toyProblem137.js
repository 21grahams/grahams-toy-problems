/*
leetcode - Day of the Year

Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.

*/

// input: a date in the form of a string
// output: a single number, which is the result of what day of the year it is
// constraints: date.length == 10. date[4] == date[7] == '-', and all other date[i]'s are digits. date represents a calendar date between Jan 1st, 1900 and Dec 31th, 2019.
// edge cases: none at this time
const dayOfYear = date => {
  // create a numResult var, assign to 0
  // create an object that represents each month and how many days it has
  // slice off the year and day from the input date, assign to month variable
  // slice off the year and month from the input date, assign to day variable
  // take the month variable and compare to monthlyObject, assign that value to the numResult var
  // increment the numResult with the day variable

  // return numResult
}

console.log(dayOfYear('2019-01-09')) // 9
// Explanation: Given date is the 9th day of the year in 2019.

console.log(dayOfYear('2019-02-10')) // 41