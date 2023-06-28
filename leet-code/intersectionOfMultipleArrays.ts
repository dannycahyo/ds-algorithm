/*











Given a 2D integer array nums where nums[i] is a non-empty 
array of distinct positive integers, 
return the list of integers that 
are present in each array of nums 
sorted in ascending order.

Example:

Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
Output: [3,4]
Explanation: 
The only integers present in each of nums[0] 
= [3,1,2,4,5], nums[1] = [1,2,3,4], 
and nums[2] = [3,4,5,6] are 3 and 4, 
so we return [3,4].


Input: nums = [[1,2,3],[4,5,6]]
Output: []
Explanation: 
There does not exist any integer present both in nums[0] and nums[1], so we return an empty list [].
*/

// LEET CODE CODING INTERVIEW QUESTION

/*
Approach => Hash Map
{
    3: 3,
    1: 2,
    2: 2,
    4: 3,
    5: 2,
    6: 1
}
*/

function intersectionOfMultipleArrays(nums: number[][]): number[] {
  const hashMap = new Map();
  const result: number[] = [];

  nums.forEach((arrayOfNum) => {
    for (const num of arrayOfNum) {
      if (hashMap.has(num)) {
        hashMap.set(num, hashMap.get(num) + 1);
      } else {
        hashMap.set(num, 1);
      }
    }
  });

  for (const [key, value] of hashMap) {
    if (value === nums.length) {
      result.push(key);
    }
  }

  return result.sort((a, b) => a - b);
}

// EXPECTED => [10,12,13,27,45]
console.log(
  intersectionOfMultipleArrays([
    [7, 34, 45, 10, 12, 27, 13],
    [27, 21, 45, 10, 12, 13],
  ])
);
