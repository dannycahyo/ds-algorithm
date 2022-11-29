/*
Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must appear as many times as it shows in both arrays 
and you may return the result in any order.

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

[1,2,2,1] [2] => [2]

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
*/

function intersect(nums1, nums2) {
  return nums1.filter((num) => nums2.includes(num));
}

// TRY TO USE HASH MAP
function intersect2(nums1, nums2) {
  const hashMap = new Map();
  const result = [];

  nums1.forEach((num) => {
    if (hashMap.has(num)) {
      hashMap.set(num, hashMap.get(num) + 1);
    } else {
      hashMap.set(num, 1);
    }
  });

  hashMap;

  nums2.forEach((num) => {
    if (hashMap.get(num)) {
      result.push(num);
      hashMap.set(num, hashMap.get(num) - 1);
    }
  });

  return result;
}

console.log(intersect2([4, 9, 5], [9, 4, 9, 8, 4]));
