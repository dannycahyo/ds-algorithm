import { describe, it, expect } from "vitest";
import { maxSubsetSumNoAdjacent } from "./maxSubSetSumNoAdjacent";

describe("Maximum Subset Sum No Adjacent Function", () => {
  it("should return 0 for an empty array", () => {
    expect(maxSubsetSumNoAdjacent([])).toBe(0);
  });

  it("should return the only element for single element arrays", () => {
    expect(maxSubsetSumNoAdjacent([5])).toBe(5);
    expect(maxSubsetSumNoAdjacent([100])).toBe(100);
  });

  it("should return the max element for two element arrays", () => {
    expect(maxSubsetSumNoAdjacent([5, 10])).toBe(10);
    expect(maxSubsetSumNoAdjacent([20, 10])).toBe(20);
  });

  it("should find the maximum sum of non-adjacent elements", () => {
    expect(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135])).toBe(
      330,
    );
    expect(maxSubsetSumNoAdjacent([7, 10, 12, 7, 9, 14])).toBe(33);
    expect(maxSubsetSumNoAdjacent([1, 2, 3, 4, 5])).toBe(9); // 1 + 3 + 5
  });

  it("should handle arrays with negative numbers", () => {
    expect(
      maxSubsetSumNoAdjacent([75, -105, 120, -75, 90, 135]),
    ).toBe(330);
  });

  it("should handle larger arrays efficiently", () => {
    const largeArray = Array(100)
      .fill(0)
      .map((_, i) => i + 1);
    // For numbers 1 to 100, the max sum would include all odd-indexed numbers (2, 4, 6...)
    const expectedSum = largeArray
      .filter((_, i) => i % 2 === 1)
      .reduce((sum, num) => sum + num, 0);
    expect(maxSubsetSumNoAdjacent(largeArray)).toBe(expectedSum);
  });
});
