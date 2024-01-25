/*
You're given an unordered list of unique integers nums in the range [1, n], where n represents the length of nums + 2. 
This means that two numbers in this range are missing from the list.

Write a function that takes in this list and returns a new list with the two missing numbers, sorted numerically.

Sample Input

nums = [1, 4, 3]

Sample Output
[2, 5]  // n
*/

function findMissingNumber(nums: number[]): number[] {
  const numsSet = new Set(nums);
  const misssingNumber: number[] = [];

  for (let i = 1; i < nums.length + 3; i++) {
    if (!numsSet.has(i)) {
      misssingNumber.push(i);
    }
  }

  return misssingNumber;
}

console.log(findMissingNumber([1, 4, 3]));
