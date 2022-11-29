/*
Example:
[1,2,3,4,5,6,7,8,9]

Output:
[1,4,9,16,25,36,49,64,81]
*/

function sortedSquaredArray(nums) {
  const result = [];

  nums.forEach((num) => {
    result.push(num * num);
  });

  return result.sort((a, b) => a - b);
}

function sortedSquaredArray2(nums) {
  let left = 0;
  let right = nums.length - 1;
  let finalArray = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    const firstValue = nums[left];
    const secondValue = nums[right];
    if (Math.abs(firstValue) > Math.abs(secondValue)) {
      finalArray[i] = firstValue * firstValue;
      left++;
    } else {
      finalArray[i] = secondValue * secondValue;
      right--;
    }
  }

  return finalArray;
}

console.log(sortedSquaredArray2([1, 2, 3, 4, 5, 6, 7, 8, 9]));
