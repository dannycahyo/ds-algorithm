/*
Write a function that takes in a Binary Tree and 
returns a list of its branch sums ordered from leftmost branch sum to rightmost branch sum.

A branch sum is the sum of all values in a Binary Tree branch. 
A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node.

Each BinaryTree node has an integer value, a left child node, and a right child node. 
Children nodes can either be BinaryTree nodes themselves or None / null.


Sample Input

    1
   / \
  2   3
 / \   \
4   5   6

The final sums array is [7, 8, 10], 
which are the sums of the branches in the tree.

1. Binary Tree => Branch Sums
2. Graph => BFS (Bread-first Search)

*/
class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Binary Tree => Branch Sum
function calculateBranchSums(
  root: BinaryTree,
  currentSum: number,
  sums: number[],
) {
  if (!root) {
    return;
  }

  const newSum = root.value + currentSum;

  if (!root.left && !root.right) {
    sums.push(newSum);
  }

  calculateBranchSums(root.left, newSum, sums);
  calculateBranchSums(root.right, newSum, sums);
}

export function branchSums(root: BinaryTree): number[] {
  const sums: number[] = [];

  calculateBranchSums(root, 0, sums);
  return sums;
}

const tree = new BinaryTree(1);
tree.left = new BinaryTree(2);
tree.right = new BinaryTree(3);
tree.left.left = new BinaryTree(4);
tree.left.right = new BinaryTree(5);
tree.right.right = new BinaryTree(6);

console.log(branchSums(tree)); // [7, 8, 10]

//  Add more tree nodes to test
tree.left.left.left = new BinaryTree(7);
tree.left.left.right = new BinaryTree(8);
tree.left.right.left = new BinaryTree(9);
tree.left.right.right = new BinaryTree(10);

console.log(branchSums(tree)); // [14, 15, 17, 18, 10]
