// Brute Force Approach: Time Complexity => O(N^2), Space Complexity => O(1)
function zeroSumSubArray(nums) {
  let isZeroSum = false;

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    let currentSum = currentNum;

    if (currentNum === 0) {
      isZeroSum = true;
      break;
    }

    for (let j = i + 1; j < nums.length; j++) {
      const subNum = nums[j];
      currentSum += subNum;

      if (currentSum === 0) {
        isZeroSum = true;
        break;
      }
    }
  }

  return isZeroSum;
}

// Optimize Approach: Time Complexity => O(N), Space Complexity => O(N)
function zeroSumSubArray2(nums) {
  const sums = new Set([0]);
  let currentSum = 0;

  for (const num of nums) {
    currentSum += num;
    if (sums.has(currentSum)) {
      return true;
    }
    sums.add(currentSum);
  }

  return false;
}

console.log(zeroSumSubArray2([1, 2, 3]));
