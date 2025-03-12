import { describe, it, expect } from "vitest";
import { nodeDepths, nodeDepthsII } from "./nodeDepths";
import { BinaryTree } from "./nodeDepths";

describe("Node Depths Function - Recursive", () => {
  it("should return 0 for an empty tree", () => {
    expect(nodeDepths(null)).toEqual(0);
  });

  it("should return 0 for a single node tree", () => {
    const root = new BinaryTree(1);
    expect(nodeDepths(root)).toEqual(0);
  });

  it("should calculate depths for a simple balanced tree", () => {
    // Tree:
    //      1
    //    /   \
    //   2     3
    const root = new BinaryTree(1);
    root.left = new BinaryTree(2);
    root.right = new BinaryTree(3);

    // Depths: 0 (root) + 1 (left) + 1 (right) = 2
    expect(nodeDepths(root)).toEqual(2);
  });

  it("should calculate depths for an example tree from the problem statement", () => {
    // Tree:
    //       1
    //     /   \
    //    2     3
    //  /  \   / \
    // 4    5 6   7
    // / \
    //8   9
    const root = new BinaryTree(1);
    root.left = new BinaryTree(2);
    root.right = new BinaryTree(3);
    root.left.left = new BinaryTree(4);
    root.left.right = new BinaryTree(5);
    root.right.left = new BinaryTree(6);
    root.right.right = new BinaryTree(7);
    root.left.left.left = new BinaryTree(8);
    root.left.left.right = new BinaryTree(9);

    // Expected sum of depths = 16
    expect(nodeDepths(root)).toEqual(16);
  });

  it("should calculate depths for another tree structure", () => {
    // Tree:
    //       1
    //     /   \
    //    2     3
    //     \
    //      4
    //       \
    //        5
    const root = new BinaryTree(1);
    root.left = new BinaryTree(2);
    root.right = new BinaryTree(3);
    root.left.right = new BinaryTree(4);
    root.left.right.right = new BinaryTree(5);

    // Depths: 0 (root) + 1 (2) + 1 (3) + 2 (4) + 3 (5) = 7
    expect(nodeDepths(root)).toEqual(7);
  });
});

describe("Node Depths Function - Imperative", () => {
  it("should return 0 for a single node tree", () => {
    const root = new BinaryTree(1);
    expect(nodeDepthsII(root)).toEqual(0);
  });

  it("should calculate depths for a simple balanced tree", () => {
    // Tree:
    //      1
    //    /   \
    //   2     3
    const root = new BinaryTree(1);
    root.left = new BinaryTree(2);
    root.right = new BinaryTree(3);

    // Depths: 0 (root) + 1 (left) + 1 (right) = 2
    expect(nodeDepthsII(root)).toEqual(2);
  });

  it("should calculate depths for an example tree from the problem statement", () => {
    // Tree:
    //       1
    //     /   \
    //    2     3
    //  /  \   / \
    // 4    5 6   7
    // / \
    //8   9
    const root = new BinaryTree(1);
    root.left = new BinaryTree(2);
    root.right = new BinaryTree(3);
    root.left.left = new BinaryTree(4);
    root.left.right = new BinaryTree(5);
    root.right.left = new BinaryTree(6);
    root.right.right = new BinaryTree(7);
    root.left.left.left = new BinaryTree(8);
    root.left.left.right = new BinaryTree(9);

    // Expected sum of depths = 16
    expect(nodeDepthsII(root)).toEqual(16);
  });

  it("should calculate depths for another tree structure", () => {
    // Tree:
    //       1
    //     /   \
    //    2     3
    //     \
    //      4
    //       \
    //        5
    const root = new BinaryTree(1);
    root.left = new BinaryTree(2);
    root.right = new BinaryTree(3);
    root.left.right = new BinaryTree(4);
    root.left.right.right = new BinaryTree(5);

    // Depths: 0 (root) + 1 (2) + 1 (3) + 2 (4) + 3 (5) = 7
    expect(nodeDepthsII(root)).toEqual(7);
  });
});
