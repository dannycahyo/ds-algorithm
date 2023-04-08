/*


Given an array arr, replace every element in that array 
with the greatest element among the elements to its right, 
and replace the last element with -1.

After doing so, return the array.

Example:
Contoh test case pertama
Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
Explanation: 
- index 0 --> the greatest right of index 0 is index 1 (18).
- index 1 --> the greatest right of index 1 is index 4 (6).
- index 2 --> the greatest right of index 2 is index 4 (6).
- index 3 --> the greatest right of index 3 is index 4 (6).
- index 4 --> the greatest right of index 4 is index 5 (1).
- index 5 --> there are no elements to the right of index 5, 
so we put -1.

Contoh test case kedua
Input: arr = [400]
Output: [-1]
Explanation: There are no elements to the right of index 0.

Pseudo Code:
Input: arr = [17,18,5,4,6,1]
- Init variable result
- Looping ke array nya
- Bakal buat array baru tanpa number di index tersebut
 ex: [18, 5, 4, 6, 1]
- Push maximum value dari array baru tersebut ke result
- Result 

*/
/* BIG O Notation 
 - Time Complexity => O(n^2)
 - Space Complexity => O(n)
*/

function replaceNum(nums: number[]): number[] {
  if (nums.length === 1) {
    return [-1];
  }

  const result: number[] = [];

  nums.forEach((num, index) => {
    const newArray = nums.slice(index + 1);
    const maxValue = Math.max(...newArray);
    if (newArray.length === 0) {
      result.push(-1);
    } else {
      result.push(maxValue);
    }
  });

  return result;
}

console.log(replaceNum([17, 18, 5, 4, 6, 1]));
