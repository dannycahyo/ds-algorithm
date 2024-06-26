/*
Invert Binary Tree
Write a function that takes in a Binary Tree and inverts it. 
In other words, the function should swap every left node in the tree for its corresponding right node.

Each BinaryTree node has an integer value, 
a left child node, and a right child node. 
Children nodes can either be BinaryTree nodes themselves or None / null.

Sample Input
tree =    1
       /     \
      2       3
    /   \   /   \
   4     5 6     7
 /   \
8     9

Sample Output
       1
    /     \
   3       2
 /   \   /   \
7     6 5     4
            /   \
           9     8
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

// Recursive Function
function invertBinaryTreeHelper(tree: BinaryTree | null) {
  // Base Case
  if (tree === null) return;

  const leftTree = tree.left;
  tree.left = tree.right;
  tree.right = leftTree;

  invertBinaryTreeHelper(tree.left);
  invertBinaryTreeHelper(tree.right);
}

export function invertBinaryTree(tree: BinaryTree | null) {
  invertBinaryTreeHelper(tree);

  return tree;
}

const binaryTree = new BinaryTree(1); // root
binaryTree.left = new BinaryTree(2);
binaryTree.right = new BinaryTree(3);
binaryTree.left.left = new BinaryTree(4);
binaryTree.left.right = new BinaryTree(5);
binaryTree.right.left = new BinaryTree(6);
binaryTree.right.right = new BinaryTree(7);
binaryTree.left.left.left = new BinaryTree(8);
binaryTree.left.left.right = new BinaryTree(9);

const revertedTree = invertBinaryTree(binaryTree);
console.log(revertedTree);
