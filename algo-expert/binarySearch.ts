/*

  Write a function that takes in a sorted array of integers as well as a target
  integer. The function should use the Binary Search algorithm to determine if
  the target integer is contained in the array and should return its index if it
  is, otherwise 

array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
target = 33;

*/

// O(n) Time Complexity and O(1) space complexity
function binarySearch(array: number[], target: number): number {
  let selectedIndex = -1;

  array.forEach((num, index) => {
    if (num === target) {
      selectedIndex = index;
    }
  });

  return selectedIndex;
}

//
function binarySearch2(array: number[], target: number): number {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middleIndex = Math.floor((left + right) / 2);
    const potentialMatch = array[middleIndex];
    if (target === potentialMatch) {
      return middleIndex;
    } else if (target < potentialMatch) {
      right = middleIndex - 1;
    } else {
      left = middleIndex + 1;
    }
  }

  return -1;
}

console.log(binarySearch2([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33));
