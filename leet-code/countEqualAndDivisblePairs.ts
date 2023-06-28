/*





Given a 0-indexed integer array nums of length n and an integer k, 
return the number of pairs (i, j) 
where 0 <= i < j < n, such that nums[i] == nums[j] 
and (i * j) is divisible by k.

Example:
Input: nums = [3,1,2,2,2,1,3], k = 2
Output: 4
Explanation:
There are 4 pairs that meet all the requirements:
- nums[0] == nums[6], and 0 * 6 == 0, which is divisible by 2.
- nums[2] == nums[3], and 2 * 3 == 6, which is divisible by 2.
- nums[2] == nums[4], and 2 * 4 == 8, which is divisible by 2.
- nums[3] == nums[4], and 3 * 4 == 12, which is divisible by 2.

Input: nums = [1,2,3,4], k = 1
Output: 0
Explanation: Since no value in nums is repeated, 
there are no pairs (i,j) that meet all the requirements.
*/

// function isValidPairs(
//   firstNumIdx: number,
//   secondNumIdx: number,
//   k: number
// ): boolean {
//   return (firstNumIdx * secondNumIdx) % k === 0;
// }

// function countEqualAndDivisiblePairs(nums: number[], k: number): number {
//   let totalPairs = 0;
//   const numMap = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];

//     if (numMap.has(num)) {
//       if (isValidPairs(i, numMap.get(num) + 1, k)) {
//         totalPairs++;
//       }
//       numMap.set(num, numMap.get(num) + 1);
//     } else {
//       numMap.set(num, i);
//     }
//   }

//   return totalPairs;
// }

function countEqualAndDivisiblePairs(nums: number[], k: number): number {
  let totalPairs = 0;
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (numMap.has(num)) {
      const indices = numMap.get(num);

      for (const idx of indices) {
        if ((i * idx) % k === 0) {
          totalPairs++;
        }
      }
      indices.push(i);
    } else {
      numMap.set(num, [i]);
    }
  }

  return totalPairs;
}

console.log(countEqualAndDivisiblePairs([3, 1, 2, 2, 2, 1, 3], 2)); // Output: 4
