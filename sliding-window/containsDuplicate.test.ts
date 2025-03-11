import { describe, it, expect } from "vitest";
import { containsNearbyDuplicate } from "./containsDuplicate";

describe("Contains Nearby Duplicate Function", () => {
  it("should return true when array contains duplicates within k distance", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toBe(true);
    expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toBe(true);
    expect(containsNearbyDuplicate([1, 0, 3, 1, 3, 4, 5], 2)).toBe(
      true,
    );
  });

  it("should return false when array does not contain duplicates within k distance", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toBe(
      false,
    );
    expect(containsNearbyDuplicate([1, 2, 3, 4, 5], 2)).toBe(false);
    expect(containsNearbyDuplicate([1, 2, 1], 1)).toBe(false);
  });

  it("should handle edge cases", () => {
    // Empty array
    expect(containsNearbyDuplicate([], 5)).toBe(false);
    // Single element array
    expect(containsNearbyDuplicate([1], 3)).toBe(false);
    // Same elements but beyond k distance
    expect(containsNearbyDuplicate([1, 2, 3, 4, 1], 3)).toBe(false);
    // All same elements
    expect(containsNearbyDuplicate([1, 1, 1, 1], 1)).toBe(true);
  });

  it("should handle arrays with negative numbers", () => {
    expect(containsNearbyDuplicate([-1, -2, -3, -1], 3)).toBe(true);
    expect(containsNearbyDuplicate([-1, -2, -3, -4, -1], 3)).toBe(
      false,
    );
  });

  it("should handle larger values of k", () => {
    expect(
      containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 1], 9),
    ).toBe(true);
    expect(
      containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 1], 8),
    ).toBe(false);
  });
});
