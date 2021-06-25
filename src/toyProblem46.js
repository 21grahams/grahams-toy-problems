// var iterations = 0

// var print_board = function (columns) {
//   var n = columns.length, row = 0, col = 0
//   while (row < n) {
//     while (col < n) {
//       process.stdout.write(columns[row] === col ? 'Q ' : '# ')
//       col++
//     }

//     process.stdout.write('\n')
//     col = 0
//     row++
//   }
// }

// var has_conflict = function (columns) {
//   var len = columns.length, last = columns[len - 1], previous = len - 2

//   while (previous >= 0) {
//     if (columns[previous] === last) return true
//     if (last - (len - 1) === columns[previous] - previous) return true
//     if (last + (len - 1) === columns[previous] + previous) return true
//     previous--
//   }

//   return false
// }

// var place_next_queen = function (total, queens, columns) {
//   if (queens === 0) return columns
//   columns = columns || []

//   for (var column = 0; column < total; column++) {
//     columns.push(column)
//     iterations++
//     if (!has_conflict(columns) &&
//         place_next_queen(total, queens - 1, columns)) {
//       return columns
//     }
//     columns.pop(column)
//   }

//   return null
// }

// // print_board(place_next_queen(28, 28))
// // console.log('\niterations for 28x28: ', iterations) // 84175966

// print_board(place_next_queen(4, 4))
// console.log('\niterations for 4x4: ', iterations) // 26

// print_board(place_next_queen(5, 5))
// console.log('\niterations for 5x5: ', iterations) // 41

/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting

// };

window.findNRooksSolution = function(n) {
  var solutions = [];

  if (!n) {
    return {'n': 0};
  }
  var table = new Board({n:n});
  // console.log('table rows: ', table.rows());

  var innerFunction = function(currentRow) {

    if (currentRow === n) {
      solutions.push(_.map(table.rows(), function(row) {
        // console.log('ROW: ', row);
        return row.slice();
      }));
      return;

    } else {
      for (var c = 0; c < n; c++) {
        table.togglePiece(currentRow, c);

        if (!table.hasAnyColConflicts() && !table.hasAnyRowConflicts()) {
          innerFunction(currentRow + 1);
        }
        table.togglePiece(currentRow, c);
      }
    }
  };
  innerFunction(0);
  console.log('lutions: ', solutions);
  return solutions[0];
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutions = [];

  if (!n) {
    return {'n': 0};
  }
  var table = new Board({n:n});

  var innerFunction = function(currentRow) {

    if (currentRow === n) {
      solutions.push(_.map(table.rows(), function(row) {
        return row.slice();
      }));
      return;

    } else {
      for (var c = 0; c < n; c++) {
        table.togglePiece(currentRow, c);

        if (!table.hasAnyColConflicts() && !table.hasAnyRowConflicts()) {
          innerFunction(currentRow + 1);
        }
        table.togglePiece(currentRow, c);
      }
    }
  };
  innerFunction(0);
  return solutions.length;

};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solutions = [];
  console.log('N: ', n);

  if (!n) {
    return {'n': 0};
  }
  if (n === 2 || n === 3) {
    return {'n': n};
  }
  var table = new Board({n:n});

  var innerFunction = function(currentRow) {

    if (currentRow === n) {
      solutions.push(_.map(table.rows(), function(row) {
        return row.slice();
      }));
      return;

    } else {
      for (var c = 0; c < n; c++) {
        table.togglePiece(currentRow, c);

        if (!table.hasAnyQueensConflicts()) {
          innerFunction(currentRow + 1);
        }
        table.togglePiece(currentRow, c);
      }
    }
  };
  innerFunction(0);
  return solutions[0];

};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutions = [];
  console.log('N: ', n);

  if (!n) {
    return 1;
  }
  if (n === 2 || n === 3) {
    return 0;
  }
  var table = new Board({n:n});

  var innerFunction = function(currentRow) {

    if (currentRow === n) {
      solutions.push(_.map(table.rows(), function(row) {
        return row.slice();
      }));
      return;

    } else {
      for (var c = 0; c < n; c++) {
        table.togglePiece(currentRow, c);

        if (!table.hasAnyQueensConflicts()) {
          innerFunction(currentRow + 1);
        }
        table.togglePiece(currentRow, c);
      }
    }
  };
  innerFunction(0);
  return solutions.length;

};
