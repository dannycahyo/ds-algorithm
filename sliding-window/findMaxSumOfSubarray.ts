/*
Given an array of integers of size ‘n’, Our aim is to calculate the maximum sum of ‘k’ consecutive elements in the array.

Input  : arr[] = {100, 200, 300, 400}, k = 2
Output : 700


Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}, k = 4 
Output : 39
We get maximum sum by adding subarray {4, 2, 10, 23} of size 4.


Input  : arr[] = {2, 3}, k = 3
Output : Invalid
There is no subarray of size 3 as size of whole array is 2.
*/

// Brute force approach => O(N^2)
export function findMaxSumOfSubarray(
  arr: number[],
  k: number,
): number {
  let maxSum = Number.MIN_VALUE;

  for (let i = 0; i < arr.length - k + 1; i++) {
    let currentSubArraySum = 0;
    for (let j = 0; j < k; j++) {
      currentSubArraySum += arr[i + j];
    }
    maxSum = Math.max(maxSum, currentSubArraySum);
  }

  return maxSum;
}

export function findMaxSumOfSubarrayII(
  arr: number[],
  k: number,
): number {
  if (arr.length < k) {
    return 0;
  }

  let max = 0;
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  max = sum;

  for (let i = k; i < arr.length; i++) {
    const initialValue = arr[i - k];
    const nextValue = arr[i];
    sum += nextValue - initialValue;

    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

console.log(
  findMaxSumOfSubarrayII([1, 4, 2, 10, 23, 3, 1, 0, 20], 4),
);
