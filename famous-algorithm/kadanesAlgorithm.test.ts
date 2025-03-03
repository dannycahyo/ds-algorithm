import { describe, it, expect } from "vitest";
import { kadanesAlgorithm } from "./kadanesAlgorithm";

describe("Kadane's Algorithm", () => {
  it("should find the maximum subarray sum", () => {
    expect(
      kadanesAlgorithm([
        3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4,
      ]),
    ).toBe(19);
  });

  it("should handle negative numbers", () => {
    expect(kadanesAlgorithm([-2, -3, -1, -5])).toBe(-1);
  });

  it("should handle single element arrays", () => {
    expect(kadanesAlgorithm([5])).toBe(5);
    expect(kadanesAlgorithm([-5])).toBe(-5);
  });

  it("should handle all positive numbers", () => {
    expect(kadanesAlgorithm([1, 2, 3, 4])).toBe(10);
  });

  it("should handle complex cases with alternating signs", () => {
    expect(kadanesAlgorithm([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });
});
