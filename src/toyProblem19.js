// Create a function that takes three collections of arguments and returns the sum of the product of numbers.


const product = (a, b) => (c, d) => (e, f) => a * c * e + b * d * f;


console.log(product(1,2)(1,1)(2,3)) // ➞ 8
// 1 * 1 * 2 + 2 * 1 * 3

console.log(product(10,2)(5,0)(2,3)) // ➞ 100
// 10 * 5 * 2 + 2 * 0 * 3

console.log(product(1,2)(2,3)(3,4)) // ➞ 30
// 1 * 2 * 3 + 2 * 3 * 4

console.log(product(1,2)(0,3)(3,0)) // ➞ 0
// 1 * 0 * 3 + 2 * 3 * 0