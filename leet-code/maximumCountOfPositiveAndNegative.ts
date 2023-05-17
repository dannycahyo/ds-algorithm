/* 
Given an array nums sorted in non-decreasing order, 
return the maximum between the number of positive integers and the number of negative integers.

In other words, if the number of positive integers in nums 
is pos and the number of negative integers is neg, then 
return the maximum of pos and neg.
Note that 0 is neither positive nor negative.

============ EXAMPLE============

TUGAS =>
MEENGHITUNG JUMLAH NEGATIVE & POSTIVE NUMBERS
RETURN THE MAX VALUE BETWEEN THE TWO

0 Number gausah dihitiung.

Input: nums = [-2,-1,-1,1,2,3]
Output: 3
Explanation: There are 3 positive integers
and 3 negative integers. The maximum count among them is 3.

Input: nums = [-3,-2,-1,0,0,1,2]
Output: 3
Explanation: There are 2 positive integers 
and 3 negative integers. The maximum count among them is 3

Input: nums = [5,20,66,1314]
Output: 4
Explanation: There are 4 positive integers and 0 
negative integers. The maximum count among them is 4.

// ALGORITHM BINARY SEARCH O(n log n)

// LINEAR SEARCH O(n) time complexity
- Looping ke seluruhan array
- Bakal bikin kondisi untuk bedain negative sama positive
- Hitung jumlah negative sama positive
*/

// LINEAR SEARCH O(n) time complexity Space (O(1))
function maximumCount(nums: number[]): number {
  let countNegativeNum = 0;
  let countPositiveNum = 0;

  nums.forEach((num) => {
    if (num > 0) {
      countPositiveNum++;
    } else if (num < 0) {
      countNegativeNum++;
    }
  });

  return Math.max(countPositiveNum, countNegativeNum);
}

// ALGORITHM BINARY SEARCH O(n log n)
// TWO POINTERS
// FIND THE MIDLE INDEX
// MOVE THE POINTERS ACCORDING MIDDLE INDEX

function countNegativeNums(nums: number[]): number {
  if (nums[0] >= 0) return 0;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let middleIdx = Math.ceil((left + right) / 2);
    middleIdx;

    if (nums[middleIdx] < 0) {
      left = middleIdx;
    } else {
      right = middleIdx - 1;
    }
  }

  return left + 1;
}

function countPositiveNums(nums: number[]): number {
  if (nums[nums.length - 1] <= 0) return 0;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let middleIdx = Math.floor((left + right) / 2);

    if (nums[middleIdx] > 0) {
      right = middleIdx;
    } else {
      left = middleIdx + 1;
    }
  }

  return nums.length - left;
}

function maximumCount2(nums: number[]): number {
  const countNegativeNum = countNegativeNums(nums);
  countNegativeNum;
  const countPositiveNum = countPositiveNums(nums);

  return Math.max(countNegativeNum, countPositiveNum);
}

console.log(maximumCount2([0, -1, -1, 1, 2, 0]));
