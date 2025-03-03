import { describe, it, expect } from "vitest";
import { getMaximumProfit } from "./bestTimeToSellStock";

describe("Best Time to Buy and Sell Stock", () => {
  it("should return maximum profit when prices increase", () => {
    expect(getMaximumProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  it("should return 0 when no profit can be made", () => {
    expect(getMaximumProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  it("should handle edge cases", () => {
    expect(getMaximumProfit([1])).toBe(0);
    expect(getMaximumProfit([2, 2, 2])).toBe(0);
  });

  it("should handle large profits", () => {
    expect(getMaximumProfit([1, 100, 2, 200])).toBe(199);
  });
});
