import { describe, it, expect } from "vitest";
import { plusOne } from "./plusOne";

describe("Plus One Function", () => {
  it("should increment a simple digit array by one", () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
  });

  it("should handle carrying over when incrementing 9s", () => {
    expect(plusOne([9])).toEqual([1, 0]);
    expect(plusOne([1, 9])).toEqual([2, 0]);
    expect(plusOne([9, 9])).toEqual([1, 0, 0]);
    expect(plusOne([1, 9, 9])).toEqual([2, 0, 0]);
  });

  it("should handle arrays with all 9s", () => {
    expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
    expect(plusOne([9, 9, 9, 9])).toEqual([1, 0, 0, 0, 0]);
  });

  it("should handle single digit numbers", () => {
    expect(plusOne([0])).toEqual([1]);
    expect(plusOne([1])).toEqual([2]);
    expect(plusOne([8])).toEqual([9]);
  });

  it("should handle large numbers properly", () => {
    expect(
      plusOne([
        6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3,
      ]),
    ).toEqual([
      6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4,
    ]);
  });
});
