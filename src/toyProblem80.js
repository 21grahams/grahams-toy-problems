/* leetcode Assign Cookies

Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number */

// input: children, represented as an array of integers, each number in the array is a greed factor. g[i] represents the minimum size of a cookie that the child will be content with. And cookies, represented as an array of integers, each number in the array represents the amount of the cookies for the respective child
// output: a single integer which represents the maximum amount of content children given the amount of total possible cookies
// constraints: 1 <= g.length <= 3 * 10^4. 0 <= s.length <= 3 * 10^4. 1 <= g[i], s[j] <= 2^31 - 1
// edge case(s): if both arrays are empty, return 0
const findContentChildren = (g, s) => {
  // do something
};

console.log(findContentChildren([1, 2, 3], [1, 1])) // 1
/* Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3.
And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content. You need to output 1 */

console.log(findContentChildren([1, 2], [1, 2, 3])) // 2
/* Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2.
You have 3 cookies and their sizes are big enough to gratify all of the children,
You need to output 2 */