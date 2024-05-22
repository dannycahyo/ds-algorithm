/*
Write a function that takes in a potentially invalid Binary Search Tree (BST) and returns a boolean representing whether the BST is valid.

Each BST node has an integer value, a left child node, and a right child node. 
A node is said to be a valid BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None / null.

A BST is valid if and only if all of its nodes are valid BST nodes.

Invalid BST:
tree =   10
       /     \
      5      15
    /   \   /   \
   5     2 13   22
 /           \
1            14

Output: false

Valid BST:
tree =   10
       /     \
      5      15
    /   \   /   \
   2     5 13   22
 /             /
1            14

Output: true

*/

class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBstHelper(
  tree: BST | null,
  minValue: number,
  maxValue: number,
): boolean {
  // Base case
  if (tree === null) return true;
  if (tree.value < minValue || tree.value >= maxValue) return false;

  const isLeftValid = validateBstHelper(
    tree.left,
    minValue,
    tree.value,
  );

  return (
    isLeftValid && validateBstHelper(tree.right, tree.value, maxValue)
  );
}

// Binary Search Tree
export function validateBst(tree: BST): boolean {
  return validateBstHelper(tree, -Infinity, Infinity);
}

const validTree = new BST(10);
validTree.left = new BST(5);
validTree.right = new BST(15);
validTree.left.left = new BST(2);
validTree.left.right = new BST(5);
validTree.right.left = new BST(13);
validTree.right.right = new BST(22);
validTree.left.left.left = new BST(1);
validTree.right.left.left = new BST(12);

console.log(validTree);

console.log(validateBst(validTree));
