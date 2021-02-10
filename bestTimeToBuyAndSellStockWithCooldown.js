/*

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
Example:

Input: [1,2,3,0,2]
Output: 3 
Explanation: transactions = [buy, sell, cooldown, buy, sell]

*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profits = new Array(prices.length).fill(0);
  profits[1] = Math.max(prices[1] - prices[0], 0);

  for (let i = 2; i < prices.length; i++) {
    let cooldown = i < 3 ? 0 : prices[i - 3];
    profits[i] = Math.max(
      prices[i] - prices[i - 1] + cooldown,
      prices[i] - prices[i - 2] + cooldown,
      cooldown
    );
  }

  return profits[profits.lengths - 1];
};


