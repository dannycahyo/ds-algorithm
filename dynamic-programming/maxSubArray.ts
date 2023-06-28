/*
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
*/

var maxSubArrayHelper = function (left: number, right: number, nums: number[]) {
  if (left > right) {
    return -Infinity;
  }

  var mid = Math.floor((left + right) / 2);

  var leftSum = 0,
    rightSum = 0,
    prefSum = 0;
  for (var i = mid - 1; i >= left; i--) {
    prefSum += nums[i];
    leftSum = Math.max(leftSum, prefSum);
  }
  prefSum = 0;
  for (var i = mid + 1; i <= right; i++) {
    prefSum += nums[i];
    rightSum = Math.max(rightSum, prefSum);
  }

  var curSum = nums[mid] + leftSum + rightSum;
  var leftHalfSum = maxSubArrayHelper(left, mid - 1, nums);
  var rightHalfSum = maxSubArrayHelper(mid + 1, right, nums);

  return Math.max(curSum, leftHalfSum, rightHalfSum);
};

var maxSubArray = function (nums: number[]) {
  return maxSubArrayHelper(0, nums.length - 1, nums);
};

var nums2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums2)); // Output: 6
