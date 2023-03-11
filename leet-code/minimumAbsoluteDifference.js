/*
Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr

Example:
Input: arr = [4,2,1,3]
Output: [[1,2],[2,3],[3,4]]
Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

Input: arr = [1,3,6,10,15]
Output: [[1,3]]

Input: arr = [3,8,-10,23,19,-4,-14,27]
Output: [[-14,-10],[19,23],[23,27]]

Pseudo Code:
    - Get the minimum absolute difference
    - Sorting the array
    - Making two pointers start with left is 0 and right is 1
    - Compare left and right
    - If left and right match the minimum absolute difference, move left and right and push it to the new array
    - If left and right less than the minimum absolute difference, move the left 
    - If left and right greater than the minimum absolute difference, move the right 
*/

function getAbsoluteDifference(arr) {
  let minDiff = Infinity;
  arr.reduce((acc, curr) => {
    const diff = Math.abs(acc - curr);
    if (diff < minDiff) {
      minDiff = diff;
    }
    return curr;
  });
  return minDiff;
}

function minimumAbsoluteDifference(arr) {
  const result = [];

  arr.sort((a, b) => a - b);
  let minDiff = getAbsoluteDifference(arr);

  arr.reduce((acc, curr) => {
    const diff = Math.abs(acc - curr);
    if (diff === minDiff) {
      result.push([acc, curr]);
    }
    return curr;
  });

  return result;
}

console.log(minimumAbsoluteDifference([3, 8, -10, 23, 19, -4, -14, 27]));
