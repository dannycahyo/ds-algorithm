/*
You're given the head of a Singly Linked List whose nodes are in sorted order with respect to their values. 
Write a function that returns a modified version of the Linked List that doesn't contain any nodes with duplicate values. 
The Linked List should be modified in place (i.e., you shouldn't create a brand new list), 
and the modified Linked List should still have its nodes sorted with respect to their values.

Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None / null if it's the tail of the list.

Sample Input
linkedList = 1 -> 1 -> 3 -> 4 -> 4 -> 4 -> 5 -> 6 -> 6 

Sample Output
1 -> 3 -> 4 -> 5 -> 6 
*/

export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function removeDuplicatesFromLinkedList(
  linkedList: LinkedList,
) {
  let currentNode: LinkedList | null = linkedList;
  while (currentNode !== null) {
    let nextDistinctNode: LinkedList | null = currentNode.next;

    while (
      nextDistinctNode !== null &&
      nextDistinctNode.value === currentNode.value
    ) {
      nextDistinctNode = nextDistinctNode.next;
    }

    currentNode.next = nextDistinctNode;
    currentNode = nextDistinctNode;
  }

  return linkedList;
}

const linkedList = new LinkedList(1);
linkedList.next = new LinkedList(1);
linkedList.next.next = new LinkedList(3);
linkedList.next.next.next = new LinkedList(4);
linkedList.next.next.next.next = new LinkedList(4);
linkedList.next.next.next.next.next = new LinkedList(4);
linkedList.next.next.next.next.next.next = new LinkedList(5);
linkedList.next.next.next.next.next.next.next = new LinkedList(6);
linkedList.next.next.next.next.next.next.next.next = new LinkedList(
  6,
);

const removedDuplicateLinkedList =
  removeDuplicatesFromLinkedList(linkedList);

console.log(removedDuplicateLinkedList);
