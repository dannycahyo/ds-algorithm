import { LinkedList } from "./linkedListUtils";

export function middleNode(linkedList: LinkedList) {
  let slowNode = linkedList;
  let fastNode: LinkedList | null = linkedList;

  while (fastNode !== null && fastNode.next !== null) {
    slowNode = slowNode.next!;
    fastNode = fastNode.next.next;
  }

  return slowNode;
}

export function middleNodeII(linkedList: LinkedList) {
  let count = 0;
  let currentNode: LinkedList | null = linkedList;

  while (currentNode !== null) {
    count++;
    currentNode = currentNode.next;
  }

  let middleNode: LinkedList = linkedList;
  for (let i = 0; i < Math.floor(count / 2); i++) {
    middleNode = middleNode.next!;
  }

  return middleNode;
}

const linkedList = new LinkedList(1);
linkedList.next = new LinkedList(2);
linkedList.next.next = new LinkedList(3);
linkedList.next.next.next = new LinkedList(4);
