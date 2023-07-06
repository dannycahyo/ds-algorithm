/*
Difficulty:
Category:
Searching
Successful Submissions:
57,555+
Find Three Largest Numbers
Write a function that takes in an array of at least three integers and, without sorting the input array, 
returns a sorted array of the three largest integers in the input array.

The function should return duplicate integers if necessary; for example, 
it should return [10, 10, 12] for an input array of [10, 5, 9, 10, 12].

Sample Input
    array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
Sample Output
    [18, 141, 541]
*/

const shiftAndUpdate = (
  array: number[],
  num: number,
  currentIdx: number
): void => {
  for (let i = 0; i < currentIdx + 1; i++) {
    if (i === currentIdx) {
      array[i] = num;
    } else {
      array[i] = array[i + 1];
    }
  }
};

function findThreeLargestNumbers(array: number[]) {
  const threeLargestNum = [-Infinity, -Infinity, -Infinity];

  array.forEach((num) => {
    if (num > threeLargestNum[2]) {
      shiftAndUpdate(threeLargestNum, num, 2);
    } else if (num > threeLargestNum[1]) {
      shiftAndUpdate(threeLargestNum, num, 1);
    } else if (num > threeLargestNum[0]) {
      shiftAndUpdate(threeLargestNum, num, 0);
    }
  });

  return threeLargestNum;
}

function findThreeLargestNumbersII(array: number[]) {
  let small = -Infinity;
  let mid = -Infinity;
  let large = -Infinity;

  array.forEach((num) => {
    if (num >= small) {
      if (num <= mid) {
        small = num;
      } else if (num <= large) {
        small = mid;
        mid = num;
      } else {
        small = mid;
        mid = large;
        large = num;
      }
    }
  });

  return [small, mid, large];
}

console.log(
  findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
);
