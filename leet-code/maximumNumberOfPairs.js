/*
Input: nums = [1,3,2,1,3,2,2]
Output: [3,1]
Explanation:
Form a pair with nums[0] and nums[3] and remove them from nums. Now, nums = [3,2,3,2,2].
Form a pair with nums[0] and nums[2] and remove them from nums. Now, nums = [2,2,2].
Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [2].
No more pairs can be formed. A total of 3 pairs have been formed, and there is 1 number leftover in nums.

Input: nums = [1,1]
Output: [1,0]
Explanation: Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [].
No more pairs can be formed. A total of 1 pair has been formed, and there are 0 numbers leftover in nums.

Pseudo code 
- Init hash map
- Looping through the arrray 
- Determine if is't a pair or not
- Count the pairs and count the number that isn't a pair
*/

function maximumNumberOfPairs(nums) {
  let numOfPairs = 0;
  let numOfNotPairs = 0;
  const hashMap = new Map();

  nums.forEach((num) => {
    if (hashMap.has(num)) {
      hashMap.set(num, hashMap.get(num) + 1);
    } else {
      hashMap.set(num, 1);
    }
  });

  for (const value of hashMap.values()) {
    if (value % 2 === 0) {
      numOfPairs += value / 2;
    } else {
      numOfPairs += ~~(value / 2);
      numOfNotPairs += value % 2;
    }
  }

  return [numOfPairs, numOfNotPairs];
}

console.log(maximumNumberOfPairs([1, 1]));
