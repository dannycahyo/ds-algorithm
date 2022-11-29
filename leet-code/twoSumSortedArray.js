/*
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3]

Your solution must use only constant extra space.

================================================================
Pseudo Code 

Solution => Two Pointer

- Looping through the array using while
- Compare the left and right
    - if sum of it < target => increment left
    - if sum of it > target => decrement right
    - if the sum equals to the target => return the left and right
*/

function twoSumSortedArray(nums, targetNum) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const leftElement = nums[left];
    const rightElement = nums[right];

    if (leftElement + rightElement < targetNum) {
      left++;
    } else if (leftElement + rightElement > targetNum) {
      right--;
    } else {
      return [left + 1, right + 1];
    }
  }
}

console.log(twoSumSortedArray([2, 7, 11, 15], 9));
