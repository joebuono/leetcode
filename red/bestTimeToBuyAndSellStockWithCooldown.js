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


// What in the hell is this?!
// https://www.youtube.com/watch?v=w6xk5Po-DX0
var maxProfit = function(prices) {
  if (prices.length < 2) return 0;

  if (prices.length === 2) {
    return Math.max(prices[1] - prices[0], 0);
  }

  let dp = new Array(prices.length).fill([]);

  dp[0][0] = 0;
  dp[0][1] = prices[0] * -1;
  dp[1][0] = Math.max(dp[0][0], dp[0][1] + prices[1]);
  dp[1][1] = Math.max(dp[0][1], dp[0][0] - prices[1]);

  for (let i = 2; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]); 
  }

  return dp[dp.length - 1][0];
};





// This raw solution doesn't work
var maxProfit = function(prices) {
  if (prices.length < 2) return 0;
  
  let profits = new Array(prices.length).fill(0);
  profits[1] = Math.max(prices[1] - prices[0], 0);

  let minThusFar = Math.min(prices[0], prices[1]);
  let minThusFarIndex = minThusFar === prices[0] ? 0 : 1;

  for (let i = 2; i < prices.length; i++) {
    let minMax = 0;
    if (minThusFarIndex < i - 1) {
      minMax = prices[i] - minThusFar;
      if (minThusFarIndex - 2 > 0) {
        minMax += profits[minThusFarIndex - 2]
      }
    }

    let cooldown = i < 3 ? 0 : profits[i - 3];
    let cooldown2 = i < 4 ? 0 : profits[i - 4];
    profits[i] = Math.max(
      prices[i] - prices[i - 1] + cooldown,
      prices[i] - prices[i - 2] + cooldown2,
      profits[i - 1],
      minMax
    );
    
    if (prices[i] < minThusFar) {
      minThusFar = prices[i];
      minThusFarIndex = i;
    }
  }

  return profits[profits.length - 1];
};

