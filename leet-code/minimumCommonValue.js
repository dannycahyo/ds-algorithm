/*

Given two integer arrays nums1 and nums2, sorted in non-decreasing order,
return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

Note that an integer is said to be common to nums1
and nums2 if both arrays have at least one occurrence of that integer.


Example:

Input: nums1 = [1,2,3], nums2 = [2,4]
Output: 2
Explanation: 
The smallest element common to both arrays is 2,
so we return 2.

Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
Output: 2
Explanation: There are two common elements in the
array 2 and 3 out of which 2 is the smallest, 
so 2 is returned.
*/

function minimumCommonValue(nums1, nums2) {
  const map = new Map();

  for (let i = 0; i < nums1.length; i++) {
    map.set(nums1[i], 1);
  }

  for (let i = 0; i < nums2.length; i++) {
    if (map.get(nums2[i])) {
      map.set(nums2[i], map.get(nums2[i]) + 1);
    } else {
      map.set(nums2[i], 1);
    }
  }

  let smallestCommomNum = Infinity;
  for (const [key, value] of map) {
    if (value > 1) {
      smallestCommomNum = Math.min(smallestCommomNum, key);
    }
  }
  return smallestCommomNum;
}

console.log(minimumCommonValue([1, 1, 2], [2, 4]));
