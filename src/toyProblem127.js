/* leetcode - Valid Boomerang

Given an array points where points[i] = [xi, yi] represents a point on the X-Y plane, return true if these points are a boomerang.

A boomerang is a set of three points that are all distinct and not in a straight line */

// input: an array of points where the current point is [xi, yi]
// output: a boolean, true if the points are a boomerang, false if not
// constraints: points.length == 3. points[i].length == 2. 0 <= xi, yi <= 100
// edge cases: none at this time
const isBoomerang = (points) => {
  // create new pseudocode
};

console.log(
  isBoomerang([
    [1, 1],
    [2, 3],
    [3, 2],
  ])
); // true
console.log(
  isBoomerang([
    [1, 1],
    [2, 2],
    [3, 3],
  ])
); // false
