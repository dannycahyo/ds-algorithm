function smallestDifference(arrayOne, arrayTwo) {
  let idxOne = 0;
  let idxTwo = 0;

  let currentDifference = 0;
  let smallest = Infinity;
  let pairs = [];

  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    const firstNum = arrayOne[idxOne];
    const secondNum = arrayTwo[idxTwo];

    const diff = Math.abs(firstNum - secondNum);

    if (firstNum < secondNum) {
      currentDifference = diff;
      idxOne++;
    } else if (secondNum > firstNum) {
      currentDifference = diff;
      idxTwo++;
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

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
