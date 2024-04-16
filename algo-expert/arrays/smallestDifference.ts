/*
Write a function that takes in two non-empty arrays of integers, 
finds the pair of numbers (one from each array) whose absolute difference is closest to zero, 
and returns an array containing these two numbers, with the number from the first array in the first position.

Note that the absolute difference of two integers is the distance between them on the real number line. 
For example, the absolute difference of -5 and 5 is 10, and the absolute difference of -5 and -4 is 1.

You ca`n assume that there will only be one pair of numbers with the smallest difference.

Sample Input

arrayOne = [-1, 5, 10, 20, 28, 3]
arrayTwo = [26, 134, 135, 15, 17]

Sample Output
[28, 26]
*/

// Time: O(nlog(n) + mlog(m)) | Space: O(1)
// Two Pointer Approach
export function smallestDifference(
  arrayOne: number[],
  arrayTwo: number[],
) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let idxFirstArray = 0;
  let idxSecondArray = 0;

  let pairs: number[] = [];
  let currentDifference = 0;
  let smallest = Infinity;

  while (
    idxFirstArray < arrayOne.length &&
    idxSecondArray < arrayTwo.length
  ) {
    const firstNum = arrayOne[idxFirstArray];
    const secondNum = arrayTwo[idxSecondArray];

    if (firstNum < secondNum) {
      currentDifference = secondNum - firstNum;
      idxFirstArray++;
    } else if (secondNum < firstNum) {
      currentDifference = firstNum - secondNum;
      idxSecondArray++;
    } else {
      return [firstNum, secondNum];
    }

    if (smallest > currentDifference) {
      smallest = currentDifference;
      pairs = [firstNum, secondNum];
    }
  }

  return pairs;
}

const arrayOne = [-1, 5, 10, 20, 28, 3];
const arrayTwo = [26, 134, 135, 15, 17];

console.log(smallestDifference(arrayOne, arrayTwo)); // [28, 26]
