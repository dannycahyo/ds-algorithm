/*
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
*/

var sortedSquares = function (nums) {
  const newNums = [];

  nums.forEach((num) => {
    newNums.push(num * num);
  });

  return newNums.sort((a, b) => a - b);
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));

const sortedSquares2 = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  let idx = end;
  let sortedArray = [];

  while (idx > -1) {
    if (Math.abs(nums[start]) > Math.abs(nums[end])) {
      sortedArray[idx] = nums[start] * nums[start];
      idx--;
      start++;
    } else {
      sortedArray[idx] = nums[end] * nums[end];
      idx--;
      end--;
    }
  }

  return sortedArray;
};
