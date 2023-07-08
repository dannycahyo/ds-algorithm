function quickSortHelper(nums: number[], startIdx: number, endIdx: number) {
  if (startIdx >= endIdx) return;
  let pivotIdx = startIdx;
  let leftIdx = startIdx + 1;
  let rightIdx = endIdx;

  while (rightIdx >= leftIdx) {
    if (nums[leftIdx] > nums[pivotIdx] && nums[rightIdx] < nums[pivotIdx]) {
      [nums[leftIdx], nums[rightIdx]] = [nums[rightIdx], nums[leftIdx]];
    }

    if (nums[leftIdx] <= nums[pivotIdx]) {
      leftIdx++;
    }

    if (nums[rightIdx] >= nums[pivotIdx]) {
      rightIdx--;
    }
  }

  [nums[pivotIdx], nums[rightIdx]] = [nums[rightIdx], nums[pivotIdx]];

  const leftSubArrayIsSmaller =
    rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);

  if (leftSubArrayIsSmaller) {
    quickSortHelper(nums, startIdx, rightIdx - 1);
    quickSortHelper(nums, rightIdx + 1, endIdx);
  } else {
    quickSortHelper(nums, rightIdx + 1, endIdx);
    quickSortHelper(nums, startIdx, rightIdx - 1);
  }
}

function quickSort(nums: number[]) {
  let startIdx = 0;
  let endIdx = nums.length - 1;

  quickSortHelper(nums, startIdx, endIdx);
  return nums;
}

console.log(quickSort([8, 5, 2, 9, 5, 6, 3]));
