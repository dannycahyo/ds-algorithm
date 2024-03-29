// ====== Static Array ======

/*
Increasing an array by one or decreasing by one 
requires copying the entire array over to the new sized array.
*/

const resizeArray = (arr: number[], newSize: number): number[] => {
  const newArr = new Array(newSize).fill(0);
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i];
  }
  return newArr;
};

// Let say we want to add a new element to the array
const pushElement = (arr: number[], element: number): number[] => {
  const newSize = arr.length + 1;
  const newArr = resizeArray(arr, newSize);
  newArr[arr.length] = element;
  return newArr;
};

// How about removing an element from the array
const popElement = (arr: number[]): number[] => {
  const newSize = arr.length - 1;
  const newArr = resizeArray(arr, newSize);
  return newArr;
};

const arr = [1, 2, 3, 4, 5];

console.log(pushElement(arr, 6)); // [1, 2, 3, 4, 5, 6]
console.log(popElement(arr)); // [1, 2, 3]

// How about insertion and deletion at a specific index?

// Insert element at index
const insertElement = (
  arr: number[],
  index: number,
  element: number,
): number[] => {
  const newSize = arr.length + 1;
  const newArr = resizeArray(arr, newSize);
  for (let i = newSize - 1; i > index; i--) {
    newArr[i] = newArr[i - 1];
  }

  newArr[index] = element;
  return newArr;
};

// Delete element at index
const deleteElement = (arr: number[], index: number): number[] => {
  const newSize = arr.length - 1;
  const newArr = new Array(newSize).fill(0);

  for (let i = 0; i < newSize; i++) {
    if (i < index) {
      newArr[i] = arr[i];
    } else {
      newArr[i] = arr[i + 1];
    }
  }

  return newArr;
};

console.log(insertElement(arr, 2, 100)); // [1, 2, 100, 3, 4, 5]
console.log(deleteElement(arr, 2)); // [1, 2, 3, 4, 5]
