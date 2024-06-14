/*
Write a function that takes in a sorted array of integers as well as a target integer. 
The function should use a variation of the Binary Search algorithm to find a range of indices 
in between which the target number is contained in the array and should return this range in the form of an array.

The first number in the output array should represent the first index at which the target number is located, 
while the second number should represent the last index at which the target number is located. 
The function should return [-1, -1] if the integer isn't contained in the array.

Sample Input:

array = [0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73]
target = 45

Sample Output:
[4, 9]
*/

function searchForRange(array: number[], targetNumber: number) {
  const finalRange: number[] = [-1, -1];
  let left = 0;
  let right = array.length - 1;

  // Go to the left side
  alterBinarySearch(
    array,
    targetNumber,
    left,
    right,
    finalRange,
    true,
  );

  // Go to the right side
  alterBinarySearch(
    array,
    targetNumber,
    left,
    right,
    finalRange,
    false,
  );

  return finalRange;
}

function alterBinarySearch(
  array: number[],
  targetNum: number,
  left: number,
  right: number,
  finalRange: number[],
  goLeft: boolean,
) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] < targetNum) {
      left = mid + 1;
    } else if (array[mid] > targetNum) {
      right = mid - 1;
    } else {
      if (goLeft) {
        if (mid === 0 || array[mid - 1] !== targetNum) {
          finalRange[0] = mid;
          return;
        } else {
          right = mid - 1;
        }
      } else {
        if (
          mid === array.length - 1 ||
          array[mid + 1] !== targetNum
        ) {
          finalRange[1] = mid;
          return;
        } else {
          left = mid + 1;
        }
      }
    }
  }
}

const array = [0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73];
const targetNumber = 45;

console.log(searchForRange(array, targetNumber));
