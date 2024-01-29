function maxProfit(prices: number[]): number {
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

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
