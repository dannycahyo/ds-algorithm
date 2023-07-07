// Time Complexity  => O(N * N)
function insertionSort(nums: number[]) {
  for (let i = 1; i < nums.length; i++) {
    let j = i;

    while (j > 0 && nums[j] < nums[j - 1]) {
      swap(nums, j, j - 1);
      j--;
    }
  }
  return nums;
}

function swap(nums: number[], currIdx: number, prevIdx: number) {
  [nums[currIdx], nums[prevIdx]] = [nums[prevIdx], nums[currIdx]];
}

console.log(insertionSort([9, 2, 15, 8, 1, 10, 11, 6]));
