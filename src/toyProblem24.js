/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

// input: none
// output: an array containing all possible moves of an RPS game, which is 27 total possible moves. 9 moves per each rock/paper/scissors
// edge cases: none
// constraints: none
var rockPaperScissors = function () {
  // create a container array
  var container = [];

  // create an array variable for all of the inputs
  var fullGameArray = ['R', 'P', 'S']
  // loop over array 3 separate times
  for (let i = 0; i < fullGameArray.length; i++) {
    for (let j = 0; j < fullGameArray.length; j++) {
      for (let k = 0; k < fullGameArray.length; k++) {
        // push current item of each iteration to container
        var finalResults = fullGameArray[i] + fullGameArray[j] + fullGameArray[k];
        container.push(finalResults);
      }
    }
  }
  // return container array
  return container;
};

console.log(rockPaperScissors(3))