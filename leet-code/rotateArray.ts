/*


========  MEDIUM  =================
Given an integer array nums, rotate the array 
to the right by k steps, where k is non-negative.

============= EXAMPLE ==============================
ROTATE ARRAY TO THE RIGHT

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

// PSEUDO CODE =========
- Init counter to determine when to stop the looping
- Make a copy of the original array 
- Looping through the array in reverse order
    - Pop the last element
    - Insert the last element into the first position
- 

*/

// https://leetcode.com/problems/rotate-array/description/

// INI SOLUTION FROM TIO
// function rotateArray(nums: number[], k: number) {
//   let rotationOffset = k % nums.length;

//   const tail = nums.splice(nums.length - rotationOffset);

//   nums.unshift(...tail);
//   console.log(nums);
// }

// function rotateArray(nums: number[], k: number) {
//   const nLength = nums.length;
//   const rotate = k % nLength;

//   if (rotate === 0) return;

//   const cutPoint = nLength - rotate;

//   nums.unshift(...nums.splice(cutPoint, rotate));
// }

var rotateArray = function (nums: number[], k: number) {
  var i = 0,
    j = 0,
    count = 0,
    carry: number;
  while (count < nums.length) {
    i = j;
    carry = nums[i];
    do {
      i = (i + k) % nums.length;
      [nums[i], carry] = [carry, nums[i]];
      count++;
    } while (i !== j);
    j++;
  }
};

// [5,6,7,1,2,3,4]
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 8));

//   const firstArray = nums.slice(0, k + 1);
//   const secondArray = nums.slice(k + 1, nums.length )
//   return [...secondArray, ...firstArray]

// function rotateArray(nums: number[], k: number) {
//   let counter = 0;
//   const rotateArray = [...nums];

//   for (let i = rotateArray.length - 1; i > 0; i--) {
//     if (counter !== k) {
//       nums.unshift(rotateArray[i]);
//       nums.pop();
//       counter++;
//     } else {
//       break;
//     }
//   }
// }
