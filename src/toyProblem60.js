/* FizzBuzz  * Write a function that uses the injected log function to log numbers from 1 to 100. But for multiples of 3 log "Fizz", for multiples of 5 log "Buzz", and for multiples of 15 log "FizzBuzz" */

// input: a function with a set of integers ranging from 1-100
// output: set of integers from 1-100, however every multiple of 3 logs 'Fizz', every mutiple of 5 logs 'Buzz' and every multiple of 15 logs 'FizzBuzz'
// constraints: none at this time
// edge cases: if FizzBuzz is empty, return null
const FizzBuzz = (count) => {
  // loop over the variable, starting from count / n, up to the 100
  for (let count = 1; count <= 100; count++) {
    // if the count / n modulo 5 and 3 is equal to 0
    if (count % 5 == 0 && count % 3 === 0) {
      // use our fun typescript to log ('FizzBuzz')
      console.log('FizzBuzz');
      // else if the count / n modulo 3 is equal to 0
    } else if (count % 3 === 0) {
      // use our fun typescript to log ('Fizz')
      console.log('Fizz');
      // else if the count / n modulo 5 is equal to 0
    } else if (count % 5 === 0) {
      // use our fun typescript to log ('Buzz')
      console.log('Buzz');
      // else
    } else {
      // log i - current element
      console.log(count)
    }
  }
};

let tester = FizzBuzz();
console.log(tester);