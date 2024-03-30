// The Node of the Queue
class QueueNode<T> {
  public value: T;
  public next: QueueNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export default class Queue<T> {
  public length: number;
  public head: QueueNode<T> | null;
  public tail: QueueNode<T> | null;

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  enqueue(item: T): void {
    const newNode = new QueueNode(item);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }
  deque(): T | undefined {
    if (this.length === 0) {
      return undefined;
    }

    const removedNode = this.head;
    this.head = this.head.next;
    removedNode.next = null;

    if (this.head === null) {
      // If the queue becomes empty after dequeue, update the tail to null
      this.tail = null;
    }

    this.length--;

    return removedNode.value;
  }

  peek(): T | undefined {
    if (this.length === 0) {
      return undefined;
    }

    return this.head.value;
  }
}

// Let's test the Queue
const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue.peek()); // 1
console.log(queue.deque()); // 1
console.log(queue.peek()); // 2
console.log(queue.deque()); // 2
console.log(queue.peek()); // 3
console.log(queue.deque()); // 3
