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

  path.push(node.value);
  traverse(node.left, path);
  traverse(node.right, path);
}

export default function binaryTreePreOrderSearch(
  head: BinaryNode<number>,
): number[] {
  const path: number[] = [];

  traverse(head, path);

  return path;
}

console.log(binaryTreePreOrderSearch(tree));
