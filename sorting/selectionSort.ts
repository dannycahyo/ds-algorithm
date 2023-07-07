function selectionSort(nums: number[]): number[] {
  let beginningIdx = 0;
  while (beginningIdx < nums.length) {
    let smallestIdx = beginningIdx;
    for (let i = smallestIdx + 1; i < nums.length; i++) {
      if (nums[smallestIdx] > nums[i]) {
        smallestIdx = i;
      }
    }
    swapNum(nums, beginningIdx, smallestIdx);
    beginningIdx++;
  }
  return nums;
}

function swapNum(nums: number[], beginningIdx: number, smallestIdx: number) {
  [nums[beginningIdx], nums[smallestIdx]] = [
    nums[smallestIdx],
    nums[beginningIdx],
  ];
}

console.log(selectionSort([9, 2, 15, 8, 1, 10, 11, 6]));
