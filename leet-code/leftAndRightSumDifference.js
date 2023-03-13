/*
Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

answer.length == nums.length.
answer[i] = |leftSum[i] - rightSum[i]|.
Where:

leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
Return the array answer.

Example: 

Input: nums = [10,4,8,3]
Output: [15,1,11,22]
Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].

Input: nums = [1]
Output: [0]
Explanation: The array leftSum is [0] and the array rightSum is [0].
The array answer is [|0 - 0|] = [0].
*/

function leftRigthDifference(nums) {
  if (nums.length === 1) return [0];

  const arrayLeftSum = nums.reduce(
    (acc, curr) => {
      if (acc.length === 1) {
        acc.push(curr);
        return acc;
      }
      acc.push(acc[acc.length - 1] + curr);
      return acc;
    },
    [0]
  );

  arrayLeftSum.pop();

  const arrayRightSum = nums.reduceRight(
    (acc, curr) => {
      acc.unshift(acc[0] + curr);
      return acc;
    },
    [0]
  );
  arrayRightSum.shift();

  const difference = arrayLeftSum.map((left, index) => {
    return Math.abs(left - arrayRightSum[index]);
  });

  return difference;
}

console.log(leftRigthDifference([10, 4, 8, 3]));
