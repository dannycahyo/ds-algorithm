/*







LEET CODE QUESTION

TITLE  => Three Sum
Complexity => Medium

RELATED  => TRIPLETNUMSAY, SORTING
https://leetcode.com/problems/3sum/

TEMUKAN Penjumlahan 3 number yang hasilnya => 0

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

*/

function threeNumberSum(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b);
  nums;
  const tripletNums: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    i;
    if (nums[i] !== nums[i - 1]) {
      var left = i + 1;
      left;
      var right = nums.length - 1;
      right;
      while (left < right) {
        var sum = nums[i] + nums[left] + nums[right];
        if (sum < 0) {
          left++;
        } else if (sum > 0) {
          right--;
        } else if (sum == 0) {
          tripletNums.push([nums[i], nums[left], nums[right]]);
          while (nums[left] == nums[++left]) {}
          while (nums[right] == nums[--right]) {}
        }
      }
    }
  }
  return tripletNums;
}

console.log(threeNumberSum([-1, 0, 1, 2, -1, -4]));
