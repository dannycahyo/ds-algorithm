import { describe, it, expect } from "vitest";
import dfs, { tree, BinaryNode } from "./DFS";

describe("Depth First Search (DFS)", () => {
  it("should find values that exist in the tree", () => {
    expect(dfs(tree, 7)).toBe(true);
    expect(dfs(tree, 20)).toBe(true);
    expect(dfs(tree, 45)).toBe(true);
    expect(dfs(tree, 100)).toBe(true);
  });

  it("should return false for values not in the tree", () => {
    expect(dfs(tree, 101)).toBe(false);
    expect(dfs(tree, 6)).toBe(false);
    expect(dfs(tree, 0)).toBe(false);
  });

  it("should handle edge cases", () => {
    const singleNodeTree: BinaryNode<number> = {
      value: 1,
      left: null,
      right: null,
    };
    expect(dfs(singleNodeTree, 1)).toBe(true);
    expect(dfs(singleNodeTree, 2)).toBe(false);
  });
});
