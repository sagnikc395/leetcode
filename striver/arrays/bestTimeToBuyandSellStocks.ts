// best time to buy and sell stocks

function maxProfit(prices: number[]): number {
  let mini = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    let cost = prices[i] - mini;
    profit = Math.max(profit, cost);
    mini = Math.min(mini, prices[i]);
  }

  return profit;
}
