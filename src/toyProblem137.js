/*
leetcode - Day of the Year

Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.

*/

// input: a date in the form of a string
// output: a single number, which is the result of what day of the year it is
// constraints: date.length == 10. date[4] == date[7] == '-', and all other date[i]'s are digits. date represents a calendar date between Jan 1st, 1900 and Dec 31th, 2019.
// edge cases: none at this time
var dayOfYear = function (date) {
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let year = Number(date.substring(0, 4)),
    month = Number(date.substring(5, 7)),
    day = Number(date.substring(8));
  if (isLeapYear(year)) days[1] = 29;
  let res = 0;
  for (i = 0; i < month - 1; i++) {
    res += days[i];
  }
  return res + day;
};

var isLeapYear = function (year) {
  if (year % 4 !== 0) return false;
  else if (year % 100 !== 0) return true;
  else if (year % 400 !== 0) return false;
  else return true;
};

console.log(dayOfYear("2019-01-09")); // 9
// Explanation: Given date is the 9th day of the year in 2019.

console.log(dayOfYear("2019-02-10")); // 41
