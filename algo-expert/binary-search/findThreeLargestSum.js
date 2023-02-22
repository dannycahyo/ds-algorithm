/*

  Write a function that takes in an array of at least three integers and,
  without sorting the input array, returns a sorted array of the three largest
  integers in the input array.

  The function should return duplicate integers if necessary; for example, it
  should return [10, 10, 12]  for an input array of [10, 5, 9, 10, 12]

  Sample the input array
   [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
  Sample the output array
  [18, 141, 541]

*/

function findThreeLargestSum(array) {
  const threeLargestNum = [null, null, null];

  array.forEach((num) => {
    if (threeLargestNum[2] === null || num > threeLargestNum[2]) {
      shiftAndUpdate(threeLargestNum, num, 2);
    } else if (threeLargestNum[1] === null || num > threeLargestNum[1]) {
      shiftAndUpdate(threeLargestNum, num, 1);
    } else if (threeLargestNum[0] === null || num > threeLargestNum[0]) {
      shiftAndUpdate(threeLargestNum, num, 0);
    }
  });

  return threeLargestNum;
}

function shiftAndUpdate(array, num, idx) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      array[i] = num;
    } else {
      array[i] = array[i + 1];
    }
  }
}

console.log(findThreeLargestSum([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]));
