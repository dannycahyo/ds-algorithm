import { describe, it, expect } from "vitest";
import { rotateArray, rotateArrayII } from "./rotateArray";

describe("Rotate Array", () => {
  describe("First Implementation", () => {
    it("should rotate the array to the right by k steps", () => {
      expect(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([
        5, 6, 7, 1, 2, 3, 4,
      ]);
      expect(rotateArray([-1, -100, 3, 99], 2)).toEqual([
        3, 99, -1, -100,
      ]);
    });

    it("should handle empty arrays", () => {
      expect(rotateArray([], 3)).toEqual([]);
    });

    it("should handle single element arrays", () => {
      expect(rotateArray([5], 3)).toEqual([5]);
    });

    it("should handle when k is larger than array length", () => {
      expect(rotateArray([1, 2, 3], 5)).toEqual([2, 3, 1]);
    });

    it("should handle when k is zero", () => {
      expect(rotateArray([1, 2, 3, 4], 0)).toEqual([1, 2, 3, 4]);
    });
  });

  describe("Second Implementation", () => {
    it("should rotate the array to the right by k steps", () => {
      expect(rotateArrayII([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([
        5, 6, 7, 1, 2, 3, 4,
      ]);
      expect(rotateArrayII([-1, -100, 3, 99], 2)).toEqual([
        3, 99, -1, -100,
      ]);
    });

    it("should handle single element arrays", () => {
      expect(rotateArrayII([5], 3)).toEqual([5]);
    });

    it("should handle when k is larger than array length", () => {
      expect(rotateArrayII([1, 2, 3], 5)).toEqual([2, 3, 1]);
    });

    it("should handle when k is zero", () => {
      expect(rotateArrayII([1, 2, 3, 4], 0)).toEqual([1, 2, 3, 4]);
    });

    it("should handle two element arrays", () => {
      expect(rotateArrayII([1, 2], 3)).toEqual([2, 1]);
      expect(rotateArrayII([1, 2], 2)).toEqual([1, 2]);
    });
  });
});
