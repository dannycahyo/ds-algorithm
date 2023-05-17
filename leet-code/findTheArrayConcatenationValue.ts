/*
You are given a 0-indexed integer array nums.

The concatenation of two numbers is the number 
formed by concatenating their numerals.

For example, the concatenation of 15, 49 is 1549.
The concatenation value of nums is initially equal to 0. 
Perform this operation until nums becomes empty:

- If there exists more than one number in nums, 
pick the first element and last element in nums respectively 
and add the value of their concatenation to the concatenation
value of nums, then delete the first and last element from nums.
- If one element exists, add its value to the concatenation value
of nums, then delete it.

Return the concatenation value of the nums.

EXAMPLES =>
Input: nums = [7,52,2,4]
Output: 596
Explanation: Before performing any operation, 
nums is [7,52,2,4] and concatenation value is 0.
 - In the first operation:
We pick the first element, 7, and the last element, 4.
Their concatenation is 74, and we add it 
to the concatenation value, so it becomes equal to 74.
Then we delete them from nums, so nums becomes equal to [52,2].
 - In the second operation:
We pick the first element, 52, and the last element, 2.
Their concatenation is 522, and we add it to 
the concatenation value, so it becomes equal to 596.
Then we delete them from the nums, so nums becomes empty.
Since the concatenation value is 596 so the answer is 596.

Input: nums = [5,14,13,8,12]
Output: 673
Explanation: Before performing any operation, 
nums is [5,14,13,8,12] and concatenation value is 0.
 - In the first operation:
We pick the first element, 5, and the last element, 12.
Their concatenation is 512, and we add it 
to the concatenation value, so it becomes equal to 512.
Then we delete them from the nums, so nums becomes equal to [14,13,8].
 - In the second operation:
We pick the first element, 14, and the last element, 8.
Their concatenation is 148, and we add it to the 
concatenation value, so it becomes equal to 660.
Then we delete them from the nums, so nums becomes equal to [13].
 - In the third operation:
nums has only one element, so we pick 13 and add it to 
the concatenation value, so it becomes equal to 673.
Then we delete it from nums, so nums become empty.
Since the concatenation value is 673 so the answer is 673.

============= TWO POINTERS ==============

[7,52,2,4]
Perulangan pertama 
 - Concatenation => 74
 - ConcatenationValue = 0 + 74;

Perulangan kedua
 - Concatenation => 522;
 - ConcatenationValue = 74 + 522;


left = 0;
right = array.length - 1;

Looping ke seluruhan isi array 
*Perulangan bakal berhenti kalo left >= right
- Gabungin left element and right element
- Setelah itu aku bakal jumlahin dgn concatenation value
- Move the left pointer to the right
- Move the right pointer to the left
*/
//  Find the Array Concatenation Value
function findTheArrayConcVal(nums: number[]): number {
  if (nums.length === 1) return nums[0];
  let concatenationValue = 0;

  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer < rightPointer) {
    const concatenationLeftAndRight =
      String(nums[leftPointer]) + String(nums[rightPointer]);
    concatenationValue += Number(concatenationLeftAndRight);
    leftPointer++;
    rightPointer--;

    if (leftPointer === rightPointer) {
      concatenationValue += Number(nums[leftPointer]);
    }
  }

  return concatenationValue;
}

// var findTheArrayConcVal = function (nums: number[]): number {
//   if (nums.length === 1) {
//     return nums[0];
//   }

//   if (nums.length === 0) {
//     return 0;
//   }

//   const currentValue = nums[0].toString() + nums[nums.length - 1].toString();

//   nums.pop();
//   nums.shift();

//   return Number(currentValue) + findTheArrayConcVal(nums);
// };

// Pemanggilan function pertama ([5, 14, 13, 8, 12])
// Current value => 512
// Pemanggilan function kedua ([14, 13, 8])

console.log(findTheArrayConcVal([5, 14, 13, 8, 12]));
