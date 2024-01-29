/*


Move Element To End
You're given an array of integers and an integer. 
Write a function that moves all instances of that integer
in the array to the end of the array and returns the array.

** Sample Input **
array = [2, 1, 2, 2, 2, 3, 4, 2]
toMove = 2

** Sample Output ** 
[1, 3, 4, 2, 2, 2, 2, 2] 


Competitive Programming
*/
function swap(array, left, right) {
  [array[left], array[right]] = [array[right], array[left]];
}

function moveElementToEnd(array, toMove) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    while (left < right && array[right] === toMove) {
      right--;
    }
    if (array[left] === toMove) {
      swap(array, left, right);
    }
    left++;
  }

  return array;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));
