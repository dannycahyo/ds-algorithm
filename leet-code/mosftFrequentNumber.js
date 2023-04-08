/*

You are given a 0-indexed integer array nums. 
You are also given an integer key, which is present in nums.

For every unique integer target in nums, 
count the number of times target immediately
follows an occurrence of key in nums. 
In other words, count the number of indices i such that:

0 <= i <= nums.length - 2,
nums[i] == key and,
nums[i + 1] == target.
Return the target with the maximum count. 
The test cases will be generated such that the target with maximum count is unique.


Example:

Input: nums = [1,100,200,1,100], key = 1
1 => 2 Dia sama dengan key sehingga kita ga perlu hitung
100 => 2
200 => 1
Output: 100
Explanation: For target = 100, there are 2 occurrences
at indices 1 and 4 which follow an occurrence of key.
No other integers follow an occurrence of key,
so we return 100.

Input: nums = [2,2,2,2,3], key = 2
2 => 3
3 => 1
Output: 2
Explanation: For target = 2, 
there are 3 occurrences at 
indices 1, 2, and 3 which follow an occurrence of key.
For target = 3, 
there is only one occurrence at index 4 which follows an occurrence of key.
target = 2 has the maximum number of occurrences following an occurrence of key, so we return 2.


Pseudo Code:
===== HASH MAP =====
nums = [100,200,1,100, 2], key = 1

- Init Hash Map u/ memetakan jumlah kemunculan number 
 { 1: 1, 100: 2, 200: 1 }
- Dapetin key dari hash map yg jumlah nya paling banyak
*/

function mostFrequentNumber(nums, key) {
  const map = new Map();

  const indexOfKey = nums.indexOf(key);

  for (let i = indexOfKey + 1; i < nums.length; i++) {
    const num = nums[i];
    map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
  }

  map;

  let mostCountedKeys = 0;
  for (const value of map.values()) {
    mostCountedKeys = Math.max(mostCountedKeys, value);
  }

  //   let mostFrequentKey;
  for (const key of map.keys()) {
    if (map.get(key) === mostCountedKeys) {
      //   mostFrequentKey = key;
      return key;
    }
  }

  return mostFrequentKey;
}

function findMostFrequent(nums, key) {
  const hashMap = new Map();
  let maxCount = 0;
  let maxTarget = null;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === key) {
      const target = nums[i + 1];
      target;
      const count = (hashMap.get(target) || 0) + 1;
      count;
      hashMap.set(target, count);

      if (count > maxCount) {
        maxCount = count;
        maxTarget = target;
      }
    }
  }

  return maxTarget;
}

console.log(findMostFrequent([2, 2, 2, 2, 3], 2));
