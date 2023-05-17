/*







Given an array of integers nums sorted in non-decreasing order,

find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Example:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Input: nums = [], target = 0
Output: [-1,-1]
*/

// =========== LINEAR SOLUTIONS ====== O(n)

// function findFirstAndLast(nums: number[], target: number) {
//   if (nums.length === 0 || !nums.includes(target)) {
//     return [-1, -1];
//   }

//   const result: number[] = [];
//   nums.forEach((num, index) => {
//     if (num === target) {
//       result.push(index);
//     }
//   });

//   return result;
// }

// console.log(findFirstAndLast([5, 7, 7, 8, 8, 10], 8));

// ========== TWO POINTERS ========= O(log n)

// function findFirstAndLast2(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left < right) {
//     const leftNum = nums[left];
//     const rightNum = nums[right];
//     if (leftNum < target) {
//       left++;
//     } else if (rightNum > target) {
//       right--;
//     } else {
//       return [left, right];
//     }
//   }

//   return [-1, -1];
// }

// [0,0]
// console.log(findFirstAndLast2(
//     [1,3], 1));

// function findFirstAndLast3(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left < right) {
//       let mid = ~~(left + (right - left) / 2);
//       const leftNum = nums[left];
//       const rightNum = nums[right];
//       if (leftNum > target) {
//         right = mid--;
//       } else if (leftNum > target) {
//         right = mid--;
//       } else {
//         return [left, right];
//       }
//     }

//     return [-1, -1];
// //   }

function searchRange(nums, target) {
  let left = 0,
    right = nums.length - 1;
  let first = -1,
    last = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      first = mid;
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  (left = 0), (right = nums.length - 1);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      last = mid;
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return [first, last];
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
