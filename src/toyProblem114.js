/* leetcode - Minimum Number of Moves to Seat Everyone

There are n seats and n students in a room. You are given an array seats of length n, where seats[i] is the position of the ith seat. You are also given the array students of length n, 

where students[j] is the position of the jth student.

You may perform the following move any number of times:

Increase or decrease the position of the ith student by 1 (i.e., moving the ith student from position x to x + 1 or x - 1)
Return the minimum number of moves required to move each student to a seat such that no two students are in the same seat.

Note that there may be multiple seats or students in the same position at the beginning */

// input: n number of seats and x number of students represented as separate arrays
// output: the minimum number of moves required to move each student to a seat such that no two students are in the same seat. Increase or decrease the position of the ith student by 1 (i.e., moving the ith student from position x to x + 1 or x - 1)
// constaints: n == seats.length == students.length. 1 <= n <= 100. 1 <= seats[i], students[j] <= 100
// edge cases: none at this time
const minMovesToSeat = (seats, students) => {
  // sort seats and students
  // create a finalCount and currCount

  // loop over seats
    // loop over students
      // assign currCount to current student minus current seat
    // add currCount to finalCount

  // return finalCount
};

console.log(minMovesToSeat([3, 1, 5], [2, 7, 4])) // 4
/* Explanation: The students are moved as follows:
- The first student is moved from from position 2 to position 1 using 1 move.
- The second student is moved from from position 7 to position 5 using 2 moves.
- The third student is moved from from position 4 to position 3 using 1 move.
In total, 1 + 2 + 1 = 4 moves were used */

console.log(minMovesToSeat([4, 1, 5, 9], [1, 3, 2, 6])) // 7
/* Explanation: The students are moved as follows:
- The first student is not moved.
- The second student is moved from from position 3 to position 4 using 1 move.
- The third student is moved from from position 2 to position 5 using 3 moves.
- The fourth student is moved from from position 6 to position 9 using 3 moves.
In total, 0 + 1 + 3 + 3 = 7 moves were used */

console.log(minMovesToSeat([2, 2, 6, 6], [1, 3, 2, 6])) // 4
/* Explanation: The students are moved as follows:
- The first student is moved from from position 1 to position 2 using 1 move.
- The second student is moved from from position 3 to position 6 using 3 moves.
- The third student is not moved.
- The fourth student is not moved.
In total, 1 + 3 + 0 + 0 = 4 moves were used */