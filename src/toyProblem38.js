/* leetcode problem

Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? */

// input: n, which represents a step or a number of steps to reach the top
// output: the numbers of ways to climb to the top of the staircase
// constraints: can only climb 1 or 2 steps at a time
// edge cases: if n is 0, return 0
const climbStairs = n => {

    // using the fib recursion solution:

    // create an arr containing nums one and two
    // create inner function taking n as an argument
      // (account for base case) - if n equals 0
        // return
      // otherwise
        // loop over and up to n, commencing at 2
          // reassign currentElement of array to sum to currentElement minus one of array and currentElement minus two of array
      // call recursive function and subtract one from n (recursive case)

    // call recursive function again, pass in n
    // return the array at the n value
    let arr = [1, 1];

    const recurse = n => {
        if (n === 0) {
            return
        } else {
            for (let i = 2; i <= n; i++) {
                arr[i] = arr[i - 1] + arr[i - 2]
            }
        recurse(n - 1)
        }
    }
    recurse(n);
    return arr[n]
};

console.log(climbStairs(2)) // 2
console.log(climbStairs(3)) // 3
console.log(climbStairs(4)) // 5
console.log(climbStairs(5)) // 8
console.log(climbStairs(6)) // 13
console.log(climbStairs(7)) // 21