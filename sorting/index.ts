// LIVE CODE TIKTOK

// Bubble Sort
function bubbleSort(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
}

const unsortedArray4Bubble: number[] = [5, 1, 4, 2, 8];
console.log(bubbleSort(unsortedArray4Bubble));
// Expected => [1, 4, 5, 28]

// Insertion Sort
function insertionSort(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j > 0 && nums[j - 1] > nums[j]; j--) {
      [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
    }
  }

  return nums;
}

const unsortedArray4Insertion: number[] = [8, 6, 4, 3, 1, 9, 5];
console.log(insertionSort(unsortedArray4Insertion));

// Selection Sort
function selectionSortII(nums: number[]): number[] {
  for (let minIndex = 0; minIndex < nums.length; minIndex++) {
    let smallestIdx = minIndex;
    for (let i = minIndex + 1; i < nums.length; i++) {
      if (nums[smallestIdx] > nums[i]) {
        smallestIdx = i;
      }
    }
    [nums[minIndex], nums[smallestIdx]] = [nums[smallestIdx], nums[minIndex]];
  }

  return nums;
}

const unsortedArray4Selection: number[] = [5, 2, 9, 6, 4];

console.log(selectionSortII(unsortedArray4Selection));
