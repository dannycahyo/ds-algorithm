/*
Three Number Sort
You're given an array of integers and another array of three distinct integers. 
The first array is guaranteed to only contain integers that are in the second array, 
and the second array represents a desired order for the integers in the first array. 
For example, a second array of [x, y, z] represents a desired order of [x, x, ..., x, y, y, ..., y, z, z, ..., z] in the first array.

Write a function that sorts the first array according to the desired order in the second array.

The function should perform this in place (i.e., it should mutate the input array), 
and it shouldn't use any auxiliary space (i.e., it should run with constant space: O(1) space).

Note that the desired order won't necessarily be ascending or descending and 
that the first array won't necessarily contain all three integers found in the second array—it might only contain one or two.

Sample Input
array = [1, 0, 0, -1, -1, 0, 1, 1]
order = [0, 1, -1]
Sample Output
[0, 0, 0, 1, 1, 1, -1, -1]

{
  0: 3,
  1: 3, 
  -1: 2,
}
*/

function threeNumberSort(nums: number[], order: number[]) {
  const orderMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (orderMap.has(num)) {
      orderMap.set(num, orderMap.get(num) + 1);
    } else {
      orderMap.set(num, 1);
    }
  }

  let idx = 0;
  for (const orderNum of order) {
    const count = orderMap.get(orderNum);
    for (let i = 0; i < count; i++) {
      nums[idx] = orderNum;
      idx++;
    }
  }

  return nums;
}

function threeNumberSortII(nums: number[], order: number[]) {
  let firstIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === order[0]) {
      [nums[i], nums[firstIdx]] = [nums[firstIdx], nums[i]];
      firstIdx++;
    } else {
      continue;
    }
  }

  let lastIdx = nums.length - 1;
  for (let j = nums.length - 1; j >= firstIdx; j--) {
    if (nums[j] === order[2]) {
      [nums[j], nums[lastIdx]] = [nums[lastIdx], nums[j]];
      lastIdx--;
    }
  }
  return nums;
}

function threeNumberSortIII(nums: number[], order: number[]) {
  let first = 0;
  let second = 0;
  let third = nums.length - 1;

  while (second < third) {
    const value = nums[second];
    if (value === order[1]) {
      second++;
    } else if (value === order[0]) {
      [nums[second], nums[first]] = [nums[first], nums[second]];
      first++;
      second++;
    } else if (value === order[2]) {
      [nums[second], nums[third]] = [nums[third], nums[second]];
      third--;
    }
  }
  return nums;
}

console.log(threeNumberSortIII([1, 0, 0, -1, -1, 0, 1, 1], [0, 1, -1]));
