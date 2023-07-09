class MaxHeap {
  heap: number[];

  constructor(nums: number[]) {
    this.heap = nums;
    this.buildHeap();
  }

  size() {
    return this.heap.length;
  }

  buildHeap() {
    const firstParentIdx = Math.floor((this.size() - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, this.size() - 1);
    }
    return this.heap;
  }

  siftDown(currentIdx: number, endIdx: number) {
    let leftChildIdx = currentIdx * 2 + 1;
    while (leftChildIdx <= endIdx) {
      const rightChildIdx =
        currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap: number;
      if (
        rightChildIdx !== -1 &&
        this.heap[rightChildIdx] > this.heap[leftChildIdx]
      ) {
        idxToSwap = rightChildIdx;
      } else {
        idxToSwap = leftChildIdx;
      }

      if (this.heap[idxToSwap] > this.heap[currentIdx]) {
        this.swap(idxToSwap, currentIdx);
        currentIdx = idxToSwap;
        leftChildIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  siftUp(currentIdx: number) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && this.heap[currentIdx] > this.heap[parentIdx]) {
      this.swap(currentIdx, parentIdx);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    this.swap(0, this.size() - 1);
    let removedElement = this.heap.pop();
    this.siftDown(0, this.size() - 1);
    return removedElement;
  }

  insert(value: number) {
    console.log(this.heap);
    this.heap.push(value);
    this.siftUp(this.size() - 1);
  }

  swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

const defaultNums = [12, 5, 8, 3, 7, 10];

const maxHeap = new MaxHeap(defaultNums);
console.log(maxHeap.heap);
maxHeap.insert(20);
console.log(maxHeap.heap);
console.log(maxHeap.peek());
console.log(maxHeap.remove());
console.log(maxHeap.heap);
