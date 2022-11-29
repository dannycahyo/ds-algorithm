/*
You are given an integer array nums and an integer k. 
You want to find a subsequence of nums of length k that has the largest sum.

Return any such subsequence as an integer array of length k.

Input: nums = [2,1,3,3], k = 2
Output: [3,3]
Explanation:
The subsequence has the largest sum of 3 + 3 = 6.

Input: nums = [-1,-2,3,4], k = 3
Output: [-1,3,4]
Explanation: 
The subsequence has the largest sum of -1 + 3 + 4 = 6.

Input: nums = [3,4,3,3], k = 2
Output: [3,4]
Explanation:
The subsequence has the largest sum of 3 + 4 = 7. 
Another possible subsequence is [4, 3].

Pseudo Code 
*/

function sum(arrOfNums) {
  return arrOfNums.reduce((acc, cur) => acc + cur);
}

function findSubSequenceWithLengthK(nums, k) {
  const tempArray = [];
  const computedSubArray = [];

  for (let i = 0; i < nums.length; i++) {
    const subArray = nums.slice(i, i + k);
    tempArray.push(subArray);
  }

  for (let i = 0; i < tempArray.length; i++) {
    const subArray = tempArray[i];
    computedSubArray.push(sum(subArray));
  }

  const maxComputation = Math.max(...computedSubArray);

  const largestSumSubArray = computedSubArray.indexOf(maxComputation);

  return tempArray.find((arr, index) => index === largestSumSubArray);
}

function findSubSequenceWithLengthK2(nums, k) {
  let sortedArray = [...nums].sort((a, b) => b - a);
  let desiredValues = sortedArray.slice(0, k);
  let finalValues = [];

  for (let i = 0; i < nums.length; i++) {
    let index = desiredValues.indexOf(nums[i]);

    if (index != -1) {
      finalValues.push(nums[i]);
      desiredValues.splice(index, 1);
    }
  }

  return finalValues;
}

console.log(findSubSequenceWithLengthK2([1, 2, 6, 4, 5, 6], 3));
