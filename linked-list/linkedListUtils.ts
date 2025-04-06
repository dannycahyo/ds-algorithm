export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

function createLinkedList(values: number[]): LinkedList {
  if (values.length === 0)
    throw new Error("Cannot create empty linked list");

  const head = new LinkedList(values[0]);
  let current = head;

  for (let i = 1; i < values.length; i++) {
    current.next = new LinkedList(values[i]);
    current = current.next;
  }

  return head;
}

// Helper function to convert linked list to array for easier assertions
function linkedListToArray(list: LinkedList | null): number[] {
  const result: number[] = [];
  let current: LinkedList | null = list;

  while (current !== null) {
    result.push(current.value);
    current = current.next;
  }

  return result;
}

export { createLinkedList, linkedListToArray };
