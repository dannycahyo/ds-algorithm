function mergeSort(nums: number[]) {
  if (nums.length <= 1) {
    return nums;
  }

  const middle = Math.floor(nums.length / 2);
  const leftNums = mergeSort(nums.slice(0, middle));

  const rightNums = mergeSort(nums.slice(middle));

  return merge(leftNums, rightNums);
}

function merge(leftNums: number[], rightNums: number[]): number[] {
  const sortedCombinationNums: number[] = [];

  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < leftNums.length && rightIdx < rightNums.length) {
    if (leftNums[leftIdx] <= rightNums[rightIdx]) {
      sortedCombinationNums.push(leftNums[leftIdx]);
      leftIdx++;
    } else {
      sortedCombinationNums.push(rightNums[rightIdx]);
      rightIdx++;
    }
  }

  while (leftIdx < leftNums.length) {
    sortedCombinationNums.push(leftNums[leftIdx]);
    leftIdx++;
  }

  while (rightIdx < rightNums.length) {
    sortedCombinationNums.push(rightNums[rightIdx]);
    rightIdx++;
  }

  return sortedCombinationNums;
}

console.log(mergeSort([8, 5, 2, 9, 5, 6, 3]));
