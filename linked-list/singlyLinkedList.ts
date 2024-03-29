class Node<T> {
  public value: T;
  public next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export default class SinglyLinkedList<T> {
  public length: number;
  public head: Node<T> | null;

  constructor() {
    this.length = 0;
    this.head = null;
  }

  prepend(item: T): void {
    const newNode = new Node(item);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insertAt(item: T, idx: number): void {
    if (idx < 0 || idx > this.length) {
      throw new Error("Index out of range");
    }

    if (idx === 0) {
      this.prepend(item);
    }

    if (idx === this.length) {
      this.append(item);
    }

    const newNode = new Node(item);
    let current = this.head;
    let prev = null;
    let counter = 0;

    while (counter < idx) {
      prev = current;
      current = current.next;
      counter++;
    }

    newNode.next = current;
    prev.next = newNode;
    this.length++;
  }

  append(item: T): void {
    const newNode = new Node(item);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

    this.length++;
  }

  remove(item: T): T | undefined {
    if (!this.head) {
      return undefined;
    }

    if (this.head.value === item) {
      const removedNode = this.head;
      this.head = this.head.next;
      this.length--;

      return removedNode.value;
    }

    let current = this.head;
    let prev = null;

    while (current && current.value !== item) {
      prev = current;
      current = current.next;
    }

    if (current) {
      prev.next = current.next;
      this.length--;

      return current.value;
    }

    return undefined;
  }

  get(idx: number): T | undefined {
    if (idx < 0 || idx >= this.length) {
      return undefined;
    }

    let current = this.head;
    let counter = 0;

    while (counter < idx) {
      if (!current) {
        return undefined; // Handle the case when the list is empty
      }
      current = current.next;
      counter++;
    }

    return current ? current.value : undefined;
  }

  removeAt(idx: number): T | undefined {
    if (idx < 0 || idx >= this.length) {
      return undefined;
    }

    if (idx === 0) {
      const removedNode = this.head;
      this.head = this.head.next;
      this.length--;
      return removedNode.value;
    }

    let current = this.head;
    let prev = null;
    let counter = 0;

    while (counter < idx) {
      prev = current;
      current = current.next;
      counter++;
    }

    prev.next = current.next;
    this.length--;
    return current.value;
  }

  clear(): void {
    this.head = null;
    this.length = 0;
  }
}

// Let's try it out

const linkedList = new SinglyLinkedList<number>();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.prepend(0);

console.log(linkedList.head.value); // 0
console.log(linkedList.head.next.value); // 1

linkedList.remove(1);
console.log(linkedList.head.next.value); // 2

linkedList.insertAt(10, 2);
console.log(linkedList.head.next.next.value); // 10

linkedList.removeAt(2);
console.log(linkedList.head.next.next.value); // 3
console.log(linkedList.length); // 4

console.log(linkedList.get(2)); // 3
