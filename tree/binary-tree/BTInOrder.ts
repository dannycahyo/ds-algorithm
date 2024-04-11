/*
        20
       /  \
     10    50
    / \   /  \
   5  15 30  100
    \   /  \
    7  29  45
*/

const tree: BinaryNode<number> = {
  value: 20,
  right: {
    value: 50,
    right: {
      value: 100,
      right: null,
      left: null,
    },
    left: {
      value: 30,
      right: {
        value: 45,
        right: null,
        left: null,
      },
      left: {
        value: 29,
        right: null,
        left: null,
      },
    },
  },
  left: {
    value: 10,
    right: {
      value: 15,
      right: null,
      left: null,
    },
    left: {
      value: 5,
      right: {
        value: 7,
        right: null,
        left: null,
      },
      left: null,
    },
  },
};

function traverse(node: BinaryNode<number> | null, path: number[]) {
  if (node === null) {
    return;
  }

  traverse(node.left, path);
  path.push(node.value);
  traverse(node.right, path);
}

export default function binaryTreeInOrderSearch(
  head: BinaryNode<number>,
): number[] {
  const path: number[] = [];

  traverse(head, path);
  return path;
}

console.log(binaryTreeInOrderSearch(tree));
