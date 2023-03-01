/*
You are given a 0-indexed integer array nums whose length is a power of 2.

Apply the following algorithm on nums:

Let n be the length of nums. If n == 1, end the process. Otherwise, create a new 0-indexed integer array newNums of length n / 2.
For every even index i where 0 <= i < n / 2, assign the value of newNums[i] as min(nums[2 * i], nums[2 * i + 1]).
For every odd index i where 0 <= i < n / 2, assign the value of newNums[i] as max(nums[2 * i], nums[2 * i + 1]).
Replace the array nums with newNums.
Repeat the entire process starting from step 1.
Return the last number that remains in nums after applying the algorithm.

Input: nums = [1,3,5,2,4,8,2,2]
Output: 1
Explanation: The following arrays are the results of applying the algorithm repeatedly.
First: nums = [1,5,4,2]
Second: nums = [1,4]
Third: nums = [1]
1 is the last remaining number, so we return 1.

Input: nums = [3]
Output: 3
Explanation: 3 is already the last remaining number, so we return 3.
*/

function minMaxGame(nums) {
  if (nums.length === 1) return nums[0];

  const newArray = [];
  let counter = 0;

  for (let i = 0; i < nums.length; i += 2) {
    const firstNum = nums[i];
    const secondNum = nums[i + 1];
    if (counter % 2 === 0) {
      newArray.push(Math.min(...[firstNum, secondNum]));
    } else {
      newArray.push(Math.max(...[firstNum, secondNum]));
    }
    counter++;
  }

  return minMaxGame(newArray);
}

// In Place
var minMaxGame2 = function (nums) {
  while (nums.length > 1) {
    let half = nums.length / 2;
    for (let i = 0; i < half; i++) {
      nums[i] =
        i % 2 === 0
          ? Math.min(nums[2 * i], nums[2 * i + 1])
          : Math.max(nums[2 * i], nums[2 * i + 1]);
    }

    nums.length = half;
  }

  return nums[0];
};

// console.log(minMaxGame2([1, 3, 5, 2, 4, 8, 2, 2]));
