/*
Count Inversions
Write a function that takes in an array of integers and returns the number of inversions in the array. 
An inversion occurs if for any valid indices i and j, i < j and array[i] > array[j].

For example, given array = [3, 4, 1, 2], there are 4 inversions. 
The following pairs of indices represent inversions: [0, 2], [0, 3], [1, 2], [1, 3].

Intuitively, the number of inversions is a measure of how unsorted the array is.

Sample Input
array = [2, 3, 3, 1, 9, 5, 6]
Sample Output
5
// The following pairs of indices represent inversions:
// [0, 3], [1, 3], [2, 3], [4, 5], [4, 6]
*/

// O (N * N) Time Complexity | O(1) Space Complexity
function countInversions(nums: number[]): number {
  let countedInversion = 0;

  nums.forEach((num, index) => {
    for (let j = index + 1; j < nums.length; j++) {
      if (num > nums[j]) {
        countedInversion++;
      }
    }
  });

  return countedInversion;
}

// O(N log(n)) Time & Space Complexity
function countInversionsII(nums: number[]): number {
  let inversionCount = 0;

  function mergeSort(nums: number[]): number[] {
    if (nums.length <= 1) return nums;

    const mid = Math.floor(nums.length / 2);
    const leftNums = nums.slice(0, mid);
    const rightNums = nums.slice(mid);

    return merge(mergeSort(leftNums), mergeSort(rightNums));
  }

  function merge(leftNums: number[], rightNums: number[]): number[] {
    const sortedArray: number[] = [];
    let i = 0,
      j = 0;

    while (i < leftNums.length && j < rightNums.length) {
      if (leftNums[i] > rightNums[j]) {
        inversionCount += leftNums.length - i;
        sortedArray.push(rightNums[j]);
        j++;
      } else {
        sortedArray.push(leftNums[i]);
        i++;
      }
    }

    while (i < leftNums.length) {
      sortedArray.push(leftNums[i]);
      i++;
    }

    while (j < rightNums.length) {
      sortedArray.push(rightNums[j]);
      j++;
    }

    return sortedArray;
  }

  mergeSort(nums);
  return inversionCount;
}

console.log(countInversions([2, 3, 3, 1, 9, 5, 6])); // Output: 5
