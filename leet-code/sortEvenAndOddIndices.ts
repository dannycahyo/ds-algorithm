/*
You are given a 0-indexed integer array nums. 
Rearrange the values of nums according to the following rules:

Sort the values at odd indices of nums in non-increasing order.
For example, if nums = [4,1,2,3] before this step, 
it becomes [4,3,2,1] after. The values at odd indices
1 and 3 are sorted in non-increasing order.
Sort the values at even indices of nums in non-decreasing order.
For example, if nums = [4,1,2,3] before this step, 
it becomes [2,1,4,3] after. The values at even indices
0 and 2 are sorted in non-decreasing order.
Return the array formed after rearranging the values of nums.

======================== SORTING =========================
EXAMPLES:

Input: nums = [4,1,2,3]
- Ada yang ganjil => Urutkan dari terbesar ke terkecil
- Ada yang genap => Urutkan dari terkecil ke terbesar
Output: [2,3,4,1]
Explanation: 
First, we sort the values present at odd 
indices (1 and 3) in non-increasing order.
So, nums changes from [4,1,2,3] to [4,3,2,1].
Next, we sort the values present at even indices 
(0 and 2) in non-decreasing order.
So, nums changes from [4,1,2,3] to [2,3,4,1].
Thus, the array formed after rearranging 
FROM THIS => [4,1,2,3]
TO THIS =>  [2,3,4,1].

Input: nums = [2,1]
Output: [2,1]
Explanation: 
Since there is exactly one odd index and one even index, 
no rearrangement of values takes place.
The resultant array formed is [2,1], 
which is the same as the initial array. 
*/

// function sortEvenAndOddIndices(nums: number[]): number[] {
//   if (nums.length === 2) return nums;
//   const evenNumbers = nums.filter((num) => num % 2 === 0).sort();
//   const oddNumbers = nums.filter((num) => num % 2 !== 0).sort((a, b) => b - a);

//   const sortedNumberBasedOnEvenAndOdd: number[] = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (evenNumbers[i] !== undefined) {
//       sortedNumberBasedOnEvenAndOdd.push(evenNumbers[i]);
//     }
//     if (oddNumbers[i] !== undefined) {
//       sortedNumberBasedOnEvenAndOdd.push(oddNumbers[i]);
//     }
//   }

//   return sortedNumberBasedOnEvenAndOdd;
// }

function sortEvenAndOddIndices(nums) {
  const evenNumbers = nums
    .filter((num, index) => index % 2 === 0)
    .sort((a, b) => a - b);

  const oddNumbers = nums
    .filter((num, index) => index % 2 !== 0)
    .sort((a, b) => b - a);

  return nums.map((_, index) =>
    index % 2 === 0 ? evenNumbers.shift() : oddNumbers.shift()
  );
}

console.log(sortEvenAndOddIndices([4, 1, 2, 3]));
