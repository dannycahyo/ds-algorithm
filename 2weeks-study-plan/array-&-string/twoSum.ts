/*
Examples:

Input: nums = [2,11,15,7], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,2,4], target = 6
Output: [1,2]

Input: nums = [3,3], target = 6
Output: [0,1]
*/

// Brute Force O(1) Space & O(N) Time Complexity
function twoSum(nums: number[], targetNum: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const firstNum = nums[i];
      const secondNum = nums[j];

      if (firstNum + secondNum === targetNum) {
        return [i, j];
      } else {
        continue;
      }
    }
  }

  return [0, 0];
}

console.log(twoSum([2, 7, 15, 9], 9));

// Binary Search & Sorting O(N) log N
function twoSum2(nums: number[], targetNum: number) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const leftNum = nums[left];
    const rightNum = nums[right];

    if (leftNum + rightNum < targetNum) {
      left++;
    } else if (leftNum + rightNum > targetNum) {
      right--;
    } else {
      return [left, right];
    }
  }

  return [0, 0];
}

console.log(twoSum2([2, 7, 15, 9], 9));

// Hash Map O(N) Time And Space
function twoSum3(nums: number[], targetNum: number) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const potentialNum = targetNum - num;
    if (map.has(potentialNum)) {
      return [map.get(potentialNum), i];
    } else {
      map.set(num, i);
    }
  }

  return [0, 0];
}

console.log(twoSum3([2, 7, 15, 9], 9));
