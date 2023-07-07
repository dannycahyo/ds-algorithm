/*

Leet Code Question Link => https://leetcode.com/problems/find-the-distance-value-between-two-arrays/

Input: arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2
Output: 2
Explanation: 
For arr1[0]=4 we have: 
|4-10|=6 > d=2 
|4-9|=5 > d=2 
|4-1|=3 > d=2 
|4-8|=4 > d=2 
For arr1[1]=5 we have: 
|5-10|=5 > d=2 
|5-9|=4 > d=2 
|5-1|=4 > d=2 
|5-8|=3 > d=2
For arr1[2]=8 we have:
|8-10|=2 <= d=2
|8-9|=1 <= d=2
|8-1|=7 > d=2
|8-8|=0 <= d=2

You're supposed to count the elements in arr1 that do NOT yield a value <= d when any element from arr2 is subtracted from it. To explain the example;

arr1[0] = 4 doesn't violate the condition. Hence, we count it.
arr1[1] = 5 also doesn't violate the condition. We also count it, bringing our count to two.
arr1[8] = 8 violates the condition, so it isn't counted.

Since that's the end of arr1, the total number of GOOD numbers we have is 2. That's why the output is 2


Input: arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3
Output: 2

Input: arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6
Output: 1
*/

function findTheDistanceValue(
  arr1: number[],
  arr2: number[],
  d: number
): number {
  let distance = 0;
  arr2.sort((a, b) => a - b);

  arr1.forEach((num) => {
    if (isNotLess(arr2, num, d)) {
      distance++;
    }
  });

  return distance;
}

function isNotLess(arr: number[], num: number, d: number) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (Math.abs(num - arr[mid]) <= d) {
      return false;
    } else if (arr[mid] > num) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return true;
}

console.log(findTheDistanceValue([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3));
