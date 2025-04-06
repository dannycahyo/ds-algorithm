import { describe, it, expect } from "vitest";
import { middleNode, middleNodeII } from "./middleNode";
import {
  createLinkedList,
  linkedListToArray,
} from "./linkedListUtils";

describe("middleNode function (fast & slow pointer approach)", () => {
  it("should find the middle node in a list with odd number of nodes", () => {
    const list = createLinkedList([1, 2, 3, 4, 5]);
    const result = middleNode(list);
    expect(result.value).toBe(3);
    expect(linkedListToArray(result)).toEqual([3, 4, 5]);
  });

  it("should find the middle node in a list with even number of nodes (second middle)", () => {
    const list = createLinkedList([1, 2, 3, 4, 5, 6]);
    const result = middleNode(list);
    expect(result.value).toBe(4);
    expect(linkedListToArray(result)).toEqual([4, 5, 6]);
  });

  it("should handle a list with just one node", () => {
    const list = createLinkedList([42]);
    const result = middleNode(list);
    expect(result.value).toBe(42);
  });

  it("should handle a list with just two nodes", () => {
    const list = createLinkedList([1, 2]);
    const result = middleNode(list);
    expect(result.value).toBe(2);
  });
});

describe("middleNodeII function (count approach)", () => {
  it("should find the middle node in a list with odd number of nodes", () => {
    const list = createLinkedList([1, 2, 3, 4, 5]);
    const result = middleNodeII(list);
    expect(result.value).toBe(3);
    expect(linkedListToArray(result)).toEqual([3, 4, 5]);
  });

  it("should find the middle node in a list with even number of nodes (second middle)", () => {
    const list = createLinkedList([1, 2, 3, 4, 5, 6]);
    const result = middleNodeII(list);
    expect(result.value).toBe(4);
    expect(linkedListToArray(result)).toEqual([4, 5, 6]);
  });

  it("should handle a list with just one node", () => {
    const list = createLinkedList([42]);
    const result = middleNodeII(list);
    expect(result.value).toBe(42);
  });

  it("should handle a list with just two nodes", () => {
    const list = createLinkedList([1, 2]);
    const result = middleNodeII(list);
    expect(result.value).toBe(2);
  });
});

it("both functions should return the same result for various list lengths", () => {
  // Test with lists of different lengths
  const testCases = [
    [1],
    [1, 2],
    [1, 2, 3],
    [1, 2, 3, 4],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5, 6, 7],
    [1, 2, 3, 4, 5, 6, 7, 8],
  ];

  for (const values of testCases) {
    const list = createLinkedList(values);
    const result1 = middleNode(list);
    const list2 = createLinkedList(values); // Create a new list for the second function
    const result2 = middleNodeII(list2);
    expect(result1.value).toBe(result2.value);
  }
});
