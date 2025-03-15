/*
Write a function that takes in an array of positive integers and returns the maximum sum of non-adjacent elements in the array.

If the input array is empty, the function should return 0.

Sample Input
  array = [75, 105, 120, 75, 90, 135]
Sample Output
  330 // 75 + 120 + 135
*/

export function maxSubsetSumNoAdjacent(array: number[]) {
  const n = array.length;
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return array[0];
  }

  const dp: number[] = new Array(n).fill(0);
  dp[0] = array[0];
  dp[1] = Math.max(array[0], array[1]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], array[i] + dp[i - 2]);
  }

  return dp[n - 1];
}

console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135])); // Output: 330
