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

export default function bfs(
  head: BinaryNode<number>,
  needle: number,
): boolean {
  const queue: BinaryNode<number>[] = [head];

  while (queue.length > 0) {
    const node = queue.shift();

    if (node.value === needle) {
      return true;
    }

    if (node.left !== null) {
      queue.push(node.left);
    }

    if (node.right !== null) {
      queue.push(node.right);
    }
  }

  return false;
}

console.log(bfs(tree, 100)); // true
