/*
You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. 
A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

Example 1 =>
Input: nums = [0,1,4,6,7,10], diff = 3
Output: 2
Explanation:
(1, 2, 4) is an arithmetic triplet because both 7 - 4 == 3 and 4 - 1 == 3.
(2, 4, 5) is an arithmetic triplet because both 10 - 7 == 3 and 7 - 4 == 3. 

Example 2 =>
Input: nums = [4,5,6,7,8,9], diff = 2
Output: 2
Explanation:
(0, 2, 4) is an arithmetic triplet because both 8 - 6 == 2 and 6 - 4 == 2.
(1, 3, 5) is an arithmetic triplet because both 9 - 7 == 2 and 7 - 5 == 2.

Pseudo Code =================================
- 
*/

function numberOfArithmeticTriplets(nums, diff) {
  const set = new Set();
  let count = 0;
  for (let num of nums) {
    console.log(num - 2 * diff);
    if (set.has(num - diff) && set.has(num - 2 * diff)) count++;
    set.add(num);
  }
  return count;
  // const map = {};
  // let counter = 0;

  // for (const num of nums) {
  //   const potentialMatch = num - diff;
  //   potentialMatch;
  //   if (potentialMatch in map && num - 2 * diff) {
  //     counter++;
  //   } else {
  //     map[num] = true;
  //   }
  //   map;
  // }

  // return counter;
}

console.log(numberOfArithmeticTriplets([0, 1, 4, 6, 7, 10], 3));
