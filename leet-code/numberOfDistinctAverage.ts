/*
You are given a 0-indexed integer array nums of even length.

As long as nums is not empty, you must repetitively:

Find the minimum number in nums and remove it.
Find the maximum number in nums and remove it.
Calculate the average of the two removed numbers.
The average of two numbers a and b is (a + b) / 2.

For example, the average of 2 and 3 is (2 + 3) / 2 = 2.5.
Return the number of distinct averages calculated using 
the above process.

Note that when there is a tie for a minimum or maximum number, 
any can be removed.

COUNT THE DISTINCT AVERAGE

EXAMPLE =>

Input: nums = [4,1,4,0,3,5]
Output: 2
Explanation:
1. Remove 0 and 5, and the average is (0 + 5) / 2 = 2.5. 
Now, nums = [4,1,4,3].
2. Remove 1 and 4. The average is (1 + 4) / 2 = 2.5, and 
nums = [4,3].
3. Remove 3 and 4, and the average is (3 + 4) / 2 = 3.5.
Since there are 2 distinct numbers among 2.5, 2.5, and 3.5, 
we return 2.

Input: nums = [1,100]
Output: 1
Explanation:
There is only one average to be calculated 
after removing 1 and 100, so we return 1.

PSEUODE CODE:
- Bikin Hash Map (SET) untuk menyimpan nilai rata2 nya
- Looping ke nums nya
    - Temukan nilai minimal
    - Temukan nilai maksimal
    - Remove nilai maksimal & minimal nya dari array
    - Hasil perhitungan rata2 nya aku perlu taruh di Hash Map
- Return Length Hash Map (SET) 
*/

function distinctAverages(nums: number[]): number {
  if (nums.length == 2) return 1;
  const set = new Set();

  for (let i = nums.length / 2; i > 0; i--) {
    const minimumNum = Math.min(...nums);
    const maximumNum = Math.max(...nums);
    nums.splice(nums.indexOf(minimumNum), 1);
    nums.splice(nums.indexOf(maximumNum), 1);

    const averageNum = (minimumNum + maximumNum) / 2;
    set.add(averageNum);
  }

  return set.size;
}

var distinctAverages2 = function (nums: any): number {
  if (nums.length == 2) return 1;
  nums = nums.sort((a, b) => a - b); // Log N
  nums;
  var hash = {};
  while (nums.length > 0) {
    // N / 2
    hash[(nums.shift() + nums.pop()) / 2] = 0;
  }

  return Object.keys(hash).length;
};

console.log(distinctAverages([4, 1, 4, 0, 3, 5]));
