/**
 * Find the maximum profit from a single buy-sell transaction
 * @param prices Array of stock prices where index is the day
 * @returns Maximum possible profit
 */
export function getMaximumProfit(prices: number[]): number {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (const price of prices) {
    if (minPrice > price) {
      minPrice = price;
    } else if (maxProfit < price - minPrice) {
      maxProfit = price - minPrice;
    }
  }

  return maxProfit;
}

// For debugging purposes
console.log(getMaximumProfit([7, 1, 5, 3, 6, 4]));
