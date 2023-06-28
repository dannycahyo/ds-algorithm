function maxSubSequenceSumRecursive(nums, i) {
  if (i === 0) {
    return nums[0];
  }

  const maxSumEndingAtPrevIndex = maxSubSequenceSumRecursive(nums, i - 1);
  const currentSum = Math.max(nums[i], maxSumEndingAtPrevIndex + nums[i]);

  return Math.max(maxSumEndingAtPrevIndex, currentSum);
}

function maxSubSequenceSum(nums) {
  if (nums.length === 0) {
    return 0;
  }

  return maxSubSequenceSumRecursive(nums, nums.length - 1);
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubSequenceSum(nums));
