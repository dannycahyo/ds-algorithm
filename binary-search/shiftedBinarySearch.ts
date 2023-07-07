/*
Shifted Binary Search
Write a function that takes in a sorted array of distinct integers as well as a target integer. 
The caveat is that the integers in the array have been shifted by some amount; in other words, 
they've been moved to the left or to the right by one or more positions. For example, [1, 2, 3, 4] might have turned into [3, 4, 1, 2].

The function should use a variation of the Binary Search algorithm to determine
if the target integer is contained in the array and should return its index if it is, otherwise -1.

Sample Input
array = [45, 61, 71, 72, 73, 0, 1, 21, 33, 37]

target = 33
Sample Output
8
*/
function shiftedBinarySearch(array: number[], target: number) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const leftNum = array[left];
    const rightNum = array[right];
    const midNum = array[middle];

    if (target === midNum) {
      return middle;
    } else if (leftNum <= midNum) {
      if (target <= midNum && target >= leftNum) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      if (target > midNum && target <= rightNum) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  return -1;
}

console.log(shiftedBinarySearch([45, 61, 71, 72, 73, 0, 1, 21, 33, 37], 33));
