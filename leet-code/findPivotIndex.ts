/*




Given an array of integers nums, 
calculate the pivot index of this array.

The pivot index is the index where the sum of all 
the numbers strictly to the left of the index is 
equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, 
then the left sum is 0 because there are no 
elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. I
f no such index exists, return -1.

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2]
= 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] 
= 5 + 6 = 11

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.

Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0


Pseudo Code Example:
Example Cases |> [1,7,3,6,5,6]

- Index ke 0
    |> Left Sum => 0; []
    |> Right Sum => 7 + 3 + 6 + 5 + 6
  Membadingkan apakah left sum === right sum
  Kalo iya kita bisa return index
  Kalo engga, kita bakal lanjut u/ looping;
- Index ke 1
    |> Left Sum => 1; [1]
    |> Right Sum => 3 + 6 + 5 + 6
    left sum !== right sum
- Index ke 2
    |> Left Sum => 1 + 7;
    |> Right Sum => 6 + 5 + 6
    left sum !== right sum
- Index ke 3
    |> Left Sum => 1 + 7 + 3
    |> Right Sum => 5 + 6
    Left sum === right sum
    Return index 3;
*/

function getTotalSum(arr: number[]): number {
  return arr.reduce((acc, val) => acc + val, 0);
}

function getLeftNums(arr: number[], stopIndex: number): number[] {
  const result: number[] = [];

  for (let i = 0; i < stopIndex; i++) {
    result.push(arr[i]);
  }

  return result;
}

function pivotIndex(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    const leftNums = getLeftNums(nums, i);
    const rightNums = nums.slice(i + 1);

    const leftSum = getTotalSum(leftNums);
    const rightSum = getTotalSum(rightNums);

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}

// Expected result => 2
console.log(pivotIndex([-1, -1, 0, 0, -1, -1]));
