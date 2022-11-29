/*
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

[-1,-100,3,99] 2

[3,99,-1,-100]
*/

var rotate = function (nums, k) {
  let counter = 0;
  let rotatedArray = [...nums];

  for (let i = nums.length - 1; i > 1; i--) {
    if (counter !== k) {
      rotatedArray.unshift(nums[i]);
      rotatedArray.pop();
      counter++;
    } else {
      break;
    }
  }

  return rotatedArray;
};

const rotate2 = (nums, k) => {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }

  return nums;
};

const rotate3 = (nums, k) => {
  for (let i = nums.length - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
  }

  nums;

  for (let j = k - 1; j >= 0; j--) {
    nums[j] = nums.pop();
  }

  return nums;
};

console.log(rotate3([-1, -100, 3, 99], 2));
