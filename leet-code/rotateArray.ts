/*


========  MEDIUM  =================
Given an integer array nums, rotate the array 
to the right by k steps, where k is non-negative.

============= EXAMPLE ==============================
ROTATE ARRAY TO THE RIGHT

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]


*/

/*
Index:    0  1  2  3  4  5  6
Original: 1  2  3  4  5  6  7
                    ↓
Rotated:  5  6  7  1  2  3  4
          ↑     ↑     ↑     ↑
          |     |     |     |
Element Movement: Each element moves k=3 positions to the right
*/
export function rotateArray(nums: number[], k: number): number[] {
  if (nums.length <= 1) return nums;
  const n = nums.length;
  k = k % n;

  const temp = [...nums];

  for (let i = 0; i < n; i++) {
    const idxToRatate = (i + k) % n;
    nums[idxToRatate] = temp[i];
  }

  return nums;
}

// [1, 2, 3, 4, 5, 6, 7] => [5,6,7,1,2,3,4], k = 3
// [7, 6, 5, 4, 3, 2, 1]
// - Reverse the firts k element;
// - Reverse the rest;
export function rotateArrayII(nums: number[], k: number): number[] {
  if (nums.length <= 1) return nums;
  // Reverse all element;
  nums.reverse();
  k = k % nums.length;

  let left = 0;
  let right = k - 1;

  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }

  left = k;
  right = nums.length - 1;

  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }

  return nums;
}

// Removing console.log for testing purposes
// console.log(rotateArrayII([1, 2], 3));
