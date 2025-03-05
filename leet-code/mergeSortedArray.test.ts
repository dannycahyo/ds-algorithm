import { describe, it, expect } from "vitest";
import { mergeSortedArray } from "./mergeSortedArray";

describe("Merge Sorted Array Function", () => {
  it("should merge two sorted arrays correctly", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2 = [2, 5, 6];
    const n = 3;
    mergeSortedArray(nums1, m, nums2, n);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it("should handle when first array is empty", () => {
    const nums1 = [0];
    const m = 0;
    const nums2 = [1];
    const n = 1;
    mergeSortedArray(nums1, m, nums2, n);
    expect(nums1).toEqual([1]);
  });

  it("should handle when second array is empty", () => {
    const nums1 = [1];
    const m = 1;
    const nums2: number[] = [];
    const n = 0;
    mergeSortedArray(nums1, m, nums2, n);
    expect(nums1).toEqual([1]);
  });

  it("should handle arrays with duplicate values", () => {
    const nums1 = [1, 1, 2, 0, 0, 0];
    const m = 3;
    const nums2 = [2, 5, 6];
    const n = 3;
    mergeSortedArray(nums1, m, nums2, n);
    expect(nums1).toEqual([1, 1, 2, 2, 5, 6]);
  });

  it("should handle when all values from nums2 are smaller than nums1", () => {
    const nums1 = [4, 5, 6, 0, 0, 0];
    const m = 3;
    const nums2 = [1, 2, 3];
    const n = 3;
    mergeSortedArray(nums1, m, nums2, n);
    expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should handle when all values from nums1 are smaller than nums2", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2 = [4, 5, 6];
    const n = 3;
    mergeSortedArray(nums1, m, nums2, n);
    expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should handle larger arrays", () => {
    const nums1 = [1, 3, 5, 7, 9, 0, 0, 0, 0, 0];
    const m = 5;
    const nums2 = [2, 4, 6, 8, 10];
    const n = 5;
    mergeSortedArray(nums1, m, nums2, n);
    expect(nums1).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
