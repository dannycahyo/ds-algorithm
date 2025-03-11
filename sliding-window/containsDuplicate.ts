/*
Given an integer array nums and an integer k, 
return true if there are two distinct indices i and j in the array
such that nums[i] == nums[j] and abs(i - j) <= k.

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
*/

// Time Complexity => O(n*k)
export function containsNearbyDuplicate(
  nums: number[],
  k: number,
): boolean {
  if (nums.length < k || nums.length === 0) return false;

  let isValidDuplicate = false;
  let left = 0;
  let right = k + 1;

  while (right <= nums.length) {
    const currentArrayWindow = nums.slice(left, right);
    if (isContainDuplicate(currentArrayWindow)) {
      return true;
    } else {
      left++;
      right++;
    }
  }

  return isValidDuplicate;
}

function isContainDuplicate(nums: number[]): boolean {
  return new Set([...nums]).size !== nums.length;
}

// Time Complexity => O(n)

export function containsNearbyDuplicateII(
  nums: number[],
  k: number,
): boolean {
  const indexMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (indexMap.has(nums[i]) && i - indexMap.get(nums[i])! <= k) {
      return true;
    }

    indexMap.set(nums[i], i);
  }

  return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicateII([1, 2, 3, 1], 3));
