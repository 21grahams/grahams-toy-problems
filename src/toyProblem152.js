/*
leetcode - Count of Matches in Tournament

You are given an integer n, the number of teams in a tournament that has strange rules:

If the current number of teams is even, each team gets paired with another team. A total of n / 2 matches are played, and n / 2 teams advance to the next round.
If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired. A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
Return the number of matches played in the tournament until a winner is decided.
*/

// input: an integer which represents the number of teams in a tournament
// output: an integer which represents the total number of matches played in the tournament once a winner was decided
// constraints: aside from the constraints above: 1 <= n <= 200
// edge cases: none at this time
const numberOfMatches = (n) => {
  let matches;
  if (n === 1) return 0;

  // EVEN
  if (n % 2 === 0) {
    matches = n / 2;
    n = n - matches;
    return matches + numberOfMatches(n);

    // ODD
  } else {
    matches = (n - 1) / 2;
    n = n - matches;
    return matches + numberOfMatches(n)
  }
  return matches
};

// Runtime: 75 ms, faster than 77.49% of JavaScript online submissions for Count of Matches in Tournament.
// Memory Usage: 41.7 MB, less than 88.93% of JavaScript online submissions for Count of Matches in Tournament.


console.log(numberOfMatches(7)); // 6
/* Explanation: Details of the tournament: 
- 1st Round: Teams = 7, Matches = 3, and 4 teams advance.
- 2nd Round: Teams = 4, Matches = 2, and 2 teams advance.
- 3rd Round: Teams = 2, Matches = 1, and 1 team is declared the winner.
Total number of matches = 3 + 2 + 1 = 6.
*/

console.log(numberOfMatches(14)); // 13
/* Explanation: Details of the tournament:
- 1st Round: Teams = 14, Matches = 7, and 7 teams advance.
- 2nd Round: Teams = 7, Matches = 3, and 4 teams advance.
- 3rd Round: Teams = 4, Matches = 2, and 2 teams advance.
- 4th Round: Teams = 2, Matches = 1, and 1 team is declared the winner.
Total number of matches = 7 + 3 + 2 + 1 = 13
*/
