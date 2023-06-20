/*





Given an array arr of positive integers sorted in 
a strictly increasing order, and an integer k.

Return the kth positive integer that is 
missing from this array.

LEET CODE QUESTION =>
https://leetcode.com/problems/kth-missing-positive-number/
MISSING POSITIVE NUMBER

EXAMPLES =>

Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive 
integers are [1,5,6,8,9,10,12,13,...]. 
The 5th missing positive integer is 9.

Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are
[5,6,7,...]. The 2nd missing positive integer is 6.

*/

function missingPositiveNum(nums: number[], k: number): number {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);

    // value - index  -1 => untuk tau ada
    // berapa banyak missing number
    const countMissingNumber = nums[mid] - 1 - mid;
    // k - 3 + value => u/ dapet missing number
    // missingNumber = k - countMissingNumber + nums[mid];

    if (countMissingNumber < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left + k;
}

// var findKthPositive = function (arr, k) {
//   var l = 0,
//     r = arr.length,
//     m;
//   while (l < r) {
//     m = Math.floor((l + r) / 2);
//     if (arr[m] - 1 - m < k) l = m + 1;
//     else r = m;
//   }
//   return l + k;
// };

console.log(missingPositiveNum([2, 3, 4, 7, 11], 5));
