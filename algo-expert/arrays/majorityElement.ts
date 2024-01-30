/*
Write a function that takes in a non-empty, unordered array of positive integers 
and returns the array's majority element without sorting the array and without using more than constant space.

An array's majority element is an element of the array that appears in over half of its indices. 
Note that the most common element of an array (the element that appears the most times in the array) isn't necessarily the array's majority element; 
for example, the arrays [3, 2, 2, 1] and [3, 4, 2, 2, 1] both have 2 as their most common element, yet neither of these arrays have a majority element, 
because neither 2 nor any other element appears in over half of the respective arrays' indices.

You can assume that the input array will always have a majority element.

Sample Input
array = [1, 2, 3, 2, 2, 1, 2]

Sample Output
2 // 2 occurs in 4/7 array indices, making it the majority element
*/

function majorityElement(nums: number[]) {
  const map = new Map();

  for (const num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  let majorityElement = nums[0];
  let maxCount = 0;

  for (const [num, count] of map) {
    if (count > maxCount) {
      maxCount = count;
      majorityElement = num;
    }
  }

  return majorityElement;
}

function majorityElement2(nums: number[]) {
  let count = 0;
  let answer;

  nums.forEach((num) => {
    if (count === 0) {
      answer = num;
    }

    if (num === answer) {
      count++;
    } else {
      count--;
    }
  });

  return answer;
}

const inputNums = [1, 2, 3, 2, 2, 1, 2];
console.log(majorityElement2(inputNums));
