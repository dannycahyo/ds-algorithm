import { describe, it, expect } from "vitest";
import { findMaxSumOfSubarrayII } from "./findMaxSumOfSubarray";

describe("Find Maximum Sum of Subarray Function", () => {
  it("should find the maximum sum of subarray with given examples", () => {
    expect(findMaxSumOfSubarrayII([100, 200, 300, 400], 2)).toEqual(
      700,
    );
    expect(
      findMaxSumOfSubarrayII([1, 4, 2, 10, 23, 3, 1, 0, 20], 4),
    ).toEqual(39);
  });

  it("should work with consecutive elements having the maximum sum", () => {
    expect(findMaxSumOfSubarrayII([5, 2, 6, 8, 1, 4], 3)).toEqual(16); // 2+6+8
    expect(findMaxSumOfSubarrayII([10, 20, 30, 40, 50], 3)).toEqual(
      120,
    ); // 30+40+50
  });

  it("should handle when k equals the array length", () => {
    expect(findMaxSumOfSubarrayII([1, 2, 3, 4], 4)).toEqual(10);
    expect(findMaxSumOfSubarrayII([5], 1)).toEqual(5);
  });

  it("should handle arrays with negative numbers", () => {
    expect(findMaxSumOfSubarrayII([-1, -2, -3, -4], 2)).toEqual(-3); // -1+-2
    expect(findMaxSumOfSubarrayII([1, -2, 3, -4, 5], 3)).toEqual(4); // 3+-4+5
  });

  it("should handle arrays with mixed positive and negative numbers", () => {
    expect(
      findMaxSumOfSubarrayII([-2, 1, -3, 4, -1, 2, 1, -5, 4], 3),
    ).toEqual(5); // 4+-1+2
    expect(
      findMaxSumOfSubarrayII([5, -3, 7, 8, -2, 10, -1], 4),
    ).toEqual(23); // 7+8+-2+10
  });

  it("should return 0 for empty arrays", () => {
    expect(findMaxSumOfSubarrayII([], 3)).toEqual(0);
  });

  it("should return 0 when k is greater than array length", () => {
    expect(findMaxSumOfSubarrayII([1, 2], 3)).toEqual(0);
  });
});
