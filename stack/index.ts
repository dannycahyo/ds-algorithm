class Node<T> {
  public value: T;
  public next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export default class Stack<T> {
  public top: Node<T> | null;
  public length: number;

  constructor() {
    this.length = 0;
    this.top = null;
  }

  push(item: T): void {
    const newNode = new Node(item);

    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }

  pop(): T | undefined {
    if (this.length === 0) {
      return undefined;
    }

    const item = this.top.value;
    this.top = this.top.next;
    this.length--;

    return item;
  }

  peek(): T | undefined {
    if (this.length === 0) {
      return undefined;
    }

    return this.top.value;
  }
}

// Let's test the stack
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); // 3
console.log(stack.length);

console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
