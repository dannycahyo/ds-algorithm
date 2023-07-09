class MinHeap {
  heap: number[];

  constructor(array: number[]) {
    this.heap = array;
  }

  size() {
    return this.heap.length - 1;
  }

  buildHeap(array: number[]) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1);
    }
    return array;
  }

  siftDown(currentIdx: number, endIdx: number) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      const childTwoIdx =
        currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap: number;
      if (
        childTwoIdx !== -1 &&
        this.heap[childTwoIdx] < this.heap[childOneIdx]
      ) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }
      if (this.heap[idxToSwap] < this.heap[currentIdx]) {
        this.swap(currentIdx, idxToSwap, this.heap);
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  siftUp(currentIdx: number) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && this.heap[currentIdx] < this.heap[parentIdx]) {
      this.swap(currentIdx, parentIdx, this.heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    this.swap(0, this.size(), this.heap);
    let removedElement = this.heap.pop();
    this.siftDown(0, this.size());
    return removedElement;
  }

  insert(value: number) {
    this.heap.push(value);
    this.siftUp(this.size());
  }

  swap(i: number, j: number, heap: number[]) {
    [heap[i], heap[j]] = [heap[j], heap[i]];
  }
}

const nums = [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41];

const minHeap = new MinHeap(nums);

console.log(minHeap.heap);
minHeap.buildHeap(nums);
console.log(minHeap.heap);
minHeap.insert(76);
console.log(minHeap.heap);
console.log(minHeap.peek());
console.log(minHeap.remove());
console.log(minHeap.heap);
console.log(minHeap.peek());
console.log(minHeap.remove());
console.log(minHeap.heap);
console.log(minHeap.peek());
minHeap.insert(87);
console.log(minHeap.heap);
