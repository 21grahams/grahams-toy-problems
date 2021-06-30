/* leetcode - Best Time to Buy and Sell Stock II

You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again) */

// input: an array of prices, each price represents a stock price on that particular day
// output: a single number, which represents the highest possible gain on a stock
// constraints: 1 <= prices.length <= 3 * 10^4 || 0 <= prices[i] <= 10^4
// edge cases: if prices are empty, return null
const maxProfit = prices => {
  // account for edge case

  // create a lowest variable and assign to first number in prices
  // create a maxProfit and assign to 0

  // loop over the prices, starting at iteration 1
    // if currentPrice is less than lowest
      // reassign lowest to currentPrice

    // if currentElement minus lowest is greater than maxProfit
      // reassign maxProfit to currentElement minus lowest

  // return maxProfit
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])) // 7
// explanation:  Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

console.log(maxProfit([1, 2, 3, 4, 5])) // 4
// explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.

console.log(maxProfit([7, 6, 4, 3, 1])) // 0
// explanation: In this case, no transaction is done, i.e., max profit = 0.