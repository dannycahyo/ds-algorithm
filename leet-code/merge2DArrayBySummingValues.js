/*
============= Coding Question =================

Merge the two arrays into one array
that is sorted in ascending order by id,
respecting the following conditions:

- Only ids that appear in at least one 
of the two arrays should be included in the resulting array.
- Each id should be included only once and its value should
be the sum of the values of this id in the two arrays. 
If the id does not exist in one of the two arrays then 
its value in that array is considered to be 0.


- Kalo semisal Key nya ada, kita sum values nya
- Kalo semisal Key nya ga ada, gaperlu sum

[ID, VALUE]
Input: nums1 = [[1,2],[2,3],[4,5]], nums2 = [[1,4],[3,2],[4,1]]
Output: [[1,6],[2,3],[3,2],[4,6]]
Explanation: The resulting array contains the following:
- id = 1, the value of this id is 2 + 4 = 6.
- id = 2, the value of this id is 3.
- id = 3, the value of this id is 2.
- id = 4, the value of this id is 5 + 1 = 6.

ID nya itu unique dan ga ada di nums2, 
Input: nums1 = [[2,4],[3,6],[5,5]], nums2 = [[1,3],[4,3]]
Output: [[1,3],[2,4],[3,6],[4,3],[5,5]]
Explanation: There are no common ids, 
so we just include each id with its value in the resulting list.
*/

function merge2DArrayBySummingValues(nums1, nums2) {
  const map = new Map();

  nums1.forEach((num) => {
    const [key, value] = num;
    map.set(key, value);
  });
  nums2.forEach((num) => {
    const [key, value] = num;
    if (map.has(key)) {
      map.set(key, map.get(key) + value);
    } else {
      map.set(key, value);
    }
  });

  const result = [...map].map(([key, value]) => [key, value]);
  result.sort((a, b) => {
    const x = a[0];
    const y = b[0];
    return x - y;
  });
  return result;
}
console.log(
  merge2DArrayBySummingValues(
    [
      [2, 4],
      [3, 6],
      [5, 5],
    ],
    [
      [1, 3],
      [4, 3],
    ]
  )
);
