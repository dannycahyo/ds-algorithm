/*




Temukan sebuah nilai maksimal dari sebuah array of numbers

Wajib gunakan paradigma divide and conqueror

For example:

Nums =>
[1,2,5,1,-4,20,4,16,87,7,10]

Max Number =>
87

// USER NAME DISCORD => Danny Dwi Cahyono#3200
*/

// O(n) time complexity
// Big O notation => Skenario Terburuk dari Algorithms
function findMaxNumber(nums: number[]): number {
  //   const maxNum = Math.max(...nums);
  //   return maxNum;
  let maxNum = 0;
  nums.forEach((num) => {
    maxNum = Math.max(maxNum, num);
  });

  return maxNum;
}

// function divideAndMax(nums: number[], start: number, end: number) {
//   const middle = Math.floor((start + end) / 2);

//   if (nums[start] === nums[end]) {
//     return nums[end];
//   }

//   const leftMaxNum = divideAndMax(nums, start, middle);
//   //   const middleMaxNum = Math.max(...nums.slice(start, end + 1));
//   const rightMaxNum = divideAndMax(nums, middle + 1, end);

//   return Math.max(leftMaxNum, rightMaxNum);
// }

// // Use Divide and Conqueror
// function findMaxNumber2(nums: number[]): number {
//   const start = 0;
//   const end = nums.length - 1;
//   const maxNum = divideAndMax(nums, start, end);
//   return maxNum;
// }

// Nums =>
// [1, 6, 1, 4, 5]

// TOTAL SUM =>
// 17

function divideAndSum(nums: number[], start: number, end: number) {
  if (Math.abs(start - end) <= 1) {
    return nums[start] + nums[end];
  }
  const middle = Math.floor((start + end) / 2);

  const totalLeftSum = divideAndSum(nums, start, middle - 1);
  const totalRightSum = divideAndSum(nums, middle + 1, end);

  return totalLeftSum + totalRightSum + nums[middle];
}

// https://discord.gg/CQ9BCUrVuQ
// Use Divide and Conqueror
function findMaxNumber2(nums: number[]) {
  const start = 0;
  const end = nums.length - 1;
  const totalSum = divideAndSum(nums, start, end);
  return totalSum;
}

console.log(findMaxNumber2([1, 6, 1, 4]));
