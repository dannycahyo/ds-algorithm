function buildHeap(nums: number[]) {
  const firstParentIdx = Math.floor((nums.length - 2) / 2);
  for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
    siftDown(currentIdx, nums.length - 1, nums);
  }
  return nums;
}

function siftDown(currentIdx: number, endIdx: number, heap: number[]) {
  let leftChildIdx = currentIdx * 2 + 1;
  while (leftChildIdx <= endIdx) {
    const rightChildIdx =
      currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
    let idxToSwap: number;
    if (rightChildIdx !== -1 && heap[rightChildIdx] > heap[leftChildIdx]) {
      idxToSwap = rightChildIdx;
    } else {
      idxToSwap = leftChildIdx;
    }

    if (heap[idxToSwap] > heap[currentIdx]) {
      swap(currentIdx, idxToSwap, heap);
      currentIdx = idxToSwap;
      leftChildIdx = currentIdx * 2 + 1;
    } else {
      return;
    }
  }
}

function swap(i: number, j: number, nums: number[]) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}

function heapSort(nums: number[]) {
  buildHeap(nums);
  for (let i = nums.length - 1; i > 0; i--) {
    swap(0, i, nums);
    siftDown(0, i - 1, nums);
  }
  return nums;
}

console.log(heapSort([8, 5, 2, 9, 5, 6, 3]));
