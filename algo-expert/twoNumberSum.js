/*
The first input is an array => [3,5,-4,8,11,1,-1,6]
Target number => 10

Find the two number => [-1, 11]
*/

// Brute Force
const twoNumberSum = (array, targetNumber) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const firstNumber = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondNumber = array[j];
      const potentialNumber = firstNumber + secondNumber;

      if (potentialNumber === targetNumber) {
        result.push(firstNumber, secondNumber);
      }
    }
  }

  return result;
};

// console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

// Hash Map
const twoNumberSum2 = (array, targetNumber) => {
  const map = {};

  for (const num of array) {
    const potentialMatch = targetNumber - num;

    if (potentialMatch in map) {
      return [potentialMatch, num];
    } else {
      map[num] = true;
    }
  }

  return [];
};

console.log(twoNumberSum2([3, 11, 5, -1, -4, 8, 1, 6], 10));

// Pointer
const twoNumberSum3 = (array, targetNumber) => {
  let left = 0;
  let right = array.length - 1;

  const copiedArray = array.sort((a, b) => a - b);

  while (left < right) {
    if (copiedArray[left] + copiedArray[right] > targetNumber) {
      right--;
    } else if (copiedArray[left] + copiedArray[right] < targetNumber) {
      left++;
    } else {
      return [copiedArray[left], copiedArray[right]];
    }
  }

  return [];
};

console.log(twoNumberSum3([3, 11, 5, -1, -4, 8, 1, 6], 10));
