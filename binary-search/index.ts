/*
Searching Algortihms


Linear Search
EXAMPLES:

Nums =>
[9, 2, 15, 8, 1, 10, 11, 6]

Analysis Time Complexity ???

Target Num => 
10

Binary Search

Nums =>
[1, 2, 6, 8, 9, 10, 11, 15]

Target Num => 6

Sorting Algorithm


*/

/*
Time Complexity Analysis |>

Best Case Scenarios => O(1)
Worst Case Scenarios => O(N)
*/
function linearSearch(nums: number[], target: number): number {
  // for (let i = 0; i < nums.length; i++) {
  //   const num = nums[i];
  //   if (num === target) {
  //     return i;
  //   }
  // }

  // return -1;

  return nums.indexOf(target);
}

console.log(linearSearch([9, 2, 15, 8, 1, 10, 11, 6], 20));

function binarySearch(nums: number[], targetNum: number): number {
  nums.sort();
  let left = 0;
  let right = nums.length - 1;

  do {
    const mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] < targetNum) {
      left = mid + 1;
    } else if (nums[mid] > targetNum) {
      right = mid;
    } else {
      return mid;
    }
  } while (left < right);

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));
