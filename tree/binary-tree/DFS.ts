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

function traverse(head: BinaryNode<number> | null, needle: number) {
  if (head === null) {
    return false;
  }

  if (head.value === needle) {
    return true;
  }

  return traverse(head.left, needle) || traverse(head.right, needle);
}

export default function dfs(
  head: BinaryNode<number>,
  needle: number,
): boolean {
  return traverse(head, needle);
}

console.log(dfs(tree, 7)); // true
