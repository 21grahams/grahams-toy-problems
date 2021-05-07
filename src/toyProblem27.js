/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.
A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.
Input: A String representing the board.
Output: 'solved' if the board is valid, 'invalid' if it isn't
Example input:
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/
/*
Requirements
- All rows must contain only the digits 1-9, non-repeating
- All columns must contain the digits 1-9, non-repeating
- each 3x3, non-overlapping section of the board must only contain the digits 1-9, non-repeating
*/
/*
High Level Pseudo
- Digest the board
- create a test to determine the uniqueness of each set of digits
- create a snippet which extracts the appropriate strings of digits to check
- return "failed" if there is a failure
- Default = Solved
*/
var fails = function (array) {
  if (
    // check to ensure the length of the array is 9
    array.length !== 9 ||
    // check to ensure the sum of all digits equals 45
    array.reduce(function (a, b) {
      return a + b;
    }, 0) !== 45
  ) {
    return true;
  }
  return false;
};
var isGoodRows = function (board) {
  // loop through each array in the matrix
  for (var row = 0; row < 9; row++) {
    // If the array does not pass our fails function, return false
    if (fails(board[row])) {
      console.log(`invalid row:${row} Output:${board[row]}`);
      return false;
    } else {
      console.log(`valid row:${row} Output:${board[row]}`);
    }
  }
  return true;
};
var isGoodCols = function (board) {
  // for every column 0-8 in the matrix
  for (var col = 0; col < 9; col++) {
    // map through each row, and return the row[col] output at that row to get an array of digits representing the column
    // check that array using our fails function
    if (
      fails(
        board.map(function (row) {
          return row[col];
        })
      )
    ) {
      console.log(
        `invalid col:${col} Output:${board.map(function (row) {
          return row[col];
        })}`
      );
      return false;
    } else {
      console.log(
        `valid col:${col} Output:${board.map(function (row) {
          return row[col];
        })}`
      );
    }
  }
  return true;
};
var isGoodSquares = function (board) {
  //for every column (skipping 3 since we have a manual row + 1, row + 2)
  for (var col = 0; col < 9; col += 3) {
    //for every row (skipping every three on account of the splice(0,3))
    for (var row = 0; row < 9; row += 3) {
      // splice three digits in the board at row
      var row1 = board[row].splice(0, 3);
      // splice three digits in the board at row +1
      var row2 = board[row + 1].splice(0, 3);
      // splice three digits in the board at row +2
      var row3 = board[row + 2].splice(0, 3);
      // concatenate the various rows together to form the array representing that square
      var square = row1.concat(row2, row3);
      // check to see if the digits which represent the square
      if (fails(square)) {
        console.log(`invalid square output:${square}`);
        return false;
      } else {
        console.log(`valid square output:${square}`);
      }
    }
  }
  return true;
};
var sudokuChecker = function (boardStr) {
  // Digest the sudoku board into a series of arrays
  var board = boardStr
    .split("\n") // Split it into rows
    .map(
      // For every row
      function (row) {
        return row
          .split("") //split the row into unique digits
          .map(
            // map through each unique digit and map it into an array of arrays (a matrix)
            function (digit) {
              return parseInt(digit);
            }
          );
      }
    );
  //Run the appropriate checks on Rows, Columns, Squares
  // Return the appropriate outcome
  if (isGoodRows(board) && isGoodCols(board) && isGoodSquares(board)) {
    return "solved";
  } else {
    return "invalid";
  }
};
/*
  TESTS
*/
//Fail Row
console.log("\n\n TEST 1 - FAIL ROW");
console.log(
  sudokuChecker(
    "735814296\n896375314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429"
  )
);
//Fail Col
console.log("\n\n TEST 2 - FAIL COL");
console.log(
  sudokuChecker(
    "123456789\n123456789\n123456789\n123456789\n123456789\n123456789\n123456789\n123456789\n123456789"
  )
);
//Fail Square
console.log("\n\n TEST 3 - FAIL SQUARE");
console.log(
  sudokuChecker(
    "123456789\n234567891\n345678912\n456789123\n567891234\n678912345\n789123456\n891234567\n912345678"
  )
);
//Succeed
console.log("\n\n TEST 4 - SUCCEED");
console.log(
  sudokuChecker(
    "895631472\n327984516\n461257398\n942813765\n183765924\n756429183\n578142639\n214396857\n639578241"
  )
);
