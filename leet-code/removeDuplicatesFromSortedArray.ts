/*





// REMOVE DUPLICATE ELEMENT DARI ARRAY

GIVEN SORTED ARRAY OF NUMS

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, 
with the first two elements of nums 
being 1 and 2 respectively.
It does not matter what you leave beyond 
the returned k (hence they are underscores).

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, 
with the first five elements of nums 
being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond 
the returned k (hence they are underscores).

Pseudo Code =================================

TWO POINTERS
- Looping ke array nya
    - Cek apakah value di pointer pertama itu = pointer kedua
    - Kalo semisal sama, maka aku perlu remove salah 1 number itu 
- Return panjang dari si array nya
*/

function removeDuplicatesFromSortedArray(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }

  return nums.length;
}

function removeDuplicatesFromSortedArray2(nums: number[]): number {
  const filteredArray = nums.filter((num, index, array) => {
    return array.indexOf(num) === index;
  });
  return filteredArray.length;
}

function removeDuplicatesFromSortedArray3(nums: number[]): number {
  const filteredArray = new Set([...nums]);
  return filteredArray.size;
}

console.log(removeDuplicatesFromSortedArray3([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
