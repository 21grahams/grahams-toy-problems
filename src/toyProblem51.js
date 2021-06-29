/* leetcode problem - Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

*/

// input: an array of prices. Each num in the array represents the price of a given stock on that current day
// output: a single number which is the maximum amount of profit you can achieve from that transaction
// constraints: 1 <= prices.length <= 10^5. 0 <= prices[i] <= 10^4
// edge cases: If you cannot get any profit, return 0. If the array is empty, return null
const maxProfit = (prices) => {
  let less = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < less) {
      less = prices[i];
    }
    if (prices[i] - less > profit) {
      profit = prices[i] - less;
    }
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
// explanation - Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

console.log(maxProfit([7, 6, 4, 3, 1])); // 0// explanation - In this case, no transactions are done and the max profit is 0
