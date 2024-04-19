/*
You're given a Node class that has a name and an array of optional children nodes. 
When put together, nodes form an acyclic tree-like structure.

Implement the breadthFirstSearch method on the Node class, 
which takes in an empty array, traverses the tree using the Breadth-first Search approach (specifically navigating the tree from left to right), 
stores all of the nodes' names in the input array, and returns it.


Sample Input
graph = A
     /  |  \
    B   C   D
   / \     / \
  E   F   G   H
     / \   \
    I   J   K

Sample Output
["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]

*/

// BFS (Breadth First Search) is a traversal
// algorithm that traverses the tree horizontally.

export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string): Node {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array: string[]) {
    const queue: Node[] = [this];

    while (queue.length > 0) {
      const currentNode = queue.shift()!;
      array.push(currentNode.name);

      for (const child of currentNode.children) {
        queue.push(child);
      }
    }

    return array;
  }
}

// Time Complexity: O(V + E)
const node = new Node("A");
node.addChild("B").addChild("C").addChild("D");
node.children[0].addChild("E").addChild("F");
node.children[2].addChild("G").addChild("H");
node.children[0].children[1].addChild("I").addChild("J");
node.children[2].children[0].addChild("K");

console.log(node.breadthFirstSearch([]));
