// Time Complexity  => O(N * N)
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

console.log(bubbleSort([9, 2, 15, 8, 1, 10, 11, 6]));
