class DoublyLinkedListNode<T> {
  public value: T;
  public next: DoublyLinkedListNode<T> | null;
  public prev: DoublyLinkedListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export default class DoublyLinkedList<T> {
  public length: number;
  public head: DoublyLinkedListNode<T> | null;
  public tail: DoublyLinkedListNode<T> | null;

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  prepend(item: T): void {
    const newNode = new DoublyLinkedListNode(item);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  insertAt(item: T, idx: number): void {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index out of range");
    }

    if (idx === 0) {
      this.prepend(item);
      return;
    }

    if (idx === this.length) {
      this.append(item);
      return;
    }

    const newNode = new DoublyLinkedListNode(item);
    let current = this.head;
    let prev = null;
    let currentIdx = 0;

    while (currentIdx < idx) {
      prev = current;
      current = current.next;
      currentIdx++;
    }

    newNode.next = current;
    newNode.prev = prev;
    prev.next = newNode;
    current.prev = newNode;

    this.length++;
  }

  append(item: T): void {
    const newNode = new DoublyLinkedListNode(item);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  remove(item: T): T | undefined {
    let current = this.head;

    while (current) {
      if (current.value === item) {
        if (current === this.head && current === this.tail) {
          this.head = null;
          this.tail = null;
        } else if (current === this.head) {
          this.head = current.next;
          this.head.prev = null;
        } else if (current === this.tail) {
          this.tail = current.prev;
          this.tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
        this.length--;
        return current.value;
      }

      current = current.next;
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
      current = current.next;
      counter++;
    }

    return current.value;
  }

  removeAt(idx: number): T | undefined {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index out of range");
    }

    if (idx === 0) {
      return this.remove(this.head!.value);
    }

    if (idx === this.length) {
      return this.remove(this.tail!.value);
    }

    let current = this.head;
    let prev = null;
    let currentIdx = 0;

    while (currentIdx < idx) {
      prev = current;
      current = current.next;
      currentIdx++;
    }

    prev.next = current.next;
    current.next.prev = prev;

    this.length--;

    return current.value;
  }
}

// Let's test the DoublyLinkedList class

const doublyLinkedList = new DoublyLinkedList<number>();
doublyLinkedList.append(1);
doublyLinkedList.append(2);
doublyLinkedList.append(3);
doublyLinkedList.prepend(0);

console.log(doublyLinkedList.get(0)); // 0

doublyLinkedList.insertAt(1.5, 2);
console.log(doublyLinkedList.get(2)); // 1.5

doublyLinkedList.removeAt(2);
console.log(doublyLinkedList.get(2)); // 2

doublyLinkedList.remove(2);
console.log(doublyLinkedList.get(2)); // 3

doublyLinkedList.remove(0);
console.log(doublyLinkedList.get(0)); // 1
