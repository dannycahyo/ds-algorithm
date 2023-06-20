/*
Given an array of integers nums containing n + 1 integers 
where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, 
return this repeated number.

You must solve the problem without modifying the 
array nums and uses only constant extra space.

FIND DUPLICATE NUMBER

EXAMPLE:

Input: nums = [1,3,4,2,2]
Output: 2

Input: nums = [3,1,3,4,2]
Output: 3
*/

// Sorting =>
// Time Complexity => O(n log n) + O(n)
// O(n log n)
function findDuplicateNumber(nums: number[]): number {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const nextNum = nums[i + 1];

    if (num === nextNum) {
      return num;
    }
  }

  return -1;
}

// HASHMAP =>
// Time & Space Complexity => O(n)
function findDuplicateNumber2(nums: number[]): number {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!map.has(num)) {
      map.set(num, true);
    } else {
      return num;
    }
  }

  return -1;
}

// TORTOISE AND HARE
function findDuplicateNumber3(nums: number[]): number {
  let tortoise = nums[0];
  let hare = nums[0];

  do {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
  } while (tortoise !== hare);

  tortoise = nums[0];

  while (tortoise !== hare) {
    tortoise = nums[tortoise];
    hare = nums[hare];
  }

  return tortoise;
}

console.log(findDuplicateNumber3([1, 3, 4, 2, 2]));
