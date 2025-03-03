/*
Write a function that takes in a non-empty array of integers and returns the maximum sum
that can be obtained by summing up all of the integers in a non-empty subarray of the input array.
A subarray must only contain adjacent numbers (numbers next to each other in the input array).

Sample Input
array = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]
Sample Output
19 // [1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1]

CATEGORY => KADANES ALGORITHM

F(N) = ?

F(1) => [3]
F(2) => [3, 5] (8)
[3] => 
*/

/**
 * Kadane's algorithm finds the maximum sum subarray in O(n) time
 * @param array - Input array of integers
 * @returns The maximum sum that can be obtained by summing a subarray
 */
export function kadanesAlgorithm(array: number[]): number {
  let maxEndingHere = array[0];
  let maxSoFar = array[0];

  for (let i = 1; i < array.length; i++) {
    const num = array[i];
    const currentSum = maxEndingHere + num;
    maxEndingHere = Math.max(num, currentSum);
    maxSoFar = Math.max(maxEndingHere, maxSoFar);
  }

  return maxSoFar;
}

// Debugging purposes
console.log(
  kadanesAlgorithm([
    3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4,
  ]),
);
