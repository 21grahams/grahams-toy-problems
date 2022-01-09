/* leetcode - Valid Boomerang

Given an array points where points[i] = [xi, yi] represents a point on the X-Y plane, return true if these points are a boomerang.

A boomerang is a set of three points that are all distinct and not in a straight line */

// input: an array of points where the current point is [xi, yi]
// output: a boolean, true if the points are a boomerang, false if not
// constraints: points.length == 3. points[i].length == 2. 0 <= xi, yi <= 100
// edge cases: none at this time
const isBoomerang = points => {
  // loop over points
    // if next index at each y point is NOT current index plus one
      // return true, this is a boomerang
    // otherwise
      // return false, this is not a boomerang
};

console.log(isBoomerang([[1, 1], [2, 3], [3, 2]])) // true
console.log(isBoomerang([[1, 1], [2, 2], [3, 3]])) // false